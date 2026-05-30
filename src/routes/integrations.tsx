import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DotMatrix } from "@/components/DotMatrix";
import { SiteNav } from "@/components/SiteNav";
import { 
  Calendar, 
  MessageSquare, 
  Slack, 
  Mail, 
  Globe, 
  CreditCard, 
  Phone, 
  FileText 
} from "lucide-react";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "KAI // Integrations & Infrastructure" },
      { name: "description", content: "How KAI plugs into your existing stack. We don't replace your tools — we give them an agent." },
    ],
  }),
  component: Integrations,
});

const TOOLS = [
  { Icon: Calendar, name: "Google Calendar", meta: ["routing active", "latency: minimal"] },
  { Icon: MessageSquare, name: "WhatsApp", meta: ["channel: open", "rate: unlimited"] },
  { Icon: Slack, name: "Slack Link", meta: ["webhook: ok", "alerts: live"] },
  { Icon: Mail, name: "Gmail Uplink", meta: ["oauth: granted", "scope: r/w"] },
  { Icon: Globe, name: "Instagram DMs", meta: ["graph: v19", "dm: enabled"] },
  { Icon: CreditCard, name: "Stripe Engine", meta: ["mode: live", "fees: handled"] },
  { Icon: Phone, name: "Twilio Gateway", meta: ["sms: ok", "voice: ready"] },
  { Icon: FileText, name: "Notion Storage", meta: ["db: synced", "writes: ok"] },
] as const;

function Integrations() {
  const [hover, setHover] = useState<number | null>(null);

  // Connection heights corresponding to midpoints of the 4 items
  const heights = [12.5, 37.5, 62.5, 87.5];

  return (
    <div className="relative min-h-screen bg-ink text-foreground overflow-hidden">
      <DotMatrix />
      <SiteNav />

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <div className="border-b border-bone/20 pb-4 mb-10">
          <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">/// HOW IT WORKS</span>
          <h1 className="font-display text-4xl md:text-6xl mt-2 uppercase">Infrastructure</h1>
          <p className="font-mono mt-4 max-w-2xl text-muted-foreground">
            &gt; We don't replace your tools — we give them <span className="text-lime">an agent</span>.
          </p>
        </div>

        {/* Hazard tape corners + grid */}
        <div className="relative border border-bone/20 p-1 bg-ink/40 shadow-2xl backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-32 h-1.5 hazard-tape" />
          <div className="absolute top-0 right-0 w-32 h-1.5 hazard-tape" />

          <div className="relative grid md:grid-cols-3 gap-px bg-bone/20">
            {/* TOOLS LEFT (Indices 0, 1, 2, 3) */}
            <div className="md:col-span-1 bg-ink p-6 flex flex-col justify-between gap-6 min-h-[500px]">
              {TOOLS.slice(0, 4).map((t, i) => (
                <ToolBlock 
                  key={t.name} 
                  idx={i} 
                  t={t} 
                  side="left" 
                  hover={hover} 
                  setHover={setHover} 
                />
              ))}
            </div>

            {/* CORE / SVG CONNECTIONS */}
            <div className="md:col-span-1 bg-ink p-10 flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden">
              
              {/* Dynamic Connection lines SVG */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
              >
                {/* Background Dim Paths */}
                {heights.map((y, idx) => (
                  <g key={`bg-${idx}`}>
                    {/* Left connectors */}
                    <path 
                      d={`M 0,${y} C 15,${y} 15,50 32,50`} 
                      fill="none" 
                      stroke="rgba(232, 228, 214, 0.15)" 
                      strokeWidth="1.5" 
                    />
                    {/* Right connectors */}
                    <path 
                      d={`M 100,${y} C 85,${y} 85,50 68,50`} 
                      fill="none" 
                      stroke="rgba(232, 228, 214, 0.15)" 
                      strokeWidth="1.5" 
                    />
                  </g>
                ))}

                {/* Glowing Hover Paths */}
                {heights.map((y, idx) => {
                  const leftIndex = idx;
                  const rightIndex = idx + 4;
                  const isLeftActive = hover === leftIndex;
                  const isRightActive = hover === rightIndex;

                  return (
                    <g key={`fg-${idx}`}>
                      {/* Left Glowing Line */}
                      <path 
                        d={`M 0,${y} C 15,${y} 15,50 32,50`} 
                        fill="none" 
                        stroke={isLeftActive ? "var(--lime)" : "transparent"} 
                        strokeWidth="2" 
                        className={isLeftActive ? "connector-flow" : ""}
                        style={{
                          filter: isLeftActive ? "drop-shadow(0 0 4px var(--lime))" : "none",
                          transition: "stroke 0.3s"
                        }}
                      />
                      {/* Right Glowing Line */}
                      <path 
                        d={`M 100,${y} C 85,${y} 85,50 68,50`} 
                        fill="none" 
                        stroke={isRightActive ? "var(--lime)" : "transparent"} 
                        strokeWidth="2" 
                        className={isRightActive ? "connector-flow" : ""}
                        style={{
                          filter: isRightActive ? "drop-shadow(0 0 4px var(--lime))" : "none",
                          transition: "stroke 0.3s"
                        }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Central Core Console */}
              <div className="relative w-44 h-44 bg-lime border-[3px] border-ink shadow-[8px_8px_0_0_rgba(212,245,66,0.25)] transition-all duration-300 hover:shadow-[12px_12px_0_0_rgba(212,245,66,0.4)] z-10 crt-screen">
                <div className="crt-scanline" />
                <div className="w-full h-full p-4 flex items-center justify-center group">
                  <img 
                    src="/isotipo-transp.svg" 
                    alt="KAI Core Isotype" 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 select-none" 
                  />
                </div>
              </div>

              <div className="mt-6 font-mono text-[10px] tracking-widest text-muted-foreground text-center z-10 relative">
                ◼ AGENT_CORE<br />
                <span className="text-lime led-active inline-block mt-1">◉ ROUTING ALL CHANNELS</span>
              </div>
            </div>

            {/* TOOLS RIGHT (Indices 4, 5, 6, 7) */}
            <div className="md:col-span-1 bg-ink p-6 flex flex-col justify-between gap-6 min-h-[500px]">
              {TOOLS.slice(4).map((t, i) => (
                <ToolBlock 
                  key={t.name} 
                  idx={i + 4} 
                  t={t} 
                  side="right" 
                  hover={hover} 
                  setHover={setHover} 
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-px bg-bone/20 border border-bone/20 font-mono text-xs">
          {[
            ["INGEST", "Webhooks · OAuth · Polling"],
            ["REASON", "Context-aware. Brand-tuned."],
            ["ACT", "Reply · Book · Tag · Escalate"],
          ].map(([k, v]) => (
            <div key={k} className="bg-ink p-5 hover:bg-graphite/25 transition-colors duration-300">
              <div className="text-lime tracking-widest font-bold">/// {k}</div>
              <div className="mt-2 text-muted-foreground">&gt; {v}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function ToolBlock({
  t, idx, side, hover, setHover,
}: {
  t: { Icon: typeof Calendar; name: string; meta: readonly string[] };
  idx: number;
  side: "left" | "right";
  hover: number | null;
  setHover: (n: number | null) => void;
}) {
  const active = hover === idx;
  const { Icon } = t;
  return (
    <div
      onMouseEnter={() => setHover(idx)}
      onMouseLeave={() => setHover(null)}
      className={`group border ${
        active ? "border-lime bg-lime/[0.03]" : "border-bone/20 bg-ink"
      } p-4 transition-all duration-300 cursor-pointer relative tactile-shadow`}
    >
      <div className="flex items-center gap-3">
        <Icon className={`w-5 h-5 transition-colors duration-300 ${active ? "text-lime" : "text-foreground"}`} strokeWidth={2.5} />
        <span className="font-sans text-sm font-semibold">{t.name}</span>
        <span className={`ml-auto h-2 w-2 rounded-full ${active ? "bg-lime led-active" : "bg-bone/20"}`} />
      </div>
      <div className={`mt-2 font-mono text-[10px] tracking-widest ${active ? "text-lime" : "text-muted-foreground"}`}>
        {t.meta.map((m) => <div key={m}>&gt; {m}</div>)}
      </div>
    </div>
  );
}
