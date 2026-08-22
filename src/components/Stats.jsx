import "./Stats.css"

const stats = [
  {
    number: "2025",
    label: "BCA Graduate",
  },
  {
    number: "01",
    label: "Current Internship",
  },
  {
    number: "UI/UX",
    label: "Design Focus",
  },
  {
    number: "React",
    label: "Currently Learning",
  },
]

function Stats() {
  return (
    <section className="stats">

      <div className="stats-header">
        <p>My Journey</p>
      </div>

      <div className="stats-grid">

        {stats.map((stat, index) => (
          <div
            className="stat"
            key={stat.label}
          >
            <span className="stat-number">
              {stat.number}
            </span>

            <span className="stat-label">
              {stat.label}
            </span>

            {index < stats.length - 1 && (
              <span className="stat-line" />
            )}
          </div>
        ))}

      </div>

    </section>
  )
}

export default Stats