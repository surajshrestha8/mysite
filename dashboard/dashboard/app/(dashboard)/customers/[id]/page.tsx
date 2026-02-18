"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use, useState, useEffect } from "react";
import { customers } from "@/data/mock/customers";
import { customerProfiles } from "@/data/mock/customer-profiles";
import { CustomerProfileHeader } from "@/components/dashboard/customer-profile-header";
import { EventTimeline } from "@/components/dashboard/event-timeline";
import { ArrowLeft } from "lucide-react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CustomerProfilePage({ params }: PageProps) {
  const { id } = use(params);
  const customer = customers.find((c) => c.id === id);
  const profile = customerProfiles[id];

  // Gate Recharts behind mount — ResponsiveContainer measures the real DOM,
  // so server output (0-width) never matches client output (actual width).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!customer || !profile) {
    notFound();
  }

  const sparklineData = profile.mrrHistory.map((mrr, i) => ({
    month: `M${i + 1}`,
    mrr,
  }));

  const isAllZero = profile.mrrHistory.every((v) => v === 0);

  return (
    <div className="p-4 lg:p-6 space-y-4">
      {/* Back breadcrumb */}
      <Link
        href="/customers"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft size={14} />
        All Customers
      </Link>

      {/* Profile header */}
      <CustomerProfileHeader customer={customer} />

      {/* Sparkline + Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* MRR Sparkline */}
        <div className="rounded-xl border border-border bg-card p-6 animate-fade-in">
          <h3 className="text-base font-semibold text-foreground mb-1">
            MRR History
          </h3>
          <p className="text-xs text-muted-foreground mb-4">Last 6 months</p>

          {isAllZero ? (
            <div className="flex h-28 items-center justify-center text-sm text-muted-foreground">
              No revenue — trial account
            </div>
          ) : !mounted ? (
            // Stable placeholder — matches on both server and first client render
            <div className="h-[120px]" />
          ) : (
            <ResponsiveContainer width="100%" height={120}>
              <LineChart
                data={sparklineData}
                margin={{ top: 4, right: 4, left: 4, bottom: 4 }}
              >
                <Line
                  type="monotone"
                  dataKey="mrr"
                  stroke="#3b82f6"
                  strokeWidth={2.5}
                  dot={false}
                  activeDot={{ r: 4, fill: "#3b82f6" }}
                />
                <Tooltip
                  formatter={(v) => [`$${v}`, "MRR"]}
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))",
                    fontSize: "12px",
                  }}
                  labelFormatter={(_, payload) => {
                    const labels = [
                      "6 months ago",
                      "5 months ago",
                      "4 months ago",
                      "3 months ago",
                      "2 months ago",
                      "This month",
                    ];
                    const idx = payload?.[0]?.payload
                      ? sparklineData.indexOf(payload[0].payload)
                      : -1;
                    return labels[idx] ?? "";
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}

          {/* Summary row */}
          <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
            <span>
              Peak:{" "}
              <span className="font-semibold text-foreground">
                ${Math.max(...profile.mrrHistory)}/mo
              </span>
            </span>
            <span>
              Current:{" "}
              <span className="font-semibold text-foreground">
                ${profile.mrrHistory[profile.mrrHistory.length - 1]}/mo
              </span>
            </span>
          </div>
        </div>

        {/* Event Timeline */}
        <EventTimeline events={profile.events} />
      </div>
    </div>
  );
}
