import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="格子スクリーン" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title"><h1>格子スクリーン</h1></div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>
								圧迫感なく、空間と空間をソフトに仕切り、全体を調和させる格子スクリーン。インテリアを邪魔せずにプライベートを確保できます。
						</p>
							<div className="row">
								<div className="col-12 col-md-6 mini-mb">
									<img src={withPrefix("/images/recommend/14/14_001.jpg")} alt="格子スクリーン" />
								</div>
								<div className="col-12 col-md-6">
									<img src={withPrefix("/images/recommend/14/14_002.jpg")} alt="格子スクリーン" />
								</div>
							</div>
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/14/14_003.jpg")} alt="キッチンや階段、和室など用途は多彩" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											キッチンや階段、和室など用途は多彩

									</h3>
										<p className="features__description">
											キッチンや階段、和室など用途は多彩。やさしく光を取り込みながら空間を広々と演出します。ブラインドとしての機能も果たします。
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
										<img src={withPrefix("/images/recommend/14/14_004_01.jpg")} alt="ベリッシュホワイト色" />
									</div>
									<p className="color__list__caption">ベリッシュホワイト色</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/14/14_004_02.jpg")} alt="ベリッシュメイプル色" />
									</div>
									<p className="color__list__caption">ベリッシュメイプル色</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/14/14_004_03.jpg")} alt="ベリッシュオーク色" />
									</div>
									<p className="color__list__caption">ベリッシュオーク色</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/14/14_004_05.jpg")} alt="ベリッシュチェリー色" />
									</div>
									<p className="color__list__caption">ベリッシュチェリー色</p>
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
												<td></td>

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
