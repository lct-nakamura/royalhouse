import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="平屋の魅力" />
    <article className="l-article">
    <div className="article__container">
          <button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
          <div className="article__title"><h1>平屋の魅力</h1></div>
          <div className="article__contents">
            <div className="container">
              <section className="menu__section">
                <div className="menu__list row">
                  <div className="col-12 col-md-6">
                    <Link to="/vr/21">
                      <div className="menu__list__image"><img src={withPrefix('/images/vr/groundone/menu_img01.jpg')} alt="" /></div>
                      <p className="menu__list__caption icon_triborder">グランドワン<br />平屋の家　フラットスタイル</p>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6">
                    <Link to="/vr/22">
                      <div className="menu__list__image"><img src={withPrefix('/images/vr/groundone/menu_img02.jpg')} alt="" /></div>
                      <p className="menu__list__caption icon_triborder">グランドワン<br />平屋の家　南欧スタイル</p>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6">
                    <Link to="/vr/23">
                      <div className="menu__list__image"><img src={withPrefix('/images/vr/groundone/menu_img03.jpg')} alt="" /></div>
                      <p className="menu__list__caption icon_triborder">グランドワン<br />平屋の家　ふたり暮らしスタイル</p>
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
