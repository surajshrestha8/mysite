"use client";

import { useEffect } from "react";

export function ConsoleEasterEgg() {
  useEffect(() => {
    // Prevent double logging in strict mode in development
    if (window.hasLoggedEasterEgg) return;
    window.hasLoggedEasterEgg = true;

    // Clear console for dramatic effect (optional, maybe too aggressive)
    // console.clear();

    const titleStyle = [
      "font-size: 40px",
      "font-weight: bold",
      "color: #6366f1", // Indigo-500
      "text-shadow: 2px 2px 0px #000",
      "padding: 20px",
    ].join(";");

    const bodyStyle = [
      "font-size: 14px",
      "color: #888",
      "font-family: monospace",
      "line-height: 1.5",
    ].join(";");

    console.log("%cHello Developer! 👋", titleStyle);

    console.log(
      "%cWelcome to the console. You've discovered the easter egg!\nIf you're looking for clean code and performant apps, you're in the right place.\n\nType `help()` to see available commands (just kidding, try Ctrl+K on the site).",
      bodyStyle,
    );

    console.log(
      "%c\nLooking to hire? Contact me: suraj@example.com\n",
      "font-weight: bold; font-size: 14px; color: #10b981;", // Emerald-500
    );
  }, []);

  return null;
}

// Extend window interface
declare global {
  interface Window {
    hasLoggedEasterEgg?: boolean;
  }
}
