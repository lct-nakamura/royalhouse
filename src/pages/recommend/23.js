import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="インターホン・テレビドアホン" />
    <article className="l-article">
		<div class="article__container">
			<button class="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
			<div class="article__title"><h1>インターホン・テレビドアホン</h1></div>
			<div class="article__contents">
				<div class="container">
					<div class="article__mv">
						<h2 class="h2__title" id="SWD302KL">インターホン・テレビドアホン VL-SWD302KL</h2>
						<p>
							留守でも後から来訪者が確認できるので安心です。ワイヤレスカメラからは留守番のお子様の様子が確認できます。
						</p>
						<img src={withPrefix("/images/recommend/23/23_001.jpg")} alt="インターホン・テレビドアホン" />
					</div>
					<section class="article__section article__section01">
						<h2>特徴</h2>
						<div class="features__block row">
							<div class="col-12 col-md-4">
								<div class="features__block__image text-center">
									<img src={withPrefix("/images/recommend/23/23_002.jpg")} alt="さまざまなエクステリアに調和するデザインの玄関子機" />
									</div>
							</div>
							<div class="col-12 col-md-8">
								<div class="features__block__text">
									<h3 class="features__title">
										さまざまなエクステリアに調和するデザインの玄関子機
									</h3>
									<p class="features__description">
										清潔感のあるシルバーで、住宅の外観に馴染むデザイン。スタイリッシュな玄関まわりを演出します。
									</p>
								</div>
							</div>
						</div>
						<div class="features__block row">
							<div class="col-12 col-md-4">
								<div class="features__block__image text-center">
									<img src={withPrefix("/images/recommend/23/23_003.jpg")} alt="留守時も便利。来訪者をSDカード（別売）に動画録画できる" />
									</div>
							</div>
							<div class="col-12 col-md-8">
								<div class="features__block__text">
									<h3 class="features__title">
										留守時も便利。来訪者をSDカード（別売）に動画録画できる
									</h3>
									<p class="features__description">
										モニター親機は来訪者をSDカードに動画で保存することができます（１件約30秒、最大3,000件＊）。<br />
										＊SDカードの容量によって異なります。
									</p>
								</div>
							</div>
						</div>
						<div class="features__block row">
							<div class="col-12 col-md-4">
								<div class="features__block__image text-center">
									<img src={withPrefix("/images/recommend/23/23_004.jpg")} alt="電気錠に対応" />
									</div>
							</div>
							<div class="col-12 col-md-8">
								<div class="features__block__text">
									<h3 class="features__title">
										電気錠に対応
									</h3>
									<p class="features__description">
										JEM-A対応、A接点出力対応の2つのタイプの電気錠が接続可能。玄関先まで行かなくてもモニター親機、ワイヤレス子機から、かんたんにドアの解錠・施錠ができます。<br />
										●連携できる電気錠は1台のみです。A接点出力対応の電気錠は解錠のみ可。
									</p>
								</div>
							</div>
						</div>
						<div class="features__block row">
							<div class="col-12 col-md-4">
								<div class="features__block__image text-center">
									<img src={withPrefix("/images/recommend/23/23_005.jpg")} alt="屋外ワイヤレスカメラ（別売）に対応" />
									</div>
							</div>
							<div class="col-12 col-md-8">
								<div class="features__block__text">
									<h3 class="features__title">
										屋外ワイヤレスカメラ（別売）に対応
									</h3>
									<p class="features__description">
										屋外ワイヤレスカメラ（別売）の接続が可能。設定によりセンサーが人などを検知した場合、モニター親機やワイヤレスモニター子機で様子を見ることができ、最大約30秒の静止画（連続画像）で自動録画※2できます。
									</p>
								</div>
							</div>
						</div>
						<div class="features__block row">
							<div class="col-12 col-md-4">
								<div class="features__block__image text-center">
									<img src={withPrefix("/images/recommend/23/23_006.jpg")} alt="つながってあんしんホームセーフティー" />
									</div>
							</div>
							<div class="col-12 col-md-8">
								<div class="features__block__text">
									<h3 class="features__title">
										つながってあんしんホームセーフティー
									</h3>
									<p class="features__description">
										開閉センサーやドアセンサーとつなげて、窓・ドアが開いたことをドアホンで音や表示で確認。ワイヤレスカメラとつなげば、気になる場所を確認したり、見守ることができます。
									</p>
								</div>
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
											<td>パナソニック</td>
										</tr>
										<tr>
											<th>型番</th>
											<td>
												VL-SWD302KL
											</td>

										</tr>
										<tr>
											<th>メーカーURL</th>
											<td><a href="https://panasonic.jp/" target="_blank">https://panasonic.jp/</a>/</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>

					<div class="article__mv">
						<h2 class="h2__title" id="SE30XL">インターホン・テレビドアホン VL-SE30XL</h2>
						<p>
							留守でも後から来訪者が確認できるので安心です。
						</p>
						<img src={withPrefix("/images/recommend/23/23_007.jpg")} alt="インターホン・テレビドアホン" />
					</div>
					<section class="article__section article__section01">
						<h2>特徴</h2>
						<div class="features__block row">
							<div class="col-12 col-md-4">
								<div class="features__block__image text-center">
									<img src={withPrefix("/images/recommend/23/23_008.jpg")} alt="録画機能搭載" />
									</div>
							</div>
							<div class="col-12 col-md-8">
								<div class="features__block__text">
									<h3 class="features__title">
										録画機能搭載
									</h3>
									<p class="features__description">
										留守でも来訪者をあとから確認できる 録画機能を搭載しています。
									</p>
								</div>
							</div>
						</div>
						<div class="features__block row">
							<div class="col-12 col-md-12">
								<div class="features__block__text">
									<h3 class="features__title">
										増設モニター対応
									</h3>
									<p class="features__description">
										増設モニター対応で2階でも来客応対可能です。
									</p>
								</div>
							</div>
						</div>
						<div class="features__block row">
							<div class="col-12 col-md-12">
								<div class="features__block__text">
									<h3 class="features__title">
										夜でもカラーで来訪者確認
									</h3>
									<p class="features__description">
										夜でも安心のカラー確認ができます。
									</p>
								</div>
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
											<td>パナソニック</td>
										</tr>
										<tr>
											<th>型番</th>
											<td>
												VL-SE30XL
											</td>

										</tr>
										<tr>
											<th>メーカーURL</th>
											<td><a href="https://panasonic.jp/" target="_blank">https://panasonic.jp</a>/</td>
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
