export interface MonthlyData {
  month: string;
  revenue: number;
  newUsers: number;
  churned: number;
}

export interface TrafficSource {
  name: string;
  value: number;
  color: string;
}

export const monthlyData: MonthlyData[] = [
  { month: "Feb '24", revenue: 28400, newUsers: 180, churned: 22 },
  { month: "Mar '24", revenue: 31200, newUsers: 210, churned: 18 },
  { month: "Apr '24", revenue: 29800, newUsers: 195, churned: 28 },
  { month: "May '24", revenue: 33600, newUsers: 245, churned: 15 },
  { month: "Jun '24", revenue: 36100, newUsers: 280, churned: 20 },
  { month: "Jul '24", revenue: 35400, newUsers: 260, churned: 31 },
  { month: "Aug '24", revenue: 38900, newUsers: 310, churned: 24 },
  { month: "Sep '24", revenue: 41200, newUsers: 295, churned: 19 },
  { month: "Oct '24", revenue: 39700, newUsers: 270, churned: 35 },
  { month: "Nov '24", revenue: 43500, newUsers: 340, churned: 22 },
  { month: "Dec '24", revenue: 45800, newUsers: 315, churned: 28 },
  { month: "Jan '25", revenue: 48295, newUsers: 384, churned: 31 },
];

export const trafficSources: TrafficSource[] = [
  { name: "Organic", value: 42, color: "#3b82f6" },
  { name: "Paid Ads", value: 28, color: "#8b5cf6" },
  { name: "Referral", value: 18, color: "#10b981" },
  { name: "Direct", value: 12, color: "#f59e0b" },
];

export const conversionData = [
  { month: "Aug '24", rate: 3.2 },
  { month: "Sep '24", rate: 3.8 },
  { month: "Oct '24", rate: 3.5 },
  { month: "Nov '24", rate: 4.1 },
  { month: "Dec '24", rate: 4.4 },
  { month: "Jan '25", rate: 4.7 },
];

export interface CountryData {
  country: string;
  flag: string;
  users: number;
  revenue: number;
  percentage: number;
  color: string;
}

export const countryData: CountryData[] = [
  { country: "United States", flag: "🇺🇸", users: 1082, revenue: 18340, percentage: 38, color: "#3b82f6" },
  { country: "United Kingdom", flag: "🇬🇧", users:  342, revenue:  5820, percentage: 12, color: "#8b5cf6" },
  { country: "Germany",        flag: "🇩🇪", users:  256, revenue:  4350, percentage:  9, color: "#10b981" },
  { country: "Canada",         flag: "🇨🇦", users:  199, revenue:  3380, percentage:  7, color: "#f59e0b" },
  { country: "France",         flag: "🇫🇷", users:  171, revenue:  2910, percentage:  6, color: "#ef4444" },
  { country: "Australia",      flag: "🇦🇺", users:  142, revenue:  2410, percentage:  5, color: "#06b6d4" },
  { country: "India",          flag: "🇮🇳", users:  142, revenue:  1820, percentage:  5, color: "#ec4899" },
  { country: "Netherlands",    flag: "🇳🇱", users:  114, revenue:  1940, percentage:  4, color: "#f97316" },
  { country: "Brazil",         flag: "🇧🇷", users:   85, revenue:  1020, percentage:  3, color: "#a855f7" },
  { country: "Japan",          flag: "🇯🇵", users:   85, revenue:  1430, percentage:  3, color: "#14b8a6" },
];
