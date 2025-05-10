import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const SearchBar = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    visaType: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search submission
    console.log('Search submitted:', searchData);
  };

  const destinations = [
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Netherlands',
    'Sweden',
    'Denmark',
    'Norway'
  ];

  const visaTypes = [
    'Student Visa',
    'Work Visa',
    'Tourist Visa',
    'Business Visa',
    'Family Reunification',
    'Residence Permit'
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Find Your Visa Service
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Search for visa services based on your destination, visa type, and preferred date.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                  Destination
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    id="destination"
                    name="destination"
                    value={searchData.destination}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Destination</option>
                    {destinations.map((dest, index) => (
                      <option key={index} value={dest}>{dest}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="visaType" className="block text-sm font-medium text-gray-700 mb-1">
                  Visa Type
                </label>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    id="visaType"
                    name="visaType"
                    value={searchData.visaType}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Visa Type</option>
                    {visaTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={searchData.date}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Search Services
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchBar; 