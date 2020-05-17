import React from "react"
import { FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { GrSoundcloud } from "react-icons/gr"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>copyright&copy; Kurt Astro 2020</p>
        <div className="links">
          <a
            href="https://soundcloud.com/kurtastro"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-item is-size-4"
          >
            <GrSoundcloud />
          </a>
          <a
            href="https://instagram.com/kurtastro"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-item is-size-4"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/dylanccc93/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-item is-size-4"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
