import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as DotMatrix, S as SiteNav, a as SiteFooter } from "./SiteFooter-DsBLkoY6.mjs";
import { a as useI18n } from "./router-w_T3t37d.mjs";
import { i as ChevronDown, j as Cpu, L as Layers, k as Github, E as ExternalLink, C as CircleCheck, T as Terminal } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/motion.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Tag({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] md:text-[11px] tracking-widest text-muted-foreground uppercase", children });
}
function Cases() {
  const {
    t
  } = useI18n();
  const [openCaseId, setOpenCaseId] = reactExports.useState("oficia-platform");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-ink text-foreground overflow-hidden selection:bg-lime selection:text-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DotMatrix, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-bone/20 pb-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: t.cases.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3 mt-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl sm:text-3xl md:text-4xl uppercase text-foreground", children: t.cases.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] text-lime flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active" }),
            t.cases.flagshipBadge
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono mt-2 max-w-xl text-muted-foreground text-[11px] md:text-xs leading-relaxed", children: t.cases.subtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: t.cases.items.map((c) => {
        const isOpen = openCaseId === c.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border transition-all duration-300 corner-ticks relative ${isOpen ? "border-lime/50 bg-ink/85 shadow-2xl" : "border-bone/20 bg-ink/50 hover:border-bone/40"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-tl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-br" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenCaseId(isOpen ? "" : c.id), className: "w-full p-4 sm:p-5 text-left flex flex-col md:flex-row md:items-center justify-between gap-3 cursor-pointer group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] text-lime tracking-widest uppercase", children: [
                  "// ",
                  c.sector
                ] }),
                c.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[8.5px] px-1.5 py-0.2 bg-lime/10 border border-lime/30 text-lime uppercase", children: c.badge })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl sm:text-2xl uppercase text-foreground group-hover:text-lime transition-colors", children: c.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-muted-foreground mt-0.5", children: c.subtitle })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 border-t md:border-t-0 md:border-l border-bone/15 pt-2.5 md:pt-0 md:pl-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl sm:text-2xl text-lime font-bold", children: c.metrics.primary.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[8.5px] text-muted-foreground uppercase tracking-widest", children: c.metrics.primary.label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-4 h-4 text-muted-foreground transition-transform duration-300 group-hover:text-lime ${isOpen ? "rotate-180 text-lime" : ""}` })
            ] })
          ] }),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-bone/15 p-4 sm:p-5 md:p-6 animate-fade-in space-y-4 bg-ink/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.2fr_0.8fr] gap-4.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-bone/90 leading-relaxed mb-3 bg-graphite/25 p-3 border-l-2 border-lime", children: c.summary }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/15 p-3 bg-ink/60", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[9px] uppercase text-signal tracking-widest mb-1", children: [
                      "// ",
                      t.cases.challengeTitle
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-muted-foreground leading-relaxed", children: c.challenge })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/15 p-3.5 bg-ink/60", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] uppercase text-lime tracking-widest mb-1.5", children: [
                      "// ",
                      t.cases.solutionTitle
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground leading-relaxed", children: c.solution })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/15 p-4 bg-ink/80 space-y-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-bone/15 pb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs text-lime uppercase flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-3.5 h-3.5" }),
                      t.cases.architectureTitle,
                      ": ",
                      c.architecture.pattern
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] text-muted-foreground", children: [
                      c.architecture.modules.length,
                      " MODS"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: c.architecture.modules.map((mod, mIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] px-2 py-0.5 bg-graphite/40 border border-bone/20 text-foreground", children: mod }, mIdx)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 flex flex-col justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-bone/20 bg-ink overflow-hidden group relative radar-scanner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: c.title, className: "w-full h-40 object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/15 p-4 bg-ink/70 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3.5 h-3.5 text-lime" }),
                    t.cases.stackTitle
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: c.architecture.stack.map((tech) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] px-2 py-0.5 bg-ink border border-lime/30 text-lime", children: tech }, tech)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 pt-2", children: [
                    c.githubUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.githubUrl, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 bg-lime text-ink px-3 py-1.5 font-mono text-[11px] font-bold uppercase hover:bg-lime/90 transition-colors", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "w-3.5 h-3.5" }),
                      t.cases.githubLinkText
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/#contact", className: "inline-flex items-center gap-1.5 border border-bone/30 px-3 py-1.5 font-mono text-[11px] uppercase text-foreground hover:border-lime hover:text-lime transition-colors", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
                      t.pricing.ctaBtn
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-4 pt-2 border-t border-bone/15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[11px] uppercase text-muted-foreground mb-2", children: [
                  "// ",
                  t.cases.keyMetric
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: c.highlights.map((hl, hIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 font-mono text-xs text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-lime shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: hl })
                ] }, hIdx)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/15 bg-ink/90 p-3.5 crt-screen", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "crt-scanline" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-bone/15 pb-1.5 mb-2 font-mono text-[10px] text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "w-3.5 h-3.5 text-lime" }),
                    t.cases.consoleTitle
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime text-[9px]", children: t.cases.streamReplayBadge })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CaseLogPrinter, { logs: c.consoleLogs, streamingText: t.cases.telemetryStreaming })
              ] })
            ] })
          ] })
        ] }, c.id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function CaseLogPrinter({
  logs,
  streamingText
}) {
  const [visibleCount, setVisibleCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    setVisibleCount(0);
  }, [logs]);
  reactExports.useEffect(() => {
    if (visibleCount >= logs.length) return;
    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, 500);
    return () => clearTimeout(timer);
  }, [visibleCount, logs]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs space-y-1.5 min-h-[100px]", children: [
    logs.slice(0, visibleCount).map((entry, idx) => {
      const isKai = entry.who === "KAI" || entry.who === "AI_AGENT";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in flex items-start gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] px-1 py-0.2 border ${isKai ? "border-lime/40 text-lime bg-lime/10" : "border-bone/20 text-muted-foreground bg-ink"}`, children: entry.who }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground text-[11px] leading-relaxed", children: entry.text })
      ] }, idx);
    }),
    visibleCount < logs.length && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lime flex items-center gap-1 text-[9px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-pulse", children: "▮" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: streamingText })
    ] })
  ] });
}
export {
  Cases as component
};
