import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface FlowerAnimationProps {
    type: 'rose' | 'lotus' | 'chocolate' | 'teddy' | 'promise' | 'hug' | 'kiss' | 'valentine';
}

const FlowerAnimation: React.FC<FlowerAnimationProps> = ({ type }) => {
    // Common animation variants
    const bloomVariants: Variants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    };



    if (type === 'rose') {
        return (
            <div className="relative w-40 h-40 md:w-64 md:h-64 flex items-center justify-center">
                <motion.div
                    variants={bloomVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-red-500 w-full h-full"
                >
                    {/* Simple SVG Rose Representation */}
                    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="currentColor">
                        <motion.path
                            d="M50 30 C 60 10, 80 30, 50 60 C 20 30, 40 10, 50 30"
                            fill="#e11d48"
                        />
                        <motion.path
                            d="M50 60 L 50 90"
                            stroke="#166534"
                            strokeWidth="4"
                        />
                        <motion.path
                            d="M50 70 Q 70 60, 80 50"
                            stroke="#166534"
                            strokeWidth="2"
                            fill="none"
                        />
                        <motion.path
                            d="M50 75 Q 30 65, 20 55"
                            stroke="#166534"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </motion.div>
                {/* Sparkles */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-200 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
                        transition={{ duration: 2, delay: 1 + i * 0.2, repeat: Infinity }}
                    />
                ))}
            </div>
        );
    }

    // Default Lotus/Generic Flower for other types
    return (
        <div className="relative w-40 h-40 md:w-64 md:h-64 flex items-center justify-center">
            <motion.div
                variants={bloomVariants}
                initial="hidden"
                animate="visible"
                className="relative w-full h-full flex items-center justify-center"
            >
                {/* Lotus Layers */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-8 h-16 md:w-12 md:h-24 bg-pink-300 rounded-full opacity-80"
                        style={{
                            originY: 1,
                            rotate: i * 45,
                            bottom: '50%',
                            // centering logic handled by flex + relative
                        }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1.5, delay: i * 0.1 }}
                    />
                ))}
                <motion.div
                    className="w-10 h-10 md:w-16 md:h-16 bg-yellow-300 rounded-full z-10 relative opacity-90 shadow-lg blur-sm"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>
        </div>
    );
};

export const FallingPetals = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-pink-200 rounded-full opacity-60"
                    initial={{ y: -20, x: Math.random() * window.innerWidth }}
                    animate={{ y: window.innerHeight + 20, rotate: 360 }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                />
            ))}
        </div>
    );
};

export default FlowerAnimation;
