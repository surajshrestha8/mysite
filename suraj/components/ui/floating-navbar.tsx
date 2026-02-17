"use client";
import React, { JSX, useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
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

  useEffect(() => {
    const observers = navItems.map((item) => {
      const element = document.querySelector(item.link);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(item.link);
            }
          });
        },
        { threshold: 0.5 },
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [navItems]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setScrolled(current > 0.02);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className={cn(
        "fixed inset-x-0 top-6 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-black/[0.08] bg-white/95 py-2 pr-2 pl-8 shadow-lg shadow-black/[0.03] backdrop-blur-sm transition-shadow duration-300 dark:border-white/[0.15] dark:bg-black/95 dark:shadow-black/20",
        scrolled && "shadow-xl shadow-black/[0.08] dark:shadow-black/40",
        className,
      )}
    >
      {navItems.map((navItem, idx: number) => (
        <a
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative flex items-center space-x-1 rounded-full px-4 py-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white",
            activeSection === navItem.link && "text-indigo-600 dark:text-white",
          )}
        >
          <span className="relative z-20 block sm:hidden">{navItem.icon}</span>
          <span className="relative z-20 hidden text-sm sm:block">
            {navItem.name}
          </span>
          {activeSection === navItem.link && (
            <motion.span
              layoutId="activeNav"
              className="absolute inset-0 rounded-full border border-indigo-500/50 bg-indigo-500/10"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </a>
      ))}
      <div className="flex items-center gap-3">
        <ModeToggle />
      </div>
    </motion.div>
  );
};
