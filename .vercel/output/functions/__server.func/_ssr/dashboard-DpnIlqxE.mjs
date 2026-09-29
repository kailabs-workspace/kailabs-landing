import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as DotMatrix, S as SiteNav, a as SiteFooter } from "./SiteFooter-DsBLkoY6.mjs";
import { a as useI18n } from "./router-w_T3t37d.mjs";
import { T as Terminal, l as CodeXml, C as CircleCheck, W as Workflow, m as ShieldAlert } from "../_libs/lucide-react.mjs";
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
function PipelineToggle({
  label,
  Icon,
  on,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => onChange(!on), className: `w-full flex items-center justify-between border ${on ? "border-lime/30 bg-ink hover:border-lime" : "border-signal/30 bg-ink hover:border-signal"} p-3.5 transition-all duration-300 cursor-pointer text-left relative overflow-hidden group`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-4 h-4 transition-colors duration-300 ${on ? "text-lime" : "text-signal"}`, strokeWidth: 2 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs uppercase tracking-wider", children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${on ? "bg-lime led-active" : "bg-signal led-signal"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative w-10 h-5 border ${on ? "border-lime bg-lime/10" : "border-signal bg-signal/10"} transition-all duration-300`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute top-0.5 ${on ? "right-0.5" : "left-0.5"} h-3.5 w-3.5 ${on ? "bg-lime" : "bg-signal"} transition-all duration-300` }) })
    ] })
  ] });
}
function Dashboard() {
  const {
    t
  } = useI18n();
  const [events, setEvents] = reactExports.useState([]);
  const [codeGen, setCodeGen] = reactExports.useState(true);
  const [agenticQa, setAgenticQa] = reactExports.useState(true);
  const [orchestrator, setOrchestrator] = reactExports.useState(true);
  const [cpuLoad, setCpuLoad] = reactExports.useState(38);
  const feedEndRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const statInterval = setInterval(() => {
      setCpuLoad(Math.floor(32 + Math.random() * 24));
    }, 3e3);
    return () => clearInterval(statInterval);
  }, []);
  const eventPool = t.dashboard.eventPool;
  reactExports.useEffect(() => {
    let id = 0;
    const tick = () => {
      const p = eventPool[Math.floor(Math.random() * eventPool.length)];
      const now = /* @__PURE__ */ new Date();
      const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
      setEvents((e) => [{
        ...p,
        id: ++id,
        t: timeStr
      }, ...e].slice(0, 8));
    };
    tick();
    const interval = setInterval(tick, 2200);
    return () => clearInterval(interval);
  }, [eventPool]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-ink text-foreground overflow-hidden selection:bg-lime selection:text-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DotMatrix, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between border-b border-bone/20 pb-4 mb-6 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] md:text-[10px] tracking-widest text-muted-foreground uppercase", children: t.dashboard.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl sm:text-3xl md:text-4xl uppercase text-foreground mt-1", children: t.dashboard.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] md:text-xs text-muted-foreground mt-1 max-w-xl", children: t.dashboard.subtitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] text-lime flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 bg-lime led-active rounded-full" }),
          t.dashboard.uplinkOk
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-px bg-bone/20 border border-bone/20 mb-6", children: [{
        k: t.dashboard.stats.velocity.label,
        v: t.dashboard.stats.velocity.val,
        sub: t.dashboard.stats.velocity.sub
      }, {
        k: t.dashboard.stats.automation.label,
        v: t.dashboard.stats.automation.val,
        sub: t.dashboard.stats.automation.sub
      }, {
        k: t.dashboard.stats.status.label,
        v: t.dashboard.stats.status.val,
        sub: t.dashboard.stats.status.sub
      }].map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink corner-ticks p-3.5 sm:p-4.5 hover:bg-graphite/20 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-tl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-br" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[9px] tracking-widest text-muted-foreground flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime", children: [
            "0",
            idx + 1
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl sm:text-3xl md:text-4xl text-lime mt-1 uppercase leading-none font-bold", children: s.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[9px] text-bone/60 tracking-wider mt-1 uppercase", children: [
          "> ",
          s.sub
        ] })
      ] }, s.k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 border border-bone/20 p-1 bg-ink/40 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink p-3.5 sm:p-4.5 crt-screen min-h-[380px] flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "crt-scanline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-bone/20 pb-2 mb-3 font-mono text-[10px] uppercase tracking-widest", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "flex items-center gap-1.5 font-normal text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "w-3.5 h-3.5 text-lime led-active" }),
                t.dashboard.liveFeedTitle
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 bg-lime led-active rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime text-[9px]", children: t.dashboard.streaming })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 font-mono text-[11px] leading-relaxed max-h-[260px] overflow-y-auto scrollbar-thin scrollbar-thumb-lime/20", children: [
              events.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-lime/40 pl-2.5 py-1 bg-lime/[0.02] animate-fade-in", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground text-[9px] tracking-widest", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime bg-lime/10 px-1 py-0.2 border border-lime/20 font-bold", children: e.ch }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: e.t }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bone", children: e.who })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 text-[11px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-bold", children: t.dashboard.inboundLabel }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: e.msg })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 text-[11px] text-lime", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: t.dashboard.responseLabel }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: e.reply })
                ] })
              ] }, e.id)),
              events.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground animate-pulse p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink", children: "▮" }),
                " ",
                t.dashboard.awaiting
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: feedEndRef })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-bone/20 pt-2 mt-3 flex justify-between font-mono text-[9px] text-muted-foreground uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.dashboard.coreVersion }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.dashboard.bufferStatus })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink border border-bone/20 p-3.5 sm:p-4 shadow-xl relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "border-b border-bone/20 pb-2 mb-2.5 font-mono text-[10px] uppercase tracking-widest flex items-center gap-1.5 font-normal text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 bg-lime rounded-full led-active" }),
              t.dashboard.pipelinesTitle
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PipelineToggle, { label: t.dashboard.toggles.codeGen, Icon: CodeXml, on: codeGen, onChange: setCodeGen }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(PipelineToggle, { label: t.dashboard.toggles.agenticQa, Icon: CircleCheck, on: agenticQa, onChange: setAgenticQa }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(PipelineToggle, { label: t.dashboard.toggles.processOrchestrator, Icon: Workflow, on: orchestrator, onChange: setOrchestrator })
            ] }),
            (!codeGen || !agenticQa || !orchestrator) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 border border-signal/40 bg-signal/5 p-2 flex gap-1.5 items-start text-signal animate-fade-in", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-3.5 h-3.5 shrink-0 led-signal mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] leading-relaxed uppercase", children: t.pricing.statusReady === "DISPONIBLE" ? "Modo manual activo para pipelines pausados." : "Manual mode active for paused pipelines." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink border border-bone/20 p-3.5 sm:p-4 shadow-xl font-mono text-[11px] flex-1 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "border-b border-bone/20 pb-2 mb-2.5 text-[10px] uppercase tracking-widest font-normal text-foreground", children: t.dashboard.telemetryTitle }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[9px] text-muted-foreground uppercase mb-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.dashboard.telemetryLoad }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime", children: [
                      cpuLoad,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 border border-bone/20 bg-ink/40 p-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-lime transition-all duration-500", style: {
                    width: `${cpuLoad}%`
                  } }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-[10.5px] text-muted-foreground pt-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.dashboard.metrics.architectureLabel }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime font-bold", children: t.dashboard.metrics.architectureVal })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.dashboard.metrics.methodologyLabel }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: t.dashboard.metrics.methodologyVal })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.dashboard.metrics.codeQualityLabel }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: t.dashboard.metrics.codeQualityVal })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.dashboard.metrics.activePipelinesLabel }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime font-bold", children: [codeGen && "GEN", agenticQa && "QA", orchestrator && "WORKER"].filter(Boolean).join(" · ") || "NONE" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-bone/20 pt-2.5 mt-3 flex items-center justify-between text-muted-foreground text-[9px] uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.dashboard.systemStatusLabel }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime flex items-center gap-1 font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 bg-lime rounded-full led-active" }),
                t.dashboard.systemStatusVal
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Dashboard as component
};
