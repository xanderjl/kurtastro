import React, { useState, useRef, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaLinkedinIn } from "react-icons/fa"
import { GrSoundcloud } from "react-icons/gr"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-128.png" }) {
        id
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      resume: sanityResume {
        resume {
          asset {
            url
          }
        }
      }
    }
  `)
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">
          <Img fixed={data.logo.childImageSharp.fixed} />
        </Link>
        <a
          role="button"
          onClick={() => setOpen(!open)}
          className="navbar-burger"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div className={"navbar-menu " + (open ? "is-active" : null)}>
        <div className="navbar-end">
          <a
            href={data.resume.resume.asset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-item is-size-5"
          >
            Resume
          </a>
          <a
            href="mailto:dylan@kurtastro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-item is-size-5"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/dylanccc93/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-item is-size-5"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://soundcloud.com/kurtastro"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-item is-size-5"
          >
            <GrSoundcloud />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
