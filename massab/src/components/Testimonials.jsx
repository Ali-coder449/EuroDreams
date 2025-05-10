import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    text: 'Working with VisaPro was a game-changer for our business. Their innovative approach and attention to detail exceeded our expectations. The team was responsive and delivered the project ahead of schedule.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Tech Entrepreneur',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'VisaPro helped us transform our digital presence with a beautiful, functional website that perfectly captures our brand identity. Their team was professional, creative, and a pleasure to work with.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'E-commerce Manager',
    image: 'https://randomuser.me/api/portraits/women/27.jpg',
    text: 'The custom solution that VisaPro developed for our e-commerce platform increased our conversion rates by 40%. Their technical expertise and understanding of user experience is truly impressive.',
    rating: 4,
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'CEO, Startup Innovations',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    text: 'As a startup, finding the right development partner was crucial. VisaPro not only understood our vision but enhanced it with their expertise. They were like an extension of our team.',
    rating: 5,
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, currentIndex]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Variants for testimonial card animations
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      }
    }),
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">What Our Clients Say</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from some of our satisfied clients about their experience working with us.
          </p>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto px-8" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Testimonial Cards */}
          <div className="h-[400px] md:h-[350px] flex items-center justify-center">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full absolute"
              >
                <div className="card glassmorphism border-t border-l border-white/20 dark:border-white/5 flex flex-col md:flex-row items-center gap-6 p-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                        <img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-primary-500 text-white p-2 rounded-full shadow-lg">
                        <FaQuoteLeft size={12} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < testimonials[currentIndex].rating 
                              ? 'text-yellow-400' 
                              : 'text-gray-300 dark:text-gray-600'
                          }`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                      "{testimonials[currentIndex].text}"
                    </p>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 rounded-full bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-lg z-10"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 rounded-full bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-lg z-10"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </motion.button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary-600 w-6' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 