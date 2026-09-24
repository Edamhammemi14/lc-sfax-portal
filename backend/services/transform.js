/**
 * services/transform.js
 *
 * Reproduces the EXACT business logic from the Google Apps Script:
 *
 *  1. Filter opportunities by status (open / live / available / approved)
 *  2. Filter slots:
 *       – start_date >= today
 *       – available_openings > 0
 *       – slot status is open / live / available
 *  3. Merge slots that share the same start_date + end_date (sum openings)
 *  4. Format every opportunity into a clean, frontend-ready object
 */

const feeMap = require('../data/fees');

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const VALID_OPP_STATUSES  = new Set(['open', 'live', 'available', 'approved']);
const VALID_SLOT_STATUSES = new Set(['open', 'live', 'available']);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Returns today's date at midnight (local) as a string YYYY-MM-DD */
function todayStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/**
 * Formats a raw API date string to "DD MMM YYYY" (e.g. "14 Jun 2025")
 * Returns the original string if parsing fails.
 */
function formatDate(raw) {
  if (!raw) return '';
  const d = new Date(raw);
  if (isNaN(d)) return raw;
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

/**
 * Comma-joins an array of strings, deduplicating and trimming.
 * @param {string[]} arr
 */
function joinList(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return '';
  return [...new Set(arr.map((s) => String(s).trim()).filter(Boolean))].join(', ');
}

/**
 * Derives accommodation label from logistics_info.
 * Mirrors the Google Apps Script logic.
 */
function getAccommodation(logistics) {
  if (!logistics) return 'None';
  if (logistics.accommodation_covered)  return 'Covered';
  if (logistics.accommodation_provided) return 'Provided';
  return 'None';
}

/**
 * Derives meals availability from logistics_info.
 */
function getMeals(logistics) {
  if (!logistics) return false;
  return !!(logistics.food_covered || logistics.food_provided);
}

/**
 * Looks up the fee for an opportunity.
 * Falls back to "Free" if not found.
 */
function getFee(id) {
  const key = String(id);
  if (feeMap[key] !== undefined) return feeMap[key];
  return 'Free';
}

// ---------------------------------------------------------------------------
// Core slot processing (Steps 2 & 3)
// ---------------------------------------------------------------------------

/**
 * Filters and merges slots for a single opportunity.
 *
 * @param {Array} slots  – raw slots from API
 * @returns {Array}      – merged, valid slots
 */
function processSlots(slots) {
  if (!Array.isArray(slots) || slots.length === 0) return [];

  const today = todayStr();

  // Step 2: Filter slots
  const validSlots = slots.filter((slot) => {
    const startDate     = slot.start_date ?? '';
    const openings      = Number(slot.available_openings ?? 0);
    const slotStatus    = (slot.status ?? '').toLowerCase();

    return (
      startDate >= today &&            // start_date >= today
      openings > 0 &&                  // has available openings
      VALID_SLOT_STATUSES.has(slotStatus) // valid slot status
    );
  });

  // Step 3: Merge slots with same start_date + end_date by summing openings
  const merged = new Map(); // key = "start_date|end_date"

  validSlots.forEach((slot) => {
    const key = `${slot.start_date}|${slot.end_date}`;
    if (merged.has(key)) {
      merged.get(key).openings += Number(slot.available_openings ?? 0);
    } else {
      merged.set(key, {
        start_date: slot.start_date,
        end_date:   slot.end_date,
        openings:   Number(slot.available_openings ?? 0),
      });
    }
  });

  return Array.from(merged.values());
}

// ---------------------------------------------------------------------------
// Transform a single raw opportunity into a clean frontend object
// ---------------------------------------------------------------------------

/**
 * @param {Object} opp – raw opportunity from GIS API
 * @returns {Object}   – clean, formatted opportunity object
 */
function transformOpportunity(opp) {
  const logistics = opp.logistics_info ?? {};

  // Helper to safely get an array from a field
  const safeArray = (val) => {
    if (Array.isArray(val)) return val;
    if (val && typeof val === 'object') return [val]; // handle single object as array
    return [];
  };

  // Skills  – API returns { constant_name: "skill_name" }
  const skills = safeArray(opp.skills).map((s) => s?.constant_name).filter(Boolean);

  // Backgrounds – same shape
  const backgrounds = safeArray(opp.backgrounds).map((b) => b?.constant_name).filter(Boolean);

  // Languages – constant_name directly on the object
  const languages = safeArray(opp.languages).map((l) => l?.constant_name).filter(Boolean);

  // SDGs – nested under sdg_target.goal_index or sdg_goal
  const sdgs = safeArray(opp.sdg_info)
    .map((info) => {
      // Try both common GIS paths for SDGs
      const idx = info?.sdg_target?.goal_index ?? info?.sdg_goal?.goal_index;
      return idx != null ? `SDG ${idx}` : null;
    })
    .filter(Boolean);

  // Provider: prefer organisation name, fall back to host LC
  const provider = opp.organisation?.name ?? opp.host_lc?.name ?? 'AIESEC';

  // Process slots
  const slots = processSlots(opp.slots);

  // Total openings summed across all valid merged slots
  const totalOpenings = slots.reduce((sum, s) => sum + s.openings, 0);

  // Use the earliest valid slot for start/end dates displayed on cards
  const earliestSlot = slots.length > 0
    ? slots.reduce((a, b) => (a.start_date <= b.start_date ? a : b))
    : null;

  return {
    id:            opp.id,
    title:         opp.title ?? 'Untitled Opportunity',
    provider,
    skills:        joinList(skills),
    backgrounds:   joinList(backgrounds),
    languages:     joinList(languages),
    sdgs:          joinList(sdgs),
    meals:         getMeals(logistics),
    accommodation: getAccommodation(logistics),
    fee:           getFee(opp.id),
    start_date:    earliestSlot ? formatDate(earliestSlot.start_date) : '',
    end_date:      earliestSlot ? formatDate(earliestSlot.end_date)   : '',
    openings:      totalOpenings,
    // Include all slot details for frontend to show timeline if needed
    slots:         slots.map((s) => ({
      start_date: formatDate(s.start_date),
      end_date:   formatDate(s.end_date),
      openings:   s.openings,
    })),
  };
}

// ---------------------------------------------------------------------------
// Main export: transform a list of raw opportunities
// ---------------------------------------------------------------------------

/**
 * Applies all business logic filters and transforms raw API data.
 *
 * @param {Array} rawOpportunities – array from fetchAllOpportunities()
 * @returns {Array}               – clean, filtered, formatted opportunities
 */
function transformOpportunities(rawOpportunities) {
  return rawOpportunities
    // Step 1: Filter by opportunity status
    .filter((opp) => {
      const status = (opp.status ?? '').toLowerCase();
      return VALID_OPP_STATUSES.has(status);
    })
    // Transform each opportunity
    .map(transformOpportunity)
    // Step 4: Only keep opportunities that have at least one valid slot
    .filter((opp) => opp.slots.length > 0 && opp.openings > 0)
    // Sort by nearest start date
    .sort((a, b) => {
      if (!a.slots[0]?.start_date) return 1;
      if (!b.slots[0]?.start_date) return -1;
      return a.slots[0].start_date.localeCompare(b.slots[0].start_date);
    });
}

module.exports = { transformOpportunities };
