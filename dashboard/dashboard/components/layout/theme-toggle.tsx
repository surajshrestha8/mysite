"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 rounded-lg border border-border bg-muted p-1">
        <div className="h-7 w-7 rounded-md" />
        <div className="h-7 w-7 rounded-md" />
        <div className="h-7 w-7 rounded-md" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-muted p-1">
      {(
        [
          { value: "light", icon: Sun, label: "Light" },
          { value: "system", icon: Monitor, label: "System" },
          { value: "dark", icon: Moon, label: "Dark" },
        ] as const
      ).map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          title={label}
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-md transition-colors",
            theme === value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  );
}
