import { useEffect } from 'react';

declare global {
  interface Window {
    confetti: (options?: any) => Promise<void>;
  }
}

export const useConfetti = () => {
 useEffect(() => {
  const script = document.createElement('script');
  script.src =
    'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/dist/confetti.browser.min.js';
  script.async = true;
  document.head.appendChild(script);

  return () => {
    if (document.head.contains(script)) {
      document.head.removeChild(script);
    }
  };
}, []);


  const celebrate = () => {
    if (window.confetti) {
      window.confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const celebrateHearts = () => {
    if (window.confetti) {
      window.confetti({
        particleCount: 150,
        spread: 360,
        origin: { y: 0.5 },
        shapes: ['circle'],
      });
    }
  };

  return { celebrate, celebrateHearts };
};
