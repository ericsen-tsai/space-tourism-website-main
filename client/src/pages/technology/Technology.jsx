import React, { useState } from "react"
import { motion } from "framer-motion"
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

const Technology = () => {
  const [technologyInd, setTechnologyInd] = useState(0)

  const handleOnClick = (e) => {
    console.log(e.target)

    console.log(e.target.dataset.id)
    if (e.target.dataset.id === technologyInd) return

    setTechnologyInd(Number(e.target.dataset.id))
  }

  const renderList = () => {
    return technologies.map((technology, ind) => (
      <div
        className={`technology__option ${
          ind === technologyInd ? "technology__option--selected" : ""
        }`}
        key={technology.name}
      >
        <span
          className="technology__option-index"
          data-id={ind}
          onClick={handleOnClick}
        >
          {ind + 1}
        </span>
      </div>
    ))
  }

  return (
    <motion.div
      className="technology"
      animation={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="technology__info">
        <div className="technology__info-title-box">
          <h3 className="technology__info-title">
            <span className="technology__info-number">03</span>
            SPACE LAUNCH 101
          </h3>
        </div>
        <div className="technology__content-box">
          <div className="technology__option-box">{renderList()}</div>
          <div className="technology__introduction">
            <h5 className="technology__terminology">THE TERMINOLOGY...</h5>
            <h1 className="technology__name">
              {technologies[technologyInd].name}
            </h1>
            <p className="technology__description">
              {technologies[technologyInd].description}
            </p>
          </div>
        </div>
      </div>
      <div className="technology__img-box">
        <img
          src={technologies[technologyInd].images.portrait}
          alt={technologies[technologyInd].name}
          className="technology__img"
        />
      </div>
    </motion.div>
  )
}

export default Technology
