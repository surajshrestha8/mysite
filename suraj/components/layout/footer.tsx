import { GitBranch, X, AlertCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-neutral-100 text-xs text-neutral-600 dark:border-white/[0.08] dark:bg-[#007acc] dark:text-white">
      <div className="flex h-8 w-full items-center justify-between px-3">
        {/* Left section: Git branch & problems */}
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-neutral-900 dark:hover:text-white/80"
          >
            <GitBranch className="h-3.5 w-3.5" />
            <span>main*</span>
          </a>
          <div className="hidden items-center gap-1.5 sm:flex">
            <X className="h-3.5 w-3.5 text-neutral-400 dark:text-white/80" />
            <span>0</span>
            <AlertCircle className="h-3.5 w-3.5 text-neutral-400 dark:text-yellow-400" />
            <span>0</span>
          </div>
        </div>

        {/* Center section: Credit (hidden on mobile) */}
        <div className="hidden text-neutral-500 sm:block dark:text-white/90">
          Made with Next.js by {siteConfig.name}
        </div>

        {/* Right section: Language & Encoding */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden sm:inline">Ln 42, Col 1</span>
            <span className="hidden sm:inline">UTF-8</span>
            <span className="font-semibold text-indigo-600 dark:text-white">
              TypeScript React
            </span>
          </div>
          <div className="ml-2 hidden items-center gap-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-indigo-500 dark:bg-white" />
            <span className="text-[10px]">Prettier</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
