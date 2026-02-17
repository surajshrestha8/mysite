"use client";

import { Bell, Search, User, CreditCard, LogOut } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useState, useEffect, useRef } from "react";
import { NotificationsPanel } from "./notifications-panel";
import { initialNotifications, Notification } from "@/data/mock/notifications";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const avatarMenuItems = [
  { icon: User, label: "Profile" },
  { icon: CreditCard, label: "Billing" },
];

export function Header({ title, subtitle }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  // Notifications: close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Notifications: scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Avatar dropdown: close on outside click or Escape
  useEffect(() => {
    if (!isAvatarOpen) return;
    function handleClick(e: MouseEvent) {
      if (avatarRef.current && !avatarRef.current.contains(e.target as Node)) {
        setIsAvatarOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsAvatarOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAvatarOpen]);

  function handleMarkAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  return (
    <>
      <header className="flex h-16 items-center justify-between border-b border-border bg-background px-4 lg:px-6">
        {/* Left: title */}
        <div>
          <h1 className="text-lg font-semibold text-foreground leading-tight">{title}</h1>
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>

        {/* Right: search, notifications, theme, avatar */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="hidden sm:flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-1.5 text-sm text-muted-foreground w-48 lg:w-64">
            <Search size={14} />
            <span>Search...</span>
          </div>

          {/* Notifications */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span className={cn(
                "absolute top-1 right-1 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold leading-none",
                unreadCount > 9
                  ? "h-4 min-w-4 px-0.5 text-[8px]"
                  : "h-4 w-4 text-[9px]"
              )}>
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </button>

          {/* Theme toggle */}
          <ThemeToggle />

          {/* Avatar + dropdown */}
          <div ref={avatarRef} className="relative">
            <button
              onClick={() => setIsAvatarOpen((prev) => !prev)}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold flex-shrink-0 transition-opacity",
                isAvatarOpen && "opacity-80"
              )}
            >
              SJ
            </button>

            {/* Dropdown menu */}
            {isAvatarOpen && (
              <div className="absolute right-0 top-full mt-2 w-52 rounded-lg border border-border bg-card shadow-lg z-50 overflow-hidden">
                {/* User info header */}
                <div className="px-4 py-3 border-b border-border">
                  <p className="text-sm font-medium text-foreground">Suraj J</p>
                  <p className="text-xs text-muted-foreground truncate">suraj@example.com</p>
                </div>

                {/* Menu items */}
                <div className="p-1">
                  {avatarMenuItems.map(({ icon: Icon, label }) => (
                    <button
                      key={label}
                      onClick={() => setIsAvatarOpen(false)}
                      className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                    >
                      <Icon size={15} className="text-muted-foreground" />
                      {label}
                    </button>
                  ))}
                </div>

                {/* Divider + Log out */}
                <div className="border-t border-border p-1">
                  <button
                    onClick={() => setIsAvatarOpen(false)}
                    className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                  >
                    <LogOut size={15} />
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <NotificationsPanel
        isOpen={isOpen}
        notifications={notifications}
        onClose={() => setIsOpen(false)}
        onMarkAllRead={handleMarkAllRead}
      />
    </>
  );
}
