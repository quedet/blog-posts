import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="app">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main className="app-content">{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          {data.site.siteMetadata?.title} 
          {' '}
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
