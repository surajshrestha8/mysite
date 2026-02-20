"use client";

import { useEffect, useState } from "react";
import { m, useInView } from "motion/react";
import { useRef } from "react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { siteConfig } from "@/data/site-config";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// Line numbers and syntax highlighting for the code editor
function CodeLine({
  lineNumber,
  children,
  delay = 0,
}: {
  lineNumber: number;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <m.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="flex"
    >
      <span className="mr-6 inline-block w-5 text-right text-neutral-400/50 select-none dark:text-slate-600">
        {lineNumber}
      </span>
      <span className="flex-1">{children}</span>
    </m.div>
  );
}

// Syntax highlighting helpers
const keyword = (text: string) => (
  <span className="text-purple-600 dark:text-purple-400">{text}</span>
);
const variable = (text: string) => (
  <span className="text-blue-600 dark:text-blue-300">{text}</span>
);
const string = (text: string) => (
  <span className="text-emerald-600 dark:text-emerald-400">
    &quot;{text}&quot;
  </span>
);
const number = (val: string) => (
  <span className="text-amber-600 dark:text-amber-400">{val}</span>
);
const comment = (text: string) => (
  <span className="text-neutral-400 italic dark:text-slate-500">
    {`// ${text}`}
  </span>
);
const punctuation = (text: string) => (
  <span className="text-neutral-500 dark:text-slate-400">{text}</span>
);
const property = (text: string) => (
  <span className="text-rose-600 dark:text-rose-400">{text}</span>
);
const bracket = (text: string) => (
  <span className="text-yellow-600 dark:text-yellow-400">{text}</span>
);

export function About() {
  const { stats } = siteConfig;

  return (
    <SectionWrapper id="about">
      <m.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-center text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white"
      >
        About{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent dark:from-indigo-400">
          Me
        </span>
      </m.h2>

      <m.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mb-16 max-w-xl text-center text-neutral-500 dark:text-slate-400"
      >
        Get to know me — developer style
      </m.p>

      <div className="mx-auto max-w-3xl">
        {/* Code editor window */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-hidden rounded-xl border border-black/[0.06] shadow-xl dark:border-white/[0.08]"
        >
          {/* Editor title bar */}
          <div className="flex items-center justify-between border-b border-black/[0.06] bg-neutral-100 px-4 py-2.5 dark:border-white/[0.06] dark:bg-[#1e1e1e]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
            </div>
            {/* File tabs */}
            <div className="flex items-center gap-1">
              <div className="rounded-t-md bg-white px-4 py-1.5 text-xs font-medium text-neutral-700 dark:bg-[#1a1a1a] dark:text-slate-300">
                <span className="mr-1.5 text-blue-500">TS</span>
                aboutMe.ts
              </div>
              <div className="rounded-t-md px-4 py-1.5 text-xs text-neutral-400 dark:text-slate-600">
                skills.ts
              </div>
            </div>
            <div className="w-16" /> {/* Spacer for centering */}
          </div>

          {/* Code content */}
          <div className="bg-white p-5 font-mono text-[13px] leading-6 sm:p-6 sm:text-sm sm:leading-7 dark:bg-[#1a1a1a]">
            <CodeLine lineNumber={1} delay={0.1}>
              {keyword("const")} {variable("aboutMe")} {punctuation("=")}{" "}
              {bracket("{")}
            </CodeLine>

            <CodeLine lineNumber={2} delay={0.15}>
              {"  "}
              {property("name")}
              {punctuation(":")} {string(siteConfig.fullName)}
              {punctuation(",")}
            </CodeLine>

            <CodeLine lineNumber={3} delay={0.2}>
              {"  "}
              {property("role")}
              {punctuation(":")} {string(siteConfig.title)}
              {punctuation(",")}
            </CodeLine>

            <CodeLine lineNumber={4} delay={0.25}>
              {"  "}
              {property("location")}
              {punctuation(":")} {string(siteConfig.location)}
              {punctuation(",")}
            </CodeLine>

            {/* <CodeLine lineNumber={5} delay={0.3}>
              {"  "}
              {property("available")}
              {punctuation(":")} {keyword("true")}
              {punctuation(",")} {comment("open to opportunities")}
            </CodeLine> */}

            <CodeLine lineNumber={6} delay={0.35}>
              &nbsp;
            </CodeLine>

            <CodeLine lineNumber={7} delay={0.4}>
              {"  "}
              {property("experience")}
              {punctuation(":")} {bracket("{")}
            </CodeLine>

            <CodeLine lineNumber={8} delay={0.45}>
              {"    "}
              {property("years")}
              {punctuation(":")} {number(`${stats.yearsExperience}`)}
              {punctuation(",")}
            </CodeLine>

            <CodeLine lineNumber={9} delay={0.5}>
              {"    "}
              {property("projects")}
              {punctuation(":")} {number(`${stats.projectsCompleted}`)}
              {punctuation(",")}
            </CodeLine>

            <CodeLine lineNumber={10} delay={0.55}>
              {"    "}
              {property("technologies")}
              {punctuation(":")} {number(`${stats.technologiesUsed}`)}
              {punctuation(",")}
            </CodeLine>

            <CodeLine lineNumber={11} delay={0.6}>
              {"  "}
              {bracket("}")}
              {punctuation(",")}
            </CodeLine>

            <CodeLine lineNumber={12} delay={0.65}>
              &nbsp;
            </CodeLine>

            <CodeLine lineNumber={13} delay={0.7}>
              {"  "}
              {property("bio")}
              {punctuation(":")} {bracket("[")}
            </CodeLine>

            {siteConfig.bio.map((paragraph, index) => (
              <CodeLine
                key={paragraph}
                lineNumber={14 + index}
                delay={0.75 + index * 0.1}
              >
                {"    "}
                {string(paragraph)}
                {punctuation(",")}
              </CodeLine>
            ))}

            <CodeLine
              lineNumber={14 + siteConfig.bio.length}
              delay={0.75 + siteConfig.bio.length * 0.1}
            >
              {"  "}
              {bracket("]")}
              {punctuation(",")}
            </CodeLine>

            <CodeLine
              lineNumber={15 + siteConfig.bio.length}
              delay={0.8 + siteConfig.bio.length * 0.1}
            >
              &nbsp;
            </CodeLine>

            <CodeLine
              lineNumber={16 + siteConfig.bio.length}
              delay={0.85 + siteConfig.bio.length * 0.1}
            >
              {"  "}
              {property("passions")}
              {punctuation(":")} {bracket("[")}
              {string("clean code")}
              {punctuation(",")} {string("hiking")}
              {punctuation(",")} {string("new tech")}
              {punctuation(",")} {string("football")}
              {bracket("]")}
              {punctuation(",")}
            </CodeLine>

            <CodeLine
              lineNumber={17 + siteConfig.bio.length}
              delay={0.9 + siteConfig.bio.length * 0.1}
            >
              {bracket("}")}
              {punctuation(";")}
            </CodeLine>

            <CodeLine
              lineNumber={18 + siteConfig.bio.length}
              delay={0.95 + siteConfig.bio.length * 0.1}
            >
              &nbsp;
            </CodeLine>

            <CodeLine
              lineNumber={19 + siteConfig.bio.length}
              delay={1.0 + siteConfig.bio.length * 0.1}
            >
              {keyword("export default")} {variable("aboutMe")}
              {punctuation(";")}
            </CodeLine>
          </div>
        </m.div>

        {/* Stats below editor */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { label: "Years Experience", value: stats.yearsExperience },
            { label: "Projects Shipped", value: stats.projectsCompleted },
            { label: "Technologies", value: stats.technologiesUsed },
          ].map((stat, index) => (
            <m.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
              className="rounded-xl border border-black/[0.06] bg-white p-4 text-center transition-colors hover:border-indigo-500/20 dark:border-white/[0.08] dark:bg-[#0f0f0f]"
            >
              <div className="text-2xl font-bold text-indigo-500 dark:text-indigo-400">
                <AnimatedCounter target={stat.value} suffix="+" />
              </div>
              <div className="mt-1 text-xs text-neutral-500 dark:text-slate-500">
                {stat.label}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
