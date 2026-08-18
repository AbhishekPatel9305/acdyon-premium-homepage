import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "../components/Logo";
import { navLinks } from "../data/product";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Primary navigation">
        <Logo />
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="primary-button hidden md:inline-flex" href="#demo">
          See the demo
        </a>
        <button
          className="icon-button md:hidden"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-ink/10 bg-paper px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navLinks.map((link) => (
              <a className="mobile-link" href={link.href} key={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a className="primary-button mt-2 justify-center" href="#demo" onClick={() => setOpen(false)}>
              See the demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
