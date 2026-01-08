import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { restaurantData } from '../data/restaurantData'

function Hero() {
  const [currentSlogan, setCurrentSlogan] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % restaurantData.brand.slogan.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-burger-yellow">Burger</span>{' '}
          <span className="text-white">O'clock</span>
        </motion.h1>

        <motion.div 
          className="h-20 sm:h-24 md:h-28 flex items-center justify-center"
          key={currentSlogan}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-shadow">
            {restaurantData.brand.slogan[currentSlogan]}
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg 
          className="w-6 h-6 text-burger-yellow" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero
