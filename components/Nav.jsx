"use client";

import { useEffect, useRef, useState } from "react";
import useJsonData from "@/components/useJsonData";

export default function Nav() {
    const { data } = useJsonData("/data/site.json");

    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeHref, setActiveHref] = useState("");
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const navLinksRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 40);

            const scrollPos = window.scrollY + 140;
            const sections = document.querySelectorAll("main section[id]");
            sections.forEach((section) => {
                if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                    setActiveHref("#" + section.id);
                }
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        try {
            setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
        } catch (e) {
            /* noop */
        }
    }, []);

    useEffect(() => {
        const measurePill = () => {
            const container = navLinksRef.current;
            if (!container || !activeHref) return;
            const activeLink = container.querySelector('a[href="' + activeHref + '"]');
            if (!activeLink) return;
            setPillStyle({
                left: activeLink.offsetLeft,
                width: activeLink.offsetWidth,
                opacity: 1,
            });
        };

        measurePill();
        window.addEventListener("resize", measurePill);
        return () => window.removeEventListener("resize", measurePill);
    }, [activeHref, data]);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        if (next) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
        try {
            localStorage.setItem("theme", next ? "dark" : "light");
        } catch (e) {
            /* storage unavailable */
        }
    };

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    const brandName = data ? data.name : "Hussnain Naeem";
    const navItems = data ? data.nav : [];

    return (
        <header className={"nav" + (isScrolled ? " is-scrolled" : "")} id="siteNav">
            <div className="nav-inner">
                <a href="#home" className="nav-brand">
                    {brandName}
                </a>

                <nav className="nav-links" aria-label="Primary" ref={navLinksRef}>
                    <span
                        className="nav-pill"
                        aria-hidden="true"
                        style={{
                            transform: "translateX(" + pillStyle.left + "px)",
                            width: pillStyle.width + "px",
                            opacity: pillStyle.opacity,
                        }}
                    />
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={activeHref === item.href ? "active" : ""}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="nav-actions">
                    <button
                        className="theme-toggle"
                        type="button"
                        aria-label="Toggle dark mode"
                        onClick={toggleTheme}
                    >
                        {isDark ? "☀️" : "🌙"}
                    </button>
                    <a href="#contact" className="btn btn-line nav-cta">
                        Let's Talk <span aria-hidden="true">→</span>
                    </a>
                    <button
                        className={"menu-toggle" + (isMenuOpen ? " is-open" : "")}
                        type="button"
                        aria-label="Open menu"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        aria-controls="mobileMenu"
                        onClick={toggleMenu}
                    >
                        <span></span>
                    </button>
                </div>
            </div>

            <div className={"mobile-menu" + (isMenuOpen ? " is-open" : "")} id="mobileMenu">
                {navItems.map((item) => (
                    <a key={item.href} href={item.href} onClick={closeMenu}>
                        {item.label}
                    </a>
                ))}
                <a href="#contact" className="btn btn-primary" onClick={closeMenu}>
                    Let's Talk <span aria-hidden="true">→</span>
                </a>
            </div>
        </header>
    );
}
