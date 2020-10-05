import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="集成カウンター" />
    <article className="l-article">
		<div className="article__container">
			<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
			<div className="article__title"><h1>集成カウンター</h1></div>
			<div className="article__contents">
				<div className="container">
					<div className="article__mv">
						<p>
							リーズナブルで飽きのこない美しい仕上がりの集成カウンターです。
						</p>
						<img src={withPrefix("/images/recommend/33/33_001.jpg")} alt="集成カウンター" />
					</div>
					<section className="article__section article__section01">
						<h2>特徴</h2>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center">
									<img src={withPrefix("/images/recommend/33/33_002.jpg")} alt="リーズナブルで美しい集成カウンター" />
								</div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										リーズナブルで美しい集成カウンター
									</h3>
									<p className="features__description">
										材料の節・割れを避け、含水率を調整した集成材なので一枚の天然木より品質が安定しています。集成材の機能性・安定性がそのまま美しい仕上がりとなり、インテリアにしっくり馴染みます。
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
										<img src={withPrefix("/images/recommend/33/33_002_01.jpg")} alt="ベリッシュメイプル色" />
									</div>
									<p className="color__list__caption">ベリッシュメイプル色</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/33/33_002_02.jpg")} alt="ベリッシュオーク色" />
									</div>
									<p className="color__list__caption">ベリッシュオーク色</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/33/33_002_03.jpg")} alt="ベリッシュウォルナット色" />
									</div>
									<p className="color__list__caption">ベリッシュウォルナット色</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/33/33_002_04.jpg")} alt="ベリッシュチェリー色" />
									</div>
									<p className="color__list__caption">ベリッシュチェリー色</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/33/33_002_05.jpg")} alt="ベリッシュホワイト柄" />
									</div>
									<p className="color__list__caption">ベリッシュホワイト柄</p>
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
										<td>住友林業クレスト株式会社</td>
										</tr>
										<tr>
										<th>型番</th>
										<td>
										</td>
										</tr>
										<tr>
										<th>メーカーURL</th>
										<td><a href="https://www.sumirin-crest.co.jp/" target="_blank">https://www.sumirin-crest.co.jp</a>/</td>
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
