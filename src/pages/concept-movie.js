import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Map from "../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="コンセプトムービー" />
    <article className="l-article">
      <div className="article__container">
        <nav className="article-nav">
					<a onClick={() => window.history.back()} className="article__btn--back">
						<i><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="56" height="56" viewBox="0 0 24 24" strokeWidth="3" stroke="#1d945a" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg></i>
						<span><span>１つ前のページへ</span>戻る</span>
					</a>
					<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				</nav>
        <div className="article__title">
          <h1>コンセプトムービー</h1>
        </div>
        <div className="article__contents">
          <div className="container">
            <section className="article__section article__section01">
              <h2><span className="d-inline-block">COMUNI ZEH</span><span className="d-inline-block">コンセプトムービー</span></h2>
              <div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/vuoAU8Q7rsI?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="COMUNI ZEHのコンセプトムービー"></iframe></div>
              <Link to="https://www.royal-house.co.jp/campaign/" className="comuni__link" activeClassName="is-current">COMUNI ZEH<br />について詳しく見る</Link>
              <h2><span className="d-inline-block">COMUNI Oshare</span><span className="d-inline-block">コンセプトムービー</span></h2>
              <div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/wcBOOqplsFw?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="COMUNI OSHAREのコンセプトムービー"></iframe></div>
              <Link to="/comuni" className="comuni__link" activeClassName="is-current">COMUNI Oshareについて詳しく見る</Link>
            </section>
          </div>
        </div>
      </div>
    </article>

    <Map />
  </Layout>


)

export default SecondPage
