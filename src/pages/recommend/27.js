import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="システムキッチン" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title"><h1>システムキッチン</h1></div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>
								機能的で使い勝手の良いキッチンは、お部屋のインテリアに合わせたコーディネートができ、心地よいキッチンを実現しました。
						</p>
							<img src={withPrefix("/images/recommend/27/27_001.jpg")} alt="システムキッチン" />
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/27/27_002.jpg")} alt="インテリア性、耐久性に優れた人造大理石" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											インテリア性、耐久性に優れた人造大理石
									</h3>
										<p className="features__description">
											ワークトップは耐久性にも優れた人造大理石は採用。インテリアに合わせたコーディネートが可能です。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/27/27_003.jpg")} alt="お手入れしやすいシンク" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											お手入れしやすいシンク
									</h3>
										<p className="features__description">
											シンクの中のお手入れもシンクまわりの片付けも、スキッとはかどるシンクです。独自の底面形状と段差のコンビネーションで、シンクの奥の段差に向けて汚れやゴミをスムーズに洗い流せます。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/27/27_004.jpg")} alt="いちばん使う道具は取り出しやすく" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											いちばん使う道具は取り出しやすく
									</h3>
										<p className="features__description">
											扉裏のポケットはいちばんよく使う道具は立てて収納できるので家事効率を上げてくれます。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row mb">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/27/27_005.jpg")} alt="静かに閉まる引き出し" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">静かに閉まる引き出し</h3>
										<p className="features__description">
											扉を勢いよく閉めても、引き出しが静かに閉まるソフトモーションレールを採用。スーッと静かに閉まる高品位なレールです。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<h3 className="feateures__title col-12">IHヒーター</h3>
								<div className="col-6 col-md-4 mini-mb">
									<div className="features__block__text">
										<h4 className="mini-mb">HIヒーター</h4>
										<p className="features__description">
											<img src={withPrefix("/images/recommend/27/27_006.jpg")} alt="IHヒーター" />
										</p>
										<p className="features__description">トップ：ブラック　フェイス：シルバー　レンジフード：連動なし　W02/2口IH＋ラジエント　スタンダードタイプ（無水両面焼きグリル）日立グローバルライフソリューションズ製</p>
									</div>
								</div>
								<div className="col-6 col-md-4">
									<div className="features__block__text">
										<h4 className="mini-mb">水栓金具</h4>
										<p className="features__description">
											<img src={withPrefix("/images/recommend/27/27_007.jpg")} alt="IHヒーター" />
										</p>
										<p className="features__description">
											P26/オールインワン浄水栓
											AJタイプ・エコハンドル
											LIXIL製
									</p>
									</div>
								</div>
								<div className="col-6 col-md-4">
									<div className="features__block__text">
										<h4 className="mini-mb">コンロ用キャビネット</h4>
									</div>
									<img src={withPrefix("/images/recommend/27/27_008.jpg")} alt="コンロ用キャビネット" />
									<p className="features__description">スライドストッカー、アシストポケット付き（シェルフなし）</p>
								</div>
								<div className="col-6 col-md-4">
									<h4 className="mini-mb">調理台用キャビネット</h4>
									<img src={withPrefix("/images/recommend/27/27_009.jpg")} alt="調理台用キャビネット" />
									<p className="features__description">スライドストッカー　３段引き出し</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="features__block__text">
										<h4 className="mini-mb">扉のお手入れ楽々</h4>
										<p className="features__description">
											<img src={withPrefix("/images/recommend/27/27_010.jpg")} alt="IHヒーター" />
										</p>
									</div>
									<p className="features__description">
										汚れが拭き取りやすく、お手入れが簡単な扉です。<br />
									※長くお使いいただくために、柔らかい布でお手入れしてください。
								</p>
								</div>
							</div>
						</section>
						<section className="article__section article__section02">
							<h2>カラーバリエーション</h2>
							<div className="color__list row">
								<div className="col-12">
									<h4 className="mini-mb">ABシリーズ</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_011_01.jpg")} alt="ソリッドレッド" />
									</div>
									<p className="eatures__description text-center">ソリッドレッド</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_011_02.jpg")} alt="ソリッドイエロー" />
									</div>
									<p className="eatures__description text-center">ソリッドイエロー</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_011_03.jpg")} alt="ソリッドホワイト" />
									</div>
									<p className="eatures__description text-center">ソリッドホワイト</p>
								</div>
								<div className="col-12">
									<h4 className="mini-mb">ACシリーズ</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_011_04.jpg")} alt="ペールグリーン" />
									</div>
									<p className="eatures__description text-center">ペールグリーン</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_011_05.jpg")} alt="ペールブルー" />
									</div>
									<p className="eatures__description text-center">ペールブルー</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_011_06.jpg")} alt="ペールピンク" />
									</div>
									<p className="eatures__description text-center">ペールピンク</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_011_07.jpg")} alt="ペールホワイト" />
									</div>
									<p className="eatures__description text-center">ペールホワイト</p>
								</div>
								<div className="col-12">
									<h4 className="mini-mb">BBシリーズ</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_012_01.jpg")} alt="クリエダーク" />
									</div>
									<p className="eatures__description text-center">クリエダーク</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_012_02.jpg")} alt="クリエクリエモカ" />
									</div>
									<p className="eatures__description text-center">クリエクリエモカ</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_012_03.jpg")} alt="クリエラスク" />
									</div>
									<p className="eatures__description text-center">クリエラスク</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_012_04.jpg")} alt="クリエペール" />
									</div>
									<p className="eatures__description text-center">クリエペール</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_012_05.jpg")} alt="クリエアイボリー" />
									</div>
									<p className="eatures__description text-center">クリエアイボリー</p>
								</div>
								<div className="col-12 col-md-12 mini-mb">
									<h3>取っ手</h3>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_013_01.jpg")} alt="QシルバーラインQ" />
									</div>
									<p className="color__list__caption">Q シルバーラインQ</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_013_02.jpg")} alt="UブラックラインU" />
									</div>
									<p className="color__list__caption">U ブラックラインU</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_013_03.jpg")} alt="VシャインニッケルV" />
									</div>
									<p className="color__list__caption">V シャインニッケルV</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_013_04.jpg")} alt="KシルバーロングハンドルK" />
									</div>
									<p className="color__list__caption">K シルバーロングハンドルK</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_013_05.jpg")} alt="HブラックミドルハンドルH" />
									</div>
									<p className="color__list__caption">H ブラックミドルハンドルH</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_013_06.jpg")} alt="GシャインニッケルハンドルG" />
									</div>
									<p className="color__list__caption">G シャインニッケルハンドルG</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/27/27_013_07.jpg")} alt="FシルバーミドルハンドルF" />
									</div>
									<p className="color__list__caption">F シルバーミドルハンドルF</p>
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
												<td>LIXIL</td>
											</tr>
											<tr>
												<th>型番</th>
												<td>
												</td>

											</tr>
											<tr>
												<th>メーカーURL</th>
												<td><a href="https://www.lixil.co.jp/" target="_blank" rel="noreferrer">https://www.lixil.co.jp</a>/</td>
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
