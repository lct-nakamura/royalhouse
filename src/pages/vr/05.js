import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="プラスパティオ　中庭" />
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
					<h1>プラスパティオ　中庭</h1>
				</div>
				<div className="article__contents">
					<div className="container">
						{/* <div className="article__mv">
							<img src={withPrefix("/images/vr/vr05/mv.jpg")} alt="プラスパティオ　中庭外観" />
						</div> */}
						<section className="article__section article__section03">
							<h2>CGムービー体験</h2>
							<div className="movie__wrap row">
								<div className="col-12 col-md-12">
									<div className="movie text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/nYCH3zsKeGQ?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="プラスパティオ　中庭"></iframe></div>
								</div>
							</div>
						</section>
						<section className="article__section article__section01">
							<h2>VR見学</h2>
							<h3>画面からVR</h3>
							<div className="section__image">
							<a href="/park/vr/05/3d/" target="_blank" rel="noreferrer"><img src={withPrefix("/images/vr/vr05/sec01_img01.jpg")} alt="プラスパティオ　中庭内装" /></a>
							</div>
							<div className="button__wrap">
							<a href="/park/vr/05/3d/" target="_blank" rel="noreferrer" className="button button--primary">VRで体験する</a>
							</div>
						</section>
						<section className="article__section article__section02">
							<h2>間取り</h2>
							<div className="layout__list row">
								<div className="col-12 col-md-12">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr05/sec02_img01.png")} alt="1階間取り" /></div>
									<p className="layout__list__caption text-center">1階</p>
								</div>
								<div className="col-12 col-md-12">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr05/sec02_img02.png")} alt="2階間取り" /></div>
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
												<td>1階 パントリー収納</td>
												<td>4.00㎡</td>
											</tr>
											<tr>
												<td>1階 トイレ</td>
												<td>2.00㎡</td>
											</tr>
											<tr>
												<td>1階 収納</td>
												<td>1.00㎡</td>
											</tr>
											<tr>
												<td>1階 和室</td>
												<td>6.75㎡</td>
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
												<td>1階 ホール</td>
												<td>1.87㎡</td>
											</tr>
											<tr>
												<td>1階 玄関</td>
												<td>2.25㎡</td>
											</tr>
											<tr>
												<td>1階 ＬＤＫ</td>
												<td>36.25㎡</td>
											</tr>
											<tr>
												<td>1階 室内階段</td>
												<td>4.00㎡</td>
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
												<td>2階 クローゼット</td>
												<td>1.00㎡</td>
											</tr>
											<tr>
												<td>2階 クローゼット</td>
												<td>1.00㎡</td>
											</tr>
											<tr>
												<td>2階 トイレ</td>
												<td>2.00㎡</td>
											</tr>
											<tr>
												<td>2階 書斎</td>
												<td>4.00㎡</td>
											</tr>
											<tr>
												<td>2階 WIC</td>
												<td>6.00㎡</td>
											</tr>
											<tr>
												<td>2階 ラウンジ</td>
												<td>15.50㎡</td>
											</tr>
											<tr>
												<td>2階 洋室</td>
												<td>7.50㎡</td>
											</tr>
											<tr>
												<td>2階 主寝室</td>
												<td>12.00㎡</td>
											</tr>
											<tr>
												<td>2階 洋室</td>
												<td>7.50㎡</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="col-12 col-md-8 offset-md-2">
									<table className="table__vr2">
										<tbody>
											<tr>
												<td>1F床⾯積</td>
												<td>64.12㎡</td>
												<td>19.39坪</td>
											</tr>
											<tr>
												<td>2F床⾯積</td>
												<td>60.00㎡</td>
												<td>18.15坪</td>
											</tr>

											<tr>
												<td>延床⾯積</td>
												<td>124.12㎡</td>
												<td>37.54坪</td>
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
