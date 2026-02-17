import { planDistribution } from "@/data/mock/overview";
import { cn } from "@/lib/utils";

export function QuickStats() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="text-base font-semibold text-foreground mb-4">Plan Distribution</h3>
      <div className="space-y-4">
        {planDistribution.map((item) => (
          <div key={item.plan}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-foreground">{item.plan}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{item.count.toLocaleString()} users</span>
                <span className="text-sm font-semibold text-foreground">{item.percentage}%</span>
              </div>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div
                className={cn("h-full rounded-full transition-all duration-700", item.color)}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Total users</span>
        <span className="text-sm font-semibold text-foreground">
          {planDistribution.reduce((sum, p) => sum + p.count, 0).toLocaleString()}
        </span>
      </div>
    </div>
  );
}
