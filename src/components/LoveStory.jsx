import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Heart } from 'lucide-react';

const LoveStory = () => {
    // CHANGE THIS DATE TO YOUR DESIRED LOCK DATE
    const CORRECT_DATE = "2002-12-06";

    const [dateInput, setDateInput] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState(false);

    const handleUnlock = () => {
        if (dateInput === CORRECT_DATE) {
            setIsUnlocked(true);
            setError(false);
        } else {
            setError(true);
            setTimeout(() => setError(false), 500);
        }
    };

    return (
        <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center bg-white/50 relative overflow-hidden">

            {!isUnlocked ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/50 text-center relative z-10"
                >
                    <div className="w-20 h-20 bg-romantic-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-10 h-10 text-romantic-500" />
                    </div>

                    <h2 className="font-cursive text-4xl text-romantic-800 mb-2">Locked Memory</h2>
                    <p className="font-serif text-slate-600 mb-6">Enter my Birth Day date to see our story...</p>

                    <div className="relative mb-6">
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
                            <p className="text-red-500 text-sm mt-2 absolute -bottom-6 left-0 w-full">
                                Incorrect date, my love! Try again.
                            </p>
                        )}
                    </div>

                    <button
                        onClick={handleUnlock}
                        className="w-full py-3 bg-romantic-600 text-white rounded-xl font-semibold shadow-lg hover:bg-romantic-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Unlock size={20} /> View Our Story
                    </button>
                </motion.div>
            ) : (
                <>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center mb-16 relative z-10"
                    >
                        <h2 className="font-cursive text-5xl md:text-7xl text-romantic-600 mb-8">Our Story</h2>
                        <p className="font-serif text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            "From the moment I met you, my life became beautiful. Every second with you is a gift I cherish." 💖
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center relative z-10">
                        {/* Boy Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-romantic-200 shadow-2xl relative z-10">
                                <img src="/images/story-boy.jpg" alt="Boy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="absolute inset-0 rounded-full border-4 border-romantic-400 animate-pulse z-0 blur-sm"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-6xl">❤️</span>
                        </motion.div>

                        {/* Girl Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-romantic-200 shadow-2xl relative z-10">
                                <img src="/images/story-girl.jpg" alt="Girl" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="absolute inset-0 rounded-full border-4 border-romantic-400 animate-pulse z-0 blur-sm"></div>
                        </motion.div>
                    </div>
                </>
            )}
        </section>
    );
};

export default LoveStory;
