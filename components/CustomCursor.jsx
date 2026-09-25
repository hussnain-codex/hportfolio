"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"], .theme-toggle, .work-preview, .more-card, .project-card, [data-cursor]';

const IDLE_DELAY = 700;
const RING_EASE = 0.18;
const SPIN_SPEED = 0.35;

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const spinnerRef = useRef(null);
  const labelRef = useRef(null);
  const rippleLayerRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || prefersReducedMotion) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const spinner = spinnerRef.current;
    const label = labelRef.current;
    const rippleLayer = rippleLayerRef.current;
    if (!dot || !ring || !spinner || !label || !rippleLayer) return undefined;

    document.body.classList.add("has-custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let prevRingX = ringX;
    let prevRingY = ringY;
    let spinAngle = 0;
    let rafId = null;
    let hasMoved = false;
    let lastMoveTs = performance.now();
    let isHovering = false;
    let isDown = false;
    let isIdle = false;
    let currentMatch = null;

    function show() {
      dot.classList.add(styles.visible);
      ring.classList.add(styles.visible);
      spinner.classList.add(styles.visible);
    }

    function hide() {
      dot.classList.remove(styles.visible);
      ring.classList.remove(styles.visible);
      spinner.classList.remove(styles.visible);
      label.classList.remove(styles.visible);
    }

    function handleMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      lastMoveTs = performance.now();
      if (isIdle) {
        isIdle = false;
        ring.classList.remove(styles.idle);
      }
      if (!hasMoved) {
        hasMoved = true;
        show();
      }
    }

    function applyHover(match) {
      currentMatch = match;
      isHovering = true;
      ring.classList.add(styles.hover);
      dot.classList.add(styles.hover);
      spinner.classList.add(styles.hover);
      const text = match.getAttribute("data-cursor");
      if (text) {
        label.textContent = text;
        label.classList.add(styles.visible);
      }
    }

    function clearHover() {
      currentMatch = null;
      isHovering = false;
      ring.classList.remove(styles.hover);
      dot.classList.remove(styles.hover);
      spinner.classList.remove(styles.hover);
      label.classList.remove(styles.visible);
    }

    function handleMouseOver(e) {
      const match = e.target.closest && e.target.closest(INTERACTIVE_SELECTOR);
      if (match && match !== currentMatch) applyHover(match);
    }

    function handleMouseOut(e) {
      if (!currentMatch) return;
      const leavingMatch = e.target.closest && e.target.closest(INTERACTIVE_SELECTOR);
      if (leavingMatch !== currentMatch) return;
      const related = e.relatedTarget;
      const stillInside =
        related && related.closest && related.closest(INTERACTIVE_SELECTOR) === currentMatch;
      if (!stillInside) clearHover();
    }

    function spawnRipple(x, y) {
      const el = document.createElement("span");
      el.className = styles.ripple;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      rippleLayer.appendChild(el);
      const remove = () => el.remove();
      el.addEventListener("animationend", remove, { once: true });
      setTimeout(remove, 700);
    }

    function handleMouseDown(e) {
      isDown = true;
      ring.classList.add(styles.down);
      dot.classList.add(styles.down);
      spawnRipple(e.clientX, e.clientY);
    }

    function handleMouseUp() {
      isDown = false;
      ring.classList.remove(styles.down);
      dot.classList.remove(styles.down);
    }

    function handleLeaveWindow() {
      hide();
    }

    function loop() {
      ringX += (mouseX - ringX) * RING_EASE;
      ringY += (mouseY - ringY) * RING_EASE;

      const dx = ringX - prevRingX;
      const dy = ringY - prevRingY;
      prevRingX = ringX;
      prevRingY = ringY;

      const speed = Math.min(Math.hypot(dx, dy), 26);
      let ringTransform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      if (!isHovering && !isDown && speed > 0.4) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        const stretch = 1 + speed * 0.045;
        const squash = 1 / Math.sqrt(stretch);
        ringTransform += ` rotate(${angle}deg) scale(${stretch}, ${squash})`;
      }

      ring.style.transform = ringTransform;
      label.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      spinAngle = (spinAngle + SPIN_SPEED) % 360;
      spinner.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) rotate(${spinAngle}deg)`;

      const idleNow = performance.now() - lastMoveTs > IDLE_DELAY && !isHovering && !isDown;
      if (idleNow !== isIdle) {
        isIdle = idleNow;
        ring.classList.toggle(styles.idle, isIdle);
      }

      rafId = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleLeaveWindow);
    rafId = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleLeaveWindow);
    };
  }, []);

  return (
    <>
      <div ref={rippleLayerRef} className={styles.rippleLayer} aria-hidden="true" />
      <div ref={spinnerRef} className={styles.spinner} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
      <div ref={labelRef} className={styles.label} aria-hidden="true" />
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
    </>
  );
}
