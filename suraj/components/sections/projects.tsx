"use client";

import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { projects } from "@/data/projects";

function BrowserMockup({
  title,
  gradient,
  url,
}: {
  title: string;
  gradient: string;
  url?: string;
}) {
  return (
    <div className="overflow-hidden rounded-t-xl border border-b-0 border-black/[0.06] bg-neutral-100 dark:border-white/[0.08] dark:bg-[#1a1a1a]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-black/[0.06] px-4 py-2.5 dark:border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-2 flex flex-1 items-center rounded-md bg-black/[0.04] px-3 py-1 dark:bg-white/[0.06]">
          <svg
            className="mr-1.5 h-3 w-3 text-neutral-400 dark:text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
            />
          </svg>
          <span className="truncate text-[10px] text-neutral-400 dark:text-slate-500">
            {url || `${title.toLowerCase().replace(/\s+/g, "-")}.vercel.app`}
          </span>
        </div>
      </div>

      {/* Website preview area */}
      <div className="relative h-48 overflow-hidden sm:h-56">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90`}
        />
        {/* Fake UI elements */}
        <div className="relative flex h-full flex-col p-6">
          {/* Fake navbar */}
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-16 rounded-full bg-white/30" />
            <div className="flex gap-3">
              <div className="h-2 w-10 rounded-full bg-white/20" />
              <div className="h-2 w-10 rounded-full bg-white/20" />
              <div className="h-2 w-10 rounded-full bg-white/20" />
            </div>
          </div>
          {/* Fake hero content */}
          <div className="mt-auto space-y-3">
            <div className="h-4 w-3/4 rounded-full bg-white/30" />
            <div className="h-3 w-1/2 rounded-full bg-white/20" />
            <div className="flex gap-2 pt-1">
              <div className="h-6 w-20 rounded-md bg-white/25" />
              <div className="h-6 w-16 rounded-md bg-white/15" />
            </div>
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
          <div className="flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 font-medium text-neutral-900 shadow-xl backdrop-blur-sm">
            <span className="text-sm">View Project</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-center text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white"
      >
        Featured{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent dark:from-indigo-400">
          Projects
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mb-16 max-w-xl text-center text-neutral-500 dark:text-slate-400"
      >
        A selection of projects I&apos;ve built and contributed to
      </motion.p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group ${project.featured ? "md:col-span-2" : ""}`}
          >
            <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/[0.04] dark:border-white/[0.08] dark:bg-[#0f0f0f] dark:hover:shadow-indigo-500/[0.06]">
              {/* Browser mockup */}
              {project.featured ? (
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <BrowserMockup
                    title={project.title}
                    gradient={project.gradient}
                    url={project.liveUrl !== "#" ? project.liveUrl : undefined}
                  />
                  <div className="flex flex-col justify-center p-6 md:p-8">
                    <h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-neutral-600 dark:text-slate-400">
                      {project.description}
                    </p>
                    <div className="mb-5 flex flex-wrap gap-2">
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
                          className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live Demo
                        </a>
                      )}
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-black/[0.1] px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-black/[0.03] dark:border-white/[0.1] dark:text-slate-300 dark:hover:bg-white/[0.03]"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <BrowserMockup
                    title={project.title}
                    gradient={project.gradient}
                    url={project.liveUrl !== "#" ? project.liveUrl : undefined}
                  />
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
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
                          className="inline-flex items-center gap-2 text-sm text-indigo-500 transition-colors hover:text-indigo-400"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
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
                          <Github className="h-3.5 w-3.5" />
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
