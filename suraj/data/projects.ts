export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store built with Next.js, Stripe payments, and a custom CMS. Features real-time inventory, order tracking, and an admin dashboard.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    sourceUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, drag-and-drop boards, and team workspace features.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    sourceUrl: "#",
    featured: true,
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content creation tool that generates blog posts, social media content, and marketing copy using OpenAI's API.",
    tags: ["Next.js", "OpenAI", "TypeScript", "Prisma", "Supabase"],
    liveUrl: "#",
    sourceUrl: "#",
    featured: false,
  },
  {
    title: "Real-Time Chat App",
    description:
      "A modern messaging application with real-time communication, file sharing, and group chat capabilities.",
    tags: ["React", "WebSocket", "Express", "Redis", "Docker"],
    liveUrl: "#",
    sourceUrl: "#",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio website built with Next.js, Tailwind CSS, and Framer Motion with a focus on performance and animations.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "#",
    sourceUrl: "#",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
    tags: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
    liveUrl: "#",
    sourceUrl: "#",
    featured: false,
  },
];
