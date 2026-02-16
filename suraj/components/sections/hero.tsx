"use client";

import { motion } from "motion/react";
import { MapPin, ArrowDown } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { siteConfig } from "@/data/site-config";

const roles = ["websites", "applications", "experiences", "solutions"];

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#6366f1"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-slate-400"
        >
          <MapPin className="h-4 w-4 text-indigo-400" />
          {siteConfig.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m {siteConfig.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 text-2xl text-slate-300 sm:text-3xl md:text-4xl"
        >
          I build
          <FlipWords words={roles} className="font-semibold text-indigo-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <TextGenerateEffect
            words={siteConfig.description}
            className="mx-auto mt-6 max-w-2xl text-base text-slate-400"
            duration={0.3}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-full bg-indigo-500 px-8 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/[0.15] px-8 text-sm font-medium text-white transition-colors hover:border-white/[0.3] hover:bg-white/[0.03]"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6 text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
