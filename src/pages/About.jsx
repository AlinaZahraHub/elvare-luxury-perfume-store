import PageIntro from '../components/PageIntro'
export default function About() {
  return <div className="page-shell">
    <PageIntro kicker="OUR PHILOSOPHY" title={<>A quieter kind<br/><em>of distinction.</em></>} description="We believe the most memorable things do not need to announce themselves."/>
    <section className="story-layout"><div className="story-art"><div className="story-ring"/><div className="story-word">É.</div><span>FORM / FEELING / FRAGRANCE</span></div><div className="story-copy"><span className="eyebrow">THE IDEA BEHIND THE NAME</span><h2>Identity, distilled.</h2><p>ÉLVARÉ began with a simple thought: fragrance is personal. It is an invisible detail that can hold a memory, shift a mood, or say something words cannot.</p><p>Our collection is built around character rather than convention. Six compositions, considered in balance, designed to be worn your way.</p><p>We favour clarity over excess, substance over spectacle, and details that reveal themselves with time.</p><span className="signature">A scent that stays.</span></div></section>
    <section className="values-row"><div><span>01</span><h3>INTENTION</h3><p>Every detail has a reason to be here.</p></div><div><span>02</span><h3>CHARACTER</h3><p>Distinct compositions with a point of view.</p></div><div><span>03</span><h3>RESTRAINT</h3><p>Luxury in what is considered, not crowded.</p></div></section>
  </div>
}
