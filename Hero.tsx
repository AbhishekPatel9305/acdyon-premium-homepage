import { ArrowRight, Sparkles } from "lucide-react";
import { ProductDashboard } from "../components/ProductDashboard";

export function Hero() {
  return (
    <section className="overflow-hidden px-5 pb-16 pt-14 sm:pt-20 lg:px-8 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="eyebrow">
            <Sparkles size={16} />
            Built for release leads at small SaaS teams
          </div>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            Ship launches without the last-week scramble.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            RunwayDesk turns scattered launch tasks, risks, customer copy, and owner check-ins into one focused readiness workspace.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="primary-button group" href="#demo">
              Preview workflow
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
            </a>
            <a className="secondary-button" href="#product">
              View product
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <ProductDashboard />
        </div>
      </div>
    </section>
  );
}
