import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flower } from 'lucide-react';

interface SorryPopup {
    id: number;
    text: string;
    x: number;
    y: number;
}

const SORRY_MESSAGES = [
    "Sorry Sana",
    "I am sorry",
    "So sorry Smriti !",
    "My bad!",
    "Apologiesss",
    "Jaaaaa"
];

export const AngryQuestion = () => {
    const [showNatak, setShowNatak] = useState(false);
    const [sorries, setSorries] = useState<SorryPopup[]>([]);

    const handleYes = () => {
        // Spawn multiple sorry messages
        const count = 3 + Math.floor(Math.random() * 3); // 3 to 5 popups
        const newSorries: SorryPopup[] = [];

        for (let i = 0; i < count; i++) {
            newSorries.push({
                id: Date.now() + i,
                text: SORRY_MESSAGES[Math.floor(Math.random() * SORRY_MESSAGES.length)],
                x: 10 + Math.random() * 80, // 10-90%
                y: 20 + Math.random() * 60, // 20-80%
            });
        }

        setSorries(prev => [...prev, ...newSorries]);

        // Cleanup
        setTimeout(() => {
            setSorries(prev => prev.filter(s => !newSorries.find(ns => ns.id === s.id)));
        }, 2500);
    };

    const handleNo = () => {
        setShowNatak(true);
        setTimeout(() => setShowNatak(false), 3000);
    };

    return (
        <div className="fixed top-24 left-0 w-full flex flex-col items-center justify-center z-50 pointer-events-none">

            {/* Question Box */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl pointer-events-auto border border-pink-200"
            >
                <p className="text-lotus-600 font-bold mb-3 text-center">Are you angry Runchey?</p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={handleYes}
                        className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 active:scale-95 transition shadow-md"
                    >
                        Yes
                    </button>
                    <button
                        onClick={handleNo}
                        className="px-6 py-2 bg-sky-400 text-white rounded-full hover:bg-sky-500 active:scale-95 transition shadow-md"
                    >
                        No
                    </button>
                </div>
            </motion.div>

            {/* Floating Sorries (Keep Fixed/Independent) */}
            <AnimatePresence>
                {sorries.map((s) => (
                    <motion.div
                        key={s.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, y: -20 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="fixed bg-white px-4 py-2 rounded-full shadow-lg border border-pink-300 flex items-center gap-2 pointer-events-none z-[60]"
                        style={{ left: `${s.x}%`, top: `${s.y}%` }}
                    >
                        <Flower size={16} className="text-pink-500" />
                        <span className="text-pink-600 font-medium whitespace-nowrap">{s.text}</span>
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Natak Popup (Keep Fixed) */}
            <AnimatePresence>
                {showNatak && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-3xl shadow-2xl border-4 border-sky-300 z-[60] text-center pointer-events-auto min-w-[280px]"
                    >
                        <p className="text-2xl font-bold text-sky-600 mb-2">Why natak then? 🤨</p>
                        <p className="text-gray-500 text-sm">Hehe just kidding ❤️</p>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};
