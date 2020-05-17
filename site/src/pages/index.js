import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Navbar from "../components/Navbar"

import Layout from "../components/Layout"
import Section from "../components/Section"

const IndexPage = ({ data }) => (
  <Layout title="Home">
    <BackgroundImage
      className="hero is-fullheight is-primary"
      fluid={data.hero.childImageSharp.fluid}
      style={{
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hero-head hero-wrap">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className="hero-body hero-wrap">
        <div className="container">
          <div className="content has-text-centered">
            <h1 className="title is-size-1">Dylan Cole</h1>
            <h2 className="subtitle is-size-4">Game Audio Designer</h2>
          </div>
        </div>
      </div>
    </BackgroundImage>
    {data.sections.edges.map(({ node: section }) => (
      <Section
        key={section.id}
        title={section.title}
        fluid={
          section.backgroundImage ? section.backgroundImage.asset.fluid : null
        }
        url={section.media ? section.media.url : null}
        blocks={section._rawBody}
      />
    ))}
  </Layout>
)

export const data = graphql`
  query {
    hero: file(relativePath: { eq: "index-hero.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sections: allSanitySection {
      edges {
        node {
          id
          title
          backgroundImage {
            asset {
              fluid(maxWidth: 1440) {
                ...GatsbySanityImageFluid
              }
            }
          }
          media {
            url
          }
          _rawBody
        }
      }
    }
  }
`

export default IndexPage
