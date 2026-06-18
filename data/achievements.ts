import { CalendarRange, Gauge, Trophy, TrendingUp, Users } from "lucide-react";
import type { Achievement } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "experience",
    kind: "count",
    value: 8,
    suffix: "+",
    label: "Years experience",
    icon: CalendarRange,
  },
  {
    id: "load-time",
    kind: "count",
    value: 40,
    suffix: "%",
    label: "Faster load time",
    icon: Gauge,
  },
  {
    id: "lighthouse",
    kind: "count",
    value: 90,
    suffix: "+",
    label: "Lighthouse score",
    icon: Trophy,
  },
  {
    id: "traffic",
    kind: "count",
    value: 30,
    suffix: "%",
    label: "Organic traffic growth",
    icon: TrendingUp,
  },
];
