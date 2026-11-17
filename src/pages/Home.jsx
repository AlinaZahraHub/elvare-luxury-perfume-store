
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import heroPerfume from '../assets/hero-perfume.png'

export default function Home() {
  const heroProduct = products[0]

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">THE ÉLVARÉ COLLECTION — EST. 2026</span>

          <h1>
            BEYOND THE<br />
            <em>ORDINARY.</em>
          </h1>

          <p>Fragrance is an expression of identity.</p>

          <Link to="/collection" className="button button-light">
            EXPLORE COLLECTION <ArrowUpRight size={16} />
          </Link>

          <span className="hero-index">01 / 06 — SIGNATURE SCENTS</span>
        </div>

        <div className="hero-art">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-glow" />

          <Link
            to={`/product/${heroProduct.slug}`}
            className="hero-product-link"
            aria-label={`Discover ${heroProduct.name}`}
          >
            <img
              src={heroPerfume}
              alt="ÉLVARÉ Amber Nocturne Perfume"
              className="hero-product-image"
            />
          </Link>

          <span className="hero-side-label">
            A STUDY IN PRESENCE
          </span>
        </div>

        <div className="hero-bottom">
          <span>SCENT WITH INTENTION.</span>
          <span>SCROLL TO DISCOVER ↓</span>
        </div>
      </section>

      <section className="section collection-preview">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CURATED WITH INTENTION</span>
            <h2>
              Six scents.<br />
              <em>Infinite expressions.</em>
            </h2>
          </div>

          <Link className="text-link" to="/collection">
            VIEW THE COLLECTION <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="manifesto">
        <span className="eyebrow">THE ÉLVARÉ POINT OF VIEW</span>

        <h2>
          A SCENT THAT<br />
          <em>STAYS.</em>
        </h2>

        <p>
          Not made to follow a moment.<br />
          Made to become part of yours.
        </p>

        <Link to="/our-story" className="text-link">
          DISCOVER OUR STORY <ArrowUpRight size={15} />
        </Link>
      </section>

      <section className="newsletter">
        <div>
          <span className="eyebrow">A NOTE FROM ÉLVARÉ</span>
          <h2>
            JOIN THE WORLD<br />
            OF <em>ÉLVARÉ.</em>
          </h2>
        </div>

        <div className="newsletter-copy">
          <p>
            Be the first to discover new compositions,
            thoughtful stories and the details behind every scent.
          </p>

          <Link to="/contact" className="button button-outline">
            STAY CONNECTED <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
