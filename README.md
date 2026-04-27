# 🚛 LogiSync — AI-Powered Supply Chain Resilience Platform

<div align="center">

![LogiSync Banner](https://img.shields.io/badge/LogiSync-Supply%20Chain%20AI-1A73E8?style=for-the-badge&logo=google-cloud&logoColor=white)

[![Built with React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Vertex AI](https://img.shields.io/badge/Vertex%20AI-EA4335?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/vertex-ai)
[![Google Maps](https://img.shields.io/badge/Google%20Maps-34A853?style=for-the-badge&logo=google-maps&logoColor=white)](https://developers.google.com/maps)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**Predict. Reroute. Deliver.**

*Submitted for Google Hack2Skill — Solution Challenge 2026*
*Problem Statement: Smart Supply Chains (Open Innovation)*

[🌐 Live Demo](https://logisync.web.app) • [🎥 Demo Video](https://youtu.be/logisync-demo) • [📊 Presentation](./LogiSync_Hack2Skill.pdf)

</div>

---

## 🔍 The Problem

Every day, businesses lose **crores of rupees** due to supply chain disruptions — delayed shipments, stockouts, route blockages, and unreliable suppliers. Most existing tools are **reactive**: they tell you *after* something goes wrong.

> **LogiSync is predictive.** It tells you *before* things go wrong.

---

## 💡 Our Solution

LogiSync is an AI-driven supply chain management platform that:

- 🔮 **Predicts** demand spikes and supplier delays **7–14 days in advance**
- 🗺️ **Reroutes** shipments automatically when disruptions are detected
- 🤖 **Explains** risks in plain language using Gemini AI
- 📊 **Tracks** every shipment in real-time on a unified dashboard
- ⚡ **Scores** suppliers by reliability using ML-powered ratings

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND LAYER                        │
│         React.js PWA  +  Tailwind CSS                   │
│   Dashboard │ Forecast │ Alerts │ Tracker │ Analytics   │
└──────────────────────┬──────────────────────────────────┘
                       │ REST API
┌──────────────────────▼──────────────────────────────────┐
│                    BACKEND LAYER                         │
│          Node.js + Express  →  Cloud Run (GCP)          │
│              Firebase Realtime DB (live sync)           │
└──────────┬────────────────────────┬─────────────────────┘
           │                        │
┌──────────▼──────────┐  ┌─────────▼──────────────────────┐
│    AI / ML LAYER    │  │         DATA & MAPS LAYER       │
│  Vertex AI AutoML   │  │  BigQuery  │  Cloud Storage     │
│  (Demand Forecast)  │  │  Google Maps Routes API         │
│  Gemini 1.5 Flash   │  │  Distance Matrix API            │
│  (Risk Summaries)   │  └────────────────────────────────┘
└─────────────────────┘
```

---

## ✨ Key Features

| Feature | Description | Tech |
|---|---|---|
| 🔮 AI Demand Forecasting | Predicts stock needs per region, 14-day window | Vertex AI AutoML |
| 💬 Gemini Risk Insights | Natural language supply chain health summaries | Gemini 1.5 Flash |
| 🗺️ Smart Re-routing | Alternate routes on disruption detection | Google Maps Routes API |
| 📡 Live Shipment Tracker | Real-time status + ETA for all shipments | Firebase Realtime DB |
| ⚠️ Disruption Alert Engine | Automated alerts on route/supplier anomalies | Node.js + Firebase |
| 📊 Supplier Risk Scorecard | ML-powered reliability ratings | Vertex AI + BigQuery |
| 📈 Analytics Dashboard | Historical trends, KPIs, performance reports | BigQuery + Recharts |
| 🔐 Multi-role Access | Admin, Warehouse Manager, Logistics Team | Firebase Auth |

---

## 🛠️ Tech Stack

### Google Cloud Platform
- **Gemini 1.5 Flash API** — Natural language risk analysis
- **Vertex AI** — Demand forecasting model (AutoML)
- **Firebase** — Realtime DB, Hosting, Authentication
- **BigQuery** — Analytics data warehouse
- **Cloud Run** — Containerized backend deployment
- **Google Maps Platform** — Routes API + Distance Matrix

### Application
- **Frontend:** React.js + Tailwind CSS
- **Backend:** Node.js + Express.js
- **Charts:** Recharts
- **Routing:** React Router DOM

---

## 🚀 Getting Started

### Prerequisites
```bash
node >= 18.x
npm >= 9.x
Firebase CLI
```

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/logisync.git
cd logisync

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in your Firebase + Gemini API keys

# 4. Start development server
npm start
```

### Environment Variables

Create a `.env` file in the root:

```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=logisync.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL=https://logisync-default-rtdb.firebaseio.com
REACT_APP_FIREBASE_PROJECT_ID=logisync
REACT_APP_GEMINI_API_KEY=your_gemini_api_key
REACT_APP_GOOGLE_MAPS_KEY=your_maps_api_key
```

### Deploy to Firebase

```bash
npm run build
firebase login
firebase init hosting
firebase deploy
```

---

## 📱 Screenshots

> Dashboard, Forecast, Alerts, and Tracker screens — see [Demo Video](https://youtu.be/logisync-demo)

---

## 🗺️ Roadmap

- [x] MVP Dashboard with KPI cards
- [x] Gemini AI risk summaries
- [x] Real-time shipment tracker (Firebase)
- [x] Demand forecast chart (Vertex AI)
- [x] Google Maps re-routing
- [ ] IoT sensor integration for warehouse auto-update
- [ ] WhatsApp/SMS alerts for field teams
- [ ] Multi-language support (Hindi, Telugu)
- [ ] SaaS subscription model for SME logistics
- [ ] Blockchain supplier verification layer
- [ ] Zoho / SAP / Tally ERP integration

---

## 👥 Team

| Name | Role |
|---|---|
| **Ghanta Saibabu** | Full Stack Developer + AI Integration |

---

## 🏆 Hackathon

This project was built for **Google Hack2Skill — Solution Challenge 2026**

- **Event:** [Solution Challenge 2026 — Build with AI](https://hack2skill.com/event/solution-challenge-2026/)
- **Problem Statement:** Smart Supply Chains — Open Innovation
- **Track:** AI + Cloud

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">

Built with ❤️ using Google Cloud + React

⭐ Star this repo if you found it useful!

</div>
