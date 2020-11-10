import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="ポスト" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title"><h1>ポスト</h1></div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<h2 className="h2__title" id="210">門柱型2種　幅210</h2>
							<p>
								留守でも荷物が受け取れ、発送もできるポストなので、配達時間を気にせずにお出かけできます。
						</p>
							<div className="row">
								<div className="col-12 col-md-6 mini-mb"><img src={withPrefix("/images/recommend/26/26_001.jpg")} alt="門柱型2種　幅210" /></div>
								<div className="col-12 col-md-6"><img src={withPrefix("/images/recommend/26/26_002.jpg")} alt="門柱型2種　幅210" /></div>
							</div>
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/26/26_003.jpg")} alt="受け取るだけでなく荷物の発送もできる宅配ボックス" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											受け取るだけでなく荷物の発送もできる宅配ボックス
									</h3>
										<p className="features__description">
											ポストの入らないサイズの配達物や、受け取りサインが必要な荷物は宅配ボックスでいつでも受け取れます。スマートな見た目ながらも350ｍl缶24本入りケースが納まる大容量を実現。さらに書留郵便の受け取りや荷物の発送も可能です。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/26/26_004.jpg")} alt="LED照明" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											LED照明
									</h3>
										<p className="features__description">
											電球色（10灯内蔵）で、AC100V電源に直結出来ます。<br />
										1.2W相当の消費電力で省エネルギー・長寿命です。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/26/26_005.jpg")} alt="設置場所に合わせ、郵便物の取出方向が選べる" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											設置場所に合わせ、郵便物の取出方向が選べる
									</h3>
										<p className="features__description">
											右勝手、左勝手と設置場所に合わせて取出後方が選べます。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/26/26_006.jpg")} alt="錠前" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											錠前
									</h3>
										<p className="features__description">
											お年寄りから子供でも安心。会場・施錠のスムーズさを追求した専用大型ダイヤル錠です。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/26/26_007.jpg")} alt="ネームシシート" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											ネームシシート
									</h3>
										<p className="features__description">
											ブラックまたはライトグレーが1枚付属しています。
									</p>
									</div>
								</div>
							</div>

						</section>
						<section className="article__section article__section02">
							<h2>カラーバリエーション</h2>
							<div className="color__list row">
								<div className="col-12 col-md-12">
									<ul className="list-circle">
										<li><img src={withPrefix("/images/recommend/26/26_008_01.jpg")} alt="ホワイト" /> ホワイト</li>
										<li><img src={withPrefix("/images/recommend/26/26_008_02.jpg")} alt="ライトグレー" />ライトグレー</li>
										<li><img src={withPrefix("/images/recommend/26/26_008_03.jpg")} alt="ブラック" /> ブラック</li>
										<li><img src={withPrefix("/images/recommend/26/26_008_04.jpg")} alt="ボルドー" /> ボルドー</li>
									</ul>
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
													ナスタ
											</td>
											</tr>
											<tr>
												<th>型番</th>
												<td>
													通常出荷<br />
												インターホン取付仕様<br />
												LED照明無　KS-GP10A-M3<br />
												LED照明付　KS-GP10A-E-M3<br />
												インターホン無し仕様<br />
												LED照明無　KS-GP10A-NH-M3<br />
												LED照明付　KS-GP10A-ENH-M3<br /><br />

												組み上げ出荷<br />
												インターホン取付仕様<br />
												LED照明無　KS-GP10AKT-M3<br />
												LED照明付　KS-GP10AKT-E-M3<br />
												インターホン無し仕様<br />
												LED照明無　KS-GP10AKT-NH-M3<br />
												LED照明付　KS-GP10AKT-ENH-M3<br />

												</td>

											</tr>
											<tr>
												<th>メーカーURL</th>
												<td><a href="https://www.nasta.co.jp/" target="_blank" rel="noreferrer">https://www.nasta.co.jp</a>/</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</section>

						<div className="article__mv">
							<h2 className="h2__title" id="290">門柱型2種　幅290</h2>
							<p>
								留守でも荷物が受け取れ、発送もできるポストなので、配達時間を気にせずにお出かけできます。
						</p>
							<div className="row">
								<div className="col-12 col-md-6 mini-mb"><img src={withPrefix("/images/recommend/26/26_009.jpg")} alt="門柱型2種　幅290" /></div>
								<div className="col-12 col-md-6"><img src={withPrefix("/images/recommend/26/26_011.jpg")} alt="門柱型2種　幅290" /></div>
							</div>
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/26/26_003.jpg")} alt="受け取るだけでなく荷物の発送もできる宅配ボックス" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											受け取るだけでなく荷物の発送もできる宅配ボックス
									</h3>
										<p className="features__description">
											ポストの入らないサイズの配達物や、受け取りサインが必要な荷物は宅配ボックスでいつでも受け取れます。<br />スマートな見た目ながらもみかん箱5kgが１箱分（相当）納まる大容量を実現。さらに書留郵便の受け取りや荷物の発送も可能です。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/26/26_012.jpg")} alt="LED照明" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											LED照明
									</h3>
										<p className="features__description">
											電球色（10灯内蔵）で、AC100V電源に直結出来ます。<br />
										1.2W相当の消費電力で省エネルギー・長寿命です。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/26/26_006.jpg")} alt="錠前" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											錠前
									</h3>
										<p className="features__description">
											お年寄りから子供でも安心。会場・施錠のスムーズさを追求した専用大型ダイヤル錠です。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/26/26_007.jpg")} alt="ネームシシート" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											ネームシシート
									</h3>
										<p className="features__description">
											ブラックまたはライトグレーが1枚付属しています。
									</p>
									</div>
								</div>
							</div>

						</section>
						<section className="article__section article__section02">
							<h2>カラーバリエーション</h2>
							<div className="color__list row">
								<div className="col-12 col-md-12">
									<ul className="list-circle">
										<li><img src={withPrefix("/images/recommend/26/26_013_01.jpg")} alt="ホワイト" /> ホワイト</li>
										<li><img src={withPrefix("/images/recommend/26/26_013_02.jpg")} alt="ライトグレー" /> ライトグレー</li>
										<li><img src={withPrefix("/images/recommend/26/26_013_03.jpg")} alt="ブラック" /> ブラック</li>
									</ul>
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
													ナスタ
											</td>
											</tr>
											<tr>
												<th>型番</th>
												<td>
													組み上げ出荷<br />
												インターホン取付仕様 KS-GP16AKT-M3<br />
												インターホン無し仕様 KS-GP16AKT-ENH-M3

											</td>

											</tr>
											<tr>
												<th>メーカーURL</th>
												<td><a href="https://www.nasta.co.jp/" target="_blank" rel="noreferrer">https://www.nasta.co.jp</a>/</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</section>
						<div className="article__mv">
							<h2 className="h2__title" id="貫通型">貫通型　1種</h2>
							<p>
								留守でも在宅でも荷物が受け取れる宅配ボックスとポストが一つになりました。
						</p>
							<div className="row">
								<div className="col-12 col-md-6 mini-mb"><img src={withPrefix("/images/recommend/26/26_016.jpg")} alt="貫通型　1種" /></div>
								<div className="col-12 col-md-6"><img src={withPrefix("/images/recommend/26/26_017.jpg")} alt="貫通型　1種" /></div>
							</div>
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/26/26_018.jpg")} alt="大型郵便物対応ポスト" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											大型郵便物対応ポスト
									</h3>
										<p className="features__description">
											手紙・はがきなどの郵便物だけでなく厚さ5cmまでのメール便と小型の荷物が複数個受け取れます。<br />盗難配慮機構「ナスタガード」採用。（意匠登録済）
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/26/26_019.jpg")} alt="宅配ボックス" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											宅配ボックス
									</h3>
										<p className="features__description">
											みかん箱10kg相当の大きさの荷物が受け取れます。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/26/26_020.jpg")} alt="樹脂製サッシ+ペアガラス" /></div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											樹脂製サッシ+ペアガラス
									</h3>
										<p className="features__description">
											高気密・高断熱性能を備えたことで住宅の熱効率を落としません。ガラス越しに届いたものが見えるので配達されたことが一目で確認できます。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-12">
									<div className="features__block__text">
										<h3 className="features__title">
											新規開発のロック機構
									</h3>
										<p className="features__description">
											屋内（受取側）からのみ解除できる機構で防犯性にも配慮。取出後は扉を閉めると自動でロックされます。
									</p>
									</div>
								</div>
							</div>

						</section>
						<section className="article__section article__section02">
							<h2>カラーバリエーション</h2>
							<div className="color__list row">
								<div className="col-12 col-md-12">
									<ul className="list-circle">
										<li><img src={withPrefix("/images/recommend/26/26_022_01.jpg")} alt="シルバーメタル" /> シルバーメタル</li>
										<li><img src={withPrefix("/images/recommend/26/26_022_02.jpg")} alt="ホワイトウッド" /> ホワイトウッド</li>
										<li><img src={withPrefix("/images/recommend/26/26_022_03.jpg")} alt="ライトウォールナット" /> ライトウォールナット</li>
										<li><img src={withPrefix("/images/recommend/26/26_022_04.jpg")} alt="ミディアムウォールナット" /> ミディアムウォールナット</li>
										<li><img src={withPrefix("/images/recommend/26/26_022_05.jpg")} alt="ダークオーク" /> ダークオーク</li>
									</ul>
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
													ナスタ
											</td>
											</tr>
											<tr>
												<th>型番</th>
												<td>
													KS-ATSB002
											</td>

											</tr>
											<tr>
												<th>メーカーURL</th>
												<td><a href="https://www.nasta.co.jp/" target="_blank" rel="noreferrer">https://www.nasta.co.jp</a>/</td>
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
