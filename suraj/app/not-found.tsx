"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, Home, Terminal } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-neutral-100 p-4 font-mono text-neutral-900 dark:bg-[#0d1117] dark:text-neutral-200">
      <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-[#161b22]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-[#0d1117]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="ml-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
              user@portfolio: ~/undefined-page
            </div>
          </div>
          <Terminal className="h-4 w-4 text-neutral-400 dark:text-neutral-500" />
        </div>

        {/* Terminal Content */}
        <div className="p-6 text-sm sm:p-8 sm:text-base">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-2">
              <span className="text-emerald-600 dark:text-emerald-400">➜</span>{" "}
              <span className="text-blue-600 dark:text-blue-400">~</span>{" "}
              <span className="text-neutral-900 dark:text-neutral-200">
                cd /undefined-page
              </span>
            </div>
            <div className="mb-6 text-neutral-600 dark:text-neutral-400">
              bash: cd: /undefined-page: No such file or directory
            </div>

            <div className="mb-2">
              <span className="text-emerald-600 dark:text-emerald-400">➜</span>{" "}
              <span className="text-blue-600 dark:text-blue-400">~</span>{" "}
              <span className="text-neutral-900 dark:text-neutral-200">
                debug --status 404
              </span>
            </div>
            <div className="mb-8 space-y-1 text-neutral-600 dark:text-neutral-400">
              <div>Error: Page not found</div>
              <div>Suggestion: Return to base directory</div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => router.back()}
                className="flex items-center justify-center gap-2 rounded-lg bg-neutral-100 px-4 py-2 font-medium text-neutral-900 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>cd ..</span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  (Go Back)
                </span>
              </button>

              <Link
                href="/"
                className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                <Home className="h-4 w-4" />
                <span>cd ~</span>
                <span className="text-xs text-indigo-200 dark:text-indigo-100">
                  (Go Home)
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
