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
  </Layout>
)

export default IndexPage
