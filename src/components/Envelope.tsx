import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ValentineDay } from '../data/valentineData';
import FlowerAnimation from './FlowerAnimation';
import { Mail, Lock } from 'lucide-react';

interface EnvelopeProps {
    data: ValentineDay;
    isUnlockable: boolean;
    isOpen: boolean;
    onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ data, isUnlockable, isOpen, onOpen }) => {

    return (
        <motion.div
            layout
            className={`relative w-full aspect-square flex flex-col items-center justify-center p-4 rounded-2xl shadow-lg cursor-pointer transition-colors duration-500 ${isOpen ? 'bg-white/80 backdrop-blur-sm' : 'bg-pink-200/50 hover:bg-pink-200/70'}`}
            onClick={onOpen}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <AnimatePresence mode="wait">
                {!isOpen ? (
                    <motion.div
                        key="closed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="relative">
                            <Mail size={48} className="text-pink-600" />
                            {!isUnlockable && (
                                <div className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full p-1">
                                    <Lock size={12} />
                                </div>
                            )}
                        </div>
                        <h3 className="text-lg font-serif text-pink-800 font-medium">{data.date}</h3>
                        {!isUnlockable && <p className="text-xs text-pink-600">Locked until the day arrives</p>}
                    </motion.div>
                ) : (
                    <motion.div
                        key="open"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center text-center h-full justify-between"
                    >
                        <div className="flex-1 flex items-center justify-center">
                            <FlowerAnimation type={data.type} />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="mt-2"
                        >
                            <h4 className="text-sm uppercase tracking-widest text-pink-400 mb-1">{data.title}</h4>
                            <p className="font-serif text-pink-800 text-sm leading-relaxed max-w-[200px]">
                                {data.message}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Envelope;
