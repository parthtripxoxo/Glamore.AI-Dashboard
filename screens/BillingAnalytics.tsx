
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import KpiCard from '../components/KpiCard';

const BillingAnalytics: React.FC = () => {
  const planData = [
    { name: 'Free', users: 8200, revenue: 0, color: '#94A3B8' },
    { name: 'Basic', users: 2400, revenue: 12000, color: '#3B82F6' },
    { name: 'Pro', users: 1500, revenue: 22500, color: '#8B5CF6' },
    { name: 'Elite', users: 380, revenue: 19000, color: '#EC4899' },
  ];

  return (
    <div className="px-4 md:px-8 space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Billing</h2>
          <p className="text-sm text-slate-500">Revenue and plan distribution</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition-all text-sm font-bold text-slate-600">
            Export CSV
          </button>
        </div>
      </div>

      {/* Revenue KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-violet-600 p-6 rounded-3xl shadow-lg shadow-violet-200 text-white col-span-1 md:col-span-1">
          <p className="text-xs font-bold uppercase opacity-80 mb-1">MTD Revenue</p>
          <h4 className="text-3xl font-black">$42,500.00</h4>
          <p className="text-[10px] font-bold mt-2 bg-white/20 inline-block px-2 py-0.5 rounded-full">↑ 18.2% vs prev month</p>
        </div>
        <KpiCard label="QTD Revenue" value={118400} prefix="$" />
        <KpiCard label="LTD Revenue" value={542000} prefix="$" />
      </div>

      {/* Users per plan */}
      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <h3 className="text-lg font-bold mb-6 text-slate-800">Plan Distribution</h3>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={planData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
              <Tooltip 
                cursor={{fill: '#F8FAFC'}}
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
              />
              <Bar dataKey="users" name="Active Users" radius={[8, 8, 0, 0]} barSize={40}>
                {planData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue Breakdown */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50">
          <h3 className="text-lg font-bold text-slate-800">Performance Metrics</h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-700">Conversion Rate</p>
              <p className="text-xs text-slate-400">Trial to Paid conversion</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-black text-emerald-500">24.5%</p>
              <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden">
                <div className="h-full bg-emerald-500 w-[24.5%]"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-700">Churn Rate</p>
              <p className="text-xs text-slate-400">Monthly subscription churn</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-black text-rose-500">2.1%</p>
              <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden">
                <div className="h-full bg-rose-500 w-[2.1%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingAnalytics;
