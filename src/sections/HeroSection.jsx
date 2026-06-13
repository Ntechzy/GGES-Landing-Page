import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Code2, Download, Globe2, GraduationCap, Sparkles } from 'lucide-react'
import Stat from '../components/ui/Stat'
import { heroChips } from '../data/siteData'

const heroStats = [
  ['10,000+', 'Students'],
  ['500+', 'Recruiters'],
  ['95%', 'Placement Support'],
  ['20+', 'Years of Excellence'],
]

export default function HeroSection() {
  return (
    <section id="home" className="hero-section dark-section">
      <div className="stars" />
      {heroChips.map(({ label, className, duration }) => (
        <motion.span
          key={label}
          className={`course-chip ${className}`}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration, repeat: Infinity }}
        >
          {label}
        </motion.span>
      ))}

      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow pill"><Sparkles /> Future-Ready Education &middot; 2026</span>
          <h1>Shape Your Future<br />with <span>Industry-Focused</span> Education</h1>
          <p>Build a successful career in Management, Technology, and Pharmacy through future-ready programs designed for tomorrow&apos;s opportunities.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#admissions">Apply Now <ArrowRight /></a>
            <a className="btn outline" href="#programs"><Download /> Download Brochure</a>
          </div>
          <div className="hero-stats">
            {heroStats.map(([value, label]) => <Stat key={label} value={value} label={label} />)}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="globe"><Globe2 /></div>
          <motion.span className="float-icon i1" animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 4 }}><GraduationCap /></motion.span>
          <motion.span className="float-icon i2" animate={{ y: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 4.5 }}><BookOpen /></motion.span>
          <motion.span className="float-icon i3" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 3.6 }}><Code2 /></motion.span>
        </motion.div>
      </div>
    </section>
  )
}
