import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Map from "../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="COMUNIOshare" />
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
          <h1>楽しく家事、子育てがシェアできる家<br />COMUNI Oshare</h1>
        </div>
        <div className="article__contents">
    <div className="container">
      <section className="article__section article__section03">
        <h2>CGムービー体験</h2>
        <div className="movie__wrap row">
          <div className="col-12 col-md-12">
            <div className="movie text-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/wcBOOqplsFw?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" title="楽しく家事、子育てがシェアできる家 COMUNI Oshare"> </iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="article__section article__section01">
        <h2>VR見学</h2>
        <h3>画面からVR</h3>
        <div className="section__image"><a href="https://iehaco.jp/test/vr/25/3d/" target="_blank" rel="noreferrer"><img src={withPrefix("/images/comuni/sec01_img01.jpg")} alt="楽しく家事、子育てがシェアできる家 COMUNI Oshare内装" /></a></div>
        <div className="button__wrap"><a href="https://iehaco.jp/test/vr/25/3d/" target="_blank" rel="noreferrer" className="button button--primary">VRで体験する</a></div>
      </section>
      <section className="article__section article__section02">
        <h2>間取り</h2>
        <div className="layout__list row">
          <div className="col-12 col-md-12">
            <div className="layout__list__image text-center"><img src={withPrefix("/images/comuni/sec02_img01.jpg")} alt="1階間取り" /></div>
            <p className="layout__list__caption text-center">1階</p>
          </div>
          <div className="col-12 col-md-12">
            <div className="layout__list__image text-center"><img src={withPrefix("/images/comuni/sec02_img02.jpg")} alt="2階間取り" /></div>
            <p className="layout__list__caption text-center">2階</p>
          </div>
        </div>
        <div className="layout__date row">
          <div className="col-12 col-md-6">
            <h3>1階部屋床面積表</h3>
            <table className="table__vr ">
              <tbody>
                <tr>
                  <th>部屋名称</th>
                  <th>床面積</th>
                </tr>
                <tr>
                  <td>1階 子供室2</td>
                  <td> 9.00㎡</td>
                </tr>
                <tr>
                  <td>1階 子供室3</td>
                  <td> 9.00㎡</td>
                </tr>
                <tr>
                  <td>1階 シェア収納</td>
                  <td> 2.00㎡</td>
                </tr>
                <tr>
                  <td>1階 子供室1</td>
                  <td> 9.00㎡</td>
                </tr>
                <tr>
                  <td>1階 トイレ</td>
                  <td> 2.00㎡</td>
                </tr>
                <tr>
                  <td>1階 収納</td>
                  <td> 1.00㎡</td>
                </tr>
                <tr>
                  <td>1階 収納</td>
                  <td> 2.00㎡</td>
                </tr>
                <tr>
                  <td>1階 主寝室</td>
                  <td>12.00㎡</td>
                </tr>
                <tr>
                  <td>1階 シューズクローク</td>
                  <td> 1.14㎡</td>
                </tr>
                <tr>
                  <td>1階 玄関</td>
                  <td> 1.75㎡</td>
                </tr>
                <tr>
                  <td>1階 ホール</td>
                  <td> 2.11㎡</td>
                </tr>
                <tr>
                  <td>1階 ファミリースペース</td>
                  <td>19.75㎡</td>
                </tr>
                <tr>
                  <td>1階 室内階段</td>
                  <td> 3.25㎡</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 col-md-6">
            <h3>2階部屋床面積表</h3>
            <table className="table__vr">
              <tbody>
                <tr>
                  <th>部屋名称</th>
                  <th>床面積</th>
                </tr>
                <tr>
                  <td>2階 トイレ</td>
                  <td> 2.00㎡</td>
                </tr>
                <tr>
                  <td>2階 洗面所</td>
                  <td> 4.00㎡</td>
                </tr>
                <tr>
                  <td>2階 浴室</td>
                  <td> 3.31㎡</td>
                </tr>
                <tr>
                  <td>2階 Work Space</td>
                  <td> 4.00㎡</td>
                </tr>
                <tr>
                  <td>2階 廊下</td>
                  <td> 3.00㎡</td>
                </tr>
                <tr>
                  <td>2階 ＬＤＫ</td>
                  <td>38.68㎡</td>
                </tr>
                <tr>
                  <td>2階 吹き抜け</td>
                  <td> 6.00㎡</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 col-md-8 offset-md-2">
            <table className="table__vr2">
              <tbody>
                <tr>
                  <td>1F床⾯積</td>
                  <td>74.00㎡</td>
                  <td>22.38坪</td>
                </tr>
                <tr>
                  <td>2F床⾯積</td>
                  <td>58.00㎡</td>
                  <td>17.54㎡</td>
                </tr>
                <tr>
                  <td>延床⾯積</td>
                  <td>132.00㎡</td>
                  <td>39.92坪</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
      </div>
    </article>

    <Map />
  </Layout>


)

export default SecondPage
