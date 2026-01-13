"use client";

import { motion, HTMLMotionProps } from "framer-motion";

export const FadeIn = ({
    children,
    className,
    delay = 0,
    duration = 0.5,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
} & HTMLMotionProps<"div">) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({
    children,
    className,
    staggerChildren = 0.1,
    delayChildren = 0,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
    staggerChildren?: number;
    delayChildren?: number;
} & HTMLMotionProps<"div">) => {
    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren,
                        delayChildren,
                    },
                },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({
    children,
    className,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
} & HTMLMotionProps<"div">) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};
