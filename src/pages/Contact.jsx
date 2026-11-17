import { useState } from 'react'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import PageIntro from '../components/PageIntro'
export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({name:'', email:'', subject:'', message:''})
  const update = e => setForm({...form, [e.target.name]:e.target.value})
  const submit = e => { e.preventDefault(); setSent(true) }
  return <div className="page-shell">
    <PageIntro kicker="WE'RE HERE TO HELP" title={<>A conversation<br/><em>starts here.</em></>} description="Questions about a fragrance, an order or simply ÉLVARÉ? We'd love to hear from you."/>
    <div className="contact-layout"><div className="contact-aside"><div><Mail/><span className="eyebrow">WRITE TO US</span><p>hello@elvare.example</p></div><div><MapPin/><span className="eyebrow">CUSTOMER CARE</span><p>Monday – Friday<br/>9:00 AM – 5:00 PM</p></div><p className="muted">We aim to respond within two business days.</p></div>
      <form className="contact-form" onSubmit={submit}>{sent ? <div className="success-panel"><span className="eyebrow">MESSAGE RECEIVED</span><h2>Thank you.</h2><p>Your demo message has been recorded on this page. This concept site does not send emails yet.</p><button type="button" className="text-link" onClick={() => {setSent(false);setForm({name:'',email:'',subject:'',message:''})}}>SEND ANOTHER MESSAGE ↗</button></div> : <>
        <div className="form-row"><label>YOUR NAME<input required name="name" value={form.name} onChange={update} placeholder="Name"/></label><label>EMAIL ADDRESS<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com"/></label></div>
        <label>SUBJECT<input required name="subject" value={form.subject} onChange={update} placeholder="How can we help?"/></label>
        <label>MESSAGE<textarea required rows="5" name="message" value={form.message} onChange={update} placeholder="Write your message..."/></label>
        <button className="button button-light" type="submit">SEND MESSAGE <ArrowUpRight size={16}/></button>
      </>}</form>
    </div>
  </div>
}
