import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Map from "../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="Life Block 2019年度グッドデザイン賞受賞作品" />
    <article className="l-article">
      <div className="article__container">
        <button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
        <div className="article__title">
          <h1>自分たちで、創り・育て・変えられる家。「Life Block」<br /><span className="small">2019年度グッドデザイン賞受賞作品</span></h1>
        </div>
        <div className="article__icon"><img src={withPrefix("/images/lifeblock/icon.png")} /></div>
        <div className="article__contents">
          <div className="container">
            <div className="article__mv mt-2">
              <img src={withPrefix("/images/lifeblock/mv.jpg")} alt="イメージ：マターポート" />
            </div>
            <section className="article__section article__section01">
              <p>3ｍ×3ｍの木空間ブロックは、オフィス、カフェ、シェアハウスなど多彩な空間用途に対応。<br /> まるでブロック遊びの様に創造を膨らませながら、子どもから大人まで家族全員参加でつくる家づくり。 </p>
              <p>自分のブロックを選び、家族みんなのブロックをつなぐことで、一人の居場所をつくる。<br />みんなの居場所をつくる。</p>
            </section>
            <section className="article__section article__section03">
              <div className="row">
                <div className="col-6 mb-5"><img src={withPrefix("/images/lifeblock/sec03_img01.jpg")} alt="外観" /></div>
                <div className="col-6 mb-5"><img src={withPrefix("/images/lifeblock/sec03_img02.jpg")} alt="外観" /></div>
                <div className="col-6 mb-5"><img src={withPrefix("/images/lifeblock/sec03_img03.jpg")} alt="外観" /></div>
                <div className="col-6 mb-5"><img src={withPrefix("/images/lifeblock/sec03_img04.jpg")} alt="外観" /></div>
                <div className="col-4 mb-5"><img src={withPrefix("/images/lifeblock/sec03_img05.jpg")} alt="外観" /></div>
                <div className="col-4 mb-5"><img src={withPrefix("/images/lifeblock/sec03_img06.jpg")} alt="外観" /></div>
                <div className="col-4 mb-5"><img src={withPrefix("/images/lifeblock/sec03_img07.jpg")} alt="外観" /></div>
              </div>
              <h3>VR見学</h3>
              <a href="https://my.matterport.com/show/?m=YxZJP2ioLVk&play=1&lang=jp&st=3000&ts=1" target="_blank" className="bnr_lifeblock_vr">
                <div className="row">
                  <div className="col-sm-4">
                    <img src={withPrefix("/images/lifeblock/gd_royal_sss.png")} alt="GOOD DESIGN ロイヤルSSS構法で建てる家" />
                  </div>
                  <div className="col-sm-8">
                    <p>展示場にいるかのようなリアルな体験！<br />住まいの内観や外観を見ることができます。</p>
                    <span className="button">VRで体験する</span>
                  </div>
                </div>
              </a>
            </section>
          </div>
        </div>
      </div>
    </article>
    <Map />
  </Layout>
)

export default SecondPage
