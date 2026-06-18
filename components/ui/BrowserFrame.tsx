import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const accentMap: Record<Project["accent"], string> = {
  violet:
    "bg-[radial-gradient(circle_at_30%_20%,rgba(139,124,246,0.5),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(139,124,246,0.25),transparent_50%)]",
  amber:
    "bg-[radial-gradient(circle_at_30%_20%,rgba(242,184,75,0.5),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(242,184,75,0.22),transparent_50%)]",
  mixed:
    "bg-[radial-gradient(circle_at_25%_25%,rgba(139,124,246,0.45),transparent_50%),radial-gradient(circle_at_85%_75%,rgba(242,184,75,0.35),transparent_50%)]",
};

interface BrowserFrameProps {
  project: Project;
}

/** CSS-only browser chrome standing in for a real product screenshot. */
export function BrowserFrame({ project }: BrowserFrameProps) {
  return (
    <div className="overflow-hidden rounded-t-xl border border-white/[0.08] bg-surface">
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-surface-2 px-3 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ED6A5E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F4BF50]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#61C454]" />
        </div>
        <div className="ml-1 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-mist-400">
          {project.liveUrl}
        </div>
      </div>
      <div className={cn("relative h-44 sm:h-52", accentMap[project.accent])}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(237,239,243,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(237,239,243,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-lg font-medium tracking-tight text-fg/70">
            {project.name}
          </span>
        </div>
      </div>
    </div>
  );
}
