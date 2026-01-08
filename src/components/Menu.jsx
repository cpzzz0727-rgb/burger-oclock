import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { restaurantData } from '../data/restaurantData'

const menuImages = {
  BEEF_BeefBurgers: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80',
  CHICKEN_Veg: 'https://images.unsplash.com/photo-1525059696034-4967a7290028?w=800&q=80',
  HOTDOG: 'https://images.unsplash.com/photo-1550617931-5e892dab5bcc?w=800&q=80',
  FINGER_FOOD: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80',
}

const categoryNames = {
  BEEF_BeefBurgers: '牛肉漢堡',
  CHICKEN_Veg: '雞肉/素食',
  HOTDOG: '熱狗堡',
  FINGER_FOOD: '小食',
}

function Menu() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const renderMenuCategory = (categoryKey, items) => {
    return (
      <div key={categoryKey} className="mb-16">
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-burger-yellow border-b-2 border-burger-yellow/30 pb-4"
        >
          {categoryNames[categoryKey]}
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-burger-black rounded-lg overflow-hidden shadow-2xl hover:shadow-burger-yellow/20 transition-shadow duration-300 relative"
            >
              {item.is_best_seller && (
                <div className="absolute top-2 left-2 z-10 bg-burger-red text-white px-3 py-1 rounded-full text-xs font-bold">
                  熱門
                </div>
              )}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={menuImages[categoryKey] || menuImages.BEEF_BeefBurgers} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-burger-red text-white px-4 py-2 rounded-full font-bold text-lg">
                  NT$ {item.price}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2 text-burger-yellow">
                  {item.name}
                </h4>
                {item.ingredients && (
                  <p className="text-gray-300 text-sm sm:text-base mb-2">
                    {item.ingredients}
                  </p>
                )}
                {item.desc && (
                  <p className="text-gray-300 text-sm sm:text-base mb-2">
                    {item.desc}
                  </p>
                )}
                {item.note && (
                  <p className="text-burger-yellow text-sm font-semibold">
                    {item.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  const renderDrinkDessert = () => {
    const { beverages, dessert, special } = restaurantData.menu.DRINK_DESSERT
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gradient-to-r from-burger-red/20 to-burger-yellow/20 rounded-2xl p-8 md:p-12 border-2 border-burger-yellow/30"
      >
        <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-burger-yellow">
          飲料與甜點
        </h3>
        <div className="space-y-4 text-lg text-gray-200">
          <div>
            <h4 className="text-burger-yellow font-semibold mb-2">飲料</h4>
            <div className="flex flex-wrap gap-2">
              {beverages.map((beverage, index) => (
                <span key={index} className="bg-burger-black/50 px-4 py-2 rounded-lg">
                  {beverage}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-burger-yellow font-semibold mb-2">甜點</h4>
            <p>{dessert}</p>
          </div>
          <div>
            <h4 className="text-burger-yellow font-semibold mb-2">特別推薦</h4>
            <p className="text-xl">{special}</p>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section 
      id="menu"
      ref={ref}
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-burger-gray"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-burger-yellow">
            菜單
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300">
            每一口都是精心調配的美味
          </p>
        </motion.div>

        {/* Menu Categories */}
        {Object.entries(restaurantData.menu).map(([key, value]) => {
          if (key === 'DRINK_DESSERT') return null
          return renderMenuCategory(key, value)
        })}

        {/* Drink & Dessert */}
        {renderDrinkDessert()}
      </div>
    </section>
  )
}

export default Menu
