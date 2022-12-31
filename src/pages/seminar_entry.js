import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Map from "../components/map"
const SecondPage = () => (
  <Layout>
    <SEO title="建築デザイナーによる家づくりWEBセミナー申し込みフォーム" />

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
          <h1>建築デザイナーによる家づくりWEBセミナー <br className="pc"/>申し込みフォーム</h1>
        </div>
        <div className="article__contents">
          <div className="container">          
            <section className="article__section article__section01">
            <p><img src={withPrefix("/images/form/bnr_form2_pc.png")} alt="オンラインセミナーはこちら" className="pc" /></p>
            <p><img src={withPrefix("/images/form/bnr_form2_sp.png")} alt="オンラインセミナーはこちら" className="sp" /></p>
            {/*<p><img src={withPrefix("/images/form/smn_pc.png")} alt="オンラインセミナーはこちら" className="pc" /></p>
            <p><img src={withPrefix("/images/form/smn_sp.png")} alt="オンラインセミナーはこちら" className="sp" /></p>*/}
    <h2>申し込みフォーム</h2>
    <form id="mailformpro" action="../mail-semiar_entry.php" method="POST">
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_01">氏名</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="text" data-type="text" className="form-control" id="MfpField_01" placeholder="ロイヤルハウス　太郎" name="氏名" required="required" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_04">メールアドレス</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="email" data-type="email" className="form-control" id="MfpField_04" placeholder="5madori＠royalhouse.co.jp" name="メールアドレス" required="required" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_02">お住まいの住所（市町村まで）<br />（※建設対応可否エリア確認の参考とさせていただきます。）</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="text" data-type="text" className="form-control" id="MfpField_02" placeholder="〇〇県〇〇市〇〇町" name="お住まいの地域" required="required" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="input-group col-12 col-sm-6 required">
                    <label for="MfpField_10">家を建てる予定はありますか？</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="家を建てる予定[]" value="はい" id="MfpField_10a" />
                    <label className="form-check-label" for="MfpField_10a">はい</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="家を建てる予定[]" value="いいえ" id="MfpField_10b" />
                    <label className="form-check-label" for="MfpField_10b">いいえ</label>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4"><label for="MfpField_03">建築希望時期を教えてください<br />（※上記選択で「はい」を選んだ方のみ入力）</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="text" data-type="text" className="form-control" id="MfpField_03" placeholder="" name="建築希望時期"/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="input-group col-12 col-sm-6 required">
                    <label for="MfpField_5">商談中の加盟店はありますか？　</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="商談中の加盟店[]" value="はい" id="MfpField_5a" />
                    <label className="form-check-label" for="MfpField_5a">はい</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="商談中の加盟店[]" value="いいえ" id="MfpField_5b" />
                    <label className="form-check-label" for="MfpField_5b">いいえ</label>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4"><label for="MfpField_06">加盟店名<br />（※上記選択で「はい」を選んだ方のみ入力）</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="text" data-type="text" className="form-control" id="MfpField_06" placeholder="" name="加盟店名"/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4"><label for="MfpField_07">その他質問</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <textarea name="その他質問" rows="4" cols="40" data-type="textarea" className="form-control" id="MfpField_07" />
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
