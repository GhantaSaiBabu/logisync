import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { TrendingUp, Info, Activity } from 'lucide-react';

const data = [
  { name: 'Mon', actual: 4000, predicted: 4100 },
  { name: 'Tue', actual: 3000, predicted: 3200 },
  { name: 'Wed', actual: 2000, predicted: 2500 },
  { name: 'Thu', actual: 2780, predicted: 2800 },
  { name: 'Fri', actual: 1890, predicted: 2100 },
  { name: 'Sat', predicted: 2400 }, // Future Prediction
  { name: 'Sun', predicted: 2700 }, // Future Prediction
];

const Forecast = () => {
  return (
    <div className="ml-72 p-8 bg-slate-50 min-h-screen font-sans animate-in fade-in duration-1000">
      
      {/* Page Header */}
      <div className="mb-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <Activity size={18} className="animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Predictive Engine v2.0</span>
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-slate-900">Demand <span className="text-blue-600">Forecasting</span></h2>
          <p className="text-slate-500 font-medium mt-1">Simulated Vertex AI Time-Series Analysis</p>
        </div>
        
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Model Accuracy</p>
                <p className="text-xl font-black text-slate-800">96.4%</p>
            </div>
            <div className="w-[1px] h-10 bg-slate-100"></div>
            <TrendingUp className="text-green-500" size={32} />
        </div>
      </div>

      {/* Main Chart Card */}
      <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
        
        <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-black tracking-tight text-slate-800">Next 7-Day Volume Projection</h3>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                    <span className="w-3 h-3 rounded-full bg-blue-600"></span> PREDICTED
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                    <span className="w-3 h-3 rounded-full bg-slate-300"></span> ACTUAL
                </div>
            </div>
        </div>

        <div className="h-[450px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#64748b', fontSize: 12, fontWeight: 600}} 
                dy={15}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#64748b', fontSize: 12}} 
              />
              <Tooltip 
                contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                cursor={{stroke: '#cbd5e1', strokeWidth: 2}}
              />
              {/* Predicted Line: Blue, Thicker */}
              <Line 
                type="monotone" 
                dataKey="predicted" 
                stroke="#2563eb" 
                strokeWidth={4} 
                dot={{ r: 6, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }} 
                activeDot={{ r: 8, strokeWidth: 0 }}
                name="Vertex AI Projection" 
              />
              {/* Actual Line: Grey, Thinner */}
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="#cbd5e1" 
                strokeWidth={3} 
                strokeDasharray="5 5"
                dot={{ r: 4, fill: '#cbd5e1', strokeWidth: 2, stroke: '#fff' }} 
                name="Recorded Volume" 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Observation Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-lg shadow-blue-200">
          <div className="flex items-center gap-3 mb-4">
             <div className="p-2 bg-blue-500 rounded-xl">
               <Info size={20} />
             </div>
             <h4 className="font-black tracking-tight text-xl">AI Observation</h4>
          </div>
          <p className="text-blue-100 font-medium leading-relaxed">
            Demand is projected to surge by **15.4%** this weekend due to seasonal patterns. 
            Automated recommendation: Increase fleet capacity in **South Zone Hub** by Friday evening.
          </p>
        </div>

        <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Confidence Score</p>
            <div className="flex items-end gap-2">
                <span className="text-5xl font-black text-slate-800 tracking-tighter">94%</span>
                <span className="text-green-500 font-bold mb-1 italic">High Reliability</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-4">
                <div className="bg-green-500 h-full w-[94%] rounded-full"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;