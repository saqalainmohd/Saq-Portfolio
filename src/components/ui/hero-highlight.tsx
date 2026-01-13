"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const HeroHighlight = ({
    children,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    return (
        <div
            className={cn(
                "relative h-[40rem] flex items-center bg-black justify-center w-full",
                containerClassName
            )}
        >
            <div className={cn("relative z-20", className)}>{children}</div>
        </div>
    );
};


export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
                className
            )}
        >
            {children}
        </span>
    );
};
