import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"

import "./Navbar.scss"

const pages = ["home", "destination", "crew", "technology"]

const Navbar = ({ currentPage }) => {
  const [isDisplay, setIsDisplay] = useState(false)
  const navRef = useRef()
  const hamburgerRef = useRef()

  useEffect(() => {
    const style = getComputedStyle(hamburgerRef.current)
    if (style.display === "none") return
    if (isDisplay) navRef.current.style.display = "inline-block"
    if (!isDisplay) navRef.current.style.display = "none"
  }, [isDisplay])

  const renderList = () => {
    return pages.map((page, ind) => (
      <li
        className={`navbar__item ${
          currentPage === page ? "navbar__item--selected" : ""
        }`}
        key={page}
      >
        <Link to={page === "home" ? "/" : "/" + page} className="navbar__link">
          <span className="navbar__link-number">{`0${ind}`}</span>
          {page.toUpperCase()}
        </Link>
      </li>
    ))
  }

  return (
    <nav className="navbar">
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
      <div className="navbar__nav navbar__nav--mobile" ref={navRef}>
        <ul className="navbar__list">{renderList()}</ul>
        <div className="navbar__icon-box">
          <i
            className="navbar__icon navbar__icon--close"
            onClick={() => setIsDisplay(false)}
          ></i>
        </div>
      </div>
      <div className="navbar__icon-box" ref={hamburgerRef}>
        <i
          className="navbar__icon navbar__icon--hamburger"
          onClick={() => setIsDisplay(true)}
        ></i>
      </div>
    </nav>
  )
}

export default Navbar
