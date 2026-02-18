"use client";

import { useEffect, useState } from "react";
import { Customer } from "@/data/mock/customers";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const planVariant: Record<string, "default" | "info" | "success"> = {
  Starter: "info",
  Pro: "default",
  Enterprise: "success",
};

const statusVariant: Record<string, "success" | "danger" | "warning"> = {
  Active: "success",
  Churned: "danger",
  Trial: "warning",
};

const healthLabel: Record<string, { label: string; className: string }> = {
  Active: { label: "Healthy", className: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10" },
  Trial: { label: "Evaluating", className: "text-amber-600 dark:text-amber-400 bg-amber-500/10" },
  Churned: { label: "At Risk", className: "text-red-600 dark:text-red-400 bg-red-500/10" },
};

function daysSince(dateStr: string): number {
  const joined = new Date(dateStr);
  const now = new Date();
  return Math.floor((now.getTime() - joined.getTime()) / (1000 * 60 * 60 * 24));
}

interface CustomerProfileHeaderProps {
  customer: Customer;
}

export function CustomerProfileHeader({ customer }: CustomerProfileHeaderProps) {
  const health = healthLabel[customer.status] ?? healthLabel["Active"];

  // Defer to client-only so SSR and first client render agree on "—",
  // then swap in the real value after hydration is complete.
  const [tenure, setTenure] = useState<number | null>(null);
  useEffect(() => {
    setTenure(daysSince(customer.joined));
  }, [customer.joined]);

  return (
    <div className="rounded-xl border border-border bg-card p-6 animate-fade-in">
      {/* Top row: avatar + info + badges */}
      <div className="flex flex-col sm:flex-row items-start gap-4">
        {/* Avatar */}
        <div
          className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-sm"
          style={{ background: customer.avatarColor }}
        >
          {customer.avatarInitials}
        </div>

        {/* Name / email / company */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-bold text-foreground">{customer.name}</h2>
            <Badge variant={planVariant[customer.plan]}>{customer.plan}</Badge>
            <Badge variant={statusVariant[customer.status]}>{customer.status}</Badge>
          </div>
          <p className="mt-0.5 text-sm text-muted-foreground">{customer.company}</p>
          <p className="text-sm text-muted-foreground">{customer.email}</p>
        </div>

        {/* MRR callout */}
        <div className="text-right flex-shrink-0">
          <p className="text-2xl font-bold text-foreground">
            {customer.mrr > 0 ? `$${customer.mrr}/mo` : "—"}
          </p>
          <p className="text-xs text-muted-foreground">Monthly Recurring Revenue</p>
        </div>
      </div>

      {/* Mini KPI row */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-lg border border-border bg-muted/40 p-3">
          <p className="text-xs text-muted-foreground">MRR</p>
          <p className="mt-1 text-lg font-semibold text-foreground">
            {customer.mrr > 0 ? `$${customer.mrr}` : "—"}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-muted/40 p-3">
          <p className="text-xs text-muted-foreground">Tenure</p>
          <p className="mt-1 text-lg font-semibold text-foreground">
            {tenure !== null ? `${tenure}d` : "—"}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-muted/40 p-3">
          <p className="text-xs text-muted-foreground">Plan</p>
          <p className="mt-1 text-lg font-semibold text-foreground">{customer.plan}</p>
        </div>
        <div className="rounded-lg border border-border bg-muted/40 p-3">
          <p className="text-xs text-muted-foreground">Health</p>
          <p className={cn("mt-1 text-sm font-semibold rounded-full inline-block px-2 py-0.5", health.className)}>
            {health.label}
          </p>
        </div>
      </div>
    </div>
  );
}
