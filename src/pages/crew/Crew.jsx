import "../../sass/pages/_index.scss";
import data from "../../data.json";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      duration: 0.5,
      //delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState(data.crew[0]);

  const handleSelectCrew = (crew) => {
    setSelectedCrew(crew)
  }

  return (
    <div className="crew">
      <div className="crew__header">
        <span>02</span>
        <h4>MEET YOUR CREW</h4>
      </div>
      <motion.div
        variants={variants}
        initial="initial"
        animate="final"
        exit="exit"
        className="crew__container">
        <motion.div
          key={selectedCrew.name}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="crew__details">
          <h4>{selectedCrew.role}</h4>
          <h1>{selectedCrew.name}</h1>
          <p>{selectedCrew.bio}</p>
          <nav className="crew__details__tabs">
            <ul>
              {data.crew.map((crew, index) => (
                <li
                  key={index}
                  className={`${selectedCrew === crew ? "selected" : ""}`}
                  onClick={() => handleSelectCrew(crew)}
                ></li>
              ))}
            </ul>
          </nav>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          animate="final"
          exit="exit"
          className="crew__image">
          <motion.img
            src={selectedCrew.images.webp}
            alt={selectedCrew.name}
            key={selectedCrew.name}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Crew
