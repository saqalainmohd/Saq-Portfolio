"use client";

import { cn } from "@/lib/utils";

export const CodeSnippet = ({
    code,
    language = "typescript",
    filename,
    className,
}: {
    code: string;
    language?: string;
    filename?: string;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "rounded-xl overflow-hidden bg-[#1e1e1e] border border-neutral-800 shadow-2xl",
                className
            )}
        >
            {filename && (
                <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-neutral-800">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        <span className="ml-2 text-xs text-neutral-400 font-mono">
                            {filename}
                        </span>
                    </div>
                    <span className="text-xs text-neutral-500 font-mono uppercase">
                        {language}
                    </span>
                </div>
            )}
            <div className="p-4 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed text-neutral-300">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
};
