import { createFileRoute } from "@tanstack/react-router";
import { DotMatrix } from "@/components/DotMatrix";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { useI18n } from "@/i18n";
import { Check, ShieldCheck, ArrowRight, Clock, Target, Sparkles, Layers } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "KAI LABS — Engagement Models" },
      {
        name: "description",
        content:
          "High-velocity engineering models: AI Transformation Sprints, End-to-End Product Builds, and Dedicated AI Pods.",
      },
      {
        property: "og:title",
        content: "KAI LABS — Engagement Models",
      },
      {
        property: "og:description",
        content:
          "High-velocity engineering models: AI Transformation Sprints, End-to-End Product Builds, and Dedicated AI Pods.",
      },
      { property: "og:image", content: "/isotipo.svg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "KAI LABS — Engagement Models",
      },
      {
        name: "twitter:description",
        content:
          "High-velocity engineering models: AI Transformation Sprints, End-to-End Product Builds, and Dedicated AI Pods.",
      },
    ],
  }),
  component: Pricing,
});

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] md:text-[11px] tracking-widest text-muted-foreground uppercase">
      {children}
    </span>
  );
}

function Pricing() {
  const { t } = useI18n();

  return (
    <div className="relative min-h-screen bg-ink text-foreground overflow-hidden selection:bg-lime selection:text-ink">
      <DotMatrix />
      <SiteNav />

      <main className="relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12">
        {/* HEADER */}
        <div className="border-b border-bone/20 pb-4 mb-6">
          <Tag>{t.pricing.tag}</Tag>
          <div className="flex flex-wrap items-end justify-between gap-3 mt-1.5">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl uppercase text-foreground">
              {t.pricing.title}
            </h1>
            <span className="font-mono text-[11px] text-lime flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-lime led-active" />
              {t.pricing.statusReady}
            </span>
          </div>
          <p className="font-mono mt-2 max-w-xl text-muted-foreground text-[11px] md:text-xs leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* 3 ENGAGEMENT MODELS GRID */}
        <div className="grid lg:grid-cols-3 gap-4.5 mb-10">
          {t.pricing.models.map((m) => {
            const isFeatured = m.featured;
            return (
              <article
                key={m.code}
                className={`border p-4 sm:p-5 corner-ticks relative flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "border-lime bg-ink/90 shadow-[0_0_25px_rgba(212,245,66,0.12)]"
                    : "border-bone/20 bg-ink/65 hover:border-bone/40"
                }`}
              >
                <span className="tick-tl" />
                <span className="tick-br" />

                <div>
                  <div className="flex items-center justify-between font-mono text-[9px] tracking-widest uppercase border-b border-bone/15 pb-2.5 mb-3.5">
                    <span className="text-lime font-bold">// {m.code}</span>
                    {isFeatured ? (
                      <span className="px-1.5 py-0.2 bg-lime text-ink font-bold text-[8.5px] flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        {t.pricing.statusReady === "DISPONIBLE" ? "RECOMENDADO" : "RECOMMENDED"}
                      </span>
                    ) : (
                      <span className="text-muted-foreground flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-lime led-active" />
                        {t.pricing.statusReady}
                      </span>
                    )}
                  </div>

                  <h2 className="font-display text-xl uppercase text-foreground mb-0.5">
                    {m.name}
                  </h2>
                  <p className="font-mono text-[11px] text-lime mb-3.5">&gt; {m.tagline}</p>

                  <div className="bg-graphite/40 border border-bone/15 p-2.5 mb-3.5 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-foreground">
                      <Clock className="w-3 h-3 text-lime shrink-0" />
                      <span>
                        <strong>{t.home.contactForm.timelineLabel}:</strong> {m.timeline}
                      </span>
                    </div>
                    <div className="flex items-start gap-1.5 font-mono text-[10.5px] text-muted-foreground">
                      <Target className="w-3 h-3 text-lime shrink-0 mt-0.5" />
                      <span>{m.idealFor}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-4">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                      // {t.pricing.deliverablesLabel}
                    </div>
                    {m.deliverables.map((d, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-1.5 font-mono text-[11px] text-foreground"
                      >
                        <Check className="w-3 h-3 text-lime shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2.5 border-t border-bone/15">
                  <a
                    href="/#contact"
                    className={`w-full py-2 font-mono text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all ${
                      isFeatured
                        ? "bg-lime text-ink hover:bg-lime/90"
                        : "border border-bone/30 text-foreground hover:border-lime hover:text-lime"
                    }`}
                  >
                    <span>{t.pricing.ctaBtn}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* COMPARISON MATRIX VS TRADITIONAL CONSULTANCIES */}
        <div className="border border-bone/20 bg-ink/80 p-4 sm:p-5 md:p-6 corner-ticks relative mb-8">
          <span className="tick-tl" />
          <span className="tick-br" />

          <div className="flex items-center justify-between border-b border-bone/20 pb-2 mb-4">
            <h2 className="font-display text-lg md:text-2xl uppercase text-foreground">
              {t.pricing.comparison.title}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-[11px] border-collapse">
              <thead>
                <tr className="border-b border-bone/20 text-muted-foreground uppercase text-[9px] tracking-widest">
                  <th className="py-2 pr-3">{t.pricing.comparison.columns[0]}</th>
                  <th className="py-2 px-3 text-muted-foreground/70">
                    {t.pricing.comparison.columns[1]}
                  </th>
                  <th className="py-2 pl-3 text-lime bg-lime/5 border-l border-r border-lime/20">
                    {t.pricing.comparison.columns[2]}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-bone/10">
                {t.pricing.comparison.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-graphite/20 transition-colors">
                    <td className="py-2 pr-3 text-foreground font-semibold">{row.feature}</td>
                    <td className="py-2 px-3 text-muted-foreground">{row.traditional}</td>
                    <td className="py-2 pl-3 text-lime font-bold bg-lime/5 border-l border-r border-lime/20">
                      {row.kaiLabs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BOTTOM GUARANTEE & CODEBASE OWNERSHIP */}
        <div className="grid md:grid-cols-2 gap-3 font-mono text-[11px] text-muted-foreground">
          <div className="border border-bone/15 p-3.5 bg-ink/60 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-lime shrink-0 mt-0.5" />
            <div>
              <div className="text-foreground font-bold uppercase mb-0.5">
                {t.pricing.guaranteeTitle}
              </div>
              <p>{t.pricing.guarantee}</p>
            </div>
          </div>
          <div className="border border-bone/15 p-3.5 bg-ink/60 flex items-start gap-2.5">
            <Layers className="w-4 h-4 text-lime shrink-0 mt-0.5" />
            <div>
              <div className="text-foreground font-bold uppercase mb-0.5">{t.pricing.ipTitle}</div>
              <p>{t.pricing.customNote}</p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
