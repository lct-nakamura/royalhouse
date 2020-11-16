import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="イオンクラスター除菌脱臭装置" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title"><h1>イオンクラスター除菌脱臭装置</h1></div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>
								自然界の空気浄化原理を再現した空気浄化技術で除菌と脱臭を同時に行います。
						</p>
							<div className="row">
								<div className="col-12 col-md-6 text-center"><img src={withPrefix("/images/recommend/31/31_001.jpg")} alt="イオンクラスター除菌脱臭装置" /></div>
								<div className="col-12 col-md-6 text-center"><img src={withPrefix("/images/recommend/31/31_002.jpg")} alt="イオンクラスター除菌脱臭装置" /></div>
							</div>
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/31/31_003.jpg")} alt="1台で除菌・脱臭・VOC除去" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											1台で除菌・脱臭・VOC除去
									</h3>
										<p className="features__description">
											学校、病院、研究所、老人病院、動物病院、禁煙ルーム、ジムなどの室内の除菌・脱臭・VOC除去します。
											また、放電管方式(自社特許イオンジェネレーター)のイオンモジュールを適用しているので、空気だけでなく、
											壁のような表面の除菌・脱臭も効果的です。
									</p>
										<h3 className="features__title">
											設置工事不要でコンパクトサイズなのでどこでも使えます
									</h3>
										<p className="feateres__description">
											A4用紙程度のコンパクトなサイズなので、様々な室内空間で活用が可能です。
											また、ポータブル型なので、別途設置工事は必要ありません。
									</p>
									</div>
								</div>
							</div>
						</section>
						<section className="article__section article__section03">
							<h2>商品情報</h2>
							<div className="productInfo__wrap row">
								<div className="col-12 col-md-12">
									<table className="productInfo__table table-default">
										<tbody>
											<tr>
												<th>メーカー名</th>
												<td>株式会社spe</td>
											</tr>
											<tr>
												<th>型番</th>
												<td>
													WT-002-A
											</td>

											</tr>
											<tr>
												<th>メーカーURL</th>
												<td><a href="https://www.h-ioncluster.com/" target="_blank" rel="noreferrer">https://www.h-ioncluster.com</a>/</td>
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
