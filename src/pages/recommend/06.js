import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="システムキッチン" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title"><h1>カナリエ（システムキッチン）</h1></div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>
								フロアキャビネットは業界最大級の収納力があり、散らかりがちなキッチン用品を整理整頓できます。ワークトップの高さを1センチ単位で自由に選べるので、腰の負担を軽減でき、あなた専用の快適なキッチンになります。
						</p>
							<img src={withPrefix("/images/recommend/06/06_001.jpg")} alt="システムキッチン" />
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/06/06_002.jpg")} alt="業界最大級のパワフル収納力" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											業界最大級のパワフル収納力
									</h3>
										<p className="features__description">
											フロアキャビネットの収納力は業界最大級。収納量だけでなく使いやすさにも配慮しました。ハウステック独自の収納「どこでもパレット」はデッドスペースを使いやすい収納に変えてくれるすぐれものです。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/06/06_003.jpg")} alt="すばやくキレイを叶えます" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											すばやくキレイを叶えます
									</h3>
										<p className="features__description">
											ワークトップ表面にははっ水・はつ油機能をプラス。汚れをはじきお手入れが簡単になります。「嬉シンク　プラス」はお料理テキパキとお掃除ラクラクの両立が叶います。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/06/06_004.jpg")} alt="らくらく快適キッチン" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											らくらく快適キッチン
									</h3>
										<p className="features__description">
											1cm刻みで高さを選べるワークトップは、同じ姿勢で長時間使う腰の負担をとことん軽減します。
									</p>
									</div>
								</div>
							</div>

						</section>
						<section className="article__section article__section02">
							<h2>カラーバリエーション</h2>
							<h3>扉</h3>
							<div className="color__list row">
								<div className="col-12 col-md-12">
									<p>幅広いインテリアテイストに合わせられる155パターンの扉。あなたのお好きなコーディネートがワンプライスで選べます。</p>
									<div className="color__list__image text-center mb">
										<img src={withPrefix("/images/recommend/06/06_005.jpg")} alt="幅広いインテリアテイストに合わせられる155パターンの扉。" />
									</div>
								</div>
							</div>
							<h3>取手</h3>
							<div className="color__list row">
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_006.jpg")} alt="ライン取っ手（21）" />
									</div>
									<p className="color__list__caption">ライン取っ手（21）<br />機能性とデザイン性を兼ね備えた、すっきりしたラインが特長です。</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_007.jpg")} alt="ロングハンドル取っ手（22）※1" />
									</div>
									<p className="color__list__caption">ロングハンドル取っ手（22）※1<br />充分な長さがあり、手をかけられる位置が広くなっています。</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_008.jpg")} alt="アーチ取っ手（22）※2" />
									</div>
									<p className="color__list__caption">アーチ取っ手（22）※2<br />つかみやすい太さがあり、左右の出っぱりも少なく作業のじゃまになりません。</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_009.jpg")} alt="ブロード取っ手（24）※2" />
									</div>
									<p className="color__list__caption">ブロード取っ手（24）※2<br />高さ方向の幅が広くてつかみやすく、かつ直線的な印象のブラック（マット）色取っ手です。</p>
								</div>
								<div className="col-6 col-md-4">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_010.jpg")} alt="スマート取っ手（25）※2" />
									</div>
									<p className="color__list__caption">スマート取っ手（25）※2<br />高さ方向の幅が小さく、シャープな印象のブラック（マット）色取っ手です。</p>
								</div>
								<div className="col-12 col-md-12 mb">
									<p>※1 開き扉はタテ使い、間口15cmの開き扉はツマミとなります。</p>
									<p>※2 シースルー扉の吊り戸棚および食器戸棚上部ユニットはタテ使い、間口15cmの開き扉はツマミとなります。</p>
								</div>
							</div>
							<h3>壁面</h3>
							<h4 className="mini-mb">シルキーパール 扉面材：PET鏡面</h4>
							<div className="color__list row mb">
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_011.jpg")} alt="パールホワイトJ4W" />
									</div>
									<p className="color__list__caption">パールホワイト<br />J4W</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_012.jpg")} alt="パールカッパーJ4C" />
									</div>
									<p className="color__list__caption">パールカッパー<br />J4C</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_013.jpg")} alt="パールリーフJ4L" />
									</div>
									<p className="color__list__caption">パールリーフ<br />J4L</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_014.jpg")} alt="パールターコイズJ4Q" />
									</div>
									<p className="color__list__caption">パールターコイズ<br />J4Q</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_015.jpg")} alt="パールネーフルJ4N" />
									</div>
									<p className="color__list__caption">パールネーフル<br />J4N</p>
								</div>
							</div>
							<div className="color__list row mb">
								<div className="col-12 col-md-12 mini-mb">
									<h4>パオロッサ 扉面材：PET鏡面</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_016.jpg")} alt="パオロッサホワイトP3W" />
									</div>
									<p className="color__list__caption">パオロッサホワイト<br />P3W</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_017.jpg")} alt="パオロッサレッドP3S" />
									</div>
									<p className="color__list__caption">パオロッサレッド<br />P3S</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_018.jpg")} alt="パオロッサネイビーP3A" />
									</div>
									<p className="color__list__caption">パオロッサネイビー<br />P3A</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_019.jpg")} alt="パオロッサブラックP3H" />
									</div>
									<p className="color__list__caption">パオロッサブラック<br />P3H</p>
								</div>
							</div>
							<div className="color__list row mb">
								<div className="col-12 col-md-12 mini-mb">
									<h4>スクエアドット 扉面材：DAP光沢</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_020.jpg")} alt="ミルクホワイト" />
									</div>
									<p className="color__list__caption">ミルクホワイト<br />D2W</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_021.jpg")} alt="ベージュグレーD2B" />
									</div>
									<p className="color__list__caption">ベージュグレー<br />D2B</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_022.jpg")} alt="オリーブグリーンD2G" />
									</div>
									<p className="color__list__caption">オリーブグリーン<br />D2G</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_023.jpg")} alt="ベビーピンクD2P" />
									</div>
									<p className="color__list__caption">ベビーピンク<br />D2P</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_024.jpg")} alt="アイスミントD2E" />
									</div>
									<p className="color__list__caption">アイスミント<br />D2E</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_025.jpg")} alt="ライラックグレー" />
									</div>
									<p className="color__list__caption">ライラックグレー<br />D2H</p>
								</div>

							</div>
							<div className="color__list row mb">
								<div className="col-12 col-md-12 mini-mb">
									<h4>テクスチャーウッド 扉面材：PBT艶消し</h4>
								</div>

								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_026.jpg")} alt="ペイントオークT1W" />
									</div>
									<p className="color__list__caption">ペイントオーク<br />T1W</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_027.jpg")} alt="ヴィンテージメープルT1M" />
									</div>
									<p className="color__list__caption">ヴィンテージメープル<br />T1M</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_028.jpg")} alt="サテンパイングレーT1G" />
									</div>
									<p className="color__list__caption">サテンパイングレー<br />T1G</p>
								</div>
							</div>
							<div className="color__list row mb">
								<div className="col-12 col-md-12 mini-mb">
									<h4>ウヅクリウッド 扉面材：PP艶消し</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_029.jpg")} alt="ウヅクリホワイトU1W" />
									</div>
									<p className="color__list__caption">ウヅクリホワイト<br />U1W</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_030.jpg")} alt="ウヅクリグレージュU1G" />
									</div>
									<p className="color__list__caption">ウヅクリグレージュ<br />U1G</p>
								</div>
							</div>
							<div className="color__list row mb">
								<div className="col-12 col-md-12 mini-mb">
									<h4>オリバウッド 扉面材：PP艶消し</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_031.jpg")} alt="オリバホワイトK1W" />
									</div>
									<p className="color__list__caption">オリバホワイト<br />K1W</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_032.jpg")} alt="オリバブラウンK1M" />
									</div>
									<p className="color__list__caption">オリバブラウン<br />K1M</p>
								</div>
							</div>
							<div className="color__list row mb">
								<div className="col-12 col-md-12 mini-mb">
									<h4>レイヤーウッド 扉面材：PP艶消し</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_033.jpg")} alt="ホワイトオークJ1W" />
									</div>
									<p className="color__list__caption">ホワイトオーク<br />J1W</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_034.jpg")} alt="オークナチュラルJ1N" />
									</div>
									<p className="color__list__caption">オークナチュラル<br />J1N</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_035.jpg")} alt="オークミディアムJ1M" />
									</div>
									<p className="color__list__caption">オークミディアム<br />J1M</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_036.jpg")} alt="ブラックオークJ1K" />
									</div>
									<p className="color__list__caption">ブラックオーク<br />J1K</p>
								</div>
							</div>
							<div className="color__list row mb">
								<div className="col-12 col-md-12 mini-mb">
									<h4>ラスターウッド 扉面材：DAP光沢</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_037.jpg")} alt="ラスターホワイトD1W" />
									</div>
									<p className="color__list__caption">ラスターホワイト<br />D1W</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_038.jpg")} alt="ラスターライトD1C" />
									</div>
									<p className="color__list__caption">ラスターライト<br />D1C</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_039.jpg")} alt="ラスターグレージュD1G" />
									</div>
									<p className="color__list__caption">ラスターグレージュ<br />D1G</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_040.jpg")} alt="ラスターダークD1D" />
									</div>
									<p className="color__list__caption">ラスターダーク<br />D1D</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/06/06_041.jpg")} alt="ラスターゼブラD1K" />
									</div>
									<p className="color__list__caption">ラスターゼブラ<br />D1K</p>
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
												<th>型番</th><td>KANARIE</td>
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
