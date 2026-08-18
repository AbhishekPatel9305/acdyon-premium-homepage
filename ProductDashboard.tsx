import { CheckCircle2, CircleDashed, Clock3, Search, SlidersHorizontal } from "lucide-react";
import { releaseItems } from "../data/product";

const statusClass: Record<string, string> = {
  Ready: "bg-mint/70 text-moss",
  Review: "bg-citrus/45 text-ink",
  Draft: "bg-white text-steel",
  Blocked: "bg-clay/15 text-clay",
};

export function ProductDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="dashboard-shell" aria-label="RunwayDesk product dashboard preview">
      <aside className="dashboard-sidebar">
        <div className="h-8 w-8 rounded-lg bg-moss" />
        {["Overview", "Launches", "Risks", "Notes"].map((item, index) => (
          <span key={item} className={index === 1 ? "active-nav" : ""}>
            {item}
          </span>
        ))}
      </aside>

      <div className="min-w-0 flex-1">
        <div className="dashboard-topbar">
          <div>
            <p className="text-xs font-semibold uppercase text-moss">Release workspace</p>
            <h3 className="font-display text-xl font-semibold sm:text-2xl">Usage-based billing launch</h3>
          </div>
          <div className="dashboard-search">
            <Search size={16} />
            <span>Search work</span>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            ["Readiness", "On track", CheckCircle2],
            ["Open risks", "Needs owner", CircleDashed],
            ["Next review", "Today 4:00", Clock3],
          ].map(([label, value, Icon]) => (
            <div className="metric-card" key={label as string}>
              <Icon size={18} />
              <span>{label as string}</span>
              <strong>{value as string}</strong>
            </div>
          ))}
        </div>

        {!compact && (
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-2">
              {["All", "Blocked", "Ready"].map((filter) => (
                <button className={filter === "All" ? "chip chip-active" : "chip"} key={filter} type="button">
                  {filter}
                </button>
              ))}
            </div>
            <button className="icon-button" type="button" aria-label="Open dashboard filters">
              <SlidersHorizontal size={18} />
            </button>
          </div>
        )}

        <div className="mt-4 overflow-hidden rounded-lg border border-ink/10 bg-white">
          {releaseItems.map((item) => (
            <div className="task-row" key={item.title}>
              <div>
                <p className="font-medium">{item.title}</p>
                <span>{item.lane} - {item.owner}</span>
              </div>
              <span className={`status-pill ${statusClass[item.status]}`}>{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
