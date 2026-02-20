"use client";

import { m } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function SectionWrapper({
  children,
  id,
  className,
}: SectionWrapperProps) {
  return (
    <m.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8", className)}
    >
      {children}
    </m.section>
  );
}
