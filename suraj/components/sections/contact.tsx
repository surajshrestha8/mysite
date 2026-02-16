"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";
import { siteConfig } from "@/data/site-config";
import { ContactForm } from "@/components/ui/contact-form";

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
    <section id="contact" className="relative z-50">
      <LampContainer className="min-h-screen w-full pt-32 pb-20">
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl"
        >
          Let&apos;s Connect
        </motion.h2>

        <div className="mt-20 grid w-full max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2 lg:gap-20">
          <div className="flex flex-col items-center justify-center md:items-start">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8 max-w-md text-center text-lg text-slate-400 md:text-left"
            >
              I&apos;m always open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, I&apos;ll try
              my best to get back to you!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.name === "Email" ? undefined : "_blank"}
                  rel={
                    link.name === "Email" ? undefined : "noopener noreferrer"
                  }
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass flex items-center gap-4 rounded-xl border border-white/[0.1] bg-white/[0.02] p-4 transition-all hover:border-indigo-500/30 hover:bg-white/[0.05]"
                >
                  <link.icon className="h-5 w-5 text-indigo-400" />
                  <div>
                    <div className="text-sm font-medium text-white">
                      {link.name}
                    </div>
                    <div className="text-xs text-slate-500">{link.handle}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <ContactForm />
          </motion.div>
        </div>
      </LampContainer>
    </section>
  );
}
