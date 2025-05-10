import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-primary-600 dark:bg-primary-500 text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transition-all duration-300"
          aria-label="Back to top"
          data-cursor-text="Top"
        >
          <div className="relative">
            <FaArrowUp className="text-lg" />
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ 
                opacity: [0, 1, 0], 
                y: [-1, -8, -1] 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-1 h-6 bg-white rounded-full opacity-70"
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop; 