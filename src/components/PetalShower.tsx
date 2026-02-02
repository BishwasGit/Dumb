import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Petal = ({ delay }: { delay: number }) => {
    // Random starting position horizontal
    const startX = Math.random() * 100;

    return (
        <motion.div
            className="absolute top-[-20px] w-4 h-4 bg-lotus-300 rounded-tl-full rounded-br-full opacity-60 pointer-events-none"
            style={{ left: `${startX}%` }}
            initial={{ y: -20, rotate: 0, opacity: 0 }}
            animate={{
                y: '100vh',
                rotate: 360,
                opacity: [0, 0.8, 0],
                x: [0, Math.random() * 40 - 20, 0] // Sway
            }}
            transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: delay,
                ease: "linear"
            }}
        />
    )
}

export const PetalShower = () => {
    const [petals, setPetals] = useState<number[]>([]);

    useEffect(() => {
        // Create 20 petals
        const newPetals = Array.from({ length: 20 }, (_, i) => i);
        setPetals(newPetals);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {petals.map((_, i) => (
                <Petal key={i} delay={Math.random() * 20} />
            ))}
        </div>
    );
};
