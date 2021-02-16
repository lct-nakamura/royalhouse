import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="在来軸組工法用制振システム" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title"><h1>在来軸組工法用制振システム</h1></div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>
								地震エネルギーを吸収する「制震」が地震の揺れを制してくれるので安心です。
						</p>
							<div className="row">
								<div className="col-12 col-md-12 text-center"><img src={withPrefix("/images/recommend/24/24_001.jpg")} alt="在来軸組工法用制振システム" /></div>
							</div>
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/24/24_003.jpg")} alt="繰り返しの地震に強い、高い制震効果" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											繰り返しの地震に強い、高い制震効果
									</h3>
										<p className="features__description">
											TRCダンパーのエネルギー吸収量は構造用合板の約3倍に！
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/24/24_004.jpg")} alt="低コストで高い性能を発揮" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											低コストで高い性能を発揮
									</h3>
										<p className="features__description">
											低コストで導入でき、さらに時間経過などによる性能変化が少ないため、メンテナンス不要で約100年の耐久性を誇ります。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/24/24_005.jpg")} alt="短時間で施行が可能" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											短時間で施行が可能
									</h3>
										<p className="features__description">
											TRCダンパーは筋交いという方法で、簡単な作業で取り付けることができます。特別な工具も必要なく、1箇所につき30分程で施工ができます。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/24/24_006.jpg")} alt="シミュレーションで設置効果を提案" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											シミュレーションで設置効果を提案
									</h3>
										<p className="features__description">
											お客様のプランに応じて、実際の地震を想定したシミュレーション解析を行っています。TRCダンパーの制震効果や設置箇所、本数を確認します。
									</p>
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
												<td>
													住友理工株式会社
										</td>
											</tr>
											<tr>
												<th>型番</th>
												<td>
													TRC-2x4
										</td>

											</tr>
											<tr>
												<th>メーカーURL</th>
												<td><a href="https://www.sumitomoriko.co.jp/trc-damper-wh/" target="_blank" rel="noreferrer">https://www.sumitomoriko.co.jp/trc-damper-wh</a>/</td>
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
