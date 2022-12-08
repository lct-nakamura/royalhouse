import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Map from "../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="おすすめ&トピックス" />
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
          <h1>おすすめ&トピックス</h1>
        </div>
        <div className="article__contents">
          <div className="container">
            <section className="article__section article__section01">
              <p className="text-center h3 mb-5">キャンペーン期間：2022年10月1日(土)～2022年12月31日(土)<br />選べるZEHとして期間限定の特別パッケージをご用意♪<br />暮らしに合わせて更なる快適な暮らしを実現しましょう！</p>
              <ul className="info-bnr__list">
                <li><h2>「癒しZEH」パッケージ</h2></li>
                <li><div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/IkdDqntBZiw?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="「癒しZEH」パッケージ「ミラバス」"></iframe></div><p>癒しZEHパッケージ「ミラバス」</p></li>
                <li><div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/gThsbwzRe1Q?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="癒しZEHパッケージ「ミラブルZERO」"></iframe></div><p>癒しZEHパッケージ「ミラブルZERO」</p></li>
                <li><h2>「あったかZEH」パッケージ</h2></li>
                <li><div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/dbhDPlO8W84?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="あったかZEHパッケージ「日東フローリング」"></iframe></div><p>あったかZEHパッケージ「日東フローリング」</p></li>
                <li><h2>「安心ZEH」パッケージ</h2></li>
                <li><div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/s7tICOGlB14?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="安心ZEHパッケージ「TRCダンパー」"></iframe></div><p>安心ZEHパッケージ「TRCダンパー」</p></li>
                <li><h2>「未来ZEH」パッケージ</h2></li>
                <li><div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/0audkx962Os?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="「未来ZEH」パッケージ"></iframe></div><p></p></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </article>
    <Map />
  </Layout>
)

export default SecondPage
