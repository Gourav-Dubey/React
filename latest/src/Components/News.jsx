import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const targetId = e.target.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="bg-dark-900 text-dark-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-dark-800 text-dark-100 p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold hover:text-blue-400 transition-colors duration-300">
            Nxt Moov
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="index.html" className="hover:text-blue-400 transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="login.html" className="hover:text-blue-400 transition-colors duration-300">
                Connect Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative h-[60vh] mb-12 rounded-lg overflow-hidden group animate-fade-in">
          <img
            src="/assets/Rise-of-AI-in-Sports-From-Predictive-Analytics-to-Injury-Prevention-Explained.webp"
            alt="AI in Sports"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 transition-all duration-300 group-hover:translate-y-[-10px]">
            <a
              href="#featured-news"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 inline-block hover-pulse"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Featured News Section */}
        <section id="featured-news" className="mb-12 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Featured News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* News Card 1 */}
            <div className="bg-dark-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group">
              <img
                src="/assets/maxresdefault.jpg"
                alt="Nxt Moov Partners with Gujarat Titans"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  Nxt Moov Partners with Gujarat Titans
                </h3>
                <p className="text-dark-300 mb-4">Exciting new partnership to revolutionize cricket strategy...</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-dark-400">Jan 15, 2025</span>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-dark-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group">
              <img
                src="/assets/COVER_2-1.webp"
                alt="AI-Powered Insights Transform Table Tennis Training"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  AI-Powered Insights Transform Table Tennis Training
                </h3>
                <p className="text-dark-300 mb-4">Manika Batra and Sreeja Akula adopt Nxt Moov technology...</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-dark-400">Jan 10, 2025</span>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="bg-dark-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group">
              <img
                src="/assets/0_i_QojZivMfOeNbO7.png"
                alt="Kabaddi Franchise Patna Pirates Joins Nxt Moov"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  Kabaddi Franchise Patna Pirates Joins Nxt Moov
                </h3>
                <p className="text-dark-300 mb-4">Nxt Moov Engine set to enhance team performance...</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-dark-400">Jan 5, 2025</span>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Latest News Section */}
          <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Latest News</h2>
            <div className="space-y-6">
              {/* Latest News Card 1 */}
              <div className="bg-dark-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group">
                <img
                  src="/assets/1_KRSmnuwPr1ifT_W7DPzKHg.png"
                  alt="Nxt Moov Expands to European Football Market"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    Nxt Moov Expands to European Football Market
                  </h3>
                  <p className="text-dark-300 mb-4">AI-driven strategies set to revolutionize football tactics...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-dark-400">Jan 20, 2025</span>
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                      Read more
                    </a>
                  </div>
                </div>
              </div>

              {/* Latest News Card 2 */}
              <div className="bg-dark-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group">
                <img
                  src="/assets/1200x675_cmsv2_799d355b-9258-5d51-89d0-3b9e4a912fd4-8535256.webp"
                  alt="Olympic Committee Explores Nxt Moov Technology"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    Olympic Committee Explores Nxt Moov Technology
                  </h3>
                  <p className="text-dark-300 mb-4">Potential partnership could reshape Olympic training...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-dark-400">Jan 18, 2025</span>
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                      Read more
                    </a>
                  </div>
                </div>
              </div>

              {/* Latest News Card 3 */}
              <div className="bg-dark-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group">
                <img
                  src="/assets/1_CZnWFyVrek-9UavLtS9Y9Q.jpg"
                  alt="Nxt Moov Launches Advanced Basketball Analytics"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    Nxt Moov Launches Advanced Basketball Analytics
                  </h3>
                  <p className="text-dark-300 mb-4">New AI model promises to transform NBA team strategies...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-dark-400">Jan 16, 2025</span>
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {/* Trending Topics */}
            <section className="mb-8 bg-dark-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Trending Topics</h2>
              <ul className="space-y-2">
                <li className="flex items-center group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-orange-500 group-hover:text-orange-400 transition-colors duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="group-hover:text-blue-400 transition-colors duration-300">AI in Cricket</span>
                </li>
                {/* Add more trending topics here */}
              </ul>
            </section>

            {/* Newsletter Signup */}
            <section className="bg-dark-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Stay Updated</h2>
              <p className="mb-4 text-dark-200">Subscribe to our newsletter for the latest Nxt Moov news and insights.</p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md bg-dark-700 text-dark-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 hover-pulse"
                >
                  Subscribe
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark-800 text-dark-200 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2 text-blue-400">Nxt Moov</h3>
              <p>Revolutionizing sports with AI-driven insights and strategies.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2 text-blue-400">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="aboutus.html" className="hover:text-blue-400 transition-colors duration-300">
                    About Us
                  </a>
                </li>
                {/* Add more links here */}
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-2 text-blue-400">Connect With Us</h3>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a href="#" className="text-dark-200 hover:text-blue-400 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                {/* Add more social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 Nxt Moov. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsPage;