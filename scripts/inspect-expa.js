const axios = require('../backend/node_modules/axios');
const API_URL = 'https://gis-api.aiesec.org/graphql';
const TOKEN = 'Rlk6Tj2BMcVF-3xOrRa67BDLO0PyWJN4-5CGYQzqv1k';

const QUERY = `
  query GetOpps($prog: Int!) {
    allOpportunity(filters: { programmes: [$prog], statuses: ["open", "live", "available", "approved"] }, pagination: { per_page: 25 }) {
      data {
        id
        title
        status
        programme { id short_name }
        host_lc { name }
        organisation { name }
        slots { start_date end_date status available_openings }
      }
      paging { total_items total_pages }
    }
  }
`;

async function test() {
  for (const prog of [1, 2, 5, 7, 8, 9]) {
    try {
      const res = await axios.post(API_URL, { query: QUERY, variables: { prog } }, { headers: { Authorization: TOKEN } });
      const data = res.data?.data?.allOpportunity;
      console.log('Prog ' + prog + ' total items:', data?.paging?.total_items, 'data count:', data?.data?.length);
      if (data?.data?.length) {
        data.data.forEach(d => console.log('  [' + d.id + '] ' + d.title + ' | host: ' + d.host_lc?.name + ' | slots: ' + d.slots?.length));
      }
    } catch (e) {
      console.error('Prog ' + prog + ' error:', e.message);
    }
  }
}

test();
