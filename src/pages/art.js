import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Map from "../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="美術館" />
    <article className="l-article">
      <div className="article__container">
        <button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
        <div className="article__title">
          <h1>美術館</h1>
        </div>
        <div className="article__icon"><img src={withPrefix("/images/art/icon.png")} /></div>
        <div className="article__contents">
          <div className="container">
            <section className="article__section article__section01">
              <h2>グッドデザイン賞受賞作品<br />photo selection</h2>
              <div className="text-center mb-3"><img src={withPrefix("/images/art/gd_royal_sss.png")} className="gd_royal_sss" alt="グッドデザインロイヤルSSS構法" /></div>
              <p>グッドデザイン受賞商品には、これから家づくりのアイデアがたくさん盛り込まれています。<br />是非、自由設計を考える際のヒントとしても、ご活用ください。</p>
            </section>
            <section className="article__section article__section02">

              <p className="text-center">写真をクリックするとスライドショーが表示されます</p>
              <div id="modal-container" className="row">

                <figure className="col-6">
                  <a href="#" data-toggle="modal" data-target="#modal01"><img src={withPrefix("/images/art/sec02_img01_main.png")} /></a>
                  <figcaption>【Life Block】<br /><span className="text-xsmall">家族参加でつくる<br className="show-xs-only hide-md" />新発想の家づくり</span></figcaption>
                </figure>
                <figure className="col-6"><a href="#" data-toggle="modal" data-target="#modal02"><img src={withPrefix("/images/art/sec02_img02_main.png")} /></a>
                  <figcaption>【育つ家】<br /><span className="text-xsmall">平屋から、<br className="show-xs-only hide-md" />みんなで育てる家</span></figcaption>
                </figure>
                <figure className="col-6"><a href="#" data-toggle="modal" data-target="#modal03"><img src={withPrefix("/images/art/sec02_img03_main.png")} /></a>
                  <figcaption>【ピロティの家】<br /><span className="text-xsmall">家の内外を曖昧に<br className="show-xs-only hide-md" />つなぐ、ピロティの<br className="show-xs-only hide-md" />新たな価値</span>
                  </figcaption>
                </figure>
                <figure className="col-6"><a href="#" data-toggle="modal" data-target="#modal04"><img src={withPrefix("/images/art/sec02_img04_main.png")} /></a>
                  <figcaption>【門のある家】<br /><span className="text-xsmall">地域との距離感を選択<br className="show-xs-only hide-md" />できるデザインと<br className="show-xs-only hide-md" />暮らし</span><br /></figcaption>
                </figure>
                <figure className="col-6"><a href="#" data-toggle="modal" data-target="#modal05"><img src={withPrefix("/images/art/sec02_img05_main.png")} /></a>
                  <figcaption>【積み木の家】<br /><span className="text-xsmall">つくっては変えられる<br className="show-xs-only hide-md" />発想を縛られない<br className="show-xs-only hide-md" />無柱空間</span></figcaption>
                </figure>
                <figure className="col-6"><a href="#" data-toggle="modal" data-target="#modal06"><img src={withPrefix("/images/art/sec02_img06_main.png")} /></a>
                  <figcaption>【軒の家】<br /><span className="text-xsmall">ダイナミックな吹抜け<br className="show-xs-only hide-md" />半戸外空間を持つ<br className="show-xs-only hide-md" />暮らし</span></figcaption>
                </figure>
                <figure className="col-6"><a href="#" data-toggle="modal" data-target="#modal07"><img src={withPrefix("/images/art/sec02_img07_main.png")} /></a>
                  <figcaption>【大開口の家】<br /><span className="text-xsmall">これからの省エネ基準を解決する新発想の<br className="show-xs-only hide-md" />家づくり</span></figcaption>
                </figure>
                <figure className="col-6"><a href="#" data-toggle="modal" data-target="#modal09"><img src={withPrefix("/images/art/sec02_img09_main.png")} /></a>
                  <figcaption>【骨の見える家】<br /><span className="text-xsmall">中古流通時代における<br className="show-xs-only hide-md" />価値ある新築住宅<br className="show-xs-only hide-md" />システム</span></figcaption>
                </figure>
                <figure className="col-6"><a href="#" data-toggle="modal" data-target="#modal10"><img src={withPrefix("/images/art/sec02_img10_main.png")} /></a>
                  <figcaption>【外暮らしの家】<br /><span className="text-xsmall">小さく建てて、<br className="show-xs-only hide-md" />大きく暮らす家</span></figcaption>
                </figure>

              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
    <div className="modal fade modal_slideshow" id="modal01" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide01" className="carousel slide">
              <ol className="carousel-indicators">
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
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="modal02" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide02" className="carousel slide">
              <ol className="carousel-indicators">
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
                <li data-target="#slide02" data-slide-to="4">
                  <img src={withPrefix("/images/art/sec02_img02_04.png")} />
                </li>
                <li data-target="#slide02" data-slide-to="5">
                  <img src={withPrefix("/images/art/sec02_img02_05.png")} />
                </li>

              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
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
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img02_04.png")} />
                </div>
                <div className="carousel-item">
                  <img src={withPrefix("/images/art/sec02_img02_05.png")} />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="modal03" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide03" className="carousel slide">
              <ol className="carousel-indicators">
                <li data-target="#slide03" data-slide-to="0" className="active">
                  <img src={withPrefix("/images/art/sec02_img03_main.png")} />
                </li>
                <li data-target="#slide03" data-slide-to="1">
                  <img src={withPrefix("/images/art/sec02_img03_01.png")} />
                </li>
                <li data-target="#slide03" data-slide-to="2">
                  <img src={withPrefix("/images/art/sec02_img03_02.png")} />
                </li>
                <li data-target="#slide03" data-slide-to="3">
                  <img src={withPrefix("/images/art/sec02_img03_03.png")} />
                </li>
                <li data-target="#slide03" data-slide-to="4">
                  <img src={withPrefix("/images/art/sec02_img03_04.png")} />
                </li>
                <li data-target="#slide03" data-slide-to="5">
                  <img src={withPrefix("/images/art/sec02_img03_05.png")} />
                </li>

              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
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
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="modal04" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide04" className="carousel slide">
              <ol className="carousel-indicators">
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
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="modal05" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide05" className="carousel slide">
              <ol className="carousel-indicators">
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
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="modal06" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide06" className="carousel slide">
              <ol className="carousel-indicators">
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

              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
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
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="modal07" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide07" className="carousel slide">
              <ol className="carousel-indicators">
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

              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
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
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="modal08" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide08" className="carousel slide">
              <ol className="carousel-indicators">
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
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="modal09" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide09" className="carousel slide">
              <ol className="carousel-indicators">
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
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal_slideshow" id="modal10" tabIndex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="slide10" className="carousel slide">
              <ol className="carousel-indicators">
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
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
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
                </div>
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
