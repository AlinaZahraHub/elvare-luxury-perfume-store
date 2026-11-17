import { Link } from 'react-router-dom'
export default function NotFound() {
  return <div className="page-shell not-found"><span className="eyebrow">404 — NOT FOUND</span><h1>This page has<br/><em>drifted away.</em></h1><Link to="/" className="button button-light">RETURN HOME</Link></div>
}
