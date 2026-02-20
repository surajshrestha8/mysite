"use client";

import { useReducer, useEffect, useCallback } from "react";
import { m, AnimatePresence } from "motion/react";

type PreloaderState = {
  isLoading: boolean;
  visibleLines: number[];
  typingIndex: number | null;
  typedText: string;
};

type PreloaderAction =
  | { type: "SHOW_LINE"; index: number }
  | { type: "START_TYPING"; index: number }
  | { type: "UPDATE_TYPED_TEXT"; text: string }
  | { type: "STOP_TYPING"; index: number }
  | { type: "HIDE" };

function reducer(
  state: PreloaderState,
  action: PreloaderAction,
): PreloaderState {
  switch (action.type) {
    case "SHOW_LINE":
      return { ...state, visibleLines: [...state.visibleLines, action.index] };
    case "START_TYPING":
      return { ...state, typingIndex: action.index, typedText: "" };
    case "UPDATE_TYPED_TEXT":
      return { ...state, typedText: action.text };
    case "STOP_TYPING":
      return {
        ...state,
        typingIndex: null,
        visibleLines: [...state.visibleLines, action.index],
      };
    case "HIDE":
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

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
  const [{ isLoading, visibleLines, typingIndex, typedText }, dispatch] =
    useReducer(reducer, {
      isLoading: true,
      visibleLines: [],
      typingIndex: null,
      typedText: "",
    });

  const typeText = useCallback((text: string, lineIndex: number) => {
    let charIndex = 0;
    dispatch({ type: "START_TYPING", index: lineIndex });

    const typeInterval = setInterval(() => {
      if (charIndex <= text.length) {
        dispatch({ type: "UPDATE_TYPED_TEXT", text: text.slice(0, charIndex) });
        charIndex++;
      } else {
        clearInterval(typeInterval);
        dispatch({ type: "STOP_TYPING", index: lineIndex });
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
          dispatch({ type: "SHOW_LINE", index });
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
      dispatch({ type: "HIDE" });
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
        <m.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d1117]"
        >
          <div className="w-full max-w-lg px-6">
            {/* Terminal window */}
            <m.div
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
                      <m.div
                        key={cmd.delay}
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
                      </m.div>
                    );
                  }

                  return (
                    <div key={cmd.delay} className="flex items-center gap-2">
                      <span className="text-indigo-400">{cmd.prompt}</span>
                      <span className="text-green-400">$</span>
                      <span className="text-[#e6edf3]">
                        {isTyping ? typedText : cmd.command}
                      </span>
                      {isTyping && (
                        <m.span
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
                    <m.span
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
            </m.div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
