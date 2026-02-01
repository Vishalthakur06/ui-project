import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Calendar, Heart } from 'lucide-react';

const FirstMeeting = () => {
    // CHANGE THIS DATE TO YOUR ACTUAL FIRST MEETING DATE (YYYY-MM-DD)
    const CORRECT_DATE = "2024-02-21";

    const [dateInput, setDateInput] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState(false);

    const handleUnlock = () => {
        if (dateInput === CORRECT_DATE) {
            setIsUnlocked(true);
            setError(false);
        } else {
            setError(true);
            // Shake effect trigger or simple error visual
            setTimeout(() => setError(false), 500);
        }
    };

    return (
        <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center bg-romantic-100 relative overflow-hidden">

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-md w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/50 text-center relative z-10"
            >
                {!isUnlocked ? (
                    <div className="space-y-6">
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="w-20 h-20 bg-romantic-200 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <Lock className="w-10 h-10 text-romantic-600" />
                        </motion.div>

                        <h2 className="font-cursive text-4xl text-romantic-800 mb-2">Our First Meeting</h2>
                        <p className="font-serif text-slate-600 mb-6">Enter the magical date when our eyes first met...</p>

                        <div className="relative">
                            <input
                                type="date"
                                value={dateInput}
                                onChange={(e) => setDateInput(e.target.value)}
                                className={`w-full px-4 py-3 rounded-xl border-2 outline-none focus:ring-2 transition-all ${error
                                        ? 'border-red-400 focus:ring-red-200 bg-red-50'
                                        : 'border-romantic-200 focus:border-romantic-400 focus:ring-romantic-200 bg-white'
                                    }`}
                            />
                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-500 text-sm mt-2 font-medium"
                                >
                                    That's not the day, darling! Try again. 🥺
                                </motion.p>
                            )}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleUnlock}
                            className="w-full py-3 bg-romantic-600 text-white rounded-xl font-semibold shadow-lg hover:bg-romantic-700 transition-colors flex items-center justify-center gap-2"
                        >
                            <Unlock size={20} /> Unlock Memory
                        </motion.button>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-10 h-10 text-green-500 fill-green-500 animate-pulse" />
                        </div>

                        <h2 className="font-cursive text-4xl text-romantic-800">The Day It Started</h2>

                        <div className="relative group rounded-2xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-500 border-8 border-white">
                            <img
                                src="/images/first-meeting.jpg" // Using the renamed uploaded file
                                alt="Our First Meeting"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>

                        <p className="font-serif text-xl text-slate-700 italic">
                            "And suddenly, all the love songs were about you."
                        </p>

                        <p className="text-sm text-romantic-400 font-medium">
                            Unlocked: {dateInput}
                        </p>
                    </motion.div>
                )}
            </motion.div>

            {/* Background elements */}
            <div className="absolute top-10 left-10 text-romantic-200 opacity-50 animate-float" style={{ animationDelay: '0s' }}>
                <Calendar size={64} />
            </div>
            <div className="absolute bottom-10 right-10 text-romantic-200 opacity-50 animate-float" style={{ animationDelay: '2s' }}>
                <Heart size={64} fill="currentColor" />
            </div>

        </section>
    );
};

export default FirstMeeting;
