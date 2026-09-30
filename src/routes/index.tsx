import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { DotMatrix } from "@/components/DotMatrix";
import { ThreeBackground } from "@/components/ThreeBackground";
import { Manifesto } from "@/components/Manifesto";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { InteractiveTransformationDemo } from "@/components/InteractiveTransformationDemo";
import { InteractiveStorytelling } from "@/components/InteractiveStorytelling";
import { useI18n } from "@/i18n";
import { ArrowRight, CheckCircle2, Send, Building2, Mail, Clock, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KAI LABS — AI-Native Software Engineering Consultancy" },
      {
        name: "description",
        content:
          "We build bespoke software platforms and automate business workflows with autonomous AI engines and background workers.",
      },
      {
        property: "og:title",
        content: "KAI LABS — AI-Native Software Engineering Consultancy",
      },
      {
        property: "og:description",
        content:
          "We build bespoke software platforms and automate business workflows with autonomous AI engines and background workers.",
      },
      { property: "og:image", content: "/isotipo.svg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "KAI LABS — AI-Native Software Engineering Consultancy",
      },
      {
        name: "twitter:description",
        content:
          "We build bespoke software platforms and automate business workflows with autonomous AI engines and background workers.",
      },
    ],
  }),
  component: Index,
});

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] md:text-[11px] tracking-widest text-muted-foreground uppercase">
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

function Index() {
  const { t } = useI18n();

  // Scroll Progress Indicator for Motion.js
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Contact / Scoping Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    projectType: t.home.contactForm.projectTypes[0],
    timeline: t.home.contactForm.timelines[0],
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="relative min-h-screen bg-ink text-foreground overflow-x-hidden selection:bg-lime selection:text-ink">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-lime z-50 origin-left"
        style={{ scaleX }}
      />

      <DotMatrix />
      <SiteNav />

      <main>
        {/* HERO SECTION WITH THREE.JS BACKGROUND */}
        <section className="relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 pt-8 pb-10 md:pt-12 md:pb-14">
          <Tag>{t.home.statusTag}</Tag>

          <div className="mt-3 corner-ticks p-4 sm:p-6 md:p-8 border border-bone/10 bg-ink/60 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <span className="tick-tl" />
            <span className="tick-br" />

            {/* Three.js Interactive Mesh & Particle Field */}
            <ThreeBackground className="opacity-80" />

            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-[11px] text-lime uppercase tracking-widest flex items-center gap-1.5 mb-3 md:mb-4"
              >
                <span className="h-1.5 w-1.5 bg-lime led-active rounded-full" />
                {t.home.missionBrief}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-[0.88] uppercase tracking-tighter text-foreground"
              >
                {t.home.heroHeadline1}
                <br />
                {t.home.heroHeadline2}{" "}
                <span className="text-lime glitch-hover inline-block cursor-default">
                  {t.home.heroHeadlineHighlight}
                </span>
                .
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="font-mono mt-4 max-w-xl text-xs sm:text-xs md:text-sm text-muted-foreground leading-relaxed"
              >
                {t.home.heroDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3"
              >
                <a
                  href="#contact"
                  className="terminal-hover inline-flex items-center gap-2 bg-lime px-4.5 py-2.5 sm:px-5 sm:py-3 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-ink hover:bg-lime/90 transition-all tactile-shadow"
                >
                  {t.home.heroCtaPrimary}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 border border-bone/30 bg-ink/60 px-4.5 py-2.5 sm:px-5 sm:py-3 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-foreground hover:border-lime hover:text-lime transition-all"
                >
                  <Sparkles className="w-3 h-3 text-lime" />
                  {t.home.heroCtaSecondary}
                </Link>
              </motion.div>

              {/* Quick Metrics Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-8 sm:mt-9 grid grid-cols-2 lg:grid-cols-4 gap-px bg-bone/20 border border-bone/20 overflow-hidden"
              >
                {[
                  t.home.quickStats.stat1,
                  t.home.quickStats.stat2,
                  t.home.quickStats.stat3,
                  t.home.quickStats.stat4,
                ].map((stat, idx) => (
                  <div key={idx} className="bg-ink/90 p-2.5 sm:p-3.5">
                    <div className="font-mono text-[8.5px] sm:text-[9.5px] text-muted-foreground uppercase tracking-widest">
                      {stat.label}
                    </div>
                    <div className="font-display text-xl sm:text-2xl text-lime mt-0.5 font-bold">
                      {stat.val}
                    </div>
                    <div className="font-mono text-[8.5px] sm:text-[9px] text-bone/60 mt-0.5">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 01: INTERACTIVE STORYTELLING MODULE */}
        <section
          id="story"
          className="relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12"
        >
          <SectionHeader index="01" title={t.home.storyTitle} subtitle={t.home.storySubtitle} />
          <InteractiveStorytelling />
        </section>

        {/* SECTION 02: TRANSFORMATION BENCHMARK RUNNER */}
        <section
          id="transformation"
          className="relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12"
        >
          <SectionHeader
            index="02"
            title={t.home.transformationTitle}
            subtitle={t.home.transformationSubtitle}
          />
          <InteractiveTransformationDemo />
        </section>

        {/* MANIFESTO */}
        <section className="relative z-10 mx-auto max-w-3xl px-3 sm:px-5 py-10 md:py-14 text-center">
          <Tag>{t.home.manifestoTag}</Tag>
          <div className="mt-4 md:mt-6">
            <Manifesto />
          </div>
          <p className="font-mono text-[11px] md:text-xs text-muted-foreground max-w-lg mx-auto mt-4 leading-relaxed">
            {t.home.manifestoSub}
          </p>
        </section>

        {/* SECTION 03: STANDARDS / PRINCIPLES */}
        <section className="relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12">
          <SectionHeader index="03" title={t.home.philosophyTitle} />

          <div className="grid sm:grid-cols-3 gap-3.5 md:gap-4.5">
            {t.home.philosophyCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="border border-bone/20 bg-ink/70 p-4 md:p-5 flex flex-col justify-between hover:border-lime/40 transition-colors"
              >
                <div>
                  <span className="font-mono text-[8.5px] sm:text-[9px] text-lime px-1.5 py-0.5 bg-lime/10 border border-lime/30 inline-block uppercase tracking-wider mb-2.5">
                    {card.badge}
                  </span>
                  <h3 className="font-display text-base sm:text-lg uppercase mb-1.5 text-foreground">
                    {card.title}
                  </h3>
                  <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 04: PROJECT SCOPING & CONTACT */}
        <section
          id="contact"
          className="relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12"
        >
          <SectionHeader index="04" title={t.home.contactTitle} subtitle={t.home.contactSubtitle} />

          <div className="grid lg:grid-cols-[1fr_300px] gap-4.5 md:gap-6">
            {/* Scoping Form Container */}
            <div className="border border-bone/20 bg-ink/80 p-4 sm:p-5 md:p-6 corner-ticks relative">
              <span className="tick-tl" />
              <span className="tick-br" />

              {submitted ? (
                <div className="py-8 text-center space-y-2.5">
                  <div className="w-11 h-11 bg-lime/10 border-2 border-lime text-lime flex items-center justify-center mx-auto mb-2.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl uppercase text-foreground">
                    {t.home.contactForm.submittedTitle}
                  </h3>
                  <p className="font-mono text-[11px] text-muted-foreground max-w-sm mx-auto">
                    {t.home.contactForm.successMsg}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 border border-bone/30 px-4 py-1.5 font-mono text-[11px] uppercase hover:border-lime text-lime cursor-pointer"
                  >
                    {t.home.contactForm.newInquiryBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid sm:grid-cols-3 gap-2.5">
                    <div>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={t.home.contactForm.namePlaceholder}
                        className="w-full bg-ink border border-bone/25 px-3 py-2 font-mono text-[11px] text-foreground focus:border-lime focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder={t.home.contactForm.emailPlaceholder}
                        className="w-full bg-ink border border-bone/25 px-3 py-2 font-mono text-[11px] text-foreground focus:border-lime focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder={t.home.contactForm.companyPlaceholder}
                        className="w-full bg-ink border border-bone/25 px-3 py-2 font-mono text-[11px] text-foreground focus:border-lime focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] uppercase text-muted-foreground mb-1">
                      {t.home.contactForm.projectTypeLabel}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                      {t.home.contactForm.projectTypes.map((type) => {
                        const active = formState.projectType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormState({ ...formState, projectType: type })}
                            className={`p-1.5 sm:p-2 text-left border font-mono text-[10.5px] transition-colors cursor-pointer ${
                              active
                                ? "border-lime bg-lime/10 text-lime font-bold"
                                : "border-bone/20 bg-ink hover:border-bone/40 text-muted-foreground"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] uppercase text-muted-foreground mb-1">
                      {t.home.contactForm.timelineLabel}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                      {t.home.contactForm.timelines.map((tl) => {
                        const active = formState.timeline === tl;
                        return (
                          <button
                            type="button"
                            key={tl}
                            onClick={() => setFormState({ ...formState, timeline: tl })}
                            className={`p-1.5 text-center border font-mono text-[10.5px] transition-colors cursor-pointer ${
                              active
                                ? "border-lime bg-lime/10 text-lime font-bold"
                                : "border-bone/20 bg-ink hover:border-bone/40 text-muted-foreground"
                            }`}
                          >
                            {tl}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={2.5}
                      required
                      value={formState.details}
                      onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                      placeholder={t.home.contactForm.detailsPlaceholder}
                      className="w-full bg-ink border border-bone/25 p-2.5 font-mono text-[11px] text-foreground focus:border-lime focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-lime text-ink py-2.5 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest hover:bg-lime/90 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{t.home.contactForm.submittingBtn}</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        {t.home.contactForm.submitBtn}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-3">
              <div className="border border-bone/20 bg-ink/60 p-3.5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-lime font-mono text-[11px]">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{t.home.contactForm.directEmailLabel}</span>
                </div>
                <a
                  href="mailto:contact@kailabs.io"
                  className="font-mono text-xs text-foreground hover:text-lime block"
                >
                  contact@kailabs.io
                </a>
                <p className="font-mono text-[9px] text-muted-foreground">
                  {t.home.contactForm.slaNote}
                </p>
              </div>

              <div className="border border-bone/20 bg-ink/60 p-3.5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-lime font-mono text-[11px]">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{t.home.contactForm.headquartersLabel}</span>
                </div>
                <p className="font-mono text-[11px] text-foreground uppercase">
                  {t.home.contactForm.remoteLocation}
                </p>
                <div className="flex items-center gap-1 font-mono text-[9px] text-muted-foreground">
                  <Clock className="w-3 h-3 text-lime" />
                  <span>UTC-5 / UTC-3 / UTC+1</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
