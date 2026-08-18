import { Logo } from "../components/Logo";
import { navLinks } from "../data/product";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        <div className="flex flex-wrap gap-4 text-sm text-steel">
          {navLinks.map((link) => (
            <a className="hover:text-ink" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
          <a className="hover:text-ink" href="mailto:hello@runwaydesk.example">Contact</a>
        </div>
      </div>
    </footer>
  );
}
