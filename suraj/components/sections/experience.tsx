"use client";

import { motion } from "motion/react";
import { Timeline } from "@/components/ui/timeline";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { experiences } from "@/data/experience";

export function Experience() {
  const timelineData = experiences.map((exp) => ({
    title: exp.title,
    content: (
      <div>
        <h4 className="mb-1 text-lg font-semibold text-white">{exp.role}</h4>
        {exp.companyUrl ? (
          <a
            href={exp.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 transition-colors hover:text-indigo-300"
          >
            {exp.company}
          </a>
        ) : (
          <span className="text-indigo-400">{exp.company}</span>
        )}

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {exp.description}
        </p>

        <ul className="mt-4 space-y-2">
          {exp.highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-slate-400"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <SectionWrapper id="experience" className="px-0 sm:px-0 lg:px-0">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl"
      >
        Work{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          Experience
        </span>
      </motion.h2>

      <Timeline data={timelineData} />
    </SectionWrapper>
  );
}
