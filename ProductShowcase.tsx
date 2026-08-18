import { ProductDashboard } from "../components/ProductDashboard";

export function ProductShowcase() {
  return (
    <section id="product" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="section-heading">
          <p>Product showcase</p>
          <h2>Everything a launch lead checks before saying yes.</h2>
          <span>
            The interface is intentionally operational: fewer marketing panels, more owner clarity, visible risk, and work that can be acted on.
          </span>
        </div>
        <div className="mt-10">
          <ProductDashboard />
        </div>
      </div>
    </section>
  );
}
