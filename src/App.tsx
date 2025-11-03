import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StickyBar } from './components/layout/StickyBar'
import { Header } from './components/layout/Header'
import { HeroSection } from './components/home/HeroSection'
import { FeaturesSection } from './components/home/FeaturesSection'
import { ProductsShowcase } from './components/home/ProductsShowcase'
import { SocialProofSection } from './components/home/SocialProofSection'
import { Footer } from './components/layout/Footer'
import { GoodBuySection } from './components/home/GoodBuySection'
import { Products } from './pages/Products'
import { Egrator } from './pages/Egrator'
import { About } from './pages/About'
import { Privacy } from './pages/Privacy'
import { Terms } from './pages/Terms'
import { GameGuide } from './pages/GameGuide'
import { FAQ } from './pages/FAQ'
import { Contact } from './pages/Contact'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ProductsShowcase />
        <SocialProofSection />
        <GoodBuySection />
      </main>
    </>
  )
}

function App() {
  // Obsługa przekierowania z 404.html dla GitHub Pages
  useEffect(() => {
    const path = window.location.pathname
    if (path.includes('/?/')) {
      const cleanPath = path.split('/?/')[1].replace(/~and~/g, '&')
      window.history.replaceState(null, '', '/' + cleanPath)
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <StickyBar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/games" element={<Navigate to="/products" replace />} />
          <Route path="/apps" element={<Navigate to="/products" replace />} />
          <Route path="/egrator" element={<Egrator />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/game-guide" element={<GameGuide />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
