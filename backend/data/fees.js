/**
 * fees.js – Fee map for AIESEC opportunities
 *
 * Simulates the fee column from your Google Sheet.
 * Key   = opportunity ID (as a string or number)
 * Value = fee label string shown on the frontend
 *
 * Examples:
 *   "12345": "50 EUR"
 *   "67890": "Free"
 *
 * If an opportunity ID is NOT in this map the transform layer
 * will fall back to "Free".
 */

const feeMap = {
  // Add entries as:  "<opportunity_id>": "<fee string>"
  // e.g.
  // "1234567": "100 EUR",
  // "8901234": "Free",
};

module.exports = feeMap;
