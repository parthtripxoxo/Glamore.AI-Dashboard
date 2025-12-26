
import React, { useState } from 'react';
import { MOCK_USERS } from '../constants';
import { User, PlanStatus } from '../types';

interface UsersListProps {
  onSelectUser: (user: User) => void;
}

const StatusBadge: React.FC<{ status: PlanStatus }> = ({ status }) => {
  const styles = {
    Paid: 'bg-emerald-50 text-emerald-600',
    Trial: 'bg-blue-50 text-blue-600',
    Free: 'bg-slate-100 text-slate-500',
    Expired: 'bg-rose-50 text-rose-600',
  };
  return (
    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${styles[status]}`}>
      {status}
    </span>
  );
};

const UsersList: React.FC<UsersListProps> = ({ onSelectUser }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Paid', 'Trial', 'Free', 'Expired'];

  const filteredUsers = MOCK_USERS.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || user.plan === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="px-4 md:px-8 space-y-6">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Users</h2>
          <p className="text-sm text-slate-500">Manage your growing community</p>
        </div>

        {/* Search & Filters */}
        <div className="space-y-3">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-violet-50 focus:border-violet-500 outline-none transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  activeFilter === f 
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-200' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-violet-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* User Cards (Mobile) / Table (Desktop) */}
      <div className="space-y-3">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => onSelectUser(user)}
              className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-violet-100 transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 font-bold overflow-hidden">
                    <img src={`https://picsum.photos/seed/${user.id}/100/100`} alt={user.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-violet-600 transition-colors">{user.name}</h4>
                    <p className="text-xs text-slate-500">{user.email}</p>
                  </div>
                </div>
                <StatusBadge status={user.plan} />
              </div>
              
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-50 text-center">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Images</p>
                  <p className="text-sm font-bold text-slate-700">{user.totalImages}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Paid</p>
                  <p className="text-sm font-bold text-slate-700">${user.totalPaid}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Active</p>
                  <p className="text-sm font-bold text-slate-700">{user.lastActive.split('-').slice(1).join('/')}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-20 text-center">
            <span className="text-4xl mb-4 block opacity-50">👤</span>
            <p className="text-slate-500 font-medium">No users found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersList;
