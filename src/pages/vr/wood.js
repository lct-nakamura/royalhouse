import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="木の味わいに満ちた癒しの住まい" />
    <article className="l-article">
      <div className="article__container">
        <button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
        <div className="article__title"><h1>木の味わいに満ちた癒しの住まい</h1></div>
        <div className="article__contents">
          <div className="container">
            <section className="menu__section">
              <div className="menu__list row">
                <div className="col-12 col-md-6">
                  <Link to="/vr/10">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/wood/menu_img01.jpg")} alt="" /></div>
                    <p className="menu__list__caption icon_triborder">kicolo<br />スタイリッシュStyle</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/11">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/wood/menu_img02.jpg")} alt="" /></div>
                    <p className="menu__list__caption icon_triborder">kicolo<br />和モダンStyle</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/12">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/wood/menu_img03.jpg")} alt="" /></div>
                    <p className="menu__list__caption icon_triborder">kicolo comfort<br />テレワーク・新生活様式Style</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/13">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/wood/menu_img04.jpg")} alt="" /></div>
                    <p className="menu__list__caption icon_triborder">kicolo<br />平屋　スキップフロアつき</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/14">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/wood/menu_img05.jpg")} alt="" /></div>
                    <p className="menu__list__caption icon_triborder">kicolo comfort<br />いごこちStyle</p>
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
