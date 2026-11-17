import { Link } from 'react-router-dom'
import { Minus, Plus, X } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import { useStore } from '../context/StoreContext'

export default function Cart() {
  const { cart, subtotal, updateQuantity, removeFromCart } = useStore()

  return (
    <div className="page-shell">
      <PageIntro kicker="YOUR SELECTION" title={<>The shopping<br /><em>bag.</em></>} />
      {!cart.length ? (
        <div className="empty-state">
          <h2>Your bag is waiting.</h2>
          <p>Discover a fragrance that feels like you.</p>
          <Link className="button button-light" to="/collection">EXPLORE COLLECTION</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map(item => (
              <article className="cart-item" key={item.id}>
                <div className="cart-thumb">
                  <img src={item.image} alt={`${item.name} perfume`} />
                </div>
                <div className="cart-info">
                  <Link to={`/product/${item.slug}`}><h3>{item.name}</h3></Link>
                  <p>{item.family} · {item.size}</p>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease"><Minus size={13} /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase"><Plus size={13} /></button>
                  </div>
                </div>
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                <button className="remove-item" onClick={() => removeFromCart(item.id)} aria-label="Remove item"><X size={17} /></button>
              </article>
            ))}
          </div>

          <aside className="order-summary">
            <span className="eyebrow">ORDER SUMMARY</span>
            <div><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>
            <div><span>Shipping</span><span>{subtotal >= 150 ? 'Complimentary' : '$12.00'}</span></div>
            <div className="summary-total"><span>Estimated total</span><strong>${(subtotal + (subtotal >= 150 ? 0 : 12)).toFixed(2)}</strong></div>
            <p>Taxes calculated at checkout.</p>
            <Link to="/checkout" className="button button-light full-button">PROCEED TO CHECKOUT</Link>
            <Link to="/collection" className="continue-link">CONTINUE SHOPPING</Link>
          </aside>
        </div>
      )}
    </div>
  )
}
