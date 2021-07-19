import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Map from "../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="お問い合わせ" />
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
          <h1>お問い合わせ</h1>
        </div>
        <div className="article__contents">
          <div className="container">
            <section className="article__section article__section01">

              <h2>お問い合わせフォーム</h2>
              <p>子育てしやすい家・ペットと暮らす・二世帯住宅の暮らし・趣味を楽しむなど、実現したい暮らし方とその実現について、些細なことでもご相談ください！</p>
              <form id="mailformpro" action="../mail.php" method="POST">
                <div className="form-group row">
                  <div className="col-12 col-sm-6 required"><label for="MfpField_01" required="required">お問い合わせ内容をご選択ください。</label><p className="small">※複数選択可能</p></div>
                  <div className="input-group col-12 col-sm-6">

                    <div className="form-check d-block w-100">
                      <input className="form-check-input" type="checkbox" id="MfpField_01a" name="お問い合わせ内容選択[]" value="暮らしについて" />
                      <label className="form-check-label" for="MfpField_01a">暮らしについて</label>
                    </div>
                    <div className="form-check d-block w-100">
                      <input className="form-check-input" type="checkbox" id="MfpField_01b" name="お問い合わせ内容選択[]" value="住宅や性能について" />
                      <label className="form-check-label" for="MfpField_01b">住宅や性能について</label>
                    </div>
                    <div className="form-check d-block w-100">
                      <input className="form-check-input" type="checkbox" id="MfpField_01c" name="お問い合わせ内容選択[]" value="間取りについて" />
                      <label className="form-check-label" for="MfpField_01c">間取りについて</label>
                    </div>
                    <div className="form-check d-block w-100">
                      <input className="form-check-input" type="checkbox" id="MfpField_01d" name="お問い合わせ内容選択[]" value="土地探しについて" />
                      <label className="form-check-label" for="MfpField_01d">土地探しについて </label>
                    </div>
                    <div className="form-check d-block w-100">
                      <input className="form-check-input" type="checkbox" id="MfpField_01e" name="お問い合わせ内容選択[]" value="設備、商品について" />
                      <label className="form-check-label" for="MfpField_01e">設備、商品について </label>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_02">氏名</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="text" className="form-control" id="MfpField_02" placeholder="お名前" name="お名前" data-kana="ふりがな" required="required" />
                  </div>
                </div>                
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_03">ふりがな</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="text" className="form-control" id="MfpField_03" placeholder="おなまえ" name="ふりがな" required="required" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_04">メールアドレス</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="email" data-type="email" className="form-control" id="MfpField_04" placeholder="info@xxx.com" name="email" required="required" />
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
                  <div className="col-12 col-sm-4 required"><label for="MfpField_06">お問い合わせ内容</label></div>
                  <div className="input-group col-12 col-sm-8 "> <textarea id="MfpField_06" className="form-control" rows="5" placeholder="こちらにお問い合わせ内容を入力してください" required="required" name="お問い合わせ内容"></textarea></div>
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
