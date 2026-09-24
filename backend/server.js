/**
 * server.js – AIESEC LC Sfax Opportunities Backend
 *
 * Endpoints:
 *   GET  /health          – liveness check
 *   GET  /api/igv         – iGV opportunities  (programme 7)
 *   GET  /api/igta        – iGTa opportunities (programme 8)
 *   GET  /api/igte        – iGTe opportunities (programme 9)
 *   GET  /api/all         – all 3 programmes combined
 *
 *   POST /api/igv/refresh  )
 *   POST /api/igta/refresh ) – bust cache for that programme
 *   POST /api/igte/refresh )
 *   POST /api/all/refresh  )
 */

require('dotenv').config();

const express = require('express');
const cors    = require('cors');

const igvRouter  = require('./routes/igv');
const igtaRouter = require('./routes/igta');
const igteRouter = require('./routes/igte');
const allRouter  = require('./routes/all');
const cache      = require('./services/cache');

// ── Validate required env vars ──────────────────────────────────────────────
if (!process.env.EXPA_TOKEN) {
  console.error('[startup] ❌  EXPA_TOKEN is not set. Add it to your .env file.');
  process.exit(1);
}

const app  = express();
const PORT = Number(process.env.PORT) || 3001;

// ── Middleware ───────────────────────────────────────────────────────────────
app.use(cors());

app.use(express.json());

// Request logger
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// ── Health check ─────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({
    status:    'ok',
    timestamp: new Date().toISOString(),
    uptime:    Math.round(process.uptime()),
  });
});

// Flush entire cache (useful during development)
app.post('/api/cache/flush', (_req, res) => {
  cache.flush();
  res.json({ message: 'Full cache cleared' });
});

// ── Programme routes ─────────────────────────────────────────────────────────
app.use('/api/igv',  igvRouter);
app.use('/api/igta', igtaRouter);
app.use('/api/igte', igteRouter);
app.use('/api/all',  allRouter);

// ── 404 handler ──────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ── Global error handler ──────────────────────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error('[unhandled error]', err);
  res.status(500).json({ error: 'Internal server error', details: err.message });
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log('');
  console.log('  🚀  IGV Backend is running');
  console.log(`  ➜   Local:   http://localhost:${PORT}`);
  console.log(`  ➜   Health:  http://localhost:${PORT}/health`);
  console.log(`  ➜   iGV:     http://localhost:${PORT}/api/igv`);
  console.log(`  ➜   iGTa:    http://localhost:${PORT}/api/igta`);
  console.log(`  ➜   iGTe:    http://localhost:${PORT}/api/igte`);
  console.log(`  ➜   All:     http://localhost:${PORT}/api/all`);
  console.log('');
});
