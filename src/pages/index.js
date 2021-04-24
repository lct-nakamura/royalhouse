import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Map from "../components/map"

const IndexPage = () => (
  <Layout>
    <SEO title="トップ" />
    <Map />
    <div className="yt-modal" style={{display:'none'}}>
      <div className="ytWrap">
      <iframe width="" height="" src="https://www.youtube-nocookie.com/embed/6_QKw1mnPes?rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  </Layout>
)

export default IndexPage
