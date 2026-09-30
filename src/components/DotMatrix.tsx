import { useEffect, useRef } from "react";

export function DotMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const isMobile = window.innerWidth < 768;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const SPACING = isMobile ? 32 : 28;
    const RADIUS = isMobile ? 80 : 110;

    type Dot = { x: number; y: number; ox: number; oy: number; vx: number; vy: number };
    let dots: Dot[] = [];
    let isMoving = true;
    let idleCounter = 0;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
      dots = [];
      for (let x = SPACING / 2; x < window.innerWidth; x += SPACING) {
        for (let y = SPACING / 2; y < window.innerHeight; y += SPACING) {
          dots.push({ x, y, ox: x, oy: y, vx: 0, vy: 0 });
        }
      }
      isMoving = true;
      idleCounter = 0;
    };

    const wakeUp = () => {
      isMoving = true;
      idleCounter = 0;
      if (!raf) {
        raf = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      wakeUp();
    };
    const onLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const tick = () => {
      const isLight = document.documentElement.classList.contains("light");
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const { x: mx, y: my } = mouseRef.current;
      let totalMovement = 0;

      for (const d of dots) {
        const dx = d.x - mx;
        const dy = d.y - my;
        const dist = Math.hypot(dx, dy);
        let glow = 0;

        if (dist < RADIUS) {
          const force = (1 - dist / RADIUS) * 6;
          const angle = Math.atan2(dy, dx);
          d.vx += Math.cos(angle) * force * 0.15;
          d.vy += Math.sin(angle) * force * 0.15;
          glow = 1 - dist / RADIUS;
        }

        // spring back
        d.vx += (d.ox - d.x) * 0.08;
        d.vy += (d.oy - d.y) * 0.08;
        d.vx *= 0.78;
        d.vy *= 0.78;
        d.x += d.vx;
        d.y += d.vy;

        totalMovement += Math.abs(d.vx) + Math.abs(d.vy);

        const r = 1 + glow * 1.5;
        if (glow > 0.05) {
          ctx.fillStyle = isLight
            ? `rgba(10, 10, 10, ${0.4 + glow * 0.55})`
            : `rgba(212, 245, 66, ${0.25 + glow * 0.75})`;
        } else {
          ctx.fillStyle = isLight ? "rgba(10,10,10,0.065)" : "rgba(255,255,255,0.07)";
        }
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Check if settled to save CPU/GPU cycles on slow devices
      if (mx === -9999 && totalMovement < 0.05) {
        idleCounter++;
        if (idleCounter > 40) {
          isMoving = false;
          raf = 0;
          return; // pause RAF loop until next pointer activity
        }
      } else {
        idleCounter = 0;
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
  );
}
