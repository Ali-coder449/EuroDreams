import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPlayCircle, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { isDarkMode } = useTheme();
  const videoRef = useRef(null);

  // Videos data for displaying in the gallery
  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'How VisaPro Works',
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      duration: '3:42',
      description: 'Learn about our streamlined visa application process and how we can help you achieve your immigration goals.'
    },
    {
      id: 'e_E9W2vsRbQ',
      title: 'Client Success Stories',
      thumbnail: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      duration: '4:55',
      description: 'Hear from satisfied clients who have successfully relocated with our expert assistance.'
    },
    {
      id: 'QH2-TGUlwu4',
      title: 'Immigration Tips & Tricks',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      duration: '6:18',
      description: 'Expert advice to help you navigate complex immigration procedures and avoid common pitfalls.'
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const playVideo = (video) => {
    setSelectedVideo(video);
    setShowVideo(true);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleClose = () => {
    setShowVideo(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section id="video-section" className={`py-20 ${!isDarkMode ? 'bg-gray-50' : 'bg-gray-900'}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${!isDarkMode ? 'text-gray-900' : 'text-white'}`}
          >
            Watch and Learn
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={`max-w-2xl mx-auto text-lg ${!isDarkMode ? 'text-gray-600' : 'text-gray-300'}`}
          >
            Get insights into our processes, success stories, and expert immigration advice through our curated video gallery.
          </motion.p>
        </div>

        {/* Video Gallery */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl overflow-hidden shadow-lg ${!isDarkMode ? 'bg-white' : 'bg-gray-800'} hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Video Thumbnail */}
              <div 
                className="relative aspect-video cursor-pointer group"
                onClick={() => playVideo(video)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-600/90 text-white transform group-hover:scale-110 transition-transform">
                    <FaPlayCircle className="w-10 h-10" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className={`text-xl font-semibold mb-2 ${!isDarkMode ? 'text-gray-900' : 'text-white'}`}>
                  {video.title}
                </h3>
                <p className={`text-sm ${!isDarkMode ? 'text-gray-600' : 'text-gray-300'}`}>
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <div 
              className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Custom Video Controls */}
              <button
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                onClick={handleClose}
              >
                <FaTimes className="w-6 h-6" />
              </button>
              
              <div className="relative">
                <iframe
                  ref={videoRef}
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Video Info Bar */}
                <div className="p-4 bg-black">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {selectedVideo.description}
                  </p>
                </div>

                {/* Custom Video Controls */}
                <div className="flex items-center justify-between p-3 bg-black/80 border-t border-gray-800">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={togglePlay}
                      className="text-white hover:text-primary-400 transition-colors"
                    >
                      {isPlaying ? <FaPause className="w-4 h-4" /> : <FaPlay className="w-4 h-4" />}
                    </button>
                    
                    <button 
                      onClick={toggleMute}
                      className="text-white hover:text-primary-400 transition-colors"
                    >
                      {isMuted ? <FaVolumeMute className="w-4 h-4" /> : <FaVolumeUp className="w-4 h-4" />}
                    </button>
                    
                    <div className="text-gray-400 text-xs">
                      {selectedVideo.duration}
                    </div>
                  </div>
                  
                  <button className="text-white hover:text-primary-400 transition-colors">
                    <FaExpand className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VideoSection; 