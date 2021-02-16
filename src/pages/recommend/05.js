import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="システムバスルーム" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title"><h1>フェリテUR（システムバス）</h1></div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>カビの発生を抑え、ぬめりと臭いを抑えてくれるのでキレイが長持ち！毎日のお掃除が楽になります。
							浴槽・壁とカラーバリエーションが豊富なので、あなた好みのお風呂でくつろぎの時間を過ごせます。
							</p>
							<img src={withPrefix("/images/recommend/05/05_001.jpg")} alt="フェリテプラス・フェリテ" />
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/05/05_002.jpg")} alt="臭いを抑え、キレイが長持ちする" /></div>
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/05/05_003.jpg")} alt="臭いを抑え、キレイが長持ちする" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">臭いを抑え、キレイが長持ちする</h3>
										<p className="features__description">使うほどにキレイを感じるハウステックのお風呂。「クリン軟水」カビの栄養源になる石けんカスの発生を抑え、キレイを長持ちしました。「除菌楽すてヘアキャッチャー」は銅の力でぬめりと臭いを抑えるのでぬめりと臭いを抑えてくれます。</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/05/05_004.jpg")} alt="ゆったり安心設計" /></div>
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/05/05_005.jpg")} alt="ゆったり安心設計" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">ゆったり安心設計</h3>
										<p className="features__description">ハウステックのお風呂は体への負担を軽減し、より安心で快適にする工夫がこらされています。<br />浴槽のまたぎ高さを、39㎝、内外段差０㎝にした「楽のび浴槽」はバランスを保ちやすく安心して出入りできます。「2WAYタッチ水栓」はフロイスに座った時に、使い勝手を考慮した水栓とカウンターを設計しました。</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="row">
										<div className="col-6 col-md-6">
											<img src={withPrefix("/images/recommend/05/05_006.jpg")} alt="汚れがつきにくく、らくらくお掃除" />
										</div>
										<div className="col-6 col-md-6">
											<img src={withPrefix("/images/recommend/05/05_007.jpg")} alt="汚れがつきにくく、らくらくお掃除" />
										</div>
									</div>
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/05/05_008.jpg")} alt="汚れがつきにくく、らくらくお掃除" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">汚れがつきにくく、らくらくお掃除</h3>
										<p className="features__description">毎日のお掃除をらくらくにするわざありの機能がいっぱい。<br />「クリンかるわざカウンター」はかるがる外せてまる洗い出来、トレーとしても使えます。「温クリンフロア」は床の冷たさを軽減するだけでなく、汚れがつきにくく優れた清掃性を実感できます。</p>
									</div>
								</div>
							</div>
						</section>
						<section className="article__section article__section02">
							<h2>カラーバリエーション</h2>
							<h3>壁</h3>
							<div className="color__list row mb">
								<div className="col-12 col-md-12">
									<h4>石目調</h4>
									<p>気品に溢れた大理石などをモチーフに、バスルームに洗練された格調を与えます。</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_009.jpg")} alt="ミリグレーブロック" />
									</div>
									<p className="color__list__caption">ミリグレーブロック<br />（ブライティア ライト）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_010.jpg")} alt="コントルノグレージュ" />
									</div>
									<p className="color__list__caption">コントルノグレージュ<br />（ブライティア ライト）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_011.jpg")} alt="フィオーレピンク" />
									</div>
									<p className="color__list__caption">フィオーレピンク<br />（ブライティア ライト）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_012.jpg")} alt="ネロクラウン" />
									</div>
									<p className="color__list__caption">ネロクラウン<br />（ブライティア ライト）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_013.jpg")} alt="クイーンベージュ" />
									</div>
									<p className="color__list__caption">クイーンベージュ<br />（ブライティア ライト）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_014.jpg")} alt="ビアンコクリスタル" />
									</div>
									<p className="color__list__caption">ビアンコクリスタル<br />（ブライティア ライト）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_015.jpg")} alt="カームフィオーレ" />
									</div>
									<p className="color__list__caption">カームフィオーレ<br />（ブライティア ライト）</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_016.jpg")} alt="ヘキサビアンコ" />
									</div>
									<p className="color__list__caption">ヘキサビアンコ<br />（ブライティア ライト）</p>
								</div>

								<div className="col-12 col-md-12">
									<h4>ホワイト</h4>
									<p>クリーン&クリアなホワイトが清新な印象を与えます。</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_017.jpg")} alt="パウダーホワイト" />
									</div>
									<p className="color__list__caption">パウダーホワイト<br />（ブライティア ライト）</p>
								</div>

								<div className="col-12 col-md-12">
									<h4>木目調</h4>
									<p>ナチュラルで優しい空間を演出する木目調。落ち着いた雰囲気でリラックスできます。</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_018.jpg")} alt="シダービアンコ" />
									</div>
									<p className="color__list__caption">シダービアンコ<br />（ブライティア ライト）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_019.jpg")} alt="マルケトリーブラウン" />
									</div>
									<p className="color__list__caption">マルケトリーブラウン<br />（ブライティア ライト）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_020.jpg")} alt="ランバースタック" />
									</div>
									<p className="color__list__caption">ランバースタック<br />（ブライティア ライト）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_021.jpg")} alt="オークグレージュ" />
									</div>
									<p className="color__list__caption">オークグレージュ<br />（ブライティア ライト）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_022.jpg")} alt="ウォールナットライト" />
									</div>
									<p className="color__list__caption">ウォールナットライト<br />（ブライティア ライト）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_023.jpg")} alt="ウォールナットダーク" />
									</div>
									<p className="color__list__caption">ウォールナットダーク<br />（ブライティア ライト）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_024.jpg")} alt="グラシアノーチェ" />
									</div>
									<p className="color__list__caption">グラシアノーチェ<br />（ブライティア マット）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_025.jpg")} alt="サクラ" />
									</div>
									<p className="color__list__caption">サクラ<br />（ブライティア マット）</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_026.jpg")} alt="チェリーブラウン" />
									</div>
									<p className="color__list__caption">チェリーブラウン<br />（ブライティア マット）</p>
								</div>

								<div className="col-12 col-md-12">
									<h4>モザイク柄</h4>
									<p>モダンアートを想起させるようなモザイクタイル柄。シック・ナチュラル・エレガント、それぞれに印象的な空間を創出します。</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_027.jpg")} alt="アルチェネイビー" />
									</div>
									<p className="color__list__caption">アルチェネイビー<br />（ブライティア ライト）</p>
								</div>

								<div className="col-12 col-md-12">
									<h4>抽象柄</h4>
									<p>ぬくもりを感じる植物柄や印象的な幾何学模様など個性的な空間を演出します。</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_028.jpg")} alt="ユズリハ" />
									</div>
									<p className="color__list__caption">ユズリハ<br />（ブライティア ライト）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_029.jpg")} alt="オリエンタルボルドー" />
									</div>
									<p className="color__list__caption">オリエンタルボルドー<br />（ブライティア ライト）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_030.jpg")} alt="エクリュピーチ" />
									</div>
									<p className="color__list__caption">エクリュピーチ<br />（ブライティア ライト）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_031.jpg")} alt="アクア" />
									</div>
									<p className="color__list__caption">アクア<br />（ブライティア ライト）</p>
								</div>

								<div className="col-12 col-md-12">
									<h4>ウェーブ柄</h4>
									<p>カジュアルな色使いで、明るいバスルームを演出します。</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_032.jpg")} alt="ウェーブグレー" />
									</div>
									<p className="color__list__caption">ウェーブグレー<br />（ラミリア）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_033.jpg")} alt="ウェーブブラウン" />
									</div>
									<p className="color__list__caption">ウェーブブラウン<br />（ラミリア）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_034.jpg")} alt="ウェーブマリン" />
									</div>
									<p className="color__list__caption">ウェーブマリン<br />（ラミリア）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_035.jpg")} alt="ウェーブベージュ" />
									</div>
									<p className="color__list__caption">ウェーブベージュ<br />（ラミリア）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_036.jpg")} alt="ウェーブベージュ" />
									</div>
									<p className="color__list__caption">ウェーブベージュ<br />（ラミリア）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_037.jpg")} alt="ウェーブホワイト" />
									</div>
									<p className="color__list__caption">ウェーブホワイト<br />（ラミリア）</p>
								</div>
							</div>

							<h3 className="mini-mb">床</h3>
							<div className="color__list row mb">
								<div className="col-12 col-md-12">
									<h4 className="mini-mb">温クリンフロア</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_038.jpg")} alt="ビアンコマーブル" />
									</div>
									<p className="color__list__caption">ビアンコマーブル</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_039.jpg")} alt="マローネチェック" />
									</div>
									<p className="color__list__caption">マローネチェック</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_040.jpg")} alt="ネロストーン" />
									</div>
									<p className="color__list__caption">ネロストーン</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_041.jpg")} alt="ゼブラストーン" />
									</div>
									<p className="color__list__caption">ゼブラストーン</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_042.jpg")} alt="プランシェベージュ" />
									</div>
									<p className="color__list__caption">プランシェベージュ</p>
								</div>
							</div>

							<h3>クリン浴槽</h3>
							<div className="color__list row">
								<div className="col-12 col-md-12">
									<h4 className="mini-mb">クリンツヤめき浴槽</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_043.jpg")} alt="リッチダークシルバー" />
									</div>
									<p className="color__list__caption">リッチダークシルバー</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_044.jpg")} alt="リッチローズピンク" />
									</div>
									<p className="color__list__caption">リッチローズピンク</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_045.jpg")} alt="リッチホワイト" />
									</div>
									<p className="color__list__caption">リッチホワイト</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_046.jpg")} alt="リッチブルーブラック" />
									</div>
									<p className="color__list__caption">リッチブルーブラック</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_047.jpg")} alt="リッチベージュ" />
									</div>
									<p className="color__list__caption">リッチベージュ</p>
								</div>
								<div className="col-12 col-md-12 mb">
									<p>※リッチダークシルバー・リッチローズピンクはフェリテプラス限定色です</p>
								</div>

								<div className="col-12 col-md-12">
									<h4 className="mini-mb">キラクリン浴槽</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_048.jpg")} alt="クリンホワイト" />
									</div>
									<p className="color__list__caption">クリンホワイト</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_049.jpg")} alt="クリンブラック" />
									</div>
									<p className="color__list__caption">クリンブラック</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_050.jpg")} alt="クリンミント" />
									</div>
									<p className="color__list__caption">クリンミント</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_051.jpg")} alt="クリンピンク" />
									</div>
									<p className="color__list__caption">クリンピンク</p>
								</div>

								<div className="col-12 col-md-12">
									<h4 className="mini-mb">フェイスクリン浴槽</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_052.jpg")} alt="ピュアホワイト" />
									</div>
									<p className="color__list__caption">ピュアホワイト</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_053.jpg")} alt="ピュアベージュ" />
									</div>
									<p className="color__list__caption">ピュアベージュ</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_054.jpg")} alt="ピュアマリン" />
									</div>
									<p className="color__list__caption">ピュアマリン</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/05/05_055.jpg")} alt="ピュアピンク" />
									</div>
									<p className="color__list__caption">ピュアピンク</p>
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
												<th>メーカー名</th><td>ハウステック</td>
											</tr>
											<tr>
												<th>型番</th><td>Felite plus/Felite</td>
											</tr>
											<tr>
												<th>メーカーURL</th><td><a href="https://www.housetec.co.jp" target="_blank" rel="noreferrer">https://www.housetec.co.jp</a>/</td>
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
