import React, { useState } from "react"
import { motion } from "framer-motion"

import { pageVariants } from "../../framer"
import { useGetTechnologyQuery } from "../../app/services/technology"

import "./Technology.scss"

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
  const { data: technology, isLoading } = useGetTechnologyQuery()
  const [technologyInd, setTechnologyInd] = useState(0)

  const handleOnClick = (e) => {
    console.log(e.target)

    console.log(e.target.dataset.id)
    if (e.target.dataset.id === technologyInd) return

    setTechnologyInd(Number(e.target.dataset.id))
  }

  const renderOptions = () => {
    return technology.map((technologyItem, ind) => (
      <motion.div
        className={`technology__option ${
          ind === technologyInd ? "technology__option--selected" : ""
        }`}
        key={technologyItem.name}
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

  if (isLoading) return <></>

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
              key={technology[technologyInd].name}
              initial="initial"
              animate="animate"
              variants={variants}
            >
              {technology[technologyInd].name}
            </motion.h1>
            <motion.p
              className="technology__description"
              key={technology[technologyInd].description}
              initial="initial"
              animate="animate"
              variants={variants}
            >
              {technology[technologyInd].description}
            </motion.p>
          </div>
        </div>
      </div>
      <div className="technology__img-box">
        <motion.img
          src={technology[technologyInd].images.portrait}
          alt={technology[technologyInd].name}
          className="technology__img"
          key={technology[technologyInd].images.portrait}
          initial="initial"
          animate="animate"
          variants={variants}
        />
      </div>
    </motion.div>
  )
}

export default Technology
