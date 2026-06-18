import { Code2, Wrench, Palette, Gauge } from "lucide-react";
import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Angular",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    id: "cms-tools",
    title: "CMS & Tools",
    icon: Wrench,
    skills: ["WordPress", "Sanity CMS", "GitHub", "Bluehost"],
  },
  {
    id: "design",
    title: "Design",
    icon: Palette,
    skills: ["Figma", "Adobe Photoshop"],
  },
  {
    id: "other",
    title: "Other",
    icon: Gauge,
    skills: [
      "SEO Optimization",
      "Performance Optimization",
      "Accessibility",
      "Responsive Design",
      "Team Leadership",
    ],
  },
];
