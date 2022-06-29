import React from "react"
import { motion } from "framer-motion"

import { pageVariants } from "../../framer"

import "./Home.scss"

const Home = () => {
  return (
    <motion.div
      className="home"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="home__content">
        <div className="home__text-box">
          <h2 className="title title--secondary">so, you want to travel to</h2>
          <h1 className="title title--primary">Space</h1>
          <p className="paragraph">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <div className="home__mark-box">
        <h2 className="home__mark">Explore</h2>
      </div>
    </motion.div>
  )
}

export default Home
