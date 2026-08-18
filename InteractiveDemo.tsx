import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { demoStates } from "../data/product";

export function InteractiveDemo({ focusMode }: { focusMode: boolean }) {
  const [activeKey, setActiveKey] = useState(demoStates[0].key);
  const active = demoStates.find((state) => state.key === activeKey) ?? demoStates[0];

  return (
    <section id="demo" className="section-pad bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-mint">Interactive demo</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Switch the workspace by the decision you need to make.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/70">
            This interaction mirrors the product idea: the same launch plan can be viewed through calm execution, risk review, or announcement prep.
          </p>
          {focusMode && <p className="mt-4 rounded-lg bg-mint px-4 py-3 text-sm font-semibold text-ink">Focus mode unlocked: non-critical launch noise reduced.</p>}
        </div>

        <div className="demo-panel">
          <div className="flex flex-wrap gap-2">
            {demoStates.map((state) => (
              <button
                className={state.key === activeKey ? "demo-tab demo-tab-active" : "demo-tab"}
                key={state.key}
                type="button"
                onClick={() => setActiveKey(state.key)}
              >
                {state.label}
              </button>
            ))}
          </div>
          <div className="mt-7 min-h-[250px] rounded-lg bg-paper p-5 text-ink transition-all duration-300 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase text-moss">Current lens</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{active.title}</h3>
              </div>
              <ArrowUpRight className="text-moss" />
            </div>
            <p className="mt-4 max-w-2xl leading-7 text-steel">{active.note}</p>
            <div className="mt-6 grid gap-3">
              {active.tasks.map((task, index) => (
                <div className="demo-task" key={task} style={{ transitionDelay: `${index * 45}ms` }}>
                  <span>
                    <Check size={16} />
                  </span>
                  {task}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
