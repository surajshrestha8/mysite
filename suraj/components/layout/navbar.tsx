"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/navigation";

export function Navbar() {
  return (
    <nav aria-label="Primary navigation">
      <FloatingNav
        navItems={navItems}
        className="glass border-white/[0.08] bg-black/80"
      />
    </nav>
  );
}
