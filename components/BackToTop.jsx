"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={"back-to-top" + (isVisible ? " is-visible" : "")}
            id="backToTop"
            type="button"
            aria-label="Back to top"
            onClick={handleClick}
        >
            ↑
        </button>
    );
}
