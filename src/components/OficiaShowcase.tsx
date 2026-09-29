import { useState } from "react";
import { useI18n } from "@/i18n";
import {
  ExternalLink,
  Layers,
  Clock,
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  Terminal,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

export function OficiaShowcase() {
  const { t, lang } = useI18n();
  const [selectedModule, setSelectedModule] = useState<number>(0);

  const modules = [
    {
      name: "identidad",
      title: lang === "es" ? "Identidad & RBAC" : "Identity & Domain RBAC",
      desc:
        lang === "es"
          ? "Autenticación Better Auth, roles de usuario estrictos (admin, profesional, cliente) y sesiones server-side."
          : "Better Auth session management, domain RBAC (admin, professional, customer), server-side session cookies.",
      highlight: "Better Auth + RBAC",
    },
    {
      name: "catalogo",
      title: lang === "es" ? "Catálogo Dinámico" : "Dynamic Services Catalog",
      desc:
        lang === "es"
          ? "Esquemas de atributos dinámicos por categoría (maestros de inglés, servicios) con validación Zod."
          : "Dynamic category attribute schemas (English teachers, services) with strict Zod validation.",
      highlight: "Zod Schema Engines",
    },
    {
      name: "disponibilidad",
      title: lang === "es" ? "Matriz de Disponibilidad" : "Availability Engine",
      desc:
        lang === "es"
          ? "Franjas horarias y slots de calendario sincronizados con validación de colisiones en tiempo real."
          : "Real-time calendar slot management, collision detection, and instant slot reservation holds.",
      highlight: "Conflict Prevention",
    },
    {
      name: "reservas",
      title: lang === "es" ? "Máquina de Estados de Reserva" : "Booking State Machine",
      desc:
        lang === "es"
          ? "Ciclo de vida estricto: pendiente, confirmada, completada, cancelada o reembolsada con reglas ADR 0004."
          : "Finite state machine: pending, confirmed, completed, cancelled, refunded with ADR 0004 minor safety rules.",
      highlight: "ADR 0004 Compliant",
    },
    {
      name: "pagos",
      title: lang === "es" ? "Pasarela Wompi & Liquidaciones" : "Wompi Gateway & Settlement",
      desc:
        lang === "es"
          ? "Fábrica abstracta de pasarela Wompi con soporte live/mock y generación automática de lotes semanales."
          : "Wompi gateway factory with live/mock fallback and automated weekly provider settlement batches.",
      highlight: "Automated Payouts",
    },
    {
      name: "reputacion",
      title: lang === "es" ? "Reputación Verificada" : "Verified Reputation",
      desc:
        lang === "es"
          ? "Sistema de calificaciones y reseñas únicamente habilitado tras reservas completadas satisfactoriamente."
          : "Verified review matrix unlocked only after successful booking completion.",
      highlight: "Zero Fraud Reviews",
    },
    {
      name: "mensajeria",
      title: lang === "es" ? "Mensajería por Solicitud" : "Threaded Request Chat",
      desc:
        lang === "es"
          ? "Canal de mensajería contextual aislado por solicitud con autorización granular independiente."
          : "Contextual chat channels scoped to specific reservation IDs with granular authorization.",
      highlight: "Scoped Auth",
    },
    {
      name: "notificaciones",
      title: lang === "es" ? "Notificaciones Multicanal" : "Multi-Channel Alerts",
      desc:
        lang === "es"
          ? "Integración de WhatsApp y correos transaccionales para alertas de caducidad e invitaciones."
          : "WhatsApp webhook notifier and transactional email dispatch for real-time customer and pro alerts.",
      highlight: "WhatsApp Notifier",
    },
  ];

  const workers = [
    {
      name: "Reloj 1: Caducidad",
      title: lang === "es" ? "Caducidad de Solicitudes" : "Request Caducity Clock",
      desc:
        lang === "es"
          ? "Cancela automáticamente solicitudes no respondidas tras 24h y libera los horarios."
          : "Auto-cancels unanswered reservation requests after 24h and frees the calendar slot.",
    },
    {
      name: "Reloj 2: Aviso WhatsApp",
      title: lang === "es" ? "Alerta de WhatsApp Previa" : "WhatsApp Expiry Warning",
      desc:
        lang === "es"
          ? "Avisa al profesional de forma idempotente entre 20h y 24h para evitar cancelaciones."
          : "Idempotently alerts the professional between 20h-24h to avoid expiration.",
    },
    {
      name: "Reloj 3: Autocompletado",
      title: lang === "es" ? "Autocompletado de Citas" : "Booking Auto-Completion",
      desc:
        lang === "es"
          ? "Marca citas como finalizadas al terminar el servicio y libera los fondos para liquidación."
          : "Marks sessions completed once service window closes and stages funds for payout.",
    },
    {
      name: "Reloj 4: Liquidación",
      title: lang === "es" ? "Lote de Liquidación Semanal" : "Weekly Settlement Batch",
      desc:
        lang === "es"
          ? "Calcula comisiones y genera el lote consolidado para transferencia a profesionales."
          : "Aggregates commissions and computes weekly payout batches for professional disbursement.",
    },
  ];

  return (
    <div className="border border-bone/20 bg-ink/75 backdrop-blur-md p-4 sm:p-5 md:p-7 shadow-2xl relative">
      {/* Scope corners */}
      <span className="tick-tl" />
      <span className="tick-br" />

      {/* Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-bone/20 pb-4 mb-5">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="bg-lime text-ink font-mono text-[9px] font-bold px-1.5 py-0.2 uppercase tracking-wider">
              {t.cases.flagshipBadge}
            </span>
            <span className="font-mono text-[9.5px] text-muted-foreground tracking-widest uppercase">
              // REPO: kailabs-workspace/oficia-platform
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-foreground">
            {t.home.flagshipProject.name}
          </h3>
          <p className="font-mono text-[11px] text-lime mt-0.5 tracking-wider">
            {t.home.flagshipProject.category}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://github.com/kailabs-workspace/oficia-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-bone/10 hover:bg-lime hover:text-ink text-foreground border border-bone/25 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-widest transition-all duration-300"
          >
            <ExternalLink className="w-3 h-3" />
            <span>{t.home.flagshipProject.githubBtn}</span>
          </a>
        </div>
      </div>

      {/* Overview & Key Results Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-5">
        {t.home.flagshipProject.keyResults.map((r) => (
          <div key={r.label} className="bg-ink/90 border border-bone/15 p-2.5 sm:p-3 relative">
            <div className="font-mono text-[8.5px] text-muted-foreground uppercase tracking-widest">
              {r.label}
            </div>
            <div className="font-display text-xl sm:text-2xl text-lime mt-0.5 font-bold">
              {r.val}
            </div>
          </div>
        ))}
      </div>

      {/* Main Architecture Deep Dive */}
      <div className="grid lg:grid-cols-12 gap-5 border-t border-bone/15 pt-5">
        {/* Left column: 8 Domain Modules Interactive Visualizer */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-foreground font-bold">
              <Layers className="w-3.5 h-3.5 text-lime" />
              <span>{t.home.flagshipProject.architectureTitle}</span>
            </div>
            <span className="font-mono text-[9px] text-muted-foreground">8 DOMAIN MODULES</span>
          </div>
          <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">
            {t.home.flagshipProject.architectureDesc}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-1">
            {modules.map((m, idx) => {
              const isSelected = selectedModule === idx;
              return (
                <button
                  key={m.name}
                  onClick={() => setSelectedModule(idx)}
                  className={`p-2 text-left border font-mono transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[60px] ${
                    isSelected
                      ? "border-lime bg-lime/10 text-foreground"
                      : "border-bone/15 bg-ink/50 text-muted-foreground hover:border-lime/40 hover:text-foreground"
                  }`}
                >
                  <span className="text-[9px] text-lime font-bold">0{idx + 1}</span>
                  <span className="font-semibold truncate text-[10px]">{m.name}</span>
                  <span className="text-[8px] text-muted-foreground/80 truncate">
                    {m.highlight}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Module Details Box */}
          <div className="bg-ink border border-lime/30 p-3 font-mono text-[11px] animate-fade-in relative mt-2">
            <div className="flex items-center justify-between border-b border-bone/15 pb-1.5 mb-1.5">
              <span className="text-lime font-bold uppercase tracking-wider flex items-center gap-1.5 text-[10.5px]">
                <Cpu className="w-3 h-3" />
                <span>src/modules/{modules[selectedModule].name}</span>
              </span>
              <span className="text-[9px] text-muted-foreground uppercase">
                {modules[selectedModule].title}
              </span>
            </div>
            <p className="text-foreground/90 text-[10.5px] leading-relaxed">
              {modules[selectedModule].desc}
            </p>
          </div>
        </div>

        {/* Right column: 4 Background Clocks (pg-boss) & Specs */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-foreground font-bold">
            <Clock className="w-3.5 h-3.5 text-lime" />
            <span>
              {lang === "es"
                ? "Motor Asíncrono de Workers (pg-boss)"
                : "pg-boss Async Worker Clocks"}
            </span>
          </div>

          <div className="space-y-1.5">
            {workers.map((w, i) => (
              <div
                key={w.name}
                className="border border-bone/15 bg-ink/60 p-2.5 hover:border-lime/40 transition-colors"
              >
                <div className="flex items-center justify-between font-mono text-[10px] mb-0.5">
                  <span className="text-lime font-bold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime led-active" />
                    {w.title}
                  </span>
                  <span className="text-[8px] text-muted-foreground uppercase">CLOCK_0{i + 1}</span>
                </div>
                <p className="font-mono text-[10px] text-muted-foreground leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Production Specs */}
          <div className="border-t border-bone/15 pt-3 mt-3 font-mono text-[10px] space-y-1">
            {t.home.flagshipProject.specs.map((s) => (
              <div key={s.label} className="flex justify-between text-muted-foreground">
                <span className="uppercase text-[9px]">{s.label}:</span>
                <span className="text-foreground font-semibold">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
