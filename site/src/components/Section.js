import React from "react"
import BackgroundImage from "gatsby-background-image"
import PortableText from "@sanity/block-content-to-react"
import ReactPlayer from "react-player"

const Section = ({ title, fluid, url, blocks }) => {
  return fluid ? (
    <BackgroundImage
      fluid={fluid}
      className="hero-section is-large is-dark"
      style={{
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hero-body hero-wrap">
        <div className="container">
          {url ? (
            <div className="media">
              <ReactPlayer url={url} controls={true} />
            </div>
          ) : null}
          <div className="content">
            <h2 className="title is-size-4">{title}</h2>
            <PortableText blocks={blocks} />
          </div>
        </div>
      </div>
    </BackgroundImage>
  ) : (
    <section className="hero-section is-large is-dark">
      <div className="hero-body hero-wrap">
        <div className="container">
          {url ? (
            <div className="media">
              <ReactPlayer url={url} controls={true} />
            </div>
          ) : null}
          <div className="content">
            <h2 className="title is-size-4">{title}</h2>
            <PortableText blocks={blocks} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
