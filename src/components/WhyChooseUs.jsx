import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaHandshake, FaChartLine, FaClock, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      title: "High Success Rate",
      description: "Our proven track record with a 98% visa approval rate speaks for itself."
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Expert Team",
      description: "Experienced consultants with in-depth knowledge of immigration laws."
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Personalized Service",
      description: "Tailored solutions based on your specific needs and circumstances."
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Transparent Process",
      description: "Clear communication and regular updates throughout your application."
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Fast Processing",
      description: "Efficient handling of applications to minimize waiting times."
    },
    {
      icon: <FaHeadset className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your queries and concerns."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose{' '}
            <span className="text-blue-600 dark:text-blue-400">EuroDreams</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We are committed to providing the best visa and immigration services to make your European dreams a reality.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid md:grid-cols-4 gap-8"
        >
          {[
            { number: "5000+", label: "Happy Clients" },
            { number: "98%", label: "Success Rate" },
            { number: "10+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 