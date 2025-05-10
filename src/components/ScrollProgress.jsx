import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed progress bar at the top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-tertiary-500 to-accent-500 dark:from-tertiary-500 dark:via-primary-500 dark:to-accent-500 z-50 origin-left animate-gradient-shift bg-size-200"
        style={{ scaleX }}
      />

      {/* Scroll percentage indicator */}
      <AnimatedScrollIndicator 
        scrollYProgress={scrollYProgress} 
        isVisible={isVisible} 
      />
    </>
  );
};

const AnimatedScrollIndicator = ({ scrollYProgress, isVisible }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      setPercentage(Math.round(value * 100));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-16 h-16 flex items-center justify-center">
        <svg width="64" height="64" viewBox="0 0 64 64" className="transform -rotate-90">
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="4"
            className="dark:stroke-gray-700"
          />
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="url(#progress-gradient)"
            strokeWidth="4"
            strokeDasharray="175.9"
            strokeDashoffset={175.9 - (175.9 * percentage) / 100}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#09abf5" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm font-bold text-gradient animate-pulse-slow">
            {percentage}%
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollProgress; 