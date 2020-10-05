import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="グラウンドワン　平屋の家　フラットスタイル" />
    <article className="l-article">
		<div className="article__container">
			<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
			<div className="article__title">
			<h1>グラウンドワン　平屋の家　フラットスタイル</h1>
			</div>
			<div className="article__contents">
			<div className="container">
				<div className="article__mv">
				<img src={withPrefix("/images/vr/vr21/mv.jpg")} alt="グラウンドワン　平屋の家　フラットスタイル外観" />
				</div>
				<section className="article__section article__section01">
				<h2>VR見学</h2>
				<h3>画面からVR</h3>
				<div className="section__image">
				<a href="https://fukamori.jp/pano/royal/honbu/202006_g1flat/" target="_blank"><img src={withPrefix("/images/vr/vr21/sec01_img01.jpg")} alt="グラウンドワン　平屋の家　フラットスタイル内装" /></a>
				</div>
				<div className="button__wrap">
					<a href="https://fukamori.jp/pano/royal/honbu/202006_g1flat/" target="_blank" className="button button--primary">VRで体験する</a>
				</div>
				</section>
				<section className="article__section article__section02">
				<h2>間取り</h2>
				<div className="layout__list row">
					<div className="col-12 col-md-12">
					<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr21/sec02_img01.png")} alt="間取り" /></div>
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
							<td>1階 ウォークインクローゼット</td>
							<td> 2.25㎡</td>
							</tr>
							<tr>
							<td>1階 収納</td>
							<td> 2.00㎡</td>
							</tr>
							<tr>
							<td>1階 トイレ</td>
							<td> 2.00㎡</td>
							</tr>
							<tr>
							<td>1階 浴室</td>
							<td> 4.00㎡</td>
							</tr>
							<tr>
							<td>1階 洗面所</td>
							<td> 4.00㎡</td>
							</tr>
							<tr>
							<td>1階 収納</td>
							<td> 4.00㎡</td>
							</tr>
							<tr>
							<td>1階 収納</td>
							<td> 1.00㎡</td>
							</tr>
							<tr>
							<td>1階 Ｌ・Ｄ・Ｋ </td>
							<td>43.00㎡</td>
							</tr>
							<tr>
							<td>1階 ウォークインクローゼット</td>
							<td> 2.25㎡</td>
							</tr>
							<tr>
							<td>1階 玄関</td>
							<td> 4.00㎡</td>
							</tr>
							<tr>
							<td>1階 洋室 </td>
							<td>12.00㎡</td>
							</tr>
							<tr>
							<td>1階 洋室 </td>
							<td>12.00㎡</td>
							</tr>
						</tbody>
					</table>
					</div>

					<div className="col-12 col-md-6">
					<table className="table__vr2">
						<tbody>
							<tr>
							<td>1F床⾯積</td>
							<td>92.50㎡ </td>
							<td>27.98坪</td>
							</tr>

							<tr>
							<td>延床⾯積</td>
							<td>92.50㎡</td>
							<td>27.98坪</td>
							</tr>
						</tbody>
					</table>
					</div>
				</div>
				</section>
				<section className="article__section article__section03">
				<h2>CGムービー体験</h2>
				<div className="movie__wrap row">
					<div className="col-12 col-md-12">
					<div className="movie text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/1roMRzWgCbM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
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
