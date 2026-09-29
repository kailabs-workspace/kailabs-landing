import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as DotMatrix, S as SiteNav, a as SiteFooter } from "./SiteFooter-DsBLkoY6.mjs";
import { a as useI18n } from "./router-w_T3t37d.mjs";
import { S as Sparkles, b as Clock, n as Target, o as Check, A as ArrowRight, f as ShieldCheck, L as Layers } from "../_libs/lucide-react.mjs";
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
function Pricing() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-ink text-foreground overflow-hidden selection:bg-lime selection:text-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DotMatrix, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-bone/20 pb-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: t.pricing.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3 mt-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl sm:text-3xl md:text-4xl uppercase text-foreground", children: t.pricing.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] text-lime flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active" }),
            t.pricing.statusReady
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono mt-2 max-w-xl text-muted-foreground text-[11px] md:text-xs leading-relaxed", children: t.pricing.subtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-4.5 mb-10", children: t.pricing.models.map((m) => {
        const isFeatured = m.featured;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `border p-4 sm:p-5 corner-ticks relative flex flex-col justify-between transition-all duration-300 ${isFeatured ? "border-lime bg-ink/90 shadow-[0_0_25px_rgba(212,245,66,0.12)]" : "border-bone/20 bg-ink/65 hover:border-bone/40"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-tl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-br" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between font-mono text-[9px] tracking-widest uppercase border-b border-bone/15 pb-2.5 mb-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime font-bold", children: [
                "// ",
                m.code
              ] }),
              isFeatured ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-1.5 py-0.2 bg-lime text-ink font-bold text-[8.5px] flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-2.5 h-2.5" }),
                t.pricing.statusReady === "DISPONIBLE" ? "RECOMENDADO" : "RECOMMENDED"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active" }),
                t.pricing.statusReady
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl uppercase text-foreground mb-0.5", children: m.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[11px] text-lime mb-3.5", children: [
              "> ",
              m.tagline
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-graphite/40 border border-bone/15 p-2.5 mb-3.5 space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 font-mono text-[11px] text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 text-lime shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                    t.home.contactForm.timelineLabel,
                    ":"
                  ] }),
                  " ",
                  m.timeline
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1.5 font-mono text-[10.5px] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-3 h-3 text-lime shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m.idealFor })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground", children: [
                "// ",
                t.pricing.deliverablesLabel
              ] }),
              m.deliverables.map((d, dIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1.5 font-mono text-[11px] text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-lime shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: d })
              ] }, dIdx))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2.5 border-t border-bone/15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/#contact", className: `w-full py-2 font-mono text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all ${isFeatured ? "bg-lime text-ink hover:bg-lime/90" : "border border-bone/30 text-foreground hover:border-lime hover:text-lime"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.pricing.ctaBtn }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
          ] }) })
        ] }, m.code);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/20 bg-ink/80 p-4 sm:p-5 md:p-6 corner-ticks relative mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-tl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-br" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between border-b border-bone/20 pb-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg md:text-2xl uppercase text-foreground", children: t.pricing.comparison.title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left font-mono text-[11px] border-collapse", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-bone/20 text-muted-foreground uppercase text-[9px] tracking-widest", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pr-3", children: t.pricing.comparison.columns[0] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3 text-muted-foreground/70", children: t.pricing.comparison.columns[1] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 pl-3 text-lime bg-lime/5 border-l border-r border-lime/20", children: t.pricing.comparison.columns[2] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-bone/10", children: t.pricing.comparison.rows.map((row, rIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-graphite/20 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3 text-foreground font-semibold", children: row.feature }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 text-muted-foreground", children: row.traditional }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pl-3 text-lime font-bold bg-lime/5 border-l border-r border-lime/20", children: row.kaiLabs })
          ] }, rIdx)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3 font-mono text-[11px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/15 p-3.5 bg-ink/60 flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-lime shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground font-bold uppercase mb-0.5", children: t.pricing.guaranteeTitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t.pricing.guarantee })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/15 p-3.5 bg-ink/60 flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4 text-lime shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground font-bold uppercase mb-0.5", children: t.pricing.ipTitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t.pricing.customNote })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Pricing as component
};
