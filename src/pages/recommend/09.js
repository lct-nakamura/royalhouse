import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="ユニットバス" />
		<article className="l-article">
			<div className="article__container"> <button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title">
					<h1>ユニットバス 楽浴楽座（風呂）</h1>
				</div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>手足を伸ばせて親子入浴も楽しめるゆったりサイズの浴槽で、家族のコミュニケーションがとれます。にこにこベンチはお年寄りの立ち座りを楽にしてくれます。
					</p>
							<img src={withPrefix("/images/recommend/09/09_001.jpg")} alt="楽浴楽座" />
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/09/09_002.jpg")} alt="にこにこベンチ" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">にこにこベンチ</h3>
										<p className="features__description">奥行420mmの余裕のサイズでくつろいで座れます。小学生からお年寄りまでが楽に立ち座りができる高さを設定。</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/09/09_003.jpg")} alt="ecoわはは浴槽" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">ecoわはは浴槽</h3>
										<p className="features__description"> 手足を伸ばせて、親子入浴も楽しめるゆったりサイズ。シンプルなフォルムの中に、人の動きへの配慮をつめこんだecoわはは浴槽。浸かる、跨ぐ、掴むといった動作にやさしい設計で、浴室の「楽　らく」をデザインします。</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/09/09_004.jpg")} alt="スリム排水口" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">スリム排水口</h3>
										<p className="features__description"> 汚れがたまりにくいフランジレス形状。内部のお手入れも簡単でサッと拭くだけで清潔に保てる新設計の排水トラップです。</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/09/09_005.jpg")} alt="換気暖房乾燥機" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">換気暖房乾燥機</h3>
										<p className="features__description"> 高濃度プラズマクラスター25000搭載しました。浮遊するカビ菌を除去する効果が高く、付着臭の低減にも効果があります。</p>
									</div>
								</div>
							</div>
						</section>
						<section className="article__section article__section02">
							<h2>カラーバリエーション</h2>
							<div className="color__list row mb">
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_006_09.jpg")} alt="ラインローズウッド" />
									</div>
									<p className="color__list__caption text-center">ラインローズウッド</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_006_10.jpg")} alt="トラバーチン" />
									</div>
									<p className="color__list__caption text-center">トラバーチン</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_006_11.jpg")} alt="スタックグレー" />
									</div>
									<p className="color__list__caption text-center">スタックグレー</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_006_13.jpg")} alt="ローレットグレー" />
									</div>
									<p className="color__list__caption text-center">ローレットグレー</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_006_12.jpg")} alt="フロストワーク" />
									</div>
									<p className="color__list__caption text-center">フロストワーク</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_006_14.jpg")} alt="エミルライン" />
									</div>
									<p className="color__list__caption text-center">エミルライン</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_006_15.jpg")} alt="グラスストライプ" />
									</div>
									<p className="color__list__caption text-center">グラスストライプ</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_006_01.jpg")} alt="シュロノキ" />
									</div>
									<p className="color__list__caption text-center">シュロノキ</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_006_02.jpg")} alt="ウォルナット" />
									</div>
									<p className="color__list__caption text-center">ウォルナット</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_006_03.jpg")} alt="ロマングレー" />
									</div>
									<p className="color__list__caption text-center">ロマングレー</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_006_04.jpg")} alt="ブラウンチーク" />
									</div>
									<p className="color__list__caption text-center">ブラウンチーク</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_006_05.jpg")} alt="アサギリ（サイド）" />
									</div>
									<p className="color__list__caption text-center">アサギリ（サイド）</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_006_07.jpg")} alt="アクロス（サイド）" />
									</div>
									<p className="color__list__caption text-center">アクロス（サイド）</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_006_06.jpg")} alt="グロスホワイト（サイド）" />
									</div>
									<p className="color__list__caption text-center">グロスホワイト（サイド）</p>
								</div>
							</div>
							<h3>床</h3>
							<div className="color__list row mb">
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_007_01.jpg")} alt="ミディアムベージュ" />
									</div>
									<p className="color__list__caption text-center">ミディアムベージュ</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_007_02.jpg")} alt="ディープブラウン" />
									</div>
									<p className="color__list__caption text-center">ディープブラウン</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_007_03.jpg")} alt="ディープグレー" />
									</div>
									<p className="color__list__caption text-center">ディープグレー</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_007_04.jpg")} alt="アッシュホワイト" />
									</div>
									<p className="color__list__caption text-center">アッシュホワイト</p>
								</div>
							</div>
							<h3>浴槽</h3>
							<div className="color__list row">
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_008_01.jpg")} alt="キラットブラック" />
									</div>
									<p className="color__list__caption text-center">キラットブラック</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_008_02.jpg")} alt="キラットブラウン" />
									</div>
									<p className="color__list__caption text-center">キラットブラウン</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_008_03.jpg")} alt="キラットベージュ" />
									</div>
									<p className="color__list__caption text-center">キラットベージュ</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_008_04.jpg")} alt="ホワイト" />
									</div>
									<p className="color__list__caption text-center">ホワイト</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_008_05.jpg")} alt="ミカブラック" />
									</div>
									<p className="color__list__caption text-center">ミカブラック</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_008_06.jpg")} alt="ミカブラウン" />
									</div>
									<p className="color__list__caption text-center">ミカブラウン</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_008_07.jpg")} alt="ミカベージュ" />
									</div>
									<p className="color__list__caption text-center">ミカベージュ</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_008_08.jpg")} alt="ひのき" />
									</div>
									<p className="color__list__caption text-center">ひのき</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_008_09.jpg")} alt="グレインブラック" />
									</div>
									<p className="color__list__caption text-center">グレインブラック</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_008_10.jpg")} alt="グレインホワイト" />
									</div>
									<p className="color__list__caption text-center">グレインホワイト</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_008_11.jpg")} alt="ファインホワイト" />
									</div>
									<p className="color__list__caption text-center">ファインホワイト</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_008_12.jpg")} alt="ファインベージュ" />
									</div>
									<p className="color__list__caption text-center">ファインベージュ</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_008_13.jpg")} alt="フォレストグリーン" />
									</div>
									<p className="color__list__caption text-center">フォレストグリーン</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/09/09_008_14.jpg")} alt="コーラルピンク" />
									</div>
									<p className="color__list__caption text-center">コーラルピンク</p>
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
												<td>積水ホームテクノ</td>
											</tr>
											<tr>
												<th>型番</th>
												<td></td>
											</tr>
											<tr>
												<th>メーカーURL</th>
												<td><a href="http://www.rakuyokurakuza.jp/" target="_blank" rel="noreferrer">http://www.rakuyokurakuza.jp</a>/</td>
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
