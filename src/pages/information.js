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
              <p className="text-center h3 mb-5">今のニーズに合った期間限定パッケージをご提案<br />ワクワク楽しみながら家づくり♪</p>
              <p className="text-center h3 mb-5">期間：2023年1月1日(日)～2023年3月31日(金)</p>
              <ul className="info-bnr__list">
                <li><h2>1.わくわくパッケージ<br />（ミラバス・ミラブルZERO）</h2></li>
                <li><div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/Agar9zDY2TE?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="1.わくわくパッケージ（ミラバス・ミラブルZERO）"></iframe></div><p>1.わくわくパッケージ（ミラバス・ミラブルZERO）</p></li>
                <li><h2>2.わくわくパッケージ<br />（桧無垢床材　エアーウォッシュフローリング）</h2></li>
                <li><div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/a6BFzFtYRYk?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="2.わくわくパッケージ（桧無垢床材　エアーウォッシュフローリング）"></iframe></div><p>2.わくわくパッケージ（桧無垢床材　エアーウォッシュフローリング）</p></li>
                <li><h2>3.わくわくパッケージ<br />（電気自動車充電器 ELSEEV）</h2></li>
                <li><div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/UgsJ2Hd7Zk0?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="3.わくわくパッケージ（電気自動車充電器 ELSEEV）"></iframe></div><p>3.わくわくパッケージ（電気自動車充電器 ELSEEV）</p></li>
                <li><h2>4.わくわくパッケージ<br />（快適キッチンES）</h2></li>
                <li><div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/1mp2e0Nj3Ac?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="4.わくわくパッケージ（快適キッチンES）"></iframe></div><p>4.わくわくパッケージ（快適キッチンES）</p></li>
                <li><h2>5.わくわくパッケージ<br />（太陽光発電システム・AiSEG2）</h2></li>
                <li><div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/KNo5IpD1FI8?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="5.わくわくパッケージ（太陽光発電システム・AiSEG2）"></iframe></div><p>5.わくわくパッケージ（太陽光発電システム・AiSEG2）</p></li>
                <li><h2>6.わくわくパッケージ（制震装置 TRCダンパー）</h2></li>
                <li><div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/JVRAkGntP7g?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="6.わくわくパッケージ（制震装置 TRCダンパー）"></iframe></div><p>6.わくわくパッケージ（制震装置 TRCダンパー）</p></li>
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
