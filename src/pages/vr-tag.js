import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Map from "../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="全国のVRモデル事例集" />
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
          <h1>全国のVRモデル事例集</h1>
        </div>
        <div className="article__contents">
          <div className="container">
            <section className="article__section article__section01">
            <dl id="acMenu">
    <dt>『デザインテイストにこだわる』</dt>

    <dd>
    <a href="https://www.royal-house.co.jp/vr_taste/japanesestyle/">和風</a>
    <a href="https://www.royal-house.co.jp/vr_taste/japanesemodern/">和モダン</a>
    <a href="https://www.royal-house.co.jp/vr_taste/simple/">シンプル</a>
    <a href="https://www.royal-house.co.jp/vr_taste/naturel/">ナチュラル</a>
    <a href="https://www.royal-house.co.jp/vr_taste/cafe/">カフェ風</a>
    <a href="https://www.royal-house.co.jp/vr_taste/industrial/">インダストリアル</a>
    <a href="https://www.royal-house.co.jp/vr_taste/country/">カントリー</a>
    <a href="https://www.royal-house.co.jp/vr_taste/european/">ヨーロピアン</a>
    <a href="https://www.royal-house.co.jp/vr_taste/vintage/">ヴィンテージ</a>
    <a href="https://www.royal-house.co.jp/vr_taste/hotellike/">ホテルライク</a>    
    <a href="https://www.royal-house.co.jp/vr_taste/surfershouse/">サーファーズハウス</a>
    <a href="https://www.royal-house.co.jp/vr_taste/scandinavian/">北欧風</a>    
    <a href="https://www.royal-house.co.jp/vr_taste/resortstyle/">リゾート風</a>
    <a href="https://www.royal-house.co.jp/vr_taste/provencestyle/">南欧プロヴァンス風</a>
    </dd>
    <dt>『こだわりの空間』</dt>
    <dd>
    <a href="https://www.royal-house.co.jp/vr_space/veranda/">縁側</a>
    <a href="https://www.royal-house.co.jp/vr_space/courtyard/">中庭</a>
    <a href="https://www.royal-house.co.jp/vr_space/rooftop/">屋上</a>
    <a href="https://www.royal-house.co.jp/vr_space/openairbath/">露天風呂</a>
    <a href="https://www.royal-house.co.jp/vr_space/outdoorliving/">アウトドアリビング</a>
    <a href="https://www.royal-house.co.jp/vr_space/japaneseroom/">和室</a>
    <a href="https://www.royal-house.co.jp/vr_space/study/">書斎</a>
    <a href="https://www.royal-house.co.jp/vr_space/teleworkroom/">テレワークルーム</a>
    <a href="https://www.royal-house.co.jp/vr_space/tatami/">畳スペース</a>
    <a href="https://www.royal-house.co.jp/vr_space/loft/">ロフト</a>
    <a href="https://www.royal-house.co.jp/vr_space/dressingroom/">ドレッシングルーム</a>
    <a href="https://www.royal-house.co.jp/vr_space/studyroom/">スタディールーム</a>
    <a href="https://www.royal-house.co.jp/vr_space/atrium/">吹き抜け</a>
    <a href="https://www.royal-house.co.jp/vr_space/skipfloor/">スキップフロア</a>
    <a href="https://www.royal-house.co.jp/vr_space/domaspace/">土間空間</a>
    <a href="https://www.royal-house.co.jp/vr_space/sports/">遊び・アスレチック・スポーツスペース</a>
    </dd>
    <dt>『取り入れたい機能・設備』</dt>
    <dd>
    <a href="https://www.royal-house.co.jp/vr_spec/shoesin/">シューズインクローゼット</a>
    <a href="https://www.royal-house.co.jp/vr_spec/walkin/">ウォークインクローゼット</a>
    <a href="https://www.royal-house.co.jp/vr_spec/pantry/">パントリー</a>
    <a href="https://www.royal-house.co.jp/vr_spec/wallstorage/">壁面収納</a>
    <a href="https://www.royal-house.co.jp/vr_spec/stepstorage/">階段下収納</a>
    <a href="https://www.royal-house.co.jp/vr_spec/innergarage/">インナーガレージ</a>
    <a href="https://www.royal-house.co.jp/vr_spec/largeopening/">大開口</a>
    <a href="https://www.royal-house.co.jp/vr_spec/islandkitchen/">アイランドキッチン</a>
    <a href="https://www.royal-house.co.jp/vr_spec/openkitchen/">オープンキッチン</a>
    <a href="https://www.royal-house.co.jp/vr_spec/solarsystems/">太陽光発電システム</a>
    <a href="https://www.royal-house.co.jp/vr_spec/fireplace/">薪ストーブ・暖炉</a>
    <a href="https://www.royal-house.co.jp/vr_spec/housework/">家事室</a>
    <a href="https://www.royal-house.co.jp/vr_spec/hometheater/">ホームシアター</a>
    </dd>
    <dt>『ライフスタイル・趣味を楽しむ』</dt>
    <dd>
    <a href="https://www.royal-house.co.jp/movie_tag/kosodate/">子育てしやすい</a>
    <a href="https://www.royal-house.co.jp/movie_tag/tomobataraki/">共働きに配慮</a>
    <a href="https://www.royal-house.co.jp/movie_tag/sansedai/">三世代同居</a>
    <a href="https://www.royal-house.co.jp/movie_tag/tashi/">多子世帯対応</a>
    <a href="https://www.royal-house.co.jp/movie_tag/barrier_free/">バリアフリー</a>
    <a href="https://www.royal-house.co.jp/movie_tag/pet/">ペットと暮らす</a>
    <a href="https://www.royal-house.co.jp/movie_tag/rent_shop/">賃貸・店舗併用</a>
    <a href="https://www.royal-house.co.jp/movie_tag/fun_cooking/">料理を楽しむ</a>
    <a href="https://www.royal-house.co.jp/movie_tag/fun_movie/">映画を楽しむ</a>
    <a href="https://www.royal-house.co.jp/movie_tag/fun_music/">音楽を楽しむ</a>
    <a href="https://www.royal-house.co.jp/movie_tag/bbq/">BBQを楽しむ</a>
    <a href="https://www.royal-house.co.jp/movie_tag/surfin/">サーフィンを楽しむ</a>
    </dd>    
  </dl>
            </section>
          </div>
        </div>
      </div>
    </article>
 


    <Map />
  </Layout>
  

)

export default SecondPage
