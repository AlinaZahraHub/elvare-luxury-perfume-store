export default function PageIntro({ kicker, title, description }) {
  return <section className="page-intro">
    {kicker && <span className="eyebrow">{kicker}</span>}
    <h1>{title}</h1>
    {description && <p>{description}</p>}
  </section>
}
