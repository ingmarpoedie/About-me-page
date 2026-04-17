"use client";

import React, { useEffect, useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        let timer: ReturnType<typeof setTimeout> | null = null;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const isVisible = entry.intersectionRatio >= 0.25;

                    if (isVisible) {
                        if (delay > 0) {
                            timer = setTimeout(() => {
                                entry.target.classList.add("visible");
                                timer = null;
                            }, delay);
                        } else {
                            entry.target.classList.add("visible");
                        }
                    } else {
                        if (timer) {
                            clearTimeout(timer);
                            timer = null;
                        }
                        entry.target.classList.remove("visible");
                    }
                });
            },
            {
                threshold: [0, 0.25, 0.5, 0.75, 1],
                rootMargin: "0px 0px -10% 0px",
            }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className={`reveal ${className}`}>
            {children}
        </div>
    );
}
