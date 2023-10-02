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
              <h2>選べる3つの暮らしパッケージ</h2>
              <p className="text-center h3 mb-5">これからの住空間にも馴染みやすいスタイルとしてシーンごとにデザイナーがパッケージ監修してご提案。</p>
              <p className="text-center h3 mb-5"><a href="https://www.royal-house.co.jp/campaign/">シン・平屋で賢く暮らそうキャンペーン</a></p>
              <p className="text-center h3 mb-5">期間：2023年10月1日(日)～2023年12月31日(日)</p>
              <ul className="info-bnr__list">
                <li><h3>１ながら美容パッケージ</h3></li>
                <li className="center"><img src={withPrefix("/images/information/livgrand_img01.jpg")} alt="１ながら美容パッケージ 毎日の習慣が健康と美容活動に！自宅が SPA空間に代わるアイテムと、浄活水で家中の水がミネラルウォーターの様になるアイテム。 / ➀微細な泡で体中キレイに 「ミラバス」 / ②シャワーヘッド型美顔器 「ミラブル ZERO」 / ③家中キレイな水を提供 「美fine ウォーター」" /></li>
                <li><h3>2家事楽パッケージ</h3></li>
                <li className="center"><img src={withPrefix("/images/information/livgrand_img02.jpg")} alt="2家事業パッケージ 時短・手間楽・キレイつづくアイテム!デザイン性が高く、高性能な設備を厳選。家を楽にストレスなく家事ができるアイテム。 / ➀自動洗浄で快適浴槽 「AX」 / ②家族で使えるキッチン「ES」 「ノクト」 / ③掃除も収納も楽ちん! 洗面化粧台 「EV」 / ④ トイレ空間がすっきり 「ペーシアハーモノ」" /></li>
                <li><h3>3自然素材パッケージ</h3>{/* <p className="h3 mb-5">家事楽動線をデザインした家族でワイワイにぎやかな空間に</p> */}</li>
                <li className="center"><img src={withPrefix("/images/information/livgrand_img03.jpg")} alt="3自然素材パッケージ 本物の素材感と快適さにこだわる無垢の木や塗り壁など素材にこだわる上質な空間へ空間をすてきに、自分らしさも演出できる素材アイテム。 / ➀ 無垢面材のキッチン 「スイージー」 / ②調温や消臭機能で空間はいつも快適 「高千穂シラス壁」 / ③空気を洗う無垢床材「AirWashFlooring」" /></li>
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
