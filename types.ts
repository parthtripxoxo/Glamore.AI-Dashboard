
export type PlanStatus = 'Free' | 'Trial' | 'Paid' | 'Expired';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  signupDate: string;
  lastActive: string;
  plan: PlanStatus;
  totalImages: number;
  totalPaid: number;
}

export interface KpiData {
  label: string;
  value: string | number;
  trend?: number;
  prefix?: string;
  suffix?: string;
}

export interface ChartDataPoint {
  date: string;
  dau: number;
  mau: number;
  images: number;
}

export interface MarketplaceStat {
  name: string;
  users: number;
  images: number;
  color: string;
}
