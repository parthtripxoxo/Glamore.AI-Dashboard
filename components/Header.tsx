
import React from 'react';

interface HeaderProps {
  onProfileClick: () => void;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onProfileClick, onLogoClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 flex items-center justify-between px-4 md:px-8">
      <div 
        className="flex items-center gap-2 cursor-pointer group" 
        onClick={onLogoClick}
      >
        <div className="w-8 h-8 rounded-lg glamore-gradient flex items-center justify-center text-white font-bold text-xl">
          G
        </div>
        <span className="text-xl font-bold text-slate-900">Glamore<span className="text-violet-600">.ai</span> <span className="text-xs font-medium text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded ml-1">ADMIN</span></span>
      </div>

      <button 
        onClick={onProfileClick}
        className="w-10 h-10 rounded-full border-2 border-violet-100 overflow-hidden bg-violet-50 flex items-center justify-center hover:border-violet-300 transition-colors"
      >
        <img 
          src="https://picsum.photos/seed/admin/100/100" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </button>
    </header>
  );
};

export default Header;
