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

const Destination = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(data.destinations[0]);

  const handleSelectPlanet = (planet) => {
    setSelectedPlanet(planet);
  }

  return (
    <div className="destination">
      <div className="destination__header">
        <span>01</span>
        <h4>PICK YOUR DESTINATION</h4>
      </div>
      <motion.div
        variants={variants}
        initial="initial"
        animate="final"
        exit="exit"
        className="destination__container">
        <div className="destination__image">
          <motion.img 
          src={selectedPlanet.images.webp}
          key={selectedPlanet.name}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeInOut" }}  
          ></motion.img>
        </div>
        <div className="destination__details">
          <nav className="destination__details__tabs">
            <ul>
              {data.destinations.map((destination, index) => (
                <li
                  key={index}
                  className={`${selectedPlanet === destination ? "selected" : ""}`}
                  onClick={() => handleSelectPlanet(destination)}
                >
                  {destination.name.toUpperCase()}<span className="underline"></span>
                </li>
              ))}
            </ul>
          </nav>

          <h1>{selectedPlanet.name}</h1>
          <p>{selectedPlanet.description}</p>
          <div className="destination__details__divider"></div>
          <div className="destination__details__distance">
            <div>
              <h4>AVG. DISTANCE</h4>
              <h2>{selectedPlanet.distance}</h2>
            </div>
            <div>
              <h4>EST. TRAVEL TIME</h4>
              <h2>{selectedPlanet.travel}</h2>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Destination
