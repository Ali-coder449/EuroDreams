import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaPlane, FaHome, FaFileAlt, FaUsers } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Student Visa",
      description: "Comprehensive support for international students pursuing education in Europe.",
      features: [
        "University Application Support",
        "Visa Documentation",
        "Accommodation Assistance",
        "Pre-departure Guidance"
      ]
    },
    {
      icon: <FaBriefcase className="w-8 h-8" />,
      title: "Work Visa",
      description: "Expert guidance for professionals seeking employment opportunities in Europe.",
      features: [
        "Job Search Support",
        "Work Permit Application",
        "Residence Permit",
        "Family Visa Support"
      ]
    },
    {
      icon: <FaPlane className="w-8 h-8" />,
      title: "Tourist Visa",
      description: "Smooth processing of tourist visas for your European travel plans.",
      features: [
        "Schengen Visa Application",
        "Travel Insurance",
        "Itinerary Planning",
        "Documentation Support"
      ]
    },
    {
      icon: <FaHome className="w-8 h-8" />,
      title: "Residence Permit",
      description: "Assistance with long-term residence permits and citizenship applications.",
      features: [
        "Permanent Residence",
        "Citizenship Application",
        "Family Reunification",
        "Integration Support"
      ]
    },
    {
      icon: <FaFileAlt className="w-8 h-8" />,
      title: "Documentation",
      description: "Comprehensive support for all visa-related documentation and paperwork.",
      features: [
        "Document Verification",
        "Translation Services",
        "Notary Services",
        "Legal Consultation"
      ]
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Family Visa",
      description: "Support for family reunification and dependent visa applications.",
      features: [
        "Family Reunification",
        "Dependent Visa",
        "Marriage Visa",
        "Child Visa"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
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
            Our Comprehensive{' '}
            <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a wide range of visa and immigration services to help you achieve your European dreams.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

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
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 