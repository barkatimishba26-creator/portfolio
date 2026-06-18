"use client";

import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          eyebrow="Experience"
          title="Career timeline"
          description="Three roles, one continuous thread: ship, lead, and keep shipping."
        />

        <div className="flex items-center gap-2 pb-8 font-mono text-xs text-mist-400">
          <GitBranch size={14} />
          <span>main</span>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-1 h-full w-px bg-gradient-to-b from-violet/60 via-white/10 to-transparent sm:left-[9px]" />

          <ul className="space-y-10">
            {experience.map((item, idx) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-9 sm:pl-12"
              >
                <span
                  className={`absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 sm:h-5 sm:w-5 ${
                    item.current
                      ? "border-violet bg-violet/30"
                      : "border-white/20 bg-ink"
                  }`}
                >
                  {item.current && (
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-200 animate-pulse-dot" />
                  )}
                </span>

                <GlassCard className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-fg">
                      {item.role}
                    </h3>
                    <span className="font-mono text-xs text-violet-200">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-mist">{item.company}</p>
                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm text-mist">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-mist-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
