import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="ビルトインガレージのある家" />
    <article className="l-article">
		<div className="article__container">
			<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
			<div className="article__title">
				<h1>ビルトインガレージのある家</h1>
			</div>
			<div className="article__contents">
				<div className="container">
					<div className="article__mv">
						<img src={withPrefix("/images/vr/vr04/mv.jpg")} alt="ビルトインガレージのある家外観" />
					</div>
					<section className="article__section article__section01">
						<h2>VR見学</h2>
						<h3>画面からVR</h3>
						<div className="section__image">
						<a href="https://iehaco.jp/park/vr/04/3d/" target="_blank"><img src={withPrefix("/images/vr/vr04/sec01_img01.jpg")} alt="ビルトインガレージのある家内装" /></a>
						</div>
						<div className="button__wrap">
							<a href="https://iehaco.jp/park/vr/04/3d/" target="_blank" className="button button--primary">VRで体験する</a>
						</div>
					</section>
					<section className="article__section article__section02">
						<h2>間取り</h2>
						<div className="layout__list row">
							<div className="col-12 col-md-6">
								<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr04/sec02_img01.png")} alt="1階間取り" /></div>
								<p className="layout__list__caption text-center">1階</p>
							</div>
							<div className="col-12 col-md-6">
								<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr04/sec02_img02.png")} alt="2階間取り" /></div>
								<p className="layout__list__caption text-center">2階</p>
							</div>
						</div>
						<div className="layout__date row">
							<div className="col-12 col-md-4">
								<h3>1階部屋床面積表</h3>
								<table className="table__vr ">
									<tbody>
										<tr>
											<th>部屋名称</th>
											<th>床面積</th>
										</tr>
										<tr>
											<td>1階 浴室</td>
											<td>3.00㎡</td>
										</tr>
										<tr>
											<td>1階 洗面所</td>
											<td>3.00㎡</td>
										</tr>
										<tr>
											<td>1階 玄関</td>
											<td>1.50㎡</td>
										</tr>
										<tr>
											<td>1階 ホール</td>
											<td>2.25㎡</td>
										</tr>
										<tr>
											<td>1階 室内階段</td>
											<td>3.75㎡</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="col-12 col-md-4">
								<h3>2階部屋床面積表</h3>
								<table className="table__vr">
									<tbody>
										<tr>
											<th>部屋名称</th>
											<th>床面積</th>
										</tr>
										<tr>
											<td>2階 トイレ</td>
											<td>2.00㎡</td>
										</tr>
										<tr>
											<td>2階 ＬＤＫ</td>
											<td>22.25㎡</td>
										</tr>
										<tr>
											<td>2階 室内階段</td>
											<td>3.75㎡</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="col-12 col-md-4">
								<h3>3階部屋床面積表</h3>
								<table className="table__vr">
									<tbody>
										<tr>
											<th>部屋名称</th>
											<th>床面積</th>
										</tr>
										<tr>
											<td>3階 ウォークインクロゼット</td>
											<td>4.00㎡</td>
										</tr>
										<tr>
											<td>3階 洋室</td>
											<td>20.25㎡</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="col-12 col-md-8 offset-md-2">
								<table className="table__vr2">
									<tbody>
										<tr>
											<td>1F床⾯積</td>
											<td>13.50㎡</td>
											<td>4.08坪</td>
										</tr>
										<tr>
											<td>2F床⾯積</td>
											<td>28.00㎡</td>
											<td>8.47坪 </td>
										</tr>
										<tr>
											<td>3F床⾯積</td>
											<td>28.00㎡</td>
											<td>8.47坪 </td>
										</tr>
										<tr>
											<td>延床⾯積</td>
											<td>69.50㎡</td>
											<td>21.02坪</td>
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
								<div className="movie text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/J4F75TwgYuY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
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
