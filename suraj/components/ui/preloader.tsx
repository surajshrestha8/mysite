"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const COMMANDS = [
  { prompt: "~", command: "node portfolio.js", delay: 0 },
  {
    prompt: "",
    command: "⚡ Initializing modules...",
    delay: 600,
    isOutput: true,
  },
  {
    prompt: "",
    command: "✓ Components loaded",
    delay: 1000,
    isOutput: true,
    isSuccess: true,
  },
  {
    prompt: "",
    command: "✓ Animations ready",
    delay: 1300,
    isOutput: true,
    isSuccess: true,
  },
  {
    prompt: "",
    command: "✓ Themes configured",
    delay: 1500,
    isOutput: true,
    isSuccess: true,
  },
  { prompt: "", command: "", delay: 1700, isOutput: true },
  {
    prompt: "",
    command: "🚀 Portfolio ready. Welcome!",
    delay: 1800,
    isOutput: true,
    isHighlight: true,
  },
];

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [typingIndex, setTypingIndex] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");

  const typeText = useCallback((text: string, lineIndex: number) => {
    let charIndex = 0;
    setTypingIndex(lineIndex);
    setTypedText("");

    const typeInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setTypedText(text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTypingIndex(null);
        setVisibleLines((prev) => [...prev, lineIndex]);
      }
    }, 25);

    return typeInterval;
  }, []);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];

    COMMANDS.forEach((cmd, index) => {
      const timeout = setTimeout(() => {
        if (cmd.isOutput) {
          // Output lines appear instantly
          setVisibleLines((prev) => [...prev, index]);
        } else {
          // Command lines get typed out
          const interval = typeText(cmd.command, index);
          intervals.push(interval);
        }
      }, cmd.delay);
      timeouts.push(timeout);
    });

    // Exit preloader
    const exitTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2600);
    timeouts.push(exitTimeout);

    return () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, [typeText]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d1117]"
        >
          <div className="w-full max-w-lg px-6">
            {/* Terminal window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-xl border border-[#30363d] bg-[#161b22] shadow-2xl"
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-[#30363d] px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-[#8b949e]">
                  portfolio — node
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-5 font-mono text-sm leading-7">
                {COMMANDS.map((cmd, index) => {
                  const isTyping = typingIndex === index;
                  const isVisible = visibleLines.includes(index);

                  if (!isVisible && !isTyping) return null;

                  if (cmd.isOutput) {
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className={
                          cmd.isHighlight
                            ? "font-semibold text-indigo-400"
                            : cmd.isSuccess
                              ? "text-green-400"
                              : "text-[#8b949e]"
                        }
                      >
                        {cmd.command}
                      </motion.div>
                    );
                  }

                  return (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-indigo-400">{cmd.prompt}</span>
                      <span className="text-green-400">$</span>
                      <span className="text-[#e6edf3]">
                        {isTyping ? typedText : cmd.command}
                      </span>
                      {isTyping && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          className="inline-block h-4 w-2 bg-[#e6edf3]"
                        />
                      )}
                    </div>
                  );
                })}

                {/* Blinking cursor at end */}
                {visibleLines.length === COMMANDS.length && (
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400">~</span>
                    <span className="text-green-400">$</span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="inline-block h-4 w-2 bg-[#e6edf3]"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
