
import React, { useState } from 'react';
import { User } from '../types';

interface UserDetailProps {
  user: User;
  onBack: () => void;
}

const UserDetail: React.FC<UserDetailProps> = ({ user, onBack }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'usage' | 'images' | 'billing'>('profile');

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'usage', label: 'Usage' },
    { id: 'images', label: 'Images' },
    { id: 'billing', label: 'Billing' },
  ];

  return (
    <div className="px-4 md:px-8 space-y-6">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 font-semibold hover:text-violet-600 transition-colors"
      >
        <span>←</span> Back to Users
      </button>

      {/* Header Info */}
      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full border-4 border-violet-50 mb-4 overflow-hidden relative group">
          <img src={`https://picsum.photos/seed/${user.id}/200/200`} alt={user.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">{user.name}</h2>
        <p className="text-slate-500 mb-4">{user.email}</p>
        <div className="flex gap-2">
          <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase ${
            user.plan === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'
          }`}>
            {user.plan} Plan
          </span>
          <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-violet-600 text-white shadow-md shadow-violet-100">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-16 bg-slate-50 z-30 pt-2">
        <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === tab.id 
                ? 'bg-violet-50 text-violet-600 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="pb-12">
        {activeTab === 'profile' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-800 border-b border-slate-50 pb-2">Information</h4>
              <div className="grid grid-cols-2 gap-y-4">
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Phone</p>
                  <p className="font-medium text-slate-700">{user.phone}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">ID</p>
                  <p className="font-medium text-slate-700">USR-{user.id.padStart(6, '0')}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Joined</p>
                  <p className="font-medium text-slate-700">{user.signupDate}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Last Active</p>
                  <p className="font-medium text-slate-700">{user.lastActive}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-3">Support Notes</h4>
              <textarea 
                className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl text-sm min-h-[100px] outline-none focus:ring-2 focus:ring-violet-50 transition-all"
                placeholder="Add private notes about this user..."
              ></textarea>
              <button className="mt-3 text-xs font-bold text-violet-600">Save Note</button>
            </div>
          </div>
        )}

        {activeTab === 'usage' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-xs text-slate-400 font-bold uppercase mb-1">Created</p>
                <p className="text-3xl font-black text-slate-900">{user.totalImages}</p>
                <p className="text-[10px] text-emerald-500 font-bold mt-1">↑ 12% vs last month</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-xs text-slate-400 font-bold uppercase mb-1">Avg/Month</p>
                <p className="text-3xl font-black text-slate-900">{Math.round(user.totalImages / 2.5)}</p>
                <p className="text-[10px] text-slate-400 font-bold mt-1">Healthy usage</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'images' && (
          <div className="grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-sm relative group cursor-pointer">
                <img src={`https://picsum.photos/seed/img${i}${user.id}/400/400`} alt="Generated" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                  <p className="text-[10px] text-white font-medium">Nov {20 - i}, 2023</p>
                  <p className="text-[8px] text-white/80">Marketplace Shoot</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'billing' && (
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-violet-600 p-5 rounded-2xl shadow-lg shadow-violet-200 text-white">
              <p className="text-xs font-bold uppercase opacity-80 mb-1">Total LTV</p>
              <h4 className="text-3xl font-black">${user.totalPaid.toFixed(2)}</h4>
            </div>
            
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <h4 className="font-bold text-slate-800 mb-4">Invoice History</h4>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex justify-between items-center pb-3 border-b border-slate-50 last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm font-bold text-slate-800">Premium Annual</p>
                      <p className="text-[10px] text-slate-400">Oct {i+1}, 2023 • INV-100{i}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-slate-900">$49.99</p>
                      <span className="text-[10px] text-emerald-500 font-bold uppercase">Success</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
