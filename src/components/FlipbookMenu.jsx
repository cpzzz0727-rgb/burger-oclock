import React, { useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { restaurantData } from '../data/restaurantData'

function FlipbookMenu() {
  const flipBook = useRef()
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 10

  const handleFlip = (e) => {
    if (e && e.data !== undefined) {
      setCurrentPage(e.data)
    }
  }

  const goToPrevPage = () => {
    if (flipBook.current) {
      try {
        const pageFlip = flipBook.current.pageFlip()
        if (pageFlip && typeof pageFlip.flipPrev === 'function') {
          pageFlip.flipPrev()
        }
      } catch (error) {
        // Silently handle error - component may not be ready yet
      }
    }
  }

  const goToNextPage = () => {
    if (flipBook.current) {
      try {
        const pageFlip = flipBook.current.pageFlip()
        if (pageFlip && typeof pageFlip.flipNext === 'function') {
          pageFlip.flipNext()
        }
      } catch (error) {
        // Silently handle error - component may not be ready yet
      }
    }
  }

  // Page 1: Cover
  const CoverPage = () => (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
      }}></div>
      
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold text-black mb-4 transform rotate-12 inline-block">
            🍔
          </div>
          <div className="text-6xl md:text-7xl font-bold text-black mb-2" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            BURGER
          </div>
          <div className="text-6xl md:text-7xl font-bold text-burger-red mb-6" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            O'CLOCK
          </div>
        </div>
        <div className="text-2xl md:text-3xl text-gray-800 font-semibold mt-8">
          {restaurantData.brand.slogan[0]}
        </div>
      </div>
    </div>
  )

  // Page 2: Brand Story
  const BrandStoryPage = () => (
    <div className="w-full h-full bg-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
      }}></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 border-b-4 border-black pb-2">
          品牌故事
        </h2>
        <p className="text-lg md:text-xl text-gray-900 leading-relaxed mb-6">
          {restaurantData.brand.story}
        </p>
        <div className="mt-8 p-4 bg-gray-100 border-l-4 border-burger-red">
          <p className="text-xl md:text-2xl font-bold text-black">
            {restaurantData.brand.mission}
          </p>
        </div>
      </div>
    </div>
  )

  // Page 3-4: Beef Burgers
  const BeefBurgersPage1 = () => {
    const items = restaurantData.menu.BEEF_BeefBurgers.slice(0, 3)
    return (
      <div className="w-full h-full bg-white p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
        }}></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 border-b-4 border-black pb-2">
            牛肉漢堡
          </h2>
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="border-b-2 border-gray-200 pb-4 relative">
                {item.is_best_seller && (
                  <div className="absolute -top-2 -right-2 flex items-center text-burger-red z-10">
                    <svg className="w-10 h-10 transform rotate-12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))' }}>
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-xs md:text-sm font-bold ml-1" style={{ 
                      fontFamily: 'Arial, sans-serif',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                      transform: 'rotate(-5deg)'
                    }}>老闆必吃</span>
                  </div>
                )}
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">{item.name}</h3>
                    {item.ingredients && (
                      <p className="text-gray-700 text-sm md:text-base">{item.ingredients}</p>
                    )}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-burger-red ml-4">
                    NT$ {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const BeefBurgersPage2 = () => {
    const items = restaurantData.menu.BEEF_BeefBurgers.slice(3)
    return (
      <div className="w-full h-full bg-white p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
        }}></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 border-b-4 border-black pb-2">
            牛肉漢堡
          </h2>
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="border-b-2 border-gray-200 pb-4 relative">
                {item.is_best_seller && (
                  <div className="absolute -top-2 -right-2 flex items-center text-burger-red z-10">
                    <svg className="w-10 h-10 transform rotate-12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))' }}>
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-xs md:text-sm font-bold ml-1" style={{ 
                      fontFamily: 'Arial, sans-serif',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                      transform: 'rotate(-5deg)'
                    }}>老闆必吃</span>
                  </div>
                )}
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">{item.name}</h3>
                    {item.ingredients && (
                      <p className="text-gray-700 text-sm md:text-base">{item.ingredients}</p>
                    )}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-burger-red ml-4">
                    NT$ {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Page 5: Chicken/Veg
  const ChickenVegPage = () => (
    <div className="w-full h-full bg-white p-8 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
      }}></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 border-b-4 border-black pb-2">
          雞肉/素食
        </h2>
        <div className="space-y-6">
          {restaurantData.menu.CHICKEN_Veg.map((item, index) => (
            <div key={index} className="border-b-2 border-gray-200 pb-4 relative">
              {item.is_best_seller && (
                <div className="absolute -top-2 -right-2 flex items-center text-burger-red">
                  <svg className="w-8 h-8 transform rotate-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span className="text-sm font-bold ml-1">老闆必吃</span>
                </div>
              )}
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">{item.name}</h3>
                  {item.ingredients && (
                    <p className="text-gray-700 text-sm md:text-base">{item.ingredients}</p>
                  )}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-burger-red ml-4">
                  NT$ {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // Page 6: Hotdog
  const HotdogPage = () => (
    <div className="w-full h-full bg-white p-8 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
      }}></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 border-b-4 border-black pb-2">
          熱狗堡
        </h2>
        <div className="space-y-6">
          {restaurantData.menu.HOTDOG.map((item, index) => (
            <div key={index} className="border-b-2 border-gray-200 pb-4 relative">
              {item.is_best_seller && (
                <div className="absolute -top-2 -right-2 flex items-center text-burger-red">
                  <svg className="w-8 h-8 transform rotate-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span className="text-sm font-bold ml-1">老闆必吃</span>
                </div>
              )}
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">{item.name}</h3>
                  {item.note && (
                    <p className="text-gray-700 text-sm md:text-base italic">{item.note}</p>
                  )}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-burger-red ml-4">
                  NT$ {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // Page 7-8: Finger Food
  const FingerFoodPage1 = () => {
    const items = restaurantData.menu.FINGER_FOOD.slice(0, 2)
    return (
      <div className="w-full h-full bg-white p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
        }}></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 border-b-4 border-black pb-2">
            小食
          </h2>
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="border-b-2 border-gray-200 pb-4 relative">
                {item.is_best_seller && (
                  <div className="absolute -top-2 -right-2 flex items-center text-burger-red z-10">
                    <svg className="w-10 h-10 transform rotate-12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))' }}>
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-xs md:text-sm font-bold ml-1" style={{ 
                      fontFamily: 'Arial, sans-serif',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                      transform: 'rotate(-5deg)'
                    }}>老闆必吃</span>
                  </div>
                )}
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">{item.name}</h3>
                    {item.desc && (
                      <p className="text-gray-700 text-sm md:text-base">{item.desc}</p>
                    )}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-burger-red ml-4">
                    NT$ {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const FingerFoodPage2 = () => {
    const items = restaurantData.menu.FINGER_FOOD.slice(2)
    return (
      <div className="w-full h-full bg-white p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
        }}></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 border-b-4 border-black pb-2">
            小食
          </h2>
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="border-b-2 border-gray-200 pb-4 relative">
                {item.is_best_seller && (
                  <div className="absolute -top-2 -right-2 flex items-center text-burger-red z-10">
                    <svg className="w-10 h-10 transform rotate-12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))' }}>
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-xs md:text-sm font-bold ml-1" style={{ 
                      fontFamily: 'Arial, sans-serif',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                      transform: 'rotate(-5deg)'
                    }}>老闆必吃</span>
                  </div>
                )}
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">{item.name}</h3>
                    {item.desc && (
                      <p className="text-gray-700 text-sm md:text-base">{item.desc}</p>
                    )}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-burger-red ml-4">
                    NT$ {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Page 9: Drink & Dessert
  const DrinkDessertPage = () => (
    <div className="w-full h-full bg-white p-8 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
      }}></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 border-b-4 border-black pb-2">
          飲料與甜點
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">飲料</h3>
            <div className="grid grid-cols-2 gap-4">
              {restaurantData.menu.DRINK_DESSERT.beverages.map((beverage, index) => (
                <div key={index} className="text-xl md:text-2xl text-gray-800 border-b border-gray-300 pb-2">
                  {beverage}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">甜點</h3>
            <p className="text-xl md:text-2xl text-gray-800">{restaurantData.menu.DRINK_DESSERT.dessert}</p>
          </div>
          
          <div className="mt-6 p-4 bg-gray-100 border-l-4 border-burger-yellow">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">特別推薦</h3>
            <p className="text-xl md:text-2xl text-gray-800">{restaurantData.menu.DRINK_DESSERT.special}</p>
          </div>
        </div>
      </div>
    </div>
  )

  // Page 10: Back Cover
  const BackCoverPage = () => (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
      }}></div>
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 border-b-4 border-black pb-2">
            點餐流程
          </h2>
          <ol className="space-y-3 mb-8">
            {restaurantData.rules.steps.map((step, index) => (
              <li key={index} className="flex items-start text-lg md:text-xl text-gray-900">
                <span className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">注意事項</h3>
            <ul className="space-y-2">
              {restaurantData.rules.notes.map((note, index) => (
                <li key={index} className="text-lg md:text-xl text-gray-800 flex items-start">
                  <span className="text-burger-red mr-2">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-auto space-y-4">
          <a
            href={restaurantData.footer.google_maps}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-black text-white text-center py-3 px-6 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
          >
            📍 Google Maps
          </a>
          <a
            href={`https://www.instagram.com/${restaurantData.footer.contact.ig}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-burger-red text-white text-center py-3 px-6 rounded-lg font-bold text-lg hover:bg-burger-red/80 transition-colors"
          >
            📷 Instagram: @{restaurantData.footer.contact.ig}
          </a>
        </div>
      </div>
    </div>
  )

  const pages = [
    CoverPage,
    BrandStoryPage,
    BeefBurgersPage1,
    BeefBurgersPage2,
    ChickenVegPage,
    HotdogPage,
    FingerFoodPage1,
    FingerFoodPage2,
    DrinkDessertPage,
    BackCoverPage
  ]

  return (
    <div className="min-h-screen bg-gray-800 py-8 px-4 flex flex-col items-center">
      <div className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">電子菜單</h1>
        <p className="text-gray-300">點擊或拖拽頁面邊緣來翻頁</p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className={`px-6 py-3 rounded-lg font-bold transition-all ${
            currentPage === 0
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-burger-yellow text-black hover:bg-burger-yellow/80'
          }`}
        >
          ← 上一頁
        </button>
        <span className="text-white font-semibold">
          {currentPage + 1} / {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages - 1}
          className={`px-6 py-3 rounded-lg font-bold transition-all ${
            currentPage === totalPages - 1
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-burger-yellow text-black hover:bg-burger-yellow/80'
          }`}
        >
          下一頁 →
        </button>
      </div>

      <div className="w-full max-w-4xl flex justify-center">
        <div className="flipbook-container" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <HTMLFlipBook
            ref={flipBook}
            width={400}
            height={600}
            minWidth={300}
            maxWidth={500}
            minHeight={450}
            maxHeight={750}
            size="stretch"
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={handleFlip}
            className="mx-auto"
            style={{ margin: '0 auto' }}
          >
            {pages.map((PageComponent, index) => (
              <div key={index} className="page" style={{ width: '100%', height: '100%' }}>
                <PageComponent />
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  )
}

export default FlipbookMenu
