import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="照明" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title"><h1>照明</h1></div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>
								プランに合わせてトータルコーディネート可能な照明。
						</p>
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-12">
									<div className="features__block__text">
										<h3 className="features__title">
											イーサイズ　コンテンポラリー
									</h3>
									</div>
								</div>
								<div className="col-12 col-md-12">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/22/22_001.jpg")} alt="イーサイズ　コンテンポラリー" />
									</div>
								</div>

								<div className="features__block row mb">
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">ダイニング</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_002.jpg")} alt="ダイニング" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">主寝室</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_003.jpg")} alt="主寝室" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">ダウンライト</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_004.jpg")} alt="ダウンライト" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">洋室</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_005.jpg")} alt="洋室" />
										</div>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-12">
									<div className="features__block__text">
										<h3 className="features__title">
											イーサイズ　和モダン
									</h3>
									</div>
								</div>
								<div className="col-12 col-md-12">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/22/22_006.jpg")} alt="イーサイズ　和モダン" />
									</div>
								</div>

								<div className="features__block row mb">
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">ダイニング</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_007.jpg")} alt="ダイニング" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">主寝室</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_008.jpg")} alt="主寝室" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">ダウンライト</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_009.jpg")} alt="ダウンライト" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">洋室</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_010.jpg")} alt="洋室" />
										</div>
									</div>

								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-12">
									<div className="features__block__text">
										<h3 className="features__title">
											イーサイズ　シンプル
									</h3>
									</div>
								</div>
								<div className="col-12 col-md-12">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/22/22_011.jpg")} alt="イーサイズ　シンプル" />
									</div>
								</div>

								<div className="features__block row mb">
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">ダイニング</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_012.jpg")} alt="ダイニング" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">主寝室</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_013.jpg")} alt="主寝室" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">ダウンライト</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_014.jpg")} alt="ダウンライト" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">洋室</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_015.jpg")} alt="洋室" />
										</div>
									</div>

								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-12">
									<div className="features__block__text">
										<h3 className="features__title">
											イーサイズ　西海岸
									</h3>
									</div>
								</div>
								<div className="col-12 col-md-12">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/22/22_016.jpg")} alt="イーサイズ　西海岸" />
									</div>
								</div>

								<div className="features__block row mb">
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">ダイニング</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_017.jpg")} alt="ダイニング" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">主寝室</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_018.jpg")} alt="主寝室" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">ダウンライト</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_019.jpg")} alt="ダウンライト" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">洋室</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_020.jpg")} alt="洋室" />
										</div>
									</div>

								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-12">
									<div className="features__block__text">
										<h3 className="features__title">
											イーサイズ　北欧
									</h3>
									</div>
								</div>
								<div className="col-12 col-md-12">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/22/22_021.jpg")} alt="イーサイズ　北欧" />
									</div>
								</div>
								<div className="features__block row mb">
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">ダイニング</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_022.jpg")} alt="ダイニング" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">主寝室</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_023.jpg")} alt="主寝室" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">ダウンライト</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_024.jpg")} alt="ダウンライト" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">洋室</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_025.jpg")} alt="洋室" />
										</div>
									</div>

								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-12">
									<div className="features__block__text">
										<h3 className="features__title">
											イーサイズ　南欧
									</h3>
									</div>
								</div>
								<div className="col-12 col-md-12">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/22/22_026.jpg")} alt="イーサイズ　南欧" />
									</div>
								</div>
								<div className="features__block row mb">
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">ダイニング</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_027.jpg")} alt="ダイニング" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">主寝室</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_028.jpg")} alt="主寝室" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">ダウンライト</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_029.jpg")} alt="ダウンライト" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">洋室</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_030.jpg")} alt="洋室" />
										</div>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-12">
									<div className="features__block__text">
										<h3 className="features__title">
											イーサイズ　IOTスタイル
									</h3>
									</div>
								</div>
								<div className="col-12 col-md-12">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/22/22_031.jpg")} alt="イーサイズ　IOTスタイル" />
									</div>
								</div>

								<div className="features__block row mb">
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">ダイニング</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_032.jpg")} alt="ダイニング" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">主寝室</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_033.jpg")} alt="主寝室" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">ダウンライト</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_034.jpg")} alt="ダウンライト" />
										</div>
									</div>
									<div className="col-6 col-md-3">
										<h3 className="features__title text-center">洋室</h3>
										<div className="features__block__image text-center">
											<img src={withPrefix("/images/recommend/22/22_035.jpg")} alt="洋室" />
										</div>
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
												<td>コイズミ照明株式会社</td>
											</tr>
											<tr>
												<th>型番</th>
												<td>
													SA品番
											</td>

											</tr>
											<tr>
												<th>メーカーURL</th>
												<td><a href="https://www.koizumi-lt.co.jp/" target="_blank" rel="noreferrer">https://www.koizumi-lt.co.jp</a>/</td>
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
