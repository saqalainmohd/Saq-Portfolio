"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { data } from "@/lib/data";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const Tilt = dynamic(() => import("react-parallax-tilt"), { ssr: false });
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { CodeSnippet } from "@/components/ui/code-snippet";
import { ContactForm } from "@/components/ui/contact-form";


const CaseStudyCard = dynamic(() => import("@/components/ui/case-study-card").then(mod => mod.CaseStudyCard), {
  loading: () => <div className="h-96 w-full animate-pulse rounded-3xl bg-neutral-100 dark:bg-neutral-800" />,
});

const SkillsMarquee = dynamic(() => import("@/components/ui/skills-marquee").then(mod => mod.SkillsMarquee), {
  loading: () => <div className="h-20 w-full animate-pulse bg-neutral-100 dark:bg-neutral-800" />,
});

const ProjectsGrid = dynamic(() => import("@/components/ui/projects-grid").then(mod => mod.ProjectsGrid), {
  loading: () => <div className="h-96 w-full animate-pulse bg-neutral-100 dark:bg-neutral-800" />,
});

const ExperienceSection = dynamic(() => import("@/components/ui/experience-section").then(mod => mod.ExperienceSection), {
  loading: () => <div className="h-96 w-full animate-pulse bg-neutral-100 dark:bg-neutral-800" />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans overflow-hidden">
      <HeroHighlight>
        <div className="relative z-20 h-full w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-8 pt-24" id="home">
          {/* Left Side: Photo */}
          <div className="flex-1 flex justify-center md:justify-start items-end self-end overflow-hidden">
            <div className="relative w-72 h-[350px] md:w-[380px] md:h-[480px] lg:w-[450px] lg:h-[580px] group cursor-pointer">
              {/* Circular gradient glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-radial from-white/20 via-white/5 to-transparent blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <Image
                src={data.basic.photos[0]}
                alt="Main Profile Photo"
                fill
                priority
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 380px, 450px"
                className="object-contain object-bottom grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 relative z-10"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I'm {data.basic.firstName} {data.basic.lastName}. <br />
              <Highlight className="text-black dark:text-white">
                I drive business growth.
              </Highlight>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-xl leading-relaxed">
              {data.basic.title}. I specialize in financial analysis, marketing strategies, and business operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`mailto:${data.basic.email}`}
                className="px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition-transform"
              >
                Contact Me
              </Link>
              <Link
                href={`tel:${data.basic.phone}`}
                className="px-8 py-4 rounded-full bg-green-600 text-white font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Me
              </Link>
              <Link
                href={data.basic.resume}
                target="_blank"
                className="px-8 py-4 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </HeroHighlight>

      <StaggerContainer className="max-w-7xl mx-auto px-4 md:px-8 pb-20 space-y-32">





        {/* About Me Section */}
        <section id="about" className="pt-10 pb-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side: Text Content */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                About Me
              </h2>
              <p className="text-xl text-neutral-400 leading-relaxed">
                {data.about.description}
              </p>
            </div>

            {/* Right Side: Photo with B&W to Color Hover */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative w-64 h-80 md:w-80 md:h-[420px] lg:w-[400px] lg:h-[520px] rounded-2xl overflow-visible group cursor-pointer">
                {/* Circular gradient glow */}
                <div className="absolute inset-0 -z-10 bg-gradient-radial from-white/20 via-white/5 to-transparent blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <Image
                  src={data.basic.photos[1]}
                  alt="Profile Photo"
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 400px"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About / Skills Section */}
        <section id="skills" className="space-y-16 pt-20">
          <FadeIn>
            <div className="text-center space-y-6">
              {/* Decorative badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Professional Skills
                </span>
              </div>

              {/* Title with gradient */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Business{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                    Expertise
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full opacity-50"></span>
                </span>
              </h2>

              {/* Enhanced description */}
              <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                Focused on <span className="text-white font-semibold">financial analysis</span>,{" "}
                <span className="text-white font-semibold">marketing strategies</span>, and{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">business operations</span>.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">3+</div>
                  <div className="text-sm text-neutral-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">MBA</div>
                  <div className="text-sm text-neutral-500">Marketing & Finance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">10+</div>
                  <div className="text-sm text-neutral-500">Skills</div>
                </div>
              </div>
            </div>
          </FadeIn>
          <div className="space-y-4">
            <SkillsMarquee items={data.about.tech.slice(0, 4)} speed="slow" direction="right" />
            <SkillsMarquee items={data.about.tech.slice(4)} speed="normal" direction="left" />
          </div>
        </section>

        {/* Experience Section */}
        <ExperienceSection experience={data.experience} careerSnapshot={data.careerSnapshot} />

        {/* Featured Projects / Case Studies */}
        <section id="projects" className="space-y-12 pt-20">
          <FadeIn>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Academic <span className="text-primary">Projects</span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Research and studies conducted during my academic career.
              </p>
            </div>
          </FadeIn>
          <ProjectsGrid projects={data.projects} />
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto space-y-12 pt-20 pb-20">
          <FadeIn>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Ready to build something <span className="text-primary">extraordinary?</span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                I'm currently open to new opportunities. Let's discuss how I can contribute to your team.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeIn delay={0.1} className="space-y-8">
              <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 space-y-6">
                <h3 className="text-xl font-semibold">Contact Details</h3>
                <div className="space-y-4">
                  <a href={`mailto:${data.basic.email}`} className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">
                    <div className="h-10 w-10 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shadow-sm">
                      <Mail className="h-5 w-5" />
                    </div>
                    {data.basic.email}
                  </a>
                  <a href={`tel:${data.basic.phone}`} className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">
                    <div className="h-10 w-10 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shadow-sm">
                      <Phone className="h-5 w-5" />
                    </div>
                    {data.basic.phone}
                  </a>
                  <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
                    <div className="h-10 w-10 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shadow-sm">
                      <MapPin className="h-5 w-5" />
                    </div>
                    {data.basic.address}
                  </div>
                </div>
                <a
                  href={`tel:${data.basic.phone}`}
                  className="w-full py-3 rounded-xl bg-green-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>
        </section>
      </StaggerContainer>
    </main>
  );
}
