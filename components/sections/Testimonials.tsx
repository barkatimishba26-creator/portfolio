"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          eyebrow="Testimonials"
          title="What collaborators say"
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="flex h-full flex-col p-6">
                <Quote size={20} className="text-violet-200" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-mist">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet/15 font-mono text-xs font-semibold text-violet-200">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-fg">{t.name}</p>
                    <p className="text-xs text-mist-400">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
