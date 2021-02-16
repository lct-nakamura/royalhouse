import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="リビング収納" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title"><h1>リビング収納</h1></div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>
								木目が美しくインテリアに馴染むので、見た目も美しく、大容量で機能的なリビング収納です。
						</p>
							<img src={withPrefix("/images/recommend/17/17_001.jpg")} alt="リビング収納" />
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/17/17_002.jpg")} alt="スライド棚" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											スライド棚
									</h3>
										<p className="features__description">
											スライド棚じゃソフトクローザー機能付き。スライドして棚が広くなり、お出掛け前にカバンなどを置いて整理する際に便利。前框を集成材で仕上げたインテリア性の高いデザインです。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/17/17_003.jpg")} alt="本棚" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											本棚
									</h3>
										<p className="features__description">
											本棚は前後2列段差を設け、手前と奥で本の整理がしやすい仕様になっています。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/17/17_004.jpg")} alt="本棚仕切り板" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											本棚仕切り板
									</h3>
										<p className="features__description">
											仕切り板はブックスタンドとして。左右へのスライドも可能です。集成材を使用したこだわりのデザインです。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/17/17_005.jpg")} alt="地板レス仕様" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">地板レス仕様</h3>
										<p className="features__description">
											インナーユニットタイプはボックスの地板がないため、床に直接カゴや整理箱が置けるため便利です。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/17/17_006.jpg")} alt="パイプ棚" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">パイプ棚</h3>
										<p className="features__description">
											パイプ棚には外出用の上着やカバンなどが手軽に収納できます。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/17/17_007.jpg")} alt="デザイン性・安全性" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">デザイン性・安全性</h3>
										<p className="features__description">
											扉とカウンターの木口は無垢で仕上げたこだわりのデザイン。角部は大きな丸みを持たせた安全性に配慮した形状です。
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
										<img src={withPrefix("/images/recommend/17/17_008_01.jpg")} alt="ベリッシュホワイト柄" />
									</div>
									<p className="color__list__caption">ベリッシュホワイト柄</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/17/17_008_02.jpg")} alt="ベリッシュメイプル色" />
									</div>
									<p className="color__list__caption">ベリッシュメイプル色</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/17/17_008_03.jpg")} alt="ベリッシュオーク色" />
									</div>
									<p className="color__list__caption">ベリッシュオーク色</p>
								</div>

								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/17/17_009_01.jpg")} alt="ベリッシュチェリー色" />
									</div>
									<p className="color__list__caption">ベリッシュチェリー色</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/17/17_009_02.jpg")} alt="ベリッシュウォルナット色" />
									</div>
									<p className="color__list__caption">ベリッシュウォルナット色</p>
								</div>
							</div>
							<h3>取っ手</h3>
							<div className="color__list row mb">
								<div className="col-6 col-md-3">
									<h4 className="mini-mb">標準取っ手</h4>
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/17/17_010.jpg")} alt="標準取っ手ラウンド型シルバー" />
									</div>
									<p className="color__list__caption">ラウンド型シルバー</p>
								</div>
							</div>
							<div className="color__list row mb">
								<div className="col-12 col-md-12">
									<h4 className="mini-mb">オプション取っ手</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/17/17_011_01.jpg")} alt="ラウンド型クローム" />
									</div>
									<p className="color__list__caption">ラウンド型クローム</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/17/17_011_02.jpg")} alt="ストレート小判型ステンレスヘアライン" />
									</div>
									<p className="color__list__caption">ストレート小判型ステンレスヘアライン</p>
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
