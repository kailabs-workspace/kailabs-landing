import { useEffect, useState } from "react";

export function AgentMascot({ 
  className = "w-full h-full", 
  interactive = true 
}: { 
  className?: string; 
  interactive?: boolean; 
}) {
  const [blink, setBlink] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!interactive) return;
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, 3200 + Math.random() * 3000);

    return () => clearInterval(interval);
  }, [interactive]);

  return (
    <div 
      className="relative select-none w-full h-full flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Target scope corner decorations inside the frame */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-ink/40 pointer-events-none" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-ink/40 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-ink/40 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-ink/40 pointer-events-none" />

      {/* Grid pattern subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--ink)_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

      <svg 
        viewBox="0 0 200 200" 
        className={`${className} transition-transform duration-500 ease-out ${hovered ? "scale-105" : "scale-100"}`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="var(--ink)" className="transition-all duration-300">
          {/* Hat group with subtle hover rotation & vertical drift */}
          <g 
            style={{
              transform: hovered 
                ? "translateY(-4px) rotate(-10deg)" 
                : "translateY(0px) rotate(-8deg)",
              transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              transformOrigin: "100px 78px"
            }}
          >
            {/* Hat Crown */}
            <path d="M55 75 Q62 38 110 42 Q150 46 148 76 Z" />
            {/* Hat Brim */}
            <ellipse cx="100" cy="78" rx="78" ry="9" />
            {/* Hat Band (Lime highlight instead of blank) */}
            <path d="M42 77 Q60 72 100 73 Q140 74 156 75 C156 75 154 78 152 78 Q100 76 44 79 Z" fill="var(--lime)" />
          </g>

          {/* Body/Head (Unified stylized form) */}
          <path d="M50 115 C50 100 70 85 100 85 C130 85 140 98 140 115 L140 160 L50 160 Z" />

          {/* Beak/Snout block (Left facing detective collar/profile) */}
          <path d="M72 102 L42 110 L58 122 L76 118 Z" />

          {/* Wing bars on the right (3 flat horizontal bars - stencil cut) */}
          <g className="transition-transform duration-300" style={{ transform: hovered ? "translateX(4px)" : "translateX(0px)" }}>
            <path d="M125 96 L165 96 L165 104 L125 104 Z" />
            <path d="M122 112 L160 112 L160 120 L122 120 Z" />
            <path d="M120 128 L152 128 L152 136 L120 136 Z" />
          </g>

          {/* Tail block (Flared tail fin at bottom) */}
          <path d="M85 160 L115 160 L128 185 L72 185 Z" />
        </g>

        {/* Dynamic eye coordinate changes for blinking / looking around */}
        <ellipse 
          cx={hovered ? "74" : "70"} 
          cy="106" 
          rx="3.5" 
          ry={blink ? "0.5" : "3.5"} 
          fill="var(--lime)" 
          className="transition-all duration-75"
        />
      </svg>

      {/* Active telemetry readouts around the frame */}
      <span className="absolute bottom-1 right-2 font-mono text-[8px] opacity-40 uppercase tracking-widest hidden md:block">
        sys.op // Active
      </span>
      <span className="absolute top-1 left-2 font-mono text-[8px] opacity-40 uppercase tracking-widest hidden md:block">
        dossier.047
      </span>
    </div>
  );
}
