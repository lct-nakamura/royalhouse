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
              {/* <p className="text-center h3 mb-5">お役立ち情報をクリックで詳細をご覧いただけます。</p> */}
              <ul className="info-bnr__list">
                <li><h2>きれいシリーズ</h2></li>
                <li><video width="100%" playsInline poster={withPrefix("/images/video/video01.png")} controls><source src={withPrefix("/images/video/video01.mp4")} /></video><p>広げない、増やさない、持ち込まないをポイントにウイルス対策を意識したこれからの安心できる暮らしのパッケージをご紹介します。</p></li>
                <li><h2>楽してキレイDesiginパッケージ</h2></li>
                <li><video width="100%" playsInline poster={withPrefix("/images/video/video02.png")} controls><source src={withPrefix("/images/video/video02.mp4")} /></video><p>毎日使うものだからこそ手軽にお手入れができてきれいが長持ちしてほしい。暮らしやすくキレイが続く商品のパッケージをご紹介します。　　</p></li>
                <li><h2>触らずキレイDesiginパッケージ</h2></li>
                <li><video width="100%" playsInline poster={withPrefix("/images/video/video03.png")} controls><source src={withPrefix("/images/video/video03.mp4")} /></video><p>家の中に菌やウイルスを持ち込まないためにタッチレス商品や対面なしの宅配ボックスなど触れずに使用できる商品パッケージをご紹介します。</p></li>
                <li><h2>水からキレイDesignパッケージ</h2></li>
                <li><video width="100%" playsInline poster={withPrefix("/images/video/video05.png")} controls><source src={withPrefix("/images/video/video05.mp4")} /></video><p>キレイな水の力で暮らしをもっとキレイに。家中どこの水栓からでもきれいな水で安心安全に暮らせる商品のパッケージ</p></li>
                <li><h2>災害安心Designパッケージ</h2></li>
                <li><video width="100%" playsInline poster={withPrefix("/images/video/video04.png")} controls><source src={withPrefix("/images/video/video04.mp4")} /></video><p>もしもに備えて大切な家族を守るため太陽光を使った節約、災害、非常時にも安心できる商品パッケージをご紹介します。</p></li>
                {/* <li><a href="https://www.royal-house.co.jp/mlit-support/" target="_blank"><img src={withPrefix("/images/information/shiensaku.jpg")} alt="4つの支援策" /></a></li>
                <li><a href="https://www.sumitomoriko.co.jp/trc-damper-wh/" target="_blank"><img src={withPrefix("/images/information/trc.jpg")} alt="TRCダンパー" /></a></li>
                <li><a href="https://www.toyokitchen.co.jp/ja/collection/new/cube.htm" target="_blank"><img src={withPrefix("/images/information/cube.jpg")} alt="トーヨーキッチン「CUBE」" /></a></li>
                <li><a href="https://www.housedepot-p.co.jp/newslist.html" target="_blank"><img src={withPrefix("/images/information/flat35.jpg")} alt="フラット３５の金利" /></a></li>
                <li><a href="https://kdat.jp/products/interior/athletic/" target="_blank"><img src={withPrefix("/images/information/athletic.jpg")} alt="アスレチックシリーズ" /></a></li>
                <li><a href="https://i-feel-science.com/mirabath/" target="_blank"><img src={withPrefix("/images/information/mirabasu.jpg")} alt="ミラバス" /></a></li>
                <li><a href="https://www.aiphone.co.jp/products/detached/tv-doorphone/wp-24a/" target="_blank"><img src={withPrefix("/images/information/aiphone.jpg")} alt="スマートフォン連動テレビドアホン" /></a></li> */}
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
