"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Download, Mail, MapPin, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { siteConfig, socialLinks } from "@/data/nav";

type Status = "idle" | "sending" | "sent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // NOTE: This is a UI-only handler. Wire it to an API route (e.g. /app/api/contact)
  // backed by an email service such as Resend or Nodemailer before going live.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
    }, 900);
  }

  return (
    <section id="contact" className="section-pad relative">
      <div className="pointer-events-none absolute inset-0 bg-violet-glow opacity-70" />
      <div className="container-px relative mx-auto max-w-content">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something fast and accessible"
          description="Open to full-time, contract, and lead frontend roles — based in Kanpur, available immediately."
            align="center"
        />

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <GlassCard className="p-6">
              <Mail size={18} className="text-violet-200" />
              <p className="mt-3 font-mono text-xs uppercase tracking-wide text-mist-400">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-sm font-medium text-fg hover:text-violet-200"
              >
                {siteConfig.email}
              </a>
            </GlassCard>

            <GlassCard className="p-6">
              <MapPin size={18} className="text-violet-200" />
              <p className="mt-3 font-mono text-xs uppercase tracking-wide text-mist-400">
                Location &amp; availability
              </p>
              <p className="mt-1 text-sm font-medium text-fg">
                {siteConfig.location}
              </p>
              <p className="mt-1 text-sm text-mist">{siteConfig.availability}</p>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-mist-400">
                Elsewhere
              </p>
              <div className="mt-3 flex gap-4">
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
              </div>
               
            </GlassCard>
          </motion.div>

          
        </div>

         <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href={`mailto:${siteConfig.email}`} className="btn-primary">
            <span>Email Me</span>
            <Send size={16} />
          </a>
          <a href={siteConfig.resumeUrl} download className="btn-secondary">
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
