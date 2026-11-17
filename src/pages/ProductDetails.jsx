import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Minus, Plus, ShoppingBag } from 'lucide-react'
import { products } from '../data/products'
import { useStore } from '../context/StoreContext'
import NotFound from './NotFound'

export default function ProductDetails() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const [quantity, setQuantity] = useState(1)
  const { addToCart, toggleWishlist, isWishlisted } = useStore()
  const navigate = useNavigate()

  if (!product) return <NotFound />

  const wishlisted = isWishlisted(product.id)

  return (
    <div className="page-shell product-detail">
      <Link to="/collection" className="back-link"><ArrowLeft size={15} /> BACK TO COLLECTION</Link>
      <div className="detail-layout">
        <div className="detail-visual">
          <img src={product.image} alt={`${product.name} perfume bottle`} className="detail-product-image" />
          <span className="detail-stamp">ÉLVARÉ / SIGNATURE Nº 0{product.id}</span>
        </div>

        <div className="detail-copy">
          <span className="eyebrow">{product.family} — {product.mood.toUpperCase()}</span>
          <h1>{product.name}</h1>
          <p className="detail-subtitle">{product.subtitle}</p>
          <div className="detail-price">${product.price}.00 <span>/ {product.size}</span></div>
          <p className="detail-description">{product.description}</p>

          <div className="notes-block">
            <span className="eyebrow">SCENT NOTES</span>
            <div className="note-list">
              {product.notes.map(note => <span key={note}>{note}</span>)}
            </div>
          </div>

          <div className="purchase-row">
            <div className="quantity-control">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} aria-label="Decrease quantity"><Minus size={14} /></button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} aria-label="Increase quantity"><Plus size={14} /></button>
            </div>
            <button className="button button-light add-button" onClick={() => { addToCart(product, quantity); navigate('/bag') }}>
              <ShoppingBag size={16} /> ADD TO BAG
            </button>
            <button
              className={`icon-button detail-heart ${wishlisted ? 'active' : ''}`}
              onClick={() => toggleWishlist(product)}
              aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              type="button"
            >
              <Heart fill={wishlisted ? 'currentColor' : 'none'} />
            </button>
          </div>
          <div className="detail-footnote">COMPLIMENTARY SHIPPING ON ORDERS OVER $150</div>
        </div>
      </div>
    </div>
  )
}
