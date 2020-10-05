import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="トイレ" />
    <article className="l-article">
		<div className="article__container">
			<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
			<div className="article__title"><h1>トイレ</h1></div>
			<div className="article__contents">
				<div className="container">
					<div className="article__mv">
						<p>
						汚れがつきにくいので、お掃除もラクラク！エコ対応で地球にもお財布にも優しいです。
						</p>
						<img src={withPrefix("/images/recommend/28/28_001.jpg")} alt="トイレ" />
					</div>
					<section className="article__section article__section01">
						<h2>特徴</h2>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center">
								<img src={withPrefix("/images/recommend/28/28_002.jpg")} alt="100年クリーンアクアセラミック" />
								</div>
								<div className="row">
								<div className="col-6 col-md-6">
									<img src={withPrefix("/images/recommend/28/28_003.jpg")} alt="パワーストリーム洗浄" />
								</div>
								<div className="col-6 col-md-6">
									<img src={withPrefix("/images/recommend/28/28_004.jpg")} alt="フチレス形状" />
								</div>
								</div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">キレイ機能</h3>
									<h4>アクアセラミック</h4>
									<p className="features__description mini-mb">
									従来のとうきではできなかった「ガンコな水アカ」も「汚れ」もどちらも落とせる、お掃除ラクラクな衛生陶器です。
									</p>
									<h4>フチレス形状</h4>
									<p className="feateures__description">
									フチを丸ごとなくし、サッとひと拭き、お掃除ラクラクです。
									</p>
								</div>
							</div>
							<div className="col-12 col-md-4">
								<img src={withPrefix("")} alt="" />
							</div>
							<div className="col-12 col-md-8">
								<h4>パワーストリーム洗浄</h4>
								<p className="features__description">
									強力な水流が便器鉢内のすみずみまで回り、少ない水でもしっかり汚れを洗い流します。
								</p>
							</div>
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center">
								<img src={withPrefix("/images/recommend/28/28_005.jpg")} alt="お掃除リフトアップ" />
								</div>
							</div>
							<div className="col-12 col-md-8">
							<div className="features__block__text">
								<h3 className="features__title">お掃除ラクラク</h3>
								<h4>お掃除リフトアップ</h4>
								<p className="features__description">
									真上にしっかり上がるから、お掃除できなかったすき間汚れが奥まで楽に拭き取れて、気になるにおいの元もカットします。
								</p>
								</div>
							</div>
							<div className="col-12 col-md-4">
							<div className="features__block__image text-center">
								<img src={withPrefix("/images/recommend/28/28_006.jpg")} alt="お掃除リフトアップ" />
							</div>
							<div className="row">
								<div className="col-6 col-md-6">
								<img src={withPrefix("/images/recommend/28/28_007.jpg")} alt="キレイ便座" />
								</div>
								<div className="col-6 col-md-6">
								<img src={withPrefix("/images/recommend/28/28_008.jpg")} alt="鉢内スプレー" />
								</div>
							</div>
							</div>
							<div className="col-12 col-md-8">
							<h4>キレイ便座</h4>
								<p className="features__description mb">
								汚れが入りやすいつぎ目がありません。新素材により気になる便座裏の汚れもサッとひと拭き、お掃除ラクラク。
								</p>
								<h4>鉢内スプレー</h4>
								<p className="feateures__description">
									便器表面を濡らし、汚物汚れを付きにくくするのでお掃除もラクラク
								</p>
								<h4>スッキリノズルシャッター</h4>
								<p className="feateures__description">
									使わない時はノズルを収納。男子小用時などの汚れの心配もなく、ノズルはいつも清潔です。シャッターは着脱可能なので、お手入れも簡単です。
								</p>
							</div>
								<div className="co-12 col-md-4">
								<div className="features__block__image text-center">
									<img src={withPrefix("/images/recommend/28/28_009.jpg")} alt="しっかりエコ" />
								</div>
								</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">しっかりエコ</h3>
									<p className="features__description">
									地球環境に配慮した、強力洗浄の超節水トイレ。「超節水ECO5トイレ」なら大13Lと便器と比べ約69％大8L便器と比べ約49％節水できます。3日おフロ１杯以上の節水効果は家計にも優しい設計です。
									</p>
								</div>
							</div>
							<div className="col-12 col-md-4">
							<div className="features__block__image text-center">
								<img src={withPrefix("/images/recommend/28/28_010.jpg")} alt="停電対応" />
							</div>
							</div>
							<div className="col-12 col-md-8">
							<div className="features__block__text">
								<h3 className="features__title">停電対応</h3>
								<p className="features__description">
									停電に際にも手動で便器の水を流すことができます。</p>
							</div>
						</div>
						</div>
					</section>
					<section className="article__section article__section02">
						<h2>カラーバリエーション</h2>
						<div className="color__list row">
							<div className="col-6 col-md-3">
							<div className="color__list__image text-center">
								<img src={withPrefix("/images/recommend/28/28_011_01.jpg")} alt="ピュアホワイト" />
							</div>
							<p className="color__list__caption text-center">ピュアホワイト</p>
						</div>
						<div className="col-6 col-md-3">
							<div className="color__list__image text-center">
								<img src={withPrefix("/images/recommend/28/28_011_02.jpg")} alt="オフホワイト" />
							</div>
							<p className="color__list__caption text-center">オフホワイト</p>
						</div>
						<div className="col-6 col-md-3">
							<div className="color__list__image text-center">
								<img src={withPrefix("/images/recommend/28/28_011_03.jpg")} alt="ピンク" />
							</div>
							<p className="color__list__caption text-center">ピンク</p>
						</div>
						<div className="col-6 col-md-3">
							<div className="color__list__image text-center">
								<img src={withPrefix("/images/recommend/28/28_011_04.jpg")} alt="ブルーグレー" />
							</div>
							<p className="color__list__caption text-center">ブルーグレー</p>
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
