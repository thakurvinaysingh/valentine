import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ShieldCheck, Flame, Infinity as InfinityIcon } from 'lucide-react';

interface RunnerGameProps {
  onComplete: () => void;
}

export const RunnerGame: React.FC<RunnerGameProps> = ({ onComplete }) => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const relationshipValues = [
    { 
      id: 'trust', 
      label: 'Unwavering Trust', 
      icon: <ShieldCheck className="w-5 h-5" />, 
      msg: "Like a puzzle where every piece fits, our trust is the foundation of everything. 🛡️" 
    },
    { 
      id: 'passion', 
      label: 'Deep Connection', 
      icon: <Flame className="w-5 h-5" />, 
      msg: "Our hearts beat in the same rhythm, creating a melody only we can understand. 🔥" 
    },
    { 
      id: 'forever', 
      label: 'Endless Future', 
      icon: <InfinityIcon className="w-5 h-5" />, 
      msg: "Every step I take is more meaningful because I'm walking right beside you. ♾️" 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff5f7] to-[#ffe4e9] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white/70 backdrop-blur-xl p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(251,113,133,0.2)] border border-white text-center"
      >
        <AnimatePresence mode="wait">
          {!selectedPath ? (
            <motion.div
              key="selection"
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <Heart className="w-16 h-16 text-rose-500 fill-rose-100" />
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-rose-400 rounded-full blur-xl"
                  />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-rose-900 mb-2">Connect Our Hearts</h2>
              <p className="text-rose-600 mb-8 px-4">
                "An intelligent heart chooses with purpose. What defines our journey best?"
              </p>

              <div className="space-y-4">
                {relationshipValues.map((val) => (
                  <motion.button
                    key={val.id}
                    whileHover={{ scale: 1.05, backgroundColor: '#fff' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPath(val.id)}
                    className="w-full p-5 bg-white/50 border-2 border-rose-100 rounded-2xl flex items-center gap-4 text-rose-800 font-bold shadow-sm hover:border-rose-400 transition-all"
                  >
                    <span className="p-2 bg-rose-100 rounded-lg text-rose-500">{val.icon}</span>
                    {val.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, zoom: 0.5 }}
              animate={{ opacity: 1, zoom: 1 }}
              className="py-6"
            >
              <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              
              <h3 className="text-2xl font-black text-rose-900 mb-4">
                {relationshipValues.find(v => v.id === selectedPath)?.label}
              </h3>

              <div className="relative p-6 mb-8">
                <motion.div 
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   className="absolute inset-0 border-2 border-dashed border-rose-300 rounded-3xl"
                />
                <p className="text-xl text-rose-700 leading-relaxed font-medium italic">
                  "{relationshipValues.find(v => v.id === selectedPath)?.msg}"
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={onComplete}
                className="group relative px-8 py-4 bg-rose-500 text-white rounded-full font-bold text-lg shadow-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  To My Forever Love <Heart className="w-5 h-5 fill-current" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-rose-600 translate-y-full group-hover:translate-y-0 transition-transform"
                />
              </motion.button>
              
              <p className="mt-8 text-rose-300 text-sm font-light">
                Every choice leads me back to you.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
