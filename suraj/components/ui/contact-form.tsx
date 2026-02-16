"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";

export function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full max-w-xl rounded-2xl border border-black/[0.1] bg-white/50 p-6 backdrop-blur-sm md:p-8 dark:border-white/[0.1] dark:bg-black/50">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Send a message
        </h3>
        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-2 rounded-lg bg-black/[0.05] px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:bg-black/[0.1] dark:bg-white/[0.05] dark:text-slate-300 dark:hover:bg-white/[0.1]"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-neutral-500 dark:text-slate-400"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            className="w-full rounded-lg border border-black/[0.1] bg-black/[0.03] px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-indigo-500/50 focus:bg-black/[0.05] focus:ring-1 focus:ring-indigo-500/50 focus:outline-none dark:border-white/[0.1] dark:bg-white/[0.03] dark:text-white dark:placeholder-slate-500 dark:focus:bg-white/[0.05]"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-neutral-500 dark:text-slate-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            className="w-full rounded-lg border border-black/[0.1] bg-black/[0.03] px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-indigo-500/50 focus:bg-black/[0.05] focus:ring-1 focus:ring-indigo-500/50 focus:outline-none dark:border-white/[0.1] dark:bg-white/[0.03] dark:text-white dark:placeholder-slate-500 dark:focus:bg-white/[0.05]"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-neutral-500 dark:text-slate-400"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formState.message}
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            className="w-full resize-none rounded-lg border border-black/[0.1] bg-black/[0.03] px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-indigo-500/50 focus:bg-black/[0.05] focus:ring-1 focus:ring-indigo-500/50 focus:outline-none dark:border-white/[0.1] dark:bg-white/[0.03] dark:text-white dark:placeholder-slate-500 dark:focus:bg-white/[0.05]"
            placeholder="Hi, I'd like to discuss a project..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || submitted}
          className={cn(
            "group mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-500 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-70",
            submitted && "bg-green-500 hover:bg-green-600",
          )}
        >
          {submitted ? (
            <>
              <Check className="h-4 w-4" />
              Message Sent!
            </>
          ) : isSubmitting ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
