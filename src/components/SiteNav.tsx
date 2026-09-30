import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/i18n";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";

export function SiteNav() {
  const { t } = useI18n();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const links = [
    { to: "/services", label: t.nav.services },
    { to: "/integrations", label: t.nav.architecture },
    { to: "/cases", label: t.nav.cases },
    { to: "/pricing", label: t.nav.engagement },
    { to: "/dashboard", label: t.nav.console },
  ] as const;

  return (
    <header className="relative z-20 border-b border-bone/20 bg-ink/90 backdrop-blur-sm sticky top-0">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-3 sm:px-5 py-2.5 font-mono text-[10px] tracking-widest uppercase">
        {/* BRAND LOGO LOCKUP (ENLARGED) */}
        <Link
          to="/"
          className="flex items-center gap-3.5 group transition-all duration-300 shrink-0"
        >
          <img
            src="/isotipo.svg"
            alt="KAI LABS Logo"
            className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 border border-ink/20 transition-transform duration-300 group-hover:rotate-6 select-none"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <img
                src="/naming-transp.svg"
                alt="KAI wordmark"
                className="h-7 sm:h-8 md:h-[34px] w-auto dark:invert opacity-95 group-hover:opacity-100 transition-opacity duration-200 select-none"
              />
              <span className="font-mono text-sm sm:text-base md:text-lg font-bold text-lime tracking-widest">
                LABS
              </span>
            </div>
            <span className="font-mono text-[8px] sm:text-[9.5px] text-muted-foreground tracking-widest hidden sm:inline -mt-0.5">
              {t.nav.brandSubtitle}
            </span>
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center gap-5">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative text-muted-foreground hover:text-lime transition-all duration-200 py-0.5 flex items-center gap-1 active-link [&.active]:text-lime [&.active]:font-bold text-[10px]"
              activeOptions={{ exact: true }}
            >
              {/* Slide-in prefix */}
              <span
                className="text-lime font-bold transition-all duration-300 ease-out inline-block select-none"
                style={{
                  width: hoveredIdx === i ? "10px" : "0px",
                  opacity: hoveredIdx === i ? 1 : 0,
                  transform: hoveredIdx === i ? "translateX(0px)" : "translateX(-2px)",
                }}
              >
                &gt;
              </span>
              <span>{l.label}</span>
            </Link>
          ))}
        </nav>

        {/* RIGHT CONTROLS: THEME SWITCHER + LANGUAGE SELECTOR + TELEMETRY */}
        <div className="flex items-center gap-2 font-mono text-[9.5px] text-muted-foreground">
          <ThemeToggle />
          <LanguageSelector />

          <div className="hidden xl:flex items-center gap-1.5 pl-2 border-l border-bone/15">
            <span className="h-1.5 w-1.5 rounded-full bg-lime led-active" />
            <span className="text-lime font-bold text-[9px]">
              {t.nav.card}
              <span className="blink">▮</span>
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE NAV BAR (Quick access links) */}
      <div className="lg:hidden border-t border-bone/10 px-3 py-1.5 flex items-center justify-between overflow-x-auto gap-2.5 text-[9px] font-mono scrollbar-none">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="text-muted-foreground hover:text-lime whitespace-nowrap py-0.5 px-1 [&.active]:text-lime [&.active]:font-bold"
            activeOptions={{ exact: true }}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
