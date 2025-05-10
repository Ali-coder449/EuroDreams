import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  FaMoon, 
  FaSun, 
  FaBars, 
  FaTimes, 
  FaSearch, 
  FaUser, 
  FaShoppingCart,
  FaBell,
  FaEnvelope,
  FaSignOutAlt,
  FaCog,
  FaRegCalendar,
  FaCheckCircle,
  FaExclamationCircle,
  FaArrowRight
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ currentSection, onGetStartedClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [activeLink, setActiveLink] = useState('hero'); // Default active link
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      message: 'Your visa application has been approved!',
      time: '2 hours ago',
      isRead: false,
      icon: <FaCheckCircle className="text-success-500" />
    },
    {
      id: 2,
      type: 'warning',
      message: 'Your document submission is due tomorrow.',
      time: '1 day ago',
      isRead: false,
      icon: <FaExclamationCircle className="text-warning-500" />
    }
  ]);
  
  const { isDarkMode, toggleTheme } = useTheme();
  const searchInputRef = useRef(null);
  const userDropdownRef = useRef(null);
  const notificationsRef = useRef(null);
  const searchResultsRef = useRef(null);

  // Demo search results based on search term
  const demoSearchData = [
    { id: 1, title: 'Tourist Visa Services', type: 'service', url: '#services' },
    { id: 2, title: 'Student Visa Application', type: 'service', url: '#services' },
    { id: 3, title: 'Business Visa Requirements', type: 'page', url: '#about' },
    { id: 4, title: 'USA Visa Processing Time', type: 'article', url: '#portfolio' },
    { id: 5, title: 'How to Apply for Family Visa', type: 'guide', url: '#services' },
  ];

  // Update activeLink when currentSection changes
  useEffect(() => {
    if (currentSection) {
      setActiveLink(currentSection);
    }
  }, [currentSection]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
      if (searchResultsRef.current && !searchResultsRef.current.contains(event.target) && !searchInputRef.current?.contains(event.target)) {
        setShowSearchResults(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Update search results when search term changes
  useEffect(() => {
    if (searchTerm.length > 1) {
      // Filter demo data based on search term
      const filteredResults = demoSearchData.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  }, [searchTerm]);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  const openSearch = () => {
    setIsSearchOpen(true);
    // Close other dropdowns
    setIsNotificationsOpen(false);
    setIsUserDropdownOpen(false);
  };
  
  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchTerm('');
    setShowSearchResults(false);
  };

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Demo: Log search action
      console.log(`Searching for: ${searchTerm}`);
      // Would typically call an API here
      alert(`Search submitted for: ${searchTerm}`);
      closeSearch();
    }
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    // Close other dropdowns
    setIsNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    // Close other dropdowns
    setIsUserDropdownOpen(false);
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      isRead: true
    })));
  };

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };

  const handleGetStarted = () => {
    if (onGetStartedClick) {
      onGetStartedClick();
    } else {
      // Fallback if the prop isn't passed
      alert('Get Started clicked - this would typically open a registration or onboarding flow');
    }
  };

  const handleAccountAction = (action) => {
    alert(`${action} clicked - this would typically trigger the ${action.toLowerCase()} functionality`);
    setIsUserDropdownOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-2 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link
              to="hero"
              className="flex items-center gap-2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setActiveLink('hero')}
            >
              <img 
                src="/images/logo.png" 
                alt="VisaPro Logo" 
                className="h-12 md:h-16 w-auto" 
                style={{ minWidth: '48px', width: 'auto' }}
              />
              <span className="text-xl md:text-2xl font-bold text-gradient cursor-pointer">VisaPro</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active font-medium text-primary-600 dark:text-primary-400"
                  onClick={() => setActiveLink(link.to)}
                  onSetActive={() => setActiveLink(link.to)}
                  className={`nav-link text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors ${
                    activeLink === link.to ? 'active font-medium text-primary-600 dark:text-primary-400' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Search Toggle Button (visible when search is closed) */}
            {!isSearchOpen && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                aria-label="Open search"
                onClick={openSearch}
              >
                <FaSearch className="w-4 h-4" />
              </motion.button>
            )}

            {/* Additional Action Buttons (visible on desktop and when search is closed) */}
            {!isSearchOpen && (
              <>
                {/* Notifications Button */}
                <div className="relative" ref={notificationsRef}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden sm:flex p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors relative"
                    aria-label="Notifications"
                    onClick={toggleNotifications}
                  >
                    <FaBell className="w-4 h-4" />
                    {notifications.some(notification => !notification.isRead) && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 text-white text-xs rounded-full flex items-center justify-center">
                        {notifications.filter(n => !n.isRead).length}
                      </span>
                    )}
                  </motion.button>
                  
                  {/* Notifications Dropdown */}
                  <AnimatePresence>
                    {isNotificationsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-80 rounded-lg shadow-lg py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 z-50"
                      >
                        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                          <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Notifications</h3>
                          <button 
                            onClick={markAllNotificationsAsRead}
                            className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
                          >
                            Mark all as read
                          </button>
                        </div>
                        
                        <div className="max-h-60 overflow-y-auto">
                          {notifications.length === 0 ? (
                            <div className="py-4 text-center text-gray-500 dark:text-gray-400">
                              No notifications
                            </div>
                          ) : (
                            notifications.map(notification => (
                              <div 
                                key={notification.id}
                                className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer ${
                                  !notification.isRead ? 'border-l-2 border-primary-500' : ''
                                }`}
                                onClick={() => markNotificationAsRead(notification.id)}
                              >
                                <div className="flex gap-3">
                                  <div className="mt-0.5">
                                    {notification.icon}
                                  </div>
                                  <div>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} ${
                                      !notification.isRead ? 'font-medium' : ''
                                    }`}>
                                      {notification.message}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                      {notification.time}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                        
                        <div className="border-t border-gray-200 dark:border-gray-700 py-2 px-4 text-center">
                          <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={() => setIsNotificationsOpen(false)}
                            className="text-xs text-primary-600 dark:text-primary-400 hover:underline cursor-pointer"
                          >
                            View all notifications
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* User Account Button */}
                <div className="relative" ref={userDropdownRef}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden sm:flex p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                    aria-label="Account"
                    onClick={toggleUserDropdown}
                  >
                    <FaUser className="w-4 h-4" />
                  </motion.button>

                  {/* User Dropdown */}
                  <AnimatePresence>
                    {isUserDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 z-50"
                      >
                        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                          <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>John Doe</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">john.doe@example.com</p>
                        </div>
                        <button 
                          onClick={() => handleAccountAction('Profile')}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                        >
                          <FaUser className="w-3.5 h-3.5" />
                          <span>Profile</span>
                        </button>
                        <button 
                          onClick={() => handleAccountAction('Settings')}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                        >
                          <FaCog className="w-3.5 h-3.5" />
                          <span>Settings</span>
                        </button>
                        <button 
                          onClick={() => handleAccountAction('Applications')}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                        >
                          <FaRegCalendar className="w-3.5 h-3.5" />
                          <span>My Applications</span>
                        </button>
                        <div className="border-t border-gray-200 dark:border-gray-700 mt-1"></div>
                        <button 
                          onClick={() => handleAccountAction('Logout')}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                        >
                          <FaSignOutAlt className="w-3.5 h-3.5" />
                          <span>Logout</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}

            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <FaSun className="w-4 h-4 text-yellow-400" />
              ) : (
                <FaMoon className="w-4 h-4 text-primary-600" />
              )}
            </motion.button>

            {/* Mobile Menu Button (only visible when search is closed) */}
            {!isSearchOpen && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg bg-primary-50 hover:bg-primary-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-primary-600 dark:text-primary-400 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </motion.button>
            )}

            {/* Get Started Button (desktop only and when search is closed) */}
            {!isSearchOpen && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex btn btn-primary text-sm"
                onClick={handleGetStarted}
              >
                Get Started
              </motion.button>
            )}
          </div>
        </div>

        {/* Expandable Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <>
              <motion.form
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-x-0 top-full mt-2 px-4 sm:px-6 lg:px-8 z-50"
                onSubmit={handleSearchSubmit}
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <input
                    ref={searchInputRef}
                    type="search"
                    placeholder="Search for services, visa types, destinations..."
                    className="w-full py-3 pl-4 pr-10 bg-transparent border-none outline-none text-gray-700 dark:text-gray-300 placeholder-gray-500"
                    value={searchTerm}
                    onChange={handleSearchInput}
                  />
                  <div className="absolute right-0 top-0 h-full flex items-center gap-2 pr-3">
                    <button
                      type="submit"
                      className="p-1.5 rounded-full bg-primary-500 text-white"
                      aria-label="Search"
                    >
                      <FaSearch className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={closeSearch}
                      className="p-1.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      aria-label="Close search"
                    >
                      <FaTimes className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.form>

              {/* Search Results Dropdown */}
              <AnimatePresence>
                {showSearchResults && searchResults.length > 0 && (
                  <motion.div
                    ref={searchResultsRef}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-x-0 top-[calc(100%+64px)] px-4 sm:px-6 lg:px-8 z-50"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                      <div className="py-2">
                        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {searchResults.length} results found
                          </p>
                        </div>
                        <div className="max-h-60 overflow-y-auto">
                          {searchResults.map(result => (
                            <Link
                              key={result.id}
                              to={result.url.replace('#', '')}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              onClick={closeSearch}
                              className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                            >
                              <div className="flex items-start">
                                <div className="flex-grow">
                                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                                    {result.title}
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                                  </p>
                                </div>
                                <FaArrowRight className={`w-3 h-3 mt-1.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-4 pb-2 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveLink(link.to);
                  }}
                  onSetActive={() => setActiveLink(link.to)}
                  className={`block py-2.5 px-4 rounded-lg transition-colors ${
                    activeLink === link.to
                      ? 'bg-primary-50 dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-medium'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={handleGetStarted}
                className="w-full mt-2 py-2.5 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 