"use client";

import { Header } from "@/components/layout/header";
import { ChartCard } from "@/components/dashboard/chart-card";
import { revenueMetrics, planRevenue, monthlyRevenue, topCustomers, mrrMovement } from "@/data/mock/revenue";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

function useChartColors() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return { grid: "#e5e7eb", text: "#6b7280" };
  return {
    grid: resolvedTheme === "dark" ? "#1f2937" : "#f3f4f6",
    text: resolvedTheme === "dark" ? "#9ca3af" : "#6b7280",
  };
}

function StatCard({
  label,
  value,
  change,
  prefix = "",
}: {
  label: string;
  value: string | number;
  change: number;
  prefix?: string;
}) {
  const positive = change >= 0;
  return (
    <div className="rounded-xl border border-border bg-card p-6 animate-fade-in">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-2 text-3xl font-bold text-foreground">
        {prefix}{typeof value === "number" ? value.toLocaleString() : value}
      </p>
      <div className="mt-2 flex items-center gap-1">
        <span
          className={cn(
            "flex items-center gap-0.5 text-xs font-medium rounded-full px-1.5 py-0.5",
            positive
              ? "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10"
              : "text-red-600 dark:text-red-400 bg-red-500/10"
          )}
        >
          {positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {Math.abs(change)}%
        </span>
        <span className="text-xs text-muted-foreground">vs last month</span>
      </div>
    </div>
  );
}

export default function RevenuePage() {
  const colors = useChartColors();

  return (
    <>
      <Header title="Revenue" subtitle="Financial metrics and subscription analytics" />
      <div className="p-4 lg:p-6 space-y-4">
        {/* Hero stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 stagger-children">
          <StatCard label="Monthly Recurring Revenue" value={`$${revenueMetrics.mrr.toLocaleString()}`} change={revenueMetrics.mrrChange} />
          <StatCard label="Annual Recurring Revenue" value={`$${(revenueMetrics.arr / 1000).toFixed(0)}k`} change={revenueMetrics.arrChange} />
          <StatCard label="Avg Revenue Per User" value={`$${revenueMetrics.averageRevenuePerUser}`} change={revenueMetrics.arpuChange} />
          <StatCard label="Customer Lifetime Value" value={`$${revenueMetrics.ltv.toLocaleString()}`} change={revenueMetrics.ltvChange} />
        </div>

        {/* Plan breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {planRevenue.map((p) => (
            <div key={p.plan} className="rounded-xl border border-border bg-card p-5 animate-fade-in">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-foreground">{p.plan}</span>
                <div className="h-3 w-3 rounded-full" style={{ background: p.color }} />
              </div>
              <p className="text-2xl font-bold text-foreground">
                ${p.mrr.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {p.count.toLocaleString()} customers · {p.percentage}% of MRR
              </p>
              <div className="mt-3 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${p.percentage}%`, background: p.color }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stacked bar chart */}
        <ChartCard
          title="Revenue by Month"
          subtitle="Breakdown by subscription tier (stacked)"
        >
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={monthlyRevenue} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
              <XAxis
                dataKey="month"
                tick={{ fill: colors.text, fontSize: 11 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                tick={{ fill: colors.text, fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                width={45}
              />
              <Tooltip
                formatter={(v, name) => [`$${Number(v).toLocaleString()}`, String(name)]}
                contentStyle={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                  fontSize: "12px",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "12px", color: colors.text }} />
              <Bar dataKey="starter" name="Starter" stackId="a" fill="#3b82f6" />
              <Bar dataKey="pro" name="Pro" stackId="a" fill="#8b5cf6" />
              <Bar dataKey="enterprise" name="Enterprise" stackId="a" fill="#10b981" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* MRR Movement waterfall */}
        <ChartCard
          title="MRR Movement"
          subtitle="New and expansion MRR vs contraction and churn each month"
        >
          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            {[
              { color: "#10b981", label: "New MRR" },
              { color: "#06b6d4", label: "Expansion" },
              { color: "#f97316", label: "Contraction" },
              { color: "#ef4444", label: "Churn" },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-sm flex-shrink-0" style={{ background: color }} />
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={mrrMovement} margin={{ top: 5, right: 10, left: 0, bottom: 5 }} barGap={2}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
              <XAxis
                dataKey="month"
                tick={{ fill: colors.text, fontSize: 11 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tickFormatter={(v) => `$${(Math.abs(v) / 1000).toFixed(0)}k`}
                tick={{ fill: colors.text, fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                width={45}
              />
              <Tooltip
                formatter={(v, name) => {
                  const val = Number(v);
                  return [`${val < 0 ? "-" : "+"}$${Math.abs(val).toLocaleString()}`, String(name)];
                }}
                contentStyle={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                  fontSize: "12px",
                }}
              />
              {/* Positive bars stack upward */}
              <Bar dataKey="new"       name="New MRR"    stackId="pos" fill="#10b981" />
              <Bar dataKey="expansion" name="Expansion"  stackId="pos" fill="#06b6d4" radius={[3, 3, 0, 0]} />
              {/* Negative bars stack downward */}
              <Bar dataKey="contraction" name="Contraction" stackId="neg" fill="#f97316" />
              <Bar dataKey="churn"       name="Churn"        stackId="neg" fill="#ef4444" radius={[0, 0, 3, 3]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Top Customers */}
        <div className="rounded-xl border border-border bg-card overflow-hidden animate-fade-in">
          <div className="px-6 py-4 border-b border-border">
            <h3 className="text-base font-semibold text-foreground">Top Customers by MRR</h3>
            <p className="text-sm text-muted-foreground mt-0.5">Your highest-value accounts</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">#</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground">Plan</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground">MRR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {topCustomers.map((c) => (
                  <tr key={c.rank} className="hover:bg-muted/40 transition-colors">
                    <td className="px-6 py-3 text-muted-foreground font-medium">{c.rank}</td>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                          style={{ background: c.avatarColor }}
                        >
                          {c.avatarInitials}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{c.name}</p>
                          <p className="text-xs text-muted-foreground">{c.company}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <Badge variant="success">{c.plan}</Badge>
                    </td>
                    <td className="px-6 py-3 text-right font-semibold text-foreground">
                      ${c.mrr}/mo
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
