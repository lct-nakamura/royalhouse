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
              <h2>選べるお得な暮らしパック</h2>
              <p className="text-center h3 mb-5">これからの住空間にも馴染みやすいスタイルとしてシーンごとにデザイナーがパッケージ監修してご提案。</p>
              <p className="text-center h3 mb-5"><a href="https://www.royal-house.co.jp/campaign/">新感覚の注文住宅誕生キャンペーン</a></p>
              <p className="text-center h3 mb-5">期間：2024年7月1日（月）～2024年9月29日（日）</p>
              <ul className="info-bnr__list">
                <li><h3>1 水からキレイパッケージ</h3></li>
                <li className="center"><img src={withPrefix("/images/information/pack_img01.jpg")} alt="選べるお得な暮らしパック 水からキレイパッケージ　健康・美谷パッケージ。毎日、水と美容にこだわるサイエンスの人気3点セット　ミラブルゼロ / 美-fine-ウォーター / ミラバス" /></li>
                <li><h3>2 バルコニー充実パッケージ</h3></li>
                <li className="center"><img src={withPrefix("/images/information/pack_img02.jpg")} alt="選べるお得な暮らしパック こだわり収納パッケージ　こだわりの収納パッケージ。空問活用収納で収納カアップ。有効スペースを立体的に活用。　ワークスペース / 本棚 / ウォークインクローゼット" /></li>
                <li><h3>3 安心安全パッケージ</h3>{/* <p className="h3 mb-5">家事楽動線をデザインした家族でワイワイにぎやかな空間に</p> */}</li>
                <li className="center"><img src={withPrefix("/images/information/pack_img03.jpg")} alt="選べるお得な暮らしパック 安心・安全パッケージ　宅配新時代に向けて、玄関周りのセキュリティー強化。ちょっとしたプラスの設備で安心安全は大幅アップ　宅配ボックス / 防犯カメラ付きインターホン（スマホ操作対応・録画機能付き）" /></li>
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
