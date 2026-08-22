import "./Skills.css"
import SkillCard from "../components/SkillCard"

const skills = [
  {
    name: "Figma / UI UX",
    level: 85,
    description: "UI design, prototyping and design systems.",
  },

  {
    name: "HTML",
    level: 80,
    description: "Semantic and accessible web structure.",
  },

  {
    name: "CSS",
    level: 75,
    description: "Responsive layouts and modern styling.",
  },

  {
    name: "JavaScript",
    level: 40,
    description: "Currently building strong JavaScript fundamentals.",
  },

  {
    name: "React",
    level: 25,
    description: "Currently learning React development.",
  },
]

function Skills() {
  return (
    <section className="skills">

      <div className="skills-header">

        <p>My Skills</p>

        <h2>
          Tools & technologies
          <span> I work with.</span>
        </h2>

        <p className="skills-description">
          A growing set of design and development skills
          that I use to create modern digital experiences.
        </p>

      </div>


      <div className="skills-grid">

        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}

      </div>

    </section>
  )
}

export default Skills