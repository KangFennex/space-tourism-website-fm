import "../../sass/pages/_index.scss";
import { useState } from "react";
import data from "../../data.json";
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

const Technology = () => {
  const [selectedTech, setSelectedTech] = useState(data.technology[1]);

  const handleSelectTech = (tech) => {
    setSelectedTech(tech)
  }

  return (
    <div className="technology">
      <div className="destination__header">
        <span>03</span>
        <h4>SPACE LAUNCH 101</h4>
      </div>
      <motion.div
        variants={variants}
        initial="initial"
        animate="final"
        exit="exit"
        className="technology__container">
        <div className="technology__image">
          <img src={window.innerWidth > 768 ? selectedTech.images.portrait : selectedTech.images.landscape} alt={selectedTech.name} />
        </div>
        <div className="technology__details">

          <nav className="technology__details__tabs">
            <ul>
              <li className={`${selectedTech === data.technology[0] ? "selected" : ""}`} onClick={() => handleSelectTech(data.technology[0])}>1</li>
              <li className={`${selectedTech === data.technology[1] ? "selected" : ""}`} onClick={() => handleSelectTech(data.technology[1])}>2</li>
              <li className={`${selectedTech === data.technology[2] ? "selected" : ""}`} onClick={() => handleSelectTech(data.technology[2])}>3</li>
            </ul>
          </nav>
          <div>
            <h4>THE TERMINOLOGY...</h4>
            <h1>{selectedTech.name}</h1>
            <p>{selectedTech.description}</p>
          </div>
        </div>
      </motion.div>

    </div>
  )
}

export default Technology
