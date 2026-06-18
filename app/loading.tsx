export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink">
      <div className="flex items-center gap-3 font-mono text-sm text-mist">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-violet" />
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-violet [animation-delay:0.2s]" />
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-violet [animation-delay:0.4s]" />
        </span>
        loading_portfolio...
      </div>
    </div>
  );
}
