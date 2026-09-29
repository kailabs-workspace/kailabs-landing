import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as useI18n, u as useTheme } from "./router-w_T3t37d.mjs";
import { g as Moon, h as Sun, G as Globe } from "../_libs/lucide-react.mjs";
function DotMatrix() {
  const canvasRef = reactExports.useRef(null);
  const mouseRef = reactExports.useRef({ x: -9999, y: -9999 });
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const isMobile = window.innerWidth < 768;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const SPACING = isMobile ? 32 : 28;
    const RADIUS = isMobile ? 80 : 110;
    let dots = [];
    let idleCounter = 0;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
      dots = [];
      for (let x = SPACING / 2; x < window.innerWidth; x += SPACING) {
        for (let y = SPACING / 2; y < window.innerHeight; y += SPACING) {
          dots.push({ x, y, ox: x, oy: y, vx: 0, vy: 0 });
        }
      }
      idleCounter = 0;
    };
    const wakeUp = () => {
      idleCounter = 0;
      if (!raf) {
        raf = requestAnimationFrame(tick);
      }
    };
    const onMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      wakeUp();
    };
    const onLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };
    const tick = () => {
      const isLight = document.documentElement.classList.contains("light");
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const { x: mx, y: my } = mouseRef.current;
      let totalMovement = 0;
      for (const d of dots) {
        const dx = d.x - mx;
        const dy = d.y - my;
        const dist = Math.hypot(dx, dy);
        let glow = 0;
        if (dist < RADIUS) {
          const force = (1 - dist / RADIUS) * 6;
          const angle = Math.atan2(dy, dx);
          d.vx += Math.cos(angle) * force * 0.15;
          d.vy += Math.sin(angle) * force * 0.15;
          glow = 1 - dist / RADIUS;
        }
        d.vx += (d.ox - d.x) * 0.08;
        d.vy += (d.oy - d.y) * 0.08;
        d.vx *= 0.78;
        d.vy *= 0.78;
        d.x += d.vx;
        d.y += d.vy;
        totalMovement += Math.abs(d.vx) + Math.abs(d.vy);
        const r = 1 + glow * 1.5;
        if (glow > 0.05) {
          ctx.fillStyle = isLight ? `rgba(10, 10, 10, ${0.4 + glow * 0.55})` : `rgba(212, 245, 66, ${0.25 + glow * 0.75})`;
        } else {
          ctx.fillStyle = isLight ? "rgba(10,10,10,0.065)" : "rgba(255,255,255,0.07)";
        }
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (mx === -9999 && totalMovement < 0.05) {
        idleCounter++;
        if (idleCounter > 40) {
          raf = 0;
          return;
        }
      } else {
        idleCounter = 0;
      }
      raf = requestAnimationFrame(tick);
    };
    resize();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "pointer-events-none fixed inset-0 z-0", "aria-hidden": "true" });
}
function LanguageSelector({ className = "" }) {
  const { lang, setLang } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider border border-bone/25 bg-ink/80 px-2 py-1 select-none backdrop-blur-sm ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3.5 h-3.5 text-muted-foreground shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setLang("en"),
              "aria-label": "Switch to English",
              className: `px-1.5 py-0.5 transition-all duration-200 cursor-pointer ${lang === "en" ? "bg-lime text-ink font-bold shadow-[0_0_8px_rgba(212,245,66,0.5)]" : "text-muted-foreground hover:text-foreground"}`,
              children: "EN"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bone/30 px-0.5 font-light", children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setLang("es"),
              "aria-label": "Cambiar a Español",
              className: `px-1.5 py-0.5 transition-all duration-200 cursor-pointer ${lang === "es" ? "bg-lime text-ink font-bold shadow-[0_0_8px_rgba(212,245,66,0.5)]" : "text-muted-foreground hover:text-foreground"}`,
              children: "ES"
            }
          )
        ] })
      ]
    }
  );
}
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggleTheme,
      type: "button",
      className: "inline-flex items-center gap-1.5 border border-bone/30 bg-ink/70 light:bg-cream light:border-ink/25 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-foreground hover:border-lime hover:text-lime light:hover:border-ink light:hover:text-ink transition-all duration-200 cursor-pointer shadow-xs select-none",
      title: isDark ? "Cambiar a Tema Claro (CREAM)" : "Cambiar a Tema Oscuro (INK)",
      "aria-label": isDark ? "Switch to Light Mode" : "Switch to Dark Mode",
      children: isDark ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-3 h-3 text-lime" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[9px] text-foreground", children: "DARK" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active shrink-0 ml-0.5" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-3 h-3 text-ink" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[9px] text-ink", children: "LIGHT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-ink shrink-0 ml-0.5" })
      ] })
    }
  );
}
function SiteNav() {
  const { t } = useI18n();
  const [hoveredIdx, setHoveredIdx] = reactExports.useState(null);
  const links = [
    { to: "/services", label: t.nav.services },
    { to: "/integrations", label: t.nav.architecture },
    { to: "/cases", label: t.nav.cases },
    { to: "/pricing", label: t.nav.engagement },
    { to: "/dashboard", label: t.nav.console }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative z-20 border-b border-bone/20 bg-ink/90 backdrop-blur-sm sticky top-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl flex items-center justify-between px-3 sm:px-5 py-2.5 font-mono text-[10px] tracking-widest uppercase", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/",
          className: "flex items-center gap-3.5 group transition-all duration-300 shrink-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/isotipo.svg",
                alt: "KAI LABS Logo",
                className: "h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 border border-ink/20 transition-transform duration-300 group-hover:rotate-6 select-none"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/naming-transp.svg",
                    alt: "KAI wordmark",
                    className: "h-7 sm:h-8 md:h-[34px] w-auto dark:invert opacity-95 group-hover:opacity-100 transition-opacity duration-200 select-none"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm sm:text-base md:text-lg font-bold text-lime tracking-widest", children: "LABS" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[8px] sm:text-[9.5px] text-muted-foreground tracking-widest hidden sm:inline -mt-0.5", children: t.nav.brandSubtitle })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-5", children: links.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: l.to,
          onMouseEnter: () => setHoveredIdx(i),
          onMouseLeave: () => setHoveredIdx(null),
          className: "relative text-muted-foreground hover:text-lime transition-all duration-200 py-0.5 flex items-center gap-1 active-link [&.active]:text-lime [&.active]:font-bold text-[10px]",
          activeOptions: { exact: true },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-lime font-bold transition-all duration-300 ease-out inline-block select-none",
                style: {
                  width: hoveredIdx === i ? "10px" : "0px",
                  opacity: hoveredIdx === i ? 1 : 0,
                  transform: hoveredIdx === i ? "translateX(0px)" : "translateX(-2px)"
                },
                children: ">"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.label })
          ]
        },
        l.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-mono text-[9.5px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSelector, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden xl:flex items-center gap-1.5 pl-2 border-l border-bone/15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime font-bold text-[9px]", children: [
            t.nav.card,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink", children: "▮" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-bone/10 px-3 py-1.5 flex items-center justify-between overflow-x-auto gap-2.5 text-[9px] font-mono scrollbar-none", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: l.to,
        className: "text-muted-foreground hover:text-lime whitespace-nowrap py-0.5 px-1 [&.active]:text-lime [&.active]:font-bold",
        activeOptions: { exact: true },
        children: l.label
      },
      l.to
    )) })
  ] });
}
function SiteFooter() {
  const { t } = useI18n();
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative z-10 border-t border-bone/20 mt-12 bg-ink/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] md:text-[10px] tracking-widest text-muted-foreground uppercase", children: t.home.footer.endOfFile }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid sm:grid-cols-3 gap-6 font-mono text-[11px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[9px] uppercase tracking-widest mb-1.5", children: t.home.footer.contact }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "mailto:contact@kailabs.io",
            className: "block uppercase text-foreground hover:text-lime transition-colors",
            children: "contact@kailabs.io"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://github.com/kailabs-workspace",
            target: "_blank",
            rel: "noreferrer",
            className: "block uppercase text-foreground hover:text-lime transition-colors mt-0.5",
            children: "github.com/kailabs-workspace"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[9px] uppercase tracking-widest mb-1.5", children: t.home.footer.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.footer.allSystemsNominal })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground mt-0.5 text-[10px]", children: t.home.footer.responseSubtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[9px] uppercase tracking-widest mb-1.5", children: t.home.footer.origin }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "uppercase", children: [
          t.home.footer.builtBy,
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          t.home.footer.brandOps
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between border-t border-bone/20 pt-3 font-mono text-[9px] uppercase tracking-widest text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.footer.copyright.replace("{year}", String(currentYear)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime", children: [
        "// KAI LABS STUDIO_",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink", children: "▮" })
      ] })
    ] })
  ] }) });
}
export {
  DotMatrix as D,
  SiteNav as S,
  SiteFooter as a
};
