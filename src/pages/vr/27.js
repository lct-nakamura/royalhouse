import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="ウイルス対策万全！住まいのきれいをデザインした家" />
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
					<h1>ウイルス対策万全！<br />住まいのきれいをデザインした家</h1>
				</div>
				<div className="article__contents">
					<div className="container">
						<section className="article__section article__section03">
							<h2>CGムービー体験</h2>
							<div className="movie__wrap row">
								<div className="col-12 col-md-12">
									<div className="movie text-center"><iframe title="ウイルス対策万全！住まいのきれいをデザインした家" width="560" height="315" src="https://www.youtube.com/embed/8JZxAejE9fs?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
								</div>
							</div>
						</section>
						<section className="article__section article__section01">
							<h2>VR見学</h2>
							<h3>画面からVR</h3>
							<div className="section__image">
							<a href="https://fukamori.jp/pano/royal/honbu/202109kicolokirei/" target="_blank" rel="noreferrer"><img src={withPrefix("/images/vr/vr27/sec01_img01.jpg")} alt="ウイルス対策万全！住まいのきれいをデザインした家" /></a>
							</div>
							<div className="button__wrap">
							<a href="https://fukamori.jp/pano/royal/honbu/202109kicolokirei/" target="_blank" rel="noreferrer" className="button button--primary">VRで体験する</a>
							</div>
						</section>
						<section className="article__section article__section02">
							<h2>間取り</h2>
							<div className="layout__list row">
								<div className="col-12 col-md-12">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr27/sec03_img01.jpg")} alt="1階間取り" /></div>
									<p className="layout__list__caption text-center">1階</p>
								</div>
								<div className="col-12 col-md-12">
									<div className="layout__list__image text-center"><img src={withPrefix("/images/vr/vr27/sec03_img02.jpg")} alt="2階間取り" /></div>
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
												<th>1階 トイレ</th>
												<th>1.75㎡</th>
											</tr>
											<tr>
												<th>1階 シューズクローゼット</th>
												<th>3.50㎡</th>
											</tr>
											<tr>
												<th>1階 パントリー収納</th>
												<th>6.00㎡</th>
											</tr>
											<tr>
												<th>1階 廊下</th>
												<th>1.25㎡</th>
											</tr>
											<tr>
												<th>1階 洗面所</th>
												<th>4.36㎡</th>
											</tr>
											<tr>
												<th>1階 浴室</th>
												<th>3.64㎡</th>
											</tr>
											<tr>
												<th>1階 物入</th>
												<th>1.00㎡</th>
											</tr>
											<tr>
												<th>1階 LDK</th>
												<th>32.00㎡</th>
											</tr>
											<tr>
												<th>1階 廊下</th>
												<th>1.00㎡</th>
											</tr>
											<tr>
												<th>1階 玄関</th>
												<th>3.00㎡</th>
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
												<th>2階 クローゼット</th>
												<th>3.00㎡</th>
											</tr>
											<tr>
												<th>2階 主寝室</th>
												<th>12.00㎡</th>
											</tr>
											<tr>
												<th>2階 子供室</th>
												<th>8.50㎡</th>
											</tr>
											<tr>
												<th>2階 子供室</th>
												<th>8.50㎡</th>
											</tr>
											<tr>
												<th>2階 クローゼット</th>
												<th>1.50㎡</th>
											</tr>
											<tr>
												<th>2階 クローゼット</th>
												<th>1.50㎡</th>
											</tr>
											<tr>
												<th>2階 トイレ</th>
												<th>2.00㎡</th>
											</tr>
											<tr>
												<th>2階 収納</th>
												<th>1.00㎡</th>
											</tr>
											<tr>
												<th>2階 廊下</th>
												<th>7.00㎡</th>
											</tr>
											<tr>
												<th>2階 セカンドリビング</th>
												<th>9.00㎡</th>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="col-12 col-md-8 offset-md-2">
									<table className="table__vr2">
										<tbody>
											<tr>
												<td>1F床⾯積</td>
												<td>61.00㎡</td>
												<td>18.45坪</td>
											</tr>
											<tr>
												<td>2F床⾯積</td>
												<td>58.00㎡</td>
												<td>17.54坪</td>
											</tr>
											<tr>
												<td>延床⾯積</td>
												<td>119.00㎡</td>
												<td>35.99坪</td>
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
