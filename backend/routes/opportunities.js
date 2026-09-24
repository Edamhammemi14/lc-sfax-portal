/**
 * routes/opportunities.js
 *
 * Shared route factory used by igv, igta, igte, and all.
 * Each programme endpoint is generated from this factory.
 */

const { Router } = require('express');
const { fetchAllOpportunities } = require('../services/api');
const { transformOpportunities } = require('../services/transform');
const cache = require('../services/cache');

const PROGRAMMES = {
  igv:  7,
  igta: 8,
  igte: 9,
};

/**
 * Creates a router for a specific programme (or all programmes).
 *
 * @param {string|'all'} programmeKey  – "igv" | "igta" | "igte" | "all"
 */
function createOpportunityRouter(programmeKey) {
  const router = Router();

  router.get('/', async (req, res) => {
    try {
      const cacheKey = `opps:${programmeKey}`;

      // ---- Cache hit ----
      const cached = cache.get(cacheKey);
      if (cached) {
        console.log(`[cache] HIT  → ${cacheKey}`);
        return res.json({
          source:  'cache',
          count:   cached.length,
          data:    cached,
        });
      }

      console.log(`[cache] MISS → ${cacheKey} — fetching from GIS API...`);

      // ---- Fetch from EXPA GIS ----
      let rawData = [];

      if (programmeKey === 'all') {
        // Fetch all 3 programmes in parallel
        const [igv, igta, igte] = await Promise.all([
          fetchAllOpportunities(PROGRAMMES.igv),
          fetchAllOpportunities(PROGRAMMES.igta),
          fetchAllOpportunities(PROGRAMMES.igte),
        ]);
        rawData = [...igv, ...igta, ...igte];
      } else {
        rawData = await fetchAllOpportunities(PROGRAMMES[programmeKey]);
      }

      // ---- Transform & filter ----
      const results = transformOpportunities(rawData);

      // ---- Store in cache ----
      cache.set(cacheKey, results);

      return res.json({
        source:  'api',
        count:   results.length,
        data:    results,
      });

    } catch (err) {
      console.error(`[error] ${programmeKey}:`, err.message);
      return res.status(502).json({
        error:   'Failed to fetch opportunities from AIESEC GIS API',
        details: err.message,
      });
    }
  });

  // ---- Optional: bust cache for this programme ----
  router.post('/refresh', (req, res) => {
    cache.invalidate(`opps:${programmeKey}`);
    res.json({ message: `Cache cleared for ${programmeKey}` });
  });

  return router;
}

module.exports = { createOpportunityRouter };
