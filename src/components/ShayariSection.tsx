import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SHAYARI } from '../constants';

export const ShayariSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let charIndex = 0;
    const currentShayari = SHAYARI[currentIndex];
    setDisplayText('');
    setIsTyping(true);

    const interval = setInterval(() => {
      if (charIndex < currentShayari.length) {
        setDisplayText(currentShayari.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + SHAYARI.length) % SHAYARI.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SHAYARI.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-pink-50 to-rose-50 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-rose-900 mb-12"
        >
          Words for You 💕
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-12 mb-8"
        >
          <p className="text-2xl text-rose-900 text-center font-light leading-relaxed min-h-24 whitespace-pre-line">
            {displayText}
            {isTyping && <span className="animate-pulse">|</span>}
          </p>
        </motion.div>

        <div className="flex justify-center items-center gap-6">
          <motion.button
            onClick={handlePrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-rose-200 hover:bg-rose-300 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-rose-900" />
          </motion.button>

          <div className="flex gap-2">
            {SHAYARI.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                animate={{
                  scale: idx === currentIndex ? 1.2 : 1,
                  backgroundColor: idx === currentIndex ? '#f43f5e' : '#fce7f3',
                }}
                className="w-3 h-3 rounded-full transition-all"
              />
            ))}
          </div>

          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-rose-200 hover:bg-rose-300 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-rose-900" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
