import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiGit,
  SiVercel,
  SiPayloadcms,
  SiAmazon,
  SiAmazonwebservices,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export interface Skill {
  name: string;
  icon: React.ElementType;
  color: string; // Brand hex color for hover effect
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building beautiful, responsive user interfaces",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "Backend",
    description: "Scalable server-side solutions and APIs",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "Payload CMS", icon: SiPayloadcms, color: "#2D3748" },
    ],
  },
  {
    title: "Database",
    description: "Data storage and management",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
    ],
  },
  {
    title: "Tools",
    description: "Development workflow and deployment",
    skills: [
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    ],
  },
];

export const allSkills = skillCategories.flatMap((cat) => cat.skills);
