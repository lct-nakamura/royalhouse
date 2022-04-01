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
        <nav className="article-nav">
					<a onClick={() => window.history.back()} className="article__btn--back">
						<i><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="56" height="56" viewBox="0 0 24 24" strokeWidth="3" stroke="#1d945a" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg></i>
						<span><span>１つ前のページへ</span>戻る</span>
					</a>
					<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				</nav>
        <div className="article__title"><h1>木の味わいに満ちた癒しの住まい</h1></div>
        <div className="article__contents">
          <div className="container">
            <section className="menu__section">
              <div className="menu__list row">
                {/*<div className="col-12 col-md-6">
                  <Link to="/vr/27">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/wood/menu_img06.jpg")} alt="ウイルス対策万全！住まいのきれいをデザインした家「kicolo きれいシリーズ」" /></div>
                    <p className="menu__list__caption icon_triborder">ウイルス対策万全！<br />住まいのきれいをデザインした家<br />「kicolo きれいシリーズ」</p>
                  </Link>
                </div>*/}
                <div className="col-12 col-md-6">
                  <Link to="/vr/10">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/wood/menu_img01.jpg")} alt="kicoloスタイリッシュStyle" /></div>
                    <p className="menu__list__caption icon_triborder">kicolo<br />スタイリッシュStyle</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/11">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/wood/menu_img02.jpg")} alt="和モダンStyle" /></div>
                    <p className="menu__list__caption icon_triborder">kicolo<br />和モダンStyle</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/12">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/wood/menu_img03.jpg")} alt="テレワーク・新生活様式Style" /></div>
                    <p className="menu__list__caption icon_triborder">kicolo comfort<br />テレワーク・新生活様式Style</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/13">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/wood/menu_img04.jpg")} alt="平屋　スキップフロアつき" /></div>
                    <p className="menu__list__caption icon_triborder">kicolo<br />平屋　スキップフロアつき</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/14">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/wood/menu_img05.jpg")} alt="いごこちStyle" /></div>
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
