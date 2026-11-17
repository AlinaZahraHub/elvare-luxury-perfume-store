import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Shop() {
  const [search, setSearch] = useState('')
  const [family, setFamily] = useState('All fragrances')
  const families = ['All fragrances', ...new Set(products.map(p => p.family.split(' · ')[0]))]
  const filtered = useMemo(() => products.filter(p =>
    (p.name.toLowerCase().includes(search.toLowerCase()) || p.family.toLowerCase().includes(search.toLowerCase())) &&
    (family === 'All fragrances' || p.family.startsWith(family))
  ), [search, family])
  return <div className="page-shell">
    <PageIntro kicker="THE SIGNATURE COLLECTION" title={<>Find your<br/><em>own expression.</em></>} description="Six distinctive compositions. Each with a character of its own."/>
    <div className="shop-toolbar"><div className="search-field"><Search size={17}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search fragrances..." aria-label="Search fragrances"/></div><select value={family} onChange={e => setFamily(e.target.value)} aria-label="Filter by fragrance family">{families.map(f => <option key={f}>{f}</option>)}</select><span className="muted">{filtered.length} FRAGRANCES</span></div>
    {filtered.length ? <div className="product-grid">{filtered.map(product => <ProductCard key={product.id} product={product}/>)}</div> : <div className="empty-state"><h2>No fragrance found.</h2><p>Try another name or fragrance family.</p></div>}
  </div>
}
