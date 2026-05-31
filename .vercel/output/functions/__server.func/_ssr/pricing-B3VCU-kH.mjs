import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteNav } from "./SiteNav-D6_7uAhq.mjs";
import { a as Check, e as Info } from "../_libs/lucide-react.mjs";
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
const PLANS = [{
  code: "PLAN_01",
  name: "SINGLE AGENT",
  sub: "For solo operators",
  priceMonthly: 149,
  priceAnnual: 119,
  perks: ["24/7/365 coverage", "1 brand · 1 voice profile", "Instagram DMs + WhatsApp", "Google Calendar sync", "~8s response time autopilot", "Inbox email triage routing"]
}, {
  code: "PLAN_02",
  name: "AGENCY DEPLOYMENT",
  sub: "For multi-channel ops",
  priceMonthly: 499,
  priceAnnual: 399,
  perks: ["24/7/365 coverage", "Unlimited brands & voices", "Omni-channel sync (IG, WA, Web)", "Slack alerts + Notion routes", "Stripe payment + billing engine", "Priority uplink support · SLA"]
}];
function Pricing() {
  const [billingCycle, setBillingCycle] = reactExports.useState("monthly");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-cream text-ink transition-colors duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-ink text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-7xl px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b-2 border-ink pb-6 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] tracking-widest uppercase text-ink/60", children: "/// MISSION BRIEFING — DEPLOYMENT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl mt-3 uppercase leading-none font-bold", children: "Pick Your Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono mt-4 max-w-2xl text-xs md:text-sm text-ink/80", children: '> No tiers of "almost". Two payloads. Deploy and go.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-xs ${billingCycle === "monthly" ? "text-ink font-bold" : "text-ink/50"}`, children: "MONTHLY" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setBillingCycle((c) => c === "monthly" ? "annual" : "monthly"), className: "relative w-14 h-7 border-2 border-ink bg-cream rounded-full transition-all duration-300 cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-0.5 h-5 w-5 bg-ink rounded-full transition-all duration-300", style: {
            left: billingCycle === "monthly" ? "4px" : "32px"
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-xs ${billingCycle === "annual" ? "text-ink font-bold" : "text-ink/50"}`, children: "ANNUAL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-ink text-cream text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse", children: "Save 20%" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: PLANS.map((p) => {
        const price = billingCycle === "monthly" ? p.priceMonthly : p.priceAnnual;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-[3px] border-ink bg-cream p-8 md:p-10 corner-ticks relative tactile-shadow group flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-tl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-br" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between font-mono text-[11px] tracking-widest uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-ink/60", children: [
                "/// ",
                p.code
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-ink animate-ping" }),
                "STATUS: READY"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl mt-6 uppercase leading-none font-bold", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs uppercase tracking-widest mt-2 text-ink/70", children: [
              "> ",
              p.sub
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-end gap-2 border-b-2 border-ink/15 pb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-7xl md:text-8xl uppercase leading-none font-bold tracking-tighter", children: [
                "€",
                price
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs pb-3 flex flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "/ MONTH" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-ink/65 uppercase", children: billingCycle === "annual" ? "Billed Annually" : "Billed Monthly" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3 font-mono text-xs md:text-sm", children: p.perks.map((perk) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 group/perk", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4.5 h-4.5 text-ink border border-ink/20 p-0.5 mt-0.5 shrink-0 group-hover/perk:border-ink transition-colors duration-200" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ink/85", children: perk })
            ] }, perk)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "group relative mt-10 w-full bg-ink text-cream py-5 font-mono text-sm uppercase tracking-widest border-2 border-ink overflow-hidden cursor-pointer select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-lime translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative group-hover:text-ink transition-colors duration-200 font-bold flex items-center justify-center gap-2", children: [
              "▶ DEPLOY ",
              p.name.split(" ")[0]
            ] })
          ] })
        ] }, p.code);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 border-t-2 border-ink pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-ink/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "END OF BRIEFING" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "NO SETUP FEE · CANCEL ANYTIME · INVOICED MONTHLY" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
          .bg-cream .corner-ticks::before, .bg-cream .corner-ticks::after,
          .bg-cream .corner-ticks > .tick-tl, .bg-cream .corner-ticks > .tick-br {
            border-color: var(--ink) !important;
          }
        ` })
    ] })
  ] });
}
export {
  Pricing as component
};
