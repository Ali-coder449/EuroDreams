import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowRight, FaGlobe, FaUserCheck, FaPassport, FaMapMarkerAlt, FaPlay, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { isDarkMode } = useTheme();

  const heroImages = [
    "https://images.unsplash.com/photo-1566677914817-56426959ae9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1541411438265-4cb4687110f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
  ];

  // Stats for display
  const stats = [
    { icon: <FaGlobe />, value: '50+', label: 'Countries' },
    { icon: <FaUserCheck />, value: '10K+', label: 'Satisfied Clients' },
    { icon: <FaPassport />, value: '99%', label: 'Success Rate' },
  ];

  // Light mode gradient styles with background image
  const lightModeStyles = !isDarkMode ? {
    backgroundImage: 'url("https://images.unsplash.com/photo-1566677914817-56426959ae9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"), radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.03) 0%, rgba(139, 92, 246, 0.03) 50%, transparent 70%), radial-gradient(circle at 80% 80%, rgba(9, 171, 245, 0.03) 0%, rgba(147, 197, 253, 0.03) 50%, transparent 70%)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundBlendMode: 'overlay',
    position: 'relative',
  } : {};

  // Dark mode styles with background image
  const darkModeStyles = isDarkMode ? {
    backgroundImage: 'url("https://images.unsplash.com/photo-1566677914817-56426959ae9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundBlendMode: 'overlay',
    position: 'relative',
  } : {};

  return (
    <section id="hero" className="pt-28 pb-20 overflow-hidden relative" style={isDarkMode ? darkModeStyles : lightModeStyles}>
      {/* Overlay for better readability */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-900/85' : 'bg-white/85'}`}></div>
      
      {/* World map background element */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1589519160732-576f165b9aaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="World Map" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Animated background shapes (visible in light mode) */}
      {!isDarkMode && (
        <>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary-100 to-transparent rounded-bl-full opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-t from-tertiary-50 to-transparent rounded-tr-full opacity-50"></div>
          
          <motion.div 
            className="absolute top-1/4 left-1/5 w-8 h-8 rounded-full bg-primary-200 opacity-30 blur-sm"
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-accent-200 opacity-20 blur-sm"
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <motion.div 
            className="absolute top-2/3 left-1/3 w-4 h-4 rounded-full bg-tertiary-200 opacity-20 blur-sm"
            animate={{ 
              x: [0, 10, 0],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </>
      )}

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            {/* Special announcement badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`inline-flex items-center gap-2 mb-6 py-1.5 px-3 rounded-full text-sm 
                ${!isDarkMode ? 'bg-primary-50 text-primary-600 border border-primary-200' : 'bg-gray-800 text-primary-400 border border-gray-700'}`}
            >
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
              New: Expedited visa processing now available
            </motion.div>
            
            {/* Main Heading */}
            <h1 className="mb-6 leading-tight">
              <span className={`block ${!isDarkMode ? 'text-gray-900' : 'text-white'}`}>Your journey to</span>
              <span className="text-gradient text-shadow-glow">global opportunities</span>
              <span className={`block ${!isDarkMode ? 'text-gray-900' : 'text-white'}`}>starts here.</span>
            </h1>

            {/* Subtitle */}
            <p className={`text-lg md:text-xl mb-8 max-w-xl ${!isDarkMode ? 'text-gray-700' : 'text-gray-300'}`}>
              Expert guidance for visa applications, immigration services, and international relocation with a proven track record of success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Start Your Application <FaArrowRight className="ml-2" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group btn btn-outline flex items-center gap-2"
                onClick={() => setShowVideo(true)}
              >
                <div className={`relative w-5 h-5 rounded-full flex items-center justify-center 
                  ${!isDarkMode ? 'bg-primary-100' : 'bg-tertiary-900'}`}>
                  <FaPlay className={`w-2 h-2 group-hover:text-white transition-colors 
                    ${!isDarkMode ? 'text-primary-600' : 'text-tertiary-400'}`} />
                </div>
                Watch More
              </motion.button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                  className={`${!isDarkMode 
                    ? 'bg-white border border-gray-100 shadow-md shadow-primary-100/30' 
                    : 'bg-gray-800/80 backdrop-blur-sm border border-gray-700'} 
                    rounded-lg p-3 text-center hover-scale`}
                >
                  <div className={`${!isDarkMode ? 'text-primary-500' : 'text-tertiary-400'} mb-1 inline-flex`}>
                    {stat.icon}
                  </div>
                  <div className={`text-xl font-bold ${!isDarkMode ? 'text-gray-900' : 'text-white'}`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs ${!isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Destinations Highlight (Light Mode Only) */}
            {!isDarkMode && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex items-center gap-2 mt-6 text-sm text-gray-600"
              >
                <FaMapMarkerAlt className="text-accent-500" />
                <span>Popular destinations:</span>
                <div className="flex gap-2">
                  {['USA', 'Canada', 'UK', 'Australia', 'EU'].map((country, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-100 rounded-full hover:bg-primary-50 hover:text-primary-600 cursor-pointer transition-colors">
                      {country}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Main Image */}
              <div className="col-span-2 transform translate-y-8">
                <div className={`relative rounded-2xl overflow-hidden ${!isDarkMode 
                  ? 'shadow-2xl shadow-primary-300/20 border-2 border-white' 
                  : 'shadow-2xl shadow-tertiary-500/10 border-2 border-gray-800/60'}`}>
                  <img 
                    src={heroImages[0]} 
                    alt="Passport and travel documents" 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute bottom-4 left-4 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium border ${!isDarkMode 
                    ? 'bg-white/90 text-primary-600 border-white/20' 
                    : 'bg-gray-900/90 text-primary-400 border-gray-800/20'}`}>
                    Visa Approval Made Simple
                  </div>
                </div>
              </div>
              
              {/* Smaller Image 1 */}
              <div className={`relative rounded-2xl overflow-hidden transform -translate-y-10 lg:-translate-x-8 ${!isDarkMode 
                ? 'shadow-xl shadow-primary-300/20 border-2 border-white' 
                : 'shadow-xl shadow-tertiary-500/10 border-2 border-gray-800/60'}`}>
                <img 
                  src={heroImages[1]} 
                  alt="Passport stamp" 
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <motion.div 
                  className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full text-white flex items-center justify-center ${!isDarkMode ? 'bg-accent-500' : 'bg-accent-600'}`}
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  <FaUserCheck className="w-5 h-5" />
                </motion.div>
              </div>
              
              {/* Smaller Image 2 */}
              <div className={`relative rounded-2xl overflow-hidden transform -translate-y-10 lg:translate-x-8 ${!isDarkMode 
                ? 'shadow-xl shadow-primary-300/20 border-2 border-white' 
                : 'shadow-xl shadow-tertiary-500/10 border-2 border-gray-800/60'}`}>
                <img 
                  src={heroImages[2]} 
                  alt="Global travel" 
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className={`absolute top-3 left-3 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium border ${!isDarkMode 
                  ? 'bg-white/90 text-primary-600 border-white/20' 
                  : 'bg-gray-900/90 text-primary-400 border-gray-800/20'}`}>
                  Immigration Experts
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Modal */}
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full"
                onClick={() => setShowVideo(false)}
              >
                <FaTimes />
              </button>
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="How VisaPro Works"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero; 