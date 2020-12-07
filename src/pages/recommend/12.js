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
			<div className="article__container"> <button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title">
					<h1>無垢の洗面化粧台</h1>
				</div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>無垢の木の洗面台がお部屋に優しく馴染みます。美濃焼が持つ美しい質感のタイルカウンターは色も選べてオシャレに演出できます。</p>
							<img src={withPrefix("/images/recommend/12/12_001.jpg")} alt="洗面化粧台" />
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/12/12_002.jpg")} alt="オーバル陶器ボウル・水栓" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">オーバル陶器ボウル・水栓</h3>
										<p className="features__description">心地よい滑らかさを持つ陶器製ボウル。土から生まれた陶器ボウルは、無垢の木の扉との相性も抜群です。</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/12/12_003.jpg")} alt="タイルカウンター" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">タイルカウンター</h3>
										<p className="features__description"> 日本を代表する焼き物の一つ、伝統的な美濃焼のタイルです。岐阜県東濃地域の窯元において丁寧に作られる良質なタイルだけを使い、美濃焼が持つ美しい質感を生かしてカウンターを豊かな表情で彩ります。</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="row">
										<div className="col-6 col-md-6">
											<img src={withPrefix("/images/recommend/12/12_004.jpg")} alt="キャビネット" />
											<p className="feateures__description">両開き仕様</p>
										</div>
										<div className="col-6 col-md-6">
											<img src={withPrefix("/images/recommend/12/12_005.jpg")} alt="キャビネット" />
											<p className="features__description">片引出仕様</p>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">キャビネット</h3>
										<p className="features__description"> バケツや詰め替えボトルなどをゆったりと収納できる「両開き仕様」、タオルや小物をなどの細かなものもしまえる「方引き出し仕様」の2種類をご用意しました。</p>
									</div>
								</div>
							</div>
						</section>
						<section className="article__section article__section02">
							<h2>カラーバリエーション</h2>
							<h3>扉</h3>
							<div className="color__list row mb">
								<div className="col-12 mini-mb">
									<h4>WN80（ウォールナット）</h4>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/12/12_006.jpg")} alt="クリア塗装" /></div>
									<p className="color__list__caption text-center mb">クリア塗装</p>
								</div>
								<div className="col-12 mini-mb">
									<h4>OK50（オーク）</h4>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_007_01.jpg")} alt="クリア塗装" />
									</div>
									<p className="color__list__caption text-center">クリア塗装</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_007_02.jpg")} alt="クリア塗装" />
									</div>
									<p className="color__list__caption text-center">ダーク色</p>
								</div>
								<div className="col-6 col-md-4 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_007_03.jpg")} alt="クリア塗装" />
									</div>
									<p className="color__list__caption text-center">ミディアム色</p>
								</div>
								<div className="col-12 mini-mb">
									<h4>MP50(メープル)</h4>
								</div>
								<div className="col-6 col-md-4 mb">
									<div className="color__list__image text-center">
										<img className="mini-mb" src={withPrefix("../../images/recommend/12/12_008_01.jpg")} alt="クリア塗装" />
										<img src={withPrefix("/images/recommend/12/12_008.jpg")} alt="クリア塗装" />
									</div>
									<p className="color__list__caption text-center">クリア塗装</p>
								</div>
							</div>
							<div className="color__list row">
								<div className="col-12 mini-mb">
									<h4>NZ50(ニュージーパイン)</h4>
								</div>
								<div className="col-6 col-md-6">
									<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/12/12_009_01.jpg")} alt="ナチュラル色" /></div>
									<p className="color__list__caption text-center">ナチュラル色</p>
								</div>
								<div className="col-6 col-md-4 mb">
									<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/12/12_009_02.jpg")} alt="ホワイト色" /></div>
									<p className="color__list__caption text-center">ホワイト色</p>
								</div>
							</div>
							<div className="color__list row">
								<div className="col-12 mini-mb">
									<h4>NZ40(ニュージーパイン)</h4>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_010_01.jpg")} alt="ナチュラル色" />
									</div>
									<p className="color__list__caption text-center">ナチュラル色</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_010_02.jpg")} alt="ホワイト色" />
									</div>
									<p className="color__list__caption text-center">ホワイト色</p>
								</div>
								<div className="col-6 col-md-4 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_010_03.jpg")} alt="ミディアムブラウン色" />
									</div>
									<p className="color__list__caption text-center">ミディアムブラウン色</p>
								</div>
							</div>
							<div className="color__list row">
								<div className="col-12 mini-mb">
									<h4>NZ30(ニュージーパイン)</h4>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_011_01.jpg")} alt="ナチュラル色" />
									</div>
									<p className="color__list__caption text-center">ナチュラル色</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_011_02.jpg")} alt="ホワイト色" />
									</div>
									<p className="color__list__caption text-center">ホワイト色</p>
								</div>
								<div className="col-6 col-md-4 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_011_03.jpg")} alt="ミディアムブラウン色" />
									</div>
									<p className="color__list__caption text-center">ミディアムブラウン色</p>
								</div>
							</div>

							<div className="color__list row mb">
								<div className="col-12">
									<h3>取手</h3>
								</div>
								<div className="col-6 col-md-4 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_012_01.jpg")} alt="S型ステンレスつまみ" />
									</div>
									<p className="color__list__caption text-center">S型ステンレスつまみ</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_012_02.jpg")} alt="I型木製つまみ" />
									</div>
									<p className="color__list__caption text-center">I型木製つまみ</p>
								</div>
								<div className="col-6 col-md-4 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_012_03.jpg")} alt="Q型磁器つまみ" />
									</div>
									<p className="color__list__caption text-center">Q型磁器つまみ</p>
								</div>
								<div className="col-12 col-md-12 mini-mb">
									<h4>オプション取手</h4>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_012_05.jpg")} alt="A型アイアンつまみ" />
									</div>
									<p className="color__list__caption text-center">A型アイアンつまみ</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_012_06.jpg")} alt="N型アイアンつまみ" />
									</div>
									<p className="color__list__caption text-center">N型アイアンつまみ</p>
								</div>
							</div>
							<div className="color__list row mb">
								<div className="col-12">
									<h3>タイルカラー</h3>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_005_01.jpg")} alt="ホワイト" />
									</div>
									<p className="color__list__caption text-center">ホワイト</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_005_02.jpg")} alt="ベージュ" />
									</div>
									<p className="color__list__caption text-center">ベージュ</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_005_03.jpg")} alt="ミックスブルー" />
									</div>
									<p className="color__list__caption text-center">ミックスブルー</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/12/12_005_04.jpg")} alt="ミックスブラウン" />
									</div>
									<p className="color__list__caption text-center">ミックスブラウン</p>
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
												<td>ウッドワン</td>
											</tr>
											<tr>
												<th>型番</th>
												<td></td>
											</tr>
											<tr>
												<th>メーカーURL</th>
												<td><a href="https://www.woodone.co.jp/" target="_blank" rel="noreferrer">https://www.woodone.co.jp</a>/</td>
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
