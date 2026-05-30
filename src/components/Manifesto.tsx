import { useEffect, useRef, useState } from "react";

const WORDS = "We don't replace your tools — we give them an agent.".split(" ");

export function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.88;
      const end = vh * 0.22;
      const p = (start - rect.top) / (start - end);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <p
      ref={ref}
      className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.9] text-center"
    >
      {WORDS.map((w, i) => {
        const t = (i + 1) / WORDS.length;
        const lit = progress >= t;
        const isAccent = w.toLowerCase().includes("agent");
        return (
          <span
            key={i}
            className="inline-block transition-all duration-500 ease-out"
            style={{
              color: lit ? (isAccent ? "var(--lime)" : "#ffffff") : "rgba(255,255,255,0.08)",
              transform: lit ? "translateY(0px) scale(1)" : "translateY(15px) scale(0.96)",
              filter: lit ? "blur(0px)" : "blur(3px)",
              marginRight: "0.2em",
            }}
          >
            {w}
          </span>
        );
      })}
    </p>
  );
}
