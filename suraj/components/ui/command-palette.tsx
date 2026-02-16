"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import {
  Code2,
  FileCode,
  Github,
  Laptop,
  Mail,
  Moon,
  Search,
  Sun,
  Terminal,
  User,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <div className="fixed right-4 bottom-4 z-50 flex items-center gap-2 text-xs font-medium text-neutral-500 sm:hidden dark:text-neutral-400">
        <button
          onClick={() => setOpen(true)}
          className="rounded-full border border-neutral-200 bg-neutral-100 p-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-all"
        onClick={() => setOpen(false)}
      >
        <div className="fixed top-1/2 left-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-neutral-200 bg-white p-2 text-neutral-900 shadow-2xl dark:border-neutral-800 dark:bg-[#1a1a1a] dark:text-neutral-100">
          <div className="flex items-center border-b border-neutral-100 px-3 pb-2 dark:border-neutral-800">
            <Search className="mr-2 h-4 w-4 text-neutral-500" />
            <Command.Input
              placeholder="Type a command or search..."
              className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
            />
            <div className="flex items-center gap-1">
              <span className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs text-neutral-500 dark:bg-neutral-800">
                ESC
              </span>
            </div>
          </div>

          <Command.List className="my-2 max-h-[300px] overflow-x-hidden overflow-y-auto px-2">
            <Command.Empty className="py-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Navigation"
              className="text-xs font-medium text-neutral-500 dark:text-neutral-400"
            >
              <Command.Item
                onSelect={() => runCommand(() => router.push("/#about"))}
                className="flex cursor-pointer items-center rounded-lg px-2 py-3 text-sm text-neutral-900 aria-selected:bg-neutral-100 dark:text-neutral-100 dark:aria-selected:bg-neutral-800"
              >
                <User className="mr-2 h-4 w-4" />
                <span>Go to About</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/#skills"))}
                className="flex cursor-pointer items-center rounded-lg px-2 py-3 text-sm text-neutral-900 aria-selected:bg-neutral-100 dark:text-neutral-100 dark:aria-selected:bg-neutral-800"
              >
                <Code2 className="mr-2 h-4 w-4" />
                <span>Go to Skills</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/#projects"))}
                className="flex cursor-pointer items-center rounded-lg px-2 py-3 text-sm text-neutral-900 aria-selected:bg-neutral-100 dark:text-neutral-100 dark:aria-selected:bg-neutral-800"
              >
                <Laptop className="mr-2 h-4 w-4" />
                <span>Go to Projects</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/#contact"))}
                className="flex cursor-pointer items-center rounded-lg px-2 py-3 text-sm text-neutral-900 aria-selected:bg-neutral-100 dark:text-neutral-100 dark:aria-selected:bg-neutral-800"
              >
                <Mail className="mr-2 h-4 w-4" />
                <span>Go to Contact</span>
              </Command.Item>
            </Command.Group>

            <Command.Separator className="my-2 h-px bg-neutral-100 dark:bg-neutral-800" />

            <Command.Group
              heading="Theme"
              className="text-xs font-medium text-neutral-500 dark:text-neutral-400"
            >
              <Command.Item
                onSelect={() => runCommand(() => setTheme("light"))}
                className="flex cursor-pointer items-center rounded-lg px-2 py-3 text-sm text-neutral-900 aria-selected:bg-neutral-100 dark:text-neutral-100 dark:aria-selected:bg-neutral-800"
              >
                <Sun className="mr-2 h-4 w-4" />
                <span>Light Mode</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => setTheme("dark"))}
                className="flex cursor-pointer items-center rounded-lg px-2 py-3 text-sm text-neutral-900 aria-selected:bg-neutral-100 dark:text-neutral-100 dark:aria-selected:bg-neutral-800"
              >
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark Mode</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => setTheme("system"))}
                className="flex cursor-pointer items-center rounded-lg px-2 py-3 text-sm text-neutral-900 aria-selected:bg-neutral-100 dark:text-neutral-100 dark:aria-selected:bg-neutral-800"
              >
                <Laptop className="mr-2 h-4 w-4" />
                <span>System Theme</span>
              </Command.Item>
            </Command.Group>

            <Command.Separator className="my-2 h-px bg-neutral-100 dark:bg-neutral-800" />

            <Command.Group
              heading="Actions"
              className="text-xs font-medium text-neutral-500 dark:text-neutral-400"
            >
              <Command.Item
                onSelect={() =>
                  runCommand(() =>
                    window.open(siteConfig.social.github, "_blank"),
                  )
                }
                className="flex cursor-pointer items-center rounded-lg px-2 py-3 text-sm text-neutral-900 aria-selected:bg-neutral-100 dark:text-neutral-100 dark:aria-selected:bg-neutral-800"
              >
                <Github className="mr-2 h-4 w-4" />
                <span>View GitHub Profile</span>
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  runCommand(() => {
                    navigator.clipboard.writeText(siteConfig.email);
                    // You might want to add a toast notification here
                  });
                }}
                className="flex cursor-pointer items-center rounded-lg px-2 py-3 text-sm text-neutral-900 aria-selected:bg-neutral-100 dark:text-neutral-100 dark:aria-selected:bg-neutral-800"
              >
                <Mail className="mr-2 h-4 w-4" />
                <span>Copy Email Address</span>
              </Command.Item>
              <Command.Item
                onSelect={() =>
                  runCommand(() =>
                    window.open(siteConfig.social.linkedin, "_blank"),
                  )
                }
                className="flex cursor-pointer items-center rounded-lg px-2 py-3 text-sm text-neutral-900 aria-selected:bg-neutral-100 dark:text-neutral-100 dark:aria-selected:bg-neutral-800"
              >
                <FileCode className="mr-2 h-4 w-4" />
                <span>View Resume / LinkedIn</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.location.reload())}
                className="flex cursor-pointer items-center rounded-lg px-2 py-3 text-sm text-neutral-900 aria-selected:bg-neutral-100 dark:text-neutral-100 dark:aria-selected:bg-neutral-800"
              >
                <Terminal className="mr-2 h-4 w-4" />
                <span>Reload Application</span>
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="border-t border-neutral-100 px-3 py-2 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
            <span className="font-medium text-neutral-900 dark:text-neutral-200">
              Pro tip:
            </span>{" "}
            Type{" "}
            <span className="rounded bg-neutral-100 px-1 py-0.5 font-mono dark:bg-neutral-800">
              themes
            </span>{" "}
            to quickly change themes.
          </div>
        </div>
      </Command.Dialog>
    </>
  );
}
