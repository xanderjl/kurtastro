import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import IndexHero from "../components/IndexHero"

const IndexPage = ({ data }) => (
  <Layout title="Home">
    <IndexHero />
  </Layout>
)

export const data = graphql`
  query {
    sanityHome {
      _rawMetaDescription
    }
  }
`

export default IndexPage
