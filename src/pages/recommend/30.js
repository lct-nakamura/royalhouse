import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="アクセントボード（マグネット対応）" />
    <article className="l-article">
		<div className="article__container">
			<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
			<div className="article__title"><h1>アクセントボード（マグネット対応）</h1></div>
			<div className="article__contents">
				<div className="container">
					<div className="article__mv">
						<p>
						接着剤と両面テープで取付可能！壁を傷つけずに短時間でイメージチェンジができるアクセントボード。</p>
						<div className="row">
							<div className="col-12 col-md-6 text-center mini-mb"><img src={withPrefix("/images/recommend/30/30_001.jpg")} alt="アクセントボード（マグネット対応）" /></div>
							<div className="col-12 col-md-6 text-center"><img src={withPrefix("/images/recommend/30/30_002.jpg")} alt="アクセントボード（マグネット対応）" /></div>
						</div>
					</div>
					<section className="article__section article__section01">
						<h2>特徴</h2>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/30/30_003.jpg")} alt="マグネット対応" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										マグネット対応
									</h3>
									<p className="features__description">
										マグネット対応だから、壁に飾りをつけるのに釘や画びょうなどは必要ありません。壁をつけることもなく、簡単にイメージチェンジができます。
									</p>
									<h3 className="features__title">
										磁石があれば簡単
									</h3>
									<p className="features__description">
										磁石付きの小物を使えば、壁面を気分や用途に合わせて演出できます。
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
