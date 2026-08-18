import { AlertTriangle, BellRing, Kanban, MessageSquareText, ShieldCheck } from "lucide-react";

export const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Workflow", href: "#workflow" },
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
];

export const features = [
  {
    icon: Kanban,
    title: "Launch board that stays current",
    body: "Plan product, marketing, support, and QA work in one release-specific board instead of chasing separate lists.",
  },
  {
    icon: AlertTriangle,
    title: "Risk register with owners",
    body: "Escalate blockers with context, severity, and the person accountable for the next move.",
  },
  {
    icon: MessageSquareText,
    title: "Customer-facing copy in context",
    body: "Draft announcement notes beside the actual product areas they describe so handoffs are easier to review.",
  },
  {
    icon: BellRing,
    title: "Quiet reminders",
    body: "Send nudges only when a dependency is slipping, keeping daily launch work calm and traceable.",
  },
  {
    icon: ShieldCheck,
    title: "Readiness review",
    body: "See what is ready, what needs attention, and what should wait before the release goes public.",
  },
];

export const releaseItems = [
  { title: "Billing plan migration QA", owner: "Maya", status: "Review", lane: "Quality" },
  { title: "In-app upgrade banner", owner: "Nolan", status: "Ready", lane: "Product" },
  { title: "Support macros for downgrade questions", owner: "Iris", status: "Draft", lane: "Support" },
  { title: "Launch email proofing", owner: "Dev", status: "Blocked", lane: "Marketing" },
];

export const demoStates = [
  {
    key: "calm",
    label: "Calm view",
    title: "Only the work that needs a decision",
    note: "RunwayDesk hides completed noise and highlights owner, risk, and next step.",
    tasks: ["Pricing FAQ has no reviewer", "Upgrade modal copy approved", "Support macro waiting on legal wording"],
  },
  {
    key: "risk",
    label: "Risk view",
    title: "Risks grouped by launch impact",
    note: "The release lead can see which blocker affects customers, support, or internal readiness.",
    tasks: ["Email proof blocks public announcement", "Billing QA affects checkout confidence", "Help article screenshots need final UI"],
  },
  {
    key: "announce",
    label: "Announcement",
    title: "Customer copy beside the release plan",
    note: "Marketing and product review the same source of truth before anything ships.",
    tasks: ["One-line value prop", "Changelog paragraph", "In-app banner copy"],
  },
];
