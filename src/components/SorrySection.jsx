import React from 'react';
import { motion } from 'framer-motion';

const SorrySection = () => {
    return (
        <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center bg-romantic-900 text-white relative overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                {/* Simple falling petals simulation using CSS/SVG could go here, for now using circles */}
                {React.useMemo(() => [...Array(10)].map((_, i) => (
                    <div key={i} className="absolute bg-white rounded-full opacity-30 animate-float"
                        style={{
                            width: Math.random() * 10 + 5 + 'px',
                            height: Math.random() * 10 + 5 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animationDuration: Math.random() * 5 + 5 + 's',
                            animationDelay: Math.random() * 2 + 's'
                        }}></div>
                )), [])}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-3xl text-center z-10"
            >
                <h2 className="font-cursive text-6xl md:text-8xl mb-8 animate-pulse text-romantic-200">
                    I’m Sorry 😔
                </h2>

                <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl relative">
                    {/* Heartbeat behind text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-romantic-600 rounded-full blur-3xl opacity-40 animate-heartbeat -z-10"></div>

                    <p className="font-serif text-xl md:text-3xl leading-relaxed mb-6">
                        "I know I made mistakes, and I hurt you. For that, I am truly sorry."
                    </p>
                    <p className="font-sans text-lg md:text-xl text-romantic-100">
                        But my love for you is pure, real, and forever. Please forgive me?
                    </p>
                </div>
            </motion.div>

        </section>
    );
};

export default SorrySection;
