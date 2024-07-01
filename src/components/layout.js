/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="l-main">{children}</main>
       <div className="campaign-bnr">
       <Link to="https://www.royal-house.co.jp/campaign/" target="_blank" className="map-balloon__link" activeClassName="is-current"><img src={withPrefix("/images/bnr_cp_2024summer.png")} alt="新感覚の注文住宅誕生キャンペーン キャンペーン期間 7/1〜9/29" className="pc" /><img src={withPrefix("/images/bnr_cp_2024summer-sp.png")} alt="新感覚の注文住宅誕生キャンペーン キャンペーン期間 7/1〜9/29" className="sp" /></Link>
  </div>
      
      <div className="yt-modal--main" style={{display:'none'}}>
        <div className="ytWrap">
        <iframe width="" height="" src="https://www.youtube.com/embed/AyBYKr1MFcA?rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>   
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
