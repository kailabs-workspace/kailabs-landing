import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function DotMatrix() {
  const canvasRef = reactExports.useRef(null);
  const mouseRef = reactExports.useRef({ x: -9999, y: -9999 });
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const SPACING = 28;
    const RADIUS = 110;
    let dots = [];
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
    };
    const onMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const onLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };
    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const { x: mx, y: my } = mouseRef.current;
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
        d.vx += (d.ox - d.x) * 0.08;
        d.vy += (d.oy - d.y) * 0.08;
        d.vx *= 0.78;
        d.vy *= 0.78;
        d.x += d.vx;
        d.y += d.vy;
        const r = 1 + glow * 1.5;
        if (glow > 0.05) {
          ctx.fillStyle = `rgba(212, 245, 66, ${0.25 + glow * 0.75})`;
        } else {
          ctx.fillStyle = "rgba(255,255,255,0.07)";
        }
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    resize();
    tick();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "pointer-events-none fixed inset-0 z-0",
      "aria-hidden": "true"
    }
  );
}
export {
  DotMatrix as D
};
