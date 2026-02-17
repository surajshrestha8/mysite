import { ActivityItem } from "@/data/mock/overview";
import { formatDistanceToNow } from "date-fns";
import { UserPlus, TrendingUp, XCircle, CreditCard, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const typeConfig = {
  signup: { icon: UserPlus, color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  upgrade: { icon: TrendingUp, color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
  cancel: { icon: XCircle, color: "bg-red-500/10 text-red-600 dark:text-red-400" },
  payment: { icon: CreditCard, color: "bg-purple-500/10 text-purple-600 dark:text-purple-400" },
  trial: { icon: Clock, color: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
};

interface ActivityFeedProps {
  items: ActivityItem[];
}

export function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="text-base font-semibold text-foreground mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {items.map((item, index) => {
          const { icon: Icon, color } = typeConfig[item.type];
          return (
            <div
              key={item.id}
              className="flex items-start gap-3 animate-fade-in"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <div className={cn("mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg", color)}>
                <Icon size={14} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground leading-snug">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed truncate">
                  {item.description}
                </p>
              </div>
              <span className="flex-shrink-0 text-xs text-muted-foreground whitespace-nowrap">
                {formatDistanceToNow(item.timestamp, { addSuffix: true })}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
