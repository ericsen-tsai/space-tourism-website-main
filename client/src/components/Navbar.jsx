import React from "react"
import { Link } from "react-router-dom"

import "./Navbar.scss"

const pages = ["home", "destination", "crew", "technology"]

const Navbar = ({ currentPage }) => {
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
    </nav>
  )
}

export default Navbar
