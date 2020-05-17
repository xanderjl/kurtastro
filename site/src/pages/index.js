import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import IndexHero from "../components/IndexHero"
import Section from "../components/Section"

const IndexPage = ({ data }) => (
  <Layout title="Home">
    <IndexHero />
    {data.allSanitySection.edges.map(({node: section}) => (
      <Section url={section.media.url} title={section.title} body={section._rawBody} />
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
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
