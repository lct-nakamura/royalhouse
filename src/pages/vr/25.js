import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="環境にも地球にもやさしいエコな家" />
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
					<h1>環境にも地球にもやさしいエコな家</h1>
				</div>
				<div className="article__contents">
					<div className="container">
						<section className="article__section article__section03">
							<h2>CGムービー体験</h2>
							<div className="movie__wrap row">
								<div className="col-12 col-md-12">
									<div className="movie text-center"><iframe title="環境にも地球にもやさしいエコな家" width="560" height="315" src="https://www.youtube.com/embed/k6yFRUI6xuE?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
								</div>
							</div>
						</section>
						<section className="article__section article__section01">
							<h2>VR見学</h2>
							<h3>画面からVR</h3>
							<div className="section__image">
							<a href="https://fukamori.jp/pano/royal/honbu/202203comuni_oshare/" target="_blank" rel="noreferrer"><img src={withPrefix("/images/vr/vr25/sec01_img01.jpg")} alt="環境にも地球にもやさしいエコな家" /></a>
							</div>
							<div className="button__wrap">
							<a href="https://fukamori.jp/pano/royal/honbu/202203comuni_oshare/" target="_blank" rel="noreferrer" className="button button--primary">VRで体験する</a>
							</div>
						</section>
						<section className="article__section article__section02">
							<h2>間取り</h2>
							<div className="layout__list row">
								<div className="col-12 col-md-12">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr25/sec03_img01.jpg")} alt="1階間取り" /></div>
									<p className="layout__list__caption text-center">1階</p>
								</div>
								<div className="col-12 col-md-12">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr25/sec03_img02.jpg")} alt="2階間取り" /></div>
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
												<th>1階 子供室2</th>
												<th>8.00㎡</th>
											</tr>
											<tr>
												<th>1階 ウォークインクローゼット</th>
												<th>2.00㎡</th>
											</tr>
											<tr>
												<th>1階 子供室1</th>
												<th>8.00㎡</th>
											</tr>
											<tr>
												<th>1階 主寝室</th>
												<th>12.00㎡</th>
											</tr>
											<tr>
												<th>1階 トイレ</th>
												<th>1.50㎡</th>
											</tr>
											<tr>
												<th>1階 廊下</th>
												<th>3.00㎡</th>
											</tr>
											<tr>
												<th>1階 収納</th>
												<th>2.00㎡</th>
											</tr>
											<tr>
												<th>1階 玄関</th>
												<th>4.25㎡</th>
											</tr>
											<tr>
												<th>1階 ファミリースペース</th>
												<th>12.00㎡</th>
											</tr>
											<tr>
												<th>1階 ウォークインクローゼット</th>
												<th>2.00㎡</th>
											</tr>
											<tr>
												<th>1階 室内階段</th>
												<th>4.00㎡</th>
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
												<th>2階 トイレ</th>
												<th>2.00㎡</th>
											</tr>
											<tr>
												<th>2階 浴室</th>
												<th>3.31㎡</th>
											</tr>
											<tr>
												<th>2階 パントリー</th>
												<th>2.14㎡</th>
											</tr>
											<tr>
												<th>2階 廊下</th>
												<th>1.00㎡</th>
											</tr>
											<tr>
												<th>2階 洗面室</th>
												<th>4.00㎡</th>
											</tr>
											<tr>
												<th>2階 LDK</th>
												<th>31.54㎡</th>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="col-12 col-md-8 offset-md-2">
									<table className="table__vr2">
										<tbody>
											<tr>
												<td>1F床⾯積</td>
												<td>57.75㎡</td>
												<td>17.46坪</td>
											</tr>
											<tr>
												<td>2F床⾯積</td>
												<td>48.00㎡</td>
												<td>14.52坪</td>
											</tr>
											<tr>
												<td>延床⾯積</td>
												<td>105.75㎡</td>
												<td>31.98坪</td>
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
