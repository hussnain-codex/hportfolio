'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-reveal wrapper. Renders `as` (default div) with data-reveal="<type>"
 * and toggles the "is-visible" class once the element crosses the viewport,
 * matching the [data-reveal] rules in globals.css. Respects prefers-reduced-motion.
 *
 * type: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right'
 */
export default function Reveal({ as: Tag = 'div', type = 'fade-up', className = '', children, ...rest }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced || !('IntersectionObserver' in window)) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const classes = [className, visible ? 'is-visible' : ''].filter(Boolean).join(' ');

    return (
        <Tag ref={ref} data-reveal={type} className={classes} {...rest}>
            {children}
        </Tag>
    );
}
