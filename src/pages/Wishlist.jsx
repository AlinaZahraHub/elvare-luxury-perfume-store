import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import ProductCard from '../components/ProductCard'
import { useStore } from '../context/StoreContext'
export default function Wishlist() {
  const { wishlist } = useStore()
  return <div className="page-shell"><PageIntro kicker="SAVED FOR LATER" title={<>Your considered<br/><em>collection.</em></>} description="The fragrances you've chosen to keep close."/>
    {wishlist.length ? <div className="product-grid">{wishlist.map(p => <ProductCard key={p.id} product={p}/>)}</div> : <div className="empty-state"><h2>Nothing saved. Yet.</h2><p>When a fragrance speaks to you, keep it here.</p><Link className="button button-outline" to="/collection">EXPLORE COLLECTION</Link></div>}
  </div>
}
