"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Search,
  LayoutDashboard,
  BarChart3,
  Users,
  DollarSign,
  Settings,
  Sun,
  Moon,
  Monitor,
  CornerDownLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Command {
  id: string;
  label: string;
  description?: string;
  icon: React.ElementType;
  group: string;
  keywords: string;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const navigate = useCallback(
    (href: string) => {
      router.push(href);
      onClose();
    },
    [router, onClose]
  );

  const changeTheme = useCallback(
    (t: string) => {
      setTheme(t);
      onClose();
    },
    [setTheme, onClose]
  );

  const commands: Command[] = [
    {
      id: "nav-overview",
      label: "Overview",
      description: "Dashboard home",
      icon: LayoutDashboard,
      group: "Navigation",
      keywords: "home dashboard overview",
      action: () => navigate("/"),
    },
    {
      id: "nav-analytics",
      label: "Analytics",
      description: "Trends and performance charts",
      icon: BarChart3,
      group: "Navigation",
      keywords: "analytics charts trends users country traffic",
      action: () => navigate("/analytics"),
    },
    {
      id: "nav-customers",
      label: "Customers",
      description: "Manage and track customers",
      icon: Users,
      group: "Navigation",
      keywords: "customers users table list search",
      action: () => navigate("/customers"),
    },
    {
      id: "nav-revenue",
      label: "Revenue",
      description: "MRR, ARR, and billing metrics",
      icon: DollarSign,
      group: "Navigation",
      keywords: "revenue mrr arr billing money finance subscriptions",
      action: () => navigate("/revenue"),
    },
    {
      id: "nav-settings",
      label: "Settings",
      description: "Account and notification preferences",
      icon: Settings,
      group: "Navigation",
      keywords: "settings preferences account profile notifications",
      action: () => navigate("/settings"),
    },
    {
      id: "theme-light",
      label: "Light Mode",
      description: "Switch to light theme",
      icon: Sun,
      group: "Appearance",
      keywords: "light theme appearance mode bright",
      action: () => changeTheme("light"),
    },
    {
      id: "theme-dark",
      label: "Dark Mode",
      description: "Switch to dark theme",
      icon: Moon,
      group: "Appearance",
      keywords: "dark theme appearance mode night",
      action: () => changeTheme("dark"),
    },
    {
      id: "theme-system",
      label: "System Theme",
      description: "Follow system preference",
      icon: Monitor,
      group: "Appearance",
      keywords: "system theme appearance auto default",
      action: () => changeTheme("system"),
    },
  ];

  const filtered = query.trim()
    ? commands.filter((c) => {
        const q = query.toLowerCase();
        return (
          c.label.toLowerCase().includes(q) ||
          c.description?.toLowerCase().includes(q) ||
          c.keywords.toLowerCase().includes(q)
        );
      })
    : commands;

  const groups = filtered.reduce<Record<string, Command[]>>((acc, cmd) => {
    if (!acc[cmd.group]) acc[cmd.group] = [];
    acc[cmd.group].push(cmd);
    return acc;
  }, {});

  const flatList = Object.values(groups).flat();

  // Reset and focus when opening
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [isOpen]);

  // Reset activeIndex when query changes
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  // Keyboard navigation (only when open)
  useEffect(() => {
    if (!isOpen) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, flatList.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        flatList[activeIndex]?.action();
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [isOpen, flatList, activeIndex, onClose]);

  if (!isOpen) return null;

  let flatIndex = 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative w-full max-w-[560px] rounded-xl border border-border bg-card shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search size={16} className="text-muted-foreground flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search commands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center rounded border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground font-mono">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-[340px] overflow-y-auto p-1.5">
          {flatList.length === 0 ? (
            <p className="py-10 text-center text-sm text-muted-foreground">
              No results for &ldquo;{query}&rdquo;
            </p>
          ) : (
            Object.entries(groups).map(([groupName, items]) => (
              <div key={groupName} className="mb-1">
                <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {groupName}
                </p>
                {items.map((cmd) => {
                  const index = flatIndex++;
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={cmd.id}
                      data-index={index}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={cmd.action}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                        isActive ? "bg-accent" : "hover:bg-accent/50"
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border",
                          isActive
                            ? "border-border bg-background text-foreground"
                            : "border-border/50 bg-muted text-muted-foreground"
                        )}
                      >
                        <cmd.icon size={15} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={cn(
                            "text-sm font-medium",
                            isActive ? "text-foreground" : "text-foreground/80"
                          )}
                        >
                          {cmd.label}
                        </p>
                        {cmd.description && (
                          <p className="text-xs text-muted-foreground truncate">
                            {cmd.description}
                          </p>
                        )}
                      </div>
                      {isActive && (
                        <kbd className="flex-shrink-0 inline-flex items-center gap-0.5 rounded border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground font-mono">
                          <CornerDownLeft size={9} />
                          <span>enter</span>
                        </kbd>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border px-4 py-2 flex items-center gap-4 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border px-1 py-0.5 font-mono text-[10px]">↑</kbd>
            <kbd className="rounded border border-border px-1 py-0.5 font-mono text-[10px]">↓</kbd>
            navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border px-1 py-0.5 font-mono text-[10px]">↵</kbd>
            select
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border px-1 py-0.5 font-mono text-[10px]">esc</kbd>
            close
          </span>
        </div>
      </div>
    </div>
  );
}
