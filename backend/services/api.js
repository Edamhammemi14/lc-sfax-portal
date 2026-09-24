/**
 * services/api.js
 *
 * Handles all communication with the AIESEC GIS GraphQL API.
 * Fetches ALL pages for a given programme and returns raw opportunity data.
 */

const axios = require('axios');

const API_URL = process.env.EXPA_API_URL || 'https://gis-api.aiesec.org/graphql';
const TOKEN   = process.env.EXPA_TOKEN;
const PER_PAGE = 25; // max per request

// ---------------------------------------------------------------------------
// GraphQL query – matches the real AIESEC GIS API schema
// ---------------------------------------------------------------------------
const OPPORTUNITY_QUERY = `
  query GetOpportunities($programme: Int!, $page: Int, $per_page: Int) {
    allOpportunity(
      filters: {
        programmes: [$programme]
        statuses: ["open", "live", "available", "approved"]
      }
      pagination: { page: $page, per_page: $per_page }
    ) {
      data {
        id
        title
        status

        organisation {
          name
        }

        host_lc {
          name
        }

        skills {
          constant_name
        }

        backgrounds {
          constant_name
        }

        languages {
          constant_name
        }

        sdg_info {
          sdg_target {
            goal_index
          }
        }

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

      paging {
        total_pages
        current_page
      }
    }
  }
`;

/**
 * Fetches a single page of opportunities.
 * @param {number} programmeId
 * @param {number} page
 * @returns {Promise<{ data: Array, paging: Object }>}
 */
async function fetchPage(programmeId, page = 1) {
  const response = await axios.post(
    API_URL,
    {
      query: OPPORTUNITY_QUERY,
      variables: {
        programme: programmeId,
        page,
        per_page: PER_PAGE,
      },
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: TOKEN,
      },
      timeout: 15000, // 15s timeout per request
    }
  );

  if (response.data.errors) {
    const msg = response.data.errors.map((e) => e.message).join(', ');
    throw new Error(`GIS GraphQL error: ${msg}`);
  }

  const result = response.data.data?.allOpportunity;
  if (!result) throw new Error('Unexpected API response structure');
  return result;
}

/**
 * Fetches ALL pages for a given programme ID.
 * @param {number} programmeId
 * @returns {Promise<Array>} Raw opportunity objects from the API
 */
async function fetchAllOpportunities(programmeId) {
  console.log(`[api] Fetching programme ${programmeId} – page 1...`);

  const firstPage = await fetchPage(programmeId, 1);
  const totalPages = firstPage.paging?.total_pages ?? 1;
  let allData = [...(firstPage.data ?? [])];

  // Fetch remaining pages in parallel (up to 5 at a time to be polite)
  if (totalPages > 1) {
    const remainingPages = Array.from({ length: totalPages - 1 }, (_, i) => i + 2);

    // Chunk into groups of 5
    for (let i = 0; i < remainingPages.length; i += 5) {
      const chunk = remainingPages.slice(i, i + 5);
      console.log(`[api] Programme ${programmeId} – fetching pages ${chunk.join(', ')}...`);

      const results = await Promise.all(chunk.map((p) => fetchPage(programmeId, p)));
      results.forEach((r) => allData.push(...(r.data ?? [])));
    }
  }

  console.log(`[api] Programme ${programmeId} – fetched ${allData.length} total opportunities.`);
  return allData;
}

module.exports = { fetchAllOpportunities };
