import React from 'react'
import Navigation from './Navigation'
import HeroSection from './HeroSection'
import FeaturesGrid from './FeaturesGrid'
import LatestNews from './LatestNews'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'
import Footer from './Footer'
import Navbar from './Navigation'
import Counter from './couter'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Counter/>
        <HeroSection />
        <FeaturesGrid />
        <LatestNews />
        <Testimonials />
        <CallToAction />
        <Footer />
        
    </div>
  )
}

export default Home
