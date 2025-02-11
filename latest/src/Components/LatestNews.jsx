import React from 'react';
import { motion } from 'framer-motion';

const LatestNews = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Latest Sports News
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3 }
            }
          }}
        >
          <NewsCard
            image="./src/assets/cricket.png"
            title="Cricket World Cup Update"
            description="Latest scores and highlights from the ongoing Cricket World Cup matches."
            link="/news/cricket"
          />
          <NewsCard
            image="./src/assets/football.png"
            title="Football Transfer Rumors"
            description="The latest transfer gossip and confirmed deals in the football world."
            link="/news/football"
          />
          <NewsCard
            image="./src/assets/tennis.webp"
            title="Tennis Grand Slam Results"
            description="Recap of the latest Grand Slam tournament and player rankings."
            link="/news/tennis"
          />
          
          
        </motion.div>
      </div>
    </section>
  );
};

const NewsCard = ({ image, title, description, link }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-s-2xl overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-xl"
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
      }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.1)" }}
    >
      <motion.img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-48 object-cover"
        whileHover={{ scale: 1.1 }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <motion.a
          href={link}
          className="mt-4 inline-block text-blue-400 hover:text-blue-300"
          whileHover={{ scale: 1.1 }}
        >
          Read more →
        </motion.a>
      </div>
    </motion.div>
  );
};

export default LatestNews;
