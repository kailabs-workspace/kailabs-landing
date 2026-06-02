import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { Check, Info } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "KAI // Deployment Plans" },
      {
        name: "description",
        content: "Mission briefing: pick your KAI deployment. Single Agent or Agency Deployment.",
      },
      { property: "og:title", content: "KAI // Deployment Plans" },
      {
        property: "og:description",
        content: "Mission briefing: pick your KAI deployment. Single Agent or Agency Deployment.",
      },
      { property: "og:image", content: "/isotipo.svg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "KAI // Deployment Plans" },
      {
        name: "twitter:description",
        content: "Mission briefing: pick your KAI deployment. Single Agent or Agency Deployment.",
      },
    ],
  }),
  component: Pricing,
});

const PLANS = [
  {
    code: "PLAN_01",
    name: "SINGLE AGENT",
    sub: "For solo operators",
    priceMonthly: 149,
    priceAnnual: 119,
    perks: [
      "24/7/365 coverage",
      "1 brand · 1 voice profile",
      "Instagram DMs + WhatsApp",
      "Google Calendar sync",
      "~8s response time autopilot",
      "Inbox email triage routing",
    ],
  },
  {
    code: "PLAN_02",
    name: "AGENCY DEPLOYMENT",
    sub: "For multi-channel ops",
    priceMonthly: 499,
    priceAnnual: 399,
    perks: [
      "24/7/365 coverage",
      "Unlimited brands & voices",
      "Omni-channel sync (IG, WA, Web)",
      "Slack alerts + Notion routes",
      "Stripe payment + billing engine",
      "Priority uplink support · SLA",
    ],
  },
] as const;

function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <div className="min-h-screen bg-cream text-ink transition-colors duration-300">
      <div className="bg-ink text-foreground">
        <SiteNav />
      </div>

      <main className="mx-auto max-w-7xl px-6 py-16">
        {/* BRIEFING HEADER */}
        <div className="border-b-2 border-ink pb-6 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-[11px] tracking-widest uppercase text-ink/60">
              /// MISSION BRIEFING — DEPLOYMENT
            </span>
            <h1 className="font-display text-5xl md:text-7xl mt-3 uppercase leading-none font-bold">
              Pick Your Plan
            </h1>
            <p className="font-mono mt-4 max-w-2xl text-xs md:text-sm text-ink/80">
              &gt; No tiers of "almost". Two payloads. Deploy and go.
            </p>
          </div>

          {/* DYNAMIC CYCLE SELECTOR */}
          <div className="flex items-center gap-3 shrink-0">
            <span
              className={`font-mono text-xs ${billingCycle === "monthly" ? "text-ink font-bold" : "text-ink/50"}`}
            >
              MONTHLY
            </span>
            <button
              onClick={() => setBillingCycle((c) => (c === "monthly" ? "annual" : "monthly"))}
              className="relative w-14 h-7 border-2 border-ink bg-cream rounded-full transition-all duration-300 cursor-pointer"
            >
              <span
                className="absolute top-0.5 h-5 w-5 bg-ink rounded-full transition-all duration-300"
                style={{
                  left: billingCycle === "monthly" ? "4px" : "32px",
                }}
              />
            </button>
            <div className="flex items-center gap-2">
              <span
                className={`font-mono text-xs ${billingCycle === "annual" ? "text-ink font-bold" : "text-ink/50"}`}
              >
                ANNUAL
              </span>
              <span className="bg-ink text-cream text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* PLANS GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {PLANS.map((p) => {
            const price = billingCycle === "monthly" ? p.priceMonthly : p.priceAnnual;
            return (
              <article
                key={p.code}
                className="border-[3px] border-ink bg-cream p-8 md:p-10 corner-ticks relative tactile-shadow group flex flex-col justify-between"
              >
                <span className="tick-tl" />
                <span className="tick-br" />

                <div>
                  <div className="flex items-start justify-between font-mono text-[11px] tracking-widest uppercase">
                    <span className="text-ink/60">/// {p.code}</span>
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink animate-ping" />
                      STATUS: READY
                    </span>
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl mt-6 uppercase leading-none font-bold">
                    {p.name}
                  </h2>
                  <div className="font-mono text-xs uppercase tracking-widest mt-2 text-ink/70">
                    &gt; {p.sub}
                  </div>

                  {/* PRICE DISPLAY */}
                  <div className="mt-8 flex items-end gap-2 border-b-2 border-ink/15 pb-6">
                    <div className="relative overflow-hidden flex items-end">
                      <span className="font-display text-7xl md:text-8xl uppercase leading-none font-bold tracking-tighter">
                        €{price}
                      </span>
                    </div>
                    <div className="font-mono text-xs pb-3 flex flex-col">
                      <span className="font-bold">/ MONTH</span>
                      <span className="text-[10px] text-ink/65 uppercase">
                        {billingCycle === "annual" ? "Billed Annually" : "Billed Monthly"}
                      </span>
                    </div>
                  </div>

                  {/* PERKS LIST */}
                  <ul className="mt-8 space-y-3 font-mono text-xs md:text-sm">
                    {p.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2.5 group/perk">
                        <Check className="w-4.5 h-4.5 text-ink border border-ink/20 p-0.5 mt-0.5 shrink-0 group-hover/perk:border-ink transition-colors duration-200" />
                        <span className="text-ink/85">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DEPLOY BUTTON */}
                <button className="group relative mt-10 w-full bg-ink text-cream py-5 font-mono text-sm uppercase tracking-widest border-2 border-ink overflow-hidden cursor-pointer select-none">
                  <span className="absolute inset-0 bg-lime translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative group-hover:text-ink transition-colors duration-200 font-bold flex items-center justify-center gap-2">
                    ▶ DEPLOY {p.name.split(" ")[0]}
                  </span>
                </button>
              </article>
            );
          })}
        </div>

        {/* BRIEFING FOOTER */}
        <div className="mt-16 border-t-2 border-ink pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-ink/60">
          <span>END OF BRIEFING</span>
          <span className="flex items-center gap-2">
            <Info className="w-3.5 h-3.5" />
            <span>NO SETUP FEE · CANCEL ANYTIME · INVOICED MONTHLY</span>
          </span>
        </div>

        {/* corner-ticks tweak for cream surface */}
        <style>{`
          .bg-cream .corner-ticks::before, .bg-cream .corner-ticks::after,
          .bg-cream .corner-ticks > .tick-tl, .bg-cream .corner-ticks > .tick-br {
            border-color: var(--ink) !important;
          }
        `}</style>
      </main>
    </div>
  );
}
