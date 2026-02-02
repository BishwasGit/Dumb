import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const COMPLIMENTS = [
    "Your eyes feel like calm mornings",
    "You bring an easy kind of warmth",
    "Everything feels lighter around you",
    "Soft, kind, effortlessly beautiful",
    "A gentle soul in a noisy world",
    "You make the simple moments magic"
];

export const Compliment = ({ show }: { show: boolean }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!show) return;
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % COMPLIMENTS.length);
        }, 5000); // Change text every 5 seconds
        return () => clearInterval(interval);
    }, [show]);

    if (!show) return null;

    return (
        <div className="h-24 flex items-center justify-center p-4 z-10">
            <AnimatePresence mode="wait">
                <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1 }}
                    className="text-2xl md:text-3xl font-serif text-lotus-600 text-center italic leading-relaxed text-dreamy"
                >
                    {COMPLIMENTS[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
};
