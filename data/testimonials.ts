import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Project Manager",
    role: "Engineering Lead",
    company: "ITH Technologies",
    initials: "PM",
    quote:
      "Mishba consistently turned ambiguous requirements into clean, shippable interfaces. The PageSpeed and SEO gains on our flagship site were the difference in a client renewal.",
  },
  {
    id: "t2",
    name: "Product Owner",
    role: "Product Lead",
    company: "ITH Technologies",
    initials: "PO",
    quote:
      "As lead, Mishba raised the bar on code review and frontend standards across the team. Migrations that used to take weeks started taking days.",
  },
  {
    id: "t3",
    name: "Design Partner",
    role: "UI/UX Designer",
    company: "ITH Technologies",
    initials: "UX",
    quote:
      "Figma handoffs came back pixel-accurate and accessible without extra rounds of revision. That kind of design fidelity is rare.",
  },
];
