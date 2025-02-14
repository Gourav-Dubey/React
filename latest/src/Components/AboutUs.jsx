import React from 'react';
import { Link } from 'react-router-dom';


const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/aboutsp.avif"
            alt="Sports Background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white">Nxt Moov</h1>
          <p className="text-xl md:text-2xl text-white/90">
            Revolutionizing sports with AI-powered strategies
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">WE ARE ?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are a team of AI developers with over 9 years of experience across diverse industries – payments, e-commerce, oil and gas, and more. Over the years, we have successfully developed and deployed multiple AI models, delivering innovative solutions to complex challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <i data-lucide="users" className="w-6 h-6 text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Akash Dubey</h3>
                  <p className="text-gray-600"></p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <i data-lucide="brain" className="w-6 h-6 text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ashish Ritwal</h3>
                  <p className="text-gray-600"></p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <img
                src="/assets/WhatsApp Image 2025-01-07 at 09.45.56_14bf5c1c.jpg"
                alt="Team"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vision</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Revolutionize the global sports industry by integrating real-time AI models that enhance strategy and decision-making processes. Our solutions are designed to deliver actionable insights and drive measurable outcomes, empowering stakeholders to achieve unparalleled performance and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
            Our Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                    <i data-lucide="target" className="w-6 h-6 text-blue-600"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Nxt Moov Cricket Engine</h3>
                  {/* <ul className="space-y-2 text-gray-600"> */}
                    {/* <li className="flex items-center gap-2">
                      <i data-lucide="chevron-right" className="w-4 h-4 text-blue-600"></i>
                      Next ball prediction
                    </li> */}
                    {/* <li className="flex items-center gap-2">
                      <i data-lucide="chevron-right" className="w-4 h-4 text-blue-600"></i>
                      Gen AI Strategy outcome to get a player out
                    </li> */}
                  {/* </ul> */}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                    <i data-lucide="globe" className="w-6 h-6 text-blue-600"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Nxt Moov Badminton/Table tennis</h3>
                  {/* <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <i data-lucide="chevron-right" className="w-4 h-4 text-blue-600"></i>
                      Left/Centre/Right Netplay prediction
                    </li>
                    <li className="flex items-center gap-2">
                      <i data-lucide="chevron-right" className="w-4 h-4 text-blue-600"></i>
                      Left/Centre/Right Smash prediction
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                    <i data-lucide="line-chart" className="w-6 h-6 text-blue-600"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Nxt Moov Kabaddi Engine</h3>
                  {/* <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <i data-lucide="chevron-right" className="w-4 h-4 text-blue-600"></i>
                      Left/Centre/Right court raider bonus prediction
                    </li>
                    <li className="flex items-center gap-2">
                      <i data-lucide="chevron-right" className="w-4 h-4 text-blue-600"></i>
                      Left/Centre/Right Leg hold prediction
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* <div className="space-y-6">
            <p className="text-xl md:text-2xl">
              Won't bore you with more numbers, Opportunity is there, all we ask is give us one chance to become the most significant sports startup of this decade.
            </p>
            <p className="text-2xl md:text-3xl font-bold">
              We have the NXT MOOV but can you give our first move
            </p> */}
            <Link to="/login" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg shadow-lg hover:bg-blue-200 transition mt-6">Get Started
            </Link >
          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;