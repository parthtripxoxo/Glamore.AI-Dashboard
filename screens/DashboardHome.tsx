
import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import KpiCard from '../components/KpiCard';
import { MOCK_CHART_DATA, MOCK_MARKETPLACES } from '../constants';

const DashboardHome: React.FC = () => {
  return (
    <div className="px-4 md:px-8 space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-slate-900">Dashboard</h2>
        <p className="text-sm text-slate-500">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <KpiCard label="Total Users" value={12480} trend={12} />
        <KpiCard label="Total Images" value={145200} trend={8} />
        <KpiCard label="DOU / MOU" value="1.2k / 15k" />
        <KpiCard label="DAU / MAU" value="850 / 9k" />
        <KpiCard label="Avg Images/U" value={11.6} />
        <KpiCard label="Revenue" value={42500} prefix="$" trend={15} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-slate-800">User Growth Trends</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_CHART_DATA}>
                <defs>
                  <linearGradient id="colorDau" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B'}} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
                  itemStyle={{fontWeight: 600}}
                />
                <Area type="monotone" dataKey="dau" name="DAU" stroke="#8B5CF6" strokeWidth={3} fillOpacity={1} fill="url(#colorDau)" />
                <Area type="monotone" dataKey="mau" name="MAU" stroke="#3B82F6" strokeWidth={2} strokeDasharray="5 5" fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-slate-800">Daily Image Generations</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_CHART_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B'}} />
                <Tooltip 
                  cursor={{fill: '#F8FAFC'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
                />
                <Bar dataKey="images" name="Images" fill="#8B5CF6" radius={[4, 4, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-800">Top Marketplaces Insight</h3>
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-2 py-1 rounded">Last 30 Days</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4">Marketplace</th>
                <th className="px-6 py-4">Users</th>
                <th className="px-6 py-4">Images Created</th>
                <th className="px-6 py-4">Share</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {MOCK_MARKETPLACES.slice(0, 5).map((m, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: m.color}}></div>
                    <span className="font-semibold text-slate-700">{m.name}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{m.users.toLocaleString()}</td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{m.images.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{width: `${(m.images / 50000) * 100}%`, backgroundColor: m.color}}></div>
                      </div>
                      <span className="text-xs font-bold text-slate-500">{Math.round((m.images / 50000) * 100)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
