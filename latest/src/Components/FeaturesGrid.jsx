// import React from "react"
// import { Play, FileText, Bell } from "lucide-react"

// const FeaturesGrid = () => {
//   return (
//     <section className="py-20 px-4 bg-gray-900">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Our Features</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           <FeatureCard
//             icon={Play}
//             title="Live Sports Coverage"
//             description="Experience real-time updates and live streaming of your favorite sports events."
//             delay={100}
//           />
//           <FeatureCard
//             icon={FileText}
//             title="Expert Analysis"
//             description="Get in-depth analysis and insights from our team of sports experts and professionals."
//             delay={200}
//           />
//           <FeatureCard
//             icon={Bell}
//             title="Personalized Notifications"
//             description="Stay updated with customized alerts for your favorite teams, players, and events."
//             delay={300}
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// const FeatureCard = ({ icon: Icon, title, description, delay }) => {
//   return (
//     <div
//       className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors"
//       data-aos="fade-up"
//       data-aos-delay={delay}
//     >
//       <Icon className="h-12 w-12 text-blue-500 mb-4" />
//       <h3 className="text-xl font-semibold mb-4">{title}</h3>
//       <p className="text-gray-300">{description}</p>
//     </div>
//   )
// }

// export default FeaturesGrid

// import React from "react"
// import { motion } from "framer-motion"
// import { Play, FileText, Bell } from "lucide-react"

// const FeaturesGrid = () => {
//   return (
//     <section className="py-20 px-4 bg-gray-900">
//       <div className="max-w-7xl mx-auto">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           Our Features
//         </motion.h2>

//         <motion.div 
//           className="grid md:grid-cols-3 gap-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             visible: { transition: { staggerChildren: 0.2 } },
//           }}
//         >
//           <FeatureCard
//             icon={Play}
//             title="Live Sports Coverage"
//             description="Experience real-time updates and live streaming of your favorite sports events."
//             delay={0.1}
//           />
//           <FeatureCard
//             icon={FileText}
//             title="Expert Analysis"
//             description="Get in-depth analysis and insights from our team of sports experts and professionals."
//             delay={0.2}
//           />
//           <FeatureCard
//             icon={Bell}
//             title="Personalized Notifications"
//             description="Stay updated with customized alerts for your favorite teams, players, and events."
//             delay={0.3}
//           />
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// const FeatureCard = ({ icon: Icon, title, description, delay }) => {
//   return (
//     <motion.div
//       className="p-6 rounded-xl bg-gray-800 shadow-lg relative overflow-hidden"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay }}
//       whileHover={{
//         scale: 1.05,
//         boxShadow: "0px 5px 20px rgba(0, 140, 255, 0.5)",
//       }}
//     >
//       {/* Background Hover Glow Effect */}
//       <motion.div
//         className="absolute inset-0 opacity-0 bg-blue-500 rounded-xl"
//         whileHover={{ opacity: 0.15 }}
//         transition={{ duration: 0.3 }}
//       ></motion.div>

//       <Icon className="h-12 w-12 text-blue-500 mb-4 relative z-10" />
//       <h3 className="text-xl font-semibold mb-4 relative z-10">{title}</h3>
//       <p className="text-gray-300 relative z-10">{description}</p>
//     </motion.div>
//   )
// }

// export default FeaturesGrid

import React from "react"
import { motion } from "framer-motion"
import { Play, FileText, Bell } from "lucide-react"

const FeaturesGrid = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          Our Features
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-3 rounded-xl gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <FeatureCard
            icon={Play}
            title="Live Sports Coverage"
            description="Experience real-time updates and live streaming of your favorite sports events."
            direction="left"
          />
          <FeatureCard
            icon={FileText}
            title="Expert Analysis"
            description="Get in-depth analysis and insights from our team of sports experts and professionals."
            direction="center"
          />
          <FeatureCard
            icon={Bell}
            title="Personalized Notifications"
            description="Stay updated with customized alerts for your favorite teams, players, and events."
            direction="right"
          />
        </motion.div>
      </div>
    </section>
  )
}

const FeatureCard = ({ icon: Icon, title, description, direction }) => {
  const slideVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "center" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      className="p-6 rounded-3xl bg-gray-800 shadow-lg relative overflow-hidden"
      variants={slideVariants}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 5px 20px rgba(0, 140, 255, 0.5)",
      }}
    >
      {/* Background Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 bg-blue-500 rounded-xl"
        whileHover={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
      ></motion.div>

      <Icon className="h-12 w-12 text-blue-500 mb-4 relative z-10" />
      <h3 className="text-xl font-semibold mb-4 relative z-10">{title}</h3>
      <p className="text-gray-300 relative z-10">{description}</p>
    </motion.div>
  )
}

export default FeaturesGrid

