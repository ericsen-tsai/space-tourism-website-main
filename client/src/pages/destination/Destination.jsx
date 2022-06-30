import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { pageVariants } from "../../framer"
import { useGetDestinationsQuery } from "../../app/services/destination"

import "./Destination.scss"

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
  const { data: destinations, isLoading } = useGetDestinationsQuery()
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

  if (isLoading) return <></>

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
