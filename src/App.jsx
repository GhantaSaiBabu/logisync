import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LayoutDashboard, TrendingUp, AlertTriangle, MapPin } from 'lucide-react';

// Import your custom pages
import Alerts from './pages/Alerts';
import Forecast from './pages/Forecast';
import Tracker from './pages/Tracker';
import Dashboard from './pages/Dashboard'; // Corrected the import name

// Simple Sidebar Component
const Sidebar = () => (
  <div className="w-64 bg-slate-900 h-screen text-white p-5 fixed shadow-xl">
    <h1 className="text-2xl font-bold mb-10 text-blue-400 tracking-tight">LogiSync AI</h1>
    <nav className="space-y-4">
      <Link to="/" className="flex items-center space-x-3 p-3 hover:bg-slate-800 rounded-lg transition-colors">
        <LayoutDashboard size={20}/> <span>Dashboard</span>
      </Link>
      <Link to="/forecast" className="flex items-center space-x-3 p-3 hover:bg-slate-800 rounded-lg transition-colors">
        <TrendingUp size={20}/> <span>Demand Forecast</span>
      </Link>
      <Link to="/alerts" className="flex items-center space-x-3 p-3 hover:bg-slate-800 rounded-lg transition-colors">
        <AlertTriangle size={20}/> <span>Risk Alerts</span>
      </Link>
      <Link to="/tracker" className="flex items-center space-x-3 p-3 hover:bg-slate-800 rounded-lg transition-colors">
        <MapPin size={20}/> <span>Live Tracker</span>
      </Link>
    </nav>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex bg-slate-50 min-h-screen">
        <Sidebar />
        {/* Main Content Area */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/tracker" element={<Tracker />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;