"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { siteConfig } from "@/data/site-config";

export function About() {
  const { stats } = siteConfig;

  return (
    <SectionWrapper id="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white"
      >
        About{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent dark:from-indigo-400">
          Me
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="glass relative h-72 w-72 overflow-hidden rounded-2xl sm:h-80 sm:w-80">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
              <span className="text-7xl font-bold text-indigo-500/50 dark:text-indigo-400/50">
                {siteConfig.name[0]}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {siteConfig.bio.map((paragraph, index) => (
            <p
              key={index}
              className="leading-relaxed text-neutral-600 dark:text-slate-400"
            >
              {paragraph}
            </p>
          ))}

          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-indigo-500 dark:text-indigo-400">
                {stats.yearsExperience}+
              </div>
              <div className="mt-1 text-xs text-neutral-500 dark:text-slate-500">
                Years Experience
              </div>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-indigo-500 dark:text-indigo-400">
                {stats.projectsCompleted}+
              </div>
              <div className="mt-1 text-xs text-neutral-500 dark:text-slate-500">
                Projects
              </div>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-indigo-500 dark:text-indigo-400">
                {stats.technologiesUsed}+
              </div>
              <div className="mt-1 text-xs text-neutral-500 dark:text-slate-500">
                Technologies
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
