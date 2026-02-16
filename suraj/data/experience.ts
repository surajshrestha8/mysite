export interface Experience {
  title: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "2024 - Present",
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2024 - Present",
    description:
      "Working with international clients to deliver high-quality web applications and digital solutions.",
    highlights: [
      "Developed and deployed 10+ production web applications",
      "Specialized in Next.js and React ecosystem",
      "Implemented CI/CD pipelines and automated testing",
      "Collaborated with designers to create pixel-perfect UIs",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
  },
  {
    title: "2023 - 2024",
    role: "Frontend Developer",
    company: "Tech Startup",
    companyUrl: "#",
    period: "2023 - 2024",
    description:
      "Built and maintained the frontend architecture for a SaaS product serving thousands of users.",
    highlights: [
      "Led the migration from JavaScript to TypeScript",
      "Reduced bundle size by 40% through code splitting",
      "Implemented responsive designs for mobile-first experience",
      "Mentored junior developers on React best practices",
    ],
    technologies: ["React", "TypeScript", "Redux", "Styled Components", "Jest"],
  },
  {
    title: "2022 - 2023",
    role: "Junior Developer",
    company: "Digital Agency",
    companyUrl: "#",
    period: "2022 - 2023",
    description:
      "Started my professional career building websites and web applications for various clients.",
    highlights: [
      "Built 15+ client websites using modern web technologies",
      "Learned agile development methodologies",
      "Contributed to open-source projects",
      "Developed skills in both frontend and backend development",
    ],
    technologies: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
];
