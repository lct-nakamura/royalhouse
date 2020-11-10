import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Map from "../components/map"

const SecondPage = () => (
	<Layout>
		<SEO title="「強く、美しく、安心の住まいを実現する木造建築×革新的テクノロジー ロイヤルSSS構法」を徹底解説" />
		<article className="l-article">
			<div className="article__container">
				<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				<div className="article__title">
					<h1>「強く、美しく、安心の住まいを実現する木造建築×革新的テクノロジー ロイヤルSSS構法」を徹底解説</h1>
				</div>
				<div className="article__icon"><img src={withPrefix("/images/sss/icon.png")} alt="建築画像" /></div>
				<div className="article__contents">
					<div className="container">
						<section className="article__section article__section01">
							<p>ロイヤルSSS（スリーエス）構法は、先人の知恵と革新的テクノロジーを融合させて生まれた新しいニッポンの家づくり。 </p>
							<p>木という天然素材の強さや優しさと、伝統的な木造建築の美しさや賢さを活かしながら、より永く、より安心して暮らせる住まいへと進化した「安心の木造住宅」です。</p>
							<div className="text-center mt-5"><img src={withPrefix("/images/sss/royal_logo.png")} className="royal_logo" alt="ロゴ：ロイヤル構法" /></div>
						</section>
						<section className="article__section article__section02">
							<div className="movie__wrap row">
								<div className="col-12 col-md-12">
									<div className="movie text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/hoT3GtVwZ3M" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
								</div>
							</div>
							<p className="text-center small">※各動画の画面をおすと動画が流れます。</p>
						</section>
					</div>
				</div>
			</div>
		</article>
		<Map />
	</Layout>
)

export default SecondPage
