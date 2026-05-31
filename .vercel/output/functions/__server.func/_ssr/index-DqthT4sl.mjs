import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as DotMatrix } from "./DotMatrix-DwmFKVWf.mjs";
import { S as SiteNav } from "./SiteNav-D6_7uAhq.mjs";
import { g as MessageSquare, C as Calendar, Z as Zap, d as Inbox, U as User, S as Send, j as TriangleAlert } from "../_libs/lucide-react.mjs";
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
const SCRIPT = [
  { who: "USER", text: "Hey KAI, can you fit Sam in today?" },
  { who: "KAI", text: "Hey Sam, yes — 16:30 or 18:00 today." },
  { who: "USER", text: "Book the 18:00." },
  { who: "KAI", text: "Done. Calendar invite sent. ~8s." }
];
function AgentChat() {
  const [messages, setMessages] = reactExports.useState([]);
  const [currentScriptIndex, setCurrentScriptIndex] = reactExports.useState(0);
  const [typing, setTyping] = reactExports.useState(false);
  const [displayedText, setDisplayedText] = reactExports.useState("");
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (currentScriptIndex >= SCRIPT.length) return;
    const nextMsg = SCRIPT[currentScriptIndex];
    if (nextMsg.who === "USER") {
      const t = setTimeout(() => {
        setMessages((prev) => [...prev, nextMsg]);
        setCurrentScriptIndex((idx) => idx + 1);
      }, 900);
      return () => clearTimeout(t);
    } else {
      const delay = setTimeout(() => {
        setTyping(true);
        let charIndex = 0;
        setDisplayedText("");
        const typingInterval = setInterval(() => {
          if (charIndex < nextMsg.text.length) {
            setDisplayedText((txt) => txt + nextMsg.text.charAt(charIndex));
            charIndex++;
          } else {
            clearInterval(typingInterval);
            setTyping(false);
            setMessages((prev) => [...prev, nextMsg]);
            setDisplayedText("");
            setCurrentScriptIndex((idx) => idx + 1);
          }
        }, 35);
        return () => clearInterval(typingInterval);
      }, 1e3);
      return () => clearTimeout(delay);
    }
  }, [currentScriptIndex]);
  const reset = () => {
    setMessages([]);
    setCurrentScriptIndex(0);
    setTyping(false);
    setDisplayedText("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "border border-bone/30 bg-ink p-4 font-mono text-[13px] leading-relaxed relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1 right-2 font-mono text-[8px] text-muted-foreground opacity-30", children: "TRANSCRIPT_SYS" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-bone/20 pb-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-[10px] tracking-wider", children: "// LIVE_TRANSCRIPT" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 bg-lime led-active rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime text-[11px] font-bold", children: "ACTIVE" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 min-h-[160px] flex flex-col justify-end", children: [
      messages.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: m.who === "KAI" ? "text-lime font-bold" : "text-muted-foreground", children: m.who === "KAI" ? "> KAI  :" : "> USER :" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: m.text })
      ] }, i)),
      typing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lime", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "> KAI  :" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: displayedText }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink", children: "▮" })
      ] }),
      !typing && currentScriptIndex < SCRIPT.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink", children: "▮" }) })
    ] }),
    currentScriptIndex >= SCRIPT.length && !typing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: reset,
        className: "mt-3 text-xs text-muted-foreground hover:text-lime transition-all duration-200 cursor-pointer flex items-center gap-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "[" }),
          " REPLAY_TRANSCRIPT ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "]" })
        ]
      }
    )
  ] });
}
const WORDS = "We don't replace your tools — we give them an agent.".split(" ");
function Manifesto() {
  const ref = reactExports.useRef(null);
  const [progress, setProgress] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.88;
      const end = vh * 0.22;
      const p = (start - rect.top) / (start - end);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      ref,
      className: "font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.9] text-center",
      children: WORDS.map((w, i) => {
        const t = (i + 1) / WORDS.length;
        const lit = progress >= t;
        const isAccent = w.toLowerCase().includes("agent");
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "inline-block transition-all duration-500 ease-out",
            style: {
              color: lit ? isAccent ? "var(--lime)" : "#ffffff" : "rgba(255,255,255,0.08)",
              transform: lit ? "translateY(0px) scale(1)" : "translateY(15px) scale(0.96)",
              filter: lit ? "blur(0px)" : "blur(3px)",
              marginRight: "0.2em"
            },
            children: w
          },
          i
        );
      })
    }
  );
}
function Tag({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] tracking-widest text-muted-foreground uppercase", children });
}
function SectionHeader({
  index,
  title
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 flex items-end justify-between border-b border-bone/20 pb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { children: [
        "/// SECTION ",
        index
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-5xl mt-2 uppercase", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] text-muted-foreground hidden md:block", children: [
      "FILE_047 // ",
      index,
      "/04"
    ] })
  ] });
}
const INITIAL_THREADS = [{
  id: "ig",
  channel: "IG_DM",
  who: "@sam.studio",
  preview: "Yes — 16:30 or 18:00 today.",
  tag: "AUTO",
  status: "CLOSED",
  logs: [{
    who: "USER",
    text: "hey KAI, can you fit Sam in today?",
    time: "11:20:05"
  }, {
    who: "SYSTEM",
    text: "Syncing availability for 2026-05-30..."
  }, {
    who: "KAI",
    text: "Hey Sam, yes — 16:30 or 18:00 today.",
    time: "11:20:13"
  }, {
    who: "USER",
    text: "book the 18:00.",
    time: "11:21:40"
  }, {
    who: "SYSTEM",
    text: "Writing event to Google Calendar..."
  }, {
    who: "KAI",
    text: "Booked ✓ I sent you a calendar invite and a reminder for tomorrow.",
    time: "11:21:48"
  }]
}, {
  id: "wa",
  channel: "WA",
  who: "+34 621 ••• •••",
  preview: "Invoice attached. Pay by Fri.",
  tag: "AUTO",
  status: "CLOSED",
  logs: [{
    who: "USER",
    text: "hola, ya he hecho la transferencia del deposito",
    time: "10:14:22"
  }, {
    who: "SYSTEM",
    text: "Validating Stripe webhook..."
  }, {
    who: "KAI",
    text: "Recibido. Factura adjuntada en el hilo. Por favor págala antes del viernes.",
    time: "10:14:30"
  }]
}, {
  id: "web",
  channel: "WEB",
  who: "anon_8821",
  preview: "Forwarded to Brand Ops.",
  tag: "TRIAGE",
  status: "OPEN",
  logs: [{
    who: "USER",
    text: "Hello, I want to talk to a real person regarding licensing",
    time: "09:05:10"
  }, {
    who: "SYSTEM",
    text: "Triage triggers: [real person, licensing]"
  }, {
    who: "KAI",
    text: "I've flagged this conversation for a human team member. Brand Ops will reply here shortly.",
    time: "09:05:18"
  }]
}];
function Index() {
  const [threads, setThreads] = reactExports.useState(INITIAL_THREADS);
  const [activeId, setActiveId] = reactExports.useState("ig");
  const [inputText, setInputText] = reactExports.useState("");
  const activeThread = threads.find((t) => t.id === activeId) || threads[0];
  const chatContainerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [activeThread.logs]);
  const handleTakeover = (threadId) => {
    setThreads((prev) => prev.map((t) => {
      if (t.id === threadId) {
        return {
          ...t,
          tag: "MANUAL",
          status: "HANDOFF",
          logs: [...t.logs, {
            who: "SYSTEM",
            text: "⚠️ UPLINK INTERRUPTED: Manual handoff mode engaged. Operator control authorized."
          }]
        };
      }
      return t;
    }));
  };
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const now = /* @__PURE__ */ new Date();
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
    setThreads((prev) => prev.map((t) => {
      if (t.id === activeId) {
        return {
          ...t,
          logs: [...t.logs, {
            who: "USER",
            text: inputText,
            time: timeStr
          }]
        };
      }
      return t;
    }));
    setInputText("");
    setTimeout(() => {
      setThreads((prev) => prev.map((t) => {
        if (t.id === activeId) {
          return {
            ...t,
            logs: [...t.logs, {
              who: "SYSTEM",
              text: "Message dispatched via human-uplink bypass."
            }]
          };
        }
        return t;
      }));
    }, 800);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-ink text-foreground overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DotMatrix, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-32 md:pt-24 md:pb-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: "> STATUS: ACTIVE  //  FILE: 047" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 corner-ticks p-6 md:p-12 border border-bone/10 bg-ink/40 backdrop-blur-md transition-all duration-500 hover:border-lime/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-tl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-br" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-xs md:text-sm text-lime mb-6 uppercase tracking-widest flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-lime led-active rounded-full" }),
          "/// Mission Brief 001"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[12vw] md:text-[8.5rem] leading-[0.82] uppercase tracking-tighter", children: [
          "Your Inbox",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "On ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime glitch-hover inline-block cursor-default", children: "Autopilot" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed", children: [
          "> Your inbox just got a co-pilot. Agent KAI handles DMs, WhatsApp, calendar and web — calm, dry, never robotic. Response time: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground border-b border-lime/40 pb-0.5", children: "~8s" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "terminal-hover inline-flex items-center gap-3 bg-lime px-7 py-4 font-mono text-sm font-bold uppercase tracking-widest text-ink hover:bg-lime/90 transition-all duration-300 tactile-shadow", children: "▶ Drop a D.M." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#agent", className: "inline-flex items-center gap-3 border border-bone/30 px-7 py-4 font-mono text-sm uppercase tracking-widest text-foreground hover:border-lime hover:text-lime transition-all duration-300", children: "[ Meet the Agent ]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-bone/20 border border-bone/20 overflow-hidden", children: [["CHANNELS", "DM·WA·WEB"], ["SHIFT", "24/7/365"], ["RESPONSE", "~8 SEC"], ["DISPOSITION", "CALM·DRY"]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink/80 p-4 transition-colors duration-300 hover:bg-graphite/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-muted-foreground tracking-widest", children: k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm text-lime mt-1 font-semibold", children: v })
        ] }, k)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 mx-auto max-w-5xl px-6 py-24 md:py-36 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: "/// 01 — The Principle" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Manifesto, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "agent", className: "relative z-10 mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "02", title: "Meet the Agent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 border border-bone/20 bg-ink/65 backdrop-blur-sm shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-b md:border-b-0 md:border-r border-bone/20 p-12 flex flex-col items-center justify-center min-h-[440px] crt-screen", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "crt-scanline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-60 h-60 bg-lime border-[3px] border-ink shadow-[8px_8px_0_0_rgba(212,245,66,0.25)] transition-all duration-300 hover:shadow-[12px_12px_0_0_rgba(212,245,66,0.4)] overflow-hidden group flex items-center justify-center p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/isotipo-transp.svg", alt: "KAI Agent Isotipo", className: "w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 select-none" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 font-mono text-[10px] text-lime/70 tracking-widest text-center uppercase", children: "// TELEMETRY UPLINK STATUS: OK" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-10 bg-ink/90 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs space-y-3 mb-8", children: [["CODENAME", "Agent KAI"], ["CHANNELS", "DM • WA • Web • Calendar"], ["SHIFT", "24/7/365 (NEVER OFF)"], ["RESPONSE", "~8 seconds"], ["DISPOSITION", "Calm, dry, never robotic"]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[120px_1fr] gap-4 border-b border-bone/10 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground uppercase", children: k }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime font-semibold", children: v })
          ] }, k)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AgentChat, {})
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "03", title: "Unified Inbox" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-px bg-bone/20 border border-bone/20 mb-12", children: [{
        Icon: MessageSquare,
        label: "DM / WhatsApp",
        status: "LIVE",
        desc: "Threaded conversations across IG, WA and web chat, handled inline."
      }, {
        Icon: Calendar,
        label: "Calendar Ops",
        status: "LIVE",
        desc: "Auto-proposes slots, confirms bookings, reschedules without friction."
      }, {
        Icon: Zap,
        label: "Automations",
        status: "PROCESSING",
        desc: "Triggers, follow-ups and tagging fire in ~8s, always on-brand."
      }].map(({
        Icon,
        label,
        status,
        desc
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink p-6 hover:bg-graphite/35 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-2 mb-6 hazard-tape opacity-80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 border-[3px] border-foreground flex items-center justify-center mb-5 bg-ink transition-transform duration-300 hover:rotate-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { strokeWidth: 2.5, className: "w-7 h-7 text-lime" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] tracking-widest text-lime", children: status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl uppercase mb-3", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-xs text-muted-foreground leading-relaxed", children: desc })
      ] }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 border border-bone/20 p-1 bg-ink/50 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/10 bg-ink/90 p-4 md:p-6 backdrop-blur-sm crt-screen", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "crt-scanline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-bone/20 pb-3 mb-6 font-mono text-[11px] uppercase tracking-widest", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "w-4 h-4 text-lime led-active" }),
            "Unified_Inbox.app"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            threads.filter((t) => t.status === "OPEN").length,
            " OPEN ·",
            " ",
            threads.filter((t) => t.status === "HANDOFF").length,
            " MANNED ·",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime font-bold", children: "ACTIVE_BOT" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[260px_1fr] gap-6 min-h-[380px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-r border-bone/10 pr-0 md:pr-4 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] text-muted-foreground tracking-widest uppercase mb-2", children: "// Inbox Stream" }),
            threads.map((t) => {
              const isActive = t.id === activeId;
              const isHandoff = t.status === "HANDOFF";
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveId(t.id), className: `w-full text-left p-3 border font-mono text-xs transition-all duration-200 cursor-pointer flex flex-col gap-1.5 ${isActive ? "border-lime bg-lime/10 text-foreground" : "border-bone/15 bg-ink/40 text-muted-foreground hover:border-lime/40 hover:bg-ink/70"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-semibold ${isActive ? "text-lime" : "text-foreground"}`, children: t.channel }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] px-1.5 py-0.5 border ${isHandoff ? "border-signal text-signal led-signal bg-signal/5" : t.tag === "TRIAGE" ? "border-yellow-500 text-yellow-500" : "border-lime/40 text-lime"}`, children: t.tag })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-foreground font-sans truncate w-full", children: t.who }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground truncate w-full", children: t.preview })
              ] }, t.id);
            })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between bg-ink/75 border border-bone/10 p-4 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-bone/15 pb-2 mb-4 font-mono text-[10px] text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "CHANNEL_LOCK: ",
                activeThread.channel,
                " // ",
                activeThread.who
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${activeThread.status === "HANDOFF" ? "bg-signal led-signal" : "bg-lime led-active"}` }),
                activeThread.status
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: chatContainerRef, className: "flex-1 space-y-3 overflow-y-auto max-h-[250px] mb-4 font-mono text-xs scrollbar-thin scrollbar-thumb-bone/20", children: activeThread.logs.map((log, index) => {
              if (log.who === "SYSTEM") {
                return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-graphite/40 text-muted-foreground border-l-2 border-bone/30 p-2 text-[10px]", children: log.text }, index);
              }
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col ${log.who === "USER" ? "items-start" : "items-end"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-0.5 text-[9px] text-muted-foreground", children: [
                  log.who === "USER" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3 text-bone" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: activeThread.who })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/isotipo.svg", alt: "KAI Logo", className: "w-3.5 h-3.5 border border-ink/20 select-none animate-pulse" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Agent KAI (Auto)" })
                  ] }),
                  log.time && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "• ",
                    log.time
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2.5 max-w-[85%] border ${log.who === "USER" ? "bg-ink border-bone/25 text-foreground" : "bg-lime/10 border-lime/30 text-lime"}`, children: log.text })
              ] }, index);
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-bone/15 pt-4", children: activeThread.tag === "MANUAL" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSendMessage, className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: inputText, onChange: (e) => setInputText(e.target.value), placeholder: "Type response as Operator...", className: "flex-1 bg-ink border border-signal/50 focus:border-signal outline-none px-3 py-2 font-mono text-xs text-foreground focus:ring-1 focus:ring-signal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "bg-signal text-foreground px-4 py-2 font-mono text-xs uppercase hover:bg-signal/80 transition-colors flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5" }),
                " Send"
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4 bg-graphite/20 p-3 border border-bone/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 font-mono text-[11px] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-signal shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "KAI autopilot handles messages automatically." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleTakeover(activeThread.id), className: "bg-signal/10 border border-signal text-signal px-3.5 py-1.5 font-mono text-[10px] uppercase hover:bg-signal hover:text-foreground transition-all duration-200 shrink-0 cursor-pointer", children: "[ Take Over Handoff ]" })
            ] }) })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "contact", className: "relative z-10 border-t border-bone/20 mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: "/// END OF FILE" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid md:grid-cols-3 gap-10 font-mono text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[11px] uppercase tracking-widest mb-3", children: "CONTACT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@kai.app", className: "block uppercase text-foreground hover:text-lime transition-colors", children: "HELLO@KAI.APP" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "block uppercase text-foreground hover:text-lime transition-colors", children: "@KAI.AGENT" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[11px] uppercase tracking-widest mb-3", children: "STATUS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-lime led-active" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ALL SYSTEMS NOMINAL" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground mt-2", children: "~8s avg response · 24/7/365" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[11px] uppercase tracking-widest mb-3", children: "ORIGIN" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "uppercase", children: [
            "BUILT & MAINTAINED BY",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "BRAND OPS · KAI HQ"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex items-center justify-between border-t border-bone/20 pt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " KAI"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime", children: [
          "// CARD 8555_",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink", children: "▮" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
