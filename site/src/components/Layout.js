/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "./SEO"
import Footer from "./Footer"

const Layout = ({ title, description, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      sanityHome {
        _rawMetaDescription
      }
    }
  `)

  function toPlainText(blocks = []) {
    return blocks
      .map(block => {
        if (block._type !== "block" || !block.children) {
          return ""
        }
        return block.children.map(child => child.text).join("")
      })
      .join("\n\n")
  }

  return (
    <>
      <SEO
        title={title}
        description={toPlainText(data.sanityHome._rawMetaDescription)}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
