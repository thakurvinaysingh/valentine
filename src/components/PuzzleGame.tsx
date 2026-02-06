import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ArrowRight,  Sparkle } from 'lucide-react';

interface PuzzleGameProps {
  onComplete: () => void;
}

const QUESTIONS = [
  {
    question: "A perfect Sunday morning with him looks like...",
    options: [
      { text: "Breakfast in bed and soft music", type: "Romantic" },
      { text: "A quiet hike or a walk in the park", type: "Nature" },
      { text: "Planning our week and a gym session", type: "Ambitious" },
      { text: "Gaming or binging a show together", type: "Chill" }
    ]
  },
  {
    question: "What kind of support do you value most?",
    options: [
      { text: "Emotional validation and long hugs", type: "Romantic" },
      { text: "Helping with chores and life tasks", type: "Ambitious" },
      { text: "Being a calm presence in the chaos", type: "Nature" },
      { text: "Making you laugh until you forget the stress", type: "Chill" }
    ]
  },
  {
    question: "How should he surprise you?",
    options: [
      { text: "A handwritten letter and flowers", type: "Romantic" },
      { text: "Booking a spontaneous weekend trip", type: "Ambitious" },
      { text: "A home-cooked meal and a movie night", type: "Nature" },
      { text: "Buying that thing you mentioned once", type: "Chill" }
    ]
  }
  // Add more questions here to reach 10
];

const RESULTS = {
  Romantic: {
    title: "The Soulful Poet",
    desc: "Your heart craves deep emotional connection. You need someone who isn't afraid to express their feelings and celebrates every milestone with a touch of magic."
  },
  Nature: {
    title: "The Grounded Guardian",
    desc: "You value peace and authenticity. Your ideal partner is someone steady and calm who appreciates the simple joys of life and a quiet home."
  },
  Ambitious: {
    title: "The Visionary Partner",
    desc: "You are a power-couple in the making. You need a driven, supportive partner who motivates you to reach your goals while building a secure future."
  },
  Chill: {
    title: "The Best Friend Lover",
    desc: "Laughter is your foundation. You need a partner who is easy-going, funny, and makes the mundane parts of life feel like an adventure."
  }
};

export const PuzzleGame: React.FC<PuzzleGameProps> = ({ onComplete }) => {
  const [gameStage, setGameStage] = useState<'start' | 'quiz' | 'result'>('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});

  const handleAnswer = (type: string) => {
    setScores(prev => ({ ...prev, [type]: (prev[type] || 0) + 1 }));
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setGameStage('result');
    }
  };

  const getTopResult = () => {
    const topType = Object.keys(scores).reduce((a, b) => (scores[a] > (scores[b] || 0) ? a : b), 'Romantic');
    return RESULTS[topType as keyof typeof RESULTS];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-white flex items-center justify-center p-6 font-sans overflow-hidden">
      <AnimatePresence mode="wait">
        
        {/* STAGE 1: THE WELCOME SCREEN */}
        {gameStage === 'start' && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-md text-center"
          >
            <div className="relative inline-block mb-8">
               <motion.div 
                animate={{ scale: [1, 1.1, 1] }} 
                transition={{ repeat: Infinity, duration: 2 }}
               >
                 <Heart className="w-24 h-24 text-rose-400" fill="#fb7185" />
               </motion.div>
               <Sparkle className="absolute -top-4 -right-4 text-rose-300 w-8 h-8 animate-pulse" />
            </div>

            <h1 className="text-4xl font-bold text-rose-900 mb-4">Discover Your Heart's Path</h1>
            <p className="text-rose-600 mb-10 text-lg leading-relaxed">
              Answer  soulful questions to find the type of partner that truly complements your spirit.
            </p>

            <button
              onClick={() => setGameStage('quiz')}
              className="group relative w-full py-5 bg-rose-500 hover:bg-rose-600 text-white rounded-3xl font-bold text-xl shadow-xl transition-all flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Start Your Journey</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-rose-400 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </button>
          </motion.div>
        )}

        {/* STAGE 2: THE QUIZ */}
        {gameStage === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-md"
          >
            <div className="mb-10 text-center">
              <span className="text-rose-400 font-bold uppercase tracking-widest text-xs">Journey Progress</span>
              <div className="flex justify-center gap-1 mt-3">
                {QUESTIONS.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${i <= currentQuestion ? 'w-6 bg-rose-400' : 'w-2 bg-rose-200'}`} 
                  />
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-rose-900 mb-8 text-center px-4">
              {QUESTIONS[currentQuestion].question}
            </h3>

            <div className="space-y-4">
              {QUESTIONS[currentQuestion].options.map((opt, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02, backgroundColor: '#fff1f2' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(opt.type)}
                  className="w-full text-left p-6 bg-white rounded-2xl border-2 border-transparent shadow-sm transition-all text-rose-800 font-medium flex justify-between items-center"
                >
                  {opt.text}
                  <div className="w-6 h-6 rounded-full border-2 border-rose-100" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* STAGE 3: THE RESULT */}
        {gameStage === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md text-center bg-white/90 backdrop-blur-md p-10 rounded-[3rem] shadow-2xl border-b-8 border-rose-200"
          >
            <div className="mb-6">
              <Sparkles className="inline-block text-yellow-400 w-12 h-12 mb-2" />
              <h2 className="text-rose-400 font-bold tracking-widest text-sm uppercase">Your Ideal Future Partner</h2>
            </div>
            
            <h1 className="text-4xl font-black text-rose-900 mb-6">{getTopResult().title}</h1>
            <p className="text-rose-700 leading-relaxed mb-10 text-lg italic">
              "{getTopResult().desc}"
            </p>

            <div className="space-y-4">
              <div className="space-y-4">
 

            {/* 👉 NEXT TASK BUTTON */}
            <button
              onClick={onComplete}
              className="w-full py-4 bg-rose-100 text-rose-600 rounded-2xl font-bold hover:bg-rose-200 transition-colors"
            >
              Continue the Love Journey 💕
            </button>

          </div>

            </div>
            <p className="mt-8 text-rose-300 text-sm">Your heart knows what it wants 💖</p>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

