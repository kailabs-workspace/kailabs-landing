import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { D as DotMatrix, S as SiteNav, a as SiteFooter } from "./SiteFooter-DsBLkoY6.mjs";
import { a as useI18n } from "./router-w_T3t37d.mjs";
import { j as Cpu, W as Workflow, p as Bot, L as Layers, C as CircleCheck, A as ArrowRight, E as ExternalLink, b as Clock } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
function OficiaShowcase() {
  const { t, lang } = useI18n();
  const [selectedModule, setSelectedModule] = reactExports.useState(0);
  const modules = [
    {
      name: "identidad",
      title: lang === "es" ? "Identidad & RBAC" : "Identity & Domain RBAC",
      desc: lang === "es" ? "Autenticación Better Auth, roles de usuario estrictos (admin, profesional, cliente) y sesiones server-side." : "Better Auth session management, domain RBAC (admin, professional, customer), server-side session cookies.",
      highlight: "Better Auth + RBAC"
    },
    {
      name: "catalogo",
      title: lang === "es" ? "Catálogo Dinámico" : "Dynamic Services Catalog",
      desc: lang === "es" ? "Esquemas de atributos dinámicos por categoría (maestros de inglés, servicios) con validación Zod." : "Dynamic category attribute schemas (English teachers, services) with strict Zod validation.",
      highlight: "Zod Schema Engines"
    },
    {
      name: "disponibilidad",
      title: lang === "es" ? "Matriz de Disponibilidad" : "Availability Engine",
      desc: lang === "es" ? "Franjas horarias y slots de calendario sincronizados con validación de colisiones en tiempo real." : "Real-time calendar slot management, collision detection, and instant slot reservation holds.",
      highlight: "Conflict Prevention"
    },
    {
      name: "reservas",
      title: lang === "es" ? "Máquina de Estados de Reserva" : "Booking State Machine",
      desc: lang === "es" ? "Ciclo de vida estricto: pendiente, confirmada, completada, cancelada o reembolsada con reglas ADR 0004." : "Finite state machine: pending, confirmed, completed, cancelled, refunded with ADR 0004 minor safety rules.",
      highlight: "ADR 0004 Compliant"
    },
    {
      name: "pagos",
      title: lang === "es" ? "Pasarela Wompi & Liquidaciones" : "Wompi Gateway & Settlement",
      desc: lang === "es" ? "Fábrica abstracta de pasarela Wompi con soporte live/mock y generación automática de lotes semanales." : "Wompi gateway factory with live/mock fallback and automated weekly provider settlement batches.",
      highlight: "Automated Payouts"
    },
    {
      name: "reputacion",
      title: lang === "es" ? "Reputación Verificada" : "Verified Reputation",
      desc: lang === "es" ? "Sistema de calificaciones y reseñas únicamente habilitado tras reservas completadas satisfactoriamente." : "Verified review matrix unlocked only after successful booking completion.",
      highlight: "Zero Fraud Reviews"
    },
    {
      name: "mensajeria",
      title: lang === "es" ? "Mensajería por Solicitud" : "Threaded Request Chat",
      desc: lang === "es" ? "Canal de mensajería contextual aislado por solicitud con autorización granular independiente." : "Contextual chat channels scoped to specific reservation IDs with granular authorization.",
      highlight: "Scoped Auth"
    },
    {
      name: "notificaciones",
      title: lang === "es" ? "Notificaciones Multicanal" : "Multi-Channel Alerts",
      desc: lang === "es" ? "Integración de WhatsApp y correos transaccionales para alertas de caducidad e invitaciones." : "WhatsApp webhook notifier and transactional email dispatch for real-time customer and pro alerts.",
      highlight: "WhatsApp Notifier"
    }
  ];
  const workers = [
    {
      name: "Reloj 1: Caducidad",
      title: lang === "es" ? "Caducidad de Solicitudes" : "Request Caducity Clock",
      desc: lang === "es" ? "Cancela automáticamente solicitudes no respondidas tras 24h y libera los horarios." : "Auto-cancels unanswered reservation requests after 24h and frees the calendar slot."
    },
    {
      name: "Reloj 2: Aviso WhatsApp",
      title: lang === "es" ? "Alerta de WhatsApp Previa" : "WhatsApp Expiry Warning",
      desc: lang === "es" ? "Avisa al profesional de forma idempotente entre 20h y 24h para evitar cancelaciones." : "Idempotently alerts the professional between 20h-24h to avoid expiration."
    },
    {
      name: "Reloj 3: Autocompletado",
      title: lang === "es" ? "Autocompletado de Citas" : "Booking Auto-Completion",
      desc: lang === "es" ? "Marca citas como finalizadas al terminar el servicio y libera los fondos para liquidación." : "Marks sessions completed once service window closes and stages funds for payout."
    },
    {
      name: "Reloj 4: Liquidación",
      title: lang === "es" ? "Lote de Liquidación Semanal" : "Weekly Settlement Batch",
      desc: lang === "es" ? "Calcula comisiones y genera el lote consolidado para transferencia a profesionales." : "Aggregates commissions and computes weekly payout batches for professional disbursement."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/20 bg-ink/75 backdrop-blur-md p-4 sm:p-5 md:p-7 shadow-2xl relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-tl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-br" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-bone/20 pb-4 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-lime text-ink font-mono text-[9px] font-bold px-1.5 py-0.2 uppercase tracking-wider", children: t.cases.flagshipBadge }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9.5px] text-muted-foreground tracking-widest uppercase", children: "// REPO: kailabs-workspace/oficia-platform" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl uppercase tracking-tight text-foreground", children: t.home.flagshipProject.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-lime mt-0.5 tracking-wider", children: t.home.flagshipProject.category })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://github.com/kailabs-workspace/oficia-platform",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-1.5 bg-bone/10 hover:bg-lime hover:text-ink text-foreground border border-bone/25 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-widest transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.flagshipProject.githubBtn })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-5", children: t.home.flagshipProject.keyResults.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink/90 border border-bone/15 p-2.5 sm:p-3 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[8.5px] text-muted-foreground uppercase tracking-widest", children: r.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl sm:text-2xl text-lime mt-0.5 font-bold", children: r.val })
    ] }, r.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-5 border-t border-bone/15 pt-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-foreground font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3.5 h-3.5 text-lime" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.flagshipProject.architectureTitle })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] text-muted-foreground", children: "8 DOMAIN MODULES" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-muted-foreground leading-relaxed", children: t.home.flagshipProject.architectureDesc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-1", children: modules.map((m, idx) => {
          const isSelected = selectedModule === idx;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setSelectedModule(idx),
              className: `p-2 text-left border font-mono transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[60px] ${isSelected ? "border-lime bg-lime/10 text-foreground" : "border-bone/15 bg-ink/50 text-muted-foreground hover:border-lime/40 hover:text-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-lime font-bold", children: [
                  "0",
                  idx + 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold truncate text-[10px]", children: m.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-muted-foreground/80 truncate", children: m.highlight })
              ]
            },
            m.name
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink border border-lime/30 p-3 font-mono text-[11px] animate-fade-in relative mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-bone/15 pb-1.5 mb-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime font-bold uppercase tracking-wider flex items-center gap-1.5 text-[10.5px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-3 h-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "src/modules/",
                modules[selectedModule].name
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground uppercase", children: modules[selectedModule].title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/90 text-[10.5px] leading-relaxed", children: modules[selectedModule].desc })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-foreground font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-lime" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lang === "es" ? "Motor Asíncrono de Workers (pg-boss)" : "pg-boss Async Worker Clocks" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: workers.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "border border-bone/15 bg-ink/60 p-2.5 hover:border-lime/40 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between font-mono text-[10px] mb-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime font-bold flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active" }),
                  w.title
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8px] text-muted-foreground uppercase", children: [
                  "CLOCK_0",
                  i + 1
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] text-muted-foreground leading-relaxed", children: w.desc })
            ]
          },
          w.name
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-bone/15 pt-3 mt-3 font-mono text-[10px] space-y-1", children: t.home.flagshipProject.specs.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "uppercase text-[9px]", children: [
            s.label,
            ":"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: s.value })
        ] }, s.label)) })
      ] })
    ] })
  ] });
}
function Tag({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] md:text-[10px] tracking-widest text-muted-foreground uppercase", children });
}
function SectionHeader({
  index,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 md:mb-8 border-b border-bone/20 pb-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { children: [
          "/// ",
          index
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl sm:text-2xl md:text-3xl mt-1 uppercase text-foreground", children: title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] text-lime hidden md:inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active" }),
        "KAI_SYSTEMS"
      ] })
    ] }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] md:text-xs text-muted-foreground mt-1.5 max-w-xl leading-relaxed", children: subtitle })
  ] });
}
const serviceIcons = [Cpu, Workflow, Bot, Layers];
function ServicesPage() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-ink text-foreground overflow-x-hidden selection:bg-lime selection:text-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DotMatrix, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-bone/20 pb-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: t.nav.services }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3 mt-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl sm:text-3xl md:text-4xl uppercase text-foreground", children: t.home.servicesSectionTitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] text-lime flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active" }),
            t.home.servicesCapabilitiesBadge
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono mt-2 max-w-xl text-muted-foreground text-[11px] md:text-xs leading-relaxed", children: t.home.servicesSectionSubtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-10 md:mb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3.5 md:gap-4.5", children: t.home.servicesList.map((service, idx) => {
        const IconComp = serviceIcons[idx % serviceIcons.length];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
          opacity: 0,
          y: 15
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.35,
          delay: idx * 0.08
        }, whileHover: {
          y: -2
        }, className: "border border-bone/20 bg-ink/70 p-4 sm:p-5 corner-ticks flex flex-col justify-between hover:border-lime/40 transition-all group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-bone/15 pb-2.5 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] text-lime font-bold", children: [
                "// 0",
                idx + 1
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconComp, { className: "w-4 h-4 text-lime" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg sm:text-xl uppercase text-foreground mb-1.5", children: service.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-muted-foreground leading-relaxed mb-3", children: service.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 mb-3.5", children: service.deliverables.map((item, dIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 font-mono text-[11px] text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 text-lime shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
            ] }, dIdx)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2.5 border-t border-bone/10 flex flex-wrap gap-1", children: service.technologies.map((tech) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[8.5px] sm:text-[9px] uppercase px-1.5 py-0.2 bg-ink border border-bone/20 text-muted-foreground", children: tech }, tech)) })
        ] }, service.id);
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10 md:mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "02", title: t.home.flagshipTitle, subtitle: t.home.flagshipSubtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(OficiaShowcase, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/20 bg-ink/80 p-4 sm:p-6 corner-ticks relative flex flex-col sm:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-tl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-br" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg sm:text-xl uppercase text-foreground", children: t.home.servicesCta.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-muted-foreground mt-0.5", children: t.home.servicesCta.subtitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/#contact", className: "inline-flex items-center gap-1.5 bg-lime text-ink px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-lime/90 transition-all shrink-0 tactile-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.servicesCta.btn }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ServicesPage as component
};
