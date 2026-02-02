import { motion } from 'framer-motion';

export type FlowerType = 'daisy' | 'tulip' | 'sakura' | 'sunflower';

interface FlowerPopProps {
    type: FlowerType;
    size?: number;
}

export const FlowerPop = ({ type, size = 64 }: FlowerPopProps) => {
    const commonProps = {
        width: size,
        height: size,
        viewBox: "0 0 100 100",
        className: "drop-shadow-md",
    };

    switch (type) {
        case 'daisy':
            return (
                <motion.svg {...commonProps} initial={{ scale: 0 }} animate={{ scale: 1, rotate: 180 }} transition={{ type: "spring" }}>
                    <circle cx="50" cy="50" r="15" fill="#fefce8" /> {/* center */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                        <ellipse key={deg} cx="50" cy="50" rx="8" ry="25" fill="#fff" transform={`rotate(${deg} 50 50)`} />
                    ))}
                    <circle cx="50" cy="50" r="10" fill="#facc15" /> {/* inner center */}
                </motion.svg>
            );
        case 'tulip':
            return (
                <motion.svg {...commonProps} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                    <path d="M50,80 Q50,100 50,100" stroke="green" strokeWidth="4" />
                    <path d="M30,30 Q30,70 50,80 Q70,70 70,30 Q50,50 30,30 Z" fill="#f87171" />
                    <path d="M30,30 Q40,10 50,40 Q60,10 70,30" fill="#f87171" />
                </motion.svg>
            );
        case 'sakura':
            return (
                <motion.svg {...commonProps} initial={{ scale: 0 }} animate={{ scale: 1, rotate: 45 }} transition={{ type: "spring" }}>
                    {[0, 72, 144, 216, 288].map(deg => (
                        <path key={deg} d="M50,50 Q30,20 50,10 Q70,20 50,50" fill="#fbcfe8" transform={`rotate(${deg} 50 50)`} />
                    ))}
                    <circle cx="50" cy="50" r="5" fill="#f472b6" />
                </motion.svg>
            );
        case 'sunflower':
            return (
                <motion.svg {...commonProps} initial={{ scale: 0 }} animate={{ scale: 1, rotate: 20 }} transition={{ type: "spring" }}>
                    <circle cx="50" cy="50" r="20" fill="#78350f" />
                    {[0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340].map(deg => (
                        <ellipse key={deg} cx="50" cy="50" rx="5" ry="20" fill="#facc15" transform={`rotate(${deg} 50 50) translate(0, -25)`} />
                    ))}
                </motion.svg>
            );
        default:
            return null;
    }
};
