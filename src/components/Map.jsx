import React from 'react';
import { motion } from 'framer-motion';

const Map = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Location
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Visit our office or get in touch with us for a consultation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076994379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1586000412513!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Main Office</h3>
            <p className="text-gray-600 dark:text-gray-300">
              123 Visa Street<br />
              Dream City, Europe<br />
              Postal Code: 12345
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Branch Office</h3>
            <p className="text-gray-600 dark:text-gray-300">
              456 Immigration Road<br />
              Success City, Europe<br />
              Postal Code: 67890
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Contact Hours</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Map; 