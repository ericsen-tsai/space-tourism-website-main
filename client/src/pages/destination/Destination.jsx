import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { pageVariants } from "../../framer"

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

const variants = {
  initial: {
    x: -20,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5, duration: 1 },
  },
}

const Destination = () => {
  const [destinationInd, setDestinationInd] = useState(0)

  const handleOnClick = (e) => {
    if (e.target.dataset.id === destinationInd) return
    setDestinationInd(Number(e.target.dataset.id))
  }

  const renderOptions = () => {
    return destinations.map((destination, ind) => (
      <motion.li
        className={`destination__item ${
          ind === destinationInd ? "destination__item--selected" : ""
        }`}
        key={destination.name}
        whileHover={{
          scale: 1.05,
          transition: { delay: 0.1, duration: 0.5 },
        }}
      >
        <p className="destination__link" onClick={handleOnClick} data-id={ind}>
          {destination.name}
        </p>
      </motion.li>
    ))
  }

  return (
    <motion.div
      className="destination"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="destination__content">
        <div className="destination__content-title-box">
          <h3 className="destination__content-title">
            <span className="destination__content-number">01</span>
            PICK YOUR DESTINATION
          </h3>
        </div>
        <AnimatePresence>
          <motion.img
            src={destinations[destinationInd].images.png}
            alt={destinations[destinationInd].name}
            className="destination__img"
            key={destinations[destinationInd].images.png}
            initial="initial"
            animate="animate"
            variants={variants}
            exit={{ x: 20, opacity: 0 }}
          />
        </AnimatePresence>
      </div>

      <div className="destination__info">
        <nav className="destination__nav">
          <ul className="destination__list">{renderOptions()}</ul>
        </nav>
        <motion.h1
          className="destination__name"
          key={destinations[destinationInd].name}
          initial="initial"
          animate="animate"
          variants={variants}
        >
          {destinations[destinationInd].name}
        </motion.h1>

        <motion.p
          className="destination__description"
          key={destinations[destinationInd].description.slice(0, 10)}
          initial="initial"
          animate="animate"
          variants={variants}
        >
          {destinations[destinationInd].description}
        </motion.p>

        <div className="destination__detail-box">
          <div className="destination__detail">
            <p className="destination__detail-title">AVG. DISTANCE</p>
            <motion.h5
              className="destination__detail-value"
              key={destinations[destinationInd].distance}
              initial="initial"
              animate="animate"
              variants={variants}
            >
              {destinations[destinationInd].distance}
            </motion.h5>
          </div>
          <div className="destination__detail">
            <p className="destination__detail-title">EST. TRAVEL TIME</p>
            <motion.h5
              className="destination__detail-value"
              key={destinations[destinationInd].travel}
              initial="initial"
              animate="animate"
              variants={variants}
            >
              {destinations[destinationInd].travel}
            </motion.h5>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Destination
