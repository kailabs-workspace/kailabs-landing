import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "@/theme";

interface PerpendicularTransitionProps {
  pathname: string;
  children: React.ReactNode;
}

export function PerpendicularTransition({ pathname, children }: PerpendicularTransitionProps) {
  const [prevPath, setPrevPath] = useState(pathname);
  const [transitionId, setTransitionId] = useState<number | null>(null);
  const isFirstMount = useRef(true);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Synchronously catch route changes during render to avoid any 1-frame paint delay
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    if (!isFirstMount.current) {
      setTransitionId(Date.now());
    }
  }

  useEffect(() => {
    isFirstMount.current = false;
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Route Content */}
      <div key={`view-${pathname}`} className="w-full min-h-screen">
        {children}
      </div>

      {/* Perpendicular Shutter Slide Transition (Dry & Crisp Laser Sweep) */}
      <AnimatePresence mode="wait">
        {transitionId && (
          <motion.div
            key={`shutter-overlay-${transitionId}`}
            className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
          >
            {/* Trailing Sub-blade */}
            <motion.div
              initial={{ translateX: "0%" }}
              animate={{ translateX: "100%" }}
              transition={{
                duration: 0.42,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.02,
              }}
              className={`absolute inset-0 backdrop-blur-xs ${
                isDark
                  ? "bg-lime/10 border-l-2 border-lime/40"
                  : "bg-[#E8E4D6]/70 border-l-2 border-[#0A0A0A]/30"
              }`}
            />

            {/* Primary Mechanical Shutter (Opaque Ink/Cream + Tactical Grid) */}
            <motion.div
              initial={{ translateX: "0%" }}
              animate={{ translateX: "100%" }}
              transition={{
                duration: 0.38,
                ease: [0.76, 0, 0.24, 1],
              }}
              onAnimationComplete={() => {
                setTransitionId(null);
              }}
              className={`absolute inset-0 ${
                isDark
                  ? "bg-[#0A0A0A] border-l-2 border-lime shadow-[-10px_0_30px_rgba(212,245,66,0.35)]"
                  : "bg-[#F4F1E8] border-l-2 border-[#0A0A0A] shadow-[-10px_0_30px_rgba(10,10,10,0.18)]"
              }`}
            >
              {/* Tactical Scanline Grid */}
              <div
                className={`absolute inset-0 ${
                  isDark
                    ? "opacity-25 bg-[radial-gradient(#D4F542_1px,transparent_1px)]"
                    : "opacity-20 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)]"
                } [background-size:16px_16px]`}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
