import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Navbar from "./Navbar"
import Home from "../pages/home/Home"
import Destination from "../pages/destination/Destination"
import Crew from "../pages/crew/Crew"
import Technology from "../pages/technology/Technology"

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <>
      <Navbar
        currentPage={
          location.pathname === "/" ? "home" : location.pathname.split("/")[1]
        }
      />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes
