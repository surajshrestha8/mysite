"use client";

import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { skillCategories, allSkills } from "@/data/skills";
import { Code2, Server, Database, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 className="h-5 w-5 text-indigo-400" />,
  Backend: <Server className="h-5 w-5 text-indigo-400" />,
  Database: <Database className="h-5 w-5 text-indigo-400" />,
  "Tools & DevOps": <Wrench className="h-5 w-5 text-indigo-400" />,
};

const techTickerItems = allSkills.map((skill) => ({
  quote: skill,
  name: skill,
  title: "",
}));

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl"
      >
        Skills &{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
          Technologies
        </span>
      </motion.h2>

      <BentoGrid className="md:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, index) => (
          <BentoGridItem
            key={index}
            title={category.title}
            description={category.description}
            icon={categoryIcons[category.title]}
            className="border-white/[0.08] bg-[#0f0f0f]"
            header={
              <div className="flex flex-wrap gap-2 p-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-slate-300 transition-colors hover:border-indigo-500/50 hover:text-indigo-300"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            }
          />
        ))}
      </BentoGrid>

      <div className="mt-12">
        <InfiniteMovingCards
          items={techTickerItems}
          direction="left"
          speed="slow"
          pauseOnHover={false}
          className="[&_blockquote>div]:hidden [&_blockquote>span:first-child]:font-medium [&_blockquote>span:first-child]:text-indigo-300 [&_li]:w-auto [&_li]:border-white/[0.08] [&_li]:bg-[#0f0f0f] [&_li]:px-6 [&_li]:py-3"
        />
      </div>
    </SectionWrapper>
  );
}
