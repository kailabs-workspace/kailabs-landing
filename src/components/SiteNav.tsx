import { Link } from "@tanstack/react-router";
import { useState } from "react";

const LINKS = [
  { to: "/", label: "BRIEF" },
  { to: "/dashboard", label: "DASHBOARD" },
  { to: "/integrations", label: "INTEGRATIONS" },
  { to: "/pricing", label: "PRICING" },
  { to: "/cases", label: "CASE FILES" },
] as const;

export function SiteNav() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <header className="relative z-20 border-b border-bone/20 bg-ink/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 font-mono text-[11px] tracking-widest uppercase">
        {/* BRAND LOGO LOCKUP */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group transition-all duration-300"
        >
          <img 
            src="/isotipo.svg" 
            alt="KAI Logo" 
            className="h-7 w-7 border border-ink/20 transition-transform duration-300 group-hover:rotate-6 select-none" 
          />
          <img 
            src="/naming-transp.svg" 
            alt="KAI wordmark" 
            className="h-5 w-auto invert opacity-90 group-hover:opacity-100 transition-opacity duration-200 select-none" 
          />
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative text-muted-foreground hover:text-lime transition-all duration-200 py-1 flex items-center gap-1.5 active-link [&.active]:text-lime [&.active]:font-bold"
              activeOptions={{ exact: true }}
            >
              {/* Slide-in prefix */}
              <span 
                className="text-lime font-bold transition-all duration-300 ease-out inline-block select-none"
                style={{
                  width: hoveredIdx === i ? "16px" : "0px",
                  opacity: hoveredIdx === i ? 1 : 0,
                  transform: hoveredIdx === i ? "translateX(0px)" : "translateX(-5px)",
                }}
              >
                &gt;
              </span>
              <span>{l.label}</span>
            </Link>
          ))}
        </nav>

        {/* TELEMETRY ACTIVE TAG */}
        <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-lime led-active" />
          <span className="hidden sm:inline">CONN_UPLINK_ON</span>
          <span className="text-lime font-bold">// CARD 8555_<span className="blink">▮</span></span>
        </div>
      </div>
    </header>
  );
}
