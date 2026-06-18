"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="pointer-events-none absolute inset-0 bg-amber-glow opacity-60" />
      <div className="container-px relative mx-auto max-w-content">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit behind every build"
          description="Grouped by where each tool shows up in the day-to-day — from markup to leadership."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <GlassCard className="h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet/10 text-violet-200">
                    <category.icon size={20} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-fg">
                    {category.title}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
