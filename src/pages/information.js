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
              <p className="text-center h3 mb-5">キャンペーン期間：2022年7月1日（金）～2022年9月30日（金）<br />今のニーズに合わせてセレクトした暮らしの質がアップする４つのお得なパッケージ♪</p>
              <ul className="info-bnr__list">
                <li><h2>キッチン快適パッケージ</h2></li>
                <li><div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/QPR3Cd7B-QU?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="キッチン快適パッケージ"></iframe></div><p>魅せる無垢材のデザインスタイルキッチン♪家族で楽しく、快適に家事をシェア</p></li>
                <li><h2>空気きれいパッケージ</h2></li>
                <li><div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/_e_cElTtLp4?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="空気きれいパッケージ"></iframe></div><p>ウイルスを意識しない暮らしが実現できる、全館空気清浄システムや抗ウイルスヒノキ床材</p></li>
                <li><h2>災害に備えるパッケージ</h2></li>
                <li><div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/RMP_z_MJWxM?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="災害に備えるパッケージ"></iframe></div><p>大きな揺れによる建物の倒壊から命を守る制振装置システムや断水が続いても安心な非常用貯水タンク</p></li>
                <li><h2>地球にやさしい創エネパッケージ</h2></li>
                <li><div className="fluid-movie"><iframe width="560" height="315" src="https://www.youtube.com/embed/jHmVF4wru2c?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="地球にやさしい創エネパッケージ"></iframe></div><p>太陽光パネルと蓄電池で普段の暮らしはもちろん、もしもの時の備えになる</p></li>
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
