import React, { useState } from "react"

import "./Crew.scss"

const crews = [
  {
    name: "Douglas Hurley",
    images: {
      png: "./images/crew/image-douglas-hurley.png",
      webp: "./images/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "./images/crew/image-mark-shuttleworth.png",
      webp: "./images/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: "./images/crew/image-victor-glover.png",
      webp: "./images/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "./images/crew/image-anousheh-ansari.png",
      webp: "./images/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
]

const Crew = () => {
  const [crewInd, setCrewInd] = useState(0)

  const handleOnClick = (e) => {
    if (e.target.dataset.id === crewInd) return
    setCrewInd(Number(e.target.dataset.id))
  }

  const renderList = () => {
    return crews.map((crew, ind) => (
      <div
        className={`crew__option ${
          crewInd === ind ? "crew__option--selected" : ""
        }`}
        data-id={ind}
        onClick={handleOnClick}
        key={crew.name}
      ></div>
    ))
  }

  return (
    <div className="crew">
      <div className="crew__info">
        <div className="crew__info-title-box">
          <h3 className="crew__info-title">
            <span className="crew__info-number">02</span>
            MEET YOUR CREW
          </h3>
        </div>
        <h5 className="crew__role">{crews[crewInd].role}</h5>
        <h1 className="crew__name">{crews[crewInd].name}</h1>
        <p className="crew__bio">{crews[crewInd].bio}</p>
        <div className="crew__option-box">{renderList()}</div>
      </div>
      <div className="crew__img-box">
        <img
          src={crews[crewInd].images.png}
          alt={crews[crewInd].name}
          className="crew__img"
        />
      </div>
    </div>
  )
}

export default Crew
