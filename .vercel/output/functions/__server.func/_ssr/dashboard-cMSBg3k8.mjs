import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as DotMatrix } from "./DotMatrix-DwmFKVWf.mjs";
import { S as SiteNav } from "./SiteNav-D6_7uAhq.mjs";
import { T as Terminal, g as MessageSquare, f as Instagram, C as Calendar, h as ShieldAlert } from "../_libs/lucide-react.mjs";
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
const POOL = [{
  ch: "WA",
  who: "+34 6•• ••• 21",
  msg: "Hola, ¿queda hueco mañana?",
  reply: "Sí — 10:00 o 17:30. ¿Cuál prefieres?"
}, {
  ch: "DM",
  who: "@sam.studio",
  msg: "Can you fit me today?",
  reply: "Yes — 16:30 or 18:00 today."
}, {
  ch: "WA",
  who: "+44 7•• ••• 04",
  msg: "Need to reschedule Friday.",
  reply: "Moved to Mon 11:00. Invite sent."
}, {
  ch: "DM",
  who: "@lu.crew",
  msg: "Pricing?",
  reply: "Sent. Reply DEPLOY to lock it in."
}, {
  ch: "WEB",
  who: "anon_8821",
  msg: "Are you human?",
  reply: "No. Agent KAI. ~8s."
}, {
  ch: "WA",
  who: "+1 415 •• ••",
  msg: "Invoice?",
  reply: "Attached. Pay by Fri."
}];
function Toggle({
  label,
  Icon,
  on,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => onChange(!on), className: `w-full flex items-center justify-between border ${on ? "border-lime/30 bg-ink hover:border-lime" : "border-signal/30 bg-ink hover:border-signal"} p-4 transition-all duration-300 cursor-pointer text-left relative overflow-hidden group`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 transition-colors duration-300 ${on ? "text-lime" : "text-signal"}`, strokeWidth: 2.5 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs uppercase tracking-widest", children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2 w-2 rounded-full ${on ? "bg-lime led-active" : "bg-signal led-signal"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative w-12 h-6 border ${on ? "border-lime bg-lime/10" : "border-signal bg-signal/10"} transition-all duration-300`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute top-0.5 ${on ? "right-0.5" : "left-0.5"} h-4 w-4 ${on ? "bg-lime" : "bg-signal"} transition-all duration-300` }) })
    ] })
  ] });
}
function Dashboard() {
  const [events, setEvents] = reactExports.useState([]);
  const [wa, setWa] = reactExports.useState(true);
  const [dm, setDm] = reactExports.useState(true);
  const [cal, setCal] = reactExports.useState(true);
  const [count, setCount] = reactExports.useState(47);
  const [cpuLoad, setCpuLoad] = reactExports.useState(24);
  const feedEndRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const statInterval = setInterval(() => {
      setCpuLoad(Math.floor(18 + Math.random() * 22));
    }, 3e3);
    return () => clearInterval(statInterval);
  }, []);
  reactExports.useEffect(() => {
    let id = 0;
    const tick = () => {
      const p = POOL[Math.floor(Math.random() * POOL.length)];
      const now = /* @__PURE__ */ new Date();
      const t = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
      setEvents((e) => [{
        ...p,
        id: ++id,
        t
      }, ...e].slice(0, 8));
      if (Math.random() > 0.6) setCount((c) => c + 1);
    };
    tick();
    const i = setInterval(tick, 2500);
    return () => clearInterval(i);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-ink text-foreground overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DotMatrix, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10 mx-auto max-w-7xl px-6 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between border-b border-bone/20 pb-4 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] tracking-widest text-muted-foreground uppercase", children: "/// AGENT CONSOLE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl mt-2 uppercase", children: "Control Deck" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] text-muted-foreground hidden md:block", children: [
          "SESSION_LIVE // ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime led-active inline-block", children: "● UPLINK OK" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-px bg-bone/20 border border-bone/20 mb-10", children: [{
        k: "BOOKINGS / 7D",
        v: `+${count}`,
        sub: "99.8% capture rate"
      }, {
        k: "AVG RESPONSE",
        v: "~8s",
        sub: "Autonomous routing"
      }, {
        k: "AGENT CORE STATUS",
        v: "ACTIVE",
        sub: "Operational 24/7"
      }].map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink corner-ticks p-6 md:p-8 hover:bg-graphite/20 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-tl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-br" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] tracking-widest text-muted-foreground flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime", children: [
            "0",
            idx + 1,
            " // STAT"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl md:text-7xl text-lime mt-3 uppercase leading-none font-bold", children: s.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[9px] text-muted-foreground tracking-wider mt-3 uppercase", children: [
          "> ",
          s.sub
        ] })
      ] }, s.k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2 border border-bone/20 p-1 bg-ink/40 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink p-6 crt-screen min-h-[480px] flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "crt-scanline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-bone/20 pb-3 mb-4 font-mono text-[11px] uppercase tracking-widest", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "w-4 h-4 text-lime led-active" }),
                "// LIVE_FEED.log"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-lime led-active rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime", children: "STREAMING" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 font-mono text-[12px] leading-relaxed max-h-[380px] overflow-y-auto scrollbar-thin scrollbar-thumb-lime/20", children: [
              events.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-lime/40 pl-4 py-1.5 bg-lime/[0.02] hover:bg-lime/[0.04] transition-colors duration-200 animate-fade-in", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-muted-foreground text-[10px] tracking-widest", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime bg-lime/10 px-1.5 py-0.5 border border-lime/20", children: e.ch }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "timestamp: ",
                    e.t
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: e.who })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-bold", children: "> INBOUND:" }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: e.msg })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 text-lime", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "> RESPONSE:" }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: e.reply })
                ] })
              ] }, e.id)),
              events.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground animate-pulse p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink", children: "▮" }),
                " Awaiting network traffic uplink..."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: feedEndRef })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-bone/20 pt-4 mt-6 flex justify-between font-mono text-[10px] text-muted-foreground uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Core: KAI_v1.0.3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Buffer: Normal" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink border border-bone/20 p-6 shadow-xl relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-bone/20 pb-3 mb-4 font-mono text-[11px] uppercase tracking-widest flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 bg-lime rounded-full led-active" }),
              "// Uplink Channels"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "WhatsApp Uplink", Icon: MessageSquare, on: wa, onChange: setWa }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Instagram Uplink", Icon: Instagram, on: dm, onChange: setDm }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Calendar Scheduler", Icon: Calendar, on: cal, onChange: setCal })
            ] }),
            (!wa || !dm || !cal) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 border border-signal/40 bg-signal/5 p-3 flex gap-2.5 items-start text-signal animate-fade-in", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-5 h-5 shrink-0 led-signal mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] leading-relaxed uppercase", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Uplink alert:" }),
                " Inbound traffic will drop to zero on disconnected channels. Reconnect to resume autopilot."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink border border-bone/20 p-6 shadow-xl font-mono text-xs flex-1 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-bone/20 pb-3 mb-4 text-[11px] uppercase tracking-widest", children: "// Core Diagnostics" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground uppercase mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Telemetry Load" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime", children: [
                      cpuLoad,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 border border-bone/20 bg-ink/40 p-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-lime transition-all duration-500", style: {
                    width: `${cpuLoad}%`
                  } }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-[11px] text-muted-foreground pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "> routing :" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime font-bold", children: "AUTOMATIC" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "> voice profile :" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "CALM · DRY" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "> secure bypass :" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "ACTIVE" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "> active feeds :" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime font-bold", children: [wa && "WA", dm && "DM", cal && "CAL"].filter(Boolean).join(" · ") || "none" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-bone/20 pt-4 mt-6 flex items-center justify-between text-muted-foreground text-[10px] uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Security Shield" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 bg-lime rounded-full led-active" }),
                "Secured"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  Dashboard as component
};
