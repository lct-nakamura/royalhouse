import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Map from "../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="10秒エントリー" />
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
          <h1>10秒エントリー</h1>
        </div>
        <div className="article__contents">
          <div className="container">
            <section className="article__section article__section01">

              <h2>10秒エントリーフォーム</h2>
              
              <form id="mailformpro" action="../mail-entry.php" method="POST">
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_02">氏名</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="text" className="form-control" id="MfpField_02" placeholder="お名前" name="お名前" data-kana="ふりがな" required="required" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_04">メールアドレス</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="email" data-type="email" className="form-control" id="MfpField_04" placeholder="info@xxx.com" name="emailentry" required="required" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_05">お住いの地域</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <div className="w-100">
                      <select className="custom-select" id="MfpField_05" name="都道府県[]" required="required">
                        <option value="" selected="selected">【選択して下さい】</option>
                        <optgroup label="北海道・東北地方">
                          <option value="北海道">北海道</option>
                          <option value="青森県">青森県</option>
                          <option value="岩手県">岩手県</option>
                          <option value="秋田県">秋田県</option>
                          <option value="宮城県">宮城県</option>
                          <option value="山形県">山形県</option>
                          <option value="福島県">福島県</option>
                        </optgroup>
                        <optgroup label="関東地方">
                          <option value="栃木県">栃木県</option>
                          <option value="群馬県">群馬県</option>
                          <option value="茨城県">茨城県</option>
                          <option value="埼玉県">埼玉県</option>
                          <option value="東京都">東京都</option>
                          <option value="千葉県">千葉県</option>
                          <option value="神奈川県">神奈川県</option>
                        </optgroup>
                        <optgroup label="中部地方">
                          <option value="山梨県">山梨県</option>
                          <option value="長野県">長野県</option>
                          <option value="新潟県">新潟県</option>
                          <option value="富山県">富山県</option>
                          <option value="石川県">石川県</option>
                          <option value="福井県">福井県</option>
                          <option value="静岡県">静岡県</option>
                          <option value="岐阜県">岐阜県</option>
                          <option value="愛知県">愛知県</option>
                        </optgroup>
                        <optgroup label="近畿地方">
                          <option value="三重県">三重県</option>
                          <option value="滋賀県">滋賀県</option>
                          <option value="京都府">京都府</option>
                          <option value="大阪府">大阪府</option>
                          <option value="兵庫県">兵庫県</option>
                          <option value="奈良県">奈良県</option>
                          <option value="和歌山県">和歌山県</option>
                        </optgroup>
                        <optgroup label="四国地方">
                          <option value="徳島県">徳島県</option>
                          <option value="香川県">香川県</option>
                          <option value="愛媛県">愛媛県</option>
                          <option value="高知県">高知県</option>
                        </optgroup>
                        <optgroup label="中国地方">
                          <option value="鳥取県">鳥取県</option>
                          <option value="島根県">島根県</option>
                          <option value="岡山県">岡山県</option>
                          <option value="広島県">広島県</option>
                          <option value="山口県">山口県</option>
                        </optgroup>
                        <optgroup label="九州・沖縄地方">
                          <option value="福岡県">福岡県</option>
                          <option value="佐賀県">佐賀県</option>
                          <option value="長崎県">長崎県</option>
                          <option value="大分県">大分県</option>
                          <option value="熊本県">熊本県</option>
                          <option value="宮崎県">宮崎県</option>
                          <option value="鹿児島県">鹿児島県</option>
                          <option value="沖縄県">沖縄県</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_02">市区町村</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="text" data-type="text" className="form-control" id="MfpField_02" placeholder="〇〇市" name="市区町村" required="required" />
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
