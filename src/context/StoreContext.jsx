import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const StoreContext = createContext(null)

// Versioned keys intentionally start with a clean bag and wishlist after the
// collection refresh, preventing old perfume entries from appearing again.
const CART_KEY = 'elvare-cart-v2'
const WISHLIST_KEY = 'elvare-wishlist-v2'

const read = (key) => {
  try {
    const value = JSON.parse(localStorage.getItem(key))
    return Array.isArray(value) ? value : []
  } catch {
    return []
  }
}

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => read(CART_KEY))
  const [wishlist, setWishlist] = useState(() => read(WISHLIST_KEY))

  useEffect(() => localStorage.setItem(CART_KEY, JSON.stringify(cart)), [cart])
  useEffect(() => localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist)), [wishlist])

  const addToCart = (product, quantity = 1) => setCart(current => {
    const found = current.find(item => item.id === product.id)
    return found
      ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
      : [...current, { ...product, quantity }]
  })

  const updateQuantity = (id, quantity) => setCart(current =>
    quantity <= 0
      ? current.filter(item => item.id !== id)
      : current.map(item => item.id === id ? { ...item, quantity } : item)
  )

  const removeFromCart = id => setCart(current => current.filter(item => item.id !== id))

  const toggleWishlist = product => setWishlist(current =>
    current.some(item => item.id === product.id)
      ? current.filter(item => item.id !== product.id)
      : [...current, product]
  )

  const isWishlisted = id => wishlist.some(item => item.id === id)
  const clearCart = () => setCart([])
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const value = useMemo(() => ({
    cart, wishlist, addToCart, updateQuantity, removeFromCart, toggleWishlist,
    isWishlisted, clearCart, cartCount, subtotal
  }), [cart, wishlist])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)
  if (!context) throw new Error('useStore must be used inside StoreProvider')
  return context
}
