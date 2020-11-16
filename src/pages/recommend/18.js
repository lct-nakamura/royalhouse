import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="ハンギングシステム収納" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title"><h1>ハンギングシステム収納</h1></div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>
								モノであふれがちな玄関にはすっきり大量に収納できるシューズクロークが最適です。簡単カスタマイズで自分の家庭に合ったスタイルを実現できます。
						</p>
							<div className="row">
								<div className="col-12 col-md-12"><img src={withPrefix("/images/recommend/18/18_001.jpg")} alt="ハンギングシステム収納" /></div>
							</div>
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/18/18_003.jpg")} alt="使い勝手のよいパーツが選べる" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											使い勝手のよいパーツが選べる
								</h3>
										<p className="features__description">
											棚木口にトドマツを使用した木質感のあり棚板や、水拭き可能な樹脂棚ヲタ、収納量がアップするパイプ、壁の汚れを防止するバックガードなど、より使い勝手が向上し、使いやすさの幅が広がります。トドマツを使用した棚板は、木質感のあるやわらかな雰囲気の空間を演出できます。
								</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/18/18_004.jpg")} alt="簡単カスタマイズ" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											簡単カスタマイズ
								</h3>
										<p className="features__description">
											可動棚なので自分の家庭にあったスタイルに簡単にカスタマイズできます。
								</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/18/18_005.jpg")} alt="横壁がなくても設置可能" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											横壁がなくても設置可能
								</h3>
										<p className="features__description">
											横壁を気にせず、どんな場所にもワイドにも、L字型にも無駄なく設置できます。
								</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/18/18_006.jpg")} alt="奥行は3種類" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											奥行は3種類
								</h3>
										<p className="features__description">
											設置する場所、入れるものに合わせて棚板の奥行を200mm、300m、400mmの3種類から選ぶことができます。
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
												<td>住林クレスト</td>
											</tr>
											<tr>
												<th>型番</th>
												<td>
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
