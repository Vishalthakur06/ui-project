import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();
            const newHeart = {
                id,
                x: Math.random() * 100, // Random horizontal position
                scale: Math.random() * 0.5 + 0.5, // Random size
                duration: Math.random() * 5 + 5, // Random duration
                delay: Math.random() * 2, // Random delay
                color: Math.random() > 0.6 ? 'text-romantic-300' : 'text-romantic-200'
            };

            setHearts(prev => [...prev, newHeart]);

            // Cleanup hearts after they float away
            setTimeout(() => {
                setHearts(prev => prev.filter(h => h.id !== id));
            }, 10000);

        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <AnimatePresence>
                {hearts.map(heart => (
                    <motion.div
                        key={heart.id}
                        initial={{ opacity: 0, y: '110vh', x: `${heart.x}vw` }}
                        animate={{ opacity: [0, 1, 0], y: '-10vh' }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: heart.duration, ease: "easeOut", delay: heart.delay }}
                        className={`absolute ${heart.color}`}
                        style={{ transform: `scale(${heart.scale})` }}
                    >
                        <Heart fill="currentColor" strokeWidth={0} size={32} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default FloatingHearts;
