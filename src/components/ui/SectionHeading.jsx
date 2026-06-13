import { motion } from 'framer-motion'
import { reveal } from '../../constants/motion'

export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <motion.div className={`section-heading${light ? ' light' : ''}`} {...reveal}>
      <span className="kicker">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  )
}
