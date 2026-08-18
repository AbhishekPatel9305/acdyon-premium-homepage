export function Logo() {
  return (
    <a className="group flex items-center gap-3 focus-ring" href="#" aria-label="RunwayDesk home">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-paper shadow-lift">
        <span className="h-4 w-4 rounded-sm border-2 border-mint transition-transform duration-300 group-hover:rotate-45" />
      </span>
      <span className="font-display text-lg font-semibold">RunwayDesk</span>
    </a>
  );
}
