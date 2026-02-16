"use client";

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white"
      >
        Featured{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent dark:from-indigo-400">
          Projects
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`glass group overflow-hidden rounded-2xl transition-all hover:border-indigo-500/30 ${
              project.featured ? "md:col-span-2" : ""
            }`}
          >
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
              <div className="flex h-full items-center justify-center">
                <span className="text-4xl font-bold text-indigo-500/30 dark:text-indigo-400/30">
                  {project.title[0]}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-[#0a0a0a]" />
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-neutral-600 dark:text-slate-400">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-xs text-neutral-500 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-indigo-400 transition-colors hover:text-indigo-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-700 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
