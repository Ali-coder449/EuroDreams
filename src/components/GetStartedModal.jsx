import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGoogle, FaFacebook, FaLinkedin, FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const GetStartedModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const { isDarkMode } = useTheme();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (activeTab === 'login') {
      // Handle login
      console.log('Login with:', formData.email, formData.password);
      alert(`Login attempted with email: ${formData.email}`);
    } else {
      // Handle signup
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      console.log('Signup with:', formData.name, formData.email, formData.password);
      alert(`Signup attempted for: ${formData.name} (${formData.email})`);
    }
    
    // Reset form and close modal
    setFormData({
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
      agreeToTerms: false
    });
    onClose();
  };

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSocialAuth = (provider) => {
    console.log(`Authenticating with ${provider}`);
    alert(`${provider} authentication would be initiated here`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        >
          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`w-full max-w-md rounded-xl shadow-xl overflow-hidden ${
              isDarkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200'
            }`}
          >
            {/* Modal Header */}
            <div className="relative">
              {/* Background gradient decoration */}
              <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
              
              <div className="px-6 py-4 relative flex justify-between items-center">
                <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {activeTab === 'login' ? 'Welcome Back' : 'Create Account'}
                </h2>
                <button 
                  onClick={onClose}
                  className={`p-2 rounded-full hover:bg-black/10 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}
                >
                  <FaTimes />
                </button>
              </div>
              
              {/* Tab Navigation */}
              <div className="flex px-6 pb-0 relative">
                <button
                  onClick={() => toggleTab('login')}
                  className={`py-2 px-4 font-medium text-sm transition-colors relative ${
                    activeTab === 'login'
                      ? isDarkMode
                        ? 'text-primary-400'
                        : 'text-primary-600'
                      : isDarkMode
                        ? 'text-gray-400 hover:text-gray-300'
                        : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Login
                  {activeTab === 'login' && (
                    <motion.div
                      layoutId="tabIndicator"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${isDarkMode ? 'bg-primary-400' : 'bg-primary-600'}`}
                    />
                  )}
                </button>
                <button
                  onClick={() => toggleTab('signup')}
                  className={`py-2 px-4 font-medium text-sm transition-colors relative ${
                    activeTab === 'signup'
                      ? isDarkMode
                        ? 'text-primary-400'
                        : 'text-primary-600'
                      : isDarkMode
                        ? 'text-gray-400 hover:text-gray-300'
                        : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Sign Up
                  {activeTab === 'signup' && (
                    <motion.div
                      layoutId="tabIndicator"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${isDarkMode ? 'bg-primary-400' : 'bg-primary-600'}`}
                    />
                  )}
                </button>
              </div>
            </div>
            
            <div className="px-6 py-4">
              {/* Social Login Options */}
              <div className="mb-4">
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => handleSocialAuth('Google')}
                    className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 text-sm ${
                      isDarkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <FaGoogle className="text-red-500" />
                    <span>Google</span>
                  </button>
                  <button
                    onClick={() => handleSocialAuth('Facebook')}
                    className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 text-sm ${
                      isDarkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <FaFacebook className="text-blue-600" />
                    <span>Facebook</span>
                  </button>
                  <button
                    onClick={() => handleSocialAuth('LinkedIn')}
                    className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 text-sm ${
                      isDarkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <FaLinkedin className="text-blue-700" />
                    <span>LinkedIn</span>
                  </button>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className={`flex-1 h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>or continue with email</span>
                  <div className={`flex-1 h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                </div>
              </div>
              
              {/* Login/Signup Form */}
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {activeTab === 'login' ? (
                    <motion.div
                      key="login"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Email */}
                      <div className="mb-3">
                        <label htmlFor="email" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Email Address
                        </label>
                        <div className={`flex items-center border rounded-lg ${
                          isDarkMode
                            ? 'bg-gray-700 border-gray-600 focus-within:border-primary-500'
                            : 'bg-white border-gray-300 focus-within:border-primary-500'
                        }`}>
                          <div className="pl-3">
                            <FaEnvelope className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`w-full p-2.5 bg-transparent outline-none text-sm ${
                              isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      {/* Password */}
                      <div className="mb-4">
                        <label htmlFor="password" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Password
                        </label>
                        <div className={`flex items-center border rounded-lg ${
                          isDarkMode
                            ? 'bg-gray-700 border-gray-600 focus-within:border-primary-500'
                            : 'bg-white border-gray-300 focus-within:border-primary-500'
                        }`}>
                          <div className="pl-3">
                            <FaLock className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                          </div>
                          <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className={`w-full p-2.5 bg-transparent outline-none text-sm ${
                              isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}
                            placeholder="••••••••"
                          />
                          <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="pr-3"
                          >
                            {showPassword ? (
                              <FaEyeSlash className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            ) : (
                              <FaEye className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      {/* Remember Me & Forgot Password */}
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                          <input
                            id="remember"
                            type="checkbox"
                            className="w-4 h-4 accent-primary-600 border rounded"
                          />
                          <label htmlFor="remember" className={`ml-2 text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Remember me
                          </label>
                        </div>
                        <a href="#" className={`text-xs ${isDarkMode ? 'text-primary-400' : 'text-primary-600'} hover:underline`}>
                          Forgot Password?
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="signup"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Name */}
                      <div className="mb-3">
                        <label htmlFor="name" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Full Name
                        </label>
                        <div className={`flex items-center border rounded-lg ${
                          isDarkMode
                            ? 'bg-gray-700 border-gray-600 focus-within:border-primary-500'
                            : 'bg-white border-gray-300 focus-within:border-primary-500'
                        }`}>
                          <div className="pl-3">
                            <FaUser className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`w-full p-2.5 bg-transparent outline-none text-sm ${
                              isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      
                      {/* Email */}
                      <div className="mb-3">
                        <label htmlFor="signupEmail" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Email Address
                        </label>
                        <div className={`flex items-center border rounded-lg ${
                          isDarkMode
                            ? 'bg-gray-700 border-gray-600 focus-within:border-primary-500'
                            : 'bg-white border-gray-300 focus-within:border-primary-500'
                        }`}>
                          <div className="pl-3">
                            <FaEnvelope className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                          </div>
                          <input
                            type="email"
                            id="signupEmail"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`w-full p-2.5 bg-transparent outline-none text-sm ${
                              isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      {/* Password */}
                      <div className="mb-3">
                        <label htmlFor="signupPassword" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Password
                        </label>
                        <div className={`flex items-center border rounded-lg ${
                          isDarkMode
                            ? 'bg-gray-700 border-gray-600 focus-within:border-primary-500'
                            : 'bg-white border-gray-300 focus-within:border-primary-500'
                        }`}>
                          <div className="pl-3">
                            <FaLock className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                          </div>
                          <input
                            type={showPassword ? "text" : "password"}
                            id="signupPassword"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className={`w-full p-2.5 bg-transparent outline-none text-sm ${
                              isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}
                            placeholder="••••••••"
                          />
                          <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="pr-3"
                          >
                            {showPassword ? (
                              <FaEyeSlash className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            ) : (
                              <FaEye className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      {/* Confirm Password */}
                      <div className="mb-4">
                        <label htmlFor="confirmPassword" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Confirm Password
                        </label>
                        <div className={`flex items-center border rounded-lg ${
                          isDarkMode
                            ? 'bg-gray-700 border-gray-600 focus-within:border-primary-500'
                            : 'bg-white border-gray-300 focus-within:border-primary-500'
                        }`}>
                          <div className="pl-3">
                            <FaLock className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                          </div>
                          <input
                            type={showPassword ? "text" : "password"}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className={`w-full p-2.5 bg-transparent outline-none text-sm ${
                              isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}
                            placeholder="••••••••"
                          />
                        </div>
                      </div>
                      
                      {/* Terms and Conditions */}
                      <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                          <input
                            id="terms"
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            required
                            className="w-4 h-4 accent-primary-600 border rounded"
                          />
                        </div>
                        <label htmlFor="terms" className={`ml-2 text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          I agree to the <a href="#" className={`${isDarkMode ? 'text-primary-400' : 'text-primary-600'} hover:underline`}>Terms and Conditions</a>
                        </label>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-medium py-2.5 rounded-lg transition-colors"
                >
                  {activeTab === 'login' ? 'Login' : 'Create Account'}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GetStartedModal; 