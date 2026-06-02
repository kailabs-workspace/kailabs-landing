import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { DotMatrix } from "@/components/DotMatrix";
import { SiteNav } from "@/components/SiteNav";
import {
  MessageSquare,
  Instagram,
  Calendar,
  Terminal,
  AlertTriangle,
  ShieldAlert,
} from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "KAI // Agent Console" },
      {
        name: "description",
        content:
          "Live operations console for Agent KAI. Inbound feed, throughput stats, channel toggles.",
      },
      { property: "og:title", content: "KAI // Agent Console" },
      {
        property: "og:description",
        content:
          "Live operations console for Agent KAI. Inbound feed, throughput stats, channel toggles.",
      },
      { property: "og:image", content: "/isotipo.svg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "KAI // Agent Console" },
      {
        name: "twitter:description",
        content:
          "Live operations console for Agent KAI. Inbound feed, throughput stats, channel toggles.",
      },
    ],
  }),
  component: Dashboard,
});

type Event = {
  id: number;
  ch: "WA" | "DM" | "WEB";
  who: string;
  msg: string;
  reply: string;
  t: string;
};

const POOL: Omit<Event, "id" | "t">[] = [
  {
    ch: "WA",
    who: "+34 6•• ••• 21",
    msg: "Hola, ¿queda hueco mañana?",
    reply: "Sí — 10:00 o 17:30. ¿Cuál prefieres?",
  },
  {
    ch: "DM",
    who: "@sam.studio",
    msg: "Can you fit me today?",
    reply: "Yes — 16:30 or 18:00 today.",
  },
  {
    ch: "WA",
    who: "+44 7•• ••• 04",
    msg: "Need to reschedule Friday.",
    reply: "Moved to Mon 11:00. Invite sent.",
  },
  { ch: "DM", who: "@lu.crew", msg: "Pricing?", reply: "Sent. Reply DEPLOY to lock it in." },
  { ch: "WEB", who: "anon_8821", msg: "Are you human?", reply: "No. Agent KAI. ~8s." },
  { ch: "WA", who: "+1 415 •• ••", msg: "Invoice?", reply: "Attached. Pay by Fri." },
];

function Toggle({
  label,
  Icon,
  on,
  onChange,
}: {
  label: string;
  Icon: typeof MessageSquare;
  on: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!on)}
      className={`w-full flex items-center justify-between border ${
        on
          ? "border-lime/30 bg-ink hover:border-lime"
          : "border-signal/30 bg-ink hover:border-signal"
      } p-4 transition-all duration-300 cursor-pointer text-left relative overflow-hidden group`}
    >
      <span className="flex items-center gap-3">
        <Icon
          className={`w-5 h-5 transition-colors duration-300 ${on ? "text-lime" : "text-signal"}`}
          strokeWidth={2.5}
        />
        <span className="font-mono text-xs uppercase tracking-widest">{label}</span>
      </span>

      {/* Flashing LED */}
      <span className="flex items-center gap-3">
        <span
          className={`h-2 w-2 rounded-full ${on ? "bg-lime led-active" : "bg-signal led-signal"}`}
        />
        <span
          className={`relative w-12 h-6 border ${on ? "border-lime bg-lime/10" : "border-signal bg-signal/10"} transition-all duration-300`}
        >
          <span
            className={`absolute top-0.5 ${on ? "right-0.5" : "left-0.5"} h-4 w-4 ${on ? "bg-lime" : "bg-signal"} transition-all duration-300`}
          />
        </span>
      </span>
    </button>
  );
}

function Dashboard() {
  const [events, setEvents] = useState<Event[]>([]);
  const [wa, setWa] = useState(true);
  const [dm, setDm] = useState(true);
  const [cal, setCal] = useState(true);
  const [count, setCount] = useState(47);
  const [cpuLoad, setCpuLoad] = useState(24);
  const feedEndRef = useRef<HTMLDivElement>(null);

  // Stats fluctuate
  useEffect(() => {
    const statInterval = setInterval(() => {
      setCpuLoad(Math.floor(18 + Math.random() * 22));
    }, 3000);
    return () => clearInterval(statInterval);
  }, []);

  useEffect(() => {
    let id = 0;
    const tick = () => {
      const p = POOL[Math.floor(Math.random() * POOL.length)];
      const now = new Date();
      const t = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

      setEvents((e) => [{ ...p, id: ++id, t }, ...e].slice(0, 8));
      if (Math.random() > 0.6) setCount((c) => c + 1);
    };

    tick();
    const i = setInterval(tick, 2500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative min-h-screen bg-ink text-foreground overflow-hidden">
      <DotMatrix />
      <SiteNav />

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-end justify-between border-b border-bone/20 pb-4 mb-10">
          <div>
            <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
              /// AGENT CONSOLE
            </span>
            <h1 className="font-display text-4xl md:text-6xl mt-2 uppercase">Control Deck</h1>
          </div>
          <span className="font-mono text-[11px] text-muted-foreground hidden md:block">
            SESSION_LIVE // <span className="text-lime led-active inline-block">● UPLINK OK</span>
          </span>
        </div>

        {/* STATS DECK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bone/20 border border-bone/20 mb-10">
          {[
            { k: "BOOKINGS / 7D", v: `+${count}`, sub: "99.8% capture rate" },
            { k: "AVG RESPONSE", v: "~8s", sub: "Autonomous routing" },
            { k: "AGENT CORE STATUS", v: "ACTIVE", sub: "Operational 24/7" },
          ].map((s, idx) => (
            <div
              key={s.k}
              className="bg-ink corner-ticks p-6 md:p-8 hover:bg-graphite/20 transition-all duration-300"
            >
              <span className="tick-tl" />
              <span className="tick-br" />
              <div className="font-mono text-[10px] tracking-widest text-muted-foreground flex justify-between">
                <span>{s.k}</span>
                <span className="text-lime">0{idx + 1} // STAT</span>
              </div>
              <div className="font-display text-5xl md:text-7xl text-lime mt-3 uppercase leading-none font-bold">
                {s.v}
              </div>
              <div className="font-mono text-[9px] text-muted-foreground tracking-wider mt-3 uppercase">
                &gt; {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLS & MONITOR */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LIVE CRT CONSOLE MONITOR */}
          <div className="lg:col-span-2 border border-bone/20 p-1 bg-ink/40 shadow-2xl">
            <div className="bg-ink p-6 crt-screen min-h-[480px] flex flex-col justify-between">
              {/* Scanline Sweep */}
              <div className="crt-scanline" />

              <div>
                <div className="flex items-center justify-between border-b border-bone/20 pb-3 mb-4 font-mono text-[11px] uppercase tracking-widest">
                  <h2 className="flex items-center gap-2 font-normal">
                    <Terminal className="w-4 h-4 text-lime led-active" />
                    // LIVE_FEED.log
                  </h2>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-lime led-active rounded-full" />
                    <span className="text-lime">STREAMING</span>
                  </span>
                </div>

                {/* Simulated Logs Stream */}
                <div className="space-y-4 font-mono text-[12px] leading-relaxed max-h-[380px] overflow-y-auto scrollbar-thin scrollbar-thumb-lime/20">
                  {events.map((e) => (
                    <div
                      key={e.id}
                      className="border-l-2 border-lime/40 pl-4 py-1.5 bg-lime/[0.02] hover:bg-lime/[0.04] transition-colors duration-200 animate-fade-in"
                    >
                      <div className="flex items-center gap-3 text-muted-foreground text-[10px] tracking-widest">
                        <span className="text-lime bg-lime/10 px-1.5 py-0.5 border border-lime/20">
                          {e.ch}
                        </span>
                        <span>timestamp: {e.t}</span>
                        <span className="text-foreground">{e.who}</span>
                      </div>
                      <div className="mt-1.5">
                        <span className="text-muted-foreground font-bold">&gt; INBOUND:</span>{" "}
                        <span className="text-foreground">{e.msg}</span>
                      </div>
                      <div className="mt-0.5 text-lime">
                        <span className="font-bold">&gt; RESPONSE:</span>{" "}
                        <span className="text-foreground">{e.reply}</span>
                      </div>
                    </div>
                  ))}
                  {events.length === 0 && (
                    <div className="text-muted-foreground animate-pulse p-4">
                      <span className="blink">▮</span> Awaiting network traffic uplink...
                    </div>
                  )}
                  <div ref={feedEndRef} />
                </div>
              </div>

              {/* Console diagnostics footer */}
              <div className="border-t border-bone/20 pt-4 mt-6 flex justify-between font-mono text-[10px] text-muted-foreground uppercase">
                <span>Core: KAI_v1.0.3</span>
                <span>Buffer: Normal</span>
              </div>
            </div>
          </div>

          {/* SIDE PANEL: CHANNELS & DIAGNOSTICS */}
          <div className="flex flex-col gap-6">
            {/* NETWORK CHANNELS */}
            <div className="bg-ink border border-bone/20 p-6 shadow-xl relative">
              <h2 className="border-b border-bone/20 pb-3 mb-4 font-mono text-[11px] uppercase tracking-widest flex items-center gap-2 font-normal">
                <span className="h-1.5 w-1.5 bg-lime rounded-full led-active" />
                // Uplink Channels
              </h2>
              <div className="space-y-3">
                <Toggle label="WhatsApp Uplink" Icon={MessageSquare} on={wa} onChange={setWa} />
                <Toggle label="Instagram Uplink" Icon={Instagram} on={dm} onChange={setDm} />
                <Toggle label="Calendar Scheduler" Icon={Calendar} on={cal} onChange={setCal} />
              </div>

              {/* WARNING ALERTS IF ANY OFFLINE */}
              {(!wa || !dm || !cal) && (
                <div className="mt-4 border border-signal/40 bg-signal/5 p-3 flex gap-2.5 items-start text-signal animate-fade-in">
                  <ShieldAlert className="w-5 h-5 shrink-0 led-signal mt-0.5" />
                  <div className="font-mono text-[10px] leading-relaxed uppercase">
                    <span className="font-bold">Uplink alert:</span> Inbound traffic will drop to
                    zero on disconnected channels. Reconnect to resume autopilot.
                  </div>
                </div>
              )}
            </div>

            {/* DIAGNOSTICS & SYSTEM METRICS */}
            <div className="bg-ink border border-bone/20 p-6 shadow-xl font-mono text-xs flex-1 flex flex-col justify-between">
              <div>
                <h2 className="border-b border-bone/20 pb-3 mb-4 text-[11px] uppercase tracking-widest font-normal">
                  // Core Diagnostics
                </h2>
                <div className="space-y-4">
                  {/* CPU Load bar */}
                  <div>
                    <div className="flex justify-between text-[10px] text-muted-foreground uppercase mb-1">
                      <span>Telemetry Load</span>
                      <span className="text-lime">{cpuLoad}%</span>
                    </div>
                    <div className="h-4 border border-bone/20 bg-ink/40 p-0.5">
                      <div
                        className="h-full bg-lime transition-all duration-500"
                        style={{ width: `${cpuLoad}%` }}
                      />
                    </div>
                  </div>

                  {/* Channel Status table */}
                  <div className="space-y-1.5 text-[11px] text-muted-foreground pt-2">
                    <div className="flex justify-between">
                      <span>&gt; routing :</span>
                      <span className="text-lime font-bold">AUTOMATIC</span>
                    </div>
                    <div className="flex justify-between">
                      <span>&gt; voice profile :</span>
                      <span className="text-foreground">CALM · DRY</span>
                    </div>
                    <div className="flex justify-between">
                      <span>&gt; secure bypass :</span>
                      <span className="text-foreground">ACTIVE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>&gt; active feeds :</span>
                      <span className="text-lime font-bold">
                        {[wa && "WA", dm && "DM", cal && "CAL"].filter(Boolean).join(" · ") ||
                          "none"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Warning Icon */}
              <div className="border-t border-bone/20 pt-4 mt-6 flex items-center justify-between text-muted-foreground text-[10px] uppercase">
                <span>Security Shield</span>
                <span className="text-lime flex items-center gap-1">
                  <span className="h-1.5 w-1.5 bg-lime rounded-full led-active" />
                  Secured
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
