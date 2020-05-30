import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Navbar from "../components/Navbar"

const IndexHero = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityHome {
        heroImage {
          asset {
            fluid(maxWidth: 1440) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <BackgroundImage
        fluid={data.sanityHome.heroImage.asset.fluid}
        className="hero is-fullheight is-primary"
        style={{
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-header">
          <div className="container">
            <Navbar />
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="content has-text-centered">
              <h1 className="title hero-title is-size-1 is-uppercase">Dylan Cole</h1>
              <h2 className="subtitle is-size-4 is-size-5-mobile is-family-monospace">
                Game Audio Designer
              </h2>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </>
  )
}

export default IndexHero
