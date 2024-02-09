import "../../sass/pages/_index.scss";
import { useState } from "react";
import data from "../../data.json";

const Destination = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(data.destinations[0]);

  const handleSelectPlanet = (planet) => {
    setSelectedPlanet(planet)
  }

  return (
    <div className="destination">

        <div className="destination__header">
          <span>01</span>
          <h4>PICK YOUR DESTINATION</h4>
        </div>
      <div className="destination__container">
        <div className="destination__image">
            <img src={selectedPlanet.images.webp}></img>
          </div>
        <div className="destination__details">
          <nav className="destination__details__tabs">
            <ul>
              <li className={`${selectedPlanet === data.destinations[0] ? "selected" : ""}`} onClick={() => handleSelectPlanet(data.destinations[0])}>MOON<span className="underline"></span></li>
              <li className={`${selectedPlanet === data.destinations[1] ? "selected" : ""}`} onClick={() => handleSelectPlanet(data.destinations[1])}>MARS<span className="underline"></span></li>
              <li className={`${selectedPlanet === data.destinations[2] ? "selected" : ""}`} onClick={() => handleSelectPlanet(data.destinations[2])}>EUROPA<span className="underline"></span></li>
              <li className={`${selectedPlanet === data.destinations[3] ? "selected" : ""}`} onClick={() => handleSelectPlanet(data.destinations[3])}>TITAN<span className="underline"></span></li>
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
      </div>
    </div>
  )
}

export default Destination
