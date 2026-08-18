import { useEffect, useState } from "react";
import { FinalCTA } from "./sections/FinalCTA";
import { Features } from "./sections/Features";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { InteractiveDemo } from "./sections/InteractiveDemo";
import { Navbar } from "./sections/Navbar";
import { ProductShowcase } from "./sections/ProductShowcase";

export default function App() {
  const [focusMode, setFocusMode] = useState(false);

  useEffect(() => {
    const buffer: string[] = [];
    const target = "LAUNCH";

    const onKeyDown = (event: KeyboardEvent) => {
      buffer.push(event.key.toUpperCase());
      if (buffer.length > target.length) buffer.shift();
      if (buffer.join("") === target) {
        setFocusMode((value) => !value);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className={`min-h-screen bg-paper text-ink ${focusMode ? "focus-mode" : ""}`}>
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <InteractiveDemo focusMode={focusMode} />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
