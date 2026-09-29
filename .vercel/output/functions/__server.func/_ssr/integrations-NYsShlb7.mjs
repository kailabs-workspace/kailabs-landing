import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as DotMatrix, S as SiteNav, a as SiteFooter } from "./SiteFooter-DsBLkoY6.mjs";
import { a as useI18n } from "./router-w_T3t37d.mjs";
import { j as Cpu, L as Layers, D as Database, b as Clock, f as ShieldCheck, W as Workflow, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
const layerIcons = [Layers, Database, Clock, ShieldCheck];
function Integrations() {
  const {
    t
  } = useI18n();
  const [activeLayer, setActiveLayer] = reactExports.useState(0);
  const pillars = [t.integrations.pillars.ingest, t.integrations.pillars.reason, t.integrations.pillars.act];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-ink text-foreground overflow-hidden selection:bg-lime selection:text-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DotMatrix, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-bone/20 pb-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: t.integrations.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3 mt-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl sm:text-3xl md:text-4xl uppercase text-foreground", children: t.integrations.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] text-lime flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active" }),
            t.integrations.inProductionBadge
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono mt-2 max-w-xl text-muted-foreground text-[11px] md:text-xs leading-relaxed", children: [
          t.integrations.subtitlePre,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime", children: t.integrations.subtitleHighlight }),
          " ",
          t.integrations.subtitlePost
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/20 bg-ink/80 p-4 sm:p-5 md:p-6 corner-ticks relative mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-tl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-br" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-bone/15 pb-2.5 mb-4 font-mono text-[11px] text-muted-foreground uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-3.5 h-3.5 text-lime" }),
            t.integrations.agentCore
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime", children: [
            t.integrations.stackLayers.length,
            " LAYERS"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[240px_1fr] gap-4.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: t.integrations.stackLayers.map((layer, idx) => {
            const IconComp = layerIcons[idx % layerIcons.length];
            const isActive = activeLayer === idx;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveLayer(idx), className: `w-full text-left p-2.5 border font-mono transition-all cursor-pointer flex items-center gap-2.5 ${isActive ? "border-lime bg-lime/10 text-lime" : "border-bone/20 bg-ink text-muted-foreground hover:border-bone/40 hover:text-foreground"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-7 h-7 border flex items-center justify-center shrink-0 ${isActive ? "border-lime bg-lime text-ink" : "border-bone/25 text-lime"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComp, { className: "w-3.5 h-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "truncate", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[8.5px] tracking-widest uppercase text-muted-foreground", children: [
                  "// 0",
                  idx + 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold text-foreground truncate mt-0.5", children: layer.title })
              ] })
            ] }, layer.category);
          }) }),
          t.integrations.stackLayers[activeLayer] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/20 bg-ink/90 p-4 sm:p-5 flex flex-col justify-between crt-screen", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "crt-scanline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-bone/15 pb-1.5 mb-3 font-mono text-[11px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime font-bold uppercase", children: t.integrations.stackLayers[activeLayer].category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-[9px]", children: t.integrations.inProductionBadge })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl md:text-2xl uppercase text-foreground mb-2", children: t.integrations.stackLayers[activeLayer].title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-muted-foreground leading-relaxed mb-4", children: t.integrations.stackLayers[activeLayer].description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[9px] text-muted-foreground uppercase tracking-widest mb-1.5", children: [
                  "// ",
                  t.cases.stackTitle
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: t.integrations.stackLayers[activeLayer].tech.map((tItem) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10.5px] px-2 py-0.5 bg-ink border border-lime/40 text-lime font-bold uppercase", children: tItem }, tItem)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-2 border-t border-bone/10 font-mono text-[9px] text-muted-foreground flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.integrations.routingAll }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime", children: t.integrations.inProductionBadge })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-bone/20 pb-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { children: [
            t.integrations.pillarPrefix,
            "S"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl md:text-2xl uppercase text-foreground mt-1", children: t.integrations.agentCore })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-px bg-bone/20 border border-bone/20 font-mono", children: pillars.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-ink p-4 hover:bg-graphite/30 transition-colors duration-300 flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lime tracking-widest font-bold text-[10px] uppercase mb-1.5 flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active" }),
            t.integrations.pillarPrefix,
            idx + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg uppercase text-foreground mb-1.5", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground leading-relaxed", children: item.desc })
        ] }) }, item.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/20 bg-ink/70 p-4 sm:p-5 md:p-6 corner-ticks relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-tl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-br" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-bone/20 pb-2 mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: t.integrations.lifecycleTag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl md:text-2xl uppercase text-foreground mt-1", children: t.integrations.lifecycleTitle })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "w-4 h-4 text-lime hidden sm:block" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-2.5", children: t.integrations.processLifecycle.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-bone/15 p-3 bg-ink/80 flex flex-col justify-between hover:border-lime/30 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10.5px] text-lime font-bold mb-1", children: [
            "// 0",
            idx + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm uppercase text-foreground mb-1", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10.5px] text-muted-foreground leading-relaxed", children: p.desc })
        ] }) }, p.step)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-3 border-t border-bone/20 flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] text-muted-foreground", children: t.integrations.bottomPrompt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/#contact", className: "inline-flex items-center gap-1.5 bg-lime text-ink px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-lime/90 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.integrations.bottomCtaBtn }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Integrations as component
};
