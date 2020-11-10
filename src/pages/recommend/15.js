import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="ウォールニッチ（連絡ポスト）" />
		<article className="l-article">
			<div class="article__container">
				<button class="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div class="article__title"><h1>ニッチ収納（連絡ポスト）</h1></div>
				<div class="article__contents">
					<div class="container">
						<div class="article__mv">
							<p>
								お家で過ごす時間が増えた今、より家族とのコミュニケーションが楽しく円滑にできるコミュニケーションポストです
					</p>
							<img src={withPrefix("/images/recommend/15/15_001.jpg")} alt="ウォールニッチ（連絡ポスト）" />
						</div>
						<section class="article__section article__section01">
							<h2>特徴</h2>
							<div class="features__block row">
								<div class="col-12 col-md-4">
									<div class="features__block__image text-center">
										<img src={withPrefix("/images/recommend/15/15_002.jpg")} alt="回転する幕板" />
									</div>
								</div>
								<div class="col-12 col-md-8">
									<div class="features__block__text">
										<h3 class="features__title">回転する幕板</h3>
										<p class="features__description">
											回転する幕板は表、裏で色が別れ、コミュニケーションの目印になります。
								</p>
									</div>
								</div>
							</div>
							<div class="features__block row">
								<div class="col-12 col-md-4">
									<div class="features__block__image text-center">
										<img src={withPrefix("/images/recommend/15/15_003.jpg")} alt="マグネットが使える" />
									</div>
								</div>
								<div class="col-12 col-md-8">
									<div class="features__block__text">
										<h3 class="features__title">マグネットが使える</h3>
										<p class="features__description">
											マグネット製品が吸着するボードのため、連絡メモが簡単に貼れます。<br />
									（マグネットウッド２本同梱）
								</p>
									</div>
								</div>
							</div>
							<div class="features__block row">
								<div class="col-12 col-md-4">
									<div class="features__block__image text-center">
										<img src={withPrefix("/images/recommend/15/15_004.jpg")} alt="A４サイズが置ける" />
									</div>
								</div>
								<div class="col-12 col-md-8">
									<div class="features__block__text">
										<h3 class="features__title">A４サイズが置ける</h3>
										<p class="features__description">
											ボックスサイズは、A4サイズが置ける横幅と広さがあります。
								</p>
									</div>
								</div>
							</div>
							<div class="features__block row">
								<div class="col-12 col-md-4">
									<div class="features__block__image text-center">
										<img src={withPrefix("/images/recommend/15/15_005.jpg")} alt="安全性" />
									</div>
								</div>
								<div class="col-12 col-md-8">
									<div class="features__block__text">
										<h3 class="features__title">安全性</h3>
										<p class="features__description">
											回転する幕板の角部は、安全を考慮してR形状にしました。
								</p>
									</div>
								</div>
							</div>

						</section>
						<section class="article__section article__section02">
							<h2>カラーバリエーション</h2>
							<h3>ボックス</h3>
							<div class="color__list row mb">
								<div class="col-6 col-md-3">
									<div class="color__list__image text-center">
										<img src={withPrefix("/images/recommend/15/15_006.jpg")} alt="WF：WFホワイト" />
									</div>
									<p class="color__list__caption　text-center">WF：WFホワイト</p>
								</div>
							</div>
							<h3>幕板</h3>
							<div class="color__list row">
								<div class="col-6 col-md-3">
									<div class="color__list__image text-center">
										<img src={withPrefix("/images/recommend/15/15_007_01.jpg")} alt="ベリッシュメイプル色" />
									</div>
									<p class="color__list__caption">ベリッシュメイプル色</p>
								</div>
								<div class="col-6 col-md-3">
									<div class="color__list__image text-center">
										<img src={withPrefix("/images/recommend/15/15_007_02.jpg")} alt="ベリッシュオーク色" />
									</div>
									<p class="color__list__caption">ベリッシュオーク色</p>
								</div>
								<div class="col-6 col-md-3">
									<div class="color__list__image text-center">
										<img src={withPrefix("/images/recommend/15/15_007_03.jpg")} alt="ベリッシュチェリー色" />
									</div>
									<p class="color__list__caption">ベリッシュチェリー色</p>
								</div>
								<div class="col-6 col-md-3">
									<div class="color__list__image text-center">
										<img src={withPrefix("/images/recommend/15/15_007_04.jpg")} alt="ベリッシュウォルナット色" />
									</div>
									<p class="color__list__caption">ベリッシュウォルナット色</p>
								</div>
							</div>
						</section>
						<section class="article__section article__section03">
							<h2>商品情報</h2>
							<div class="productInfo__wrap row">
								<div class="col-12 col-md-12">
									<table class="productInfo__table table-default">
										<tbody>
											<tr>
												<th>メーカー名</th>
												<td>住林クレスト</td>
											</tr>
											<tr>
												<th>型番</th>
												<td>
													２段タイプ　SBPS-2<br />
										１段タイプ　SBPS-1
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
