import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Navigation({ onFlipbookClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'hero', label: '首頁' },
    { id: 'brand-story', label: '品牌故事' },
    { id: 'menu', label: '菜單' },
    { id: 'rules', label: '店內規則' },
    { id: 'information', label: '營業資訊' },
    { id: 'delivery', label: '外送' }
  ]

  const goToFlipbook = () => {
    if (onFlipbookClick) {
      onFlipbookClick()
    } else {
      window.location.href = '/flipbook'
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-burger-black/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 text-burger-yellow font-bold text-xl md:text-2xl hover:text-burger-red transition-colors duration-300"
          >
            <span>🍔</span>
            <span>Burger O'clock</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-200 hover:text-burger-yellow transition-colors duration-300 font-medium text-sm lg:text-base relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-burger-yellow group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button
              onClick={goToFlipbook}
              className="bg-burger-yellow text-black px-4 py-2 rounded-lg font-bold text-sm lg:text-base hover:bg-burger-yellow/80 transition-colors duration-300"
            >
              📖 電子菜單
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-burger-yellow p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-burger-black/98 backdrop-blur-md border-t border-burger-yellow/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-200 hover:text-burger-yellow hover:bg-burger-gray/50 px-4 py-3 rounded-lg transition-all duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={goToFlipbook}
                className="block w-full text-left bg-burger-yellow text-black px-4 py-3 rounded-lg font-bold transition-all duration-300"
              >
                📖 電子菜單
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
