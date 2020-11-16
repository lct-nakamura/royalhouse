import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="キッチンカウンター収納" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title"><h1>キッチンカウンター収納</h1></div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>
								木の温もりがキッチン空間に美しく調和するカウンターは、無駄なくキッチンを広くすっきりさせてくれます。
					</p>
							<img src={withPrefix("/images/recommend/16/16_001.jpg")} alt="キッチンカウンター収納" />
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/16/16_002.jpg")} alt="引き戸（ソフトクローザー付き）" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">引き戸（ソフトクローザー付き）</h3>
										<p className="features__description">
											手前にテーブルがあっても開閉しやすい引き扉は、跳ね返りを防ぎ静かに開閉できるソフトクローザー機能付き（開閉時両方向に機能します）です。
								</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/16/16_003.jpg")} alt="オープン棚" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">オープン棚</h3>
										<p className="features__description">
											オープン棚にはテーブルまわりのモノも一時的に収納できるので、キッチン空間を広くすっきりさせられる便利なスペースとなります。
								</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/16/16_004.jpg")} alt="デザイン性" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">デザイン性</h3>
										<p className="features__description">
											オープン棚にはテーブルまわりのモノも一時的に収納できるので、キッチン
											空間を広くすっきりさせられる便利なスペースとなります。
								</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/16/16_005.jpg")} alt="フロート施工" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">フロート施工</h3>
										<p className="features__description">
											ボックス下はモノが置けるフリースペース。本体を浮かせたフロート施工のため、空間に圧迫感を感じさせません。
								</p>
									</div>
								</div>
							</div>

						</section>
						<section className="article__section article__section02">
							<h2>カラーバリエーション</h2>
							<div className="color__list row">
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/16/16_006_01.jpg")} alt="ベリッシュホワイト色" />
									</div>
									<p className="color__list__caption">ベリッシュホワイト色</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/16/16_006_02.jpg")} alt="ベリッシュメイプル色" />
									</div>
									<p className="color__list__caption">ベリッシュメイプル色</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/16/16_006_03.jpg")} alt="ベリッシュオーク色" />
									</div>
									<p className="color__list__caption">ベリッシュオーク色</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/16/16_007_01.jpg")} alt="ベリッシュチェリー色" />
									</div>
									<p className="color__list__caption">ベリッシュチェリー色</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/16/16_007_02.jpg")} alt="ベリッシュウォルナット色" />
									</div>
									<p className="color__list__caption">ベリッシュウォルナット色</p>
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
												<td>住林クレスト</td>
											</tr>
											<tr>
												<th>型番</th>
												<td>
												</td>

											</tr>
											<tr>
												<th>メーカーURL</th>
												<td><a href="https://www.sumirin-crest.co.jp/" target="_blank" rel="noreferrer">https://www.sumirin-crest.co.jp</a>/</td>
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
