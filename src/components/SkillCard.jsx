import { motion } from "framer-motion"
import "./SkillCard.css"

function SkillCard({ skill }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >

      <div className="skill-header">

        <div>
          <h3>{skill.name}</h3>
          <p>{skill.description}</p>
        </div>

        <span>{skill.level}%</span>

      </div>


      <div className="skill-bar">

        <motion.div
          className="skill-progress"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
        />

      </div>

    </motion.div>
  )
}

export default SkillCard