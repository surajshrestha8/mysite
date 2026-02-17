"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  DollarSign,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { customers } from "@/data/mock/customers";

const navGroups = [
  {
    label: "Main",
    items: [
      { href: "/", icon: LayoutDashboard, label: "Overview", badge: null },
      { href: "/analytics", icon: BarChart3, label: "Analytics", badge: null },
      { href: "/customers", icon: Users, label: "Customers", badge: customers.length },
      { href: "/revenue", icon: DollarSign, label: "Revenue", badge: null },
    ],
  },
  {
    label: "Account",
    items: [
      { href: "/settings", icon: Settings, label: "Settings", badge: null },
    ],
  },
];

// Flat list used by the mobile bottom nav
const navItems = navGroups.flatMap((g) => g.items);

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300 ease-in-out relative",
          collapsed ? "w-16" : "w-60"
        )}
      >
        {/* Logo */}
        <div
          className={cn(
            "flex items-center gap-2.5 px-4 py-5 border-b border-sidebar-border",
            collapsed && "justify-center px-0"
          )}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground flex-shrink-0">
            <Zap size={16} />
          </div>
          {!collapsed && (
            <span className="font-semibold text-sm text-foreground truncate">
              Dashboard
            </span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 p-2 space-y-4 overflow-y-auto">
          {navGroups.map((group, groupIndex) => (
            <div key={group.label}>
              {/* Divider between groups (not before the first) */}
              {groupIndex > 0 && (
                <div className={cn(
                  "mb-3",
                  collapsed ? "border-t border-sidebar-border mx-2" : "border-t border-sidebar-border"
                )} />
              )}

              {/* Group label — hidden when collapsed */}
              {!collapsed && (
                <p className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {group.label}
                </p>
              )}

              {/* Group items */}
              <div className="space-y-0.5">
                {group.items.map(({ href, icon: Icon, label, badge }) => {
                  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      title={collapsed ? label : undefined}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        collapsed && "justify-center px-0",
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-sidebar-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      {/* Icon — with dot indicator in collapsed mode */}
                      <span className="relative flex-shrink-0">
                        <Icon size={18} />
                        {collapsed && badge !== null && (
                          <span className="absolute -top-1 -right-1 flex h-2 w-2 rounded-full bg-primary" />
                        )}
                      </span>

                      {/* Label + pill badge in expanded mode */}
                      {!collapsed && (
                        <>
                          <span className="flex-1">{label}</span>
                          {badge !== null && (
                            <span className={cn(
                              "ml-auto flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-semibold",
                              active
                                ? "bg-primary/15 text-primary"
                                : "bg-muted text-muted-foreground"
                            )}>
                              {badge}
                            </span>
                          )}
                        </>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer: user profile + collapse toggle */}
        <div className="border-t border-sidebar-border p-2 space-y-1">
          {/* User profile */}
          <div
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2",
              collapsed && "justify-center px-0"
            )}
          >
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
              SJ
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate leading-tight">Suraj J</p>
                <p className="text-xs text-muted-foreground leading-tight">Pro plan</p>
              </div>
            )}
          </div>

          {/* Collapse toggle */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={cn(
              "flex items-center gap-2 w-full rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
              collapsed && "justify-center px-0"
            )}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            {!collapsed && <span className="text-xs">Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-sidebar-border bg-sidebar px-2 py-2">
        {navItems.map(({ href, icon: Icon, label, badge }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative flex flex-col items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                active
                  ? "text-primary"
                  : "text-sidebar-foreground hover:text-foreground"
              )}
            >
              <span className="relative">
                <Icon size={20} />
                {badge !== null && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2 rounded-full bg-primary" />
                )}
              </span>
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
