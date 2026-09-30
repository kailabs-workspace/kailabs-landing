import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "@/i18n";
import {
  Layers,
  Clock,
  Zap,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  ArrowRight,
  Cpu,
} from "lucide-react";

export function InteractiveStorytelling() {
  const { t } = useI18n();
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const chapters = t.home.storyChapters;
  const activeChapter = chapters[currentIdx];

  // Auto-advance through chapters when isPlaying is true
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % chapters.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, chapters.length]);

  return (
    <div
      className="border border-bone/20 bg-ink/75 backdrop-blur-md p-4 sm:p-5 md:p-7 corner-ticks relative shadow-2xl overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <span className="tick-tl" />
      <span className="tick-br" />

      {/* Top Header & Progress Stepper */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-bone/20 pb-3.5 mb-5">
        <div>
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-lime uppercase tracking-widest mb-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-lime led-active" />
            <span>{t.home.storyTag}</span>
          </div>
          <h3 className="font-display text-xl md:text-2xl uppercase text-foreground">
            {t.home.storyTitle}
          </h3>
        </div>

        {/* Play / Pause & Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider border border-bone/20 bg-ink px-2.5 py-1 text-muted-foreground hover:text-lime hover:border-lime transition-colors cursor-pointer"
            aria-label={isPlaying ? t.home.storyControls.paused : t.home.storyControls.auto}
          >
            {isPlaying ? (
              <>
                <Pause className="w-2.5 h-2.5 text-lime" />
                <span>{t.home.storyControls.auto}</span>
              </>
            ) : (
              <>
                <Play className="w-2.5 h-2.5 text-lime" />
                <span>{t.home.storyControls.paused}</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentIdx((prev) => (prev === 0 ? chapters.length - 1 : prev - 1))}
              className="w-6.5 h-6.5 border border-bone/20 bg-ink flex items-center justify-center text-muted-foreground hover:text-lime hover:border-lime transition-colors cursor-pointer"
              aria-label={t.home.storyControls.prevAria}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setCurrentIdx((prev) => (prev + 1) % chapters.length)}
              className="w-6.5 h-6.5 border border-bone/20 bg-ink flex items-center justify-center text-muted-foreground hover:text-lime hover:border-lime transition-colors cursor-pointer"
              aria-label={t.home.storyControls.nextAria}
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Chapter Progress Nav Bar */}
      <div className="grid grid-cols-4 gap-1.5 mb-5">
        {chapters.map((chap, idx) => {
          const isActive = currentIdx === idx;
          return (
            <button
              key={chap.id}
              onClick={() => setCurrentIdx(idx)}
              className={`p-2 text-left border font-mono transition-all duration-300 cursor-pointer relative overflow-hidden ${
                isActive
                  ? "border-lime bg-lime/10 text-foreground"
                  : "border-bone/15 bg-ink/40 text-muted-foreground hover:border-bone/40 hover:text-foreground"
              }`}
            >
              <div className="flex items-center justify-between text-[9px] mb-0.5">
                <span className={isActive ? "text-lime font-bold" : "text-muted-foreground"}>
                  0{idx + 1}
                </span>
                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-lime led-active" />}
              </div>
              <div className="font-semibold truncate text-[10px]">{chap.state}</div>

              {/* Progress bar line for active slide */}
              {isActive && isPlaying && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-lime"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  key={`progress-${idx}`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Chapter Content: Animated Narrative & Interactive HUD */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeChapter.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid lg:grid-cols-12 gap-5 items-stretch"
        >
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-[11px] text-lime font-bold tracking-widest">
                  // {activeChapter.chapter}
                </span>
                <span className="font-mono text-[8.5px] px-1.5 py-0.2 bg-lime/10 border border-lime/30 text-lime uppercase">
                  {activeChapter.badge}
                </span>
              </div>

              <h4 className="font-display text-xl md:text-2xl uppercase text-foreground mb-2.5">
                {activeChapter.title}
              </h4>

              <p className="font-mono text-[11px] md:text-xs text-muted-foreground leading-relaxed">
                {activeChapter.description}
              </p>
            </div>

            {/* Metrics & Tech Bar */}
            <div className="pt-3 border-t border-bone/15 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="font-display text-xl md:text-2xl text-lime font-bold">
                  {activeChapter.metricValue}
                </div>
                <div className="font-mono text-[8.5px] text-muted-foreground uppercase tracking-widest">
                  {activeChapter.metricLabel}
                </div>
              </div>

              <div className="font-mono text-[10px] px-2.5 py-1 bg-graphite/40 border border-bone/20 text-bone">
                {activeChapter.techPill}
              </div>
            </div>
          </div>

          {/* Right Visual State HUD Card */}
          <div className="lg:col-span-5 border border-bone/20 bg-ink p-3.5 flex flex-col justify-between crt-screen min-h-[220px]">
            <div className="crt-scanline" />

            {/* Dynamic Interactive Visuals for each stage */}
            {currentIdx === 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-signal font-mono text-[9px] uppercase border-b border-bone/15 pb-1.5">
                  <span>{t.home.storyHud.stage1.state}</span>
                  <span>{t.home.storyHud.stage1.bottleneck}</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 font-mono text-[10.5px]">
                  <div className="border border-signal/40 bg-signal/5 p-2 text-signal">
                    <div className="text-[9px] font-bold uppercase mb-0.5">
                      {t.home.storyHud.stage1.manualTitle}
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      {t.home.storyHud.stage1.manualDesc}
                    </div>
                  </div>
                  <div className="border border-signal/40 bg-signal/5 p-2 text-signal">
                    <div className="text-[9px] font-bold uppercase mb-0.5">
                      {t.home.storyHud.stage1.disconnectTitle}
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      {t.home.storyHud.stage1.disconnectDesc}
                    </div>
                  </div>
                </div>
                <div className="text-muted-foreground font-mono text-[9px] flex items-center gap-1">
                  <Clock className="w-3 h-3 text-signal" />
                  <span>{t.home.storyHud.stage1.avgTime}</span>
                </div>
              </div>
            )}

            {currentIdx === 1 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-lime font-mono text-[9px] uppercase border-b border-bone/15 pb-1.5">
                  <span>{t.home.storyHud.stage2.state}</span>
                  <span>{t.home.storyHud.stage2.typeSafe}</span>
                </div>
                <div className="grid grid-cols-4 gap-1 font-mono text-[9px]">
                  {t.home.storyHud.stage2.modules.map((mod) => (
                    <div
                      key={mod}
                      className="border border-lime/30 bg-lime/5 p-1 text-center text-foreground font-semibold truncate"
                    >
                      {mod}
                    </div>
                  ))}
                </div>
                <div className="text-muted-foreground font-mono text-[9px] flex items-center gap-1">
                  <Layers className="w-3 h-3 text-lime" />
                  <span>{t.home.storyHud.stage2.isolatedNote}</span>
                </div>
              </div>
            )}

            {currentIdx === 2 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-lime font-mono text-[9px] uppercase border-b border-bone/15 pb-1.5">
                  <span>{t.home.storyHud.stage3.state}</span>
                  <span>{t.home.storyHud.stage3.async}</span>
                </div>
                <div className="space-y-1 font-mono text-[10px]">
                  <div className="border border-lime/30 bg-lime/5 p-1.5 flex items-center justify-between">
                    <span>{t.home.storyHud.stage3.clock1}</span>
                    <span className="text-lime font-bold">AUTO</span>
                  </div>
                  <div className="border border-lime/30 bg-lime/5 p-1.5 flex items-center justify-between">
                    <span>{t.home.storyHud.stage3.clock2}</span>
                    <span className="text-lime font-bold">DISPATCH</span>
                  </div>
                  <div className="border border-lime/30 bg-lime/5 p-1.5 flex items-center justify-between">
                    <span>{t.home.storyHud.stage3.clock3}</span>
                    <span className="text-lime font-bold">BATCH</span>
                  </div>
                </div>
                <div className="text-muted-foreground font-mono text-[9px] flex items-center gap-1">
                  <Zap className="w-3 h-3 text-lime" />
                  <span>{t.home.storyHud.stage3.note}</span>
                </div>
              </div>
            )}

            {currentIdx === 3 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-lime font-mono text-[9px] uppercase border-b border-bone/15 pb-1.5">
                  <span>{t.home.storyHud.stage4.state}</span>
                  <span>{t.home.storyHud.stage4.velocity}</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 font-mono text-xs">
                  <div className="border border-lime/40 bg-lime/10 p-2.5">
                    <div className="text-display text-xl font-bold text-lime">99.9%</div>
                    <div className="text-[9px] text-muted-foreground uppercase">
                      {t.home.storyHud.stage4.uptimeLabel}
                    </div>
                  </div>
                  <div className="border border-lime/40 bg-lime/10 p-2.5">
                    <div className="text-display text-xl font-bold text-lime">100%</div>
                    <div className="text-[9px] text-muted-foreground uppercase">
                      {t.home.storyHud.stage4.ipLabel}
                    </div>
                  </div>
                </div>
                <div className="text-lime font-mono text-[9px] flex items-center gap-1 font-bold">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{t.home.storyHud.stage4.note}</span>
                </div>
              </div>
            )}

            {/* Visual HUD Footer */}
            <div className="border-t border-bone/15 pt-1.5 mt-3 flex items-center justify-between font-mono text-[8.5px] text-muted-foreground uppercase">
              <span>{t.home.storyHud.telemetry}</span>
              <span className="text-lime">
                {t.home.storyHud.phaseLabel.replace("{current}", String(currentIdx + 1))}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
