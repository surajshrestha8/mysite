"use client";
import React, { useEffect, useState } from "react";
import {
  m,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkActive = () => {
      // The "trigger line" sits 40% from the top of the viewport.
      // The active section is the last one whose top edge is above that line.
      const triggerY = window.scrollY + window.innerHeight * 0.4;
      let current = "";
      for (const item of navItems) {
        const el = document.querySelector(item.link) as HTMLElement | null;
        if (!el) continue;
        if (el.offsetTop <= triggerY) current = item.link;
      }
      setActiveSection(current);
    };

    checkActive();
    window.addEventListener("scroll", checkActive, { passive: true });
    return () => window.removeEventListener("scroll", checkActive);
  }, [navItems]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setScrolled(current > 0.02);
    }
  });

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ── Desktop pill nav (sm and up) ── */}
      <m.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className={cn(
          "fixed inset-x-0 top-6 z-[5000] mx-auto hidden max-w-fit items-center justify-center space-x-4 rounded-full border border-black/[0.08] bg-white/95 py-2 pr-3 pl-8 shadow-lg shadow-black/[0.03] backdrop-blur-sm transition-shadow duration-300 sm:flex dark:border-white/[0.15] dark:bg-black/95 dark:shadow-black/20",
          scrolled && "shadow-xl shadow-black/[0.08] dark:shadow-black/40",
          className,
        )}
      >
        {navItems.map((navItem) => (
          <a
            key={navItem.link}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 rounded-full px-4 py-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white",
              activeSection === navItem.link &&
                "text-indigo-600 dark:text-white",
            )}
          >
            <span className="relative z-20">{navItem.name}</span>
            {activeSection === navItem.link && (
              <m.span
                layoutId="activeNav"
                className="absolute inset-0 rounded-full border border-indigo-500/50 bg-indigo-500/10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        ))}
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </m.div>

      {/* ── Mobile top bar (below sm) ── */}
      <m.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="fixed inset-x-0 top-0 z-[5000] flex items-center justify-between border-b border-black/[0.06] bg-white/70 px-4 py-3 backdrop-blur-xl sm:hidden dark:border-white/[0.08] dark:bg-black/70"
      >
        <span className="font-mono text-sm font-semibold text-neutral-900 dark:text-white">
          portfolio
        </span>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] bg-white/80 text-neutral-700 backdrop-blur-sm transition-colors hover:bg-white dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-neutral-300 dark:hover:bg-white/[0.1]"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <m.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-4 w-4" />
                </m.span>
              ) : (
                <m.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-4 w-4" />
                </m.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </m.div>

      {/* ── Mobile dropdown menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ opacity: 0, scale: 0.97, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-[57px] z-[4999] px-4 sm:hidden"
          >
            <div className="overflow-hidden rounded-2xl border border-white/40 bg-white/60 shadow-2xl shadow-black/[0.08] backdrop-blur-2xl dark:border-white/[0.1] dark:bg-black/60 dark:shadow-black/40">
              {/* shimmer strip */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />

              <div className="py-1.5">
                {navItems.map((navItem, i) => (
                  <m.a
                    key={navItem.link}
                    href={navItem.link}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15, delay: i * 0.04 }}
                    className={cn(
                      "relative mx-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors hover:text-neutral-900 dark:hover:text-white",
                      activeSection === navItem.link
                        ? "font-medium text-indigo-600 dark:text-indigo-400"
                        : "text-neutral-600 hover:bg-black/[0.04] dark:text-neutral-400 dark:hover:bg-white/[0.06]",
                    )}
                  >
                    {activeSection === navItem.link && (
                      <m.span
                        layoutId="activeNavMobile"
                        className="absolute inset-0 rounded-xl border border-indigo-500/20 bg-indigo-500/[0.08] dark:bg-indigo-500/[0.12]"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    {navItem.icon && (
                      <span className="relative z-10">{navItem.icon}</span>
                    )}
                    <span className="relative z-10">{navItem.name}</span>
                    {activeSection === navItem.link && (
                      <span className="relative z-10 ml-auto h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    )}
                  </m.a>
                ))}
              </div>

              {/* bottom shimmer strip */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent" />
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* ── Backdrop ── */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[4998] bg-black/10 backdrop-blur-[2px] sm:hidden dark:bg-black/20"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
