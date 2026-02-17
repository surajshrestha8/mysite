# SaasDash

A modern SaaS analytics dashboard built with Next.js, React 19, and Tailwind CSS 4. Designed to give SaaS operators a clear view of revenue, user growth, customer health, and activity — all in one place.

---

## Features

### Pages

| Route | Description |
|---|---|
| `/` | Overview — KPI summary cards, recent activity feed, plan distribution |
| `/analytics` | Charts — monthly revenue, user growth, traffic sources with date range filter |
| `/customers` | Customer table — 50 customers with plan, status, MRR, join date |
| `/revenue` | Revenue breakdown — MRR/ARR metrics, per-plan revenue, top customers |
| `/settings` | Settings page |

### UX

- **Date range filter** — 3M / 6M / 12M pill toggle on the Analytics page filters both the revenue line chart and user growth bar chart. Traffic sources donut is unaffected.
- **Notifications panel** — slide-in drawer from the right on bell-icon click. Shows unread badge count, relative timestamps, per-type icons, "Mark all read", backdrop click to close, Escape key to close, body scroll lock while open.
- **Dark / light mode** — system-aware theme toggle powered by `next-themes`, persisted across sessions.
- **Collapsible sidebar** — icon-only collapsed state on desktop; bottom tab bar on mobile.
- **Skeleton loading** — loading state shown during page transitions.

---

## Tech Stack

| Layer | Library | Version |
|---|---|---|
| Framework | Next.js | 16.1.6 |
| UI runtime | React | 19 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | 4 |
| Charts | Recharts | 3 |
| Icons | Lucide React | 0.574 |
| Theming | next-themes | 0.4 |
| Dates | date-fns | 4 |
| Class utility | clsx + tailwind-merge | — |

---

## Project Structure

```
dashboard/
├── app/
│   ├── layout.tsx                  # Root layout — ThemeProvider
│   ├── not-found.tsx
│   └── (dashboard)/
│       ├── layout.tsx              # Dashboard shell — Sidebar + main content
│       ├── loading.tsx             # Skeleton loading state
│       ├── page.tsx                # Overview
│       ├── analytics/page.tsx      # Analytics + date range filter
│       ├── customers/page.tsx      # Customer table
│       ├── revenue/page.tsx        # Revenue metrics
│       └── settings/page.tsx       # Settings
│
├── components/
│   ├── layout/
│   │   ├── header.tsx              # Page header — search, notifications, theme, avatar
│   │   ├── sidebar.tsx             # Collapsible nav (desktop) + bottom nav (mobile)
│   │   ├── theme-toggle.tsx        # Light/dark mode button
│   │   └── notifications-panel.tsx # Slide-in notifications drawer
│   ├── dashboard/
│   │   ├── kpi-card.tsx            # Metric card with change indicator
│   │   ├── chart-card.tsx          # Chart wrapper card
│   │   ├── activity-feed.tsx       # Recent activity list
│   │   ├── data-table.tsx          # Sortable data table
│   │   └── quick-stats.tsx         # Compact stats row
│   └── ui/
│       ├── badge.tsx               # Status badge
│       └── skeleton.tsx            # Loading placeholder
│
├── data/
│   └── mock/
│       ├── analytics.ts            # monthlyData (12 months), trafficSources
│       ├── overview.ts             # kpiStats, activityFeed, planDistribution
│       ├── customers.ts            # 50 customer records
│       ├── revenue.ts              # revenueMetrics, planRevenue, topCustomers
│       └── notifications.ts        # 7 notifications (3 unread, 4 read)
│
└── lib/
    └── utils.ts                    # cn() — clsx + tailwind-merge helper
```

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# Production build
npm run build
npm run start

# Lint
npm run lint
```

---

## Data

All data is static mock data — no backend or database required. To swap in real data, replace the exports in `data/mock/` with API calls or server actions. The component interfaces are typed, so TypeScript will surface any shape mismatches immediately.

### Key types

```ts
// data/mock/overview.ts
interface ActivityItem {
  id: string;
  type: "signup" | "upgrade" | "cancel" | "payment" | "trial";
  title: string;
  description: string;
  timestamp: Date;
}

// data/mock/customers.ts
interface Customer {
  id: string;
  name: string;
  company: string;
  plan: "Starter" | "Pro" | "Enterprise";
  status: "Active" | "Churned" | "Trial";
  mrr: number;
  joined: string; // ISO date string
}

// data/mock/notifications.ts
interface Notification {
  id: string;
  type: ActivityItem["type"];
  title: string;
  description: string;
  timestamp: Date;
  read: boolean;
}
```

---

## Roadmap

Planned features in priority order:

- [ ] Customer search + filter by plan / status / MRR range
- [ ] At-risk customer flags (trial expiry, long-term no upgrade)
- [ ] MRR movement waterfall chart (new / expansion / contraction / churn)
- [ ] Cohort retention table
- [ ] CSV export on Customers and Revenue tables
- [ ] Revenue goal / target tracking with progress bar
- [ ] Projected MRR forecast line on Revenue chart
- [ ] Keyboard command palette (`⌘K`)

---

## License

MIT
