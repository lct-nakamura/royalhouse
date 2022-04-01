import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Map from "../../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="子育て夫婦が楽しく暮らせる家づくり" />
    <article className="l-article">
      <div className="article__container">
        <nav className="article-nav">
					<a onClick={() => window.history.back()} className="article__btn--back">
						<i><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="56" height="56" viewBox="0 0 24 24" strokeWidth="3" stroke="#1d945a" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg></i>
						<span><span>１つ前のページへ</span>戻る</span>
					</a>
					<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				</nav>
        <div className="article__title"><h1>子育て夫婦が楽しく暮らせる家づくり</h1></div>
        <div className="article__contents">
          <div className="container">
            <section className="menu__section">
              <div className="menu__list row">
                {/*<div className="col-12 col-md-6">
                  <Link to="/vr/25">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/family/menu_img06.jpg")} alt="環境にも地球にもやさしいエコな家「COMUNI Oshare Eco edition」" /></div>
                    <p className="menu__list__caption icon_triborder">環境にも地球にもやさしいエコな家<br />「COMUNI Oshare Eco edition」</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/26">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/family/menu_img07.jpg")} alt="ウイルス対策万全！住まいのきれいをデザインした家「COMUNIきれいシリーズ」" /></div>
                    <p className="menu__list__caption icon_triborder">ウイルス対策万全！<br />住まいのきれいをデザインした家<br />「COMUNIきれいシリーズ」</p>
                  </Link>
                </div>*/}
                <div className="col-12 col-md-6">
                  <Link to="/comuni">
                    <div class="menu__list__image"><img src={withPrefix("/images/vr/family/menu_img05.jpg")} alt="楽しく家事、子育てがシェアできる家「COMUNI Oshare」" /></div>
                    <p class="menu__list__caption icon_triborder">楽しく家事、子育てがシェアできる家<br/>「COMUNI Oshare」</p>
                    </Link>
                    </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/17">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/family/menu_img01.jpg")} alt="子育て中もキレイに暮らせる家「COMUNI美ファイン」" /></div>
                    <p className="menu__list__caption icon_triborder">子育て中もキレイに暮らせる家<br />「COMUNI美ファイン」</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/18">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/family/menu_img02.jpg")} alt="子供の成長を見守る家「COMUNI GROW」" /></div>
                    <p className="menu__list__caption icon_triborder">子供の成長を見守る家<br />「COMUNI GROW」</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/19">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/family/menu_img03.jpg")} alt="子育て夫婦が楽しく暮らす家「COMUNI」" /></div>
                    <p className="menu__list__caption icon_triborder">子育て夫婦が楽しく暮らす家<br />「COMUNI」</p>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <Link to="/vr/20">
                    <div className="menu__list__image"><img src={withPrefix("/images/vr/family/menu_img04.jpg")} alt="子育て夫婦が楽しく暮らす家「COMUNI」二世帯" /></div>
                    <p className="menu__list__caption icon_triborder">子育て夫婦が楽しく暮らす家<br />「COMUNI」二世帯</p>
                  </Link>
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
