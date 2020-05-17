import React from "react"
import Socials from "../components/Socials"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <Socials className="" />
          <p>copyright&copy; Kurt Astro 2020</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
