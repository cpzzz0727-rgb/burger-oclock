import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { restaurantData } from '../data/restaurantData'

function BrandStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="brand-story"
      ref={ref}
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-burger-black to-burger-gray"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 text-burger-yellow">
            品牌故事
          </h2>
          
          <div className="space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-200">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              {restaurantData.brand.story}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center font-semibold text-burger-yellow text-2xl sm:text-3xl md:text-4xl mt-10"
            >
              <span className="text-white">{restaurantData.brand.mission}</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandStory
