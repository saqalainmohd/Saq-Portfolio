"use client";

import { useParams } from "next/navigation";
import { data } from "@/lib/data";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { TextReveal } from "@/components/ui/text-reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function ProjectPage() {
    const { slug } = useParams();
    const project = data.projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/">
                        <Button>Go Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <Link href="/#projects">
                <Button variant="ghost" className="mb-8 group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Projects
                </Button>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <TextReveal text={project.title} className="text-4xl md:text-5xl font-bold mb-6 leading-tight" />
                    <p className="text-xl text-muted-foreground mb-8">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack?.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-sm py-1 px-3">
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        {project.link && (
                            <MagneticButton>
                                <Link href={project.link} target="_blank">
                                    <Button size="lg" className="rounded-full">
                                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </MagneticButton>
                        )}
                        {/* Add GitHub link if available in data, currently assuming link is live demo */}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                            <Image
                                src={project.banner || project.icon} // Fallback to icon if banner missing
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                        </div>
                    </Tilt>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-1 bg-primary mr-4 rounded-full"></span>
                            Overview
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {project.longDescription || project.description}
                        </p>
                    </section>

                    {project.features && (
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                <span className="w-8 h-1 bg-primary mr-4 rounded-full"></span>
                                Key Features
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start p-4 rounded-lg bg-secondary/30 border border-white/5"
                                    >
                                        <span className="mr-3 text-primary">•</span>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {project.challenges && (
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center">
                                <span className="w-8 h-1 bg-primary mr-4 rounded-full"></span>
                                Challenges & Solutions
                            </h2>
                            <div className="p-6 rounded-xl bg-secondary/20 border border-white/5">
                                <p className="text-lg text-muted-foreground leading-relaxed">{project.challenges}</p>
                            </div>
                        </section>
                    )}
                </div>

                <div className="space-y-8">
                    {/* Sidebar content like "Role", "Timeline", "Team" could go here if data existed */}
                    <div className="p-6 rounded-xl bg-secondary/20 border border-white/5 sticky top-24">
                        <h3 className="text-xl font-bold mb-4">Project Info</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground">Role</p>
                                <p className="font-medium">Project Lead</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Platform</p>
                                <p className="font-medium">Mobile (iOS & Android)</p>
                            </div>
                            {/* Add more metadata if available */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
