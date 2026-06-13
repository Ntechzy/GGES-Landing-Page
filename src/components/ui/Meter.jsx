import { motion } from 'framer-motion'

export default function Meter({ label, value, color = 'light' }) {
  return (
    <div className="meter">
      <div>
        <span>{label}</span>
        <b>{value}%</b>
      </div>
      <span className="track">
        <motion.i
          className={color}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </span>
    </div>
  )
}
