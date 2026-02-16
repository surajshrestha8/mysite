export interface Skill {
  name: string;
  icon: string; // Simple Icons slug (used with cdn.simpleicons.org)
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
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Next.js", icon: "nextdotjs", color: "#000000" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Framer Motion", icon: "framer", color: "#0055FF" },
      { name: "HTML5", icon: "html5", color: "#E34F26" },
      { name: "CSS3", icon: "css3", color: "#1572B6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
    ],
  },
  {
    title: "Backend",
    description: "Scalable server-side solutions and APIs",
    skills: [
      { name: "Node.js", icon: "nodedotjs", color: "#5FA04E" },
      { name: "Express", icon: "express", color: "#000000" },
      { name: "GraphQL", icon: "graphql", color: "#E10098" },
      { name: "Prisma", icon: "prisma", color: "#2D3748" },
      { name: "Python", icon: "python", color: "#3776AB" },
    ],
  },
  {
    title: "Database",
    description: "Data storage and management",
    skills: [
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "Redis", icon: "redis", color: "#FF4438" },
      { name: "Supabase", icon: "supabase", color: "#3FCF8E" },
    ],
  },
  {
    title: "Tools & DevOps",
    description: "Development workflow and deployment",
    skills: [
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Vercel", icon: "vercel", color: "#000000" },
      { name: "GitHub Actions", icon: "githubactions", color: "#2088FF" },
      { name: "Linux", icon: "linux", color: "#FCC624" },
      { name: "VS Code", icon: "visualstudiocode", color: "#007ACC" },
    ],
  },
];

export const allSkills = skillCategories.flatMap((cat) => cat.skills);
