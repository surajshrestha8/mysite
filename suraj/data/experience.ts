interface Experience {
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
    title: "2021 - Current",
    role: "Frontend Developer",
    company: "3P Trades",
    companyUrl: "https://www.3ptrades.com/",
    period: "2021 - Current",
    description: "Built and maintained different React and Next JS projects.",
    highlights: [
      "Started as in intern in React and now working as a frontend developer",
      "Learned and implemented different technologies",
      "Agile development methodology",
      "Implemented responsive designs",
      "Developed reusable and scalable componments using Kendo React",
      "Mentored junior developers on Next JS",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Kendo",
      "NextJs",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Payload CMS",
    ],
  },
  {
    title: "2019 - 2021",
    role: "Wordpress Developer",
    company: "Aankhijhyal Technologies",
    companyUrl: "#",
    period: "2019 - 2021",
    description:
      "Started my professional career building websites using  wordpress for clients from different places of Nepal.",
    highlights: [
      "Built 10+ websites using wordpress",
      "Involved in providing digital marketing training to different organiations",
      "Developed skills in wordpress plugin development",
    ],
    technologies: ["HTML/CSS", "JavaScript", "Wordpress"],
  },
];
