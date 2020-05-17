import React from "react"
import BackgroundImage from "gatsby-background-image"
import PortableText from "@sanity/block-content-to-react"
import ReactPlayer from "react-player"

const Section = ({ url, title, body }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="media">
          <ReactPlayer url={url} controls />
        </div>
        <div className="content">
          <h2 className="title is-size-4">{title}</h2>
          <PortableText blocks={body} />
        </div>
      </div>
    </section>
  )
}

export default Section
