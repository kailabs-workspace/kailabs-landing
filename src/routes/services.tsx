import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { DotMatrix } from "@/components/DotMatrix";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { OficiaShowcase } from "@/components/OficiaShowcase";
import { useI18n } from "@/i18n";
import { Cpu, Workflow, Bot, Layers, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "KAI LABS — AI-Native Services & Flagship Platform" },
      {
        name: "description",
        content:
          "End-to-end bespoke software platforms, transactional background worker engines, and our flagship project Oficia Platform.",
      },
      {
        property: "og:title",
        content: "KAI LABS — AI-Native Services & Flagship Platform",
      },
      {
        property: "og:description",
        content:
          "Bespoke software platforms, autonomous background engines, and the Oficia flagship platform.",
      },
      { property: "og:image", content: "/isotipo.svg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "KAI LABS — AI-Native Services & Flagship Platform",
      },
      {
        name: "twitter:description",
        content: "Bespoke software platforms and autonomous background engines by KAI LABS.",
      },
    ],
  }),
  component: ServicesPage,
});

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-muted-foreground uppercase">
      {children}
    </span>
  );
}

function SectionHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6 md:mb-8 border-b border-bone/20 pb-3">
      <div className="flex items-end justify-between">
        <div>
          <Tag>/// {index}</Tag>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl mt-1 uppercase text-foreground">
            {title}
          </h2>
        </div>
        <span className="font-mono text-[9px] text-lime hidden md:inline-flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-lime led-active" />
          KAI_SYSTEMS
        </span>
      </div>
      {subtitle && (
        <p className="font-mono text-[11px] md:text-xs text-muted-foreground mt-1.5 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

const serviceIcons = [Cpu, Workflow, Bot, Layers];

function ServicesPage() {
  const { t } = useI18n();

  return (
    <div className="relative min-h-screen bg-ink text-foreground overflow-x-hidden selection:bg-lime selection:text-ink">
      <DotMatrix />
      <SiteNav />

      <main className="relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12">
        {/* PAGE HEADER */}
        <div className="border-b border-bone/20 pb-4 mb-6">
          <Tag>{t.nav.services}</Tag>
          <div className="flex flex-wrap items-end justify-between gap-3 mt-1.5">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl uppercase text-foreground">
              {t.home.servicesSectionTitle}
            </h1>
            <span className="font-mono text-[11px] text-lime flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-lime led-active" />
              {t.home.servicesCapabilitiesBadge}
            </span>
          </div>
          <p className="font-mono mt-2 max-w-xl text-muted-foreground text-[11px] md:text-xs leading-relaxed">
            {t.home.servicesSectionSubtitle}
          </p>
        </div>

        {/* SECTION 01: CONSULTANCY SERVICES GRID */}
        <section className="mb-10 md:mb-14">
          <div className="grid sm:grid-cols-2 gap-3.5 md:gap-4.5">
            {t.home.servicesList.map((service, idx) => {
              const IconComp = serviceIcons[idx % serviceIcons.length];
              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="border border-bone/20 bg-ink/70 p-4 sm:p-5 corner-ticks flex flex-col justify-between hover:border-lime/40 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-bone/15 pb-2.5 mb-3">
                      <span className="font-mono text-[11px] text-lime font-bold">
                        // 0{idx + 1}
                      </span>
                      <IconComp className="w-4 h-4 text-lime" />
                    </div>

                    <h3 className="font-display text-lg sm:text-xl uppercase text-foreground mb-1.5">
                      {service.title}
                    </h3>
                    <p className="font-mono text-[11px] text-muted-foreground leading-relaxed mb-3">
                      {service.description}
                    </p>

                    <div className="space-y-1 mb-3.5">
                      {service.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-1.5 font-mono text-[11px] text-foreground"
                        >
                          <CheckCircle2 className="w-3 h-3 text-lime shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-bone/10 flex flex-wrap gap-1">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[8.5px] sm:text-[9px] uppercase px-1.5 py-0.2 bg-ink border border-bone/20 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* SECTION 02: FLAGSHIP SHOWCASE (OFICIA PLATFORM) */}
        <section className="mb-10 md:mb-14">
          <SectionHeader
            index="02"
            title={t.home.flagshipTitle}
            subtitle={t.home.flagshipSubtitle}
          />
          <OficiaShowcase />
        </section>

        {/* BOTTOM CTA BANNER */}
        <div className="border border-bone/20 bg-ink/80 p-4 sm:p-6 corner-ticks relative flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="tick-tl" />
          <span className="tick-br" />
          <div>
            <h3 className="font-display text-lg sm:text-xl uppercase text-foreground">
              {t.home.servicesCta.title}
            </h3>
            <p className="font-mono text-[11px] text-muted-foreground mt-0.5">
              {t.home.servicesCta.subtitle}
            </p>
          </div>
          <a
            href="/#contact"
            className="inline-flex items-center gap-1.5 bg-lime text-ink px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-lime/90 transition-all shrink-0 tactile-shadow"
          >
            <span>{t.home.servicesCta.btn}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
