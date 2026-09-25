"use client";

import { useEffect } from "react";
import Reveal from "@/components/Reveal";
import RotatingBadge from "@/components/RotatingBadge";

export default function Hero() {
    useEffect(() => {
        const el = document.getElementById("heroVisual");
        if (!el) return;

        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
        if (prefersReduced || isCoarsePointer) return;

        let rafId = null;

        const handleMouseMove = (event) => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const rect = el.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;
                el.style.transform =
                    "perspective(1000px) rotateX(" + (-y * 4) + "deg) rotateY(" + (x * 6) + "deg)";
            });
        };

        const handleMouseLeave = () => {
            if (rafId) cancelAnimationFrame(rafId);
            el.style.transform = "none";
        };

        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-inner">
                <div className="hero-copy">
                    <Reveal as="p" type="fade-up" className="eyebrow">
                        Full Stack Developer
                    </Reveal>
                    <Reveal as="h1" type="fade-up" className="hero-title">
                        I build digital products that turn ideas into reality.
                    </Reveal>
                    <Reveal as="p" type="fade-up" className="hero-name">
                        Hussnain Naeem
                    </Reveal>
                    <Reveal as="p" type="fade-up" className="hero-sub">
                        Full Stack Developer focused on building modern, scalable and user-centered web applications.
                    </Reveal>
                    <Reveal type="fade-up" className="hero-actions">
                        <a href="#work" className="btn btn-primary">
                            View My Work <span aria-hidden="true">→</span>
                        </a>
                        <a href="#contact" className="btn btn-line">
                            Let's Connect <span aria-hidden="true">→</span>
                        </a>
                    </Reveal>
                </div>
                <Reveal type="fade-in" className="hero-visual" id="heroVisual" aria-hidden="true">
                    <div className="hero-grid"></div>
                    <div className="hero-orb"></div>
                    <div className="hero-photo">
                        <img src="/images/hussnain.png" alt="Hussnain Naeem" width="560" height="560" />
                    </div>
                    <div className="hero-card hero-card-1">
                        <span className="hero-card-label">Frontend</span>
                        <span className="hero-card-tag">React and JS</span>
                    </div>
                    <div className="hero-card hero-card-2">
                        <span className="hero-card-label">Backend</span>
                        <span className="hero-card-tag">Node and Express</span>
                    </div>
                    <div className="hero-card hero-card-3">
                        <span className="hero-card-label">Database</span>
                        <span className="hero-card-tag">MongoDB</span>
                    </div>
                    <div className="hero-badge">
                        <RotatingBadge size={112} />
                    </div>
                </Reveal>
            </div>
            <div className="scroll-cue">
                <span></span>Scroll
            </div>
        </section>
    );
}
