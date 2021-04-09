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
        <nav className="article-nav">
					<a onClick={() => window.history.back()} className="article__btn--back">
						<i><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="56" height="56" viewBox="0 0 24 24" strokeWidth="3" stroke="#1d945a" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg></i>
						<span><span>１つ前のページへ</span>戻る</span>
					</a>
					<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				</nav>
        <div className="article__title"><h1>平屋の魅力</h1></div>
        <div className="article__contents">
          <div className="container">
            <section className="menu__section">
              <div className="menu__list row">
                <div className="col-12 col-md-6">
                  <Link to="/vr/21">
                    <div className="menu__list__image"><img src={withPrefix('/images/vr/groundone/menu_img01.jpg')} alt="平屋の家フラットスタイル" /></div>
                    <p className="menu__list__caption icon_triborder">グランドワン<br />平屋の家　フラットスタイル</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/22">
                    <div className="menu__list__image"><img src={withPrefix('/images/vr/groundone/menu_img02.jpg')} alt="平屋の家南欧スタイル" /></div>
                    <p className="menu__list__caption icon_triborder">グランドワン<br />平屋の家　南欧スタイル</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/23">
                    <div className="menu__list__image"><img src={withPrefix('/images/vr/groundone/menu_img03.jpg')} alt="平屋の家ふたり暮らしスタイル" /></div>
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
