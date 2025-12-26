
import React from 'react';
import { KpiData } from '../types';

interface KpiCardProps extends KpiData {
  className?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ label, value, trend, prefix, suffix, className }) => {
  return (
    <div className={`bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <p className="text-slate-500 text-sm font-medium mb-1">{label}</p>
      <div className="flex items-baseline gap-2">
        <h3 className="text-2xl font-bold text-slate-900">
          {prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}
        </h3>
        {trend !== undefined && (
          <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
            trend >= 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
          }`}>
            {trend >= 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
    </div>
  );
};

export default KpiCard;
