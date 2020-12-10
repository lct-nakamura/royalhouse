import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="アーバンステージ" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title">
					<h1>アーバンステージ</h1>
				</div>
				<div className="article__contents">
					<div className="container">
						<section className="article__section article__section03">
							<h2>CGムービー体験</h2>
							<div className="movie__wrap row">
								<div className="col-12 col-md-12">
									<div className="movie text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/UrIOXCmpVeo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="アーバンステージ"></iframe></div>
								</div>
							</div>
						</section>
						<section className="article__section article__section01">
							<h2>VR見学</h2>
							<h3>画面からVR</h3>
							<div className="section__image">
								<a href="https://iehaco.jp/park/vr/03/3d/" target="_blank" rel="noreferrer"><img src={withPrefix("/images/vr/vr03/sec01_img01.jpg")} alt="アーバンステージ内装" /></a>
							</div>
							<div className="button__wrap">
								<a href="https://iehaco.jp/park/vr/03/3d/" target="_blank" rel="noreferrer" className="button button--primary">VRで体験する</a>
							</div>
						</section>
						<section className="article__section article__section02">
							<h2>間取り</h2>
							<div className="layout__list row">
<<<<<<< HEAD
								<div className="col-12 col-md-4">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr03/sec02_img01.png")} alt="1階間取り" /></div>
									<p className="layout__list__caption text-center">1階</p>
								</div>
								<div className="col-12 col-md-4">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr03/sec02_img02.png")} alt="2階間取り" /></div>
									<p className="layout__list__caption text-center">2階</p>
								</div>
								<div className="col-12 col-md-4">
=======
								<div className="col-12 col-md-12">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr03/sec02_img01.png")} alt="1階間取り" /></div>
									<p className="layout__list__caption text-center">1階</p>
								</div>
								<div className="col-12 col-md-12">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr03/sec02_img02.png")} alt="2階間取り" /></div>
									<p className="layout__list__caption text-center">2階</p>
								</div>
								<div className="col-12 col-md-12">
>>>>>>> develop_lct_mascat
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr03/sec02_img03.png")} alt="3階間取り" /></div>
									<p className="layout__list__caption text-center">3階</p>
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
												<td>1階 洗面所</td>
												<td>3.36㎡</td>
											</tr>
											<tr>
												<td>1階 浴室</td>
												<td>3.64㎡</td>
											</tr>
											<tr>
												<td>1階 ﾄｲﾚ</td>
												<td>2.00㎡</td>
											</tr>
											<tr>
												<td>1階 収納</td>
												<td>2.25㎡</td>
											</tr>
											<tr>
												<td>1階 玄関</td>
												<td>2.25㎡</td>
											</tr>
											<tr>
												<td>1階 収納</td>
												<td>1.00㎡</td>
											</tr>
											<tr>
												<td>1階 ホール</td>
												<td>9.75㎡</td>
											</tr>
											<tr>
												<td>1階 室内階段</td>
												<td>4.00㎡</td>
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
												<td>2階 ﾄｲﾚ</td>
												<td>2.00㎡</td>
											</tr>
											<tr>
												<td>2階 ｷｯﾁﾝ</td>
												<td>7.00㎡</td>
											</tr>
											<tr>
												<td>2階 WIC</td>
												<td>3.00㎡</td>
											</tr>
											<tr>
												<td>2階 ホール</td>
												<td>4.50㎡</td>
											</tr>
											<tr>
												<td>2階 ＬＤＫ</td>
												<td>17.75㎡</td>
											</tr>
											<tr>
												<td>2階 吹抜</td>
												<td>1.50㎡</td>
											</tr>
											<tr>
												<td>2階 室内階段</td>
												<td>4.00㎡</td>
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
												<td>3階 WIC</td>
												<td>3.00㎡</td>
											</tr>
											<tr>
												<td>3階 ホール</td>
												<td>3.00㎡</td>
											</tr>
											<tr>
												<td>3階 クローゼット</td>
												<td>1.50㎡</td>
											</tr>
											<tr>
												<td>3階 洋室</td>
												<td>12.50㎡</td>
											</tr>
											<tr>
												<td>3階 洋室</td>
												<td>10.50㎡</td>
											</tr>
											<tr>
												<td>3階 吹抜</td>
												<td>1.50㎡</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="col-12 col-md-8 offset-md-2">
									<table className="table__vr2">
										<tbody>
											<tr>
												<td>1F床⾯積</td>
												<td>24.25㎡</td>
												<td>7.33坪</td>
											</tr>
											<tr>
												<td>2F床⾯積</td>
												<td>38.25㎡</td>
												<td>11.57坪</td>
											</tr>
											<tr>
												<td>3F床⾯積</td>
												<td>34.50㎡</td>
												<td>10.43坪</td>
											</tr>
											<tr>
												<td>延床⾯積</td>
												<td>97.00㎡</td>
												<td>29.33坪</td>
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
