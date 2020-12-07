import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="e・co・de smart zero ウッディスタイル" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title">
					<h1>e・co・de smart zero ウッディスタイル</h1>
				</div>
				<div className="article__contents">
					<div className="container">
						<section className="article__section article__section03">
							<h2>CGムービー体験</h2>
							<div className="movie__wrap row">
								<div className="col-12 col-md-12">
									<div className="movie text-center">
										<iframe width="560" height="315" src="https://www.youtube.com/embed/LvVlhvbeHOc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="e・co・de smart zero ウッディスタイル"></iframe></div>
								</div>
							</div>
						</section>
						<section className="article__section article__section01">
							<h2>VR見学</h2>
							<h3>画面からVR</h3>
							<div className="section__image">
								<a href="https://iehaco.jp/park/vr/15/3d/" target="_blank" rel="noreferrer"><img src={withPrefix("/images/vr/vr15/sec01_img01.jpg")} alt="e・co・de smart zero ウッディスタイル" /></a>
							</div>
							<div className="button__wrap">
								<a href="https://iehaco.jp/park/vr/15/3d/" target="_blank" rel="noreferrer" className="button button--primary">VRで体験する</a>
							</div>
						</section>
						<section className="article__section article__section02">
							<h2>間取り</h2>
							<div className="layout__list row">
<<<<<<< HEAD
								<div className="col-12 col-md-6">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr15/sec02_img01.png")} alt="1階間取り" /></div>
									<p className="layout__list__caption text-center">1階</p>
								</div>
								<div className="col-12 col-md-6">
=======
								<div className="col-12 col-md-12">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr15/sec02_img01.png")} alt="1階間取り" /></div>
									<p className="layout__list__caption text-center">1階</p>
								</div>
								<div className="col-12 col-md-12">
>>>>>>> 630311f711f73eaa49accac4d5af1d93c346f306
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr15/sec02_img02.png")} alt="1階間取り" /></div>
									<p className="layout__list__caption text-center">2階</p>
								</div>
							</div>
							<div className="layout__date row">
								<div className="col-12 col-md-6">
									<h3>1階部屋床面積表</h3>
									<table className="table__vr">
										<tbody>
											<tr>
												<th>部屋名称</th>
												<th>床面積</th>
											</tr>
											<tr>
												<td>1階 和室</td>
												<td>6.00㎡</td>
											</tr>
											<tr>
												<td>1階 LDK</td>
												<td>30.00㎡</td>
											</tr>
											<tr>
												<td>1階 浴室</td>
												<td>3.64㎡</td>
											</tr>
											<tr>
												<td>1階 洗面所</td>
												<td>4.36㎡</td>
											</tr>
											<tr>
												<td>1階 玄関</td>
												<td>3.06㎡</td>
											</tr>
											<tr>
												<td>1階 トイレ</td>
												<td>1.75㎡</td>
											</tr>
											<tr>
												<td>1階 ホール</td>
												<td>4.68㎡</td>
											</tr>
											<tr>
												<td>1階 室内階段</td>
												<td>3.50㎡</td>
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
												<td>2階 収納 </td>
												<td>2.00㎡</td>
											</tr>
											<tr>
												<td>2階 クローゼット</td>
												<td>2.00㎡</td>
											</tr>
											<tr>
												<td>2階 収納 </td>
												<td>1.00㎡</td>
											</tr>
											<tr>
												<td>2階 マルチホール </td>
												<td>23.50㎡</td>
											</tr>
											<tr>
												<td>2階 子供室 </td>
												<td>6.00㎡</td>
											</tr>
											<tr>
												<td>2階 子供室 </td>
												<td>6.00㎡</td>
											</tr>
											<tr>
												<td>2階 主寝室 </td>
												<td>12.00㎡</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="col-12 col-md-8 offset-md-2">
									<table className="table__vr2">
										<tbody>
											<tr>
												<td>1F床⾯積</td>
												<td>55.50㎡</td>
												<td>16.78坪</td>
											</tr>
											<tr>
												<td>2F床⾯積</td>
												<td>56.00㎡</td>
												<td>16.94坪</td>
											</tr>
											<tr>
												<td>延床⾯積</td>
												<td>111.50㎡ </td>
												<td>33.72坪</td>
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
