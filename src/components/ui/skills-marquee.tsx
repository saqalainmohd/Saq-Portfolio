"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const SkillsMarquee = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: string[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "200s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "300s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "400s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-5 py-6 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="group relative w-[max-content] flex-shrink-0 px-6 py-4 md:px-8 md:py-5 rounded-2xl cursor-pointer
                                   bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800
                                   border border-neutral-800 hover:border-purple-500/50
                                   shadow-lg hover:shadow-purple-500/20
                                   transition-all duration-300 ease-out
                                   hover:-translate-y-1 hover:scale-105"
                        key={item + idx}
                    >
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-indigo-500/0 to-blue-500/0 
                                        group-hover:from-purple-500/10 group-hover:via-indigo-500/5 group-hover:to-blue-500/10 
                                        transition-all duration-300" />

                        {/* Glow effect */}
                        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/0 via-indigo-500/0 to-blue-500/0 
                                        group-hover:from-purple-500/20 group-hover:via-indigo-500/20 group-hover:to-blue-500/20 
                                        blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                        <span className="relative z-10 text-sm md:text-base font-medium text-neutral-300 group-hover:text-white transition-colors duration-300">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
