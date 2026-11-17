import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Confirmation from './pages/Confirmation'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return <>
    <ScrollToTop />
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Shop />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/our-story" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/bag" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<Confirmation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </>
}
