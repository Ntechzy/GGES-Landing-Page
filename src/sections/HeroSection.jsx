import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Globe2,
} from "lucide-react";
import Stat from "../components/ui/Stat";
import { heroChips } from "../data/siteData";

const heroStats = [
  ["10,000+", "Students"],
  ["500+", "Recruiters"],
  ["95%", "Placement Support"],
  ["20+", "Years of Excellence"],
];

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="hero-section dark-section"
      style={{ 
        minHeight: "100vh", 
        height: "auto", 
        overflow: "visible",
        paddingBottom: "3rem" 
      }}
    >
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

      <div 
        className="hero-inner"
        style={{ overflow: "visible" }} 
      >
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Shape Your Future
            <br />
            with <span>Industry-Focused</span> Education
          </h1>
          <p>
            Build a successful career in Management, Technology, and Pharmacy
            through future-ready programs designed for tomorrow&apos;s
            opportunities.
          </p>
          
          <motion.div
            className="hero-mobile-showcase"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ position: "relative" }} 
          >
            {/* FIX: Kept the orbits but removed the Globe for a cleaner mobile look */}
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <img
              className="mobile-hero-image"
              src="/hero.png"
              alt="Layered education technology illustration"
              style={{ position: "relative", zIndex: 1 }} 
            />
            
            <div className="mobile-program-strip" style={{ position: "relative", zIndex: 2 }}>
              {heroChips.slice(0, 4).map(({ label }) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </motion.div>

          <div className="hero-actions">
            <a className="btn primary" href="#admissions">
              Apply Now <ArrowRight />
            </a>
            <a className="btn outline" href="#programs">
              <Download /> Download Brochure
            </a>
          </div>
          <div className="hero-stats">
            {heroStats.map(([value, label]) => (
              <Stat key={label} value={value} label={label} />
            ))}
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
          <img
            className="hero-main-image"
            src="/hero.png"
            alt="Layered education technology illustration"
          />
          <div className="globe">
            <Globe2 />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
