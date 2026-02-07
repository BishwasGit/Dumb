import React, { useState, useEffect } from 'react';
import { valentineData } from '../data/valentineData';
import Envelope from './Envelope';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import FlowerAnimation from './FlowerAnimation';

import { FallingPetals as Petals } from './FlowerAnimation';

const ValentineGrid: React.FC = () => {
    const [openDayId, setOpenDayId] = useState<number | null>(null);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        // Update date every minute to be safe
        const timer = setInterval(() => setCurrentDate(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    const handleOpen = (id: number) => {
        const day = valentineData.find(d => d.id === id);
        if (!day) return;

        // Check if unlockable
        const currentYear = currentDate.getFullYear();
        const targetDate = new Date(`${day.date}, ${currentYear}`);

        const today = new Date(currentDate);
        today.setHours(0, 0, 0, 0);
        targetDate.setHours(0, 0, 0, 0);

        if (today >= targetDate) {
            setOpenDayId(id);
        } else {
            alert("Wait for the day, love! 🌸");
        }
    };

    const handleClose = () => {
        setOpenDayId(null);
    };

    const isUnlockable = (dateString: string) => {
        const currentYear = currentDate.getFullYear();
        const targetDate = new Date(`${dateString}, ${currentYear}`);
        const today = new Date(currentDate);
        today.setHours(0, 0, 0, 0);
        targetDate.setHours(0, 0, 0, 0);
        return today >= targetDate;
    };

    const selectedDay = valentineData.find(d => d.id === openDayId);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-4 md:p-8 relative overflow-hidden">
            <Petals />

            <div className="relative z-10 max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-serif text-pink-600 mb-4 animate-pulse">
                        SMRITI
                    </h1>
                    <p className="text-pink-400 text-lg md:text-xl font-light italic">
                        A little surprise for every day...
                    </p>
                </header>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {valentineData.map((day) => (
                        <Envelope
                            key={day.id}
                            data={day}
                            isOpen={false} // Always closed in grid view now
                            isUnlockable={isUnlockable(day.date)}
                            onOpen={() => handleOpen(day.id)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {openDayId && selectedDay && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
                        onClick={handleClose}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            className={`relative w-full max-w-sm md:max-w-md bg-white rounded-3xl p-8 shadow-2xl overflow-hidden flex flex-col items-center text-center ${selectedDay.color}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 p-2 text-pink-400 hover:text-pink-600 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-6 scale-125">
                                <FlowerAnimation type={selectedDay.type} />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h2 className="text-2xl font-serif text-pink-600 mb-2">{selectedDay.title}</h2>
                                <p className="text-gray-600 font-light leading-relaxed">
                                    {selectedDay.message}
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ValentineGrid;
