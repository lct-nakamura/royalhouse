import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="洗面化粧台" />
    <article className="l-article">
		<div className="article__container">
			<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
			<div className="article__title"><h1>洗面化粧台</h1></div>
			<div className="article__contents">
				<div className="container">
					<div className="article__mv">
						<p>
							お掃除簡単！キレイが長持ちする洗面化粧台です。</p>
						<div className="row">
							<div className="col-12 col-md-12"><img src={withPrefix("/images/recommend/29/29_001.jpg")} alt="トイレ" /></div>
						</div>
					</div>
					<section className="article__section article__section01">
						<h2>特徴</h2>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/29/29_002.jpg")} alt="キレイアップカウンター" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">キレイアップカウンター</h3>
									<p className="features__description">
										バックガードがミラー下まであり洗面ボウルと一体成形になったキレイアップカウンター。つなぎ目などの凹凸がなく、飛び散った水滴をサッと拭き取れます。しかも洗面容量は16Lの大容量です。
									</p>
								</div>
							</div>
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/29/29_003.jpg")} alt="キレイアップ水栓" /></div>
							</div>
							<div className="col-12 col-md-8">
								<h3 className="features__title">キレイアップ水栓</h3>
								<p className="feateures__description">
								上から水が出るキレイアップ水栓は、水栓まわりに水がたまらないのでお掃除簡単です。
								</p>
							</div>
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/29/29_004.jpg")} alt="新てまなし排水口" /></div>
							</div>
							<div className="col-12 col-md-8">
								<h3 className="features__title">新てまなし排水口</h3>
								<p className="feateures__description">
								お手入れ簡単仕様でキレイをキープします。
								</p>
							</div>
						</div>
					</section>
					<section className="article__section article__section02">
						<h2>カラーバリエーション</h2>
						<div className="color__list row">
							<div className="col-6 col-md-3">
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/29/29_005_01.jpg")} alt="クリエダーク" />
								</div>
								<p className="color__list__caption text-center">クリエダーク</p>
							</div>
							<div className="col-6 col-md-3">
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/29/29_005_02.jpg")} alt="クリエペール" />
								</div>
								<p className="color__list__caption text-center">クリエペール</p>
							</div>
							<div className="col-6 col-md-3">
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/29/29_005_03.jpg")} alt="クリエモカ" />
								</div>
								<p className="color__list__caption text-center">クリエモカ</p>
							</div>
							<div className="col-6 col-md-3">
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/29/29_005_04.jpg")} alt="ホワイト" />
								</div>
								<p className="color__list__caption text-center">ホワイト</p>
							</div>
							<div className="col-6 col-md-3">
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/29/29_005_05.jpg")} alt="プレーンネオホワイト" />
								</div>
								<p className="color__list__caption text-center">プレーンネオホワイト</p>
							</div>
							<div className="col-6 col-md-3">
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/29/29_005_06.jpg")} alt="ブラック" />
								</div>
								<p className="color__list__caption text-center">ブラック</p>
							</div>
							<div className="col-6 col-md-3">
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/29/29_005_07.jpg")} alt="スモーキーグレー" />
								</div>
								<p className="color__list__caption text-center">スモーキーグレー</p>
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
											<td><a href="https://www.lixil.co.jp/" target="_blank">https://www.lixil.co.jp</a>/</td>
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
