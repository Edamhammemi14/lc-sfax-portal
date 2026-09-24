/**
 * services/cache.js
 *
 * Simple in-memory cache with TTL.
 * Avoids hammering the GIS API on every request.
 */

const CACHE_TTL = Number(process.env.CACHE_TTL) || 300_000; // default 5 min

const store = new Map(); // key → { data, expiresAt }

/**
 * Returns cached data for a key if still fresh, otherwise null.
 * @param {string} key
 */
function get(key) {
  const entry = store.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    store.delete(key);
    return null;
  }
  return entry.data;
}

/**
 * Stores data in the cache for TTL milliseconds.
 * @param {string} key
 * @param {*}      data
 */
function set(key, data) {
  store.set(key, { data, expiresAt: Date.now() + CACHE_TTL });
}

/**
 * Manually invalidates a cache entry.
 */
function invalidate(key) {
  store.delete(key);
}

/** Clears the entire cache. */
function flush() {
  store.clear();
}

module.exports = { get, set, invalidate, flush };
