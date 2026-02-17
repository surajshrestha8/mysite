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
