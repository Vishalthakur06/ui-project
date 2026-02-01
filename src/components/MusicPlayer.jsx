import React, { useRef, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';

const MusicPlayer = ({ playing, setPlaying }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        // Attempt auto-play or pause based on the 'playing' prop
        if (playing) {
            audioRef.current?.play().catch(e => {
                console.log("Audio play failed (likely blocked):", e);
                // If blocked, we might want to sync state back to false, 
                // but usually user interaction on landing screen resolves this.
            });
        } else {
            audioRef.current?.pause();
        }
    }, [playing]);

    const toggle = () => setPlaying(!playing);

    return (
        <div className="fixed top-4 right-4 z-50">
            <button
                onClick={toggle}
                className="bg-white/50 backdrop-blur-md p-3 rounded-full text-romantic-800 hover:bg-white/80 transition-colors shadow-lg"
            >
                {playing ? <Music size={24} /> : <VolumeX size={24} />}
            </button>
            <audio ref={audioRef} src="/music/bgm.mp3" loop />
        </div>
    );
};

export default MusicPlayer;
