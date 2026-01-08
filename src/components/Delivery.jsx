import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function Delivery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="delivery"
      ref={ref}
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-burger-black via-burger-red/10 to-burger-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 215, 0, 0.1) 10px, rgba(255, 215, 0, 0.1) 20px)'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-burger-yellow">
            外送服務
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-12">
            不想出門？沒問題！<br className="sm:hidden" />
            讓我們把美味送到您家
          </p>

          <motion.a
            href="https://www.ubereats.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-6 bg-burger-yellow hover:bg-burger-yellow/90 text-burger-black font-bold text-xl md:text-2xl rounded-lg shadow-2xl hover:shadow-burger-yellow/50 transition-all duration-300 transform"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10 mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            立即訂購 Uber Eats
            <svg className="w-6 h-6 md:w-8 md:h-8 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-gray-400 text-sm md:text-base"
          >
            * 外送服務時間：11:00 - 21:30
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Delivery
