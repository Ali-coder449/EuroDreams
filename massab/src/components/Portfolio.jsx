import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaPlane, FaUsers, FaFileAlt, FaHome } from 'react-icons/fa';

const Portfolio = () => {
  const visaTypes = [
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Student Visas",
      count: "2000+",
      description: "Successful student visa applications for top European universities."
    },
    {
      icon: <FaBriefcase className="w-8 h-8" />,
      title: "Work Permits",
      count: "1500+",
      description: "Professional work permits secured across various industries."
    },
    {
      icon: <FaPlane className="w-8 h-8" />,
      title: "Tourist Visas",
      count: "800+",
      description: "Tourist and travel visas for European exploration."
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Family Visas",
      count: "500+",
      description: "Families reunited through successful visa applications."
    },
    {
      icon: <FaFileAlt className="w-8 h-8" />,
      title: "Business Visas",
      count: "300+",
      description: "Business and investor visas for entrepreneurs."
    },
    {
      icon: <FaHome className="w-8 h-8" />,
      title: "Residence Permits",
      count: "400+",
      description: "Long-term residence permits obtained for clients."
    }
  ];

  const successStats = [
    { number: "5000+", label: "Successful Applications" },
    { number: "98%", label: "Success Rate" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Success Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Track record of successful visa applications across various categories.
          </p>
        </motion.div>

        {/* Success Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {successStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Visa Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {type.title}
              </h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {type.count}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Application
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 