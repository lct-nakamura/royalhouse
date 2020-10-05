import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="キッチン" />
    <article className="l-article">
		<div className="article__container"> <button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
			<div className="article__title">
				<h1>キッチン</h1>
			</div>
			<div className="article__contents">
				<div className="container">
					<div className="article__mv">
						<p>お手入れ簡単な無垢の木のキッチンは、食器洗い乾燥機が標準装備なので、家事の時間短縮ができます。
						</p>
						<img src={withPrefix("/images/recommend/11/11_001.jpg")} alt="キッチン" />
					</div>
					<section className="article__section article__section01">

						<h2>特徴</h2>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/11/11_002.jpg")} alt="ハッとしてもサッと拭くだけ" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">ハッとしてもサッと拭くだけ</h3>
									<p className="features__description">スイージーの木は風合いをそこなわない塗膜で守られているため、うっかり油や調味料をこぼしてしまっても大丈夫。乾拭きか水拭きでサッと拭くだけでシミになりません。</p>
								</div>
							</div>
						</div>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/11/11_003.jpg")} alt="浄水器一体型ハンドシャワー水栓(ECO)" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">浄水器一体型ハンドシャワー水栓(ECO)</h3>
									<p className="features__description"> 11物質除去の浄水性能。中空糸膜で一般細菌や濁りを除去します。</p>
								</div>
							</div>
						</div>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/11/11_004.jpg")} alt="食器洗い乾燥機" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">食器洗い乾燥機</h3>
									<p className="features__description">業界初、洗浄性が高まったサークルラック。使いやすさを追求したスムーズラック(下カゴ)。押すだけで運転開始クイックスタート機能付き。</p>
								</div>
							</div>
						</div>
						<div className="features__block row">
							<div className="col-12 col-md-4">
								<div className="features__block__image text-center"><img src={withPrefix("/images/recommend/11/11_005.jpg")} alt="ガス加熱機器" /></div>
							</div>
							<div className="col-12 col-md-8">
								<div className="features__block__text">
									<h3 className="features__title">ガス加熱機器</h3>
									<p className="features__description">
										グリルの引き出しをスライド方式に変更。スムーズ性を向上。フラットなホーロートッププレートでお手入れは簡単です。</p>
								</div>
							</div>
						</div>
					</section>
					<section className="article__section article__section02">
						<h2>カラーバリエーション</h2>
						<div className="row">
							<div className="col-12 col-md-4">
								<h3>扉</h3>
							</div>
						</div>
						<div className="color__list row">
							<div className="col-6 col-md-4">
								<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/11/11_006_01.jpg")} alt="アイボリー" /></div>
								<p className="color__list__caption text-center">アイボリー(IV)</p>
							</div>
							<div className="col-6 col-md-4">
								<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/11/11_006_02.jpg")} alt="ナチュラル" /></div>
								<p className="color__list__caption text-center">ナチュラル(NL)</p>
							</div>
							<div className="col-6 col-md-4">
								<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/11/11_006_03.jpg")} alt="ハニーブラウン" /></div>
								<p className="color__list__caption text-center">ハニーブラウン(HB)</p>
							</div>
							<div className="col-6 col-md-4">
								<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/11/11_006_04.jpg")} alt="ホワイト" /></div>
								<p className="color__list__caption text-center">ホワイト(WH)</p>
							</div>
							<div className="col-6 col-md-4">
								<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/11/11_006_05.jpg")} alt="ミディアムブラウン" /></div>
								<p className="color__list__caption text-center">ミディアムブラウン(MB)</p>
							</div>
							<div className="col-6 col-md-4">
								<div className="color__list__image text-center"><img src={withPrefix("/images/recommend/11/11_006_06.jpg")} alt="ディープブラウン" /></div>
								<p className="color__list__caption text-center">ディープブラウン(DE)</p>
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
											<th>メーカーURL</th>
											<td><a href="https://www.woodone.co.jp/" target="_blank">https://www.woodone.co.jp</a>/</td>
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
