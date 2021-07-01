import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Map from "../components/map"
const SecondPage = () => (
  <Layout>
    <SEO title="35周年記念キャンペーンエントリーフォーム" />

    <article className="l-article">
      <div className="article__container">
        <nav className="article-nav">
					<a onClick={() => window.history.back()} className="article__btn--back">
						<i><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="56" height="56" viewBox="0 0 24 24" strokeWidth="3" stroke="#1d945a" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg></i>
						<span><span>１つ前のページへ</span>戻る</span>
					</a>
					<button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
				</nav>
        <div className="article__title">
          <h1>35周年記念キャンペーンエントリーフォーム</h1>
        </div>
        <div className="article__contents">
          <div className="container">
            <section className="article__section article__section01">
            <div className="entry-bnr">
    <Link to="/entry/"><img src={withPrefix("/images/campaign/campaign-main.png")} alt="35周年記念記念キャンペーン 対象商品はこちら" className="pc" /><img src={withPrefix("/images/campaign/campaign-main-sp.png")} alt="35周年記念記念キャンペーン 対象商品はこちら" className="sp" /></Link>
    </div>
    <p className="entry-intro">※エントリ―後、7月15日以降にご登録メールアドレスに応募詳細・応募申込フォームをお送りいたします。<br/>※応募フォームで応募コースをお選びいただきます。</p>
    <h2>エントリーフォーム</h2>
    <form id="mailformpro" action="../mail-entry.php" method="POST">
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_04">メールアドレス</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="email" data-type="email" className="form-control" id="MfpField_04" placeholder="info@xxx.com" name="メールアドレス" required="required" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4 optional"><label for="MfpField_02">郵便番号</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="text" data-type="text" className="form-control" id="MfpField_05" placeholder="例）810-0000" name="郵便番号"/>
                  </div>
                </div>
                
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_02">お住まいの都道府県と市区町村をご入力ください</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="text" data-type="text" className="form-control" id="MfpField_02" placeholder="〇〇県〇〇市" name="お住まいの地域" required="required" />
                  </div>
                </div>
                <p className="text-center button__submit"><button type="submit" className="button button--primary" id="contact__submit">確認画面へ</button></p>
              </form>
            </section>
          </div>
        </div>
      </div>
    </article>
    <Map />
  </Layout>
)
export default SecondPage
