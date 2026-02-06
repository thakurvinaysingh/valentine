import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles } from 'lucide-react';
import { VALENTINE_FEELINGS } from '../constants';

export const MemoriesGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-rose-50 to-pink-100 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl font-bold text-rose-900 mb-4">
            How I Feel For You 🤍
          </h2>
          <p className="text-rose-600 text-lg italic max-w-2xl mx-auto">
            "On this Valentine's Day, I wanted to show you the depth of my heart through these images and words..."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALENTINE_FEELINGS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedImage(item.id)}
              whileHover={{ y: -10 }}
              className="cursor-pointer group relative bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay with Poem Fragment */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-900/20 to-transparent flex flex-col justify-end p-6 text-left">
                  <Sparkles className="text-yellow-300 w-6 h-6 mb-2" />
                  <h3 className="text-white font-bold text-2xl mb-1">{item.title}</h3>
                  <p className="text-rose-100 text-sm line-clamp-2 italic">
                    {item.feeling}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Romantic View */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-rose-950/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-rose-900 bg-rose-100 hover:bg-rose-200 p-2 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={VALENTINE_FEELINGS.find((m) => m.id === selectedImage)?.image}
                    alt="Valentine"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-center bg-white">
                  <Heart className="w-8 h-8 text-rose-500 mb-4" />
                  <h3 className="text-3xl font-bold text-rose-900 mb-4">
                    {VALENTINE_FEELINGS.find((m) => m.id === selectedImage)?.title}
                  </h3>
                  <p className="text-rose-600 text-lg mb-8 leading-relaxed">
                    {VALENTINE_FEELINGS.find((m) => m.id === selectedImage)?.feeling}
                  </p>
                  
                  {/* The Shayari / Poem Box */}
                  <div className="bg-rose-50 p-6 rounded-2xl border-l-4 border-rose-400">
                    <p className="text-rose-800 font-medium italic whitespace-pre-line leading-relaxed">
                      {VALENTINE_FEELINGS.find((m) => m.id === selectedImage)?.poem}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

