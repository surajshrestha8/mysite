export type InsightType = "success" | "warning" | "info" | "alert";

export interface Insight {
  id: string;
  type: InsightType;
  iconName: string;
  message: string;
  link?: string;
  linkLabel?: string;
}

export const insights: Insight[] = [
  {
    id: "1",
    type: "success",
    iconName: "TrendingUp",
    message:
      "Revenue grew 5.7% MoM to $48,295 — the strongest month in Q4. Primary driver: 3 new Enterprise upgrades.",
    link: "/revenue",
    linkLabel: "View revenue",
  },
  {
    id: "2",
    type: "alert",
    iconName: "AlertTriangle",
    message:
      "3 trial accounts are on day 12 of 14. Consider triggering a conversion offer before they expire.",
    link: "/customers",
    linkLabel: "View customers",
  },
  {
    id: "3",
    type: "info",
    iconName: "Users",
    message:
      "New signups hit 384 this month, on track to beat the 400-signup goal by month-end.",
    link: "/analytics",
    linkLabel: "View analytics",
  },
  {
    id: "4",
    type: "warning",
    iconName: "TrendingDown",
    message:
      "Churn rate ticked up slightly in Germany and France. EU expansion may need a support review.",
    link: "/analytics",
    linkLabel: "View analytics",
  },
  {
    id: "5",
    type: "success",
    iconName: "Star",
    message:
      "Churn rate dropped to 2.4% — the lowest since September. Win-back campaigns appear to be working.",
    link: "/customers",
    linkLabel: "View customers",
  },
];
