import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="収納、庭、ガレージ空間を上手に活用した家づくり" />
    <article className="l-article">
      <div className="article__container">
        <nav className="article-nav">
					<a onClick={() => window.history.back()} className="article__btn--back">
						<i><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="56" height="56" viewBox="0 0 24 24" strokeWidth="3" stroke="#1d945a" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg></i>
						<span><span>１つ前のページへ</span>戻る</span>
					</a>
					<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				</nav>
        <div className="article__title"><h1>収納、庭、ガレージ<br />空間を上手に活用した家づくり</h1></div>
        <div className="article__contents">
          <div className="container">
            <section className="menu__section">
              <div className="menu__list row">
                <div className="col-12 col-md-6">
                  <Link to="/vr/01">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/space/menu_img01.jpg")} alt="プラステージナチュラルモダンスタイル" /></div>
                    <p className="menu__list__caption icon_triborder">プラステージ<br />ナチュラルモダンスタイル</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/02">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/space/menu_img02.jpg")} alt="北欧モデルスタイル" /></div>
                    <p className="menu__list__caption icon_triborder">プラステージ<br />北欧モデルスタイル</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/03">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/space/menu_img03.jpg")} alt="アーバンステージ" /></div>
                    <p className="menu__list__caption icon_triborder">アーバンステージ</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/04">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/space/menu_img04.jpg")} alt="ビルトインガレージのある家" /></div>
                    <p className="menu__list__caption icon_triborder">ビルトインガレージのある家</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/24">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/space/menu_img07.jpg")} alt="プラスパティオStayHomeDesign" /></div>
                    <p className="menu__list__caption icon_triborder">プラスパティオ<br />StayHomeDesign</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/05">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/space/menu_img05.jpg")} alt="中庭のある家" /></div>
                    <p className="menu__list__caption icon_triborder">プラスパティオ<br />中庭のある家</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/06">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/space/menu_img06.jpg")} alt="空庭のある家" /></div>
                    <p className="menu__list__caption icon_triborder">プラスパティオ<br />空庭のある家</p>
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
