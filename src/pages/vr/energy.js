import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="エネルギーの自給自足を目指す次世代の住まい" />
    <article className="l-article">
    <div className="article__container">
          <button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
          <div className="article__title"><h1>エネルギーの自給自足を目指す<br />次世代の住まい</h1></div>
          <div className="article__contents">
            <div className="container">
              <section className="menu__section">
                <div className="menu__list row">
                  <div className="col-12 col-md-6">
                    <Link to="/vr/15">
                      <div className="menu__list__image"><img src={withPrefix("/images/vr/energy/menu_img01.jpg")} alt="" /></div>
                      <p className="menu__list__caption icon_triborder">e・co・de　smart　zero<br />ウッディスタイル</p>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6">
                    <Link to="/vr/16">
                      <div className="menu__list__image"><img src={withPrefix("/images/vr/energy/menu_img02.jpg")} alt="" /></div>
                      <p className="menu__list__caption icon_triborder"> e・co・de　smart　zero<br />２０２０モデル</p>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
    </article>
    <Map />
  </Layout>
)

export default SecondPage
