import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="手洗いカウンター" />
    <article className="l-article">
		<div class="article__container">
			<button class="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
			<div class="article__title"><h1>手洗いカウンター</h1></div>
			<div class="article__contents">
				<div class="container">
				<div class="article__mv">
					<p>
						玄関近くに設置する手洗いカウンターで、部屋に入る前に手洗い、うがいができます。コロナ禍でも、菌を家の中に持ち込まずに済むので安心です。
					</p>
						<img src={withPrefix("/images/recommend/19/19_001.jpg")} alt="手洗いカウンター" />
				</div>
				<section class="article__section article__section01">
					<h2>特徴</h2>
					<div class="features__block row">
						<div class="col-12 col-md-4">
							<div class="features__block__image text-center"><img src={withPrefix("/images/recommend/19/19_002.jpg")} alt="選べるカウンター" /></div>
						</div>
						<div class="col-12 col-md-8">
							<div class="features__block__text">
								<h3 class="features__title">選べるカウンター</h3>
								<p class="features__description">
									水はねしても安心なお手入れのしやすいメラミン板と耐水塗装を施した無垢集成材から選択することができます。
								</p>
							</div>
						</div>
					</div>
					<div class="features__block row">
						<div class="col-12 col-md-4">
							<div class="features__block__image text-center"><img src={withPrefix("/images/recommend/19/19_003.jpg")} alt="扉・取手" /></div>
						</div>
						<div class="col-12 col-md-8">
							<div class="features__block__text">
								<h3 class="features__title">
									扉・取手
								</h3>
								<p class="features__description">
									ゆっくりしまるソフトクローザー付きの扉で安全にお使い頂けます。開け閉めしやすい幅広の取っ手を採用しています。
								</p>
							</div>
						</div>
					</div>
				</section>
				<section class="article__section article__section02">
					<h2>カラーバリエーション</h2>
					<div class="color__list row">
						<div class="col-6 col-md-3">
							<div class="color__list__image text-center">
								<img src={withPrefix("/images/recommend/19/19_004_01.jpg")} alt="ベリッシュホワイト色" />
							</div>
							<p class="color__list__caption">ベリッシュホワイト色</p>
						</div>
						<div class="col-6 col-md-3">
							<div class="color__list__image text-center">
								<img src={withPrefix("/images/recommend/19/19_004_02.jpg")} alt="ベリッシュメイプル色" />
							</div>
							<p class="color__list__caption">ベリッシュメイプル色</p>
						</div>
						<div class="col-6 col-md-3">
							<div class="color__list__image text-center">
								<img src={withPrefix("/images/recommend/19/19_004_03.jpg")} alt="ベリッシュオーク色" />
							</div>
							<p class="color__list__caption">ベリッシュオーク色</p>
						</div>
						<div class="col-6 col-md-3">
							<div class="color__list__image text-center">
								<img src={withPrefix("/images/recommend/19/19_004_04.jpg")} alt="ベリッシュチェリー色" />
							</div>
							<p class="color__list__caption">ベリッシュチェリー色</p>
						</div>
						<div class="col-6 col-md-3">
							<div class="color__list__image text-center">
								<img src={withPrefix("/images/recommend/19/19_004_05.jpg")} alt="ベリッシュウォルナット色" />
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
