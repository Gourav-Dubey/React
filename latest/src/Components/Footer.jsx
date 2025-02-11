// import React from "react"
// import { Twitter, Facebook, Instagram } from "lucide-react"

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-4 gap-8">
//           <div>
//             <h4 className="text-lg font-semibold mb-4 gradient-text">About NXTMOOV</h4>
//             <p className="text-gray-400">Your personal agent for sports, news, and entertainment.</p>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4 gradient-text">Quick Links</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li>
//                 <a href="/" className="hover:text-blue-400 transition-colors">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/sports" className="hover:text-blue-400 transition-colors">
//                   Sports
//                 </a>
//               </li>
//               <li>
//                 <a href="/news" className="hover:text-blue-400 transition-colors">
//                   News
//                 </a>
//               </li>
//               <li>
//                 <a href="/about" className="hover:text-blue-400 transition-colors">
//                   About Us
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4 gradient-text">Contact</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li>Email: info@nxtmoov.com</li>
//               <li>Phone: (555) 123-4567</li>
//               <li>Address: 123 Sports Ave, Stadium City, SP 12345</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4 gradient-text">Follow Us</h4>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <Twitter className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <Facebook className="h-6 w-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <Instagram className="h-6 w-6" />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
//           <p>&copy; {new Date().getFullYear()} NXTMOOV. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

// import React from "react"
// import { motion } from "framer-motion"
// import { Twitter, Facebook, Instagram, ArrowUp } from "lucide-react"

// const Footer = () => {
//   return (
//     <motion.footer
//       className="bg-gray-900 py-16 px-6 relative overflow-hidden"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       {/* Background Gradient Effect */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-40"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid md:grid-cols-4 gap-8">
//           <FooterColumn title="About NXTMOOV">
//             <p className="text-gray-400">Your personal agent for sports, news, and entertainment.</p>
//           </FooterColumn>

//           <FooterColumn title="Quick Links">
//             <ul className="space-y-2 text-gray-400">
//               {["Home", "Sports", "News", "About Us"].map((item) => (
//                 <li key={item}>
//                   <a href={`/${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </FooterColumn>

//           <FooterColumn title="Contact">
//             <ul className="space-y-2 text-gray-400">
//               <li>Email: info@nxtmoov.com</li>
//               <li>Phone: (555) 123-4567</li>
//               <li>Address: 123 Sports Ave, Stadium City, SP 12345</li>
//             </ul>
//           </FooterColumn>

//           <FooterColumn title="Follow Us">
//             <div className="flex space-x-4">
//               {socialLinks.map(({ icon: Icon, href }) => (
//                 <motion.a
//                   key={href}
//                   href={href}
//                   className="text-gray-400 hover:text-blue-400 transition-all"
//                   whileHover={{ scale: 1.2, rotate: 5 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <Icon className="h-6 w-6" />
//                 </motion.a>
//               ))}
//             </div>
//           </FooterColumn>
//         </div>

//         {/* Copyright and Scroll-to-Top */}
//         <div className="mt-12 pt-6 border-t border-gray-800 text-center flex justify-between items-center">
//           <p className="text-gray-400">&copy; {new Date().getFullYear()} NXTMOOV. All rights reserved.</p>
//           <motion.button
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all shadow-lg"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <ArrowUp className="h-5 w-5" />
//           </motion.button>
//         </div>
//       </div>
//     </motion.footer>
//   )
// }

// const FooterColumn = ({ title, children }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.5, ease: "easeOut" }}
//   >
//     <h4 className="text-lg font-semibold mb-4 text-white relative">
//       {title}
//       <span className="absolute left-0 bottom-0 h-1 w-10 bg-blue-500"></span>
//     </h4>
//     {children}
//   </motion.div>
// )

// const socialLinks = [
//   { icon: Twitter, href: "#" },
//   { icon: Facebook, href: "#" },
//   { icon: Instagram, href: "#" },
// ]

// export default Footer

import React from "react"
import { motion } from "framer-motion"
import { Twitter, Facebook, Instagram, ArrowUp } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden pt-16">
      {/* ✨ Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      
      {/* 🌊 Wave Animation */}
      <div className="absolute bottom-0 left-0 w-full h-24">
        <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" fill="white">
          <path d="M0,120 C150,60 350,90 600,90 C850,90 1050,60 1200,120 L1200,0 L0,0 Z" opacity="0.1"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <FooterColumn title="About NXTMOOV">
            <p className="text-gray-400">Your personal agent for sports, news, and entertainment.</p>
          </FooterColumn>

          <FooterColumn title="Quick Links">
            <ul className="space-y-3 text-gray-400">
              {["Home", "Sports", "News", "About Us"].map((item) => (
                <li key={item}>
                  <motion.a 
                    href={`/${item.toLowerCase()}`} 
                    className="hover:text-blue-400 transition-all"
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Contact">
            <ul className="space-y-2 text-gray-400">
              <li>Email: <a href="mailto:info@nxtmoov.com" className="hover:text-blue-400 transition-all">info@nxtmoov.com</a></li>
              <li>Phone: <a href="tel:5551234567" className="hover:text-blue-400 transition-all">(555) 123-4567</a></li>
              <li>Address: 123 Sports Ave, Stadium City, SP 12345</li>
            </ul>
          </FooterColumn>

          <FooterColumn title="Follow Us">
            <div className="flex space-x-6">
              {socialLinks.map(({ icon: Icon, href }) => (
                <motion.a 
                  key={href} 
                  href={href} 
                  className="p-2 rounded-full bg-black hover:bg-blue-500 transition-all shadow-md"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.a>
              ))}
            </div>
          </FooterColumn>
        </div>

        {/* 🚀 Scroll-to-Top & Copyright */}
        <div className="mt-12 pt-6 border-t border-black flex justify-between items-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} NXTMOOV. All rights reserved.</p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:scale-110 hover:shadow-blue-500/50 transition-all"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

const FooterColumn = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h4 className="text-xl font-semibold mb-4 text-white relative">
      {title}
      <span className="absolute left-0 bottom-0 h-1 w-12 "></span>
    </h4>
    {children}
  </motion.div>
)

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
]

export default Footer
