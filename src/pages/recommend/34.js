import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="塗る遮音材" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title"><h1>"塗る"遮音材</h1></div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>
								塗るだけで遮音性能を発揮する、ボンドタイプの新しい遮音材です。
					</p>
							<img src={withPrefix("/images/recommend/34/34_001.jpg")} alt="集成カウンター" />
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/34/34_002.jpg")} alt="リーズナブルで美しい集成カウンター" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											壁・床・天井の遮音ならおまかせ
								</h3>
										<p className="features__description mb">
											グリーングルーは2枚のボード（石こうボード、合板など）の間にサンドイッチすることによってボードを伝わる振動を抑え、壁、床、天井から伝わる音を小さくすることができる、塗布タイプの新しい遮音材料です。
								</p>
									</div>
									<div className="features__block__text">
										<h3 className="features__title">
											塗布後､ゴム状に固まり音の伝わりを防ぐ
								</h3>
										<p className="features__description mb">
											塗布後、時間経過とともに粘弾性が高まり、高い振動吸収特性により壁や床を伝わる音を低減します。
											従来遮音が難しかった低周波領域の音にも効果があります。
								</p>
									</div>
									<div className="features__block__text">
										<h3 className="features__title">
											コストパフォーマンスに優れる
								</h3>
										<p className="features__description mb">
											一度施工すれば、その効果はほぼ半永久的に続きます。
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
												<td>マグ・イゾベール</td>
											</tr>
											<tr>
												<th>型番</th>
												<td>
												</td>

											</tr>
											<tr>
												<th>メーカーURL</th>
												<td><a href="https://www.isover.co.jp/products/greenglue/" target="_blank" rel="noreferrer">https://www.isover.co.jp/products/greenglue</a>/</td>
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
