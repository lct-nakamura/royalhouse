import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="プラステージ ナチュラルモダン" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title">
					<h1>プラステージ ナチュラルモダン</h1>
				</div>
				<div className="article__contents">
					<div className="container">
						<section className="article__section article__section03">
							<h2>CGムービー体験</h2>
							<div className="movie__wrap row">
								<div className="col-12 col-md-12">
									<div className="movie text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/M6ZhAifO5B4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="プラステージ ナチュラルモダン"></iframe></div>
								</div>
							</div>
						</section>
						<section className="article__section article__section01">
							<h2>VR見学</h2>
							<h3>画面からVR</h3>
							<div className="section__image">
								<a href="https://iehaco.jp/park/vr/01/3d/" target="_blank" rel="noreferrer"><img src={withPrefix("/images/vr/vr01/sec01_img01.jpg")} alt="プラステージ ナチュラルモダン内装" /></a>
							</div>
							<div className="button__wrap">
								<a href="https://iehaco.jp/park/vr/01/3d/" target="_blank" rel="noreferrer" className="button button--primary">VRで体験する</a>
							</div>
						</section>
						<section className="article__section article__section02">
							<h2>間取り</h2>
							<div className="layout__list row">
<<<<<<< HEAD
								<div className="col-12 col-md-4">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr01/sec02_img01.png")} alt="1階間取り" /></div>
									<p className="layout__list__caption text-center">1階</p>
								</div>
								<div className="col-12 col-md-4">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr01/sec02_img02.png")} alt="1.5階間取り" /></div>
									<p className="layout__list__caption text-center">1.5階</p>
								</div>
								<div className="col-12 col-md-4">
=======
								<div className="col-12 col-md-12">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr01/sec02_img01.png")} alt="1階間取り" /></div>
									<p className="layout__list__caption text-center">1階</p>
								</div>
								<div className="col-12 col-md-12">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr01/sec02_img02.png")} alt="1.5階間取り" /></div>
									<p className="layout__list__caption text-center">1.5階</p>
								</div>
								<div className="col-12 col-md-12">
>>>>>>> develop_lct_mascat
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr01/sec02_img03.png")} alt="2階間取り" /></div>
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
												<td>1階 浴室 </td>
												<td>3.64㎡</td>
											</tr>
											<tr>
												<td>1階 洗面所 </td>
												<td>4.36㎡</td>
											</tr>
											<tr>
												<td>1階 トイレ </td>
												<td>2.00㎡</td>
											</tr>
											<tr>
												<td>1階 階段下 収納 </td>
												<td>1.00㎡</td>
											</tr>
											<tr>
												<td>1階 玄関 </td>
												<td>4.00㎡</td>
											</tr>
											<tr>
												<td>1階 ホール </td>
												<td>4.00㎡</td>
											</tr>
											<tr>
												<td>1階 ＬＤＫ </td>
												<td>44.50㎡</td>
											</tr>
											<tr>
												<td>1階 室内階段 </td>
												<td>4.00㎡</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="col-12 col-md-4">
									<h3>1.5階部屋床面積表</h3>
									<table className="table__vr">
										<tbody>
											<tr>
												<th>部屋名称</th>
												<th>床面積</th>
											</tr>
											<tr>
												<td>1.5階 ホール </td>
												<td>2.00㎡</td>
											</tr>
											<tr>
												<td>1.5階 ホームトランク </td>
												<td>24.00㎡</td>
											</tr>
											<tr>
												<td>1.5階 ホームリゾート </td>
												<td>15.00㎡</td>
											</tr>
											<tr>
												<td>1.5階 ハーフ吹抜 </td>
												<td>24.50㎡</td>
											</tr>
											<tr>
												<td>1.5階 室内階段 </td>
												<td>2.00㎡</td>
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
												<td>2階 廊下 </td>
												<td>3.00㎡</td>
											</tr>
											<tr>
												<td>2階 収納 </td>
												<td>1.00㎡</td>
											</tr>
											<tr>
												<td>2階 ウォークインクロゼット</td>
												<td>6.00㎡</td>
											</tr>
											<tr>
												<td>2階 洋室 </td>
												<td>12.00㎡</td>
											</tr>
											<tr>
												<td>2階 収納 </td>
												<td>2.00㎡</td>
											</tr>
											<tr>
												<td>2階 収納 </td>
												<td>1.00㎡</td>
											</tr>
											<tr>
												<td>2階 子供室 </td>
												<td>23.50㎡</td>
											</tr>
											<tr>
												<td>2階 吹き抜け </td>
												<td>18.72㎡</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="col-12 col-md-8 offset-md-2">

									<table className="table__vr2">
										<tbody>
											<tr>
												<td>1F床⾯積</td>
												<td>66.50㎡</td>
												<td>20.11坪</td>
											</tr>
											<tr>
												<td>1.5F床⾯積</td>
												<td>45.00㎡</td>
												<td>13.61坪</td>
											</tr>
											<tr>
												<td>2F床⾯積</td>
												<td>50.50㎡</td>
												<td>15.27坪</td>
											</tr>
											<tr>
												<td>延床⾯積</td>
												<td>162.00㎡</td>
												<td>48.99坪</td>
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
