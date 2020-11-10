import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="テレワークデスク" />
		<article className="l-article">
			<div className="article__container"><button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title">
					<h1>テレワークデスク</h1>
				</div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>テレワークスペース・家事スペース・お子様のお勉強スペースに活用できます。</p>
							<div className="row">
								<div className="col-12 col-md-4 text-center mini-mb">
									<img src={withPrefix("/images/recommend/10/10_001.jpg")} alt="テレワークデスク" />
								</div>
								<div className="col-12 col-md-4 text-center mini-mb">
									<img src={withPrefix("/images/recommend/10/10_002.jpg")} alt="テレワークデスク" />
								</div>
								<div className="col-12 col-md-4 text-center mini-mb">
									<img src={withPrefix("/images/recommend/10/10_003.jpg")} alt="テレワークデスク" />
								</div>
							</div>
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/10/10_002.jpg")} alt="サイズW1395mm×D450mm(キャビネットW450mm)" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">サイズW1395mm×D450mm<br />(キャビネットW450mm)</h3>
										<p className="features__description"> リビングのデッドスペースを活かせるサイズのデスクです。 </p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/10/10_001.jpg")} alt="サイズW1695mm×D450mm(キャビネットW450mm)" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">サイズW1695mm×D450mm<br />(キャビネットW450mm)</h3>
										<p className="features__description"> 大人の書斎にもできる大きめサイズのデスクで、自分時間を楽しめます。 </p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/10/10_003.jpg")} alt="サイズW1845mm×D450mm(キャビネットW300mm×2)" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">サイズW1845mm×D450mm<br />(キャビネットW300mm×2)</h3>
										<p className="features__description"> ロータイプなので、和室でも洋室でもどちらにも似合います。 </p>
									</div>
								</div>
							</div>
						</section>
						<section className="article__section article__section02">
							<h2>カラーバリエーション</h2>
							<div className="color__list row">
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/10/10_004.jpg")} alt="ニュージーパイン ホワイト" /></div>
									<p className="color__list__caption text-center">ニュージーパイン<br />ホワイト</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/10/10_005.jpg")} alt="ニュージーパイン ナチュラル" /></div>
									<p className="color__list__caption text-center">ニュージーパイン<br />ナチュラル</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/10/10_006.jpg")} alt="ニュージーパイン ミディアムブラウン" /></div>
									<p className="color__list__caption text-center">ニュージーパイン<br />ミディアムブラウン</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/10/10_007.jpg")} alt="オーク クリア" /></div>
									<p className="color__list__caption text-center">オーク<br />クリア</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/10/10_008.jpg")} alt="オーク ミディアム" /></div>
									<p className="color__list__caption text-center">オーク<br />ミディアム</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/10/10_009.jpg")} alt="オーク ダーク" /></div>
									<p className="color__list__caption text-center">オーク<br />ダーク</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/10/10_010.jpg")} alt="メープル クリア" /></div>
									<p className="color__list__caption text-center">メープル<br />クリア</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/10/10_011.jpg")} alt="ウォールナット クリア" /></div>
									<p className="color__list__caption text-center">ウォールナット<br />クリア</p>
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
												<td>ウッドワン</td>
											</tr>
											<tr>
												<th>メーカーURL</th>
												<td><a href="https://www.woodone.co.jp/" target="_blank" rel="noreferrer">https://www.woodone.co.jp</a>/</td>
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
