import React, { useState } from 'react';
import { 
  Truck, 
  AlertCircle, 
  CheckCircle, 
  Zap, 
  TrendingUp, 
  Package, 
  MapPin,
  Globe,
  ShieldCheck
} from 'lucide-react';
import { getLiveRiskAnalysis } from '../geminiService';

const Dashboard = () => {
  const [aiInsight, setAiInsight] = useState("Click 'RUN AI PREDICTION' to activate Gemini 1.5 Flash analysis...");
  const [loading, setLoading] = useState(false);

  const stats = [
    { label: "Active Fleets", val: "42", color: "text-blue-600", bg: "bg-blue-50", icon: <Truck size={20}/> },
    { label: "Risk Alerts", val: "03", color: "text-red-600", bg: "bg-red-50", icon: <AlertCircle size={20}/> },
    { label: "On-Time Rate", val: "98%", color: "text-green-600", bg: "bg-green-50", icon: <CheckCircle size={20}/> }
  ];

  const handleAIAnalysis = async () => {
    setLoading(true);
    setAiInsight("Connecting to Google Cloud Vertex AI & Gemini...");
    
    // Pass dynamic context to make it feel real-time
    const result = await getLiveRiskAnalysis(
      "Mumbai Port to Delhi NCR Corridor", 
      "Severe Monsoon Conditions & Highway Congestion"
    );
    
    setAiInsight(result);
    setLoading(false);
  };

  return (
    <div className="ml-72 p-8 bg-slate-50 min-h-screen font-sans text-slate-900 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Globe className="text-blue-600 animate-spin-slow" size={20} />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Global Logistics Network</span>
          </div>
          <h1 className="text-4xl font-black tracking-tighter italic">
            LOGI<span className="text-blue-600">SYNC</span> <span className="text-slate-300 not-italic font-light">PRO</span>
          </h1>
        </div>
        
        <div className="flex gap-4">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-tighter">Live GCP Node: Asia-South1</p>
            </div>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((s, i) => (
          <div key={i} className={`p-6 rounded-[2rem] border border-white shadow-xl shadow-slate-200/50 ${s.bg} transition-all hover:-translate-y-2 cursor-default`}>
            <div className={`${s.color} mb-3 p-3 bg-white w-fit rounded-2xl shadow-sm`}>{s.icon}</div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{s.label}</p>
            <p className="text-4xl font-black mt-1 text-slate-800">{s.val}</p>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Gemini AI Card */}
        <div className="lg:col-span-2 space-y-8">
          <div className="p-10 rounded-[3rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
             {/* Decorative Background Icon */}
             <div className="absolute -top-12 -right-12 p-4 opacity-5 group-hover:opacity-10 transition-all duration-1000 rotate-12 group-hover:rotate-45">
               <Zap size={300}/>
             </div>
             
             <div className="relative z-10">
               <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/40">
                        <Zap size={24} className="text-white fill-current" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black tracking-tight">Gemini 1.5 Intelligence</h3>
                            <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">Disruption Predictive Engine</p>
                        </div>
                    </div>
                    <ShieldCheck className="text-slate-700" size={32} />
               </div>
               
               <div className="bg-slate-800/40 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 mb-10 min-h-[140px] flex items-center shadow-inner">
                 <p className="text-slate-100 text-xl leading-relaxed font-medium italic">
                   {loading ? (
                     <span className="flex items-center gap-3">
                       <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
                       <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                       <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.5s]"></span>
                       <span className="ml-2 text-blue-400 font-bold uppercase tracking-tighter">Analyzing Global Logistics Patterns...</span>
                     </span>
                   ) : (
                     `"${aiInsight}"`
                   )}
                 </p>
               </div>
               
               <button 
                 onClick={handleAIAnalysis}
                 disabled={loading}
                 className="group flex items-center gap-4 bg-blue-600 hover:bg-white hover:text-blue-600 text-white font-black py-5 px-12 rounded-[2rem] transition-all shadow-xl shadow-blue-600/20 active:scale-95 disabled:opacity-50 tracking-widest text-sm"
               >
                 <TrendingUp size={20} className={loading ? "animate-spin" : "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"} />
                 {loading ? "PROCESSING..." : "RUN AI PREDICTION"}
               </button>
             </div>
          </div>

          {/* Shipment Table */}
          <div className="bg-white border border-slate-100 rounded-[3rem] p-10 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-black text-2xl tracking-tighter flex items-center gap-3">
                <Package className="text-blue-600" /> Active Supply Chains
              </h3>
              <div className="flex gap-2">
                  <span className="h-2 w-2 bg-slate-200 rounded-full"></span>
                  <span className="h-2 w-2 bg-slate-200 rounded-full"></span>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                {id: "LS-9921", route: "Mumbai → Delhi", status: "ON TIME", col: "blue", time: "2.4h Left"},
                {id: "LS-8832", route: "Chennai → Hyd", status: "DELAYED", col: "red", time: "4.8h Delay"}
              ].map((ship, x) => (
                <div key={x} className="flex items-center justify-between p-6 bg-slate-50/50 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all border border-transparent hover:border-slate-100 group">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm group-hover:scale-110 transition-transform">
                      <MapPin size={24} className="text-slate-300" />
                    </div>
                    <div>
                      <p className="font-black text-slate-800 text-xl tracking-tighter">{ship.id}</p>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{ship.route}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-[10px] font-black px-4 py-2 bg-${ship.col}-100 text-${ship.col}-600 rounded-xl block mb-1`}>
                        {ship.status}
                    </span>
                    <p className="text-[10px] font-bold text-slate-400">{ship.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-100 rounded-[3rem] p-8 shadow-sm h-full">
            <div className="flex items-center gap-2 mb-8">
                <TrendingUp size={18} className="text-blue-600" />
                <h3 className="font-black text-xl tracking-tighter uppercase">Capacity</h3>
            </div>
            
            <div className="space-y-12">
              {[
                { name: 'South Hub', cap: 82, color: 'bg-blue-600' },
                { name: 'North Hub', cap: 45, color: 'bg-blue-400' },
                { name: 'West Zone', cap: 68, color: 'bg-slate-900' }
              ].map((h, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between text-sm font-bold mb-3">
                    <span className="text-slate-400 uppercase text-[10px] tracking-widest">{h.name}</span>
                    <span className="text-slate-900">{h.cap}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden p-[3px]">
                    <div className={`${h.color} h-full rounded-full transition-all duration-1000 group-hover:brightness-125`} style={{width: `${h.cap}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Cloud Status Footer */}
            <div className="mt-16 p-8 bg-slate-900 rounded-[2.5rem] shadow-2xl">
               <div className="flex justify-between items-center">
                  <div className="text-center">
                    <p className="text-2xl font-black text-white">12<span className="text-blue-500 text-xs italic">ms</span></p>
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1">Latency</p>
                  </div>
                  <div className="w-[1px] h-10 bg-slate-800"></div>
                  <div className="text-center">
                    <p className="text-2xl font-black text-white">99.9<span className="text-blue-500 text-xs italic">%</span></p>
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1">Uptime</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;