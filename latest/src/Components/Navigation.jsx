
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleVideoModal = () => {
    setIsVideoModalOpen(!isVideoModalOpen);
  };

  return (
    <nav className="w-full bg-gray-900/90 backdrop-blur-md shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <svg className="h-10 w-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-2xl font-bold text-blue-400">NXTMOOV</span>
          </div>

          {/* Center Video Button */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition-all hover:bg-blue-600"
            onClick={toggleVideoModal} // Toggle video modal on click
          >
            {isVideoModalOpen ? "CLOSE " : "DEMO NXTMOOV ENGINE"} {/* Change button text based on modal state */}
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <div className="relative group">
              <button className="text-white hover:text-blue-400 flex items-center gap-1 transition">
                Sports
                <svg className="w-5 h-5 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <ul className="absolute left-0 mt-0 bg-gray-800 text-white rounded-lg shadow-md w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
                <li><Link to="/cricket" className="block px-4 py-2 hover:bg-gray-700">Cricket</Link></li>
                <li><Link to="/volleyball" className="block px-4 py-2 hover:bg-gray-700">Volleyball</Link></li>
                <li><Link to="/badminton" className="block px-4 py-2 hover:bg-gray-700">Badminton</Link></li>
                <li><Link to="/table-tennis" className="block px-4 py-2 hover:bg-gray-700">Table Tennis</Link></li>
                <li><Link to="/kabaddi" className="block px-4 py-2 hover:bg-gray-700">Kabaddi</Link></li>
              </ul>
            </div>
            <Link to="/AboutUs" className="text-white hover:text-blue-400 transition">About Us</Link>
            {/* <Link to="/News" className="text-white hover:text-blue-400 transition">News</Link> */}
            <Link to="/login" className="text-white hover:text-blue-400 transition">Connect Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="p-2 rounded-md text-white hover:text-blue-400 focus:outline-none">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div 
            className=" inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={toggleVideoModal} // Close modal when clicking outside
          >
            <motion.div 
              className="relative w-full h-full flex justify-center items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
            >
              {/* Video */}
              <video 
                autoPlay 
                controls 
                controlsList="nodownload" 
                className="w-full h-full max-w-[70vw] max-h-[70vh] object-contain rounded-lg" // Smaller video size
              >
                <source src="/assets/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 
