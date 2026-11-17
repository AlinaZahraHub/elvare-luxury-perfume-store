import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import PageIntro from '../components/PageIntro'
export default function Confirmation() {
  let order = null
  try { order = JSON.parse(sessionStorage.getItem('elvare-last-order')) } catch {}
  return <div className="page-shell confirmation-page"><div className="confirmation-mark"><Check size={28}/></div><PageIntro kicker="ORDER CONFIRMED — DEMO" title={<>Thank you{order?.customer ? `, ${order.customer}` : ''}.<br/><em>Consider it yours.</em></>} description="Your sample order has been placed successfully. This is a portfolio demonstration; no payment or delivery has been processed."/>
    {order && <div className="confirmation-details"><span>ORDER REFERENCE</span><strong>{order.number}</strong><span>DEMO ORDER TOTAL</span><strong>${Number(order.total).toFixed(2)}</strong></div>}
    <Link to="/collection" className="button button-light">RETURN TO COLLECTION</Link>
  </div>
}
