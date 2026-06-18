"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { projects } from "@/data/projects";

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-px mx-auto max-w-content">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work"
          description="A mix of CMS-driven platforms, framework migrations, and interactive products."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <GlassCard className="group h-full overflow-hidden p-0 transition-transform duration-300 hover:-translate-y-1.5">
                <BrowserFrame project={project} />

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-fg">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-violet-200">{project.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {project.description}
                  </p>

                  {/* <ul className="mt-4 space-y-1.5">
                    {project.achievements.map((a) => (
                      <li key={a} className="flex gap-2.5 text-sm text-mist">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-amber" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul> */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                     
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !px-4 !py-2 text-xs"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="btn-primary rounded-full px-6 py-3 text-sm"
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
