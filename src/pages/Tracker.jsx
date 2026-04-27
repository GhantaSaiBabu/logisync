import React from 'react';
import { MapPin, Navigation, Truck, ShieldAlert, CheckCircle2, Info } from 'lucide-react';

const Tracker = () => {
  // Demo route: Mumbai to Delhi
  // Tip: For the demo video, you can use a real Google Maps Embed URL with a placeholder key
  const mapUrl = "https://www.google.com/maps/embed/v1/directions?key=YOUR_KEY_HERE&origin=Mumbai&destination=Delhi&mode=driving";

  return (
    <div className="ml-72 p-8 bg-slate-50 min-h-screen font-sans animate-in fade-in duration-1000">
      
      {/* Header Section */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <Navigation size={18} className="animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Real-Time GPS Fleet Stream</span>
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-slate-900">Live Fleet <span className="text-blue-600">Tracker</span></h2>
        </div>
        
        <div className="flex gap-3">
            <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1 text-center">Active Assets</p>
                <p className="text-xl font-black text-slate-800 text-center">24 / 24</p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Map Card */}
        <div className="lg:col-span-2 bg-white p-3 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-white h-[600px] relative overflow-hidden group">
          <div className="absolute top-6 left-6 z-10 bg-slate-900/80 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-bold border border-slate-700">
             Route: NH-48 Express Corridor
          </div>
          
          {/* Iframe for Google Maps */}
          <div className="w-full h-full rounded-[2.5rem] overflow-hidden grayscale-[20%] hover:grayscale-0 transition-all duration-700">
            <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={mapUrl.includes("YOUR_KEY") ? "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3106516.32431448!2d76.2829051!3d18.4230238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1714200000000!5m2!1sen!2sin" : mapUrl}
            ></iframe>
          </div>
        </div>

        {/* Right: Live Telemetry & Status */}
        <div className="space-y-6">
          
          {/* Shipment Identity Card */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white">
            <div className="flex items-center justify-between mb-8">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
                    <Truck size={24} />
                </div>
                <span className="text-[10px] font-black px-4 py-1.5 bg-green-100 text-green-600 rounded-full">ACTIVE TRANSIT</span>
            </div>
            
            <h3 className="font-black text-2xl text-slate-800 tracking-tighter mb-6">LS-2024-9921</h3>
            
            <div className="space-y-8 relative">
              {/* Vertical Connector Line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-slate-100"></div>

              <div className="flex gap-4 relative z-10">
                <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md flex-shrink-0"></div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Origin</p>
                  <p className="font-bold text-slate-800">Mumbai Port, MH</p>
                </div>
              </div>

              <div className="flex gap-4 relative z-10">
                <div className="w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-md flex-shrink-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
                </div>
                <div>
                  <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest leading-none mb-1 text-blue-600">Current (Live)</p>
                  <p className="font-bold text-slate-800">Vapi, Gujarat Hub</p>
                  <p className="text-[10px] text-slate-400 font-medium">Speed: 64 km/h</p>
                </div>
              </div>

              <div className="flex gap-4 relative z-10">
                <div className="w-6 h-6 bg-slate-200 rounded-full border-4 border-white shadow-md flex-shrink-0"></div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Destination</p>
                  <p className="font-bold text-slate-800">Okhla Distribution, DL</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Optimization Insight */}
          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
             <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-green-400" size={20} />
                <h4 className="font-bold text-lg">AI Performance Note</h4>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed mb-6">
               <span className="text-white font-bold italic">Gemini 1.5 Analysis:</span> Route optimized via Express Link B-4. Fuel efficiency improved by <span className="text-blue-400 font-bold">12%</span>. Arrival time stable.
             </p>
             <div className="pt-4 border-t border-slate-800">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Estimated ETA</p>
                <p className="text-3xl font-black text-white tracking-tighter">Apr 28, 09:30 PM</p>
             </div>
          </div>

          {/* Alert Card (Conditional Visual) */}
          <div className="bg-red-50 p-6 rounded-3xl border border-red-100 flex items-start gap-4">
             <ShieldAlert className="text-red-500 shrink-0" size={24} />
             <div>
                <p className="font-bold text-red-900 text-sm leading-none mb-1">Network Alert</p>
                <p className="text-red-700 text-xs font-medium">Delayed Toll clearance at MH-GJ border. Recovering time via bypass.</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Tracker;