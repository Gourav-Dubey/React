import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';  
const HeroSection = () => {
  return (
    <section className="relative pt-48 pb-40 px-4 overflow-hidden bg-black">
      {/* Dark overlay for a richer effect */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Background Video */}
      <video 
        autoPlay loop muted playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      >
     <source src="/src/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto relative z-10 font-bold font-varela text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Your Personal Sporting Agent
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          WIN is what we CHASE
        </motion.p>

        {/* Enhanced Button */}
       <Link to="/login">  
       <motion.a
          
          className="bg-blue-600 text-white px-10 py-4 text-xl rounded-full inline-flex items-center space-x-3 transition-150 relative overflow-hidden group"
          whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 140, 255, 0.5)" }}
        >
          <span className="relative z-10">Get Started</span>
          <svg className="h-6 w-6 relative z-10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          {/* Glowing Animation */}
          <span className="absolute inset-0  opacity-0 group-hover:opacity-100 transition duration-500"></span>
        </motion.a></Link>
      </div>

      {/* SVG Wave Shape */}
      <div className="absolute bottom-0 w-full">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="fill-gray-900"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

