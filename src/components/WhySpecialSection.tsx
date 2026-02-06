import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mountain, Wind, Sparkles, Smile, Zap } from 'lucide-react';
import { WHY_SPECIAL } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-8 h-8" />,
  Mountain: <Mountain className="w-8 h-8" />,
  Wind: <Wind className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  Smile: <Smile className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
};

export const WhySpecialSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-rose-900 mb-16"
        >
          Why You Are Special 🤍
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {WHY_SPECIAL.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(225,29,72,0.15)' }}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-all border border-rose-100"
            >
              {/* Image Header */}
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.text} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              <div className="p-8 pt-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-rose-50 rounded-2xl text-rose-500 shadow-sm">
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-rose-900 leading-tight">{item.text}</h3>
                </div>
                
                <p className="text-rose-600 text-md mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Special Feel Good Line */}
                <div className="pt-4 border-t border-rose-50">
                  <p className="text-rose-400 italic text-sm font-medium">
                    " {item.specialLine} "
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center italic text-rose-300"
        >
          <p>And a thousand more reasons I haven't found words for yet... 🤍</p>
        </motion.div>
      </div>
    </section>
  );
};
