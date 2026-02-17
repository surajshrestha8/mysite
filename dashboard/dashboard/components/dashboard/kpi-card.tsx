import {
  DollarSign,
  Users,
  UserPlus,
  TrendingDown,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { KpiStat } from "@/data/mock/overview";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  DollarSign,
  Users,
  UserPlus,
  TrendingDown,
};

interface KpiCardProps {
  stat: KpiStat;
}

export function KpiCard({ stat }: KpiCardProps) {
  const Icon = iconMap[stat.icon] ?? DollarSign;
  const isPositive = stat.change > 0;
  const isNeutralPositive = stat.id === "churn" ? !isPositive : isPositive;

  return (
    <div className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md animate-fade-in">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon size={18} />
        </div>
      </div>

      <div className="mt-3">
        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
      </div>

      <div className="mt-2 flex items-center gap-1.5">
        <span
          className={cn(
            "flex items-center gap-0.5 text-xs font-medium rounded-full px-1.5 py-0.5",
            isNeutralPositive
              ? "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10"
              : "text-red-600 dark:text-red-400 bg-red-500/10"
          )}
        >
          {isPositive ? (
            <ArrowUpRight size={12} />
          ) : (
            <ArrowDownRight size={12} />
          )}
          {Math.abs(stat.change)}%
        </span>
        <span className="text-xs text-muted-foreground">{stat.changeLabel}</span>
      </div>
    </div>
  );
}
