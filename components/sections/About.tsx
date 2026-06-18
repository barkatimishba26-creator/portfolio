"use client";

import { motion } from "framer-motion";
import { Briefcase, Layers, MapPin, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { siteConfig } from "@/data/nav";

const facts = [
  { icon: Briefcase, label: "Experience", value: "8+ years" },
  { icon: Users, label: "Leadership", value: "Led a UI team" },
  { icon: Layers, label: "Specialization", value: "React, Next.js, Angular" },
  { icon: MapPin, label: "Based in", value: siteConfig.location },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          eyebrow="About"
          title="Eight years of turning designs into fast, accessible products"
          description="A short look at the path from first lines of HTML to leading a UI team."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-base leading-relaxed text-mist sm:text-lg"
          >
            <p>
              Since 2017, I&apos;ve worked across the full frontend stack — Angular,
              React.js, Next.js, and WordPress — turning Figma files into
              interfaces that hold up on real devices and real connections,
              not just on a designer&apos;s monitor.
            </p>
            <p>
              That work grew into leading a UI team: setting code review
              standards, choosing the patterns the team would use, and being
              the person accountable when performance or scalability targets
              were on the line. I care as much about how a codebase ages as
              how a launch demo looks.
            </p>
            <p>
              My specialization sits at the intersection of frontend
              engineering and outcomes that matter to a business — Lighthouse
              and PageSpeed scores, organic traffic, and load times that
              survive a slow connection. I&apos;m currently an{" "}
              <span className="text-fg">immediate joiner</span>, open to
              opportunities in Noida, Gurugram, or remote.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {facts.map((fact) => (
              <GlassCard key={fact.label} className="p-5">
                <fact.icon size={20} className="text-violet-200" />
                <p className="mt-4 font-mono text-xs uppercase tracking-wide text-mist-400">
                  {fact.label}
                </p>
                <p className="mt-1.5 text-sm font-medium text-fg">{fact.value}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
