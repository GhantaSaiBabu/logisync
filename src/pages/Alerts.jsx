import React, { useState } from 'react';
import { getLiveRiskAnalysis } from '../geminiService'; 
import { ShieldCheck, Zap, Thermometer, MapPin, Wind } from 'lucide-react';

const Alerts = () => {
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  // Dynamic shipment context for Gemini to analyze
  const activeShipment = {
    id: "LS-8832-HYD",
    route: "Chennai Port to Hyderabad Hub",
    weather: "Extreme Rain & Flash Flood Warnings in Telangana",
    cargo: "Perishable Medical Supplies"
  };

  const handleAnalyze = async () => {
    setLoading(true);
    // Real-time API call to Gemini 1.5 Flash
    const result = await getLiveRiskAnalysis(activeShipment.route, activeShipment.weather);
    setAnalysis(result);
    setLoading(false);
  };

  return (
    <div className="ml-72 p-8 bg-slate-50 min-h-screen font-sans animate-in fade-in duration-1000">
      
      {/* Page Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-blue-600 mb-1">
          <ShieldCheck size={18} className="animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Risk Management Protocols Active</span>
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-slate-900">Risk Intelligence <span className="text-blue-600">Center</span></h2>
      </div>
      
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-white max-w-3xl overflow-hidden relative group">
        {/* Background Decoration */}
        <div className="absolute -top-10 -right-10 p-4 opacity-5 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
            <Zap size={200}/>
        </div>
        
        {/* Unit Identity */}
        <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-4">
                <div className="p-4 bg-yellow-400 text-slate-900 rounded-3xl shadow-lg shadow-yellow-200">
                    <Zap className="fill-current" size={28}/>
                </div>
                <div>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tighter uppercase leading-none">{activeShipment.id}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Live Asset Monitoring</p>
                </div>
            </div>
            <div className="text-right">
                <span className="px-4 py-2 bg-red-100 text-red-600 rounded-xl text-[10px] font-black tracking-widest uppercase animate-pulse">High Risk Alert</span>
            </div>
        </div>
        
        {/* Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
           <div className="p-5 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-2 mb-2 text-slate-400">
                  <MapPin size={14}/>
                  <p className="text-[10px] font-bold uppercase tracking-wider">Route</p>
              </div>
              <p className="font-bold text-slate-700 text-sm">{activeShipment.route}</p>
           </div>
           
           <div className="p-5 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-2 mb-2 text-slate-400">
                  <Wind size={14}/>
                  <p className="text-[10px] font-bold uppercase tracking-wider">Climate</p>
              </div>
              <p className="font-bold text-slate-700 text-sm italic">Heavy Monsoon</p>
           </div>

           <div className="p-5 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-2 mb-2 text-slate-400">
                  <Thermometer size={14}/>
                  <p className="text-[10px] font-bold uppercase tracking-wider">Sensors</p>
              </div>
              <p className="font-bold text-slate-700 text-sm">24°C / Stable</p>
           </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={handleAnalyze}
          disabled={loading}
          className="group w-full bg-slate-900 text-white font-black py-5 rounded-[2rem] hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 active:scale-95 disabled:bg-slate-300 tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-3"
        >
          {loading ? (
            <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                GEMINI IS ANALYZING...
            </span>
          ) : (
            <>
              <Zap size={18} className="group-hover:fill-current" />
              GENERATE AI RISK REPORT
            </>
          )}
        </button>

        {/* AI Insight Result Section */}
        {analysis && (
          <div className="mt-10 p-8 bg-blue-600 rounded-[2.5rem] text-white animate-in slide-in-from-bottom-6 duration-700 shadow-2xl shadow-blue-200 relative overflow-hidden">
            <div className="absolute -bottom-4 -right-4 opacity-10">
                <ShieldCheck size={100} />
            </div>
            <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-500 rounded-xl border border-blue-400">
                    <ShieldCheck size={20}/>
                </div>
                <span className="font-black uppercase text-xs tracking-[0.3em]">Gemini 1.5 Flash Insight</span>
                </div>
                <p className="text-blue-50 text-lg font-medium leading-relaxed italic">"{analysis}"</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alerts;