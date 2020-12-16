import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="グランドワン 平屋の家 南欧スタイル" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title"><h1>グランドワン 平屋の家 南欧スタイル</h1></div>
				<div className="article__contents">
					<div className="container">
						<section className="article__section article__section03">
							<h2>CGムービー体験</h2>
							<div className="movie__wrap row">
								<div className="col-12 col-md-12">
									<div className="movie text-center"><iframe title="グランドワン 平屋の家 南欧スタイル" width="560" height="315" src="https://www.youtube.com/embed/HJFWSWNq_I8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
								</div>
							</div>
						</section>
						<section className="article__section article__section01">
							<h2>VR見学</h2>
							<h3>画面からVR</h3>
							<div className="section__image">
								<a href="https://iehaco.jp/park/vr/22/3d/" target="_blank" rel="noreferrer"><img src={withPrefix("/images/vr/vr22/sec01_img01.jpg")} alt="グランドワン 平屋の家 南欧スタイル内装" /></a>
							</div>
							<div className="button__wrap">
								<a href="https://iehaco.jp/park/vr/22/3d/" target="_blank" rel="noreferrer" className="button button--primary">VRで体験する</a>
							</div>
						</section>
						<section className="article__section article__section02">
							<h2>間取り</h2>
							<div className="layout__list row">
								<div className="col-12 col-md-12">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr22/sec02_img01.png")} alt="1階間取り" /></div>
									<p className="layout__list__caption text-center">1階</p>
								</div>
								<div className="col-12 col-md-12">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr22/sec02_img02.png")} alt="ロフト間取り" /></div>
									<p className="layout__list__caption text-center">ロフト</p>
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
												<td>1階 洋室</td>
												<td> 12.00㎡</td>
											</tr>
											<tr>
												<td>ウォークインクローゼット</td>
												<td> 2.25㎡</td>
											</tr>
											<tr>
												<td>ウォークインクローゼット</td>
												<td> 2.25㎡</td>
											</tr>
											<tr>
												<td>1階 洋室</td>
												<td> 12.00㎡</td>
											</tr>
											<tr>
												<td>1階 収納</td>
												<td> 2.00㎡</td>
											</tr>
											<tr>
												<td>1階 収納</td>
												<td> 1.00㎡</td>
											</tr>
											<tr>
												<td>1階 トイレ</td>
												<td> 2.00㎡</td>
											</tr>
											<tr>
												<td>1階 洗面所</td>
												<td> 4.00㎡</td>
											</tr>
											<tr>
												<td>1階 収納</td>
												<td>3.00㎡</td>
											</tr>
											<tr>
												<td>1階 ホール</td>
												<td> 2.25㎡</td>
											</tr>
											<tr>
												<td>1階 玄関</td>
												<td> 2.50㎡</td>
											</tr>
											<tr>
												<td>1階 ＬＤＫ</td>
												<td>43.00㎡</td>
											</tr>
											<tr>
												<td>1階 浴室</td>
												<td>4.00 ㎡</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="col-12 col-md-6">
									<h3>小屋部屋床面積表</h3>
									<table className="table__vr">
										<tbody>
											<tr>
												<th>部屋名称</th>
												<th>床面積</th>
											</tr>
											<tr>
												<td>ロフト</td>
												<td>24.00㎡</td>
											</tr>
											<tr>
												<td>吹き抜け</td>
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
					</div>
				</div>
			</div>
		</article>
		<Map />
	</Layout>
)

export default SecondPage
