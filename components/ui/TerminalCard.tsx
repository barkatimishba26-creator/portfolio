"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAME = "Mishba Zuber Barkati";

const STATIC_LINES: { key: string; value: string; valueClass: string }[] = [
  { key: "role", value: '"Senior UI Developer"', valueClass: "text-amber-400" },
  { key: "stack", value: '["React", "Next.js", "Angular"]', valueClass: "text-violet-200" },
  { key: "experience", value: '"8+ years"', valueClass: "text-amber-400" },
  { key: "location", value: '"Kanpur, India"', valueClass: "text-amber-400" },
];

export function TerminalCard() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(NAME.slice(0, i));
      if (i >= NAME.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 65);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: -1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="glass-strong w-full max-w-md rounded-2xl"
    >
      <div className="flex items-center gap-3 border-b border-white/[0.07] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ED6A5E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F4BF50]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#61C454]" />
        </div>
        <span className="font-mono text-xs text-mist">profile.ts</span>
      </div>

      <div className="px-5 py-6 font-mono text-[13px] leading-relaxed sm:text-sm">
        <p>
          <span className="text-violet-200">const</span>{" "}
          <span className="text-fg">developer</span>{" "}
          <span className="text-mist">=</span> <span className="text-mist">{"{"}</span>
        </p>
        <p className="pl-4">
          <span className="text-fg">name</span>
          <span className="text-mist">: </span>
          <span className="text-amber-400">
            &quot;{typed}
            <span
              className={done ? "animate-blink" : ""}
              aria-hidden="true"
            >
              |
            </span>
            &quot;
          </span>
          <span className="text-mist">,</span>
        </p>
        {STATIC_LINES.map((line, idx) => (
          <motion.p
            key={line.key}
            initial={{ opacity: 0 }}
            animate={done ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.12 }}
            className="pl-4"
          >
            <span className="text-fg">{line.key}</span>
            <span className="text-mist">: </span>
            <span className={line.valueClass}>{line.value}</span>
            <span className="text-mist">,</span>
          </motion.p>
        ))}
        <motion.p
          initial={{ opacity: 0 }}
          animate={done ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: STATIC_LINES.length * 0.12 }}
          className="pl-4"
        >
          <span className="text-fg">status</span>
          <span className="text-mist">: </span>
          <span className="inline-flex items-center gap-1.5 text-[#61C454]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#61C454] animate-pulse-dot" />
            &quot;immediate_joiner&quot;
          </span>
        </motion.p>
        <p>
          <span className="text-mist">{"}"}</span>
        </p>
      </div>
    </motion.div>
  );
}
