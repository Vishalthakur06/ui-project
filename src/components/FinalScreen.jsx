import React from 'react';
import { motion } from 'framer-motion';
import FloatingHearts from './FloatingHearts';

const FinalScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-romantic-900 text-white overflow-hidden">
            <FloatingHearts />

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="z-10 text-center px-4"
            >
                <h1 className="font-cursive text-6xl md:text-9xl mb-8 text-romantic-100 drop-shadow-lg">
                    I Love You Forever ❤️
                </h1>
                <p className="font-serif text-2xl md:text-4xl text-romantic-200">
                    "You are my today, tomorrow and always 💕"
                </p>
            </motion.div>
        </div>
    );
};

export default FinalScreen;
