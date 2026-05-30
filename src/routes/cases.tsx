import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { DotMatrix } from "@/components/DotMatrix";
import { SiteNav } from "@/components/SiteNav";
import { ChevronDown, Terminal, Image as ImageIcon } from "lucide-react";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "KAI // Case Files" },
      { name: "description", content: "Classified case files: real operators, real logs. KAI in the field." },
    ],
  }),
  component: Cases,
});

interface LogEntry {
  who: "USER" | "KAI";
  text: string;
}

interface Case {
  id: string;
  name: string;
  sector: string;
  metric: string;
  metricLabel: string;
  img: string;
  log: readonly LogEntry[];
}

const CASES: readonly Case[] = [
  {
    id: "047",
    name: "LA CUCHILLA",
    sector: "BARBERSHOP · MADRID",
    metric: "+47",
    metricLabel: "BOOKINGS / 7D",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=70",
    log: [
      { who: "USER", text: "tienes hueco hoy pa un corte rapido?" },
      { who: "KAI", text: "Sí — 17:30 o 19:00. ¿Cuál?" },
      { who: "USER", text: "17:30." },
      { who: "KAI", text: "Hecho. Llega 5 min antes. Calle Pez 14." },
    ],
  },
  {
    id: "052",
    name: "ATELIER NORD",
    sector: "TATTOO STUDIO · BERLIN",
    metric: "92%",
    metricLabel: "FIRST-REPLY UNDER 10S",
    img: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=1200&q=70",
    log: [
      { who: "USER", text: "deposit? how does it work" },
      { who: "KAI", text: "50€ to hold the slot. Refundable up to 48h before." },
      { who: "USER", text: "ok send link" },
      { who: "KAI", text: "Sent. Slot held for 15 min." },
    ],
  },
  {
    id: "061",
    name: "CLINICA VERA",
    sector: "PRIVATE CLINIC · BARCELONA",
    metric: "−63%",
    metricLabel: "NO-SHOW RATE",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=70",
    log: [
      { who: "USER", text: "tengo q cambiar la cita d mañana" },
      { who: "KAI", text: "Sin problema. ¿Jueves 10:00 o viernes 12:30?" },
      { who: "USER", text: "viernes." },
      { who: "KAI", text: "Movida. Invite actualizada." },
    ],
  },
] as const;

function Cases() {
  const [open, setOpen] = useState<string | null>("047");

  return (
    <div className="relative min-h-screen bg-ink text-foreground overflow-hidden">
      <DotMatrix />
      <SiteNav />

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        <div className="border-b border-bone/20 pb-4 mb-10">
          <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">/// CLASSIFIED — CASE FILES</span>
          <h1 className="font-display text-4xl md:text-6xl mt-2 uppercase">Operator Logs</h1>
          <p className="font-mono mt-4 max-w-2xl text-muted-foreground text-sm">
            &gt; Authentic records. Real businesses. Edits only for privacy.
          </p>
        </div>

        <div className="border border-bone/20 bg-ink/50 backdrop-blur-sm shadow-xl">
          {CASES.map((c) => {
            const isOpen = open === c.id;
            return (
              <div key={c.id} className="border-b border-bone/20 last:border-b-0">
                <button
                  onClick={() => setOpen(isOpen ? null : c.id)}
                  className="w-full grid grid-cols-[80px_1fr_auto] items-center gap-6 px-6 py-5 text-left hover:bg-lime/5 transition-all duration-300 cursor-pointer"
                >
                  <span className="font-mono text-xs text-lime tracking-widest">/// {c.id}</span>
                  <div>
                    <div className="font-display text-xl md:text-2xl uppercase transition-colors duration-200 hover:text-lime">{c.name}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{c.sector}</div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-lime" : ""}`} />
                </button>

                {isOpen && (
                  <div className="grid md:grid-cols-2 gap-px bg-bone/20 border-t border-bone/20 animate-fade-in">
                    {/* Visual Photo Scanner Frame */}
                    <div className="bg-ink relative group overflow-hidden radar-scanner min-h-[300px] max-h-[480px]">
                      <img
                        src={c.img}
                        alt={`${c.name} — operator photo`}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale contrast-115 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                      {/* Telemetry frame details */}
                      <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widest bg-ink/80 px-2 py-1 text-lime border border-lime/40 backdrop-blur-sm">
                        ◼ REC // {c.id}
                      </div>
                      <div className="absolute bottom-3 right-3 font-mono text-[9px] text-white/50 bg-ink/75 px-1.5 py-0.5 border border-white/10 flex items-center gap-1.5">
                        <ImageIcon className="w-3 h-3 text-lime" /> SCAN_OK
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 hazard-tape opacity-80" />
                    </div>

                    {/* Case Metrics & Typewriter logs */}
                    <div className="bg-ink p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
                      <div>
                        <div className="border-b border-bone/20 pb-4 mb-4">
                          <div className="font-mono text-[10px] tracking-widest text-muted-foreground">KEY PERFORMANCE METRIC</div>
                          <div className="font-display text-6xl md:text-7xl text-lime mt-2 uppercase leading-none font-bold">
                            {c.metric}
                          </div>
                          <div className="font-mono text-[11px] tracking-widest text-muted-foreground mt-2 uppercase">
                            &gt; {c.metricLabel}
                          </div>
                        </div>

                        <div className="font-mono text-[10px] tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                          <Terminal className="w-3.5 h-3.5 text-lime" />
                          <span>// RAW CONSOLE TRANSCRIPT</span>
                        </div>

                        {/* Interactive typing log simulation */}
                        <CaseLogPrinter logs={c.log} />
                      </div>

                      <div className="mt-6 pt-4 font-mono text-[9px] tracking-widest text-muted-foreground border-t border-bone/20 flex justify-between">
                        <span>SYS.FILE // SECURE_LOG</span>
                        <span>END_OF_LOG // FILE_{c.id}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

// Sub-component to print logs sequentially with typewriter delays
function CaseLogPrinter({ logs }: { logs: readonly LogEntry[] }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
  }, [logs]);

  useEffect(() => {
    if (visibleCount >= logs.length) return;
    const delay = setTimeout(() => {
      setVisibleCount(c => c + 1);
    }, 800 + Math.random() * 400); // delay before next message appears
    return () => clearTimeout(delay);
  }, [visibleCount, logs]);

  return (
    <div className="font-mono text-[12px] leading-relaxed space-y-2.5 min-h-[120px]">
      {logs.slice(0, visibleCount).map((m, i) => (
        <div key={i} className="animate-fade-in pl-1 border-l border-bone/10">
          <span className={m.who === "KAI" ? "text-lime font-semibold" : "text-muted-foreground"}>
            {m.who === "KAI" ? "> KAI  :" : "> USER :"}
          </span>{" "}
          <span className="text-foreground">{m.text}</span>
        </div>
      ))}
      {visibleCount < logs.length && (
        <div className="text-lime flex items-center gap-1.5">
          <span className="animate-pulse">▮</span>
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
            [ DECRYPTING HILO_0{visibleCount + 1}... ]
          </span>
        </div>
      )}
    </div>
  );
}
