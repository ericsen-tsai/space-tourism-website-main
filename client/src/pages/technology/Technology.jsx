import React, { useState } from "react"
import { motion } from "framer-motion"

import { pageVariants } from "../../framer"

import "./Technology.scss"

const technologies = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "./images/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./images/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "./images/technology/image-spaceport-portrait.jpg",
      landscape: "./images/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "./images/technology/image-space-capsule-portrait.jpg",
      landscape: "./images/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
]

const variants = {
  initial: {
    x: 20,
    opacity: 0,
    transition: { delay: 0.2, duration: 1 },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2, duration: 1 },
  },
}

const Technology = () => {
  const [technologyInd, setTechnologyInd] = useState(0)

  const handleOnClick = (e) => {
    console.log(e.target)

    console.log(e.target.dataset.id)
    if (e.target.dataset.id === technologyInd) return

    setTechnologyInd(Number(e.target.dataset.id))
  }

  const renderOptions = () => {
    return technologies.map((technology, ind) => (
      <motion.div
        className={`technology__option ${
          ind === technologyInd ? "technology__option--selected" : ""
        }`}
        key={technology.name}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 0.1, duration: 0.2 }}
      >
        <span
          className="technology__option-index"
          data-id={ind}
          onClick={handleOnClick}
        >
          {ind + 1}
        </span>
      </motion.div>
    ))
  }

  return (
    <motion.div
      className="technology"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="technology__info">
        <div className="technology__info-title-box">
          <h3 className="technology__info-title">
            <span className="technology__info-number">03</span>
            SPACE LAUNCH 101
          </h3>
        </div>
        <div className="technology__content-box">
          <div className="technology__option-box">{renderOptions()}</div>
          <div className="technology__introduction">
            <h5 className="technology__terminology">THE TERMINOLOGY...</h5>
            <motion.h1
              className="technology__name"
              key={technologies[technologyInd].name}
              initial="initial"
              animate="animate"
              variants={variants}
            >
              {technologies[technologyInd].name}
            </motion.h1>
            <motion.p
              className="technology__description"
              key={technologies[technologyInd].description}
              initial="initial"
              animate="animate"
              variants={variants}
            >
              {technologies[technologyInd].description}
            </motion.p>
          </div>
        </div>
      </div>
      <div className="technology__img-box">
        <motion.img
          src={technologies[technologyInd].images.portrait}
          alt={technologies[technologyInd].name}
          className="technology__img"
          key={technologies[technologyInd].images.portrait}
          initial="initial"
          animate="animate"
          variants={variants}
        />
      </div>
    </motion.div>
  )
}

export default Technology
