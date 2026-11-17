import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Heart, ShoppingBag } from 'lucide-react'
import { useStore } from '../context/StoreContext'
import AnnouncementBar from './AnnouncementBar'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { cartCount, wishlist } = useStore()
  const close = () => setOpen(false)
  return <>
    <AnnouncementBar />
    <header className="site-header">
      <button className="icon-button mobile-menu" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <Link className="wordmark" to="/" onClick={close}>ÉLVARÉ</Link>
      <nav className={open ? 'main-nav is-open' : 'main-nav'}>
        <NavLink to="/" onClick={close}>Home</NavLink>
        <NavLink to="/collection" onClick={close}>Collection</NavLink>
        <NavLink to="/our-story" onClick={close}>Our Story</NavLink>
        <NavLink to="/contact" onClick={close}>Contact</NavLink>
      </nav>
      <div className="header-actions">
        <Link className="icon-button action-link" to="/wishlist" aria-label="Wishlist"><Heart /><span className="count">{wishlist.length}</span></Link>
        <Link className="icon-button action-link" to="/bag" aria-label="Shopping bag"><ShoppingBag /><span className="count">{cartCount}</span></Link>
      </div>
    </header>
  </>
}
