export interface PlanRevenue {
  plan: string;
  count: number;
  mrr: number;
  percentage: number;
  color: string;
}

export interface MonthlyRevenue {
  month: string;
  starter: number;
  pro: number;
  enterprise: number;
}

export interface TopCustomer {
  rank: number;
  name: string;
  company: string;
  plan: string;
  mrr: number;
  avatarInitials: string;
  avatarColor: string;
}

export const revenueMetrics = {
  mrr: 48295,
  arr: 579540,
  mrrChange: 5.7,
  arrChange: 5.7,
  averageRevenuePerUser: 61.4,
  arpuChange: 2.1,
  ltv: 1842,
  ltvChange: 3.4,
};

export const planRevenue: PlanRevenue[] = [
  { plan: "Starter", count: 842, mrr: 41258, percentage: 15, color: "#3b82f6" },
  { plan: "Pro", count: 1204, mrr: 360796, percentage: 37, color: "#8b5cf6" },
  { plan: "Enterprise", count: 801, mrr: 719699, percentage: 48, color: "#10b981" },
];

export const monthlyRevenue: MonthlyRevenue[] = [
  { month: "Feb '24", starter: 3200, pro: 12800, enterprise: 12400 },
  { month: "Mar '24", starter: 3500, pro: 14100, enterprise: 13600 },
  { month: "Apr '24", starter: 3300, pro: 13400, enterprise: 13100 },
  { month: "May '24", starter: 3800, pro: 15100, enterprise: 14700 },
  { month: "Jun '24", starter: 4100, pro: 16200, enterprise: 15800 },
  { month: "Jul '24", starter: 3900, pro: 15800, enterprise: 15700 },
  { month: "Aug '24", starter: 4300, pro: 17400, enterprise: 17200 },
  { month: "Sep '24", starter: 4600, pro: 18400, enterprise: 18200 },
  { month: "Oct '24", starter: 4400, pro: 17700, enterprise: 17600 },
  { month: "Nov '24", starter: 4900, pro: 19400, enterprise: 19200 },
  { month: "Dec '24", starter: 5100, pro: 20500, enterprise: 20200 },
  { month: "Jan '25", starter: 5400, pro: 21800, enterprise: 21095 },
];

export interface MrrMovement {
  month: string;
  new: number;
  expansion: number;
  contraction: number;
  churn: number;
}

export const mrrMovement: MrrMovement[] = [
  { month: "Jun '24", new: 3600, expansion: 900,  contraction: -1000, churn: -1000 },
  { month: "Jul '24", new: 3000, expansion: 700,  contraction: -2000, churn: -2400 },
  { month: "Aug '24", new: 4200, expansion: 1100, contraction:  -900, churn:  -900 },
  { month: "Sep '24", new: 3500, expansion: 900,  contraction: -1200, churn:  -900 },
  { month: "Oct '24", new: 2800, expansion: 600,  contraction: -2400, churn: -2500 },
  { month: "Nov '24", new: 5200, expansion: 1200, contraction: -1200, churn: -1400 },
  { month: "Dec '24", new: 4100, expansion: 900,  contraction: -1400, churn: -1300 },
  { month: "Jan '25", new: 4800, expansion: 1100, contraction: -1600, churn: -1805 },
];

export const topCustomers: TopCustomer[] = [
  { rank: 1, name: "Sarah Johnson", company: "Acme Corp", plan: "Enterprise", mrr: 899, avatarInitials: "SJ", avatarColor: "#3b82f6" },
  { rank: 2, name: "James Wilson", company: "CloudBase", plan: "Enterprise", mrr: 899, avatarInitials: "JW", avatarColor: "#f59e0b" },
  { rank: 3, name: "David Kim", company: "Nexus AI", plan: "Enterprise", mrr: 899, avatarInitials: "DK", avatarColor: "#06b6d4" },
  { rank: 4, name: "Aisha Okafor", company: "FinPulse", plan: "Enterprise", mrr: 899, avatarInitials: "AO", avatarColor: "#f97316" },
  { rank: 5, name: "Mohammed Al-Rashid", company: "TechBridge", plan: "Enterprise", mrr: 899, avatarInitials: "MR", avatarColor: "#0ea5e9" },
  { rank: 6, name: "Lucas Moreau", company: "Digital Pulse", plan: "Enterprise", mrr: 899, avatarInitials: "LM", avatarColor: "#2563eb" },
  { rank: 7, name: "Charlotte Evans", company: "AgileFlow", plan: "Enterprise", mrr: 899, avatarInitials: "CE", avatarColor: "#7e22ce" },
  { rank: 8, name: "Benjamin Lee", company: "StackUp", plan: "Enterprise", mrr: 899, avatarInitials: "BL", avatarColor: "#b45309" },
  { rank: 9, name: "Mei Lin", company: "SmartSys", plan: "Enterprise", mrr: 899, avatarInitials: "ML", avatarColor: "#0d9488" },
  { rank: 10, name: "François Leroy", company: "Innov8", plan: "Enterprise", mrr: 899, avatarInitials: "FL", avatarColor: "#d97706" },
];
