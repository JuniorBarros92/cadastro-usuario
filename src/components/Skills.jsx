const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 90 },
  { name: "Git", level: 80 },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.name}</h3>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}