import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { restaurantData } from '../data/restaurantData'

function Rules() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="rules"
      ref={ref}
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-burger-gray to-burger-black"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-burger-yellow">
            店內規則
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-burger-gray rounded-lg p-6 md:p-8 border-2 border-burger-yellow/20 mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-burger-yellow flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            用餐流程
          </h3>
          <ol className="space-y-4">
            {restaurantData.rules.steps.map((step, index) => (
              <li key={index} className="flex items-start text-lg md:text-xl text-gray-200">
                <span className="flex-shrink-0 w-8 h-8 bg-burger-yellow text-burger-black rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-burger-gray rounded-lg p-6 md:p-8 border-2 border-burger-red/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-burger-red flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            注意事項
          </h3>
          <ul className="space-y-3">
            {restaurantData.rules.notes.map((note, index) => (
              <li key={index} className="flex items-start text-lg md:text-xl text-gray-200">
                <span className="text-burger-red mr-3 mt-1">⚠</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Rules
