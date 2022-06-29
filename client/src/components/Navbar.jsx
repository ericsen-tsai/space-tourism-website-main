import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, useCycle } from "framer-motion"

import "./Navbar.scss"

const pages = ["home", "destination", "crew", "technology"]

const Navbar = ({ currentPage }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const renderList = () => {
    return pages.map((page, ind) => (
      <motion.li
        className={`navbar__item ${
          currentPage === page ? "navbar__item--selected" : ""
        }`}
        key={page}
      >
        <Link to={page === "home" ? "/" : "/" + page} className="navbar__link">
          <span className="navbar__link-number">{`0${ind}`}</span>
          {page.toUpperCase()}
        </Link>
      </motion.li>
    ))
  }

  return (
    <motion.nav className="navbar">
      <div className="navbar__logo-box">
        <img
          src="./images/shared/logo.svg"
          alt="Logo"
          className="navbar__logo"
        />
      </div>
      <div className="navbar__nav">
        <ul className="navbar__list">{renderList()}</ul>
      </div>

      <motion.div
        className="navbar__nav navbar__nav--mobile"
        initial={{ opacity: 0, x: 300 }}
        animate={
          isOpen
            ? { opacity: 1, x: 0, duration: 0.5 }
            : { opacity: 0, x: 300, duration: 0.5 }
        }
        transition={{ duration: 0.5, type: "tween" }}
      >
        <ul className="navbar__list">{renderList()}</ul>
        <div className="navbar__icon-box">
          <i
            className="navbar__icon navbar__icon--close"
            onClick={toggleOpen}
          ></i>
        </div>
      </motion.div>

      <div className="navbar__icon-box">
        <i
          className="navbar__icon navbar__icon--hamburger"
          onClick={toggleOpen}
        ></i>
      </div>
    </motion.nav>
  )
}

export default Navbar
