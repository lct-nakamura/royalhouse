import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="床材" />
    <article className="l-article">
		<div className="article__container">
			<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
			<div className="article__title"><h1>床材</h1></div>
			<div className="article__contents">
				<div className="container">
					<div className="article__mv">
						<p>
							環境・機能・インテリア性を合わせ持つ国産材活用フロアです。
						</p>
						<img src={withPrefix("/images/recommend/21/21_001.jpg")} alt="床材" />
					</div>
					<section className="article__section article__section01">
						<h2>特徴</h2>
						<div className="col-12 col-md-12">
							<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/21/21_002.jpg")} alt="床暖房対応" /></div>
						</div>
						<div className="features__block row">

							<div className="col-12 col-md-8 col-md-offset-2">
								<div className="features__block__text">
									<h3 className="features__title">
										床暖房対応
									</h3>
									<p className="features__description">
										温度変化に対し、隙間、割れがおきにくい仕様です。
									</p>
								</div>
							</div>
						</div>
						<div className="features__block row">
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										ワックス不要
									</h3>
									<p className="features__description">
										汚れが付着しにくい仕上げで、ワックスは不要です。
									</p>
								</div>
							</div>
						</div>
						<div className="features__block row">
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										幅広デザイン
									</h3>
									<p className="features__description">
										木の豊かな表情を演出するデザインです。
									</p>
								</div>
							</div>
						</div>
						<div className="features__block row">
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										国産材トドマツを用いた合板を採用
									</h3>
									<p className="features__description">
										人にも環境にもやさしい環境配慮型フロアです。
									</p>
								</div>
							</div>
						</div>
						<div className="features__block row">
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
									傷から守る
									</h3>
									<p className="features__description">
									強化フィルム+ハードベース（MDF）のダブル採用により、日常生活から生じるさまざまな衝撃や劣化、引っかき傷や汚れから素材を守ります。
									</p>
								</div>
							</div>
						</div>

						</section>
						<section className="article__section article__section02">
							<h2>カラーバリエーション</h2>
							<div className="color__list row">
								<div className="col-12 col-md-12">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/21/21_003.jpg")} alt="HD　オークホワイト柄" />
									</div>
									<p className="color__list__caption text-center">HD　オークホワイト柄</p>
								</div>
								<div className="col-12 col-md-12">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/21/21_004.jpg")} alt="SD　サクラ柄" />
									</div>
									<p className="color__list__caption text-center">SD　サクラ柄</p>
								</div>
								<div className="col-12 col-md-12">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/21/21_005.jpg")} alt="KD　カバ柄" />
									</div>
									<p className="color__list__caption text-center">KD　カバ柄</p>
								</div>
								<div className="col-12 col-md-12">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/21/21_006.jpg")} alt="GD　グレイクリ柄" />
									</div>
									<p className="color__list__caption text-center">GD　グレイクリ柄</p>
								</div>
								<div className="col-12 col-md-12">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/21/21_007.jpg")} alt="ND　ナット柄" />
									</div>
									<p className="color__list__caption text-center">ND　ナット柄</p>
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
												※□□にはカラー記号2桁が入ります<br />
												上り框<br />
												70x120x1950　BO01□□-06<br />
												70x120x2950　BO01□□-09<br /><br />
												玄関巾木<br />
												27ｘ120ｘ1950　BO11□□-06<br />
												27ｘ120ｘ2950　BO11□□-09<br /><br />
												床見切りフロア用<br />
												12ｘ39ｘ900　BA90□□-09<br />
												12ｘ39ｘ1800　BA90□□-18<br /><br />
												段差見切り　12.5ｘ38ｘ1800　D2□□RA<br />
												フラット沓摺　15ｘ111ｘ1800　BA97□□-1118<br />
												敷居用床見切り　幅30　55ｘ30ｘ3950　BA77□□-03039<br />
												敷居用床見切り　幅100　12ｘ100ｘ3950　BA77□□-10039<br />
												補修材：補修用クレヨン　002-S□□K

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
