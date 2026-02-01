import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingScreen from './components/LandingScreen';
import LoveStory from './components/LoveStory';
import FirstMeeting from './components/FirstMeeting';
import SorrySection from './components/SorrySection';
import ProposalSection from './components/ProposalSection';
import FinalScreen from './components/FinalScreen';
import MusicPlayer from './components/MusicPlayer';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [started, setStarted] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  return (
    <main className="min-h-screen relative font-sans text-slate-800 bg-romantic-50 selection:bg-romantic-200">
      <MusicPlayer playing={musicPlaying} setPlaying={setMusicPlaying} />

      {/* Background Hearts for the whole app (optional, or specific sections) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <FloatingHearts />
      </div>

      <AnimatePresence mode="wait">
        {!started && (
          <motion.div
            key="landing"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-40"
          >
            <LandingScreen onStart={() => {
              setStarted(true);
              setMusicPlaying(true);
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      {started && !accepted && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="relative z-10 space-y-0"
        >
          <FirstMeeting />
          <LoveStory />
          <SorrySection />
          <ProposalSection onYes={() => setAccepted(true)} />
        </motion.div>
      )}

      <AnimatePresence>
        {accepted && (
          <motion.div
            key="final"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50"
          >
            <FinalScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer / Credits */}
      {started && !accepted && (
        <footer className="py-8 text-center text-romantic-400 text-sm relative z-10 bg-white/30 backdrop-blur-sm">
          Made with ❤️ for You
        </footer>
      )}
    </main>
  );
}

export default App;
