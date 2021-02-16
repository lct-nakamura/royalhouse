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
              <ul className="row information__list__blue">
                <li className="col-6 col-md-4"><Link to="/recommend/05">フェリテUR（システムバス）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/06">カナリエ（システムキッチン）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/07">COCOSH（洗面化粧台）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/08">ユニットバス エスコート</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/09">ユニットバス 楽浴楽座</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/11">無垢のキッチン（水回り）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/12">無垢の洗面化粧台（水回り）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/19">手洗いカウンター（水回り）</Link></li>
              </ul>
              <ul className="row information__list__red">
                {/* red */}
                <li className="col-6 col-md-4"><Link to="/recommend/10">テレワークデスク（設備）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/13">エアウォッシュフローリング<br />ラスティック（設備）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/14">格子スクリーン（設備）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/15">ニッチ収納 連絡ポスト（設備）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/16">キッチンカウンター収納（設備）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/17">リビング収納（設備）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/18">玄関のハンギング収納（設備）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/22">コイズミ照明SA品番（設備）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/23">インターホン・テレビドアホン（設備）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/24">TRCダンパー：在来軸組工法用制振システム（設備）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/25">テレビドアホン（設備）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/26">ポスト（設備）</Link></li>
              </ul>
              <ul className="row information__list__green">
                {/* green */}
                <li className="col-6 col-md-4"><Link to="/recommend/20">ベリッシュCC（建具）</Link></li>
                <li className="col-6 col-md-4"><Link to="/recommend/21">シストS-J（建具）</Link></li>
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
