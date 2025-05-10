import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-white dark:bg-gray-900"
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          {/* Logo with gradient */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold text-gradient text-shadow-glow mb-8"
          >
            VisaPro
          </motion.div>
          
          {/* Loading animation - rotating gradient ring */}
          <motion.div 
            className="relative w-16 h-16 mb-8 mx-auto"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <div className="absolute inset-0 rounded-full border-t-2 border-l-2 border-primary-500 dark:border-tertiary-500"></div>
            <div className="absolute inset-0 rounded-full border-r-2 border-b-2 border-accent-500 dark:border-accent-400"></div>
            
            <motion.div
              className="absolute left-1/2 top-1/2 w-8 h-8 -ml-4 -mt-4 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-gradient-primary dark:bg-gradient-accent"
                animate={{ 
                  scale: [0.8, 1, 0.8],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Progress bar with gradient animation */}
        <motion.div 
          className="relative h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-4 overflow-hidden"
          style={{ width: '200px' }}
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-primary-500 via-tertiary-500 to-accent-500 rounded-full"
          />
        </motion.div>
        
        {/* Loading text with gradient */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gradient-accent animate-pulse-slow"
        >
          Loading amazing experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loading; 