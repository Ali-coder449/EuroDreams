import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import VideoSection from './components/VideoSection'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Loading from './components/Loading'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import GetStartedModal from './components/GetStartedModal'
import './styles/App.css'

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.99],
      staggerChildren: 0.1,
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

// Component transition variants for staggered animations
const componentVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

function App() {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('hero');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    // Setup intersection observer for section detection
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });
    
    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Expose openModal function to window so it can be called from anywhere
  useEffect(() => {
    window.openGetStartedModal = () => setIsModalOpen(true);
    
    return () => {
      delete window.openGetStartedModal;
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        {/* Background gradients */}
        <div className="fixed inset-0 z-0 opacity-30 dark:opacity-50 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-accent-400/20 dark:bg-tertiary-500/20 blur-3xl"></div>
          <div className="absolute bottom-[-5%] left-[5%] w-[30%] h-[30%] rounded-full bg-primary-400/20 dark:bg-primary-600/20 blur-3xl"></div>
          <div className="absolute top-[20%] left-[10%] w-[20%] h-[20%] rounded-full bg-tertiary-400/10 dark:bg-accent-500/10 blur-3xl"></div>
        </div>
        
        <Cursor />
        <ScrollProgress />
        
        <AnimatePresence mode="wait">
          {loading ? (
            <Loading key="loading" />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <Navbar currentSection={currentSection} onGetStartedClick={openModal} />
              <main>
                <Hero />
                <About />
                <VideoSection />
                <Services />
                <WhyChooseUs />
                <Portfolio />
                <Testimonials />
                <Contact />
              </main>
              <Footer />
              <BackToTop />
              <GetStartedModal isOpen={isModalOpen} onClose={closeModal} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}

export default App