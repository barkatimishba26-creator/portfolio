type ClassValue = string | number | null | boolean | undefined;

/** Lightweight className combiner — avoids pulling in clsx/tailwind-merge as deps. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
