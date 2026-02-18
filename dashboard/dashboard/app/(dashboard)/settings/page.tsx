"use client";

import { Header } from "@/components/layout/header";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor, Save, Trash2, Bell, Mail, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={cn(
        "relative inline-flex h-5 w-9 items-center rounded-full transition-colors",
        enabled ? "bg-primary" : "bg-muted"
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform",
          enabled ? "translate-x-4" : "translate-x-0.5"
        )}
      />
    </button>
  );
}

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [notifications, setNotifications] = useState({
    emailSignup: true,
    emailPayment: true,
    emailChurn: false,
    pushAll: true,
    pushPayment: true,
    pushChurn: true,
  });

  useEffect(() => setMounted(true), []);

  const toggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <Header title="Settings" subtitle="Manage your account preferences" />
      <div className="p-4 lg:p-6 space-y-6 max-w-3xl">

        {/* Profile */}
        <div className="rounded-xl border border-border bg-card p-6 animate-fade-in">
          <h2 className="text-base font-semibold text-foreground mb-5">Profile</h2>
          <div className="flex items-start gap-5 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold flex-shrink-0">
              SS
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Profile photo</p>
              <p className="text-xs text-muted-foreground mt-0.5">JPG, PNG or GIF. Max 2MB.</p>
              <button className="mt-2 text-xs font-medium text-primary hover:underline">
                Change photo
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Full Name", value: "Suraj Shrestha", type: "text" },
              { label: "Email", value: "firminosuraj1892@gmail.com", type: "email" },
              { label: "Role", value: "Admin", type: "text" },
              { label: "Company", value: "Dashboard", type: "text" },
            ].map(({ label, value, type }) => (
              <div key={label}>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  {label}
                </label>
                <input
                  type={type}
                  defaultValue={value}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-end">
            <button className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
              <Save size={14} />
              Save changes
            </button>
          </div>
        </div>

        {/* Appearance */}
        <div className="rounded-xl border border-border bg-card p-6 animate-fade-in">
          <h2 className="text-base font-semibold text-foreground mb-2">Appearance</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Choose how SaasDash looks on your device.
          </p>

          {mounted && (
            <div className="grid grid-cols-3 gap-3">
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
                  className={cn(
                    "flex flex-col items-center gap-3 rounded-lg border-2 p-4 transition-all",
                    theme === value
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-muted-foreground/30 hover:bg-muted/50"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full",
                      theme === value ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    )}
                  >
                    <Icon size={20} />
                  </div>
                  <span className={cn("text-sm font-medium", theme === value ? "text-primary" : "text-muted-foreground")}>
                    {label}
                  </span>
                  {theme === value && (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                      <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="rounded-xl border border-border bg-card p-6 animate-fade-in">
          <h2 className="text-base font-semibold text-foreground mb-2">Notifications</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Configure when and how you receive notifications.
          </p>

          <div className="space-y-5">
            {/* Email section */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Mail size={14} className="text-muted-foreground" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</span>
              </div>
              <div className="space-y-3 pl-5">
                {[
                  { key: "emailSignup" as const, label: "New signups", desc: "When a new user registers" },
                  { key: "emailPayment" as const, label: "Payments", desc: "When a payment is processed" },
                  { key: "emailChurn" as const, label: "Cancellations", desc: "When a subscription is cancelled" },
                ].map(({ key, label, desc }) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                    <Toggle enabled={notifications[key]} onChange={() => toggle(key)} />
                  </div>
                ))}
              </div>
            </div>

            {/* Push section */}
            <div className="pt-4 border-t border-border">
              <div className="flex items-center gap-2 mb-3">
                <Smartphone size={14} className="text-muted-foreground" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Push</span>
              </div>
              <div className="space-y-3 pl-5">
                {[
                  { key: "pushAll" as const, label: "All activity", desc: "All dashboard events" },
                  { key: "pushPayment" as const, label: "Payments only", desc: "Only payment events" },
                  { key: "pushChurn" as const, label: "Churn alerts", desc: "Cancellation events" },
                ].map(({ key, label, desc }) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                    <Toggle enabled={notifications[key]} onChange={() => toggle(key)} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="rounded-xl border border-red-200 dark:border-red-900/50 bg-card p-6 animate-fade-in">
          <h2 className="text-base font-semibold text-red-600 dark:text-red-400 mb-2">Danger Zone</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Irreversible actions. Please proceed with caution.
          </p>
          <button className="flex items-center gap-2 rounded-md border border-red-300 dark:border-red-800 px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors">
            <Trash2 size={14} />
            Delete account
          </button>
        </div>
      </div>
    </>
  );
}
