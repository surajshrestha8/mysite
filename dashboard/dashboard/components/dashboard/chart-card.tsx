"use client";

import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import { toCSV, triggerDownload } from "@/lib/export";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
  exportData?: {
    filename: string;
    headers: string[];
    rows: (string | number)[][];
  };
}

export function ChartCard({
  title,
  subtitle,
  children,
  className,
  action,
  exportData,
}: ChartCardProps) {
  const handleExport = () => {
    if (!exportData) return;
    const csv = toCSV(exportData.headers, exportData.rows);
    triggerDownload(exportData.filename, csv);
  };

  return (
    <div className={cn("rounded-xl border border-border bg-card p-6 animate-fade-in", className)}>
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          {action}
          {exportData && (
            <button
              title="Export CSV"
              onClick={handleExport}
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Download size={14} />
            </button>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
