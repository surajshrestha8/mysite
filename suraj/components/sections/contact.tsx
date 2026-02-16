"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";
import { siteConfig } from "@/data/site-config";

const socialLinks = [
  {
    name: "GitHub",
    handle: "@suraj",
    icon: Github,
    url: siteConfig.social.github,
  },
  {
    name: "LinkedIn",
    handle: "in/suraj",
    icon: Linkedin,
    url: siteConfig.social.linkedin,
  },
  {
    name: "Twitter",
    handle: "@suraj",
    icon: Twitter,
    url: siteConfig.social.twitter,
  },
  {
    name: "Email",
    handle: siteConfig.email,
    icon: Mail,
    url: siteConfig.social.email,
  },
];

export function Contact() {
  return (
    <section id="contact">
      <LampContainer className="min-h-[auto] pt-32 pb-20">
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mx-auto mt-4 max-w-md text-center text-sm text-slate-400"
        >
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.name === "Email" ? undefined : "_blank"}
              rel={link.name === "Email" ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass flex items-center gap-4 rounded-xl p-4 transition-all hover:border-indigo-500/30"
            >
              <link.icon className="h-6 w-6 text-indigo-400" />
              <div>
                <div className="font-medium text-white">{link.name}</div>
                <div className="text-sm text-slate-500">{link.handle}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </LampContainer>
    </section>
  );
}
