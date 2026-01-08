import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import BrandStory from './components/BrandStory'
import Menu from './components/Menu'
import Rules from './components/Rules'
import Information from './components/Information'
import Delivery from './components/Delivery'
import FlipbookMenu from './components/FlipbookMenu'

function App() {
  const [showFlipbook, setShowFlipbook] = useState(false)

  // Check URL parameter or hash
  React.useEffect(() => {
    const checkFlipbook = () => {
      if (window.location.hash === '#flipbook' || window.location.search.includes('flipbook=true')) {
        setShowFlipbook(true)
      }
    }
    checkFlipbook()
    
    // Listen for hash changes
    window.addEventListener('hashchange', checkFlipbook)
    return () => window.removeEventListener('hashchange', checkFlipbook)
  }, [])

  if (showFlipbook) {
    return (
      <div className="min-h-screen bg-gray-900">
        <button
          onClick={() => {
            setShowFlipbook(false)
            window.history.pushState({}, '', window.location.pathname)
          }}
          className="fixed top-4 left-4 z-50 bg-burger-yellow text-black px-4 py-2 rounded-lg font-bold hover:bg-burger-yellow/80 transition-colors"
        >
          ← 返回主頁
        </button>
        <FlipbookMenu />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-burger-black">
      <Navigation onFlipbookClick={() => setShowFlipbook(true)} />
      <Hero />
      <BrandStory />
      <Menu />
      <Rules />
      <Information />
      <Delivery />
    </div>
  )
}

export default App
