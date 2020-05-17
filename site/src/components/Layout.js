import React from "react"
import SEO from "./SEO"
import Footer from "./Footer"

const Layout = ({ children, title, description }) => {
  return (
    <>
      <SEO title={title} description={description} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
