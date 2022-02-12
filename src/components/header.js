import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as HeaderStyle from '../styles/header.module.scss'
import Search from "./search"

const Header = ({ siteTitle }) => (
  <header className={HeaderStyle.header}>
    <div className={HeaderStyle.headerWrapper}>
      <div className={HeaderStyle.navbar}>
        <div className={HeaderStyle.navbarBrand}>
          <div className={HeaderStyle.navbarItem}>
            <Link to="/" className={HeaderStyle.navbarLink}>{ siteTitle }</Link>
          </div>
        </div>
        <div className={HeaderStyle.navbarMenu}>
          <div className={HeaderStyle.navbarItem}>
            <Link className={HeaderStyle.navbarLink} to="/">Home</Link>
          </div>
          <div className={HeaderStyle.navbarItem}>
            <Link className={HeaderStyle.navbarLink} to="/blogs">Blogs</Link>
          </div>
          <div className={HeaderStyle.navbarItem}>
            <Link className={HeaderStyle.navbarLink} to="/blogs_v2">Blogs V2</Link>
          </div>
          <div className={HeaderStyle.navbarItem}>
            <Link className={HeaderStyle.navbarLink} to="/contact">Contact</Link>
          </div>
        </div>
        <div className="">
          <Search />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
