import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as DotMatrix } from "./DotMatrix-DwmFKVWf.mjs";
import { S as SiteNav } from "./SiteNav-D6_7uAhq.mjs";
import { b as ChevronDown, I as Image, T as Terminal } from "../_libs/lucide-react.mjs";
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
const CASES = [{
  id: "047",
  name: "LA CUCHILLA",
  sector: "BARBERSHOP · MADRID",
  metric: "+47",
  metricLabel: "BOOKINGS / 7D",
  img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=70",
  log: [{
    who: "USER",
    text: "tienes hueco hoy pa un corte rapido?"
  }, {
    who: "KAI",
    text: "Sí — 17:30 o 19:00. ¿Cuál?"
  }, {
    who: "USER",
    text: "17:30."
  }, {
    who: "KAI",
    text: "Hecho. Llega 5 min antes. Calle Pez 14."
  }]
}, {
  id: "052",
  name: "ATELIER NORD",
  sector: "TATTOO STUDIO · BERLIN",
  metric: "92%",
  metricLabel: "FIRST-REPLY UNDER 10S",
  img: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=1200&q=70",
  log: [{
    who: "USER",
    text: "deposit? how does it work"
  }, {
    who: "KAI",
    text: "50€ to hold the slot. Refundable up to 48h before."
  }, {
    who: "USER",
    text: "ok send link"
  }, {
    who: "KAI",
    text: "Sent. Slot held for 15 min."
  }]
}, {
  id: "061",
  name: "CLINICA VERA",
  sector: "PRIVATE CLINIC · BARCELONA",
  metric: "−63%",
  metricLabel: "NO-SHOW RATE",
  img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=70",
  log: [{
    who: "USER",
    text: "tengo q cambiar la cita d mañana"
  }, {
    who: "KAI",
    text: "Sin problema. ¿Jueves 10:00 o viernes 12:30?"
  }, {
    who: "USER",
    text: "viernes."
  }, {
    who: "KAI",
    text: "Movida. Invite actualizada."
  }]
}];
function Cases() {
  const [open, setOpen] = reactExports.useState("047");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-ink text-foreground overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DotMatrix, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10 mx-auto max-w-6xl px-6 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-bone/20 pb-4 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] tracking-widest text-muted-foreground uppercase", children: "/// CLASSIFIED — CASE FILES" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl mt-2 uppercase", children: "Operator Logs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono mt-4 max-w-2xl text-muted-foreground text-sm", children: "> Authentic records. Real businesses. Edits only for privacy." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-bone/20 bg-ink/50 backdrop-blur-sm shadow-xl", children: CASES.map((c) => {
        const isOpen = open === c.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-bone/20 last:border-b-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(isOpen ? null : c.id), className: "w-full grid grid-cols-[80px_1fr_auto] items-center gap-6 px-6 py-5 text-left hover:bg-lime/5 transition-all duration-300 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-lime tracking-widest", children: [
              "/// ",
              c.id
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl md:text-2xl uppercase transition-colors duration-200 hover:text-lime", children: c.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1", children: c.sector })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-lime" : ""}` })
          ] }),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-px bg-bone/20 border-t border-bone/20 animate-fade-in", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink relative group overflow-hidden radar-scanner min-h-[300px] max-h-[480px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: `${c.name} — operator photo`, loading: "lazy", className: "w-full h-full object-cover grayscale contrast-115 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 font-mono text-[10px] tracking-widest bg-ink/80 px-2 py-1 text-lime border border-lime/40 backdrop-blur-sm", children: [
                "◼ REC // ",
                c.id
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 right-3 font-mono text-[9px] text-white/50 bg-ink/75 px-1.5 py-0.5 border border-white/10 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-3 h-3 text-lime" }),
                " SCAN_OK"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-1.5 hazard-tape opacity-80" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink p-6 md:p-8 flex flex-col justify-between min-h-[400px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-bone/20 pb-4 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] tracking-widest text-muted-foreground", children: "KEY PERFORMANCE METRIC" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-6xl md:text-7xl text-lime mt-2 uppercase leading-none font-bold", children: c.metric }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[11px] tracking-widest text-muted-foreground mt-2 uppercase", children: [
                    "> ",
                    c.metricLabel
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] tracking-widest text-muted-foreground mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "w-3.5 h-3.5 text-lime" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "// RAW CONSOLE TRANSCRIPT" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CaseLogPrinter, { logs: c.log })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 font-mono text-[9px] tracking-widest text-muted-foreground border-t border-bone/20 flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SYS.FILE // SECURE_LOG" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "END_OF_LOG // FILE_",
                  c.id
                ] })
              ] })
            ] })
          ] })
        ] }, c.id);
      }) })
    ] })
  ] });
}
function CaseLogPrinter({
  logs
}) {
  const [visibleCount, setVisibleCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    setVisibleCount(0);
  }, [logs]);
  reactExports.useEffect(() => {
    if (visibleCount >= logs.length) return;
    const delay = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, 800 + Math.random() * 400);
    return () => clearTimeout(delay);
  }, [visibleCount, logs]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[12px] leading-relaxed space-y-2.5 min-h-[120px]", children: [
    logs.slice(0, visibleCount).map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in pl-1 border-l border-bone/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: m.who === "KAI" ? "text-lime font-semibold" : "text-muted-foreground", children: m.who === "KAI" ? "> KAI  :" : "> USER :" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: m.text })
    ] }, i)),
    visibleCount < logs.length && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lime flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-pulse", children: "▮" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground uppercase tracking-widest", children: [
        "[ DECRYPTING HILO_0",
        visibleCount + 1,
        "... ]"
      ] })
    ] })
  ] });
}
export {
  Cases as component
};
