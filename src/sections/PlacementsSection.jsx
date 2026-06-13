import { motion } from 'framer-motion'
import { BarChart3, Building2, ShieldCheck, Sparkles, Trophy } from 'lucide-react'
import Meter from '../components/ui/Meter'
import SectionHeading from '../components/ui/SectionHeading'
import { reveal } from '../constants/motion'
import { companies, programs } from '../data/siteData'

const successStories = [
  {
    company: 'Deloitte',
    program: 'MBA 2023',
    quote: 'GGES gave me the industry exposure and mentorship that landed me my dream consulting role.',
  },
  {
    company: 'Amazon',
    program: 'MCA 2023',
    quote: 'The practical projects and internship support made me job-ready from day one.',
    alternate: true,
  },
]

export default function PlacementsSection() {
  return (
    <section id="placements" className="placement-section dark-section section-pad">
      <SectionHeading
        eyebrow="Placement Success"
        title="Careers That Speak for Themselves"
        description="Our students are placed at India's top companies across every industry."
        light
      />

      <div className="placement-stats">
        <motion.div {...reveal}><Trophy /><strong>&#8377;12 LPA</strong><span>Highest Package</span></motion.div>
        <motion.div {...reveal}><span className="rupee">&#8377;</span><strong>&#8377;5.8 LPA</strong><span>Average Package</span></motion.div>
        <motion.div {...reveal}><ShieldCheck /><strong>95%</strong><span>Placement Support</span></motion.div>
        <motion.div {...reveal}><Building2 /><strong>500+</strong><span>Recruiting Companies</span></motion.div>
      </div>

      <div className="company-marquee">
        <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}>
          {[...companies, ...companies].map((company, index) => <span key={`${company}-${index}`}>{company}</span>)}
        </motion.div>
      </div>

      <div className="success-grid">
        <div>
          <h3><Sparkles /> Success Stories</h3>
          {successStories.map(({ company, program, quote, alternate }) => (
            <article className="story" key={company}>
              <span className={`avatar${alternate ? ' alt' : ''}`} />
              <div>
                <b>{company}</b>
                <small>{program}</small>
                <p>&ldquo;{quote}&rdquo;</p>
              </div>
            </article>
          ))}
        </div>
        <div className="course-performance">
          <BarChart3 />
          {Object.keys(programs).map((program, index) => <Meter key={program} label={program} value={92 - index * 2} />)}
        </div>
      </div>
    </section>
  )
}
