import React, { useState } from "react"

import "./Destination.scss"

const destinations = [
  {
    name: "Moon",
    images: {
      png: "/images/destination/image-moon.png",
      webp: "/images/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "/images/destination/image-mars.png",
      webp: "/images/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "/images/destination/image-europa.png",
      webp: "/images/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "/images/destination/image-titan.png",
      webp: "/images/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
]

const Destination = () => {
  const [destinationInd, setDestinationInd] = useState(0)

  const handleOnClick = (e) => {
    if (e.target.dataset.id === destinationInd) return
    setDestinationInd(Number(e.target.dataset.id))
  }

  const renderOptions = () => {
    return destinations.map((destination, ind) => (
      <li
        className={`destination__item ${
          ind === destinationInd ? "destination__item--selected" : ""
        }`}
        key={destination.name}
      >
        <p className="destination__link" onClick={handleOnClick} data-id={ind}>
          {destination.name}
        </p>
      </li>
    ))
  }

  return (
    <div className="destination">
      <div className="destination__content">
        <div className="destination__content-title-box">
          <h3 className="destination__content-title">
            <span className="destination__content-number">01</span>
            PICK YOUR DESTINATION
          </h3>
        </div>
        <img
          src={destinations[destinationInd].images.png}
          alt={destinations[destinationInd].name}
          className="destination__img"
        />
      </div>

      <div className="destination__info">
        <nav className="destination__nav">
          <ul className="destination__list">{renderOptions()}</ul>
        </nav>
        <h1 className="destination__name">
          {destinations[destinationInd].name}
        </h1>
        <p className="destination__description">
          {destinations[destinationInd].description}
        </p>
        <div className="destination__detail-box">
          <div className="destination__detail">
            <p className="destination__detail-title">AVG. DISTANCE</p>
            <h5 className="destination__detail-value">
              {destinations[destinationInd].distance}
            </h5>
          </div>
          <div className="destination__detail">
            <p className="destination__detail-title">EST. TRAVEL TIME</p>
            <h5 className="destination__detail-value">
              {destinations[destinationInd].travel}
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
