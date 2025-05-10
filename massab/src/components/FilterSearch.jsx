import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaSearch, FaMapMarkerAlt, FaPassport, FaGlobe, FaCalendarAlt, FaUsers, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const FilterSearch = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { isDarkMode } = useTheme();

  // Visa categories
  const categories = [
    { id: 'all', name: 'All Visas', icon: <FaGlobe /> },
    { id: 'tourist', name: 'Tourist', icon: <FaMapMarkerAlt /> },
    { id: 'student', name: 'Student', icon: <FaUsers /> },
    { id: 'work', name: 'Work', icon: <FaPassport /> },
    { id: 'family', name: 'Family', icon: <FaUsers /> },
    { id: 'business', name: 'Business', icon: <FaGlobe /> },
  ];

  // Filter options
  const filterOptions = [
    { id: 'country', name: 'Country', options: ['USA', 'Canada', 'UK', 'Australia', 'EU', 'Other'] },
    { id: 'duration', name: 'Duration', options: ['1-3 months', '3-6 months', '6-12 months', '1+ year'] },
    { id: 'processing', name: 'Processing Time', options: ['Express (1-3 days)', 'Standard (7-14 days)', 'Regular (30+ days)'] },
  ];

  const toggleFilter = (filterId, option) => {
    const filterKey = `${filterId}:${option}`;
    if (selectedFilters.includes(filterKey)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filterKey));
    } else {
      setSelectedFilters([...selectedFilters, filterKey]);
    }
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div className={`rounded-xl overflow-hidden ${isDarkMode 
      ? 'bg-gray-800/90 border border-gray-700' 
      : 'bg-white border border-gray-100 shadow-lg shadow-primary-100/10'}`}>
      
      {/* Category Tabs */}
      <div className="flex overflow-x-auto no-scrollbar p-1">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-all ${
              activeTab === category.id 
                ? isDarkMode
                  ? 'bg-primary-600/20 text-primary-400'
                  : 'bg-primary-50 text-primary-600'
                : isDarkMode
                  ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100/80'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={activeTab === category.id ? 'opacity-100' : 'opacity-70'}>
              {category.icon}
            </span>
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Main Search Bar */}
      <div className="p-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </div>
          <input
            type="search"
            className={`w-full p-3 pl-10 text-sm rounded-lg ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-primary-500' 
                : 'bg-gray-50 border border-gray-300 text-gray-900 focus:border-primary-500'
            } focus:ring-2 focus:ring-primary-500/30 focus:outline-none`}
            placeholder={`Search ${activeTab === 'all' ? 'all visa types' : activeTab + ' visas'}...`}
          />
        </div>
        
        <motion.button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium ${
            isFilterOpen || selectedFilters.length > 0
              ? isDarkMode 
                ? 'bg-primary-600/30 text-primary-400' 
                : 'bg-primary-100 text-primary-600'
              : isDarkMode
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaFilter />
          Filter
          {selectedFilters.length > 0 && (
            <span className={`ml-1 px-1.5 py-0.5 text-xs rounded-full ${
              isDarkMode ? 'bg-primary-500 text-white' : 'bg-primary-500 text-white'
            }`}>
              {selectedFilters.length}
            </span>
          )}
        </motion.button>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`overflow-hidden border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
          >
            <div className="p-4">
              <div className="flex justify-between mb-4">
                <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Filter Options</h3>
                {selectedFilters.length > 0 && (
                  <button 
                    onClick={clearFilters}
                    className={`text-sm ${isDarkMode ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-700'}`}
                  >
                    Clear all
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filterOptions.map((filter) => (
                  <div key={filter.id} className="space-y-2">
                    <h4 className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{filter.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {filter.options.map((option) => {
                        const isSelected = selectedFilters.includes(`${filter.id}:${option}`);
                        return (
                          <button
                            key={option}
                            onClick={() => toggleFilter(filter.id, option)}
                            className={`px-3 py-1 text-xs rounded-full transition-colors ${
                              isSelected
                                ? isDarkMode 
                                  ? 'bg-primary-500/30 text-primary-300 border border-primary-500/30' 
                                  : 'bg-primary-100 text-primary-700 border border-primary-200'
                                : isDarkMode
                                  ? 'bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600' 
                                  : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Apply Filters Button */}
              <div className="mt-4 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary text-sm px-5"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Apply Filters
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Selected Filters Display */}
      {selectedFilters.length > 0 && !isFilterOpen && (
        <div className={`px-4 py-2 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex flex-wrap gap-2 items-center">
            <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Active filters:</span>
            {selectedFilters.map((filter) => {
              const [filterType, value] = filter.split(':');
              return (
                <div 
                  key={filter}
                  className={`flex items-center gap-1 px-2 py-1 text-xs rounded-full ${
                    isDarkMode 
                      ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                      : 'bg-gray-100 text-gray-700 border border-gray-200'
                  }`}
                >
                  {value}
                  <button 
                    onClick={() => toggleFilter(filterType, value)} 
                    className={`ml-1 rounded-full p-0.5 ${
                      isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                    }`}
                  >
                    <FaTimes className="w-2 h-2" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSearch; 