import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { DotMatrix } from "@/components/DotMatrix";
import { AgentChat } from "@/components/AgentChat";
import { Manifesto } from "@/components/Manifesto";
import { SiteNav } from "@/components/SiteNav";
import {
  MessageSquare,
  Calendar,
  Zap,
  Inbox,
  Send,
  Terminal,
  User,
  AlertTriangle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KAI — Your Inbox on Autopilot" },
      {
        name: "description",
        content:
          "Agent KAI: a 24/7 co-pilot for your DMs, WhatsApp, calendar and web. Calm, dry, never robotic. ~8s response.",
      },
      { property: "og:title", content: "KAI — Your Inbox on Autopilot" },
      {
        property: "og:description",
        content:
          "Agent KAI: a 24/7 co-pilot for your DMs, WhatsApp, calendar and web. Calm, dry, never robotic. ~8s response.",
      },
      { property: "og:image", content: "/isotipo.svg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "KAI — Your Inbox on Autopilot" },
      {
        name: "twitter:description",
        content:
          "Agent KAI: a 24/7 co-pilot for your DMs, WhatsApp, calendar and web. Calm, dry, never robotic. ~8s response.",
      },
    ],
  }),
  component: Index,
});

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
      {children}
    </span>
  );
}

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-12 flex items-end justify-between border-b border-bone/20 pb-4">
      <div>
        <Tag>/// SECTION {index}</Tag>
        <h2 className="font-display text-3xl md:text-5xl mt-2 uppercase">{title}</h2>
      </div>
      <span className="font-mono text-[11px] text-muted-foreground hidden md:block">
        FILE_047 // {index}/04
      </span>
    </div>
  );
}

interface ChatLog {
  who: "USER" | "KAI" | "SYSTEM";
  text: string;
  time?: string;
}

interface Thread {
  id: string;
  channel: string;
  who: string;
  preview: string;
  tag: "AUTO" | "TRIAGE" | "MANUAL";
  status: "CLOSED" | "OPEN" | "HANDOFF";
  logs: ChatLog[];
}

const INITIAL_THREADS: Thread[] = [
  {
    id: "ig",
    channel: "IG_DM",
    who: "@sam.studio",
    preview: "Yes — 16:30 or 18:00 today.",
    tag: "AUTO",
    status: "CLOSED",
    logs: [
      { who: "USER", text: "hey KAI, can you fit Sam in today?", time: "11:20:05" },
      { who: "SYSTEM", text: "Syncing availability for 2026-05-30..." },
      { who: "KAI", text: "Hey Sam, yes — 16:30 or 18:00 today.", time: "11:20:13" },
      { who: "USER", text: "book the 18:00.", time: "11:21:40" },
      { who: "SYSTEM", text: "Writing event to Google Calendar..." },
      {
        who: "KAI",
        text: "Booked ✓ I sent you a calendar invite and a reminder for tomorrow.",
        time: "11:21:48",
      },
    ],
  },
  {
    id: "wa",
    channel: "WA",
    who: "+34 621 ••• •••",
    preview: "Invoice attached. Pay by Fri.",
    tag: "AUTO",
    status: "CLOSED",
    logs: [
      { who: "USER", text: "hola, ya he hecho la transferencia del deposito", time: "10:14:22" },
      { who: "SYSTEM", text: "Validating Stripe webhook..." },
      {
        who: "KAI",
        text: "Recibido. Factura adjuntada en el hilo. Por favor págala antes del viernes.",
        time: "10:14:30",
      },
    ],
  },
  {
    id: "web",
    channel: "WEB",
    who: "anon_8821",
    preview: "Forwarded to Brand Ops.",
    tag: "TRIAGE",
    status: "OPEN",
    logs: [
      {
        who: "USER",
        text: "Hello, I want to talk to a real person regarding licensing",
        time: "09:05:10",
      },
      { who: "SYSTEM", text: "Triage triggers: [real person, licensing]" },
      {
        who: "KAI",
        text: "I've flagged this conversation for a human team member. Brand Ops will reply here shortly.",
        time: "09:05:18",
      },
    ],
  },
];

function Index() {
  // Simulator State
  const [threads, setThreads] = useState<Thread[]>(INITIAL_THREADS);
  const [activeId, setActiveId] = useState<string>("ig");
  const [inputText, setInputText] = useState("");
  const activeThread = threads.find((t) => t.id === activeId) || threads[0];
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal logs inside the container only
  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [activeThread.logs]);

  const handleTakeover = (threadId: string) => {
    setThreads((prev) =>
      prev.map((t) => {
        if (t.id === threadId) {
          return {
            ...t,
            tag: "MANUAL",
            status: "HANDOFF",
            logs: [
              ...t.logs,
              {
                who: "SYSTEM",
                text: "⚠️ UPLINK INTERRUPTED: Manual handoff mode engaged. Operator control authorized.",
              },
            ],
          };
        }
        return t;
      }),
    );
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

    setThreads((prev) =>
      prev.map((t) => {
        if (t.id === activeId) {
          return {
            ...t,
            logs: [...t.logs, { who: "USER", text: inputText, time: timeStr }],
          };
        }
        return t;
      }),
    );
    setInputText("");

    // Simulate a system response shortly after in manual mode
    setTimeout(() => {
      setThreads((prev) =>
        prev.map((t) => {
          if (t.id === activeId) {
            return {
              ...t,
              logs: [
                ...t.logs,
                { who: "SYSTEM", text: "Message dispatched via human-uplink bypass." },
              ],
            };
          }
          return t;
        }),
      );
    }, 800);
  };

  return (
    <div className="relative min-h-screen bg-ink text-foreground overflow-hidden">
      <DotMatrix />

      <SiteNav />

      <main>
        {/* HERO */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-32 md:pt-24 md:pb-40">
          <Tag>{"> STATUS: ACTIVE  //  FILE: 047"}</Tag>
          <div className="mt-6 corner-ticks p-6 md:p-12 border border-bone/10 bg-ink/40 backdrop-blur-md transition-all duration-500 hover:border-lime/20">
            <span className="tick-tl" />
            <span className="tick-br" />

            <p className="font-mono text-xs md:text-sm text-lime mb-6 uppercase tracking-widest flex items-center gap-2">
              <span className="h-2 w-2 bg-lime led-active rounded-full" />
              /// Mission Brief 001
            </p>

            <h1 className="font-display text-[12vw] md:text-[8.5rem] leading-[0.82] uppercase tracking-tighter">
              Your Inbox
              <br />
              On{" "}
              <span className="text-lime glitch-hover inline-block cursor-default">Autopilot</span>.
            </h1>

            <p className="font-mono mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              &gt; Your inbox just got a co-pilot. Agent KAI handles DMs, WhatsApp, calendar and web
              — calm, dry, never robotic. Response time:{" "}
              <span className="text-foreground border-b border-lime/40 pb-0.5">~8s</span>.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="terminal-hover inline-flex items-center gap-3 bg-lime px-7 py-4 font-mono text-sm font-bold uppercase tracking-widest text-ink hover:bg-lime/90 transition-all duration-300 tactile-shadow"
              >
                ▶ Drop a D.M.
              </a>
              <a
                href="#agent"
                className="inline-flex items-center gap-3 border border-bone/30 px-7 py-4 font-mono text-sm uppercase tracking-widest text-foreground hover:border-lime hover:text-lime transition-all duration-300"
              >
                [ Meet the Agent ]
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-bone/20 border border-bone/20 overflow-hidden">
              {[
                ["CHANNELS", "DM·WA·WEB"],
                ["SHIFT", "24/7/365"],
                ["RESPONSE", "~8 SEC"],
                ["DISPOSITION", "CALM·DRY"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="bg-ink/80 p-4 transition-colors duration-300 hover:bg-graphite/40"
                >
                  <div className="font-mono text-[10px] text-muted-foreground tracking-widest">
                    {k}
                  </div>
                  <div className="font-mono text-sm text-lime mt-1 font-semibold">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:py-36 text-center">
          <Tag>/// 01 — The Principle</Tag>
          <div className="mt-10 max-w-4xl mx-auto">
            <Manifesto />
          </div>
        </section>

        {/* MEET THE AGENT */}
        <section id="agent" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <SectionHeader index="02" title="Meet the Agent" />

          <div className="grid md:grid-cols-2 border border-bone/20 bg-ink/65 backdrop-blur-sm shadow-xl">
            {/* Isotype Container */}
            <div className="relative border-b md:border-b-0 md:border-r border-bone/20 p-12 flex flex-col items-center justify-center min-h-[440px] crt-screen">
              {/* CRT overlay scanline */}
              <div className="crt-scanline" />

              <div className="relative w-60 h-60 bg-lime border-[3px] border-ink shadow-[8px_8px_0_0_rgba(212,245,66,0.25)] transition-all duration-300 hover:shadow-[12px_12px_0_0_rgba(212,245,66,0.4)] overflow-hidden group flex items-center justify-center p-6">
                <img
                  src="/isotipo-transp.svg"
                  alt="KAI Agent Isotipo"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 select-none"
                />
              </div>

              <div className="mt-6 font-mono text-[10px] text-lime/70 tracking-widest text-center uppercase">
                // TELEMETRY UPLINK STATUS: OK
              </div>
            </div>

            {/* Spec sheet */}
            <div className="p-6 md:p-10 bg-ink/90 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs space-y-3 mb-8">
                  {[
                    ["CODENAME", "Agent KAI"],
                    ["CHANNELS", "DM • WA • Web • Calendar"],
                    ["SHIFT", "24/7/365 (NEVER OFF)"],
                    ["RESPONSE", "~8 seconds"],
                    ["DISPOSITION", "Calm, dry, never robotic"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="grid grid-cols-[120px_1fr] gap-4 border-b border-bone/10 pb-2"
                    >
                      <span className="text-muted-foreground uppercase">{k}</span>
                      <span className="text-lime font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <AgentChat />
            </div>
          </div>
        </section>

        {/* ECOSYSTEM / UNIFIED INBOX */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <SectionHeader index="03" title="Unified Inbox" />

          <div className="grid md:grid-cols-3 gap-px bg-bone/20 border border-bone/20 mb-12">
            {[
              {
                Icon: MessageSquare,
                label: "DM / WhatsApp",
                status: "LIVE",
                desc: "Threaded conversations across IG, WA and web chat, handled inline.",
              },
              {
                Icon: Calendar,
                label: "Calendar Ops",
                status: "LIVE",
                desc: "Auto-proposes slots, confirms bookings, reschedules without friction.",
              },
              {
                Icon: Zap,
                label: "Automations",
                status: "PROCESSING",
                desc: "Triggers, follow-ups and tagging fire in ~8s, always on-brand.",
              },
            ].map(({ Icon, label, status, desc }) => (
              <article
                key={label}
                className="bg-ink p-6 hover:bg-graphite/35 transition-all duration-300"
              >
                <div className="relative h-2 mb-6 hazard-tape opacity-80" />
                <div className="w-14 h-14 border-[3px] border-foreground flex items-center justify-center mb-5 bg-ink transition-transform duration-300 hover:rotate-6">
                  <Icon strokeWidth={2.5} className="w-7 h-7 text-lime" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime led-active" />
                  <span className="font-mono text-[10px] tracking-widest text-lime">{status}</span>
                </div>
                <h3 className="font-display text-2xl uppercase mb-3">{label}</h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>

          {/* FULLY INTERACTIVE UNIFIED INBOX APP SIMULATOR */}
          <div className="mt-10 border border-bone/20 p-1 bg-ink/50 shadow-2xl">
            <div className="border border-bone/10 bg-ink/90 p-4 md:p-6 backdrop-blur-sm crt-screen">
              {/* CRT overlay scanline */}
              <div className="crt-scanline" />

              <div className="flex items-center justify-between border-b border-bone/20 pb-3 mb-6 font-mono text-[11px] uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Inbox className="w-4 h-4 text-lime led-active" />
                  Unified_Inbox.app
                </span>
                <span className="text-muted-foreground">
                  {threads.filter((t) => t.status === "OPEN").length} OPEN ·{" "}
                  {threads.filter((t) => t.status === "HANDOFF").length} MANNED ·{" "}
                  <span className="text-lime font-bold">ACTIVE_BOT</span>
                </span>
              </div>

              {/* Split Screen Dashboard */}
              <div className="grid md:grid-cols-[260px_1fr] gap-6 min-h-[380px]">
                {/* Left Column: Conversation List */}
                <div className="border-r border-bone/10 pr-0 md:pr-4 space-y-2">
                  <div className="font-mono text-[9px] text-muted-foreground tracking-widest uppercase mb-2">
                    // Inbox Stream
                  </div>
                  {threads.map((t) => {
                    const isActive = t.id === activeId;
                    const isHandoff = t.status === "HANDOFF";
                    return (
                      <button
                        key={t.id}
                        onClick={() => setActiveId(t.id)}
                        className={`w-full text-left p-3 border font-mono text-xs transition-all duration-200 cursor-pointer flex flex-col gap-1.5 ${
                          isActive
                            ? "border-lime bg-lime/10 text-foreground"
                            : "border-bone/15 bg-ink/40 text-muted-foreground hover:border-lime/40 hover:bg-ink/70"
                        }`}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span
                            className={`font-semibold ${isActive ? "text-lime" : "text-foreground"}`}
                          >
                            {t.channel}
                          </span>
                          <span
                            className={`text-[9px] px-1.5 py-0.5 border ${
                              isHandoff
                                ? "border-signal text-signal led-signal bg-signal/5"
                                : t.tag === "TRIAGE"
                                  ? "border-yellow-500 text-yellow-500"
                                  : "border-lime/40 text-lime"
                            }`}
                          >
                            {t.tag}
                          </span>
                        </div>
                        <div className="text-[11px] text-foreground font-sans truncate w-full">
                          {t.who}
                        </div>
                        <div className="text-[10px] text-muted-foreground truncate w-full">
                          {t.preview}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Right Column: Active Thread Simulator */}
                <div className="flex flex-col justify-between bg-ink/75 border border-bone/10 p-4 relative">
                  {/* Console header */}
                  <div className="flex items-center justify-between border-b border-bone/15 pb-2 mb-4 font-mono text-[10px] text-muted-foreground">
                    <span>
                      CHANNEL_LOCK: {activeThread.channel} // {activeThread.who}
                    </span>
                    <span className="flex items-center gap-1">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${activeThread.status === "HANDOFF" ? "bg-signal led-signal" : "bg-lime led-active"}`}
                      />
                      {activeThread.status}
                    </span>
                  </div>

                  {/* Messages stream */}
                  <div
                    ref={chatContainerRef}
                    className="flex-1 space-y-3 overflow-y-auto max-h-[250px] mb-4 font-mono text-xs scrollbar-thin scrollbar-thumb-bone/20"
                  >
                    {activeThread.logs.map((log, index) => {
                      if (log.who === "SYSTEM") {
                        return (
                          <div
                            key={index}
                            className="bg-graphite/40 text-muted-foreground border-l-2 border-bone/30 p-2 text-[10px]"
                          >
                            {log.text}
                          </div>
                        );
                      }
                      return (
                        <div
                          key={index}
                          className={`flex flex-col ${log.who === "USER" ? "items-start" : "items-end"}`}
                        >
                          <div className="flex items-center gap-2 mb-0.5 text-[9px] text-muted-foreground">
                            {log.who === "USER" ? (
                              <>
                                <User className="w-3 h-3 text-bone" />
                                <span>{activeThread.who}</span>
                              </>
                            ) : (
                              <>
                                <img
                                  src="/isotipo.svg"
                                  alt="KAI Logo"
                                  className="w-3.5 h-3.5 border border-ink/20 select-none animate-pulse"
                                />
                                <span>Agent KAI (Auto)</span>
                              </>
                            )}
                            {log.time && <span>• {log.time}</span>}
                          </div>
                          <div
                            className={`p-2.5 max-w-[85%] border ${
                              log.who === "USER"
                                ? "bg-ink border-bone/25 text-foreground"
                                : "bg-lime/10 border-lime/30 text-lime"
                            }`}
                          >
                            {log.text}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer Controls (Input / Handoff) */}
                  <div className="border-t border-bone/15 pt-4">
                    {activeThread.tag === "MANUAL" ? (
                      <form onSubmit={handleSendMessage} className="flex gap-2">
                        <input
                          type="text"
                          value={inputText}
                          onChange={(e) => setInputText(e.target.value)}
                          placeholder="Type response as Operator..."
                          className="flex-1 bg-ink border border-signal/50 focus:border-signal outline-none px-3 py-2 font-mono text-xs text-foreground focus:ring-1 focus:ring-signal"
                        />
                        <button
                          type="submit"
                          className="bg-signal text-foreground px-4 py-2 font-mono text-xs uppercase hover:bg-signal/80 transition-colors flex items-center gap-2"
                        >
                          <Send className="w-3.5 h-3.5" /> Send
                        </button>
                      </form>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-graphite/20 p-3 border border-bone/10">
                        <div className="flex items-center gap-2.5 font-mono text-[11px] text-muted-foreground">
                          <AlertTriangle className="w-4 h-4 text-signal shrink-0" />
                          <span>KAI autopilot handles messages automatically.</span>
                        </div>
                        <button
                          onClick={() => handleTakeover(activeThread.id)}
                          className="bg-signal/10 border border-signal text-signal px-3.5 py-1.5 font-mono text-[10px] uppercase hover:bg-signal hover:text-foreground transition-all duration-200 shrink-0 cursor-pointer"
                        >
                          [ Take Over Handoff ]
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="relative z-10 border-t border-bone/20 mt-24">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Tag>/// END OF FILE</Tag>
          <div className="mt-6 grid md:grid-cols-3 gap-10 font-mono text-sm">
            <div>
              <div className="text-muted-foreground text-[11px] uppercase tracking-widest mb-3">
                CONTACT
              </div>
              <a
                href="mailto:hello@kai.app"
                className="block uppercase text-foreground hover:text-lime transition-colors"
              >
                HELLO@KAI.APP
              </a>
              <a
                href="#"
                className="block uppercase text-foreground hover:text-lime transition-colors"
              >
                @KAI.AGENT
              </a>
            </div>
            <div>
              <div className="text-muted-foreground text-[11px] uppercase tracking-widest mb-3">
                STATUS
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-lime led-active" />
                <span>ALL SYSTEMS NOMINAL</span>
              </div>
              <div className="text-muted-foreground mt-2">~8s avg response · 24/7/365</div>
            </div>
            <div>
              <div className="text-muted-foreground text-[11px] uppercase tracking-widest mb-3">
                ORIGIN
              </div>
              <div className="uppercase">
                BUILT & MAINTAINED BY
                <br />
                BRAND OPS · KAI HQ
              </div>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-bone/20 pt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span>© {new Date().getFullYear()} KAI</span>
            <span className="text-lime">
              // CARD 8555_<span className="blink">▮</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
