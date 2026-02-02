import { motion } from 'framer-motion';

interface MessagePopProps {
    text: string;
}

export const MessagePop = ({ text }: MessagePopProps) => {
    return (
        <motion.div
            className="absolute z-50 whitespace-nowrap pointer-events-none"
            initial={{ scale: 0, opacity: 0, y: 0 }}
            animate={{
                scale: [0, 1.1, 1],
                opacity: [0, 1, 1, 0],
                y: -100
            }}
            transition={{
                duration: 3,
                times: [0, 0.1, 0.8, 1],
                ease: "easeOut"
            }}
        >
            <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-pink-100">
                <p className="text-lotus-600 font-serif text-lg italic">{text}</p>
                <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white/90 rotate-45 border-b border-r border-pink-100"></div>
            </div>
        </motion.div>
    );
};
