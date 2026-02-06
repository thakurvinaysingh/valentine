import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Gamepad2 } from 'lucide-react';
import { MESSAGES } from '../constants';

interface WelcomeScreenProps {
  senderName: string;
  receiverName: string;
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  senderName,
  receiverName,
  onStart,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-rose-100 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-200 opacity-30"
            variants={floatingVariants}
            animate="animate"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 20}px`,
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <Heart className="w-20 h-20 mx-auto text-rose-400 mb-6" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-rose-900 mb-8 leading-tight"
        >
          {MESSAGES.welcome(senderName, receiverName)}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-rose-700 mb-12"
        >
          Complete the games and unlock something special...
        </motion.p>

        <motion.button
          variants={itemVariants}
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-bold text-lg md:text-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 mx-auto"
        >
          <Gamepad2 className="w-6 h-6" />
          Start the Love Game
        </motion.button>

        <motion.p
          variants={itemVariants}
          className="text-sm text-rose-600 mt-8 italic"
        >
          Let the adventure begin... 🎮💕
        </motion.p>
      </motion.div>
    </div>
  );
};
