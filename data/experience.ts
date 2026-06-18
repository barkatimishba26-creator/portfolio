import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Freelance Web Developer",
    company: "ITH Technologies",
    period: "Jan 2026 — Present",
    current: true,
    points: [
      "Managing and maintaining company websites end to end.",
      "Building the Renewist platform using Next.js, Tailwind CSS, and Sanity CMS.",
    ],
  },
  {
    id: "exp-2",
    role: "UI Developer Lead",
    company: "ITH Technologies",
    period: "Mar 2025 — Dec 2025",
    points: [
      "Led a UI team across multiple concurrent projects.",
      "Conducted code reviews and established frontend best practices.",
      "Improved application performance and scalability across the stack.",
    ],
  },
  {
    id: "exp-3",
    role: "Web Developer",
    company: "ITH Technologies",
    period: "Sep 2017 — Feb 2025",
    points: [
      "Built web applications using React.js, Next.js, Angular, JavaScript, HTML, CSS, Bootstrap, and WordPress.",
      "Converted Figma designs into pixel-accurate, responsive interfaces.",
      "Improved Google PageSpeed score from 55 to 90+.",
      "Increased organic traffic by 30% through SEO and performance work.",
      "Migrated legacy Angular applications to Next.js, cutting load times by 40%.",
    ],
  },
];
