
import React from 'react';

interface SettingsScreenProps {
  onLogout: () => void;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ onLogout }) => {
  return (
    <div className="px-4 md:px-8 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Settings</h2>
        <p className="text-sm text-slate-500">Account and system configuration</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 flex items-center gap-4 border-b border-slate-50">
          <div className="w-20 h-20 rounded-2xl glamore-gradient flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-violet-100">
            AD
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900">System Admin</h4>
            <p className="text-slate-500">admin@glamore.ai</p>
            <span className="inline-block mt-2 px-3 py-1 bg-violet-50 text-violet-600 rounded-full text-[10px] font-bold uppercase tracking-wider">Super Admin</span>
          </div>
        </div>

        <div className="p-2">
          {[
            { label: 'Admin Roles', icon: '👤', desc: 'Manage permissions and team access' },
            { label: 'Manage Plans', icon: '💳', desc: 'Configure pricing, limits and features' },
            { label: 'System Logs', icon: '📝', desc: 'View administrative activity trail' },
            { label: 'API Keys', icon: '🔑', desc: 'Manage external integrations' },
            { label: 'Support Queue', icon: '🎧', desc: 'Manage user tickets and inquiries' },
          ].map((item, idx) => (
            <button 
              key={idx} 
              className="w-full p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors rounded-2xl group text-left"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <div className="flex-grow">
                <p className="font-bold text-slate-800">{item.label}</p>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
              <span className="text-slate-300">›</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-2 rounded-3xl border border-slate-100 shadow-sm">
        <button 
          onClick={onLogout}
          className="w-full p-4 flex items-center gap-4 text-rose-500 hover:bg-rose-50 transition-colors rounded-2xl font-bold group"
        >
          <span className="text-xl group-hover:scale-110 transition-transform">🚪</span>
          Log Out
        </button>
      </div>

      <div className="text-center pb-8">
        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Glamore.ai Admin v2.4.0</p>
        <p className="text-[10px] text-slate-300 mt-1">© 2023 Glamore.ai Inc.</p>
      </div>
    </div>
  );
};

export default SettingsScreen;
