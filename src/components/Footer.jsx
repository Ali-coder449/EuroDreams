import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#services' },
      { name: 'Why Choose Us', href: '#why-choose-us' },
      { name: 'Testimonials', href: '#testimonials' }
    ],
    services: [
      { name: 'Student Visa', href: '#services' },
      { name: 'Work Visa', href: '#services' },
      { name: 'Tourist Visa', href: '#services' },
      { name: 'Residence Permit', href: '#services' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">EuroDreams</h3>
            <p className="mb-6">
              Your trusted partner in making European dreams a reality through expert visa and immigration services.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <span>info@eurodreams.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>123 Immigration Street, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="transition-colors"
                >
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="transition-colors"
                >
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="transition-colors"
                >
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} EuroDreams. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 