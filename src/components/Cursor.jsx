import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleInteraction = (e) => {
      const target = e.target;
      
      // Check for data attributes to customize cursor behavior
      if (target.dataset.cursorText) {
        setCursorText(target.dataset.cursorText);
        setCursorVariant('text');
      } else if (target.tagName.toLowerCase() === 'button' || 
                target.tagName.toLowerCase() === 'a' || 
                target.parentElement.tagName.toLowerCase() === 'a' ||
                target.parentElement.tagName.toLowerCase() === 'button') {
        setCursorVariant('button');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
      
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorVariant('default');
      setCursorText('');
    };

    // Add event listeners for all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, select, textarea, [data-cursor-text], .cursor-hover'
    );
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleInteraction);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleInteraction);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Cursor variants for different states
  const cursorVariants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: isClicking ? 0.8 : 1,
      opacity: 1,
      background: isDarkMode 
        ? 'linear-gradient(135deg, #34c3ff 0%, #8b5cf6 100%)' 
        : 'linear-gradient(135deg, #09abf5 0%, #7c3aed 100%)',
      mixBlendMode: 'difference',
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      opacity: 0.7,
      mixBlendMode: 'normal',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #f472b6 0%, #8b5cf6 100%)' 
        : 'linear-gradient(135deg, #ec4899 0%, #7c3aed 100%)',
    },
    text: {
      x: mousePosition.x - 64,
      y: mousePosition.y - 64,
      height: 128,
      width: 128,
      background: isDarkMode 
        ? 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 80%)' 
        : 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(9, 171, 245, 0.1) 50%, transparent 80%)',
      mixBlendMode: 'normal',
    },
  };

  // Trail cursor variants
  const trailVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: isHovering ? 1.8 : 1,
      opacity: 0.3,
      borderColor: isDarkMode ? '#8b5cf6' : '#09abf5',
    },
    button: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      opacity: 0.15,
      borderColor: isDarkMode ? '#ec4899' : '#db2777',
    },
    text: {
      opacity: 0,
    },
  };

  // Only render on client-side & non-touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
    return (
      <>
        {/* Main cursor */}
        <motion.div
          className="fixed w-4 h-4 rounded-full pointer-events-none z-50"
          variants={cursorVariants}
          animate={cursorVariant}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
            mass: 0.1
          }}
        />

        {/* Cursor trail */}
        <motion.div
          className="fixed w-8 h-8 border-2 rounded-full pointer-events-none z-40"
          variants={trailVariants}
          animate={cursorVariant}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
            mass: 0.2
          }}
        />

        {/* Secondary trail for depth effect */}
        <motion.div
          className="fixed w-16 h-16 border border-tertiary-500/20 dark:border-tertiary-400/20 rounded-full pointer-events-none z-30"
          animate={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            scale: isHovering ? 1.2 : 1,
            opacity: isHovering ? 0.1 : 0.05,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.3,
            delay: 0.05
          }}
        />

        {/* Custom cursor text */}
        <AnimatePresence>
          {cursorVariant === 'text' && cursorText && (
            <motion.div
              className="fixed pointer-events-none z-50 flex items-center justify-center text-center text-white text-sm font-medium bg-gradient-primary dark:bg-gradient-accent rounded-full px-4 py-2 whitespace-nowrap shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: mousePosition.x + 16, 
                y: mousePosition.y - 16 
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              {cursorText}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
  
  return null; // Return null for touch devices
};

export default Cursor; 