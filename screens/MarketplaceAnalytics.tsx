
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { MOCK_CHART_DATA, MOCK_MARKETPLACES } from '../constants';

const MarketplaceAnalytics: React.FC = () => {
  const [view, setView] = useState<'Marketplace' | 'Personal'>('Marketplace');

  return (
    <div className="px-4 md:px-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Analytics</h2>
          <p className="text-sm text-slate-500">Deep dive into usage segments</p>
        </div>
        <div className="bg-white p-1 rounded-xl border border-slate-200 flex shadow-sm">
          <button 
            onClick={() => setView('Marketplace')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              view === 'Marketplace' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-500'
            }`}
          >
            Market
          </button>
          <button 
            onClick={() => setView('Personal')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              view === 'Personal' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-500'
            }`}
          >
            Brand
          </button>
        </div>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-slate-800">Market Share (Images)</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={MOCK_MARKETPLACES}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="images"
                  nameKey="name"
                >
                  {MOCK_MARKETPLACES.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
                />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-slate-800">Category Growth Trend</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_CHART_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                <Tooltip />
                <Area type="monotone" dataKey="images" stroke="#8B5CF6" fill="#F5F3FF" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="space-y-3">
        {MOCK_MARKETPLACES.map((m, idx) => (
          <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center font-bold text-slate-400">
                {m.name[0]}
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{m.name}</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{m.users.toLocaleString()} Active Users</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-black text-slate-800">{m.images.toLocaleString()}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Photos</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceAnalytics;
