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
              <h2>空間デザインパッケージ</h2>
              <p className="text-center h3 mb-5">これからの住空間にも馴染みやすいスタイルとしてシーンごとにデザイナーがパッケージ監修してご提案。</p>
              <p className="text-center h3 mb-5">期間：2023年7月1日(土)～2023年9月30日(土)</p>
              <ul className="info-bnr__list">
                <li><h3>中庭空間Designパッケージ</h3><p className="h3 mb-5">光の取込み、風の流れ、緑の演出により心地よい空間をデザイン</p></li>
                <li className="center"><img src={withPrefix("/images/information/cont3_d6_img.png")} alt="中庭空間Designパッケージ" /></li>
                <li><h3>リビングDesignパッケージ</h3><p className="h3 mb-5">家族が集う空間を多様な空間デザインに</p></li>
                <li className="center"><img src={withPrefix("/images/information/cont3_d1_img.png")} alt="リビングDesignパッケージ" /></li>
                <li><h3>家事を楽しむキッチンDesignパッケージ</h3><p className="h3 mb-5">家事楽動線をデザインした家族でワイワイにぎやかな空間に</p></li>
                <li className="center"><img src={withPrefix("/images/information/cont3_d2_img.png")} alt="家事を楽しむキッチンDesignパッケージ" /></li>
                <li><h3>土間スタイルDesignパッケージ</h3><p className="h3 mb-5">伝統的な空間を現代に活用。大収納だけでなく多様な空間にも</p></li>
                <li className="center"><img src={withPrefix("/images/information/cont3_d3_img.png")} alt="土間スタイルDesignパッケージ" /></li>
                <li><h3>癒しバスルームDesignパッケージ</h3><p className="h3 mb-5">外を活用して自遊に暮らす暮らしの幅が広がるデザイン</p></li>
                <li className="center"><img src={withPrefix("/images/information/cont3_d4_img.png")} alt="癒しバスルームDesignパッケージ" /></li>
                <li><h3>ホテルライクなベッドルームDesignパッケージ</h3><p className="h3 mb-5">外の喧騒を無くした庭付きのホテルライクな寝室を提案</p></li>
                <li className="center"><img src={withPrefix("/images/information/cont3_d5_img.png")} alt="リビングDesignパッケージ" /></li>
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
