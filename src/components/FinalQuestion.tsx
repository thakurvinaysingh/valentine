import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { MESSAGES } from '../constants';
import { useConfetti } from '../hooks/useConfetti';

interface FinalQuestionProps {
  senderName: string;
  receiverName: string;
  onYes: () => void;
}

export const FinalQuestion: React.FC<FinalQuestionProps> = ({
  senderName,
  receiverName,
  onYes,
}) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noClickCount, setNoClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const { celebrate } = useConfetti();

  const noMessages = [
    'Hey! That button is shy 😜',
    'Even the mountains say YES 🏔️🤍',
    'You already won my heart…',
    'The stars agree with me 🌟',
    'Don\'t be shy! 💕',
    'I believe in you! ❤️',
  ];

  const handleNoHover = () => {
    const newX = (Math.random() - 0.5) * 300;
    const newY = (Math.random() - 0.5) * 300;
    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1);
    setShowMessage(true);
    handleNoHover();
    setTimeout(() => setShowMessage(false), 2000);
  };

  const handleYesClick = () => {
    setYesClicked(true);
    celebrate();
    onYes(); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-rose-100 flex items-center justify-center p-6 overflow-hidden">
      <AnimatePresence>
        {yesClicked && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl"
                initial={{
                  x: '50%',
                  y: '50%',
                  opacity: 1,
                }}
                animate={{
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  opacity: 0,
                }}
                transition={{ duration: 2, ease: 'easeOut' }}
              >
                {['💖', '🎉', '✨', '💕', '🎊'][Math.floor(Math.random() * 5)]}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-2xl relative z-10"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8"
        >
          <Heart className="w-20 h-20 mx-auto text-rose-500" />
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-bold text-rose-900 mb-4">
          {MESSAGES.finalQuestion(receiverName)}
        </h1>

        <p className="text-lg text-rose-600 mb-12">
          After all those games, here comes the real one...
        </p>

        {!yesClicked ? (
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              onClick={handleYesClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white rounded-full font-bold text-2xl shadow-2xl"
            >
              YES 
            </motion.button>

            <motion.button
              ref={noButtonRef}
              onClick={handleNoClick}
              onMouseEnter={handleNoHover}
              animate={{
                x: noButtonPosition.x,
                y: noButtonPosition.y,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 10,
              }}
              className="px-8 py-3 bg-rose-200 hover:bg-rose-300 text-rose-900 rounded-full font-bold text-lg"
            >
              NO 
            </motion.button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-4xl font-bold text-rose-900 mb-4 whitespace-pre-line">
              {MESSAGES.finalYes(senderName, receiverName)}
            </p>
            <p className="text-2xl text-rose-600 mt-8">Forever starts now 🤍</p>
          </motion.div>
        )}

        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 text-2xl font-bold text-rose-600"
            >
              {noMessages[noClickCount % noMessages.length]}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
