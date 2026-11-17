import { Link } from 'react-router-dom'
import { Heart, ArrowUpRight } from 'lucide-react'
import { useStore } from '../context/StoreContext'

export default function ProductCard({ product }) {
  const { toggleWishlist, isWishlisted } = useStore()
  const wishlisted = isWishlisted(product.id)

  return (
    <article className="product-card">
      <div className="product-visual">
        <Link
          to={`/product/${product.slug}`}
          aria-label={`View ${product.name}`}
          className="product-image-link"
        >
          <img
            src={product.image}
            alt={`${product.name} perfume bottle`}
            className="product-image"
            loading="lazy"
          />
        </Link>

        <button
          className={`wishlist-toggle ${wishlisted ? 'active' : ''}`}
          onClick={() => toggleWishlist(product)}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          type="button"
        >
          <Heart size={18} fill={wishlisted ? 'currentColor' : 'none'} />
        </button>

        <Link to={`/product/${product.slug}`} className="quick-view">
          DISCOVER <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="product-meta">
        <div>
          <h3>{product.name}</h3>
          <p>{product.family}</p>
        </div>
        <span>${product.price}</span>
      </div>
      <p className="product-subtitle">{product.subtitle}</p>
    </article>
  )
}
