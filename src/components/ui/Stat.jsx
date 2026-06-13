export default function Stat({ value, label }) {
  return (
    <div className="mini-stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}
