import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Users Say
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3 }
            }
          }}
        >
          <TestimonialCard
            quote="NXTMOOV has completely changed how I follow sports. The live updates and expert analysis are unmatched!"
            name="Gourav Dubey"
            title="Sports Enthusiast"
            image="./public/assets/gourav.webp"
          />
          <TestimonialCard
            quote="As a professional athlete, I rely on NXTMOOV for the most up-to-date information and insights in the sports world."
            name="Shikhar Arora"
            title="Professional Athlete"
            image="/public/assets/shikhar.webp"
          />
          <TestimonialCard
            quote="This platform provides accurate and fast news, making it my go-to source for everything sports!"
            name="Ananya Mishra"
            title="Journalist"
            image="/public/assets/ananya.webp"
          />
          <TestimonialCard
            quote="NXTMOOV is a game changer! I always get the latest stats and updates right when I need them."
            name="Rahul Sen"
            title="Football Coach"
            image="/public/assets/rahul.webp"
          />
        </motion.div>
      </div>
    </section>
  )
}

const TestimonialCard = ({ quote, name, title, image }) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-3xl shadow-lg transition transform hover:scale-105 hover:shadow-xl"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.1)" }}
    >
      <p className="text-gray-300 mb-4">{quote}</p>
      <div className="flex items-center">
        <motion.img 
          src={image || "/placeholder.svg"} 
          alt={name} 
          className="w-12 h-12 rounded-full mr-4"
          whileHover={{ scale: 1.2 }}
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-400">{title}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Testimonials;
