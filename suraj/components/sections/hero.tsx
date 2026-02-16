"use client";

import { motion } from "motion/react";
import { MapPin, Terminal, ArrowRight, Mail } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { siteConfig } from "@/data/site-config";
import { useEffect, useState } from "react";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = `> Hello, World! I'm ${siteConfig.name}`;

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50); // Typing speed

    return () => clearInterval(typingEffect);
  }, [fullText]);

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a]">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#6366f1"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center">
        {/* Terminal Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-neutral-100/50 px-3 py-1 font-mono text-xs text-neutral-600 backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-neutral-400"
        >
          <span className="flex h-2 w-2">
            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span>sys_ready</span>
          <span className="mx-1 text-neutral-300 dark:text-neutral-700">|</span>
          <MapPin className="h-3 w-3" />
          <span>~/pokhara/nepal</span>
        </motion.div>

        {/* Main Terminal Heading */}
        <div className="mx-auto min-h-[120px] max-w-4xl sm:min-h-[160px]">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-7xl dark:text-white"
          >
            <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
              {displayText}
            </span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="ml-1 inline-block h-10 w-3 bg-indigo-500 md:h-16 md:w-4"
            />
          </motion.h1>
        </div>

        {/* Streaming Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mx-auto mt-6 max-w-2xl font-mono text-sm leading-relaxed text-neutral-500 sm:text-base dark:text-slate-400"
        >
          <TextGenerateEffect
            words={siteConfig.description}
            className="font-normal text-neutral-600 dark:text-slate-400"
          />
        </motion.div>

        {/* Terminal Command Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-neutral-900 px-8 font-mono text-sm font-medium text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            <span className="mr-2 text-indigo-400 dark:text-indigo-600">$</span>
            cd /projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="group inline-flex h-12 items-center justify-center rounded-lg border border-neutral-200 px-8 font-mono text-sm font-medium text-neutral-800 transition-all hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
          >
            <span className="mr-2 text-neutral-400 dark:text-neutral-600">
              $
            </span>
            ./contact.sh
            <Mail className="ml-2 h-4 w-4 transition-colors group-hover:text-indigo-500" />
          </a>
        </motion.div>

        {/* Background Grid Accent (Optional, built with CSS for simplicity) */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#0a0a0a]"></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[#0a0a0a]"></div>
      </div>
    </section>
  );
}
