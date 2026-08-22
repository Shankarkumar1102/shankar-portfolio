import { motion } from "framer-motion"
import "./Loader.css"

function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.1 }}
    >
      <motion.div
        className="loader-content"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span>Shankar.</span>

        <div className="loader-line">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
          />
        </div>

        <p>Loading portfolio...</p>
      </motion.div>
    </motion.div>
  )
}

export default Loader