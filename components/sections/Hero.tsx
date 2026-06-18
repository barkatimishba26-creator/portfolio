"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/nav";
import { TerminalCard } from "@/components/ui/TerminalCard";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-violet-glow" />
      <div className="container-px relative mx-auto grid max-w-content items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5"
          >
            <Sparkles size={14} className="text-amber" />
            <span className="font-mono text-xs text-mist">
              Immediate Joiner · Available now
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl lg:text-6xl"
          >
            <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="mt-4 text-lg font-medium text-violet-200 sm:text-xl"
          >
            {siteConfig.title} · React.js · Next.js · Angular · Team Lead
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
          >
            {siteConfig.summary}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="mt-6 flex items-center gap-2 text-sm text-mist"
          >
            <MapPin size={16} className="text-violet-200" />
            {siteConfig.location} · {siteConfig.experienceYears} years experience
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-accent">
              <span>Contact Me</span>
            </a>
            <a href={siteConfig.resumeUrl} download className="btn-secondary">
              <span>Download CV</span>
              <ArrowDown size={16} />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.6}
            className="mt-8 flex items-center gap-5"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="text-mist transition-colors hover:text-violet-200"
              >
                <link.icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
