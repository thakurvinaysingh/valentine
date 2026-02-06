import React, { useEffect,useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, User } from 'lucide-react';
import { ShayariSection } from './ShayariSection';
import { WhySpecialSection } from './WhySpecialSection';
import { MemoriesGallery } from './MemoriesGallery';
import { LoveTesterGame } from "./LoveTesterPage";

interface VictoryPageProps {
  senderName: string;
  receiverName: string;
}

export const VictoryPage: React.FC<VictoryPageProps> = ({ senderName, receiverName }) => {
  const [heartFullScreen, setHeartFullScreen] = useState(false);
const [showLoveTester, setShowLoveTester] = useState(false);


useEffect(() => {
  localStorage.setItem(
    "valentine_couple",
    JSON.stringify({ boyName: senderName, girlName: receiverName })
  );
}, [senderName, receiverName]);




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
      y: [0, -30, 0],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  const handleValentineClick = () => {
    setHeartFullScreen(true);
     setShowLoveTester(true);
    setTimeout(() => setHeartFullScreen(false), 3000); // Keep the heart for 3 seconds
  };

  return (
    <>


      {heartFullScreen && (
        <motion.div
          className="fixed inset-0 bg-rose-200 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-center"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="text-rose-500 w-40 h-40" />
          </motion.div>
        </motion.div>
      )}

      <div className="h-auto bg-gradient-to-br from-white via-pink-50 to-rose-100 flex items-center justify-center p-6 relative overflow-y-auto">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-rose-200 opacity-20"
              variants={floatingVariants}
              animate="animate"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 60 + 40}px`,
              }}
            >
              ♥
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative z-10 text-center max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Heart className="w-24 h-24 mx-auto text-rose-500" />
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl font-bold text-rose-900 mb-6">
            You Said YES! 💖
          </motion.h1>

          <motion.p variants={itemVariants} className="text-2xl text-rose-700 mb-8">
            {receiverName}, you just made {senderName} the happiest person alive!
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-xl text-rose-600 italic mb-12 leading-relaxed"
          >
            This is the beginning of something magical. Our love story continues... 🤍
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-rose-500 text-white rounded-full font-bold text-lg cursor-pointer"
              onClick={handleValentineClick}
            >
              You're My Valentine 💕
            </motion.div> */}
  <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
  <motion.button
    whileHover={{ scale: 1.05 }}
    className="px-8 py-4 bg-rose-500 text-white rounded-full font-bold text-lg cursor-pointer"
  >
    You're My Valentine 💕
  </motion.button>

  <motion.button
    whileHover={{ scale: 1.05 }}
    className="px-8 py-4 bg-white text-rose-600 border-2 border-rose-300 rounded-full font-bold text-lg cursor-pointer"
    onClick={handleValentineClick}
  >
    Test Your Lover 💘
  </motion.button>
</motion.div>

{/* 💘 Love Tester Game */}
{showLoveTester && (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mt-16"
  >
    <LoveTesterGame
      defaultBoy={senderName}
      defaultGirl={receiverName}
    />
  </motion.div>
)}


          </motion.div>
        </motion.div>
      </div>

      {/* Love Journey (Young, Middle, Old) */}
      <section className="py-20 bg-gradient-to-br from-white via-pink-50 to-rose-50 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-rose-900 mb-8"
          >
            Life Together - Forever 🕰️
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {/* Young Couple */}
            <motion.div className="p-6 bg-white rounded-2xl shadow-lg">
              <img
                src="https://i.pinimg.com/736x/56/b8/36/56b8364d01a1bdca332d1c54e864bb1a.jpg"
                alt="Young Couple"
                className="w-full h-60 object-cover rounded-xl mb-4"
              />
              <p className="text-xl font-semibold text-rose-700">Young and in Love 💖</p>
            </motion.div>

            {/* Middle-Aged Couple with Children */}
            <motion.div className="p-6 bg-white rounded-2xl shadow-lg">
              <img
                src="https://i.pinimg.com/1200x/6b/40/d3/6b40d331c0638b282d7b0bff6760bd55.jpg"
                alt="Middle-Aged Couple"
                className="w-full h-60 object-cover rounded-xl mb-4"
              />
              <p className="text-xl font-semibold text-rose-700">Building a Family 👨‍👩‍👧‍👦</p>
            </motion.div>

            {/* Old Couple */}
            <motion.div className="p-6 bg-white rounded-2xl shadow-lg">
              <img
                src="https://i.pinimg.com/736x/f1/dd/01/f1dd01259ec75d20a67bab6cd44461f3.jpg"
                alt="Old Couple"
                className="w-full h-60 object-cover rounded-xl mb-4"
              />
              <p className="text-xl font-semibold text-rose-700">Forever Together 💫</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <ShayariSection />
      <WhySpecialSection />
      <MemoriesGallery />
    </>
  );
};
