export interface Skill {
  name: string;
  category: string;
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
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Framer Motion", category: "Frontend" },
      { name: "HTML/CSS", category: "Frontend" },
    ],
  },
  {
    title: "Backend",
    description: "Scalable server-side solutions and APIs",
    skills: [
      { name: "Node.js", category: "Backend" },
      { name: "Express", category: "Backend" },
      { name: "REST APIs", category: "Backend" },
      { name: "GraphQL", category: "Backend" },
      { name: "Prisma", category: "Backend" },
    ],
  },
  {
    title: "Database",
    description: "Data storage and management",
    skills: [
      { name: "PostgreSQL", category: "Database" },
      { name: "MongoDB", category: "Database" },
      { name: "Redis", category: "Database" },
      { name: "Supabase", category: "Database" },
    ],
  },
  {
    title: "Tools & DevOps",
    description: "Development workflow and deployment",
    skills: [
      { name: "Git", category: "Tools" },
      { name: "Docker", category: "Tools" },
      { name: "Vercel", category: "Tools" },
      { name: "GitHub Actions", category: "Tools" },
      { name: "Linux", category: "Tools" },
    ],
  },
];

export const allSkills = skillCategories.flatMap((cat) =>
  cat.skills.map((s) => s.name),
);
