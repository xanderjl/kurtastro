import React from "react"
import Socials from "../components/Socials"

const Footer = () => {
  return (
    <footer className="footer has-text-white">
      <div className="container">
        <div className="content has-text-centered">
          <Socials iconClassName="footer-icon" />
          <p>Kurt Astro &copy;2020</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
