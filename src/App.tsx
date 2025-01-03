import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StickyBar } from './components/layout/StickyBar'
import { Header } from './components/layout/Header'
import { HeroSection } from './components/home/HeroSection'
import { FeaturesSection } from './components/home/FeaturesSection'
import { ProductsShowcase } from './components/home/ProductsShowcase'
import { SocialProofSection } from './components/home/SocialProofSection'
import { FAQSection } from './components/home/FAQSection'
import { Footer } from './components/layout/Footer'
import { GoodBuySection } from './components/home/GoodBuySection'
import { Games } from './pages/Games'

function HomePage() {
  return (
    <>
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ProductsShowcase />
        <SocialProofSection />
        <FAQSection />
        <GoodBuySection />
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <StickyBar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<Games />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
