"use client";

import { useState } from "react";
import { m } from "motion/react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { skillCategories } from "@/data/skills";
import { Code2, Server, Database, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 className="h-5 w-5" />,
  Backend: <Server className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  Tools: <Wrench className="h-5 w-5" />,
};

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <SectionWrapper id="skills">
      <m.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-center text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white"
      >
        Skills &{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent dark:from-indigo-400">
          Technologies
        </span>
      </m.h2>

      <m.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mb-16 max-w-xl text-center text-neutral-500 dark:text-slate-400"
      >
        Technologies I use to bring ideas to life
      </m.p>

      <div className="space-y-14">
        {skillCategories.map((category, catIndex) => (
          <m.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          >
            {/* Category header */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                {categoryIcons[category.title]}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {category.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-slate-500">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Icon grid */}
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
              {category.skills.map((skill, index) => {
                const isHovered = hoveredSkill === skill.name;

                return (
                  <m.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + index * 0.05,
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group relative flex flex-col items-center gap-2"
                  >
                    <div
                      className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-black/[0.06] bg-neutral-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-20 sm:w-20 dark:border-white/[0.08] dark:bg-[#111]"
                      style={{
                        borderColor: isHovered ? `${skill.color}40` : "",
                        boxShadow: isHovered
                          ? `0 8px 30px ${skill.color}15`
                          : "",
                      }}
                    >
                      <skill.icon
                        className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
                        style={{ color: isHovered ? skill.color : undefined }}
                      />

                      {/* Tooltip */}
                      <div
                        className="pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
                        style={{ backgroundColor: skill.color }}
                      >
                        {skill.name}
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent"
                          style={{ borderTopColor: skill.color }}
                        />
                      </div>
                    </div>

                    {/* Name below icon */}
                    <span className="text-[10px] font-medium text-neutral-400 transition-colors group-hover:text-neutral-600 sm:text-xs dark:text-slate-500 dark:group-hover:text-slate-300">
                      {skill.name}
                    </span>
                  </m.div>
                );
              })}
            </div>
          </m.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
