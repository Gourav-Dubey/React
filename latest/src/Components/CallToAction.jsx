import React from 'react';
const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            Ready to Elevate Your Sports Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join NXTMOOV today and get access to exclusive content, live updates, and expert analysis across all your
            favorite sports.
          </p>
          <a
            href="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all hover:scale-105 inline-block"
          >
            Sign Up Now
          </a>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          className="absolute left-0 top-0 h-full w-full text-gray-900 transform -translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
    </section>
  )
}

export default CallToAction

