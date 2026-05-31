import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as DotMatrix } from "./DotMatrix-DwmFKVWf.mjs";
import { S as SiteNav } from "./SiteNav-D6_7uAhq.mjs";
import { C as Calendar, g as MessageSquare, i as Slack, M as Mail, G as Globe, c as CreditCard, P as Phone, F as FileText } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const TOOLS = [{
  Icon: Calendar,
  name: "Google Calendar",
  meta: ["routing active", "latency: minimal"]
}, {
  Icon: MessageSquare,
  name: "WhatsApp",
  meta: ["channel: open", "rate: unlimited"]
}, {
  Icon: Slack,
  name: "Slack Link",
  meta: ["webhook: ok", "alerts: live"]
}, {
  Icon: Mail,
  name: "Gmail Uplink",
  meta: ["oauth: granted", "scope: r/w"]
}, {
  Icon: Globe,
  name: "Instagram DMs",
  meta: ["graph: v19", "dm: enabled"]
}, {
  Icon: CreditCard,
  name: "Stripe Engine",
  meta: ["mode: live", "fees: handled"]
}, {
  Icon: Phone,
  name: "Twilio Gateway",
  meta: ["sms: ok", "voice: ready"]
}, {
  Icon: FileText,
  name: "Notion Storage",
  meta: ["db: synced", "writes: ok"]
}];
function Integrations() {
  const [hover, setHover] = reactExports.useState(null);
  const heights = [12.5, 37.5, 62.5, 87.5];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-ink text-foreground overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DotMatrix, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10 mx-auto max-w-7xl px-6 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-bone/20 pb-4 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] tracking-widest text-muted-foreground uppercase", children: "/// HOW IT WORKS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl mt-2 uppercase", children: "Infrastructure" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono mt-4 max-w-2xl text-muted-foreground", children: [
          "> We don't replace your tools — we give them ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime", children: "an agent" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border border-bone/20 p-1 bg-ink/40 shadow-2xl backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-32 h-1.5 hazard-tape" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-1.5 hazard-tape" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-3 gap-px bg-bone/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-1 bg-ink p-6 flex flex-col justify-between gap-6 min-h-[500px]", children: TOOLS.slice(0, 4).map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ToolBlock, { idx: i, t, side: "left", hover, setHover }, t.name)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-1 bg-ink p-10 flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 w-full h-full pointer-events-none hidden md:block", viewBox: "0 0 100 100", preserveAspectRatio: "none", children: [
              heights.map((y, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M 0,${y} C 15,${y} 15,50 32,50`, fill: "none", stroke: "rgba(232, 228, 214, 0.15)", strokeWidth: "1.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M 100,${y} C 85,${y} 85,50 68,50`, fill: "none", stroke: "rgba(232, 228, 214, 0.15)", strokeWidth: "1.5" })
              ] }, `bg-${idx}`)),
              heights.map((y, idx) => {
                const leftIndex = idx;
                const rightIndex = idx + 4;
                const isLeftActive = hover === leftIndex;
                const isRightActive = hover === rightIndex;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M 0,${y} C 15,${y} 15,50 32,50`, fill: "none", stroke: isLeftActive ? "var(--lime)" : "transparent", strokeWidth: "2", className: isLeftActive ? "connector-flow" : "", style: {
                    filter: isLeftActive ? "drop-shadow(0 0 4px var(--lime))" : "none",
                    transition: "stroke 0.3s"
                  } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M 100,${y} C 85,${y} 85,50 68,50`, fill: "none", stroke: isRightActive ? "var(--lime)" : "transparent", strokeWidth: "2", className: isRightActive ? "connector-flow" : "", style: {
                    filter: isRightActive ? "drop-shadow(0 0 4px var(--lime))" : "none",
                    transition: "stroke 0.3s"
                  } })
                ] }, `fg-${idx}`);
              })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-44 h-44 bg-lime border-[3px] border-ink shadow-[8px_8px_0_0_rgba(212,245,66,0.25)] transition-all duration-300 hover:shadow-[12px_12px_0_0_rgba(212,245,66,0.4)] z-10 crt-screen", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "crt-scanline" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full p-4 flex items-center justify-center group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/isotipo-transp.svg", alt: "KAI Core Isotype", className: "w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 select-none" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 font-mono text-[10px] tracking-widest text-muted-foreground text-center z-10 relative", children: [
              "◼ AGENT_CORE",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime led-active inline-block mt-1", children: "◉ ROUTING ALL CHANNELS" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-1 bg-ink p-6 flex flex-col justify-between gap-6 min-h-[500px]", children: TOOLS.slice(4).map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ToolBlock, { idx: i + 4, t, side: "right", hover, setHover }, t.name)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid md:grid-cols-3 gap-px bg-bone/20 border border-bone/20 font-mono text-xs", children: [["INGEST", "Webhooks · OAuth · Polling"], ["REASON", "Context-aware. Brand-tuned."], ["ACT", "Reply · Book · Tag · Escalate"]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink p-5 hover:bg-graphite/25 transition-colors duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lime tracking-widest font-bold", children: [
          "/// ",
          k
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-muted-foreground", children: [
          "> ",
          v
        ] })
      ] }, k)) })
    ] })
  ] });
}
function ToolBlock({
  t,
  idx,
  side,
  hover,
  setHover
}) {
  const active = hover === idx;
  const {
    Icon
  } = t;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onMouseEnter: () => setHover(idx), onMouseLeave: () => setHover(null), className: `group border ${active ? "border-lime bg-lime/[0.03]" : "border-bone/20 bg-ink"} p-4 transition-all duration-300 cursor-pointer relative tactile-shadow`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 transition-colors duration-300 ${active ? "text-lime" : "text-foreground"}`, strokeWidth: 2.5 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-sm font-semibold", children: t.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `ml-auto h-2 w-2 rounded-full ${active ? "bg-lime led-active" : "bg-bone/20"}` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-2 font-mono text-[10px] tracking-widest ${active ? "text-lime" : "text-muted-foreground"}`, children: t.meta.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      "> ",
      m
    ] }, m)) })
  ] });
}
export {
  Integrations as component
};
