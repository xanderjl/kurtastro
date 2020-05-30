import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import IndexHero from "../components/IndexHero"
import Section from "../components/Section"

const IndexPage = ({ data }) => (
  <Layout title="Home">
    <IndexHero />
    {data.allSanitySection.edges.map(({ node: section }) => (
      <Section
        key={section.id}
        bgImage={
          section.backgroundImage ? section.backgroundImage.asset.fluid : null
        }
        url={section.media ? section.media.url : null}
        title={section.title}
        body={section._rawBody}
      />
    ))}
  </Layout>
)

export const data = graphql`
  query {
    sanityHome {
      _rawMetaDescription
    }
    allSanitySection {
      edges {
        node {
          id
          title
          _rawBody
          media {
            url
          }
          backgroundImage {
            asset {
              fluid(maxWidth: 1440) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
