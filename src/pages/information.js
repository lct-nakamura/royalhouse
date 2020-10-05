import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Map from "../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="おしらせ・おすすめ商品" />
    <article className="l-article">
      <div className="article__container">
        <button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
        <div className="article__title">
          <h1>おしらせ・おすすめ商品</h1>
        </div>
        <div className="article__contents">
          <div className="container">
            <section className="article__section article__section01">
              <h2>おしらせ</h2>
              <ul className="post__list">
                  <li>
                      <a>
                          <article className="row">
                              <div className="col-sm-2"><time className="day" dateTime="2020-10-01">2020.10.01</time></div>
                              <div className="col-sm-10">
                                  <p className="post__title">バーチャルモデルハウスのホームページを公開しました。</p>
                              </div>
                          </article>
                      </a>
                  </li>
              </ul>
            </section>
            <section className="article__section article__section02">
              <h2>いまおすすめの住宅資材・<br className="show-sm hide-md" />設備チェック！</h2>
              <p>あなたの住まいづくりをもっと楽しく・もっと素敵に！<br />建具・収納・キッチン・バスルームなどオススメの住宅資材・設備をご紹介</p>
              <ul className="row information__list">
                <li className="col-6 col-md-4"><Link to="/recommend/05">フェリテUR</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/06">カナリエ</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/07">COCOSH</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/08">ユニバス（エスコート）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/09">ユニバス（楽浴楽座）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/10">テレワークデスク</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/11">無垢のキッチン</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/12">無垢の洗面化粧台</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/13">エアウォッシュフローリング <br className="d-none d-md-block" />ラスティック</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/14">格子スクリーン</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/15">ニッチ収納</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/16">キッチンカウンター収納</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/17">リビング収納</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/18">ハンギング収納（玄関）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/19">手洗いカウンター</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/20">ベリッシュCC</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/21">シストS-J</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/22">コイズミ照明 SA品番</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/23#SWD302KL">ドアホン VL-SWD302KL</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/23#SE30XL">ドアホン VL-SE30XL</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/24">TRCダンパー</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/25#JRS">JRS-1AE-T<br className=" d-none d-md-block" />（1対1ドアホン）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/25#24A">WP-24A<br className="d-none d-md-block" />（スマホ対応・宅配BOX連携）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/25#24B">WP-24B<br className="d-none d-md-block" />（スマホ対応・宅配BOX連携）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/26#210">門柱型2種 幅210</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/26#290"> 門柱型2種　幅290</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/26#貫通型">貫通型1種</Link></li>
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
