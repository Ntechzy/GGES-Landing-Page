import { motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, Building2, Cpu, FlaskConical, GraduationCap, Handshake, Lightbulb, Rocket, Users } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import { reveal } from '../constants/motion'

export default function AboutSection() {
  return (
    <section id="about" className="ice-section section-pad">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Built for the Future of Education"
        description="Every element of GGES is designed to maximize your career potential."
      />

      <div className="feature-grid">
        <motion.article className="feature feature-wide dark-card" {...reveal}>
          <span className="square-icon"><Cpu /></span>
          <h3>Industry-Ready Curriculum</h3>
          <p>Courses co-designed with industry leaders, updated continuously to match real-world skill demands.</p>
          <a href="#programs">Learn More <ArrowRight /></a>
        </motion.article>
        <motion.article className="feature feature-primary" {...reveal}>
          <span className="soft-icon"><BriefcaseBusiness /></span>
          <div><strong>95%</strong><h3>Placement Assistance</h3><p>Dedicated placement cell, mock interviews, and 500+ recruiters ensuring your career launch.</p></div>
        </motion.article>
        <motion.article className="feature feature-accent" {...reveal}>
          <span className="soft-icon"><GraduationCap /></span>
          <div><h3>Expert Faculty</h3><strong>50+<small> Expert Mentors</small></strong></div>
        </motion.article>
        <motion.article className="feature white-card" {...reveal}>
          <span className="soft-icon"><Building2 /></span>
          <div><h3>Modern Infrastructure</h3><p>Smart labs, digital classrooms, and innovation studios.</p></div>
        </motion.article>
        <motion.article className="feature compact dark-card" {...reveal}>
          <span className="square-icon"><FlaskConical /></span>
          <div><h3>Practical Learning</h3><p>Hands-on projects every semester.</p></div>
        </motion.article>
        <motion.article className="feature compact white-card border-brand" {...reveal}>
          <span className="soft-icon"><Handshake /></span>
          <div><h3>Internship Support</h3><p>Experience with leading partners.</p></div>
        </motion.article>
        <motion.article className="feature compact pale-card" {...reveal}>
          <span className="square-icon brand-gradient"><Users /></span>
          <div><h3>Mentorship Programs</h3><p>1-on-1 mentor-student guidance.</p></div>
        </motion.article>
        <motion.article className="feature innovation dark-card" {...reveal}>
          <span className="square-icon"><Rocket /></span>
          <div><span className="kicker">Innovation Hub</span><h3>Innovation Ecosystem</h3><p>Incubators, startup labs, and research initiatives fueling tomorrow&apos;s entrepreneurs.</p></div>
          <div className="innovation-icons"><Lightbulb /><Cpu /><FlaskConical /></div>
        </motion.article>
      </div>
    </section>
  )
}
