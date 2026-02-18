import { Header } from "@/components/layout/header";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { QuickStats } from "@/components/dashboard/quick-stats";
import { InsightsPanel } from "@/components/dashboard/insights-panel";
import { kpiStats, activityFeed } from "@/data/mock/overview";

export default function OverviewPage() {
  return (
    <>
      <Header title="Overview" subtitle="Welcome back — here's what's happening today" />
      <div className="p-4 lg:p-6 space-y-6">
        {/* AI Insights Panel */}
        <InsightsPanel />

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 stagger-children">
          {kpiStats.map((stat) => (
            <KpiCard key={stat.id} stat={stat} />
          ))}
        </div>

        {/* Activity + Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <ActivityFeed items={activityFeed} />
          </div>
          <div>
            <QuickStats />
          </div>
        </div>
      </div>
    </>
  );
}
