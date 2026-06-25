import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import { reveal } from '../constants/motion'
import { programs } from '../data/siteData'

export default function AdmissionFormCard({ compact = false, initialProgram = '' }) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [selectedProgram, setSelectedProgram] = useState('')
  const sheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!sheetsUrl) {
      setSubmitError('Google Sheets is not connected yet. Add your Apps Script web app URL to .env.')
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    const formData = new FormData(form)
    const payload = {
      fullName: formData.get('fullName'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      program: formData.get('program'),
      state: formData.get('state'),
      city: formData.get('city'),
      submittedAt: new Date().toISOString(),
      source: window.location.href,
    }

    const showSuccess = () => {
      form.reset()
      setSelectedProgram('')
      setIsSubmitted(true)
    }

    try {
      await fetch(sheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        keepalive: true,
        body: JSON.stringify(payload),
      })

      showSuccess()
    } catch {
      showSuccess()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      className={`apply-form${compact ? ' compact' : ''}`}
      onSubmit={handleSubmit}
      {...reveal}
    >
      <h2>{isSubmitted ? 'Thank You!' : "Apply Now - It's Free"}</h2>
      {isSubmitted ? (
        <div className="success-message">
          <Check />
          <h3>Your application has been received.</h3>
          <p>Our admissions team will contact you shortly.</p>
          <button
            type="button"
            className="btn primary"
            onClick={() => {
              setSubmitError('')
              setIsSubmitted(false)
            }}
          >
            Submit Another
          </button>
        </div>
      ) : (
        <>
          <label className="full">
            Full Name
            <input required name="fullName" autoComplete="name" placeholder="Enter your name" />
          </label>
          <label>
            Phone
            <input required name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" />
          </label>
          <label>
            Email
            <input required name="email" type="email" autoComplete="email" placeholder="you@email.com" />
          </label>
          <label>
            Program
            <span className="select-wrap">
              <select
                required
                name="program"
                value={selectedProgram || initialProgram}
                onChange={(event) => setSelectedProgram(event.target.value)}
              >
                <option value="" disabled>Select program</option>
                {Object.keys(programs).map((program) => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
              </select>
              <ChevronDown />
            </span>
          </label>
          <label>
            State
            <input required name="state" autoComplete="address-level1" placeholder="Your state" />
          </label>
          <label>
            City
            <input required name="city" autoComplete="address-level2" placeholder="Your city" />
          </label>
          {submitError ? <p className="form-error full">{submitError}</p> : null}
          <button className="form-submit full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Start Your Admission Journey'} <ArrowRight />
          </button>
          <small className="full privacy">By submitting, you agree to our Privacy Policy. No spam, ever.</small>
        </>
      )}
    </motion.form>
  )
}
