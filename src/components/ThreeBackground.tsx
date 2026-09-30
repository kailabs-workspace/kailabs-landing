import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/theme";

interface ThreeBackgroundProps {
  className?: string;
  interactive?: boolean;
}

// Pre-create reusable particle dot textures to eliminate any runtime canvas generation delay
function createDotTexture(colorHex: string): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = colorHex;
    ctx.fillRect(2, 2, 12, 12);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

export function ThreeBackground({ className = "", interactive = true }: ThreeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // Keep references to scene objects so theme updates are instant (0ms) without destroying WebGL context
  const materialsRef = useRef<{
    coreMat?: THREE.MeshBasicMaterial;
    innerMat?: THREE.MeshBasicMaterial;
    particleMat?: THREE.PointsMaterial;
    darkDotTexture?: THREE.CanvasTexture;
    lightDotTexture?: THREE.CanvasTexture;
  }>({});

  // 1. Instant Theme Color Reaction (0ms without WebGL rebuild)
  useEffect(() => {
    const { coreMat, innerMat, particleMat, darkDotTexture, lightDotTexture } =
      materialsRef.current;
    if (!coreMat || !innerMat || !particleMat) return;

    const isDarkMode = document.documentElement.classList.contains("light")
      ? false
      : theme === "dark" || document.documentElement.classList.contains("dark");
    const meshColor = isDarkMode ? 0xd4f542 : 0x0a0a0a;
    const meshOpacity = isDarkMode ? 0.18 : 0.24;
    const innerOpacity = isDarkMode ? 0.35 : 0.42;
    const particleColor = isDarkMode ? 0xd4f542 : 0x2a2a28;

    coreMat.color.setHex(meshColor);
    coreMat.opacity = meshOpacity;
    innerMat.color.setHex(meshColor);
    innerMat.opacity = innerOpacity;
    particleMat.color.setHex(particleColor);
    particleMat.map = isDarkMode ? darkDotTexture || null : lightDotTexture || null;
    particleMat.needsUpdate = true;
  }, [theme]);

  // 2. High-Performance WebGL Lifecycle (Mounted Once, Renders Frame 0 Instantly)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Instant dimension resolver
    const rect = container.getBoundingClientRect();
    const width = Math.max(
      container.clientWidth || 0,
      container.offsetWidth || 0,
      rect.width || 0,
      800,
    );
    const height = Math.max(
      container.clientHeight || 0,
      container.offsetHeight || 0,
      rect.height || 0,
      420,
    );

    const isDarkMode = document.documentElement.classList.contains("light")
      ? false
      : theme === "dark" || document.documentElement.classList.contains("dark");
    const meshColor = isDarkMode ? 0xd4f542 : 0x0a0a0a;
    const meshOpacity = isDarkMode ? 0.18 : 0.24;
    const innerOpacity = isDarkMode ? 0.35 : 0.42;
    const particleColor = isDarkMode ? 0xd4f542 : 0x2a2a28;

    // A. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 28;

    // B. Ultra-Fast WebGL Renderer (No MSAA overhead, mediump fast path, 0ms startup)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
      precision: "mediump",
      stencil: false,
      depth: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // C. Particle setup
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 32 : 72;

    // Central Wireframe Icosahedron
    const coreGeometry = new THREE.IcosahedronGeometry(7, isMobile ? 1 : 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: meshColor,
      wireframe: true,
      transparent: true,
      opacity: meshOpacity,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // Inner Octahedron Core
    const innerGeometry = new THREE.OctahedronGeometry(4.2, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: meshColor,
      wireframe: true,
      transparent: true,
      opacity: innerOpacity,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerMesh);

    // Floating Data Particles
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const scaleArray = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 10 + Math.random() * 22;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = radius * Math.cos(phi);
      scaleArray[i / 3] = Math.random() * 0.8 + 0.2;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const darkDotTexture = createDotTexture("#D4F542");
    const lightDotTexture = createDotTexture("#0A0A0A");

    const particleMat = new THREE.PointsMaterial({
      size: isMobile ? 0.35 : 0.45,
      map: isDarkMode ? darkDotTexture : lightDotTexture,
      transparent: true,
      opacity: isDarkMode ? 0.55 : 0.65,
      color: particleColor,
      blending: isDarkMode ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Store in ref for instant theme updates
    materialsRef.current = {
      coreMat: coreMaterial,
      innerMat: innerMaterial,
      particleMat,
      darkDotTexture,
      lightDotTexture,
    };

    // Synchronous Frame 0 Render (Instant Paint at 0ms)
    renderer.render(scene, camera);

    // D. Mouse / Touch Parallax
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!interactive) return;
      let clientX = 0;
      let clientY = 0;

      if ("touches" in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ("clientX" in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      targetX = (x / (container.clientWidth || width) - 0.5) * 2;
      targetY = -(y / (container.clientHeight || height) - 0.5) * 2;
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });

    // E. Handle Dynamic Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || container.offsetWidth || width;
      const newHeight = container.clientHeight || container.offsetHeight || height;
      if (newWidth <= 0 || newHeight <= 0) return;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.render(scene, camera);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    window.addEventListener("resize", handleResize);

    // F. Visibility Observer
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    observer.observe(container);

    // G. Animation Loop with Zero-Gravity Float Levitation
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth damping interpolation (Lerp)
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      // Zero-Gravity Floating Harmonic Oscillation (Levitation)
      const floatY = Math.sin(elapsedTime * 1.4) * 1.15;
      const floatTilt = Math.cos(elapsedTime * 1.1) * 0.04;
      const innerFloatY = Math.sin(elapsedTime * 1.4 + 0.5) * 0.95;

      // Rotate and float geometric core
      coreMesh.position.y = floatY;
      coreMesh.rotation.x = elapsedTime * 0.12 + mouseY * 0.3 + floatTilt;
      coreMesh.rotation.y = elapsedTime * 0.18 + mouseX * 0.4;

      innerMesh.position.y = innerFloatY;
      innerMesh.rotation.x = -elapsedTime * 0.2 - mouseY * 0.2;
      innerMesh.rotation.y = -elapsedTime * 0.25 - mouseX * 0.3;

      // Pulse particle cloud
      particles.position.y = floatY * 0.35;
      particles.rotation.y = elapsedTime * 0.05 + mouseX * 0.15;
      particles.rotation.x = mouseY * 0.1;

      // Camera parallax
      camera.position.x = mouseX * 2.5;
      camera.position.y = mouseY * 2.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // H. Cleanup & Disposals
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("resize", handleResize);

      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      darkDotTexture.dispose();
      lightDotTexture.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
}
