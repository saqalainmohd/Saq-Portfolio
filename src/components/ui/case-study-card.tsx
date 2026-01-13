"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { MagneticButton } from "@/components/ui/magnetic-button";

interface CaseStudyCardProps {
    title: string;
    description: string;
    banner: string;
    icon: string;
    link?: string;
    slug?: string;
    tags?: string[];
    className?: string;
}

export const CaseStudyCard = ({
    title,
    description,
    banner,
    icon,
    link,
    slug,
    tags,
    className,
}: CaseStudyCardProps) => {
    return (
        <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.02} transitionSpeed={2000} className={className}>
            <div className="relative h-full w-full group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
                <motion.div
                    layoutId={slug ? `project-${slug}` : undefined}
                    className={cn(
                        "relative flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all hover:shadow-xl h-full",
                    )}
                >
                    <div className="relative h-48 w-full overflow-hidden">
                        {banner ? (
                            <Image
                                src={banner}
                                alt={title}
                                fill
                                className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                            />
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                        <div className="absolute bottom-4 left-4 flex items-center gap-3">
                            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                                {icon ? (
                                    <Image src={icon} alt="icon" fill className="object-cover p-1" />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600" />
                                )}
                            </div>
                            <h3 className="text-lg font-bold text-white line-clamp-1">{title}</h3>
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6">
                        <div className="space-y-4">
                            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 line-clamp-3">
                                {description}
                            </p>

                            {tags && tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {tags.slice(0, 3).map((tag, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="mt-6 flex items-center gap-4">
                            {slug && (
                                <MagneticButton>
                                    <Link
                                        href={`/projects/${slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                                    >
                                        Details <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </MagneticButton>
                            )}
                            {link && !slug && (
                                <MagneticButton>
                                    <Link
                                        href={link}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        Visit <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </MagneticButton>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </Tilt>
    );
};
