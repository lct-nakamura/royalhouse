import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="フローリング" />
    <article className="l-article">
		<div className="article__container">
			<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
			<div className="article__title"><h1>フローリング</h1></div>
			<div className="article__contents">
				<div className="container">
					<div className="article__mv">
						<p>
						消臭、ウィルス、細菌、VOC低減効果をプラスした、安心、安全、健康かつ、天然木ツキ板のフローリングです。カラーバリエーションが豊富なので、あなたのお好みの色が見つかります。
						</p>
						<img src={withPrefix("/images/recommend/13/13_001.jpg")} alt="銘木フロアーラスティック" />
					</div>
					<section className="article__section article__section01">
						<h2>特徴</h2>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/13/13_002.jpg")} alt="オイル塗装の風合いを宿したラスティック塗装" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										オイル塗装の風合いを宿したラスティック塗装
									</h3>
									<p className="features__description">温もりのあるオイル塗装の風合いと、水拭きができキズがつきにくいUV塗装がドッキング。ikutaならではの高い技術で開発した、画期的な仕上げです。</p>
								</div>
							</div>
						</div>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/13/13_003.jpg")} alt="安定した寸法精度で床暖房に対応" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										安定した寸法精度で床暖房に対応
									</h3>
									<p className="features__description">
										厳しい試験をクリアした床暖房対応品です。
										また、木の本来の性質から割れや節欠けが出る場合もありますが、月日の流れとともにそれが味わいとなり、経年後も寸法精度は変わりにくくなっております。
									</p>
								</div>
							</div>
						</div>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/13/13_004.jpg")} alt="断面図" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">
										断面図
									</h3>
									<p className="features__description">
										※施工はノリ・クギ併用をお願いします。<br />
										※短手・長手オスザネ下に接着剤が入り込むように塗布して下さい。<br />
										床暖房を使用しない場合も強く推奨します。<br />
										（詳しくは製品に同梱の施工要領書をご参照下さい。）
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className="article__section article__section02">
						<h2>カラーバリエーション</h2>
						<h3>ブラックチェリー</h3>
						<div className="color__list row">
							<div className="col-12 col-md-12">
								<p>
									上品で落ち着いた飴色の色合いと光沢が特徴です。チークやマホガニーと並ぶ銘木として、古くから高級家具材として使われてきました。木目は細かく滑らかで、使い込むほどに深みを増す紅褐色へと変わります。インテリアをラグジュアリーに彩る樹種です。
								</p>
							</div>
							<div className="col-12 col-md-5 mb-4">
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/13/13_005.jpg")} alt="ブラックチェリー" />
								</div>
							</div>
							<div className="col-12 col-md-7">
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/13/13_006.jpg")} alt="ブラックチェリー" />
								</div>
								<p className="color__list__caption">2Pタイプ</p>
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/13/13_007.jpg")} alt="ブラックチェリー" />
								</div>
								<p className="color__list__caption">3Pタイプ</p>

							</div>
						</div>

						<h3 className="mt-5">
							ナラ樫
						</h3>
						<div className="color__list row">
							<div className="col-12 col-md-5 mb-4">
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/13/13_008.jpg")} alt="ナラ樫" />
								</div>
							</div>
							<div className="col-12 col-md-7">
								<p>
									圧倒的な生命力で豊かな森を作るナラはドングリが実る木。重量感があり、耐久性や耐水性に優れているため、フローリングに長く使われてきた材です。力強いあら目の木目は存在感がありますが、様々な雰囲気の部屋に馴染みやすく、肌色の色合いは年月とともにやわらかい黄金色へと変化します。<br />
									※ナラ樫は、銘木フロアーシルク（旧銘木フロアー源平）のナラ樫源平のツキ板を使用しています。<br />
									<br />
								</p>
								<div className="row">
									<div className="col-12 col-md-8">
										<p>
											<span className="text-bold">節抜け</span><br />
											天死節は時間の経過で抜ける場合があり、抜けた後に下地素材が見えたりします。<br />
											また、節の形は様々だったり、できる場所にもバラツキがあります。
										</p>
									</div>
									<div className="col-5 col-md-4 my-auto">
										<div className="color__list__image text-center">
											<img src={withPrefix("/images/recommend/13/13_009.jpg")} alt="節抜け" />
										</div>
									</div>
								</div>

								<div className="color__list__image text-center mt-4">
									<img src={withPrefix("/images/recommend/13/13_010.jpg")} alt="ナラ樫" />
								</div>
								<p className="color__list__caption">2Pタイプ</p>
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/13/13_011.jpg")} alt="ナラ樫" />
								</div>
								<p className="color__list__caption">3Pタイプ</p>
							</div>
						</div>

						<h3 className="mt-5">
							イタヤカエデ
						</h3>
						<div className="color__list row">
							<div className="col-12 col-md-5 mb-4">
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/13/13_012.jpg")} alt="イタヤカエデ" />
								</div>
							</div>
							<div className="col-12 col-md-7">
								<p>
									色白で硬い材質に様々な斑模様が織りなす表情は、見るものを楽しませてくれます。楽器や家具によく使われ、中でも美しい杢を持つものは工芸材料として珍重され、万年筆などにも使われることもあります。<br />
									※イタヤカエデは、銘木フロアーシルク（旧銘木フロアー源平）のイタヤカエデのツキ板を使用しています。
								</p>
								<div className="row">
									<div className="col-12 col-md-8">
										<p>
											<span className="text-bold">赤身</span><br />
											木の中心に近い濃い色の部分が赤身です。心材とも呼ばれ辺材に比べて堅いのが特長です。
										</p>
									</div>
									<div className="col-5 col-md-4 my-auto">
										<div className="color__list__image text-center">
											<img src={withPrefix("/images/recommend/13/13_013.jpg")} alt="赤身" />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-12 col-md-8">
										<p>
											<span className="text-bold">白太</span><br />
											木の樹皮の直下に近い白い部分が白太です。辺材とも呼ばれ樹液分が多く柔らかいのが特長です。
										</p>
									</div>
									<div className="col-5 col-md-4 my-auto">
										<div className="color__list__image text-center">
											<img src={withPrefix("/images/recommend/13/13_014.jpg")} alt="白太" />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-12 col-md-8">
										<p>
											<span className="text-bold">黒い筋</span><br />
											成長期に鳥や動物に樹皮が傷つけられ、その部分がめくれ上がるなどして、木材の内部に痕跡として残った部分です。
										</p>
									</div>
									<div className="col-5 col-md-4 my-auto">
										<div className="color__list__image text-center">
											<img src={withPrefix("/images/recommend/13/13_015.jpg")} alt="黒い筋" />
										</div>
									</div>
								</div>

								<div className="color__list__image text-center mt-4">
									<img src={withPrefix("/images/recommend/13/13_016.jpg")} alt="ナラ樫" />
								</div>
								<p className="color__list__caption">2Pタイプ</p>
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/13/13_017.jpg")} alt="ナラ樫" />
								</div>
								<p className="color__list__caption">3Pタイプ</p>
							</div>
						</div>


						<h3 className="mt-5">
							ウォールナット
						</h3>
						<div className="color__list row">
							<div className="col-12 col-md-12">
								<p>
									重厚さと気品を感じさせる、落ち着いた色合いと美しい木目。クラシカルはもちろん、モダンな空間にもおすすめです。硬く粘りがある一方、軽く扱いやすいため、加工や塗装にも優れ、加工後の狂いが少ないため楽器や銃槍にも使われます。濃い茶色から明るくまろやかな茶色に経年変化します。

								</p>
							</div>
							<div className="col-12 col-md-5 mb-4">
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/13/13_018.jpg")} alt="ウォールナット" />
								</div>
							</div>
							<div className="col-12 col-md-7">
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/13/13_019.jpg")} alt="ウォールナット" />
								</div>
								<p className="color__list__caption">2Pタイプ</p>
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/13/13_020.jpg")} alt="ウォールナット" />
								</div>
								<p className="color__list__caption">3Pタイプ</p>

							</div>
						</div>

						<h3 className="mt-5">
							ハードメープル
						</h3>
						<div className="color__list row">
							<div className="col-12 col-md-12">
								<p>
									明るい乳白色のきめ細やかな木肌が特徴です。五大湖周辺に広く分布し、雪の重みに耐えて成長した非常に硬い材で、衝撃や摩擦に強く、ダンスホールのフロアに使われるほど。「木の真珠」と言われる上品な木肌は、どんな空間にも自然に溶け込みます。経年変化で飴色へと変わります。
								</p>
							</div>
							<div className="col-12 col-md-5 mb-4">
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/13/13_021.jpg")} alt="ハードメープル" />
								</div>
							</div>
							<div className="col-12 col-md-7">
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/13/13_022.jpg")} alt="ハードメープル" />
								</div>
								<p className="color__list__caption">2Pタイプ</p>
								<div className="color__list__image text-center">
									<img src={withPrefix("/images/recommend/13/13_023.jpg")} alt="ハードメープル" />
								</div>
								<p className="color__list__caption">3Pタイプ</p>
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
											<td>株式会社イクタ</td>
										</tr>
										<tr>
											<th>型番</th>
											<td>
												ブラックチェリー<br />
												床暖房対応品	2P（ツヤなし）	AW-CR2<br />
												床暖房対応品	3P（ツヤなし）	AW-CR3<br /><br />

												ナラ樫<br />
												床暖房対応品	2P（ツヤなし）	AW-NKR2<br />
												床暖房対応品	3P（ツヤなし）	AW-NKR3<br /><br />

											イタヤカエデ<br />
											床暖房対応品	2P（ツヤなし）	AW-IKR2<br />
											床暖房対応品	3P（ツヤなし）	AW-IKR3<br /><br />

											ウォールナット<br />
											床暖房対応品	2P（ツヤなし）	AW-WR2<br />
											床暖房対応品	3P（ツヤなし）	AW-WR3<br /><br />

											ハードメープル<br />
											床暖房対応品	2P（ツヤなし）	AW-MR2<br />
											床暖房対応品	3P（ツヤなし）	AW-MR3
										</td>

										</tr>
										<tr>
											<th>メーカーURL</th>
											<td><a href="https://ikuta.co.jp/" target="_blank">https://ikuta.co.jp</a>/</td>
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
