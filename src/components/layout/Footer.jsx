import Brand from '../ui/Brand'

const footerLinks = [
  ['Programs', '#programs'],
  ['Admissions', '#admissions'],
  ['Placements', '#placements'],
  ['Campus', '#about'],
  ['Privacy Policy', '#home'],
]

export default function Footer() {
  return (
    <footer>
      <Brand />
      <div>
        {footerLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </div>
      <span>&copy; 2026 GGES Education</span>
    </footer>
  )
}
