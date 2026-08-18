import { features } from "../data/product";

export function Features() {
  return (
    <section id="features" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="section-heading">
          <p>Features</p>
          <h2>Built around the moments where launches usually drift.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {features.map(({ icon: Icon, title, body }) => (
            <article className="feature-card" key={title}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
