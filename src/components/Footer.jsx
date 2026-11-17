import { Link } from 'react-router-dom'
export default function Footer() {
  return <footer className="footer">
    <div className="footer-top">
      <div><Link to="/" className="wordmark footer-logo">ÉLVARÉ</Link><p className="muted footer-note">Fragrance is an expression of identity.</p></div>
      <div className="footer-links"><span className="eyebrow">EXPLORE</span><Link to="/collection">Collection</Link><Link to="/our-story">Our Story</Link><Link to="/contact">Contact</Link></div>
      <div className="footer-links"><span className="eyebrow">INFORMATION</span><Link to="/bag">Shipping & Returns</Link><Link to="/contact">Customer Care</Link><Link to="/wishlist">Wishlist</Link></div>
      <div className="footer-news"><span className="eyebrow">STAY IN THE KNOW</span><p>Notes, new releases and moments worth remembering.</p><Link to="/contact" className="text-link">GET IN TOUCH ↗</Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} ÉLVARÉ. ALL RIGHTS RESERVED.</span><span>AN EXPRESSION, NOT AN IMPRESSION.</span></div>
  </footer>
}
