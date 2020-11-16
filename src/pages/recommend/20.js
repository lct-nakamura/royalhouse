import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="ドア" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title"><h1>ベリッシュCC（建具）</h1></div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>
								すっきりしたデザインが特徴のカラーバリエーション豊富な室内ドアです。
						</p>
							<img src={withPrefix("/images/recommend/20/20_001.jpg")} alt="ドア" />
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/20/20_002.jpg")} alt="すっきりしたデザイン" /></div>
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/20/20_003.jpg")} alt="ジャストカット" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											すっきりしたデザイン
									</h3>
										<p className="features__description">
											従来の縦枠24mmから15mmに変更し、すっきりしたデザインが特徴です。
									</p>
										<h3 className="features__title">
											ジャストカット
									</h3>
										<p className="features__description">
											床の先張り施工が可能です。枠のカットや廃材処理など施工にかかる手間や負担を軽減できます。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image features__block__image__smallL text-center"><img src={withPrefix("/images/recommend/20/20_004.jpg")} alt="レバーハンドル" /></div>
									<div className="features__block__image features__block__image__smallR text-center"><img src={withPrefix("/images/recommend/20/20_005.jpg")} alt="レバーハンドル" /></div>
									<div className="features__block__image features__block__image__smallL text-center"><img src={withPrefix("/images/recommend/20/20_006.jpg")} alt="レバーハンドル" /></div>
									<div className="features__block__image features__block__image__smallR text-center"><img src={withPrefix("/images/recommend/20/20_007.jpg")} alt="レバーハンドル" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											レバーハンドル
									</h3>
										<p className="features__description">
											丸座・ストレートタイプのシンプルなデザインです。ハンドルの色、錠の種類を変更できます。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/20/20_008.jpg")} alt="採光部" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											採光部
									</h3>
										<p className="features__description">
											強度が高く、割れても破片が飛散しない樹脂板を採用しています。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image features__block features__block__image__center text-center"><img src={withPrefix("/images/recommend/20/20_010.jpg")} alt="明かり窓（スコープ付きドア）" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											明かり窓（スコープ付きドア）
									</h3>
										<p className="features__description">
											明かりの点灯確認ができます。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image features__block text-center"><img src={withPrefix("/images/recommend/20/20_012.jpg")} alt="埋込み式クローザー" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											埋込み式クローザー
									</h3>
										<p className="features__description">
											ドアを閉じると本体が外側から見えない埋込み式のクローザーです。扉を閉める直前にゆっくりと扉を引き込みます。
									</p>
									</div>
								</div>
							</div>
						</section>
						<section className="article__section article__section02">
							<h2>カラーバリエーション</h2>
							<h3>扉カラーバリエーション</h3>
							<div className="color__list row mb">
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/20/20_014_01.jpg")} alt="オークホワイト柄" />
									</div>
									<p className="color__list__caption">オークホワイト柄</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/20/20_014_02.jpg")} alt="サクラ柄" />
									</div>
									<p className="color__list__caption">サクラ柄</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/20/20_014_03.jpg")} alt="カバ柄" />
									</div>
									<p className="color__list__caption">カバ柄</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/20/20_014_04.jpg")} alt="グレイクリ柄" />
									</div>
									<p className="color__list__caption">グレイクリ柄</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/20/20_014_05.jpg")} alt="ナット柄" />
									</div>
									<p className="color__list__caption">ナット柄</p>
								</div>
							</div>
							<h3>枠カラーバリエーション</h3>
							<div className="color__list row">
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/20/20_015.jpg")} alt="ホワイト（単色）" />
									</div>
									<p className="color__list__caption">ホワイト（単色）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/20/20_016_01.jpg")} alt="グレイクリ柄" />
									</div>
									<p className="color__list__caption">グレイクリ柄</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/20/20_016_02.jpg")} alt="ホワイト（単色）" />
									</div>
									<p className="color__list__caption">ホワイト（単色）</p>
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
													クローザーありセット　DGAPK00SAD□73H◆■◇5A（R/L）<br />
											クローザーなしセット　DGAPK00SA□73H◆■◇5A（R/L）
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
