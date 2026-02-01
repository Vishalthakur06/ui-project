import React from 'react';
import { motion } from 'framer-motion';

const ProposalSection = ({ onYes }) => {
    return (
        <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center bg-romantic-50 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center z-10"
            >
                <h2 className="font-cursive text-6xl md:text-8xl text-romantic-600 mb-12 drop-shadow-md">
                    Will you be my Valentine? 🌹
                </h2>

                <div className="flex flex-row gap-8 justify-center items-center">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onYes}
                        className="px-8 py-4 bg-romantic-500 text-white font-sans text-xl rounded-full shadow-lg hover:bg-romantic-600 transition-all transform"
                    >
                        Yes! ❤️
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onYes}
                        className="px-8 py-4 bg-romantic-300 text-romantic-900 font-sans text-xl rounded-full shadow-lg hover:bg-romantic-400 transition-all transform"
                    >
                        Always 💖
                    </motion.button>
                </div>

                <p className="mt-8 font-serif text-slate-500 italic text-lg opacity-80">
                    (There is no other option, because you are my only one)
                </p>
            </motion.div>
        </section>
    );
};

export default ProposalSection;
