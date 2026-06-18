import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import type { NavLink, SocialLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mishba-zuber-barkati",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:barkati.mishba26@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/barkatimishba26-creator",
    icon: Github,
  },
   {
    label: "Twitter",
    href: "https://x.com/MishbaZuber",
    icon: Twitter,
  },
];

export const siteConfig = {
  name: "Mishba Zuber Barkati",
  title: "Senior UI Developer",
  tagline: "React.js · Next.js · Angular · Team Lead",
  email: "barkati.mishba26@gmail.com",
  location: "Kanpur, India",
  status: "Immediate Joiner",
  experienceYears: "8+",
  availability: "Open for opportunities in Noida, Gurugram & Remote",
  summary:
    "Senior UI Developer with 8+ years of experience designing and building responsive, user-friendly, and SEO-optimized websites. Skilled across Angular, React.js, Next.js, and WordPress, with a track record of leading teams, optimizing performance, and shipping scalable applications from Figma designs.",
  resumeUrl: "/MishbaResume.pdf",
  url: "https://mishbabarkati.dev",
};
