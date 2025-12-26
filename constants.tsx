
import { User, KpiData, ChartDataPoint, MarketplaceStat } from './types';

export const MOCK_USERS: User[] = [
  { id: '1', name: 'Alex Johnson', email: 'alex@example.com', phone: '+1 234 567 890', signupDate: '2023-10-01', lastActive: '2023-11-20', plan: 'Paid', totalImages: 145, totalPaid: 199.00 },
  { id: '2', name: 'Sarah Miller', email: 'sarah@design.co', phone: '+1 987 654 321', signupDate: '2023-10-15', lastActive: '2023-11-21', plan: 'Trial', totalImages: 12, totalPaid: 0 },
  { id: '3', name: 'James Wilson', email: 'j.wilson@market.net', phone: '+44 20 7123 4567', signupDate: '2023-09-20', lastActive: '2023-11-15', plan: 'Expired', totalImages: 45, totalPaid: 49.99 },
  { id: '4', name: 'Emma Davis', email: 'emma.d@freelance.io', phone: '+61 412 345 678', signupDate: '2023-11-01', lastActive: '2023-11-21', plan: 'Paid', totalImages: 89, totalPaid: 99.00 },
  { id: '5', name: 'Michael Chen', email: 'mchen@tech.org', phone: '+852 2345 6789', signupDate: '2023-10-25', lastActive: '2023-11-19', plan: 'Free', totalImages: 5, totalPaid: 0 },
];

export const MOCK_CHART_DATA: ChartDataPoint[] = [
  { date: 'Nov 15', dau: 120, mau: 850, images: 450 },
  { date: 'Nov 16', dau: 135, mau: 860, images: 520 },
  { date: 'Nov 17', dau: 110, mau: 875, images: 410 },
  { date: 'Nov 18', dau: 150, mau: 900, images: 630 },
  { date: 'Nov 19', dau: 180, mau: 920, images: 720 },
  { date: 'Nov 20', dau: 165, mau: 940, images: 680 },
  { date: 'Nov 21', dau: 195, mau: 960, images: 810 },
];

export const MOCK_MARKETPLACES: MarketplaceStat[] = [
  { name: 'Amazon', users: 1240, images: 15400, color: '#8B5CF6' },
  { name: 'Shopify', users: 980, images: 12200, color: '#3B82F6' },
  { name: 'Etsy', users: 450, images: 5600, color: '#10B981' },
  { name: 'eBay', users: 320, images: 3100, color: '#F59E0B' },
  { name: 'Instagram', users: 890, images: 9800, color: '#EC4899' },
];

export const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'users', label: 'Users', icon: '👥' },
  { id: 'analytics', label: 'Analytics', icon: '📊' },
  { id: 'billing', label: 'Billing', icon: '💳' },
  { id: 'settings', label: 'Settings', icon: '⚙️' },
];
