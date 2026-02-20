"use client";

import { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import { Github, Linkedin, Twitter, Mail, Check, Copy } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const socialLinks = [
  {
    name: "GitHub",
    handle: "@suraj",
    icon: Github,
    url: siteConfig.social.github,
    command: "open github.com/surajshrestha8",
  },
  {
    name: "LinkedIn",
    handle: "in/suraj",
    icon: Linkedin,
    url: siteConfig.social.linkedin,
    command: "open linkedin.com/in/suraj",
  },
  {
    name: "Twitter",
    handle: "@suraj",
    icon: Twitter,
    url: siteConfig.social.twitter,
    command: "open twitter.com/suraj",
  },
  {
    name: "Email",
    handle: siteConfig.email,
    icon: Mail,
    url: siteConfig.social.email,
    command: `echo "hello" | mail ${siteConfig.email}`,
  },
];

export function Contact() {
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white"
        >
          Let&apos;s{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent dark:from-indigo-400">
            Connect
          </span>
        </m.h2>

        <m.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-16 max-w-xl text-center text-neutral-500 dark:text-slate-400"
        >
          Ready to collaborate? Open a connection
        </m.p>

        {/* Terminal window */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-hidden rounded-xl border border-black/[0.06] shadow-xl dark:border-white/[0.08]"
        >
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-black/[0.06] bg-neutral-100 px-4 py-2.5 dark:border-white/[0.06] dark:bg-[#1e1e1e]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
            </div>
            <span className="text-xs text-neutral-400 dark:text-slate-500">
              ssh suraj@portfolio — connect
            </span>
            <div className="w-16" />
          </div>

          <div className="bg-white p-5 font-mono text-sm dark:bg-[#1a1a1a]">
            {/* Connection message */}
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-6 space-y-1.5 text-xs"
            >
              <div className="text-emerald-600 dark:text-emerald-400">
                ✓ Connection established to suraj@portfolio
              </div>
              <div className="text-neutral-400 dark:text-slate-500">
                Last login:{" "}
                {new Date().toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}{" "}
                | Pokhara, Nepal
              </div>
              <div className="text-neutral-400 dark:text-slate-500">
                Status:{" "}
                <span className="text-emerald-500">● Available for hire</span>
              </div>
            </m.div>

            {/* Social links as commands */}
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <div className="mb-3 text-xs text-neutral-400 dark:text-slate-500">
                {`// Quick links — click to connect`}
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {socialLinks.map((link, index) => (
                  <m.a
                    key={link.name}
                    href={link.url}
                    target={link.name === "Email" ? undefined : "_blank"}
                    rel={
                      link.name === "Email" ? undefined : "noopener noreferrer"
                    }
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.08 }}
                    className="group flex items-center gap-3 rounded-lg border border-black/[0.04] bg-neutral-50 px-4 py-3 transition-all hover:border-indigo-500/20 hover:bg-indigo-50 dark:border-white/[0.04] dark:bg-white/[0.02] dark:hover:border-indigo-500/20 dark:hover:bg-indigo-500/5"
                  >
                    <link.icon className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-indigo-500 dark:text-slate-500 dark:group-hover:text-indigo-400" />
                    <div className="flex-1">
                      <div className="text-xs font-medium text-neutral-700 dark:text-slate-300">
                        {link.name}
                      </div>
                      <div className="text-[10px] text-neutral-400 dark:text-slate-600">
                        $ {link.command}
                      </div>
                    </div>
                    <span className="text-[10px] text-neutral-300 transition-colors group-hover:text-indigo-400 dark:text-slate-700 dark:group-hover:text-indigo-500">
                      →
                    </span>
                  </m.a>
                ))}
              </div>
            </m.div>

            {/* Copy email shortcut */}
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <button
                onClick={handleCopyEmail}
                className="flex w-full items-center gap-3 rounded-lg border border-dashed border-black/[0.08] px-4 py-3 text-left transition-all hover:border-indigo-500/30 hover:bg-indigo-50/50 dark:border-white/[0.08] dark:hover:border-indigo-500/30 dark:hover:bg-indigo-500/5"
              >
                <span className="text-amber-600 dark:text-amber-400">$</span>
                <span className="flex-1 text-xs text-neutral-500 dark:text-slate-400">
                  {copied ? (
                    <span className="text-emerald-500">
                      ✓ Email copied to clipboard!
                    </span>
                  ) : (
                    <>
                      pbcopy &lt; email.txt{" "}
                      <span className="text-neutral-300 dark:text-slate-600">
                        — click to copy email
                      </span>
                    </>
                  )}
                </span>
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-neutral-300 dark:text-slate-600" />
                )}
              </button>
            </m.div>

            {/* Divider */}
            <div className="mb-6 border-t border-black/[0.06] dark:border-white/[0.06]" />

            {/* Message form as terminal input */}
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <div className="mb-4 text-xs text-neutral-400 dark:text-slate-500">
                {`// Send me a message`}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="shrink-0 text-xs text-amber-600 dark:text-amber-400">
                    name:
                  </span>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full border-b border-black/[0.08] bg-transparent py-2 text-xs text-neutral-900 placeholder-neutral-300 transition-colors focus:border-indigo-500/50 focus:outline-none dark:border-white/[0.06] dark:text-white dark:placeholder-slate-600 dark:focus:border-indigo-500/50"
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <span className="shrink-0 text-xs text-amber-600 dark:text-amber-400">
                    email:
                  </span>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full border-b border-black/[0.08] bg-transparent py-2 text-xs text-neutral-900 placeholder-neutral-300 transition-colors focus:border-indigo-500/50 focus:outline-none dark:border-white/[0.06] dark:text-white dark:placeholder-slate-600 dark:focus:border-indigo-500/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <div className="mb-2 text-xs text-amber-600 dark:text-amber-400">
                    message:
                  </div>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full resize-none rounded-lg border border-black/[0.06] bg-neutral-50 px-4 py-3 text-xs text-neutral-900 placeholder-neutral-300 transition-colors focus:border-indigo-500/50 focus:outline-none dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-white dark:placeholder-slate-600 dark:focus:border-indigo-500/50"
                    placeholder="Hi, I'd like to discuss a project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-500 py-3 text-xs font-medium text-white transition-all hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <m.span
                        key="sent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2 text-emerald-200"
                      >
                        <Check className="h-3.5 w-3.5" />
                        Message sent successfully!
                      </m.span>
                    ) : isSubmitting ? (
                      <m.span
                        key="sending"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                        Sending...
                      </m.span>
                    ) : (
                      <m.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        $ send_message --submit
                      </m.span>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
