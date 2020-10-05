import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="テレビドアホン" />
    <article className="l-article">
		<div className="article__container">
			<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
			<div className="article__title"><h1>テレビドアホン</h1></div>
			<div className="article__contents">
				<div className="container">
					<div className="article__mv">
						<h2 className="h2__title" id="JRS">1対1ドアホン</h2>
						<p>
							留守中でも「自動録画」で来訪者が確認できて安心です。
						</p>
						<div className="row">
							<div className="col-12 col-md-12 text-center"><img src={withPrefix("/images/recommend/25/25_001.jpg")} alt="1対1ドアホン" /></div>
						</div>
					</div>
					<section className="article__section article__section01">
						<h2>特徴</h2>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/25/25_003.jpg")} alt="奥行22mmのスリムな薄型デザイン" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										奥行22mmのスリムな薄型デザイン
									</h3>
									<p className="features__description">
										親機はスリムな薄型設計。業界最薄の奥行22mmで、さまざまなインテリアに調和します。
									</p>
								</div>
							</div>
						</div>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/25/25_004.jpg")} alt="玄関先がほぼ真横まで見える「パノラマワイド」" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										玄関先がほぼ真横まで見える「パノラマワイド」
									</h3>
									<p className="features__description">
										左右画角約170°のパノラマワイドで、玄関先を広く見渡すことができます。カメラのほぼ真横や小さなお子様までしっかりと確認できます。<br />
										インターホンで留守を確認する不審者も見逃しません。
									</p>
								</div>
							</div>
						</div>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/25/25_005.jpg")} alt="留守中は「自動録画」で安心&モニター付子機でも「手動録画」" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										留守中は「自動録画」で安心&モニター付子機でも「手動録画」
									</h3>
									<p className="features__description">
										来訪者の画像を1件あたり6画面、最大40件まで自動録画し、最大10件まで保護。ズーム画面とワイド画面の両方で録画が可能です。また親機、モニター付子機それぞれで「手動録画」も可能です。
									</p>
								</div>
							</div>
						</div>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/25/25_006.jpg")} alt="「ズーム&パンチルト」で見たいところをチェック" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										「ズーム&パンチルト」で見たいところをチェック
									</h3>
									<p className="features__description">
										ワイドとズームをワンタッチで切替可能。ズーム時に画面を上下左右に動かして、来訪者をしっかりと確認できます。
									</p>
								</div>
							</div>
						</div>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/25/25_007.jpg")} alt="レンズの映り込みを防ぐ「カバーレスレンズ」" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										レンズの映り込みを防ぐ「カバーレスレンズ」
									</h3>
									<p className="features__description">
										玄関子機には耐久性の高いカバーレスレンズを採用。光の乱反射によるレンズの映り込みや、結露による曇りを防ぎ、映像をクリアにします。
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
											<td>
												アイホン
											</td>
										</tr>
										<tr>
											<th>型番</th>
											<td>
												KJ-66 / JRS-1AE-T
											</td>

										</tr>
										<tr>
											<th>メーカーURL</th>
											<td><a href="https://www.aiphone.co.jp/" target="_blank">https://www.aiphone.co.jp/</a>/</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>

					<div className="article__mv">
						<h2 className="h2__title" id="24A">
							スマートフォン連携テレビドアホン WP-24A
						</h2>
						<p>
							スマートフォンと連動できるので、外出先からも安全確認ができるインターホンです。
						</p>
						<img src={withPrefix("/images/recommend/25/25_008.jpg")} alt="スマートフォン連携テレビドアホン WP-24A" />
					</div>
					<section className="article__section article__section01">
						<h2>特徴</h2>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/25/25_009.jpg")} alt="スマートフォンがあれば外出先でも安心" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										スマートフォンがあれば外出先でも安心
									</h3>
									<p className="features__description">
										自宅にいるときのように来訪者と通話できます。<br />
										ドアの鍵を遠隔で施錠・解錠します。<br />
										好きなとき、好きな場所で録画を確認できます。<br />
										自宅のインターホン（親機）を呼び出して家族とコミュニケーション可能。
									</p>
								</div>
							</div>
						</div>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/25/25_010.jpg")} alt="宅配ボックス連動録画で安心な生活" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										宅配ボックス連動録画で安心な生活
									</h3>
									<p className="features__description">
										宅配ボックスを開くと録画開始するため、防犯対策に最適です。<br />
										外出先のスマホへの宅配通知。
									</p>
								</div>
							</div>
						</div>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/25/25_011.jpg")} alt="モニター付きワイヤレス子機" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										モニター付きワイヤレス子機
									</h3>
									<p className="features__description">
										スマートフォンを持っていないご高齢者でも、ワイヤレス子機があればお手元で来訪者の対応ができます。
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
											<td>
												アイホン
											</td>
										</tr>
										<tr>
											<th>型番</th>
											<td>
												WP-24A
											</td>

										</tr>
										<tr>
											<th>メーカーURL</th>
											<td><a href="https://www.aiphone.co.jp/" target="_blank">https://www.aiphone.co.jp/</a>/</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>

					<div className="article__mv">
						<h2 className="h2__title" id="24B">
							スマートフォン連携テレビドアホン WP-24B
						</h2>
						<p>
							スマートフォンと連動できるので、外出先からも安全確認ができるインターホンです。
						</p>
						<img src={withPrefix("/images/recommend/25/25_012.jpg")} alt="スマートフォン連携テレビドアホン WP-24B" />
					</div>
					<section className="article__section article__section01">
						<h2>特徴</h2>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/25/25_009.jpg")} alt="スマートフォンがあれば外出先でも安心" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										スマートフォンがあれば外出先でも安心
									</h3>
									<p className="features__description">
										自宅にいるときのように来訪者と通話できます。<br />
										ドアの鍵を遠隔で施錠・解錠します。<br />
										好きなとき、好きな場所で録画を確認できます。<br />
										自宅のインターホン（親機）を呼び出して家族とコミュニケーション可能。
									</p>
								</div>
							</div>
						</div>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/25/25_010.jpg")} alt="宅配ボックス連動録画で安心な生活" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										宅配ボックス連動録画で安心な生活
									</h3>
									<p className="features__description">
										宅配ボックスを開くと録画開始するため、防犯対策に最適です。<br />
										外出先のスマホへの宅配通知。
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
											<td>
												アイホン
											</td>
										</tr>
										<tr>
											<th>型番</th>
											<td>
												WP-24B
											</td>

										</tr>
										<tr>
											<th>メーカーURL</th>
											<td><a href="https://www.aiphone.co.jp/" target="_blank">https://www.aiphone.co.jp</a>/</td>
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
