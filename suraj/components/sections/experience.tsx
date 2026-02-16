"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { experiences } from "@/data/experience";
import { ChevronDown, GitCommit, ExternalLink } from "lucide-react";

// Generate a fake but consistent short hash from a string
function fakeHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16).slice(0, 7).padStart(7, "0");
}

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-center text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white"
      >
        Work{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent dark:from-indigo-400">
          Experience
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mb-16 max-w-xl text-center text-neutral-500 dark:text-slate-400"
      >
        My career journey — told through commits
      </motion.p>

      <div className="mx-auto max-w-3xl">
        {/* Git log header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-4 font-mono text-xs text-neutral-400 dark:text-slate-500"
        >
          <span className="text-amber-600 dark:text-amber-400">$</span> git log
          --oneline --graph career
        </motion.div>

        {/* Commit entries */}
        <div className="space-y-3">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            const hash = fakeHash(exp.role + exp.company);
            const isLatest = index === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Commit line (always visible) */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="group flex w-full items-start gap-3 rounded-xl border border-black/[0.06] bg-white p-4 text-left transition-all hover:border-indigo-500/20 hover:shadow-md sm:items-center sm:p-5 dark:border-white/[0.08] dark:bg-[#0f0f0f] dark:hover:border-indigo-500/20"
                >
                  {/* Graph line + commit dot */}
                  <div className="flex shrink-0 items-center gap-2">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                        isLatest
                          ? "border-emerald-500 bg-emerald-500/10"
                          : "border-neutral-300 bg-neutral-100 dark:border-slate-600 dark:bg-slate-800"
                      }`}
                    >
                      <GitCommit
                        className={`h-4 w-4 ${
                          isLatest
                            ? "text-emerald-500"
                            : "text-neutral-400 dark:text-slate-500"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Commit info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-amber-600 dark:text-amber-400">
                        {hash}
                      </span>
                      {isLatest && (
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                          HEAD
                        </span>
                      )}
                      <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-medium text-indigo-600 dark:text-indigo-400">
                        {exp.period}
                      </span>
                    </div>
                    <div className="mt-1.5 text-sm font-semibold text-neutral-900 sm:text-base dark:text-white">
                      {exp.role}{" "}
                      <span className="font-normal text-neutral-500 dark:text-slate-400">
                        at
                      </span>{" "}
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-500 hover:underline dark:text-indigo-400"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <span className="text-indigo-500 dark:text-indigo-400">
                          {exp.company}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expand arrow */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="h-4 w-4 text-neutral-400 dark:text-slate-500" />
                  </motion.div>
                </button>

                {/* Expanded diff view */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 border-l-2 border-dashed border-neutral-200 py-1 pl-7 sm:ml-[22px] dark:border-slate-700">
                        {/* Description as commit message body */}
                        <div className="rounded-lg border border-black/[0.06] bg-neutral-50 p-4 font-mono text-xs leading-6 dark:border-white/[0.06] dark:bg-[#111]">
                          <div className="mb-3 text-[10px] font-semibold tracking-wider text-neutral-400 uppercase dark:text-slate-500">
                            Commit Message
                          </div>
                          <p className="text-neutral-600 dark:text-slate-400">
                            {exp.description}
                          </p>

                          {/* Highlights as diff additions */}
                          <div className="mt-4 border-t border-black/[0.06] pt-3 dark:border-white/[0.06]">
                            <div className="mb-2 text-[10px] font-semibold tracking-wider text-neutral-400 uppercase dark:text-slate-500">
                              Changes
                            </div>
                            {exp.highlights.map((highlight, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 rounded px-2 py-1 text-emerald-700 dark:text-emerald-400"
                              >
                                <span className="shrink-0 font-bold">+</span>
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>

                          {/* Technologies as file changes */}
                          <div className="mt-4 border-t border-black/[0.06] pt-3 dark:border-white/[0.06]">
                            <div className="mb-2 text-[10px] font-semibold tracking-wider text-neutral-400 uppercase dark:text-slate-500">
                              Tech Stack
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-md border border-black/[0.08] bg-white px-2.5 py-1 text-neutral-600 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Stats line */}
                          <div className="mt-4 border-t border-black/[0.06] pt-3 text-neutral-400 dark:border-white/[0.06] dark:text-slate-500">
                            {exp.highlights.length} additions(+),{" "}
                            {exp.technologies.length} files changed
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Git log footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-6 font-mono text-xs text-neutral-400 dark:text-slate-500"
        >
          <span className="text-neutral-300 dark:text-slate-600">────</span> End
          of log{" "}
          <span className="text-neutral-300 dark:text-slate-600">────</span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
