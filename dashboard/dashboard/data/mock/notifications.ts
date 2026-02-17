import { ActivityItem } from "./overview";

export interface Notification {
  id: string;
  type: ActivityItem["type"];
  title: string;
  description: string;
  timestamp: Date;
  read: boolean;
}

export const initialNotifications: Notification[] = [
  {
    id: "n1",
    type: "signup",
    title: "New signup",
    description: "Sarah Johnson signed up for the Pro plan",
    timestamp: new Date(Date.now() - 1000 * 60 * 12),
    read: false,
  },
  {
    id: "n2",
    type: "upgrade",
    title: "Plan upgrade",
    description: "Acme Corp upgraded from Starter to Enterprise",
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    read: false,
  },
  {
    id: "n3",
    type: "payment",
    title: "Payment received",
    description: "Monthly payment of $299 processed for TechFlow Inc",
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
    read: false,
  },
  {
    id: "n4",
    type: "trial",
    title: "Trial started",
    description: "DataSync Ltd started a 14-day free trial",
    timestamp: new Date(Date.now() - 1000 * 60 * 180),
    read: true,
  },
  {
    id: "n5",
    type: "cancel",
    title: "Subscription cancelled",
    description: "RetailHub cancelled their Pro subscription",
    timestamp: new Date(Date.now() - 1000 * 60 * 300),
    read: true,
  },
  {
    id: "n6",
    type: "signup",
    title: "New signup",
    description: "Marcus Chen signed up for the Starter plan",
    timestamp: new Date(Date.now() - 1000 * 60 * 480),
    read: true,
  },
  {
    id: "n7",
    type: "upgrade",
    title: "Plan upgrade",
    description: "CloudBase upgraded from Pro to Enterprise",
    timestamp: new Date(Date.now() - 1000 * 60 * 720),
    read: true,
  },
];
