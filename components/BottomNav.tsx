
import React from 'react';
import { NAV_ITEMS } from '../constants';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-slate-200 px-2 py-3 md:py-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-around">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 transition-all duration-200 ${
                isActive ? 'text-violet-600' : 'text-slate-400'
              }`}
            >
              <span className={`text-xl ${isActive ? 'scale-110' : 'grayscale opacity-70'}`}>
                {item.icon}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider">
                {item.label}
              </span>
              {isActive && (
                <div className="w-1 h-1 rounded-full bg-violet-600 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
