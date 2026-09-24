# AIESEC Opportunities Backend

A Node.js + Express backend that replaces your Google Apps Script. It fetches real-time opportunities from the AIESEC GIS API, processes them according to your business logic, and serves them via clean JSON endpoints.

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v16 or higher)
- Your AIESEC GIS API Token

### 2. Installation
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

### 3. Configuration
Create a `.env` file in the `backend` directory (one has been created for you):
```env
EXPA_TOKEN=your_real_token_here
EXPA_API_URL=https://gis-api.aiesec.org/graphql
PORT=3001
FRONTEND_URL=http://localhost:5173
CACHE_TTL=300000
```

### 4. Customizing Fees
Edit `backend/data/fees.js` to add your specific opportunity fees (simulates your Google Sheet fee column):
```javascript
const feeMap = {
  "1234567": "100 EUR",
  "8901234": "Free",
};
```

### 5. Running the Server

#### Development (with auto-reload):
```bash
npm run dev
```

#### Production:
```bash
npm start
```

## 📡 API Endpoints

- **Health Check**: `GET /health`
- **iGV (Global Volunteer)**: `GET /api/igv`
- **iGTa (Global Talent)**: `GET /api/igta`
- **iGTe (Global Teacher)**: `GET /api/igte`
- **All Combined**: `GET /api/all`

## 🛠️ Features

- **Automated Pagination**: Fetches all available opportunities from GIS, not just the first page.
- **Smart Filtering**: Only shows "Open/Live/Available/Approved" opportunities with valid future slots.
- **Slot Merging**: Automatically sums openings for slots with identical dates.
- **In-Memory Caching**: Results are cached for 5-10 minutes to ensure high performance and avoid API rate limits.
- **Data Transformation**: Converts complex GIS response objects into simple, localized strings (SDG names, accommodation labels, etc.).
