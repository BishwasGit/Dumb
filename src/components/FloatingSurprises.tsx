import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Sparkles, Mail } from 'lucide-react';
import { FlowerPop, type FlowerType } from './FlowerPop';
import { MessagePop } from './MessagePop';

interface SurpriseItem {
    id: number;
    x: number;
    y: number;
    type: 'heart' | 'star' | 'sparkle' | 'envelope';
    revealed?: FlowerType;
    revealedMessage?: string;
}

const QUOTES = [
    "I really love your eyes",
    "Dumbass",
    "Why too much nautanki fuchey ? ",
    "Jaaaaaa",
    "Heart full of light"
];

export const FloatingSurprises = () => {
    const [items, setItems] = useState<SurpriseItem[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (items.length > 8) return;

            const rand = Math.random();
            const newItem: SurpriseItem = {
                id: Date.now(),
                x: Math.random() * 80 + 10,
                y: Math.random() * 80 + 10,
                // 30% Heart, 20% Star, 20% Sparkle, 30% Envelope
                type: rand < 0.3 ? 'heart' :
                    rand < 0.5 ? 'star' :
                        rand < 0.7 ? 'sparkle' : 'envelope',
            };

            setItems(prev => [...prev, newItem]);

            setTimeout(() => {
                setItems(prev => prev.filter(i => i.id !== newItem.id));
            }, 6000);

        }, 1500); // Slightly faster spawn

        return () => clearInterval(interval);
    }, [items.length]);

    const handleItemClick = (id: number, type: string) => {
        setItems(prev => prev.map(item => {
            if (item.id === id && !item.revealed && !item.revealedMessage) {
                if (type === 'envelope') {
                    const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
                    return { ...item, revealedMessage: randomQuote };
                } else {
                    const flowers: FlowerType[] = ['daisy', 'tulip', 'sakura', 'sunflower'];
                    const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
                    return { ...item, revealed: randomFlower };
                }
            }
            return item;
        }));

        setTimeout(() => {
            setItems(prev => prev.filter(i => i.id !== id));
        }, 3000);
    };

    return (
        <div className="fixed inset-0 z-20 pointer-events-none">
            <AnimatePresence>
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        className="absolute cursor-pointer pointer-events-auto"
                        style={{ left: `${item.x}%`, top: `${item.y}%` }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: [0, -20, 0]
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        }}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleItemClick(item.id, item.type);
                        }}
                    >
                        {item.revealed ? (
                            <FlowerPop type={item.revealed} size={80} />
                        ) : item.revealedMessage ? (
                            <MessagePop text={item.revealedMessage} />
                        ) : (
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className={`p-3 rounded-full shadow-lg backdrop-blur-sm 
                                    ${item.type === 'heart' ? 'bg-pink-100 text-pink-500' :
                                        item.type === 'star' ? 'bg-yellow-100 text-yellow-500' :
                                            item.type === 'sparkle' ? 'bg-purple-100 text-purple-500' :
                                                'bg-blue-100 text-blue-500'}`} // Envelope style
                            >
                                {item.type === 'heart' && <Heart fill="currentColor" size={24} />}
                                {item.type === 'star' && <Star fill="currentColor" size={24} />}
                                {item.type === 'sparkle' && <Sparkles size={24} />}
                                {item.type === 'envelope' && <Mail fill="currentColor" size={24} />}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
