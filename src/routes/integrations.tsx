import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DotMatrix } from "@/components/DotMatrix";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { useI18n } from "@/i18n";
import { Layers, Database, Clock, ShieldCheck, Cpu, Workflow, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "KAI LABS — Architecture & Stack" },
      {
        name: "description",
        content:
          "The AI-native architecture blueprint: Modular Monoliths, pg-boss background worker clocks, Drizzle ORM, and autonomous AI pipelines.",
      },
      {
        property: "og:title",
        content: "KAI LABS — Architecture & Stack",
      },
      {
        property: "og:description",
        content:
          "The AI-native architecture blueprint: Modular Monoliths, pg-boss background worker clocks, Drizzle ORM, and autonomous AI pipelines.",
      },
      { property: "og:image", content: "/isotipo.svg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "KAI LABS — Architecture & Stack",
      },
      {
        name: "twitter:description",
        content:
          "The AI-native architecture blueprint: Modular Monoliths, pg-boss background worker clocks, Drizzle ORM, and autonomous AI pipelines.",
      },
    ],
  }),
  component: Integrations,
});

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] md:text-[11px] tracking-widest text-muted-foreground uppercase">
      {children}
    </span>
  );
}

const layerIcons = [Layers, Database, Clock, ShieldCheck];

function Integrations() {
  const { t } = useI18n();
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const pillars = [
    t.integrations.pillars.ingest,
    t.integrations.pillars.reason,
    t.integrations.pillars.act,
  ];

  return (
    <div className="relative min-h-screen bg-ink text-foreground overflow-hidden selection:bg-lime selection:text-ink">
      <DotMatrix />
      <SiteNav />

      <main className="relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12">
        {/* HEADER */}
        <div className="border-b border-bone/20 pb-4 mb-6">
          <Tag>{t.integrations.tag}</Tag>
          <div className="flex flex-wrap items-end justify-between gap-3 mt-1.5">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl uppercase text-foreground">
              {t.integrations.title}
            </h1>
            <span className="font-mono text-[11px] text-lime flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-lime led-active" />
              {t.integrations.inProductionBadge}
            </span>
          </div>
          <p className="font-mono mt-2 max-w-xl text-muted-foreground text-[11px] md:text-xs leading-relaxed">
            {t.integrations.subtitlePre}{" "}
            <span className="text-lime">{t.integrations.subtitleHighlight}</span>{" "}
            {t.integrations.subtitlePost}
          </p>
        </div>

        {/* 4-LAYER INTERACTIVE ARCHITECTURE CONSOLE */}
        <div className="border border-bone/20 bg-ink/80 p-4 sm:p-5 md:p-6 corner-ticks relative mb-10">
          <span className="tick-tl" />
          <span className="tick-br" />

          <div className="flex items-center justify-between border-b border-bone/15 pb-2.5 mb-4 font-mono text-[11px] text-muted-foreground uppercase">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-lime" />
              {t.integrations.agentCore}
            </span>
            <span className="text-lime">{t.integrations.stackLayers.length} LAYERS</span>
          </div>

          <div className="grid lg:grid-cols-[240px_1fr] gap-4.5">
            {/* Layer Selection Tabs */}
            <div className="space-y-2">
              {t.integrations.stackLayers.map((layer, idx) => {
                const IconComp = layerIcons[idx % layerIcons.length];
                const isActive = activeLayer === idx;

                return (
                  <button
                    key={layer.category}
                    onClick={() => setActiveLayer(idx)}
                    className={`w-full text-left p-2.5 border font-mono transition-all cursor-pointer flex items-center gap-2.5 ${
                      isActive
                        ? "border-lime bg-lime/10 text-lime"
                        : "border-bone/20 bg-ink text-muted-foreground hover:border-bone/40 hover:text-foreground"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 border flex items-center justify-center shrink-0 ${
                        isActive ? "border-lime bg-lime text-ink" : "border-bone/25 text-lime"
                      }`}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                    <div className="truncate">
                      <div className="text-[8.5px] tracking-widest uppercase text-muted-foreground">
                        // 0{idx + 1}
                      </div>
                      <div className="text-[11px] font-bold text-foreground truncate mt-0.5">
                        {layer.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Layer Deep Dive Box */}
            {t.integrations.stackLayers[activeLayer] && (
              <div className="border border-bone/20 bg-ink/90 p-4 sm:p-5 flex flex-col justify-between crt-screen">
                <div className="crt-scanline" />

                <div>
                  <div className="flex items-center justify-between border-b border-bone/15 pb-1.5 mb-3 font-mono text-[11px]">
                    <span className="text-lime font-bold uppercase">
                      {t.integrations.stackLayers[activeLayer].category}
                    </span>
                    <span className="text-muted-foreground text-[9px]">
                      {t.integrations.inProductionBadge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl uppercase text-foreground mb-2">
                    {t.integrations.stackLayers[activeLayer].title}
                  </h3>

                  <p className="font-mono text-[11px] text-muted-foreground leading-relaxed mb-4">
                    {t.integrations.stackLayers[activeLayer].description}
                  </p>

                  <div>
                    <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mb-1.5">
                      // {t.cases.stackTitle}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {t.integrations.stackLayers[activeLayer].tech.map((tItem) => (
                        <span
                          key={tItem}
                          className="font-mono text-[10.5px] px-2 py-0.5 bg-ink border border-lime/40 text-lime font-bold uppercase"
                        >
                          {tItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-bone/10 font-mono text-[9px] text-muted-foreground flex items-center justify-between">
                  <span>{t.integrations.routingAll}</span>
                  <span className="text-lime">{t.integrations.inProductionBadge}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3 ARCHITECTURAL PILLARS */}
        <div className="mb-10">
          <div className="border-b border-bone/20 pb-2 mb-4">
            <Tag>{t.integrations.pillarPrefix}S</Tag>
            <h2 className="font-display text-xl md:text-2xl uppercase text-foreground mt-1">
              {t.integrations.agentCore}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-bone/20 border border-bone/20 font-mono">
            {pillars.map((item, idx) => (
              <div
                key={item.label}
                className="bg-ink p-4 hover:bg-graphite/30 transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-lime tracking-widest font-bold text-[10px] uppercase mb-1.5 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime led-active" />
                    {t.integrations.pillarPrefix}
                    {idx + 1}
                  </div>
                  <h3 className="font-display text-lg uppercase text-foreground mb-1.5">
                    {item.label}
                  </h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-PHASE PROCESS LIFECYCLE */}
        <div className="border border-bone/20 bg-ink/70 p-4 sm:p-5 md:p-6 corner-ticks relative">
          <span className="tick-tl" />
          <span className="tick-br" />

          <div className="border-b border-bone/20 pb-2 mb-4 flex items-center justify-between">
            <div>
              <Tag>{t.integrations.lifecycleTag}</Tag>
              <h2 className="font-display text-xl md:text-2xl uppercase text-foreground mt-1">
                {t.integrations.lifecycleTitle}
              </h2>
            </div>
            <Workflow className="w-4 h-4 text-lime hidden sm:block" />
          </div>

          <div className="grid md:grid-cols-4 gap-2.5">
            {t.integrations.processLifecycle.map((p, idx) => (
              <div
                key={p.step}
                className="border border-bone/15 p-3 bg-ink/80 flex flex-col justify-between hover:border-lime/30 transition-colors"
              >
                <div>
                  <div className="font-mono text-[10.5px] text-lime font-bold mb-1">
                    // 0{idx + 1}
                  </div>
                  <h4 className="font-display text-sm uppercase text-foreground mb-1">{p.title}</h4>
                  <p className="font-mono text-[10.5px] text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-3 border-t border-bone/20 flex flex-wrap items-center justify-between gap-3">
            <div className="font-mono text-[11px] text-muted-foreground">
              {t.integrations.bottomPrompt}
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center gap-1.5 bg-lime text-ink px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-lime/90 transition-colors"
            >
              <span>{t.integrations.bottomCtaBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
