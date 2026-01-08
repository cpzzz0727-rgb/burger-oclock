import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { restaurantData } from '../data/restaurantData'

function Information() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="information"
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
            營業資訊
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-burger-gray rounded-lg p-6 md:p-8 border-2 border-burger-yellow/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-burger-yellow flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              地址
            </h3>
            <p className="text-lg md:text-xl text-gray-200 mb-4">
              {restaurantData.footer.address}
            </p>
            <a
              href={restaurantData.footer.google_maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-burger-red hover:bg-burger-red/80 text-white font-bold rounded-lg transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              開啟 Google Maps
            </a>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-burger-gray rounded-lg p-6 md:p-8 border-2 border-burger-yellow/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-burger-yellow flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              營業時間
            </h3>
            <div className="space-y-3 text-lg md:text-xl text-gray-200">
              <p className="text-center">
                {restaurantData.footer.business_hours}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Contact Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-burger-yellow">
            聯絡我們
          </h3>
          <div className="flex justify-center items-center gap-6 md:gap-8">
            {/* Phone */}
            <a
              href={`tel:${restaurantData.footer.contact.phone.replace(/-/g, '')}`}
              className="group flex flex-col items-center p-4 rounded-lg bg-burger-gray hover:bg-burger-red transition-all duration-300 border-2 border-transparent hover:border-burger-yellow"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10 text-burger-yellow group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="mt-2 text-sm md:text-base text-gray-300">{restaurantData.footer.contact.phone}</span>
            </a>

            {/* Instagram */}
            <a
              href={`https://www.instagram.com/${restaurantData.footer.contact.ig}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-4 rounded-lg bg-burger-gray hover:bg-burger-red transition-all duration-300 border-2 border-transparent hover:border-burger-yellow"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10 text-burger-yellow group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="mt-2 text-sm md:text-base text-gray-300">@{restaurantData.footer.contact.ig}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Information
