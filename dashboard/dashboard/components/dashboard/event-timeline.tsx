import { CustomerEvent } from "@/data/mock/customer-profiles";
import {
  UserPlus,
  ArrowUpCircle,
  CreditCard,
  LifeBuoy,
  ArrowDownCircle,
  PlayCircle,
} from "lucide-react";
import { format, parseISO } from "date-fns";
import { cn } from "@/lib/utils";

const eventMeta: Record<
  CustomerEvent["type"],
  { icon: React.ElementType; color: string; bg: string; label: string }
> = {
  signup: {
    icon: UserPlus,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    label: "Signed up",
  },
  trial_start: {
    icon: PlayCircle,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10",
    label: "Trial started",
  },
  upgrade: {
    icon: ArrowUpCircle,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10",
    label: "Upgraded",
  },
  payment: {
    icon: CreditCard,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-500/10",
    label: "Payment",
  },
  support: {
    icon: LifeBuoy,
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-500/10",
    label: "Support",
  },
  downgrade: {
    icon: ArrowDownCircle,
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-500/10",
    label: "Downgrade",
  },
};

interface EventTimelineProps {
  events: CustomerEvent[];
}

export function EventTimeline({ events }: EventTimelineProps) {
  const sorted = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="rounded-xl border border-border bg-card p-6 animate-fade-in">
      <h3 className="text-base font-semibold text-foreground mb-4">Event Timeline</h3>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3.5 top-0 bottom-0 w-px bg-border" />
        <ul className="space-y-4">
          {sorted.map((event, i) => {
            const meta = eventMeta[event.type];
            const Icon = meta.icon;
            return (
              <li key={event.id} className="relative flex items-start gap-3 pl-9">
                {/* Icon dot */}
                <div
                  className={cn(
                    "absolute left-0 flex h-7 w-7 items-center justify-center rounded-full flex-shrink-0",
                    meta.bg
                  )}
                >
                  <Icon size={13} className={meta.color} />
                </div>

                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span
                      className={cn(
                        "text-xs font-semibold uppercase tracking-wide",
                        meta.color
                      )}
                    >
                      {meta.label}
                    </span>
                    <span className="text-xs text-muted-foreground flex-shrink-0">
                      {format(parseISO(event.date), "MMM d, yyyy")}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-foreground leading-snug">
                    {event.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
