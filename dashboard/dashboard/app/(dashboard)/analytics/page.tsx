"use client";

import { Header } from "@/components/layout/header";
import { ChartCard } from "@/components/dashboard/chart-card";
import { monthlyData, trafficSources } from "@/data/mock/analytics";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
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

const formatCurrency = (v: number) => `$${(v / 1000).toFixed(0)}k`;
const formatDollar = (v: number) => `$${v.toLocaleString()}`;

type DateRange = "3M" | "6M" | "12M";

const RANGES = [
  { label: "3M" as const, months: 3 },
  { label: "6M" as const, months: 6 },
  { label: "12M" as const, months: 12 },
];

function RangePicker({
  value,
  onChange,
}: {
  value: DateRange;
  onChange: (v: DateRange) => void;
}) {
  return (
    <div className="flex items-center gap-0.5 rounded-lg bg-muted p-0.5">
      {RANGES.map((r) => (
        <button
          key={r.label}
          onClick={() => onChange(r.label)}
          className={cn(
            "rounded-md px-3 py-1 text-xs font-medium transition-all",
            value === r.label
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}

export default function AnalyticsPage() {
  const colors = useChartColors();
  const [range, setRange] = useState<DateRange>("12M");
  const filteredData = monthlyData.slice(-(RANGES.find((r) => r.label === range)!.months));

  return (
    <>
      <Header title="Analytics" subtitle="Trends and performance over the last 12 months" />
      <div className="p-4 lg:p-6 space-y-4">
        {/* Date range filter row */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing last <span className="font-medium text-foreground">{range}</span>
          </p>
          <RangePicker value={range} onChange={setRange} />
        </div>

        {/* Revenue Line Chart */}
        <ChartCard
          title="Monthly Revenue"
          subtitle="Total revenue collected each month"
        >
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={filteredData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
              <XAxis
                dataKey="month"
                tick={{ fill: colors.text, fontSize: 11 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tickFormatter={formatCurrency}
                tick={{ fill: colors.text, fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                width={45}
              />
              <Tooltip
                formatter={(v) => [formatDollar(Number(v)), "Revenue"]}
                contentStyle={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--foreground))",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 5, fill: "#3b82f6" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* User Growth + Traffic Sources side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Bar Chart */}
          <ChartCard
            title="User Growth"
            subtitle="New signups vs churned users per month"
          >
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={filteredData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
                <XAxis
                  dataKey="month"
                  tick={{ fill: colors.text, fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  tick={{ fill: colors.text, fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                  width={35}
                />
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))",
                    fontSize: "12px",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: "12px", color: colors.text }} />
                <Bar dataKey="newUsers" name="New Users" fill="#3b82f6" radius={[3, 3, 0, 0]} />
                <Bar dataKey="churned" name="Churned" fill="#ef4444" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Donut / Pie Chart */}
          <ChartCard
            title="Traffic Sources"
            subtitle="Where your users are coming from"
          >
            <div className="flex items-center gap-6">
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={trafficSources}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {trafficSources.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(v) => [`${v}%`, "Share"]}
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      color: "hsl(var(--foreground))",
                      fontSize: "12px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            {/* Legend */}
            <div className="mt-2 grid grid-cols-2 gap-2">
              {trafficSources.map((source) => (
                <div key={source.name} className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full flex-shrink-0" style={{ background: source.color }} />
                  <span className="text-xs text-muted-foreground">{source.name}</span>
                  <span className="text-xs font-semibold text-foreground ml-auto">{source.value}%</span>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>
      </div>
    </>
  );
}
