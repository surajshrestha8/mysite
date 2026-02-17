export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
  gradient: string; // Gradient for the browser mockup placeholder
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
    gradient: "from-violet-600 via-indigo-500 to-cyan-400",
  },
  {
    title: "Saas Dashboard",
    description: "A comprehensive SaaS dashboard with analytics",
    tags: ["React", "Next JS", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://dashboard-lyart-three-78.vercel.app/",
    sourceUrl:
      "https://github.com/surajshrestha8/mysite/tree/main/dashboard/dashboard",
    featured: true,
    image: "/images/projects/saas.png",
    gradient: "from-orange-500 via-rose-500 to-pink-500",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content creation tool that generates blog posts, social media content, and marketing copy using OpenAI's API.",
    tags: ["Next.js", "OpenAI", "TypeScript", "Prisma", "Supabase"],
    liveUrl: "#",
    sourceUrl: "#",
    featured: false,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    title: "Real-Time Chat App",
    description:
      "A modern messaging application with real-time communication, file sharing, and group chat capabilities.",
    tags: ["React", "WebSocket", "Express", "Redis", "Docker"],
    liveUrl: "#",
    sourceUrl: "#",
    featured: false,
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
  },
  {
    title: "Travel Website",
    description:
      "This very travel  website built with Next.js, Tailwind CSS, and Payload CMS with a focus on performance and animations.",
    tags: ["Next.js", "Tailwind CSS", "Payload CMS", "TypeScript"],
    liveUrl: "https://greengetaways.vercel.app/",
    sourceUrl: "https://github.com/surajshrestha8/greengetaways",
    image: "/images/projects/greengetaways.png",
    featured: false,
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
    tags: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
    liveUrl: "#",
    sourceUrl: "#",
    featured: false,
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
  },
];
