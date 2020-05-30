import React from "react"
import BackgroundImage from "gatsby-background-image"
import PortableText from "@sanity/block-content-to-react"
import ReactPlayer from "react-player"

const Section = ({ bgImage, url, title, body }) => {
  const ParagraphRenderer = props => {
    const { style = "normal" } = props.node
    if (style === "normal") {
      return <p className="is-family-monospace">{props.children}</p>
    }
    // Fall back to default handling
    return PortableText.defaultSerializers.types.block(props)
  }
  return bgImage ? (
    <BackgroundImage
      className="section"
      fluid={bgImage}
      style={{
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container has-text-white">
        {url ? (
          <div className="media">
            <ReactPlayer url={url} controls />
          </div>
        ) : null}
        <div className="content">
          <h2 className="title is-size-3 is-uppercase has-text-white">
            {title}
          </h2>
          <PortableText
            blocks={body}
            serializers={{ types: { block: ParagraphRenderer } }}
          />
        </div>
      </div>
    </BackgroundImage>
  ) : (
    <section class="section">
      <div class="container has-text-white">
        {url ? (
          <div className="media">
            <ReactPlayer url={url} controls />
          </div>
        ) : null}
        <div className="content">
          <h2 className="title is-size-3 is-uppercase has-text-white">
            {title}
          </h2>
          <PortableText
            blocks={body}
            serializers={{ types: { block: ParagraphRenderer } }}
          />
        </div>
      </div>
    </section>
  )
}

export default Section
