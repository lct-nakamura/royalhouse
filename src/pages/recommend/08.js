import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="ユニットバス" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title">
					<h1>ユニットバス エスコート（風呂）</h1>
				</div>
				<div className="article__contents">
					<div className="container">
						<div className="article__mv">
							<p>
								毎日の事を考えてお掃除がしやすい素材を採用しました。お湯が冷めにくいので、環境にも家計にもやさしい浴槽です。カラーバリエーションが豊富なのであなたらしい浴室を演出できます。
						</p>
							<img src={withPrefix("/images/recommend/08/08_001.jpg")} alt="ユニットバス" />
						</div>
						<section className="article__section article__section01">
							<h2>特徴</h2>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image features__block text-center">
										<img src={withPrefix("/images/recommend/08/08_002.jpg")} alt="高断熱フロア" />
									</div>
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/08/08_004.jpg")} alt="水はけがよく、滑りにくい床" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">安心・安全な浴室へ</h3>
										<h4>
											高断熱フロア
									</h4>
										<p className="features__description">
											一歩目から心地よく、足にやさしい床。断熱材サンドイッチ構造で高い断熱性を実現した「高断熱フロア」床下からの冷気をシャットアウトします。
									</p>
										<h4>
											水はけがよく、滑りにくい床
									</h4>
										<p className="features__description">
											表層シートパターンが排水性を向上させるとともに、微細な凹凸が足裏にぴったりフィット。水はけがよく滑りにくいので、家族みんなが安心して入浴できます。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/08/08_005.jpg")} alt=" ゆったり浴槽・ひろびろ洗い場「Wタイプレイアウト」" />
									</div>
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/08/08_006.jpg")} alt=" メタリア人大浴槽" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											快適・ラクな浴室へ
									</h3>
										<h4>
											ゆったり浴槽・ひろびろ洗い場「Wタイプレイアウト」
									</h4>
										<p className="features__description">
											浴室サイズは変えずに洗い場ひろびろ。ウェイビー浴槽・コーナーカウンターにより１坪サイズで業界一広い洗い場実現しました。
									</p>
										<h4>
											メタリア人大浴槽
									</h4>
										<p className="features__description">
											アクリルコート層（撥水/撥油成分配合）は平滑性が高いので汚れを弾き易く、簡単なこすり洗いで浴槽がきれいになります。ラメ入りの表面クリア層が艶やかで美しい浴槽です。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/08/08_007.jpg")} alt="ゆったりと節水の両立「ウエビー浴槽」" />
									</div>
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/08/08_008.jpg")} alt="高断熱浴槽" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											環境・家計にやさしい浴室へ
									</h3>
										<h4>
											ゆったりと節水の両立「ウエビー浴槽」
									</h4>
										<p className="features__description">
											節水（湯張り量：深さ70％で177L）しながら、快適な入浴感も実現しました。
									</p>
										<h4>
											高断熱浴槽
									</h4>
										<p className="features__description">
											浴槽を断熱材で包み込んでいるため、油温が4時間たっても約2.5℃しか下がらない、追い焚きいらずの保温構造です。
									</p>
									</div>
								</div>
							</div>
							<div className="features__block row">
								<div className="col-12 col-md-4">
									<div className="features__block__image text-center">
										<img src={withPrefix("/images/recommend/08/08_009.jpg")} alt="浴室換気暖房乾燥機" />
									</div>
								</div>
								<div className="col-12 col-md-8">
									<div className="features__block__text">
										<h3 className="features__title">
											浴室換気暖房乾燥機
									</h3>
										<p className="features__description">
											高濃度プラズマクラスターを搭載した浴室換気暖房乾燥機。寒い冬場も浴室を暖めておけます。高断熱フロアとの組み合わせで暖房効率はさらにアップします。
									</p>
									</div>
								</div>
							</div>
						</section>
						<section className="article__section article__section02">
							<h2>カラーバリエーション</h2>
							<div className="color__list row">
								<div className="col-12 col-md-12">
									<h3>壁</h3>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_010_01.jpg")} alt="ソルティオニックス" />
									</div>
									<p className="color__list__caption">ソルティオニックス</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_010_02.jpg")} alt="ブロッコベージュ" />
									</div>
									<p className="color__list__caption">ブロッコベージュ</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_010_03.jpg")} alt="ブロッコブラック" />
									</div>
									<p className="color__list__caption">ブロッコブラック</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_010_04.jpg")} alt="カルドウッド" />
									</div>
									<p className="color__list__caption">カルドウッド</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_010_05.jpg")} alt="マローネウッド" />
									</div>
									<p className="color__list__caption">マローネウッド</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_010_06.jpg")} alt="キューピーホワイト" />
									</div>
									<p className="color__list__caption">キューピーホワイト</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_010_07.jpg")} alt="キューピーベージュ" />
									</div>
									<p className="color__list__caption">キューピーベージュ</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_010_08.jpg")} alt="キューピーアクア" />
									</div>
									<p className="color__list__caption">キューピーアクア</p>
								</div>
							</div>
							<div className="color__list row">
								<div className="col-12 col-md-12">
									<h3>天井</h3>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_011_01.jpg")} alt="ホワイト（標準）" />
									</div>
									<p className="color__list__caption">ホワイト（標準）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_011_02.jpg")} alt="グラファイト（オプション）" />
									</div>
									<p className="color__list__caption">グラファイト（オプション）</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_011_03.jpg")} alt="カルドウッド（オプション）" />
									</div>
									<p className="color__list__caption">カルドウッド（オプション）※１</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_011_04.jpg")} alt="マローネウッド（オプション）" />
									</div>
									<p className="color__list__caption">マローネウッド（オプション）※１</p>
								</div>
								<div className="col-12 mb">
									<p className="features__description">
										※アクセントパネルと同一柄のみ対応
								</p>
								</div>
							</div>

							<div className="color__list row">
								<div className="col-12 col-md-12">
									<h3>床</h3>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_012_01.jpg")} alt="アストラホワイト" />
									</div>
									<p className="color__list__caption">アストラホワイト</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_012_02.jpg")} alt="アストラベージュ" />
									</div>
									<p className="color__list__caption">アストラベージュ</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_012_03.jpg")} alt="アストラブラック" />
									</div>
									<p className="color__list__caption">アストラブラック</p>
								</div>
								<div className="col-6 col-md-3">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_012_04.jpg")} alt="アストラブラウン" />
									</div>
									<p className="color__list__caption">アストラブラウン</p>
								</div>
								<div className="col-6 col-md-3 mb">
									<div className="color__list__image text-center">
										<img src={withPrefix("/images/recommend/08/08_012_05.jpg")} alt="ウッディブラウン" />
									</div>
									<p className="color__list__caption">ウッディブラウン</p>
								</div>
							</div>

							<div className="color__list row">
								<div className="col-12 col-md-12">
									<h3>浴槽</h3>
								</div>
								<h4 className="mini-mb">ウェイビー浴槽（1600）メタリア人大浴場</h4>
								<div className="row">
									<div className="col-6 col-md-3">
										<div className="color__list__image text-center">
											<img src={withPrefix("/images/recommend/08/08_013_01.jpg")} alt="メタリアブラックツートン" />
										</div>
										<p className="color__list__caption">メタリアブラックツートン</p>
									</div>
									<div className="col-6 col-md-3">
										<div className="color__list__image text-center">
											<img src={withPrefix("/images/recommend/08/08_013_02.jpg")} alt="メタリアブラウンツートン" />
										</div>
										<p className="color__list__caption">メタリアブラウンツートン</p>
									</div>
									<div className="col-6 col-md-3">
										<div className="color__list__image text-center">
											<img src={withPrefix("/images/recommend/08/08_013_03.jpg")} alt="メタリアベージュツートン" />
										</div>
										<p className="color__list__caption">メタリアベージュツートン</p>
									</div>
									<div className="col-6 col-md-3 mb">
										<div className="color__list__image text-center">
											<img src={withPrefix("/images/recommend/08/08_013_04.jpg")} alt="メタリアグラスツートン" />
										</div>
										<p className="color__list__caption">メタリアグラスツートン</p>
									</div>

								</div>
								<h4 className="mini-mb">ウェイビーFRA浴槽（1200）アクリル人大浴場</h4>
								<div className="row">
									<div className="col-6 col-md-3">
										<div className="color__list__image text-center">
											<img src={withPrefix("/images/recommend/08/08_014_01.jpg")} alt="キラットブラックツートン" />
										</div>
										<p className="color__list__caption">キラットブラックツートン</p>
									</div>
									<div className="col-6 col-md-3">
										<div className="color__list__image text-center">
											<img src={withPrefix("/images/recommend/08/08_014_02.jpg")} alt="キラットブラウンツートン" />
										</div>
										<p className="color__list__caption">キラットブラウンツートン</p>
									</div>
									<div className="col-6 col-md-3">
										<div className="color__list__image text-center">
											<img src={withPrefix("/images/recommend/08/08_014_03.jpg")} alt="キラットベージュツートン" />
										</div>
										<p className="color__list__caption">キラットベージュツートン</p>
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
												<td>
													積水ホームテクノ
											</td>
											</tr>
											<tr>
												<th>メーカーURL</th>
												<td><a href="http://www.bathsaloon.jp/" target="_blank" rel="noreferrer">http://www.bathsaloon.jp</a>/</td>
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
