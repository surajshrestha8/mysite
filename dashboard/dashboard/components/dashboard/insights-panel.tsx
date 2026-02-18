"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Users,
  Star,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react";
import { insights, Insight, InsightType } from "@/data/mock/insights";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Users,
  Star,
};

const typeMeta: Record<
  InsightType,
  { badge: string; icon: string; bg: string }
> = {
  success: {
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    icon: "text-emerald-500",
    bg: "bg-emerald-500/8",
  },
  warning: {
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    icon: "text-amber-500",
    bg: "bg-amber-500/8",
  },
  info: {
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    icon: "text-blue-500",
    bg: "bg-blue-500/8",
  },
  alert: {
    badge: "bg-red-500/10 text-red-600 dark:text-red-400",
    icon: "text-red-500",
    bg: "bg-red-500/8",
  },
};

function InsightRow({ insight }: { insight: Insight }) {
  const meta = typeMeta[insight.type];
  const Icon = iconMap[insight.iconName] ?? Sparkles;

  return (
    <div className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
      <div
        className={cn(
          "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg",
          meta.bg
        )}
      >
        <Icon size={15} className={meta.icon} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2 flex-wrap">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide flex-shrink-0",
              meta.badge
            )}
          >
            {insight.type}
          </span>
        </div>
        <p className="mt-1 text-sm text-foreground leading-snug">
          {insight.message}
        </p>
        {insight.link && insight.linkLabel && (
          <Link
            href={insight.link}
            className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            {insight.linkLabel} →
          </Link>
        )}
      </div>
    </div>
  );
}

export function InsightsPanel() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="rounded-xl border border-border bg-card animate-fade-in overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between px-5 py-4 hover:bg-muted/40 transition-colors text-left"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
            <Sparkles size={14} className="text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              This Week&apos;s Insights
            </h3>
            <p className="text-xs text-muted-foreground">
              {insights.length} actionable highlights from your data
            </p>
          </div>
        </div>
        {expanded ? (
          <ChevronUp size={16} className="text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
        )}
      </button>

      {/* Body */}
      {expanded && (
        <div className="px-5 pb-4 divide-y divide-border/60">
          {insights.map((insight) => (
            <InsightRow key={insight.id} insight={insight} />
          ))}
        </div>
      )}
    </div>
  );
}
