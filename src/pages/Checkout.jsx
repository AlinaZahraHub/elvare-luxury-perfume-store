
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import { useStore } from '../context/StoreContext'

export default function Checkout() {
  const { cart, subtotal, clearCart } = useStore()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    first: '',
    last: '',
    email: '',
    address: '',
    city: '',
    postal: ''
  })

  const [error, setError] = useState('')

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const shipping = subtotal >= 150 ? 0 : 12

  const placeOrder = (e) => {
    e.preventDefault()

    if (!cart.length) {
      setError('Your bag is empty.')
      return
    }

    const order = {
      number: 'ELV-' + Date.now().toString().slice(-7),
      customer: form.first,
      total: subtotal + shipping
    }

    sessionStorage.setItem('elvare-last-order', JSON.stringify(order))
    clearCart()
    navigate('/order-confirmation')
  }

  if (!cart.length) {
    return (
      <div className="page-shell">
        <PageIntro
          kicker="CHECKOUT"
          title={
            <>
              Almost
              <br />
              <em>there.</em>
            </>
          }
        />

        <div className="empty-state">
          <h2>Your bag is empty.</h2>
          <Link to="/collection" className="button button-light">
            EXPLORE COLLECTION
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <PageIntro
        kicker="SECURE CHECKOUT DEMO"
        title={
          <>
            The final
            <br />
            <em>details.</em>
          </>
        }
      />

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={placeOrder}>
          <span className="eyebrow">CONTACT & DELIVERY</span>

          <div className="form-row">
            <label>
              FIRST NAME
              <input required name="first" value={form.first} onChange={update} />
            </label>

            <label>
              LAST NAME
              <input required name="last" value={form.last} onChange={update} />
            </label>
          </div>

          <label>
            EMAIL ADDRESS
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={update}
            />
          </label>

          <label>
            STREET ADDRESS
            <input required name="address" value={form.address} onChange={update} />
          </label>

          <div className="form-row">
            <label>
              CITY
              <input required name="city" value={form.city} onChange={update} />
            </label>

            <label>
              POSTAL CODE
              <input required name="postal" value={form.postal} onChange={update} />
            </label>
          </div>

          <div className="demo-notice">
            DEMO CHECKOUT — No payment will be collected. This creates a sample
            order confirmation only.
          </div>

          {error && <p className="error-text">{error}</p>}

          <button className="button button-light full-button" type="submit">
            PLACE DEMO ORDER
          </button>
        </form>

        <aside className="order-summary">
          <span className="eyebrow">YOUR ORDER</span>

          {cart.map((item) => (
            <div key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>
              <strong>
                ${(item.price * item.quantity).toFixed(2)}
              </strong>
            </div>
          ))}

          <div>
            <span>Shipping</span>
            <span>{shipping ? '$12.00' : 'Complimentary'}</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <strong>${(subtotal + shipping).toFixed(2)}</strong>
          </div>
        </aside>
      </div>
    </div>
  )
}
