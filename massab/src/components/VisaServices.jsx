import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPassport, FaGraduationCap, FaBriefcase, FaUsers, FaPlane, FaGlobe, FaArrowRight, FaClock, FaCheckCircle } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import FilterSearch from './FilterSearch';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const VisaServices = () => {
  const { isDarkMode } = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);

  const visaServices = [
    {
      id: 1,
      title: 'Tourist Visa',
      icon: <FaPlane className="w-6 h-6" />,
      description: 'Visit your dream destination for leisure, sightseeing, or visiting friends and family.',
      duration: '1-6 months',
      popularity: 'High',
      processingTime: '7-14 days',
      price: '$149',
      countries: ['USA', 'Canada', 'UK', 'Australia', 'Schengen'],
      color: 'primary',
      animation: 'fadeInUp'
    },
    {
      id: 2,
      title: 'Student Visa',
      icon: <FaGraduationCap className="w-6 h-6" />,
      description: 'Pursue education abroad at prestigious institutions with our comprehensive student visa services.',
      duration: '1-4 years',
      popularity: 'High',
      processingTime: '14-30 days',
      price: '$249',
      countries: ['USA', 'Canada', 'UK', 'Australia', 'Germany'],
      color: 'tertiary',
      animation: 'fadeInLeft'
    },
    {
      id: 3,
      title: 'Work Visa',
      icon: <FaBriefcase className="w-6 h-6" />,
      description: 'Advance your career with international work opportunities and professional growth.',
      duration: '1-3 years',
      popularity: 'Medium',
      processingTime: '30-60 days',
      price: '$349',
      countries: ['USA', 'Canada', 'UK', 'Australia', 'UAE'],
      color: 'accent',
      animation: 'fadeInRight'
    },
    {
      id: 4,
      title: 'Family Visa',
      icon: <FaUsers className="w-6 h-6" />,
      description: 'Reunite with your loved ones abroad through our family sponsorship and visa services.',
      duration: '2-5 years',
      popularity: 'Medium',
      processingTime: '30-90 days',
      price: '$299',
      countries: ['USA', 'Canada', 'UK', 'Australia'],
      color: 'success',
      animation: 'zoomIn'
    },
    {
      id: 5,
      title: 'Business Visa',
      icon: <FaGlobe className="w-6 h-6" />,
      description: 'Expand your business globally with our specialized business visa consultation.',
      duration: '3 months - 2 years',
      popularity: 'High',
      processingTime: '7-21 days',
      price: '$399',
      countries: ['USA', 'Canada', 'UK', 'Singapore', 'UAE'],
      color: 'primary',
      animation: 'slideUp'
    },
    {
      id: 6,
      title: 'Permanent Residency',
      icon: <FaPassport className="w-6 h-6" />,
      description: 'Start a new life abroad with our permanent residency and immigration services.',
      duration: 'Permanent',
      popularity: 'Very High',
      processingTime: '6-12 months',
      price: '$999',
      countries: ['USA', 'Canada', 'Australia', 'New Zealand'],
      color: 'tertiary',
      animation: 'fadeInUp'
    },
  ];

  return (
    <section id="visa-services" className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {!isDarkMode && (
          <>
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-60"></div>
          </>
        )}
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollAnimationWrapper animation="fadeInDown" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Visa Services</span>
          </h2>
          <p className={`max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore our comprehensive range of visa services designed to meet your specific immigration needs.
            Our expert team ensures a smooth and hassle-free application process.
          </p>
        </ScrollAnimationWrapper>

        {/* Filter Component */}
        <ScrollAnimationWrapper animation="fadeIn" className="mb-12">
          <FilterSearch />
        </ScrollAnimationWrapper>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visaServices.map((service, index) => (
            <ScrollAnimationWrapper
              key={service.id}
              animation={service.animation}
              delay={index * 0.1}
              className="h-full"
            >
              <motion.div
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ scale: 1.02 }}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 h-full ${
                  hoveredCard === service.id
                    ? 'shadow-xl z-10'
                    : 'shadow-lg'
                }`}
              >
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-${service.color} p-6 relative`}>
                  <div className="flex justify-between items-start">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm text-white`}>
                      {service.icon}
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full">
                      {service.price}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4">{service.title}</h3>
                  <p className="text-white/80 text-sm mt-2 line-clamp-2">{service.description}</p>
                </div>

                {/* Card Body */}
                <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <FaClock className={`${isDarkMode ? 'text-tertiary-400' : 'text-tertiary-600'}`} />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Processing time: <span className="font-medium">{service.processingTime}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className={`${isDarkMode ? 'text-success-400' : 'text-success-600'}`} />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Duration: <span className="font-medium">{service.duration}</span>
                      </span>
                    </div>
                  </div>

                  {/* Countries */}
                  <div className="mt-4">
                    <p className={`text-xs mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Available for:</p>
                    <div className="flex flex-wrap gap-1">
                      {service.countries.map((country, idx) => (
                        <span 
                          key={idx}
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            isDarkMode 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`w-full py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium ${
                        isDarkMode
                          ? `bg-${service.color}-600/20 text-${service.color}-400 hover:bg-${service.color}-600/30`
                          : `bg-${service.color}-50 text-${service.color}-600 hover:bg-${service.color}-100`
                      }`}
                    >
                      Apply Now <FaArrowRight />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollAnimationWrapper 
          animation="zoomIn" 
          delay={0.3} 
          className={`mt-16 p-8 rounded-2xl ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
              : 'bg-gradient-to-br from-primary-50 to-tertiary-50 border border-primary-100'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Not sure which visa is right for you?
              </h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                Get a personalized consultation with our visa experts to find the best option for your needs.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary whitespace-nowrap"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default VisaServices; 