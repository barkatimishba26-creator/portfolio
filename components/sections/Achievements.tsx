"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="container-px mx-auto max-w-content">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <GlassCard className="flex h-full flex-col items-center p-6 text-center">
                <item.icon size={20} className="text-amber" />
                <p className="mt-4 font-display text-3xl font-semibold text-fg sm:text-4xl">
                  {item.kind === "count" ? (
                    <AnimatedCounter value={item.value ?? 0} suffix={item.suffix} />
                  ) : (
                    item.text
                  )}
                </p>
                <p className="mt-2 text-xs text-mist">{item.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
