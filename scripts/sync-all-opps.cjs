const axios = require('../backend/node_modules/axios');
const fs = require('fs');

const API_URL = 'https://gis-api.aiesec.org/graphql';
const TOKEN = 'Rlk6Tj2BMcVF-3xOrRa67BDLO0PyWJN4-5CGYQzqv1k';

const QUERY = `
  query GetOpps($prog: Int!, $page: Int) {
    allOpportunity(filters: { programmes: [$prog], statuses: ["open", "live", "available", "approved"] }, pagination: { page: $page, per_page: 25 }) {
      data {
        id
        title
        status
        programme { id short_name }
        host_lc { name }
        organisation { name }
        skills { constant_name }
        backgrounds { constant_name }
        languages { constant_name }
        logistics_info {
          accommodation_covered
          accommodation_provided
          food_covered
          food_provided
        }
        slots {
          start_date
          end_date
          status
          available_openings
        }
      }
      paging { total_items total_pages current_page }
    }
  }
`;

function formatDate(raw) {
  if (!raw) return 'Rolling Intake';
  const d = new Date(raw);
  if (isNaN(d)) return raw;
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function joinList(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return '';
  return [...new Set(arr.map((s) => String(s).trim()).filter(Boolean))].join(', ');
}

function getAccommodation(logistics) {
  if (!logistics) return 'Covered';
  if (logistics.accommodation_covered) return 'Covered';
  if (logistics.accommodation_provided) return 'Provided';
  return 'Covered';
}

function getMeals(logistics) {
  if (!logistics) return true;
  return !!(logistics.food_covered || logistics.food_provided);
}

async function fetchProgram(progId, tag, gradient, progPath) {
  const allData = [];
  try {
    const firstRes = await axios.post(API_URL, { query: QUERY, variables: { prog: progId, page: 1 } }, { headers: { Authorization: TOKEN } });
    const firstResult = firstRes.data?.data?.allOpportunity;
    if (firstResult?.data) allData.push(...firstResult.data);
    const totalPages = firstResult?.paging?.total_pages || 1;

    for (let p = 2; p <= totalPages; p++) {
      const res = await axios.post(API_URL, { query: QUERY, variables: { prog: progId, page: p } }, { headers: { Authorization: TOKEN } });
      const result = res.data?.data?.allOpportunity;
      if (result?.data) allData.push(...result.data);
    }
  } catch (err) {
    console.error(`Error fetching prog ${progId}:`, err.message);
  }

  return allData.map(opp => {
    const logistics = opp.logistics_info || {};
    const skills = (opp.skills || []).map(s => s?.constant_name).filter(Boolean);
    const backgrounds = (opp.backgrounds || []).map(b => b?.constant_name).filter(Boolean);
    const languages = (opp.languages || []).map(l => l?.constant_name).filter(Boolean);

    const rawSlots = opp.slots || [];
    const totalOpenings = rawSlots.reduce((acc, s) => acc + (Number(s.available_openings) || 0), 0) || 2;
    const earliestSlot = rawSlots[0];

    return {
      id: String(opp.id),
      title: opp.title || 'Untitled Opportunity',
      provider: opp.organisation?.name || opp.host_lc?.name || 'AIESEC in Sfax',
      skills: joinList(skills) || (tag === 'GT' ? 'Software & Business' : tag === 'GTe' ? 'Language Teaching' : 'Community Leadership'),
      backgrounds: joinList(backgrounds) || (tag === 'GT' ? 'Engineering / Business' : tag === 'GTe' ? 'Education' : 'Youth Leadership'),
      languages: joinList(languages) || 'English',
      sdgs: tag === 'GV' ? 'SDG 4, SDG 17' : tag === 'GT' ? 'SDG 8, SDG 9' : 'SDG 4, SDG 10',
      meals: getMeals(logistics),
      accommodation: getAccommodation(logistics),
      fee: 'Free',
      start_date: earliestSlot?.start_date ? formatDate(earliestSlot.start_date) : 'Flexible Dates',
      end_date: earliestSlot?.end_date ? formatDate(earliestSlot.end_date) : 'Flexible Dates',
      openings: totalOpenings,
      slots: rawSlots.map(s => ({
        start_date: formatDate(s.start_date),
        end_date: formatDate(s.end_date),
        openings: Number(s.available_openings) || 1
      })),
      tag,
      gradient,
      url: `https://aiesec.org/opportunity/${progPath}/${opp.id}`
    };
  });
}

async function run() {
  console.log('Fetching all programs from AIESEC EXPA...');
  const [gvList, gtList, gteList] = await Promise.all([
    fetchProgram(7, 'GV', 'linear-gradient(135deg, rgba(248,90,64,0.12), rgba(248,90,64,0.05))', 'global-volunteer'),
    fetchProgram(8, 'GT', 'linear-gradient(135deg, rgba(12,185,193,0.12), rgba(12,185,193,0.05))', 'global-talent'),
    fetchProgram(9, 'GTe', 'linear-gradient(135deg, rgba(244,137,36,0.12), rgba(244,137,36,0.05))', 'global-teacher')
  ]);

  const all = [...gvList, ...gtList, ...gteList];
  console.log(`Synced successfully: GV (${gvList.length}), GT (${gtList.length}), GTe (${gteList.length}). Total = ${all.length}`);

  const content = 'export const fallbackOpportunities = ' + JSON.stringify(all, null, 2) + ';\n';
  fs.writeFileSync('src/data/fallbackOpportunities.js', content, 'utf-8');
  console.log('Updated src/data/fallbackOpportunities.js with ALL opportunities!');
}

run().catch(console.error);
