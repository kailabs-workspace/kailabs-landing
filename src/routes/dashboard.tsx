import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { DotMatrix } from "@/components/DotMatrix";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { useI18n } from "@/i18n";
import { Terminal, CheckCircle2, ShieldAlert, Workflow, Code2 } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "KAI LABS — Engineering Console" },
      {
        name: "description",
        content:
          "Live engineering telemetry: autonomous pipelines, agentic code generation events, and background worker queues.",
      },
      {
        property: "og:title",
        content: "KAI LABS — Engineering Console",
      },
      {
        property: "og:description",
        content:
          "Live engineering telemetry: autonomous pipelines, agentic code generation events, and background worker queues.",
      },
      { property: "og:image", content: "/isotipo.svg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "KAI LABS — Engineering Console",
      },
      {
        name: "twitter:description",
        content:
          "Live engineering telemetry: autonomous pipelines, agentic code generation events, and background worker queues.",
      },
    ],
  }),
  component: Dashboard,
});

type Event = {
  id: number;
  ch: "PIPELINE" | "DEPLOY" | "AGENT" | "DATABASE";
  who: string;
  msg: string;
  reply: string;
  t: string;
};

function PipelineToggle({
  label,
  Icon,
  on,
  onChange,
}: {
  label: string;
  Icon: typeof Code2;
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
      } p-3.5 transition-all duration-300 cursor-pointer text-left relative overflow-hidden group`}
    >
      <span className="flex items-center gap-2.5">
        <Icon
          className={`w-4 h-4 transition-colors duration-300 ${on ? "text-lime" : "text-signal"}`}
          strokeWidth={2}
        />
        <span className="font-mono text-xs uppercase tracking-wider">{label}</span>
      </span>

      {/* Flashing LED */}
      <span className="flex items-center gap-2.5">
        <span
          className={`h-1.5 w-1.5 rounded-full ${on ? "bg-lime led-active" : "bg-signal led-signal"}`}
        />
        <span
          className={`relative w-10 h-5 border ${on ? "border-lime bg-lime/10" : "border-signal bg-signal/10"} transition-all duration-300`}
        >
          <span
            className={`absolute top-0.5 ${on ? "right-0.5" : "left-0.5"} h-3.5 w-3.5 ${on ? "bg-lime" : "bg-signal"} transition-all duration-300`}
          />
        </span>
      </span>
    </button>
  );
}

function Dashboard() {
  const { t } = useI18n();
  const [events, setEvents] = useState<Event[]>([]);
  const [codeGen, setCodeGen] = useState(true);
  const [agenticQa, setAgenticQa] = useState(true);
  const [orchestrator, setOrchestrator] = useState(true);
  const [cpuLoad, setCpuLoad] = useState(38);
  const feedEndRef = useRef<HTMLDivElement>(null);

  // CPU Load dynamic variation
  useEffect(() => {
    const statInterval = setInterval(() => {
      setCpuLoad(Math.floor(32 + Math.random() * 24));
    }, 3000);
    return () => clearInterval(statInterval);
  }, []);

  const eventPool = t.dashboard.eventPool;

  useEffect(() => {
    let id = 0;
    const tick = () => {
      const p = eventPool[Math.floor(Math.random() * eventPool.length)];
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

      setEvents((e) => [{ ...p, id: ++id, t: timeStr }, ...e].slice(0, 8));
    };

    tick();
    const interval = setInterval(tick, 2200);
    return () => clearInterval(interval);
  }, [eventPool]);

  return (
    <div className="relative min-h-screen bg-ink text-foreground overflow-hidden selection:bg-lime selection:text-ink">
      <DotMatrix />
      <SiteNav />

      <main className="relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12">
        {/* HEADER */}
        <div className="flex flex-wrap items-end justify-between border-b border-bone/20 pb-4 mb-6 gap-3">
          <div>
            <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-muted-foreground uppercase">
              {t.dashboard.tag}
            </span>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl uppercase text-foreground mt-1">
              {t.dashboard.title}
            </h1>
            <p className="font-mono text-[11px] md:text-xs text-muted-foreground mt-1 max-w-xl">
              {t.dashboard.subtitle}
            </p>
          </div>
          <span className="font-mono text-[11px] text-lime flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 bg-lime led-active rounded-full" />
            {t.dashboard.uplinkOk}
          </span>
        </div>

        {/* STATS DECK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bone/20 border border-bone/20 mb-6">
          {[
            {
              k: t.dashboard.stats.velocity.label,
              v: t.dashboard.stats.velocity.val,
              sub: t.dashboard.stats.velocity.sub,
            },
            {
              k: t.dashboard.stats.automation.label,
              v: t.dashboard.stats.automation.val,
              sub: t.dashboard.stats.automation.sub,
            },
            {
              k: t.dashboard.stats.status.label,
              v: t.dashboard.stats.status.val,
              sub: t.dashboard.stats.status.sub,
            },
          ].map((s, idx) => (
            <div
              key={s.k}
              className="bg-ink corner-ticks p-3.5 sm:p-4.5 hover:bg-graphite/20 transition-all duration-300"
            >
              <span className="tick-tl" />
              <span className="tick-br" />
              <div className="font-mono text-[9px] tracking-widest text-muted-foreground flex justify-between">
                <span>{s.k}</span>
                <span className="text-lime">0{idx + 1}</span>
              </div>
              <div className="font-display text-2xl sm:text-3xl md:text-4xl text-lime mt-1 uppercase leading-none font-bold">
                {s.v}
              </div>
              <div className="font-mono text-[9px] text-bone/60 tracking-wider mt-1 uppercase">
                &gt; {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLS & LIVE MONITOR */}
        <div className="grid lg:grid-cols-3 gap-4.5">
          {/* LIVE CRT CONSOLE MONITOR */}
          <div className="lg:col-span-2 border border-bone/20 p-1 bg-ink/40 shadow-2xl">
            <div className="bg-ink p-3.5 sm:p-4.5 crt-screen min-h-[380px] flex flex-col justify-between">
              {/* Scanline Sweep */}
              <div className="crt-scanline" />

              <div>
                <div className="flex items-center justify-between border-b border-bone/20 pb-2 mb-3 font-mono text-[10px] uppercase tracking-widest">
                  <h2 className="flex items-center gap-1.5 font-normal text-foreground">
                    <Terminal className="w-3.5 h-3.5 text-lime led-active" />
                    {t.dashboard.liveFeedTitle}
                  </h2>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-lime led-active rounded-full" />
                    <span className="text-lime text-[9px]">{t.dashboard.streaming}</span>
                  </span>
                </div>

                {/* Simulated Logs Stream */}
                <div className="space-y-2 font-mono text-[11px] leading-relaxed max-h-[260px] overflow-y-auto scrollbar-thin scrollbar-thumb-lime/20">
                  {events.map((e) => (
                    <div
                      key={e.id}
                      className="border-l-2 border-lime/40 pl-2.5 py-1 bg-lime/[0.02] animate-fade-in"
                    >
                      <div className="flex items-center gap-2 text-muted-foreground text-[9px] tracking-widest">
                        <span className="text-lime bg-lime/10 px-1 py-0.2 border border-lime/20 font-bold">
                          {e.ch}
                        </span>
                        <span>{e.t}</span>
                        <span className="text-bone">{e.who}</span>
                      </div>
                      <div className="mt-0.5 text-[11px]">
                        <span className="text-muted-foreground font-bold">
                          {t.dashboard.inboundLabel}
                        </span>{" "}
                        <span className="text-foreground">{e.msg}</span>
                      </div>
                      <div className="mt-0.5 text-[11px] text-lime">
                        <span className="font-bold">{t.dashboard.responseLabel}</span>{" "}
                        <span className="text-foreground">{e.reply}</span>
                      </div>
                    </div>
                  ))}
                  {events.length === 0 && (
                    <div className="text-muted-foreground animate-pulse p-3">
                      <span className="blink">▮</span> {t.dashboard.awaiting}
                    </div>
                  )}
                  <div ref={feedEndRef} />
                </div>
              </div>

              {/* Console diagnostics footer */}
              <div className="border-t border-bone/20 pt-2 mt-3 flex justify-between font-mono text-[9px] text-muted-foreground uppercase">
                <span>{t.dashboard.coreVersion}</span>
                <span>{t.dashboard.bufferStatus}</span>
              </div>
            </div>
          </div>

          {/* SIDE PANEL: PIPELINE TOGGLES & METRICS */}
          <div className="flex flex-col gap-6">
            {/* AUTONOMOUS PIPELINE CONTROLS */}
            <div className="bg-ink border border-bone/20 p-3.5 sm:p-4 shadow-xl relative">
              <h2 className="border-b border-bone/20 pb-2 mb-2.5 font-mono text-[10px] uppercase tracking-widest flex items-center gap-1.5 font-normal text-foreground">
                <span className="h-1.5 w-1.5 bg-lime rounded-full led-active" />
                {t.dashboard.pipelinesTitle}
              </h2>
              <div className="space-y-2">
                <PipelineToggle
                  label={t.dashboard.toggles.codeGen}
                  Icon={Code2}
                  on={codeGen}
                  onChange={setCodeGen}
                />
                <PipelineToggle
                  label={t.dashboard.toggles.agenticQa}
                  Icon={CheckCircle2}
                  on={agenticQa}
                  onChange={setAgenticQa}
                />
                <PipelineToggle
                  label={t.dashboard.toggles.processOrchestrator}
                  Icon={Workflow}
                  on={orchestrator}
                  onChange={setOrchestrator}
                />
              </div>

              {/* WARNING ALERTS IF ANY DISABLED */}
              {(!codeGen || !agenticQa || !orchestrator) && (
                <div className="mt-2.5 border border-signal/40 bg-signal/5 p-2 flex gap-1.5 items-start text-signal animate-fade-in">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0 led-signal mt-0.5" />
                  <div className="font-mono text-[9px] leading-relaxed uppercase">
                    {t.pricing.statusReady === "DISPONIBLE"
                      ? "Modo manual activo para pipelines pausados."
                      : "Manual mode active for paused pipelines."}
                  </div>
                </div>
              )}
            </div>

            {/* DIAGNOSTICS & SYSTEM METRICS */}
            <div className="bg-ink border border-bone/20 p-3.5 sm:p-4 shadow-xl font-mono text-[11px] flex-1 flex flex-col justify-between">
              <div>
                <h2 className="border-b border-bone/20 pb-2 mb-2.5 text-[10px] uppercase tracking-widest font-normal text-foreground">
                  {t.dashboard.telemetryTitle}
                </h2>
                <div className="space-y-2.5">
                  {/* CPU / Execution Load Bar */}
                  <div>
                    <div className="flex justify-between text-[9px] text-muted-foreground uppercase mb-0.5">
                      <span>{t.dashboard.telemetryLoad}</span>
                      <span className="text-lime">{cpuLoad}%</span>
                    </div>
                    <div className="h-2.5 border border-bone/20 bg-ink/40 p-0.5">
                      <div
                        className="h-full bg-lime transition-all duration-500"
                        style={{ width: `${cpuLoad}%` }}
                      />
                    </div>
                  </div>

                  {/* Telemetry Key-Value Matrix */}
                  <div className="space-y-1 text-[10.5px] text-muted-foreground pt-0.5">
                    <div className="flex justify-between">
                      <span>{t.dashboard.metrics.architectureLabel}</span>
                      <span className="text-lime font-bold">
                        {t.dashboard.metrics.architectureVal}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.dashboard.metrics.methodologyLabel}</span>
                      <span className="text-foreground">{t.dashboard.metrics.methodologyVal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.dashboard.metrics.codeQualityLabel}</span>
                      <span className="text-foreground">{t.dashboard.metrics.codeQualityVal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.dashboard.metrics.activePipelinesLabel}</span>
                      <span className="text-lime font-bold">
                        {[codeGen && "GEN", agenticQa && "QA", orchestrator && "WORKER"]
                          .filter(Boolean)
                          .join(" · ") || "NONE"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Verification Footer */}
              <div className="border-t border-bone/20 pt-2.5 mt-3 flex items-center justify-between text-muted-foreground text-[9px] uppercase">
                <span>{t.dashboard.systemStatusLabel}</span>
                <span className="text-lime flex items-center gap-1 font-bold">
                  <span className="h-1.5 w-1.5 bg-lime rounded-full led-active" />
                  {t.dashboard.systemStatusVal}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
