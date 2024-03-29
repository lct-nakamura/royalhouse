import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Map from "../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="グッドデザイン賞作品" />
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
          <h1>グッドデザイン賞作品</h1>
        </div>
        {/* <div className="article__icon"><img src={withPrefix("/images/art/icon.png")} /></div> */}
        <div className="article__contents">
          <div className="container">
            <section className="article__section article__section01">
              <h2>グッドデザイン賞受賞作品</h2>
              <div className="text-center mb-3"><img src={withPrefix("/images/art/gd_royal_sss.png")} className="gd_royal_sss" alt="グッドデザインロイヤルSSS構法" /></div>
              <p>グッドデザイン受賞商品には、これから家づくりのアイデアがたくさん盛り込まれています。<br />是非、自由設計を考える際のヒントとしても、ご活用ください。</p>
            </section>
            <section className="article__section article__section02">

              <p className="text-center">写真をクリックすると動画でご紹介！</p>
              <div id="modal-container" className="row">

                <figure className="col-6">
                  <div className="video-modal-trigger"><img src={withPrefix("/images/art/sec02_img11_main.png")} /></div>
                  <figcaption>【FamigliaDomani】<br /><span className="text-xsmall">家の中の外空間<br className="show-xs-only hide-md" />～明日の我が家～</span></figcaption>
                  <div className="video-modal-content" style={{ display: 'none' }}>
                    <div className="videoWrap">
                      <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video11.mp4")} /></video>
                    </div>
                  </div>
                </figure>

                <figure className="col-6">
                  <div class="video-modal-trigger"><img src={withPrefix("/images/art/sec02_img12_main.png")} /></div>
                  <figcaption>【現代の曲がり屋】<br /><span className="text-xsmall">集う・遊ぶ・憩う・働く場をデザイン。</span></figcaption>
                  <div className="video-modal-content" style={{ display: 'none' }}>
                    <div className="videoWrap">
                      <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video12.mp4")} /></video>
                    </div>
                  </div>
                </figure>

                <figure className="col-6">
                  <div class="video-modal-trigger"><img src={withPrefix("/images/art/sec02_img01_main.png")} /></div>
                  <figcaption>【Life Block】<br /><span className="text-xsmall">家族参加でつくる<br className="show-xs-only hide-md" />新発想の家づくり</span></figcaption>
                  <div className="video-modal-content" style={{ display: 'none' }}>
                    <div className="videoWrap">
                      <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video01.mp4")} /></video>
                    </div>
                  </div>
                </figure>

                <figure className="col-6">
                  <div class="video-modal-trigger"><img src={withPrefix("/images/art/sec02_img13_main.png")} /></div>
                  <figcaption>【プラスS構法】<br /><span className="text-xsmall">こだわりの大空間設計が実現する、<br className="pc" />革新的なトラス構造の家です。</span></figcaption>
                  <div className="video-modal-content" style={{ display: 'none' }}>
                    <div className="videoWrap">
                      <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video13.mp4")} /></video>
                    </div>
                  </div>
                </figure>

                <figure className="col-6">
                  <div class="video-modal-trigger"><img src={withPrefix("/images/art/sec02_img02_main.png")} /></div>
                  <figcaption>【育つ家】<br /><span className="text-xsmall">平屋から、<br className="show-xs-only hide-md" />みんなで育てる家</span></figcaption>
                  <div className="video-modal-content" style={{ display: 'none' }}>
                    <div className="videoWrap">
                      <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video02.mp4")} /></video>
                    </div>
                  </div>
                </figure>

                <figure className="col-6">
                  <div class="video-modal-trigger"><img src={withPrefix("/images/art/sec02_img03_main.png")} /></div>
                  <figcaption>【ピロティの家】<br /><span className="text-xsmall">家の内外を曖昧に<br className="show-xs-only hide-md" />つなぐ、ピロティの<br className="show-xs-only hide-md" />新たな価値</span></figcaption>
                  <div className="video-modal-content" style={{ display: 'none' }}>
                    <div className="videoWrap">
                      <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video03.mp4")} /></video>
                    </div>
                  </div>
                </figure>

                <figure className="col-6">
                  <div class="video-modal-trigger"><img src={withPrefix("/images/art/sec02_img04_main.png")} /></div>
                  <figcaption>【門のある家】<br /><span className="text-xsmall">地域との距離感を選択<br className="show-xs-only hide-md" />できるデザインと<br className="show-xs-only hide-md" />暮らし</span><br /></figcaption>
                  <div className="video-modal-content" style={{ display: 'none' }}>
                    <div className="videoWrap">
                      <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video04.mp4")} /></video>
                    </div>
                  </div>
                </figure>

                <figure className="col-6">
                  <div class="video-modal-trigger"><img src={withPrefix("/images/art/sec02_img05_main.png")} /></div>
                  <figcaption>【積み木の家】<br /><span className="text-xsmall">つくっては変えられる<br className="show-xs-only hide-md" />発想を縛られない<br className="show-xs-only hide-md" />無柱空間</span></figcaption>
                  <div className="video-modal-content" style={{ display: 'none' }}>
                    <div className="videoWrap">
                      <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video05.mp4")} /></video>
                    </div>
                  </div>
                </figure>

                <figure className="col-6">
                  <div class="video-modal-trigger"><img src={withPrefix("/images/art/sec02_img06_main.png")} /></div>
                  <figcaption>【軒の家】<br /><span className="text-xsmall">ダイナミックな吹抜け<br className="show-xs-only hide-md" />半戸外空間を持つ<br className="show-xs-only hide-md" />暮らし</span></figcaption>
                  <div className="video-modal-content" style={{ display: 'none' }}>
                    <div className="videoWrap">
                      <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video06.mp4")} /></video>
                    </div>
                  </div>
                </figure>

                <figure className="col-6">
                  <div class="video-modal-trigger"><img src={withPrefix("/images/art/sec02_img07_main.png")} /></div>
                  <figcaption>【大開口の家】<br /><span className="text-xsmall">これからの省エネ基準を解決する新発想の<br className="show-xs-only hide-md" />家づくり</span></figcaption>
                  <div className="video-modal-content" style={{ display: 'none' }}>
                    <div className="videoWrap">
                      <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video07.mp4")} /></video>
                    </div>
                  </div>
                </figure>

                <figure className="col-6">
                  <div class="video-modal-trigger"><img src={withPrefix("/images/art/sec02_img14_main.png")} /></div>
                  <figcaption>【Village】<br /><span className="text-xsmall">ひとり暮らし・ふたり暮らしの小さな村</span></figcaption>
                  <div className="video-modal-content" style={{ display: 'none' }}>
                    <div className="videoWrap">
                      <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video14.mp4")} /></video>
                    </div>
                  </div>
                </figure>

                <figure className="col-6">
                  <div class="video-modal-trigger"><img src={withPrefix("/images/art/sec02_img09_main.png")} /></div>
                  <figcaption>【骨の見える家】<br /><span className="text-xsmall">中古流通時代における<br className="show-xs-only hide-md" />価値ある新築住宅<br className="show-xs-only hide-md" />システム</span></figcaption>
                  <div className="video-modal-content" style={{ display: 'none' }}>
                    <div className="videoWrap">
                      <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video09.mp4")} /></video>
                    </div>
                  </div>
                </figure>

                <figure className="col-6">
                  <div class="video-modal-trigger"><img src={withPrefix("/images/art/sec02_img15_main.png")} /></div>
                  <figcaption>【SSS構法】<br /><span className="text-xsmall">木のポテンシャルを活かす高耐震長寿命の家</span></figcaption>
                  <div className="video-modal-content" style={{ display: 'none' }}>
                    <div className="videoWrap">
                      <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video15.mp4")} /></video>
                    </div>
                  </div>
                </figure>

                <figure className="col-6">
                  <div class="video-modal-trigger"><img src={withPrefix("/images/art/sec02_img10_main.png")} /></div>
                  <figcaption>【外暮らしの家】<br /><span className="text-xsmall">小さく建てて、<br className="show-xs-only hide-md" />大きく暮らす家</span></figcaption>
                  <div className="video-modal-content" style={{ display: 'none' }}>
                    <div className="videoWrap">
                      <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video10.mp4")} /></video>
                    </div>
                  </div>
                </figure>

              </div>
            </section>
            <section className="article__section article__section03">
          <h2>自分たちで、創り・育て・変えられる家。「Life Block」<br /><span className="small">2019年度グッドデザイン賞受賞作品</span></h2>
          <div className="article__icon"><img src={withPrefix("/images/lifeblock/icon.png")} /></div>
        <div className="article__contents">
          <div className="container">
            <div className="article__mv mt-2">
              <img src={withPrefix("/images/lifeblock/mv.jpg")} alt="イメージ：マターポート" />
            </div>
            <section className="article__section article__section04">
              <p>3ｍ×3ｍの木空間ブロックは、オフィス、カフェ、シェアハウスなど多彩な空間用途に対応。<br /> まるでブロック遊びの様に創造を膨らませながら、子どもから大人まで家族全員参加でつくる家づくり。 </p>
              <p>自分のブロックを選び、家族みんなのブロックをつなぐことで、一人の居場所をつくる。<br />みんなの居場所をつくる。</p>
            </section>
            <section className="article__section article__section05">
              {/* <div className="row">
                <div className="col-6 mb-5"><img src={withPrefix("/images/lifeblock/sec03_img01.jpg")} alt="外観" /></div>
                <div className="col-6 mb-5"><img src={withPrefix("/images/lifeblock/sec03_img02.jpg")} alt="外観" /></div>
                <div className="col-6 mb-5"><img src={withPrefix("/images/lifeblock/sec03_img03.jpg")} alt="外観" /></div>
                <div className="col-6 mb-5"><img src={withPrefix("/images/lifeblock/sec03_img04.jpg")} alt="外観" /></div>
                <div className="col-4 mb-5"><img src={withPrefix("/images/lifeblock/sec03_img05.jpg")} alt="外観" /></div>
                <div className="col-4 mb-5"><img src={withPrefix("/images/lifeblock/sec03_img06.jpg")} alt="外観" /></div>
                <div className="col-4 mb-5"><img src={withPrefix("/images/lifeblock/sec03_img07.jpg")} alt="外観" /></div>
              </div> */}
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
        </section>


          </div>
        </div>
      </div>
    </article>
    <div className="modal fade modal_slideshow" id="videoModal11" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide11" className="carousel slide">
              {/*<ol className="carousel-indicators">
                <li data-target="#slide11" data-slide-to="0" className="active">
                  <img src={withPrefix("/images/art/sec02_img11_main.png")} />
                </li>
                <li data-target="#slide11" data-slide-to="1">
                  <img src={withPrefix("/images/art/sec02_img11_01.png")} />
                </li>
                <li data-target="#slide11" data-slide-to="2">
                  <img src={withPrefix("/images/art/sec02_img11_02.png")} />
                </li>
                <li data-target="#slide11" data-slide-to="3">
                  <img src={withPrefix("/images/art/sec02_img11_03.png")} />
                </li>
                <li data-target="#slide11" data-slide-to="4">
                  <img src={withPrefix("/images/art/sec02_img11_04.png")} />
                </li>
                <li data-target="#slide11" data-slide-to="5">
                  <img src={withPrefix("/images/art/sec02_img11_05.png")} />
                </li>
                <li data-target="#slide11" data-slide-to="6">
                  <img src={withPrefix("/images/art/sec02_img11_06.png")} />
                </li>
              </ol>*/}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video11.mp4")} /></video>
                </div>
                {/*<div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img11_01.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img11_02.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img11_03.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img11_04.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img11_05.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img11_06.png")} />
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="videoModal12" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide12" className="carousel slide">
              {/*<ol className="carousel-indicators">
                <li data-target="#slide12" data-slide-to="0" className="active">
                  <img src={withPrefix("/images/art/sec02_img12_main.png")} />
                </li>
                <li data-target="#slide12" data-slide-to="1">
                  <img src={withPrefix("/images/art/sec02_img12_01.png")} />
                </li>
                <li data-target="#slide12" data-slide-to="2">
                  <img src={withPrefix("/images/art/sec02_img12_02.png")} />
                </li>
                <li data-target="#slide12" data-slide-to="3">
                  <img src={withPrefix("/images/art/sec02_img12_03.png")} />
                </li>
                <li data-target="#slide12" data-slide-to="4">
                  <img src={withPrefix("/images/art/sec02_img12_04.png")} />
                </li>
                <li data-target="#slide12" data-slide-to="5">
                  <img src={withPrefix("/images/art/sec02_img12_05.png")} />
                </li>
                <li data-target="#slide12" data-slide-to="6">
                  <img src={withPrefix("/images/art/sec02_img12_06.png")} />
                </li>
              </ol>*/}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video12.mp4")} /></video>
                </div>
                {/*<div className="carousel-item active">
                  <img src={withPrefix("/images/art/sec02_img12_main.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img12_01.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img12_02.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img12_03.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img12_04.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img12_05.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img12_06.png")} />
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="videoModal01" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide01" className="carousel slide">
              {/*<ol className="carousel-indicators">
                <li data-target="#slide01" data-slide-to="0" className="active">
                  <img src={withPrefix("/images/art/sec02_img01_main.png")} />
                </li>
                <li data-target="#slide01" data-slide-to="1">
                  <img src={withPrefix("/images/art/sec02_img01_01.png")} />
                </li>
                <li data-target="#slide01" data-slide-to="2">
                  <img src={withPrefix("/images/art/sec02_img01_02.png")} />
                </li>
                <li data-target="#slide01" data-slide-to="3">
                  <img src={withPrefix("/images/art/sec02_img01_03.png")} />
                </li>
                <li data-target="#slide01" data-slide-to="4">
                  <img src={withPrefix("/images/art/sec02_img01_04.png")} />
                </li>
                <li data-target="#slide01" data-slide-to="5">
                  <img src={withPrefix("/images/art/sec02_img01_05.png")} />
                </li>
                <li data-target="#slide01" data-slide-to="6">
                  <img src={withPrefix("/images/art/sec02_img01_06.png")} />
                </li>
              </ol>*/}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video01.mp4")} /></video>
                </div>
                {/*<div className="carousel-item active">
                  <img src={withPrefix("/images/art/sec02_img01_main.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img01_01.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img01_02.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img01_03.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img01_04.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img01_05.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img01_06.png")} />
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="videoModal13" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide13" className="carousel slide">
              {/*<ol className="carousel-indicators">
                <li data-target="#slide13" data-slide-to="0" className="active">
                  <img src={withPrefix("/images/art/sec02_img13_main.png")} />
                </li>
                <li data-target="#slide13" data-slide-to="1">
                  <img src={withPrefix("/images/art/sec02_img13_01.png")} />
                </li>
                <li data-target="#slide13" data-slide-to="2">
                  <img src={withPrefix("/images/art/sec02_img13_02.png")} />
                </li>
                <li data-target="#slide13" data-slide-to="3">
                  <img src={withPrefix("/images/art/sec02_img13_03.png")} />
                </li>
                <li data-target="#slide13" data-slide-to="4">
                  <img src={withPrefix("/images/art/sec02_img13_04.png")} />
                </li>
                <li data-target="#slide13" data-slide-to="5">
                  <img src={withPrefix("/images/art/sec02_img13_05.png")} />
                </li>
              </ol>*/}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video13.mp4")} /></video>
                </div>
                {/*<div className="carousel-item active">
                  <img src={withPrefix("/images/art/sec02_img13_main.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img13_01.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img13_02.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img13_03.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img13_04.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img13_05.png")} />
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="videoModal02" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide02" className="carousel slide">
              {/*<ol className="carousel-indicators">
                <li data-target="#slide02" data-slide-to="0" className="active">
                  <img src={withPrefix("/images/art/sec02_img02_main.png")} />
                </li>
                <li data-target="#slide02" data-slide-to="1">
                  <img src={withPrefix("/images/art/sec02_img02_01.png")} />
                </li>
                <li data-target="#slide02" data-slide-to="2">
                  <img src={withPrefix("/images/art/sec02_img02_02.png")} />
                </li>
                <li data-target="#slide02" data-slide-to="3">
                  <img src={withPrefix("/images/art/sec02_img02_03.png")} />
                </li>

              </ol>*/}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video02.mp4")} /></video>
                </div>
                {/*<div className="carousel-item active">
                  <img src={withPrefix("/images/art/sec02_img02_main.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img02_01.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img02_02.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img02_03.png")} />
                </div>*/}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="videoModal03" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide03" className="carousel slide">
              {/*<ol className="carousel-indicators">
                <li data-target="#slide03" data-slide-to="0" className="active">
                  <img src={withPrefix("/images/art/sec02_img03_main.png")} />
                </li>
                <li data-target="#slide03" data-slide-to="1">
                  <img src={withPrefix("/images/art/sec02_img03_01.png")} />
                </li>
                <li data-target="#slide03" data-slide-to="2">
                  <img src={withPrefix("/images/art/sec02_img03_02.png")} />
                </li>
                {/* <li data-target="#slide03" data-slide-to="3">
                  <img src={withPrefix("/images/art/sec02_img03_03.png")} />
                </li>
                <li data-target="#slide03" data-slide-to="4">
                  <img src={withPrefix("/images/art/sec02_img03_04.png")} />
                </li> */}{/*
                <li data-target="#slide03" data-slide-to="5">
                  <img src={withPrefix("/images/art/sec02_img03_05.png")} />
                </li>

              </ol>*/}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video03.mp4")} /></video>
                </div>
                {/*<div className="carousel-item active">
                  <img src={withPrefix("/images/art/sec02_img03_main.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img03_01.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img03_02.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img03_03.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img03_04.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img03_05.png")} />
                </div>*/}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="videoModal04" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide04" className="carousel slide">
              {/*<ol className="carousel-indicators">
                <li data-target="#slide04" data-slide-to="0" className="active">
                  <img src={withPrefix("/images/art/sec02_img04_main.png")} />
                </li>
                <li data-target="#slide04" data-slide-to="1">
                  <img src={withPrefix("/images/art/sec02_img04_01.png")} />
                </li>
                <li data-target="#slide04" data-slide-to="2">
                  <img src={withPrefix("/images/art/sec02_img04_02.png")} />
                </li>
                <li data-target="#slide04" data-slide-to="3">
                  <img src={withPrefix("/images/art/sec02_img04_03.png")} />
                </li>
                <li data-target="#slide04" data-slide-to="4">
                  <img src={withPrefix("/images/art/sec02_img04_04.png")} />
                </li>
                <li data-target="#slide04" data-slide-to="5">
                  <img src={withPrefix("/images/art/sec02_img04_05.png")} />
                </li>
                <li data-target="#slide04" data-slide-to="6">
                  <img src={withPrefix("/images/art/sec02_img04_06.png")} />
                </li>
              </ol>*/}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video04.mp4")} /></video>
                </div>
                {/*<div className="carousel-item active">
                  <img src={withPrefix("/images/art/sec02_img04_main.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img04_01.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img04_02.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img04_03.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img04_04.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img04_05.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img04_06.png")} />
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="videoModal05" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide05" className="carousel slide">
              {/*<ol className="carousel-indicators">
                <li data-target="#slide05" data-slide-to="0" className="active">
                  <img src={withPrefix("/images/art/sec02_img05_main.png")} />
                </li>
                <li data-target="#slide05" data-slide-to="1">
                  <img src={withPrefix("/images/art/sec02_img05_01.png")} />
                </li>
                <li data-target="#slide05" data-slide-to="2">
                  <img src={withPrefix("/images/art/sec02_img05_02.png")} />
                </li>
                <li data-target="#slide05" data-slide-to="3">
                  <img src={withPrefix("/images/art/sec02_img05_03.png")} />
                </li>
                <li data-target="#slide05" data-slide-to="4">
                  <img src={withPrefix("/images/art/sec02_img05_04.png")} />
                </li>
                <li data-target="#slide05" data-slide-to="5">
                  <img src={withPrefix("/images/art/sec02_img05_05.png")} />
                </li>
              </ol>*/}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video05.mp4")} /></video>
                </div>
                {/*<div className="carousel-item active">
                  <img src={withPrefix("/images/art/sec02_img05_main.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img05_01.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img05_02.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img05_03.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img05_04.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img05_05.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img05_06.png")} />
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="videoModal06" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide06" className="carousel slide">
              {/*<ol className="carousel-indicators">
                <li data-target="#slide06" data-slide-to="0" className="active">
                  <img src={withPrefix("/images/art/sec02_img06_main.png")} />
                </li>
                <li data-target="#slide06" data-slide-to="1">
                  <img src={withPrefix("/images/art/sec02_img06_01.png")} />
                </li>
                <li data-target="#slide06" data-slide-to="2">
                  <img src={withPrefix("/images/art/sec02_img06_02.png")} />
                </li>
                <li data-target="#slide06" data-slide-to="3">
                  <img src={withPrefix("/images/art/sec02_img06_03.png")} />
                </li>
                <li data-target="#slide06" data-slide-to="4">
                  <img src={withPrefix("/images/art/sec02_img06_04.png")} />
                </li>
                <li data-target="#slide06" data-slide-to="5">
                  <img src={withPrefix("/images/art/sec02_img06_05.png")} />
                </li>

              </ol>*/}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video06.mp4")} /></video>
                </div>
                {/*<div className="carousel-item active">
                  <img src={withPrefix("/images/art/sec02_img06_main.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img06_01.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img06_02.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img06_03.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img06_04.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img06_05.png")} />
                </div>*/}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="videoModal07" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide07" className="carousel slide">
              {/*<ol className="carousel-indicators">
                <li data-target="#slide07" data-slide-to="0" className="active">
                  <img src={withPrefix("/images/art/sec02_img07_01.png")} />
                </li>
                <li data-target="#slide07" data-slide-to="1">
                  <img src={withPrefix("/images/art/sec02_img07_02.png")} />
                </li>
                <li data-target="#slide07" data-slide-to="2">
                  <img src={withPrefix("/images/art/sec02_img07_03.png")} />
                </li>
                <li data-target="#slide07" data-slide-to="3">
                  <img src={withPrefix("/images/art/sec02_img07_04.png")} />
                </li>
                <li data-target="#slide07" data-slide-to="4">
                  <img src={withPrefix("/images/art/sec02_img07_05.png")} />
                </li>
                <li data-target="#slide07" data-slide-to="5">
                  <img src={withPrefix("/images/art/sec02_img07_06.png")} />
                </li>

              </ol>*/}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video07.mp4")} /></video>
                </div>
                {/*<div className="carousel-item active">
                  <img src={withPrefix("/images/art/sec02_img07_01.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img07_02.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img07_03.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img07_04.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img07_05.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img07_06.png")} />
                </div>*/}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="videoModal14" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide14" className="carousel slide">
              {/*<ol className="carousel-indicators">
                <li data-target="#slide14" data-slide-to="0" className="active">
                  <img src={withPrefix("/images/art/sec02_img14_01.png")} />
                </li>
                <li data-target="#slide14" data-slide-to="1">
                  <img src={withPrefix("/images/art/sec02_img14_02.png")} />
                </li>
                <li data-target="#slide14" data-slide-to="2">
                  <img src={withPrefix("/images/art/sec02_img14_03.png")} />
                </li>

              </ol>*/}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video14.mp4")} /></video>
                </div>
                {/*<div className="carousel-item active">
                  <img src={withPrefix("/images/art/sec02_img14_01.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img14_02.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img14_03.png")} />
                </div>*/}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="videoModal08" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide08" className="carousel slide">
              {/*<ol className="carousel-indicators">
                <li data-target="#slide08" data-slide-to="0" className="active">
                  <img src={withPrefix("https://placehold.jp/c7c7c7/ffffff/738x479.png?text=準備中")} />
                </li>
                <li data-target="#slide08" data-slide-to="1">
                  <img src={withPrefix("https://placehold.jp/c7c7c7/ffffff/738x479.png?text=準備中")} />
                </li>
                <li data-target="#slide08" data-slide-to="2">
                  <img src={withPrefix("https://placehold.jp/c7c7c7/ffffff/738x479.png?text=準備中")} />
                </li>
                <li data-target="#slide08" data-slide-to="3">
                  <img src={withPrefix("https://placehold.jp/c7c7c7/ffffff/738x479.png?text=準備中")} />
                </li>
                <li data-target="#slide08" data-slide-to="4">
                  <img src={withPrefix("https://placehold.jp/c7c7c7/ffffff/738x479.png?text=準備中")} />
                </li>
                <li data-target="#slide08" data-slide-to="5">
                  <img src={withPrefix("https://placehold.jp/c7c7c7/ffffff/738x479.png?text=準備中")} />
                </li>
                <li data-target="#slide08" data-slide-to="6">
                  <img src={withPrefix("https://placehold.jp/c7c7c7/ffffff/738x479.png?text=準備中")} />
                </li>
              </ol>*/}
              <div className="carousel-inner">
                {/*<div className="carousel-item active">
                  <img src={withPrefix("https://placehold.jp/c7c7c7/ffffff/738x479.png?text=準備中")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("https://placehold.jp/c7c7c7/ffffff/738x479.png?text=準備中")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("https://placehold.jp/c7c7c7/ffffff/738x479.png?text=準備中")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("https://placehold.jp/c7c7c7/ffffff/738x479.png?text=準備中")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("https://placehold.jp/c7c7c7/ffffff/738x479.png?text=準備中")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("https://placehold.jp/c7c7c7/ffffff/738x479.png?text=準備中")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("https://placehold.jp/c7c7c7/ffffff/738x479.png?text=準備中")} />
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="videoModal15" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide15" className="carousel slide">
              {/*<ol className="carousel-indicators">
                <li data-target="#slide15" data-slide-to="0" className="active">
                  <img src={withPrefix("/images/art/sec02_img15_01.png")} />
                </li>
                <li data-target="#slide15" data-slide-to="1">
                  <img src={withPrefix("/images/art/sec02_img15_02.png")} />
                </li>
                <li data-target="#slide15" data-slide-to="2">
                  <img src={withPrefix("/images/art/sec02_img15_03.png")} />
                </li>
                <li data-target="#slide15" data-slide-to="3">
                  <img src={withPrefix("/images/art/sec02_img15_04.png")} />
                </li>
                <li data-target="#slide15" data-slide-to="4">
                  <img src={withPrefix("/images/art/sec02_img15_05.png")} />
                </li>
                <li data-target="#slide15" data-slide-to="5">
                  <img src={withPrefix("/images/art/sec02_img15_06.png")} />
                </li>
                <li data-target="#slide15" data-slide-to="5">
                  <img src={withPrefix("/images/art/sec02_img15_07.png")} />
                </li>

              </ol>*/}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video15.mp4")} /></video>
                </div>
                {/*<div className="carousel-item active">
                  <img src={withPrefix("/images/art/sec02_img15_01.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img15_02.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img15_03.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img15_04.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img15_05.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img15_06.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img15_07.png")} />
                </div>*/}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="videoModal09" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide09" className="carousel slide">
              {/*<ol className="carousel-indicators">
                <li data-target="#slide09" data-slide-to="0" className="active">
                  <img src={withPrefix("/images/art/sec02_img09_main.png")} />
                </li>
                <li data-target="#slide09" data-slide-to="1">
                  <img src={withPrefix("/images/art/sec02_img09_01.png")} />
                </li>
                <li data-target="#slide09" data-slide-to="2">
                  <img src={withPrefix("/images/art/sec02_img09_02.png")} />
                </li>
                <li data-target="#slide09" data-slide-to="3">
                  <img src={withPrefix("/images/art/sec02_img09_03.png")} />
                </li>
                <li data-target="#slide09" data-slide-to="4">
                  <img src={withPrefix("/images/art/sec02_img09_04.png")} />
                </li>
                <li data-target="#slide09" data-slide-to="5">
                  <img src={withPrefix("/images/art/sec02_img09_05.png")} />
                </li>
                <li data-target="#slide09" data-slide-to="6">
                  <img src={withPrefix("/images/art/sec02_img09_06.png")} />
                </li>
              </ol>*/}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video08.mp4")} /></video>
                </div>
                {/*<div className="carousel-item active">
                  <img src={withPrefix("/images/art/sec02_img09_main.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img09_01.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img09_02.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img09_03.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img09_04.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img09_05.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img09_06.png")} />
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="videoModal10" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide10" className="carousel slide">
              {/*<ol className="carousel-indicators">
                <li data-target="#slide10" data-slide-to="0" className="active">
                  <img src={withPrefix("/images/art/sec02_img10_main.png")} />
                </li>
                <li data-target="#slide10" data-slide-to="1">
                  <img src={withPrefix("/images/art/sec02_img10_01.png")} />
                </li>
                <li data-target="#slide10" data-slide-to="2">
                  <img src={withPrefix("/images/art/sec02_img10_02.png")} />
                </li>
                <li data-target="#slide10" data-slide-to="3">
                  <img src={withPrefix("/images/art/sec02_img10_03.png")} />
                </li>
                <li data-target="#slide10" data-slide-to="4">
                  <img src={withPrefix("/images/art/sec02_img10_04.png")} />
                </li>
                <li data-target="#slide10" data-slide-to="5">
                  <img src={withPrefix("/images/art/sec02_img10_05.png")} />
                </li>
                <li data-target="#slide10" data-slide-to="6">
                  <img src={withPrefix("/images/art/sec02_img10_06.png")} />
                </li>
              </ol>*/}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <video width="100%" playsInline controls><source src={withPrefix("/images/art/sec02_video10.mp4")} /></video>
                </div>
                {/*<div className="carousel-item active">
                  <img src={withPrefix("/images/art/sec02_img10_main.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img10_01.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img10_02.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img10_03.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img10_04.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img10_05.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img10_06.png")} />
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Map />
  </Layout>
)

export default SecondPage
