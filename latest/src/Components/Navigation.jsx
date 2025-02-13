// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMobileSportsDropdownOpen, setIsMobileSportsDropdownOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     if (isMobileSportsDropdownOpen) {
//       setIsMobileSportsDropdownOpen(false);
//     }
//   };

//   const toggleSportsDropdown = () => {
//     setIsMobileSportsDropdownOpen(!isMobileSportsDropdownOpen);
//     if (!isMobileSportsDropdownOpen && isMobileMenuOpen) {
//       setIsMobileMenuOpen(false);
//     }
//   };

//   return (
//     <nav className="w-full z-50 bg-gray-900/90 backdrop-blur-md shadow-lg">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//         <div className="flex items-center justify-between h-20">
//           <div className="flex items-center">
//             <svg
//               className="h-10 w-10 text-blue-500"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span className="ml-3 text-2xl font-bold text-blue-400">NXTMOOV</span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-6">
//             <div className="relative group">
//               <button className="text-white hover:text-blue-400 flex items-center gap-1 transition">
//                 Sports
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                 </svg>
//               </button>
//               <ul className="absolute hidden bg-gray-800 text-white rounded-lg shadow-md w-44 group-hover:block z-50">
//                 <li><Link to="/cricket" className="block px-4 py-2 hover:bg-gray-700">Cricket</Link></li>
//                 <li><Link to="/volleyball" className="block px-4 py-2 hover:bg-gray-700">Volleyball</Link></li>
//                 <li><Link to="/badminton" className="block px-4 py-2 hover:bg-gray-700">Badminton</Link></li>
//                 <li><Link to="/table-tennis" className="block px-4 py-2 hover:bg-gray-700">Table Tennis</Link></li>
//                 <li><Link to="/kabaddi" className="block px-4 py-2 hover:bg-gray-700">Kabaddi</Link></li>
//               </ul>
//             </div>
//             <Link to="/AboutUs" className="text-white hover:text-blue-400 transition">About Us</Link>
//             <Link to="/News" className="text-white hover:text-blue-400 transition">News</Link>
//             <Link to="/login" className="text-white hover:text-blue-400 transition">Connect Us</Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMobileMenu}
//               className="p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
//             >
//               {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-gray-900/90 backdrop-blur-md">
//           <div className="px-4 py-3 space-y-2">
//             <button
//               onClick={toggleSportsDropdown}
//               className="w-full text-left flex items-center justify-between text-white hover:bg-blue-500/20 p-2 rounded-md"
//             >
//               Sports
//               <svg
//                 className={`w-5 h-5 transition-transform ${isMobileSportsDropdownOpen ? "rotate-180" : ""}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//               </svg>
//             </button>
//             {isMobileSportsDropdownOpen && (
//               <div className="pl-6 space-y-1">
//                 <Link to="/cricket" className="block text-white hover:bg-blue-500/20 p-2 rounded-md">Cricket</Link>
//                 <Link to="/volleyball" className="block text-white hover:bg-blue-500/20 p-2 rounded-md">Volleyball</Link>
//                 <Link to="/badminton" className="block text-white hover:bg-blue-500/20 p-2 rounded-md">Badminton</Link>
//                 <Link to="/table-tennis" className="block text-white hover:bg-blue-500/20 p-2 rounded-md">Table Tennis</Link>
//                 <Link to="/kabaddi" className="block text-white hover:bg-blue-500/20 p-2 rounded-md">Kabaddi</Link>
//               </div>
//             )}
//             <Link to="/AboutUs" className="block text-white hover:bg-blue-500/20 p-2 rounded-md">About Us</Link>
//             <Link to="/news" className="block text-white hover:bg-blue-500/20 p-2 rounded-md">News</Link>
//             <Link to="/login" className="block text-white hover:bg-blue-500/20 p-2 rounded-md">Connect Us</Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
 
// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSportsDropdownOpen, setIsSportsDropdownOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     if (isSportsDropdownOpen) {
//       setIsSportsDropdownOpen(false);
//     }
//   };

//   const toggleSportsDropdown = () => {
//     setIsSportsDropdownOpen(!isSportsDropdownOpen);
//   };

//   return (
//     <nav className="w-full bg-gray-900/90 backdrop-blur-md shadow-lg fixed top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//         <div className="flex items-center justify-between h-20">
//           <div className="flex items-center">
//             <svg
//               className="h-10 w-10 text-blue-500"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span className="ml-3 text-2xl font-bold text-blue-400">NXTMOOV</span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-6">
//             <div className="relative group">
//               <button className="text-white hover:text-blue-400 flex items-center gap-1 transition">
//                 Sports
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                 </svg>
//               </button>
//               <ul className="absolute left-0 mt-1 bg-gray-800 text-white rounded-lg shadow-md w-44 hidden group-hover:block z-50">
//                 <li><Link to="/cricket" className="block px-4 py-2 hover:bg-gray-700">Cricket</Link></li>
//                 <li><Link to="/volleyball" className="block px-4 py-2 hover:bg-gray-700">Volleyball</Link></li>
//                 <li><Link to="/badminton" className="block px-4 py-2 hover:bg-gray-700">Badminton</Link></li>
//                 <li><Link to="/table-tennis" className="block px-4 py-2 hover:bg-gray-700">Table Tennis</Link></li>
//                 <li><Link to="/kabaddi" className="block px-4 py-2 hover:bg-gray-700">Kabaddi</Link></li>
//               </ul>
//             </div>
//             <Link to="/AboutUs" className="text-white hover:text-blue-400 transition">About Us</Link>
//             <Link to="/News" className="text-white hover:text-blue-400 transition">News</Link>
//             <Link to="/login" className="text-white hover:text-blue-400 transition">Connect Us</Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={toggleMobileMenu} className="p-2 rounded-md text-white hover:text-blue-400 focus:outline-none">
//               {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-gray-900/90 backdrop-blur-md absolute w-full left-0 top-20 z-40">
//           <div className="px-4 py-3 space-y-2">
//             <button
//               onClick={toggleSportsDropdown}
//               className="w-full text-left flex items-center justify-between text-white hover:bg-blue-500/20 p-2 rounded-md"
//             >
//               Sports
//               <svg
//                 className={`w-5 h-5 transition-transform ${isSportsDropdownOpen ? "rotate-180" : ""}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//               </svg>
//             </button>
//             {isSportsDropdownOpen && (
//               <div className="pl-6 space-y-1">
//                 <Link to="/cricket" className="block text-white hover:bg-blue-500/20 p-2 rounded-md">Cricket</Link>
//                 <Link to="/volleyball" className="block text-white hover:bg-blue-500/20 p-2 rounded-md">Volleyball</Link>
//                 <Link to="/badminton" className="block text-white hover:bg-blue-500/20 p-2 rounded-md">Badminton</Link>
//                 <Link to="/table-tennis" className="block text-white hover:bg-blue-500/20 p-2 rounded-md">Table Tennis</Link>
//                 <Link to="/kabaddi" className="block text-white hover:bg-blue-500/20 p-2 rounded-md">Kabaddi</Link>
//               </div>
//             )}
//             <Link to="/AboutUs" className="block text-white hover:bg-blue-500/20 p-2 rounded-md">About Us</Link>
//             <Link to="/news" className="block text-white hover:bg-blue-500/20 p-2 rounded-md">News</Link>
//             <Link to="/login" className="block text-white hover:bg-blue-500/20 p-2 rounded-md">Connect Us</Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSportsDropdownOpen, setIsSportsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isSportsDropdownOpen) {
      setIsSportsDropdownOpen(false);
    }
  };

  return (
    <nav className="w-full bg-gray-900/90 backdrop-blur-md shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <svg
              className="h-10 w-10 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-2xl font-bold text-blue-400">NXTMOOV</span>
          </div>

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
            <Link to="/News" className="text-white hover:text-blue-400 transition">News</Link>
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
    </nav>
  );
};

export default Navbar;
