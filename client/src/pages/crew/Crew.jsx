import React, { useState } from "react"
import { motion } from "framer-motion"

import { pageVariants } from "../../framer"
import { useGetCrewQuery } from "../../app/services/crew"

import "./Crew.scss"

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

const Crew = () => {
  const { data: crew, isLoading } = useGetCrewQuery()
  const [crewInd, setCrewInd] = useState(0)

  const handleOnClick = (e) => {
    if (e.target.dataset.id === crewInd) return
    setCrewInd(Number(e.target.dataset.id))
  }

  if (isLoading) {
    return <div></div>
  }

  const renderOptions = () => {
    return crew.map((crewMember, ind) => (
      <motion.div
        className={`crew__option ${
          crewInd === ind ? "crew__option--selected" : ""
        }`}
        data-id={ind}
        onClick={handleOnClick}
        key={crewMember.name}
        whileHover={{ scale: 1.1 }}
      ></motion.div>
    ))
  }

  return (
    <motion.div
      className="crew"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="crew__info">
        <div className="crew__info-title-box">
          <h3 className="crew__info-title">
            <span className="crew__info-number">02</span>
            MEET YOUR CREW
          </h3>
        </div>
        <motion.h5
          className="crew__role"
          key={crew[crewInd].role}
          initial="initial"
          animate="animate"
          variants={variants}
        >
          {crew[crewInd].role}
        </motion.h5>
        <motion.h1
          className="crew__name"
          key={crew[crewInd].name}
          initial="initial"
          animate="animate"
          variants={variants}
        >
          {crew[crewInd].name}
        </motion.h1>
        <motion.p
          className="crew__bio"
          key={crew[crewInd].bio.slice(0, 10)}
          initial="initial"
          animate="animate"
          variants={variants}
        >
          {crew[crewInd].bio}
        </motion.p>
        <div className="crew__option-box">{renderOptions()}</div>
      </div>
      <div className="crew__img-box">
        <motion.img
          key={crew[crewInd].images.png}
          src={crew[crewInd].images.png}
          alt={crew[crewInd].name}
          className="crew__img"
          initial="initial"
          animate="animate"
          variants={variants}
        />
      </div>
    </motion.div>
  )
}

export default Crew
