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
				<div className="article__title"><h1>COCOSH（洗面化粧台）</h1></div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>
								優れた収納力と使いやすさが工夫されたスタイリッシュな水まわりのデザインは、日々のお手入れを簡単にしてくれます。
						</p>
							<img src={withPrefix("/images/recommend/07/07_001.jpg")} alt="洗面化粧台" />
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/07/07_002.jpg")} alt="業界最大級の収納力" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											業界最大級の収納力
									</h3>
										<p className="features__description">
											たっぷりかしこく収納できる工夫が満載の洗面化粧台です。
											ボウル手前に生まれたスペースを無駄なく活用し、フロアキャビネットの収納力を大幅に向上させました。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center mb">
										<img src={withPrefix("/images/recommend/07/07_003.jpg")} alt="スタイリッシュな水まわりには使いやすさ工夫が詰まっています" />
									</div>
									<div className="row">
										<div className="col-6 col-md-6 mini-mb">
											<img src={withPrefix("/images/recommend/07/07_004.jpg")} alt="ハイバックガード" />
										</div>
										<div className="col-6 col-md-6 mini-mb">
											<img src={withPrefix("/images/recommend/07/07_005.jpg")} alt="ウェットエリア" />
										</div>
										<div className="col-6 col-md-6 mini-mb">
											<img src={withPrefix("/images/recommend/07/07_006.jpg")} alt="すっきりとした排水口" />
										</div>
										<div className="col-6 col-md-6 mini-mb">
											<img src={withPrefix("/images/recommend/07/07_007.jpg")} alt="アラウンドステップ" />
										</div>
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											スタイリッシュな水まわりには使いやすさ工夫が詰まっています
									</h3>
										<p className="features__description">
											スタイリッシュな形状に使いやすさの工夫がたくさん詰まっています
									</p>
										<ol className="list-number">
											<li>ハイバックガード<br />高めのバックガードが水はねをしっかり受け止めます。</li>
											<li>ウェットエリア<br />前後に伸びたウェットエリアは、ハンドソープなどを手前に置けるので、小さなお子さまでも届きやすい位置で使えます。</li>
											<li>すっきりとした排水口<br />排水口のまわりの金属部分をなくしたすっきり形状。ヘアキャッチャーは分解できるのでお手入れラクラクです。</li>
											<li>アラウンドステップ<br />ボウル周囲にステップを設けることで、スマホやアクセサリーなどがすべり落ちるのを防ぎます。</li>
										</ol>
									</div>
								</div>
							</div>
						</section>
						<section className="article__section article__section02">
							<h2>カラーバリエーション</h2>
							<h3>扉カラー</h3>
							<div className="color__list row mb">
								<div className="col-12 col-md-12">
									<h4 className="mini-mb">ナチュラルフレーム 扉面材：PP艶消し</h4>
									<div className="row">
										<div className="col-12 col-md-4">
											<div className="color__list__image text-center mini-mb">
												<img src={withPrefix("/images/recommend/07/07_010_01.jpg")} alt="ラフソーンホワイト F4C" />
												<div className="color__list__caption">ラフソーンホワイト F4C</div>
											</div>
										</div>
										<div className="col-12 col-md-4">
											<div className="color__list__image text-center mini-mb">
												<img src={withPrefix("/images/recommend/07/07_010_02.jpg")} alt="スモークブラウン F4B" />
												<div className="color__list__caption">スモークブラウン F4B</div>
											</div>
										</div>
										<div className="col-12 col-md-4">
											<div className="color__list__image text-center mini-mb">
												<img src={withPrefix("/images/recommend/07/07_010_03.jpg")} alt="マホガニーダーク F4D" />
												<div className="color__list__caption">マホガニーダーク F4D</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="color__list row mb">
								<div className="col-12 col-md-12">
									<h4>取手</h4>
									<p>取っ手は3タイプより選択できます。</p>
								</div>
								<div className="col-6 col-md-4 mini-mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_011.jpg")} alt="アンティーク取っ手　シルバー(14)" />
									</div>
									<div className="color__list__caption">アンティーク取っ手 シルバー(14)</div>
								</div>
								<div className="col-6 col-md-4 mini-mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_012.jpg")} alt="アンティーク取っ手　ブラック(15)" />
									</div>
									<div className="color__list__caption">アンティーク取っ手 ブラック(15)</div>
								</div>
								<div className="col-6 col-md-4 mini-mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_013.jpg")} alt="スリム取っ手(16)" />
									</div>
									<div className="color__list__caption">スリム取っ手(16)</div>
								</div>
								<div className="col-12 col-md-12 mb">
									<p>
										※引き出し以外は縦付です。 <br />
									※間口15cm扉について、引き出しは縦付、開き扉はツマミになります。
								</p>
								</div>
							</div>
							<h3>扉A</h3>
							<h4 className="mini-mb">シルキーパール 扉面材：PET鏡面</h4>
							<div className="color__list row mb">
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_014.jpg")} alt="パールホワイトJ4W" />
									</div>
									<p className="color__list__caption">パールホワイト<br />J4W</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_015.jpg")} alt="パールカッパーJ4C" />
									</div>
									<p className="color__list__caption">パールカッパー<br />J4C</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_016.jpg")} alt="パールリーフJ4L" />
									</div>
									<p className="color__list__caption">パールリーフ<br />J4L</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_017.jpg")} alt="パールリーフJ4L" />
									</div>
									<p className="color__list__caption">パールリーフ<br />J4L</p>
								</div>
							</div>
							<div className="color__list row mb">
								<div className="col-12 col-md-12 mini-mb">
									<h4>パオロッサ 扉面材：PET鏡面</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_018.jpg")} alt="パオロッサホワイトP3W" />
									</div>
									<p className="color__list__caption">パオロッサホワイト<br />P3W</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_019.jpg")} alt="パオロッサレッドP3S" />
									</div>
									<p className="color__list__caption">パオロッサレッド<br />P3S</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_020.jpg")} alt="パオロッサネイビーP3A" />
									</div>
									<p className="color__list__caption">パオロッサネイビー<br />P3A</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_021.jpg")} alt="パオロッサブラックP3H" />
									</div>
									<p className="color__list__caption">パオロッサブラック<br />P3H</p>
								</div>
							</div>
							<div className="color__list row mb">
								<div className="col-12 col-md-12 mini-mb">
									<h4>スクエアドット 扉面材：DAP光沢</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_022.jpg")} alt="ミルクホワイト" />
									</div>
									<p className="color__list__caption">ミルクホワイト<br />D2W</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_023.jpg")} alt="ベージュグレーD2B" />
									</div>
									<p className="color__list__caption">ベージュグレー<br />D2B</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_024.jpg")} alt="オリーブグリーンD2G" />
									</div>
									<p className="color__list__caption">オリーブグリーン<br />D2G</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_025.jpg")} alt="ベビーピンクD2P" />
									</div>
									<p className="color__list__caption">ベビーピンク<br />D2P</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_026.jpg")} alt="アイスミントD2E" />
									</div>
									<p className="color__list__caption">アイスミント<br />D2E</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_027.jpg")} alt="ライラックグレー" />
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
										<img src={withPrefix("/images/recommend/07/07_028.jpg")} alt="ペイントオークT1W" />
									</div>
									<p className="color__list__caption">ペイントオーク<br />T1W</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_029.jpg")} alt="ヴィンテージメープルT1M" />
									</div>
									<p className="color__list__caption">ヴィンテージメープル<br />T1M</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_030.jpg")} alt="サテンパイングレーT1G" />
									</div>
									<p className="color__list__caption">サテンパイングレー<br />T1G</p>
								</div>
							</div>
							<div className="color__list row mb">
								<div className="col-12 col-md-12 mini-mb">
									<h4>ウヅクリウッド 扉面材：PP艶消し</h4>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_031.jpg")} alt="ウヅクリホワイトU1W" />
									</div>
									<p className="color__list__caption">ウヅクリホワイト<br />U1W</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_032.jpg")} alt="ウヅクリグレージュU1G" />
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
										<img src={withPrefix("/images/recommend/07/07_033.jpg")} alt="オリバホワイトK1W" />
									</div>
									<p className="color__list__caption">オリバホワイト<br />K1W</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_034.jpg")} alt="オリバブラウンK1M" />
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
										<img src={withPrefix("/images/recommend/07/07_035.jpg")} alt="ホワイトオークJ1W" />
									</div>
									<p className="color__list__caption">ホワイトオーク<br />J1W</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_036.jpg")} alt="オークナチュラルJ1N" />
									</div>
									<p className="color__list__caption">オークナチュラル<br />J1N</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_037.jpg")} alt="オークミディアムJ1M" />
									</div>
									<p className="color__list__caption">オークミディアム<br />J1M</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_038.jpg")} alt="ブラックオークJ1K" />
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
										<img src={withPrefix("/images/recommend/07/07_039.jpg")} alt="ラスターホワイトD1W" />
									</div>
									<p className="color__list__caption">ラスターホワイト<br />D1W</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_040.jpg")} alt="ラスターライトD1C" />
									</div>
									<p className="color__list__caption">ラスターライト<br />D1C</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_041.jpg")} alt="ラスターグレージュD1G" />
									</div>
									<p className="color__list__caption">ラスターグレージュ<br />D1G</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_042.jpg")} alt="ラスターダークD1D" />
									</div>
									<p className="color__list__caption">ラスターダーク<br />D1D</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_043.jpg")} alt="ラスターゼブラD1K" />
									</div>
									<p className="color__list__caption">ラスターゼブラ<br />D1K</p>
								</div>
							</div>
							<h4 className="mini-mb">取手</h4>
							<div className="col-12 col-md-12 mini-mb">
								<p>取っ手は5タイプより選択できます。</p>
							</div>
							<div className="col-12 col-md-4 mb">
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/07/07_044.jpg")} alt="ハンドル取っ手00" />
									<div className="color__list__caption">ハンドル取っ手00</div>
								</div>
							</div>
							<h3>扉B</h3>
							<h4 className="mini-mb">シンプルクリン 扉面材：EBコートシート</h4>
							<div className="col-12 col-md-12 mini-mb">
								<p>専用の取っ手になります。</p>
							</div>
							<div className="row mb">
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_045.jpg")} alt="ライン取っ手21" />
									</div>
									<div className="color__list__caption">ライン取っ手21</div>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_046.jpg")} alt="ロングハンドル取っ手22" />
									</div>
									<div className="color__list__caption">ロングハンドル取っ手22</div>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_047.jpg")} alt="アーチ取っ手22" />
									</div>
									<div className="color__list__caption">アーチ取っ手22</div>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/07/07_048.jpg")} alt="ブロード取っ手24" />
									</div>
									<div className="color__list__caption">ブロード取っ手24</div>
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
												<th>型番</th><td>COCOSH</td>
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
