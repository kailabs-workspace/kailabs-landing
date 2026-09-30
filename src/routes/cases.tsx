import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { DotMatrix } from "@/components/DotMatrix";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { useI18n } from "@/i18n";
import type { LogEntry } from "@/i18n/types";
import {
  ChevronDown,
  Terminal,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "KAI LABS — Projects & Case Studies" },
      {
        name: "description",
        content:
          "Production platforms and automation engines engineered by KAI LABS: Oficia Platform, logistics engines, and real-time underwriting systems.",
      },
      {
        property: "og:title",
        content: "KAI LABS — Projects & Case Studies",
      },
      {
        property: "og:description",
        content:
          "Production platforms and automation engines engineered by KAI LABS: Oficia Platform, logistics engines, and real-time underwriting systems.",
      },
      { property: "og:image", content: "/isotipo.svg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "KAI LABS — Projects & Case Studies",
      },
      {
        name: "twitter:description",
        content: "Production platforms and automation engines engineered by KAI LABS.",
      },
    ],
  }),
  component: Cases,
});

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] md:text-[11px] tracking-widest text-muted-foreground uppercase">
      {children}
    </span>
  );
}

function Cases() {
  const { t } = useI18n();
  const [openCaseId, setOpenCaseId] = useState<string>("oficia-platform");

  return (
    <div className="relative min-h-screen bg-ink text-foreground overflow-hidden selection:bg-lime selection:text-ink">
      <DotMatrix />
      <SiteNav />

      <main className="relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12">
        {/* Header */}
        <div className="border-b border-bone/20 pb-4 mb-6">
          <Tag>{t.cases.tag}</Tag>
          <div className="flex flex-wrap items-end justify-between gap-3 mt-1.5">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl uppercase text-foreground">
              {t.cases.title}
            </h1>
            <span className="font-mono text-[11px] text-lime flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-lime led-active" />
              {t.cases.flagshipBadge}
            </span>
          </div>
          <p className="font-mono mt-2 max-w-xl text-muted-foreground text-[11px] md:text-xs leading-relaxed">
            {t.cases.subtitle}
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-4">
          {t.cases.items.map((c) => {
            const isOpen = openCaseId === c.id;

            return (
              <div
                key={c.id}
                className={`border transition-all duration-300 corner-ticks relative ${
                  isOpen
                    ? "border-lime/50 bg-ink/85 shadow-2xl"
                    : "border-bone/20 bg-ink/50 hover:border-bone/40"
                }`}
              >
                <span className="tick-tl" />
                <span className="tick-br" />

                {/* Card Top Summary Bar */}
                <button
                  onClick={() => setOpenCaseId(isOpen ? "" : c.id)}
                  className="w-full p-4 sm:p-5 text-left flex flex-col md:flex-row md:items-center justify-between gap-3 cursor-pointer group"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="font-mono text-[9px] text-lime tracking-widest uppercase">
                        // {c.sector}
                      </span>
                      {c.badge && (
                        <span className="font-mono text-[8.5px] px-1.5 py-0.2 bg-lime/10 border border-lime/30 text-lime uppercase">
                          {c.badge}
                        </span>
                      )}
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl uppercase text-foreground group-hover:text-lime transition-colors">
                      {c.title}
                    </h2>
                    <p className="font-mono text-[11px] text-muted-foreground mt-0.5">
                      {c.subtitle}
                    </p>
                  </div>

                  {/* Primary Metrics */}
                  <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-bone/15 pt-2.5 md:pt-0 md:pl-4">
                    <div>
                      <div className="font-display text-xl sm:text-2xl text-lime font-bold">
                        {c.metrics.primary.value}
                      </div>
                      <div className="font-mono text-[8.5px] text-muted-foreground uppercase tracking-widest">
                        {c.metrics.primary.label}
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform duration-300 group-hover:text-lime ${
                        isOpen ? "rotate-180 text-lime" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Deep Dive Details */}
                {isOpen && (
                  <div className="border-t border-bone/15 p-4 sm:p-5 md:p-6 animate-fade-in space-y-4 bg-ink/40">
                    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-4.5">
                      <div>
                        <p className="font-mono text-[11px] text-bone/90 leading-relaxed mb-3 bg-graphite/25 p-3 border-l-2 border-lime">
                          {c.summary}
                        </p>

                        <div className="grid md:grid-cols-2 gap-3 mb-3">
                          <div className="border border-bone/15 p-3 bg-ink/60">
                            <div className="font-mono text-[9px] uppercase text-signal tracking-widest mb-1">
                              // {t.cases.challengeTitle}
                            </div>
                            <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
                              {c.challenge}
                            </p>
                          </div>
                          <div className="border border-bone/15 p-3.5 bg-ink/60">
                            <div className="font-mono text-[10px] uppercase text-lime tracking-widest mb-1.5">
                              // {t.cases.solutionTitle}
                            </div>
                            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                              {c.solution}
                            </p>
                          </div>
                        </div>

                        {/* Architecture Modules */}
                        <div className="border border-bone/15 p-4 bg-ink/80 space-y-2.5">
                          <div className="flex items-center justify-between border-b border-bone/15 pb-2">
                            <div className="font-mono text-xs text-lime uppercase flex items-center gap-1.5">
                              <Cpu className="w-3.5 h-3.5" />
                              {t.cases.architectureTitle}: {c.architecture.pattern}
                            </div>
                            <span className="font-mono text-[9px] text-muted-foreground">
                              {c.architecture.modules.length} MODS
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {c.architecture.modules.map((mod, mIdx) => (
                              <span
                                key={mIdx}
                                className="font-mono text-[11px] px-2 py-0.5 bg-graphite/40 border border-bone/20 text-foreground"
                              >
                                {mod}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Visual / Stack */}
                      <div className="space-y-4 flex flex-col justify-between">
                        <div className="border border-bone/20 bg-ink overflow-hidden group relative radar-scanner">
                          <img
                            src={c.img}
                            alt={c.title}
                            className="w-full h-40 object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>

                        <div className="border border-bone/15 p-4 bg-ink/70 space-y-3">
                          <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-lime" />
                            {t.cases.stackTitle}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {c.architecture.stack.map((tech) => (
                              <span
                                key={tech}
                                className="font-mono text-[10px] px-2 py-0.5 bg-ink border border-lime/30 text-lime"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-wrap items-center gap-2 pt-2">
                            {c.githubUrl && (
                              <a
                                href={c.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 bg-lime text-ink px-3 py-1.5 font-mono text-[11px] font-bold uppercase hover:bg-lime/90 transition-colors"
                              >
                                <Github className="w-3.5 h-3.5" />
                                {t.cases.githubLinkText}
                              </a>
                            )}
                            <a
                              href="/#contact"
                              className="inline-flex items-center gap-1.5 border border-bone/30 px-3 py-1.5 font-mono text-[11px] uppercase text-foreground hover:border-lime hover:text-lime transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              {t.pricing.ctaBtn}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights & Terminal Logs */}
                    <div className="grid lg:grid-cols-2 gap-4 pt-2 border-t border-bone/15">
                      <div>
                        <div className="font-mono text-[11px] uppercase text-muted-foreground mb-2">
                          // {t.cases.keyMetric}
                        </div>
                        <div className="space-y-1.5">
                          {c.highlights.map((hl, hIdx) => (
                            <div
                              key={hIdx}
                              className="flex items-start gap-2 font-mono text-xs text-foreground"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-lime shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Live Log Terminal Output */}
                      <div className="border border-bone/15 bg-ink/90 p-3.5 crt-screen">
                        <div className="crt-scanline" />
                        <div className="flex items-center justify-between border-b border-bone/15 pb-1.5 mb-2 font-mono text-[10px] text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Terminal className="w-3.5 h-3.5 text-lime" />
                            {t.cases.consoleTitle}
                          </span>
                          <span className="text-lime text-[9px]">{t.cases.streamReplayBadge}</span>
                        </div>
                        <CaseLogPrinter
                          logs={c.consoleLogs}
                          streamingText={t.cases.telemetryStreaming}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function CaseLogPrinter({
  logs,
  streamingText,
}: {
  logs: readonly LogEntry[];
  streamingText: string;
}) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
  }, [logs]);

  useEffect(() => {
    if (visibleCount >= logs.length) return;
    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, 500);
    return () => clearTimeout(timer);
  }, [visibleCount, logs]);

  return (
    <div className="font-mono text-xs space-y-1.5 min-h-[100px]">
      {logs.slice(0, visibleCount).map((entry, idx) => {
        const isKai = entry.who === "KAI" || entry.who === "AI_AGENT";
        return (
          <div key={idx} className="animate-fade-in flex items-start gap-1.5">
            <span
              className={`text-[9px] px-1 py-0.2 border ${
                isKai
                  ? "border-lime/40 text-lime bg-lime/10"
                  : "border-bone/20 text-muted-foreground bg-ink"
              }`}
            >
              {entry.who}
            </span>
            <span className="text-foreground text-[11px] leading-relaxed">{entry.text}</span>
          </div>
        );
      })}
      {visibleCount < logs.length && (
        <div className="text-lime flex items-center gap-1 text-[9px]">
          <span className="animate-pulse">▮</span>
          <span>{streamingText}</span>
        </div>
      )}
    </div>
  );
}
