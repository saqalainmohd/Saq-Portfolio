"use client";

import Lottie from "lottie-react";
import { useState, useEffect } from "react";

interface LottiePlayerProps {
    animationData: any;
    className?: string;
    loop?: boolean;
    autoplay?: boolean;
}

export const LottiePlayer = ({
    animationData,
    className,
    loop = true,
    autoplay = true,
}: LottiePlayerProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className={className}>
            <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
        </div>
    );
};
