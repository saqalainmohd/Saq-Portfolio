"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const navItems = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Experience", link: "experience" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
];

export const Navbar = () => {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (current) => {
        if (typeof current === "number") {
            const direction = current - lastScrollY;

            if (scrollY.get() < 50) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
            setLastScrollY(current);
        }
    });

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{
                y: visible ? 0 : -100,
                opacity: visible ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
            className={cn(
                "fixed top-0 inset-x-0 z-50 h-16 border-b border-transparent transition-all duration-300",
                lastScrollY > 50 && "bg-white/50 dark:bg-black/50 backdrop-blur-md border-neutral-200 dark:border-white/[0.1]"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
                <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    className="flex items-center gap-2 text-xl font-bold cursor-pointer text-neutral-900 dark:text-white"
                >
                    <img src="/icons/Icon-192.png" alt="Logo" className="h-8 w-8 rounded-lg" />
                    Mohammed Saqalain
                </ScrollLink>



                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item, idx) => (
                        <MagneticButton key={idx}>
                            <ScrollLink
                                to={item.link}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                activeClass="text-primary font-semibold"
                                className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors px-2 py-1"
                            >
                                {item.name}
                            </ScrollLink>
                        </MagneticButton>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-neutral-600 dark:text-neutral-300"
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 p-4 md:hidden flex flex-col gap-4 shadow-lg">
                        {navItems.map((item, idx) => (
                            <ScrollLink
                                key={idx}
                                to={item.link}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary cursor-pointer"
                            >
                                {item.name}
                            </ScrollLink>
                        ))}
                    </div>
                )}
            </div>
        </motion.nav>
    );
};
