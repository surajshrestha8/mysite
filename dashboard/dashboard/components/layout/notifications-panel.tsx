"use client";

import { X, UserPlus, TrendingUp, XCircle, CreditCard, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";
import { Notification } from "@/data/mock/notifications";

const typeConfig = {
  signup: { icon: UserPlus, color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  upgrade: { icon: TrendingUp, color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
  cancel: { icon: XCircle, color: "bg-red-500/10 text-red-600 dark:text-red-400" },
  payment: { icon: CreditCard, color: "bg-purple-500/10 text-purple-600 dark:text-purple-400" },
  trial: { icon: Clock, color: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
};

interface NotificationsPanelProps {
  isOpen: boolean;
  notifications: Notification[];
  onClose: () => void;
  onMarkAllRead: () => void;
}

export function NotificationsPanel({
  isOpen,
  notifications,
  onClose,
  onMarkAllRead,
}: NotificationsPanelProps) {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/30 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 w-80 h-full border-l bg-background shadow-xl transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center gap-2 border-b px-4 py-3 flex-shrink-0">
          <h2 className="text-sm font-semibold text-foreground flex-1">Notifications</h2>
          {unreadCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-semibold text-primary-foreground">
              {unreadCount}
            </span>
          )}
          {unreadCount > 0 && (
            <button
              onClick={onMarkAllRead}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Mark all read
            </button>
          )}
          <button
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <X size={14} />
          </button>
        </div>

        {/* Notification list */}
        <div className="flex-1 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-2 text-center px-6">
              <p className="text-sm font-medium text-foreground">All caught up!</p>
              <p className="text-xs text-muted-foreground">No notifications to show.</p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {notifications.map((notification) => {
                const { icon: Icon, color } = typeConfig[notification.type];
                return (
                  <div
                    key={notification.id}
                    className={cn(
                      "flex items-start gap-3 px-4 py-3",
                      !notification.read && "bg-primary/5"
                    )}
                  >
                    <div
                      className={cn(
                        "mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg",
                        color
                      )}
                    >
                      <Icon size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <p className="text-xs font-medium text-foreground leading-snug">
                          {notification.title}
                        </p>
                        {!notification.read && (
                          <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {notification.description}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-1">
                        {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
