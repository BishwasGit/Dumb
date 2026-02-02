import { motion, type Variants } from 'framer-motion';

export const Lotus = ({ onBloomComplete }: { onBloomComplete: () => void }) => {
    // Layered animation for a full bloom effect
    const layerVariants: Variants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (custom: number) => ({
            scale: 1,
            opacity: 1,
            transition: {
                delay: custom * 0.5, // Outer layers bloom first, or inner interactions
                duration: 2.5,
                ease: [0.34, 1.56, 0.64, 1] // Spring-like ease
            }
        })
    };

    return (
        <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] flex items-center justify-center">
            <motion.svg
                viewBox="0 0 400 300" // Wider viewbox for lotus shape
                className="w-full h-full drop-shadow-xl"
                initial="hidden"
                animate="visible"
                onAnimationComplete={() => setTimeout(onBloomComplete, 2000)}
            >
                <defs>
                    <linearGradient id="petalMain" x1="0.5" y1="1" x2="0.5" y2="0">
                        <stop offset="0%" stopColor="#fbcfe8" />
                        <stop offset="60%" stopColor="#f472b6" />
                        <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient id="petalDark" x1="0.5" y1="1" x2="0.5" y2="0">
                        <stop offset="0%" stopColor="#f9a8d4" />
                        <stop offset="100%" stopColor="#db2777" />
                    </linearGradient>
                    <radialGradient id="centerGlow">
                        <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#facc15" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Outer/Bottom Petals (Wide) */}
                <g transform="translate(200, 220)">
                    {[-60, -30, 0, 30, 60].map((deg, i) => (
                        <motion.path
                            key={`outer-${i}`}
                            custom={0}
                            variants={layerVariants}
                            d="M0,0 Q-40,-20 -50,-60 Q0,-100 50,-60 Q40,-20 0,0"
                            fill="url(#petalDark)"
                            transform={`rotate(${deg}) scale(1.2)`}
                            className="origin-bottom"
                        />
                    ))}
                </g>

                {/* Middle Layer */}
                <g transform="translate(200, 210)">
                    {[-45, -15, 15, 45].map((deg, i) => (
                        <motion.path
                            key={`mid-${i}`}
                            custom={0.5}
                            variants={layerVariants}
                            d="M0,0 Q-30,-30 -40,-90 Q0,-130 40,-90 Q30,-30 0,0"
                            fill="url(#petalMain)"
                            transform={`rotate(${deg})`}
                            className="origin-bottom"
                        />
                    ))}
                </g>

                {/* Inner/Top Layer (Tight Bud opening) */}
                <g transform="translate(200, 200)">
                    {[-20, 0, 20].map((deg, i) => (
                        <motion.path
                            key={`inner-${i}`}
                            custom={1.0}
                            variants={layerVariants}
                            d="M0,0 Q-20,-40 -25,-90 Q0,-110 25,-90 Q20,-40 0,0"
                            fill="url(#petalMain)"
                            transform={`rotate(${deg}) scale(0.9)`}
                            className="origin-bottom"
                        />
                    ))}
                </g>

                {/* Golden Center Glow */}
                <motion.circle
                    cx="200"
                    cy="190"
                    r="40"
                    fill="url(#centerGlow)"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1.5 }}
                    transition={{ delay: 2, duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />

            </motion.svg>
        </div>
    );
};
