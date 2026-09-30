import { useState } from "react";
import { useI18n } from "@/i18n";
import {
  Terminal as TerminalIcon,
  Play,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
} from "lucide-react";

export function InteractiveTransformationDemo() {
  const { t, lang } = useI18n();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([
    lang === "es"
      ? "[SISTEMA] Motor de Transformación AI-Native inicializado."
      : "[SYSTEM] AI-Native Transformation Engine initialized.",
    lang === "es"
      ? "[LISTO] Selecciona una fase del roadmap o ejecuta el benchmark integral."
      : "[READY] Select a roadmap phase or execute the full architectural benchmark.",
  ]);

  const steps = t.home.transformationSteps;

  const handleRunBenchmark = () => {
    setIsRunning(true);
    setConsoleOutput((prev) => [
      ...prev,
      lang === "es"
        ? "> INICIANDO AUDITORÍA INTEGRAL DE ARQUITECTURA & PROCESOS..."
        : "> INITIATING FULL ARCHITECTURE & PROCESS AUDIT...",
    ]);

    setTimeout(() => {
      setConsoleOutput((prev) => [
        ...prev,
        lang === "es"
          ? "✓ Mapeo de cuellos de botella: 18 tareas manuales aisladas en agendamiento y facturación."
          : "✓ Bottleneck discovery: 18 manual steps identified in scheduling and settlement.",
        lang === "es"
          ? "✓ Diseño de Monolito Modular: 8 módulos de dominio estructurados con Drizzle ORM."
          : "✓ Modular Monolith Blueprint: 8 domain modules structured with Drizzle ORM.",
      ]);
    }, 600);

    setTimeout(() => {
      setConsoleOutput((prev) => [
        ...prev,
        lang === "es"
          ? "✓ Relojes pg-boss en segundo plano: 4 colas transaccionales configuradas."
          : "✓ pg-boss worker clocks: 4 transactional background queues active.",
        lang === "es"
          ? "✓ Pipeline CI/CD listo: Type safety 100% estricto validado en TypeScript."
          : "✓ CI/CD Pipeline ready: 100% strict TypeScript type safety validated.",
        lang === "es"
          ? "▶ ESTADO: PLATAFORMA LISTA PARA PRODUCCIÓN CON CERO DEUDA TÉCNICA."
          : "▶ STATUS: PLATFORM READY FOR PRODUCTION WITH ZERO TECHNICAL DEBT.",
      ]);
      setIsRunning(false);
      setActiveStep(3);
    }, 1200);
  };

  return (
    <div className="border border-bone/20 bg-ink/65 backdrop-blur-md p-4 sm:p-5 md:p-6 shadow-xl">
      <div className="grid lg:grid-cols-12 gap-5">
        {/* Left Side: 4 Steps Workflow */}
        <div className="lg:col-span-7 space-y-3">
          <div className="font-mono text-[11px] text-lime uppercase tracking-widest flex items-center gap-1.5 mb-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-lime led-active" />
            <span>{t.home.transformationLifecycleLabel}</span>
          </div>

          <div className="space-y-2">
            {steps.map((s, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={s.id}
                  onClick={() => setActiveStep(idx)}
                  className={`border p-3 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-lime bg-lime/10 text-foreground"
                      : "border-bone/15 bg-ink/40 text-muted-foreground hover:border-lime/40 hover:bg-ink/70"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10.5px] mb-0.5">
                    <span className="text-lime font-bold">{s.phase}</span>
                    <span className="text-[9px] uppercase border px-1 py-0.2 border-bone/20 text-muted-foreground">
                      {s.status}
                    </span>
                  </div>

                  <h4 className="font-display text-base uppercase tracking-tight text-foreground">
                    {s.title}
                  </h4>
                  <p className="font-mono text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="mt-2 pt-1.5 border-t border-bone/10 flex flex-wrap items-center justify-between gap-1.5 font-mono text-[9.5px]">
                    <span className="text-lime font-semibold">▶ {s.metric}</span>
                    <div className="flex gap-1 text-muted-foreground">
                      {s.tech.map((tc) => (
                        <span key={tc} className="bg-ink px-1.5 py-0.2 border border-bone/10">
                          {tc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Interactive Simulation Terminal */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-ink border border-bone/20 p-3.5 crt-screen min-h-[340px]">
          <div className="crt-scanline" />

          <div>
            <div className="flex items-center justify-between border-b border-bone/20 pb-2 mb-3 font-mono text-[10px] uppercase tracking-widest">
              <span className="flex items-center gap-1.5 text-foreground font-bold">
                <TerminalIcon className="w-3.5 h-3.5 text-lime" />
                {t.home.transformationTerminal.title}
              </span>
              <span className="text-lime text-[9px] font-bold">
                {t.home.transformationTerminal.status}
              </span>
            </div>

            {/* Terminal Live Output Log */}
            <div className="space-y-1.5 font-mono text-[10.5px] leading-relaxed max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-lime/20 text-muted-foreground">
              {consoleOutput.map((line, idx) => (
                <div
                  key={idx}
                  className={`animate-fade-in ${
                    line.startsWith("▶")
                      ? "text-lime font-bold"
                      : line.startsWith("✓")
                        ? "text-foreground"
                        : line.startsWith(">")
                          ? "text-lime/90 font-semibold"
                          : "text-muted-foreground"
                  }`}
                >
                  {line}
                </div>
              ))}
              {isRunning && (
                <div className="text-lime flex items-center gap-1.5">
                  <span className="blink">▮</span>
                  <span className="text-[10px]">{t.home.transformationTerminal.runningMsg}</span>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-bone/15 pt-3 mt-4">
            <button
              onClick={handleRunBenchmark}
              disabled={isRunning}
              className="w-full bg-lime hover:bg-lime/90 text-ink font-mono text-[11px] font-bold py-2 uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer disabled:opacity-50 select-none tactile-shadow"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>{t.home.transformationTerminal.runAuditBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
