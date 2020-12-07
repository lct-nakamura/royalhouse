import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="子育て夫婦が楽しく暮らせる家づくり" />
    <article className="l-article">
    <div className="article__container">
          <button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
          <div className="article__title"><h1>子育て夫婦が楽しく暮らせる家づくり</h1></div>
          <div className="article__contents">
            <div className="container">
              <section className="menu__section">
                <div className="menu__list row">
                  <div className="col-12 col-md-6">
                    <Link to="/vr/17">
                      <div className="menu__list__image"><img src={withPrefix("/images/vr/family/menu_img01.jpg")} alt="子育て中もキレイに暮らせる家「COMUNI美ファイン」" /></div>
                      <p className="menu__list__caption icon_triborder">子育て中もキレイに暮らせる家<br />「COMUNI美ファイン」</p>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6">
                    <Link to="/vr/18">
                      <div className="menu__list__image"><img src={withPrefix("/images/vr/family/menu_img02.jpg")} alt="子供の成長を見守る家「COMUNI GROW」" /></div>
                      <p className="menu__list__caption icon_triborder">子供の成長を見守る家<br />「COMUNI GROW」</p>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6">
                    <Link to="/vr/19">
                      <div className="menu__list__image"><img src={withPrefix("/images/vr/family/menu_img03.jpg")} alt="子育て夫婦が楽しく暮らす家「COMUNI」" /></div>
                      <p className="menu__list__caption icon_triborder">子育て夫婦が楽しく暮らす家<br />「COMUNI」</p>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6">
                    <Link to="/vr/20">
                      <div className="menu__list__image"><img src={withPrefix("/images/vr/family/menu_img04.jpg")} alt="子育て夫婦が楽しく暮らす家「COMUNI」二世帯" /></div>
                      <p className="menu__list__caption icon_triborder">子育て夫婦が楽しく暮らす家<br />「COMUNI」二世帯</p>
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
