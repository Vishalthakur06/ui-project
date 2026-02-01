import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const LandingScreen = ({ onStart }) => {
    return (
        <div className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(rgba(255, 241, 242, 0.8), rgba(255, 241, 242, 0.6)), url('/images/background.png')` }}>

            {/* Central Content */}
            <div className="z-10 text-center px-4">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    className="mb-8"
                >
                    <Heart className="w-24 h-24 text-romantic-600 mx-auto animate-heartbeat" fill="#e11d48" />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="font-cursive text-3xl md:text-7xl text-romantic-700 mb-6 drop-shadow-sm whitespace-nowrap"
                >
                    Happy Valentine’s Day In Advance
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="font-serif text-xl md:text-2xl text-romantic-800 italic mb-12"
                >
                    A little surprise, just for you...
                </motion.p>

                <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 1.5, type: 'spring' }}
                    onClick={onStart}
                    className="group relative px-8 py-4 bg-romantic-600 text-white font-sans text-lg rounded-full shadow-xl hover:bg-romantic-700 transition-colors"
                >
                    <span className="flex items-center gap-2">
                        Open My Heart <Heart className="w-5 h-5 group-hover:fill-white transition-all" />
                    </span>
                    <div className="absolute inset-0 rounded-full ring-2 ring-romantic-400 ring-offset-2 animate-pulse"></div>
                </motion.button>
            </div>
        </div>
    );
};

export default LandingScreen;
