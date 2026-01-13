"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

interface Experience {
    role: string;
    company: string;
    location: string;
    period: string;
    description: string;
    contributions: string[];
    focusAreas: string[];
}

interface CareerSnapshot {
    years: string;
    highlights: string[];
}

interface ExperienceSectionProps {
    experience: Experience[];
    careerSnapshot: CareerSnapshot;
}

export const ExperienceSection = ({ experience, careerSnapshot }: ExperienceSectionProps) => {
    return (
        <section id="experience" className="py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        {careerSnapshot.years} years of professional experience
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-2 md:left-2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />

                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative mb-12 pl-10 md:pl-12"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                            {/* Card */}
                            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                                {/* Header */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                                        {exp.role}
                                    </h3>
                                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                                        <Briefcase className="h-4 w-4" />
                                        <span>{exp.company}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 flex-wrap">
                                        <span className="flex items-center gap-1">
                                            <MapPin className="h-3 w-3" />
                                            {exp.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {exp.period}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                                    {exp.description}
                                </p>

                                {/* Contributions */}
                                <div className="space-y-2 mb-4">
                                    <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Key Contributions</h4>
                                    <ul className="space-y-1">
                                        {exp.contributions.map((contribution, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span>{contribution}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Focus Areas */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.focusAreas.map((area, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                                        >
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Career Snapshot */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20"
                >
                    <h3 className="text-xl font-bold text-center mb-6">Career Snapshot</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        {careerSnapshot.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">{highlight}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
