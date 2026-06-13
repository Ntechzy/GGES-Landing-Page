import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import Stat from '../components/ui/Stat'
import { reveal } from '../constants/motion'
import { programs } from '../data/siteData'

const benefits = ['Free Counseling', 'Scholarship Available', '95% Placement']
const finalStats = [['10,000+', 'Students'], ['500+', 'Recruiters'], ['95%', 'Placement'], ['20+', 'Years']]

function AdmissionForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <motion.form className="apply-form" onSubmit={handleSubmit} {...reveal}>
      <h2>{isSubmitted ? 'Thank You!' : "Apply Now - It's Free"}</h2>
      {isSubmitted ? (
        <div className="success-message">
          <Check />
          <h3>Your application has been received.</h3>
          <p>Our admissions team will contact you shortly.</p>
          <button type="button" className="btn primary" onClick={() => setIsSubmitted(false)}>Submit Another</button>
        </div>
      ) : (
        <>
          <label className="full">Full Name<input required name="fullName" autoComplete="name" placeholder="Enter your name" /></label>
          <label>Phone<input required name="phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000" /></label>
          <label>Email<input required name="email" type="email" autoComplete="email" placeholder="you@email.com" /></label>
          <label>
            Program
            <span className="select-wrap">
              <select required name="program" defaultValue="">
                <option value="" disabled>Select program</option>
                {Object.keys(programs).map((program) => <option key={program}>{program}</option>)}
              </select>
              <ChevronDown />
            </span>
          </label>
          <label>State<input required name="state" autoComplete="address-level1" placeholder="Your state" /></label>
          <label>City<input required name="city" autoComplete="address-level2" placeholder="Your city" /></label>
          <button className="form-submit full" type="submit">Start Your Admission Journey <ArrowRight /></button>
          <small className="full privacy">By submitting, you agree to our Privacy Policy. No spam, ever.</small>
        </>
      )}
    </motion.form>
  )
}

export default function AdmissionsSection() {
  return (
    <>
      <section id="admissions" className="admission-section">
        <div className="admission-pitch">
          <div>
            <span className="kicker">Start Your Journey</span>
            <h2>Begin Your<br />Admission Today</h2>
            <p>Join thousands of students who chose GGES for a better future.</p>
            {benefits.map((benefit) => <span className="benefit" key={benefit}><Check />{benefit}</span>)}
          </div>
        </div>
        <AdmissionForm />
      </section>

      <section id="contact" className="final-cta dark-section">
        <span className="kicker">Your Future Awaits</span>
        <h2>Your Future Starts Here</h2>
        <p>Join thousands of students building successful careers through quality education and industry-ready training.</p>
        <div>
          <a className="btn primary" href="#admissions">Apply Now</a>
          <a className="btn brand-outline" href="tel:+910000000000">Talk to Counselor</a>
        </div>
        <div className="final-stats">
          {finalStats.map(([value, label]) => <Stat key={label} value={value} label={label} />)}
        </div>
      </section>
    </>
  )
}
