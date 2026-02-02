import { motion, AnimatePresence } from 'framer-motion';
import { useState, type MouseEvent } from 'react';

interface Burst {
    id: number;
    x: number;
    y: number;
}

export const SurpriseClicks = () => {
    const [bursts, setBursts] = useState<Burst[]>([]);

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        const id = Date.now();
        const { clientX, clientY } = e;
        setBursts(prev => [...prev, { id, x: clientX, y: clientY }]);

        // Cleanup after animation
        setTimeout(() => {
            setBursts(prev => prev.filter(b => b.id !== id));
        }, 1000);
    };

    return (
        <div
            className="fixed inset-0 z-20"
            onClick={handleClick}
        >
            <AnimatePresence>
                {bursts.map(burst => (
                    <motion.div
                        key={burst.id}
                        className="absolute pointer-events-none"
                        style={{ left: burst.x, top: burst.y }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Mini sparkles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-yellow-200 rounded-full"
                                initial={{ x: 0, y: 0, opacity: 1 }}
                                animate={{
                                    x: Math.cos(i * 60 * (Math.PI / 180)) * 50,
                                    y: Math.sin(i * 60 * (Math.PI / 180)) * 50,
                                    opacity: 0,
                                    scale: 0
                                }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                        ))}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
