"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CaseStudyCard } from "./case-study-card";

interface Project {
    slug: string;
    banner: string;
    icon: string;
    title: string;
    description: string;
    link?: string;
    tags?: string[];
}

interface ProjectsGridProps {
    projects: Project[];
    initialCount?: number;
}

export const ProjectsGrid = ({ projects, initialCount = 4 }: ProjectsGridProps) => {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projects : projects.slice(0, initialCount);
    const hasMore = projects.length > initialCount;

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {displayedProjects.map((project, i) => (
                    <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                        <CaseStudyCard
                            title={project.title}
                            description={project.description}
                            banner={project.banner}
                            icon={project.icon}
                            link={project.link}
                            slug={project.slug}
                            tags={project.tags}
                            className="h-full"
                        />
                    </motion.div>
                ))}
            </div>

            {hasMore && (
                <div className="flex justify-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="group flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all hover:scale-105"
                    >
                        {showAll ? (
                            <>
                                Show Less
                                <ChevronUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                            </>
                        ) : (
                            <>
                                View All {projects.length} Projects
                                <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                            </>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
};
