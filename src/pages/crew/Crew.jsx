import "../../sass/pages/_index.scss";
import data from "../../data.json";
import { useState } from "react";
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
      <div className="crew__container">
        <div className="crew__details">
          <h4>{selectedCrew.role}</h4>
          <h1>{selectedCrew.name}</h1>
          <p>{selectedCrew.bio}</p>
          <nav className="crew__details__tabs">
            <ul>
              <li className={`${selectedCrew === data.crew[0] ? "selected" : ""}`} onClick={() => handleSelectCrew(data.crew[0])}></li>
              <li className={`${selectedCrew === data.crew[1] ? "selected" : ""}`} 
              onClick={() => handleSelectCrew(data.crew[1])}></li>
              <li className={`${selectedCrew === data.crew[2] ? "selected" : ""}`} 
              onClick={() => handleSelectCrew(data.crew[2])}></li>
              <li className={`${selectedCrew === data.crew[3] ? "selected" : ""}`} 
              onClick={() => handleSelectCrew(data.crew[3])}></li>
            </ul>
          </nav>
        </div>
        <div className="crew__image">
          <img src={selectedCrew.images.webp} alt={selectedCrew.name} />
        </div>
      </div>
    </div>
  )
}

export default Crew
