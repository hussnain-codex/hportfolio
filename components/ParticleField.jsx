"use client";

import { useEffect, useRef } from "react";
import styles from "./ParticleField.module.css";

const FALLBACK_RGB = "120, 115, 105";

/**
 * Parses a CSS color string (#hex, #hexhex, or rgb/rgba(...)) into an
 * "r, g, b" component string usable inside rgba(). Falls back to a
 * neutral mid-gray when the input can't be parsed.
 */
function parseColorToRgbTriplet(value, fallback) {
  if (!value) return fallback;
  const v = value.trim();

  let match = v.match(/^#([0-9a-fA-F]{3})$/);
  if (match) {
    const hex = match[1];
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    return `${r}, ${g}, ${b}`;
  }

  match = v.match(/^#([0-9a-fA-F]{6})$/);
  if (match) {
    const hex = match[1];
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  }

  match = v.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
  if (match) {
    return `${match[1]}, ${match[2]}, ${match[3]}`;
  }

  return fallback;
}

export default function ParticleField({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let particles = [];
    let rafId = null;
    let colors = { ink: FALLBACK_RGB, accent: FALLBACK_RGB };

    function readColors() {
      const computed = getComputedStyle(document.documentElement);
      const inkSoft = computed.getPropertyValue("--color-ink-soft");
      const accent = computed.getPropertyValue("--color-accent");
      colors = {
        ink: parseColorToRgbTriplet(inkSoft, FALLBACK_RGB),
        accent: parseColorToRgbTriplet(accent, FALLBACK_RGB),
      };
    }

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    function createParticles() {
      const count = window.innerWidth > 768 ? 46 : 22;
      const next = [];
      for (let i = 0; i < count; i++) {
        next.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 1 + Math.random() * 1.2,
          vx: (Math.random() - 0.5) * 0.24,
          vy: (Math.random() - 0.5) * 0.24,
          o: 0.15 + Math.random() * 0.35,
          accent: i % 12 === 0,
        });
      }
      particles = next;
    }

    function drawFrame(animate) {
      ctx.clearRect(0, 0, width, height);
      const margin = 10;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (animate) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < -margin) p.x = width + margin;
          else if (p.x > width + margin) p.x = -margin;

          if (p.y < -margin) p.y = height + margin;
          else if (p.y > height + margin) p.y = -margin;
        }

        const rgb = p.accent ? colors.accent : colors.ink;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${rgb}, ${p.o})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop() {
      drawFrame(true);
      rafId = requestAnimationFrame(loop);
    }

    function stopLoop() {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    function startLoop() {
      if (prefersReducedMotion) {
        drawFrame(false);
        return;
      }
      if (rafId === null && !document.hidden) {
        rafId = requestAnimationFrame(loop);
      }
    }

    function handleResize() {
      resizeCanvas();
      createParticles();
      if (prefersReducedMotion) {
        drawFrame(false);
      }
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        stopLoop();
      } else {
        startLoop();
      }
    }

    readColors();
    resizeCanvas();
    createParticles();
    startLoop();

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const themeObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          readColors();
          if (prefersReducedMotion) {
            drawFrame(false);
          }
          break;
        }
      }
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      stopLoop();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
      themeObserver.disconnect();
    };
  }, []);

  const canvasClassName = className
    ? `${styles.canvas} ${className}`
    : styles.canvas;

  return (
    <canvas ref={canvasRef} aria-hidden="true" className={canvasClassName} />
  );
}
