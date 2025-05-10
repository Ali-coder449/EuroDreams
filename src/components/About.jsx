import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaGlobe, FaHandshake } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Expert Team",
      description: "Our team consists of experienced immigration consultants and legal experts."
    },
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: "Global Network",
      description: "Strong connections with embassies and immigration authorities worldwide."
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Personalized Service",
      description: "Tailored solutions to meet your specific immigration needs and goals."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Team Meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Years of Experience</div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Your Trusted Partner in{' '}
              <span className="text-blue-600 dark:text-blue-400">European Immigration</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              At EuroDreams, we understand that moving to Europe is a life-changing decision. 
              Our mission is to make your immigration journey smooth, transparent, and successful.
            </p>

            {/* Features Grid */}
            <div className="grid gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 