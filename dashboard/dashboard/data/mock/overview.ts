export interface KpiStat {
  id: string;
  label: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: string;
}

export interface ActivityItem {
  id: string;
  type: "signup" | "upgrade" | "cancel" | "payment" | "trial";
  title: string;
  description: string;
  timestamp: Date;
  avatarInitials: string;
  avatarColor: string;
}

export const kpiStats: KpiStat[] = [
  {
    id: "revenue",
    label: "Total Revenue",
    value: "$48,295",
    change: 12.5,
    changeLabel: "vs last month",
    icon: "DollarSign",
  },
  {
    id: "users",
    label: "Active Users",
    value: "2,847",
    change: 8.2,
    changeLabel: "vs last month",
    icon: "Users",
  },
  {
    id: "signups",
    label: "New Signups",
    value: "384",
    change: -3.1,
    changeLabel: "vs last month",
    icon: "UserPlus",
  },
  {
    id: "churn",
    label: "Churn Rate",
    value: "2.4%",
    change: -0.5,
    changeLabel: "vs last month",
    icon: "TrendingDown",
  },
];

export const activityFeed: ActivityItem[] = [
  {
    id: "1",
    type: "signup",
    title: "New signup",
    description: "Sarah Johnson signed up for the Pro plan",
    timestamp: new Date(Date.now() - 1000 * 60 * 12),
    avatarInitials: "SJ",
    avatarColor: "bg-blue-500",
  },
  {
    id: "2",
    type: "upgrade",
    title: "Plan upgrade",
    description: "Acme Corp upgraded from Starter to Enterprise",
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    avatarInitials: "AC",
    avatarColor: "bg-emerald-500",
  },
  {
    id: "3",
    type: "payment",
    title: "Payment received",
    description: "Monthly payment of $299 processed for TechFlow Inc",
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
    avatarInitials: "TF",
    avatarColor: "bg-purple-500",
  },
  {
    id: "4",
    type: "trial",
    title: "Trial started",
    description: "DataSync Ltd started a 14-day free trial",
    timestamp: new Date(Date.now() - 1000 * 60 * 180),
    avatarInitials: "DS",
    avatarColor: "bg-amber-500",
  },
  {
    id: "5",
    type: "cancel",
    title: "Subscription cancelled",
    description: "RetailHub cancelled their Pro subscription",
    timestamp: new Date(Date.now() - 1000 * 60 * 300),
    avatarInitials: "RH",
    avatarColor: "bg-red-500",
  },
  {
    id: "6",
    type: "signup",
    title: "New signup",
    description: "Marcus Chen signed up for the Starter plan",
    timestamp: new Date(Date.now() - 1000 * 60 * 480),
    avatarInitials: "MC",
    avatarColor: "bg-indigo-500",
  },
  {
    id: "7",
    type: "upgrade",
    title: "Plan upgrade",
    description: "CloudBase upgraded from Pro to Enterprise",
    timestamp: new Date(Date.now() - 1000 * 60 * 720),
    avatarInitials: "CB",
    avatarColor: "bg-teal-500",
  },
];

export const planDistribution = [
  { plan: "Starter", count: 842, percentage: 38, color: "bg-blue-400" },
  { plan: "Pro", count: 1204, percentage: 42, color: "bg-primary" },
  { plan: "Enterprise", count: 801, percentage: 20, color: "bg-purple-500" },
];
