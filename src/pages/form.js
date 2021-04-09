import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Map from "../components/map"

const SecondPage = () => (
  <Layout>
    <SEO title="カタログ請求" />
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
          <h1>カタログ請求</h1>
        </div>
        <div className="article__contents">
          <div className="container">
            <section className="article__section article__section01">
              <h2>Webカタログ</h2>
              <p>下記フォームよりご送信いただくと、厳選プラン集や各商品のパンフレットなど数種類のWebカタログをすぐにご覧いただけます。</p>
              <h3>カタログイメージ</h3>
              <ul className="row catalog">
                <li className="col-6 col-md-4">
                  <figure>
                    <figcaption>厳選プラン集</figcaption><img src={withPrefix("/images/form/sec01_img01.jpg")} alt="カタログ表紙画像：厳選プラン集" />
                  </figure>
                </li>
                <li className="col-6 col-md-4">
                  <figure>
                    <figcaption>木心地のいい家 「kicolo」</figcaption>
                    <img src={withPrefix("/images/form/sec01_img02.jpg")} alt="カタログ表紙画像：木心地のいい家 「kicolo」" />
                  </figure>
                </li>
                <li className="col-6 col-md-4">
                  <figure>
                    <figcaption>「空庭のある家」+patio</figcaption>
                    <img src={withPrefix("/images/form/sec01_img03.jpg")} alt="カタログ表紙画像：「空庭のある家」+patio" />
                  </figure>
                </li>
              </ul>
            </section>
            <section className="article__section article__section02">
              <h2>プレミアム・カタログ・資料請求フォーム</h2>
              <form id="mailformpro" action="../mail.php" method="POST">
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_01">お名前</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="text" className="form-control" id="MfpField_01" placeholder="お名前" name="お名前" data-kana="フリガナ" required="required" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4 optional"><label for="MfpField_02">フリガナ</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="text" className="form-control" id="MfpField_02" placeholder="フリガナ" name="フリガナ" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_03">メールアドレス</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="email" data-type="email" className="form-control" id="MfpField_03" placeholder="info@xxx.com" name="email" required="required" />
                  </div>
                </div>
                <div className="w-100 ">
                  <div className="form-group row">
                    <div className="col-12 col-sm-4 required"><label for="MfpField_04">郵便番号</label></div>
                    <div className="input-group col-12 col-sm-8 ">
                      <input type="text" className="form-control" id="MfpField_04" placeholder="000-0000" name="郵便番号" data-address="都道府県,市区町村,市区町村" required="required" />
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required">住所</div>
                  <div className="input-group col-12 col-sm-8 ">
                    <div className="w-100">
                      <label for="MfpField_05">都道府県</label>
                      <select className="custom-select" id="MfpField_05" name="都道府県[]" required="required">
                        <option value="" defaultValue="selected">【選択して下さい】</option>
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
                    <div className="w-100 mt-2">
                      <label for="MfpField_06">市区町村</label>
                      <input type="text" className="form-control" id="MfpField_06" placeholder="市区町村" name="市区町村" required="required" />
                    </div>
                    <div className="w-100 mt-2">
                      <label for="MfpField_07">丁目番地以下</label>
                      <input type="text" className="form-control" id="MfpField_07" placeholder="〇丁目〇〇" name="丁目番地以下" required="required" />
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_08">電話番号</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="tel" id="MfpField_08" data-type="tel" name="電話番号" size="16" data-min="9" className="form-control" className="mfp_element_17" placeholder="000-0000-0000" required="required" style={{width: "96px"}} />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_09">ご職業</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <select className="custom-select" id="MfpField_09" name="ご職業" data-search-for="MfpField_15" required="required">
                      <option value="" defaultValue="selected">【選択して下さい】</option>
                      <option value="会社員">会社員 </option>
                      <option value="会社役員">会社役員 </option>
                      <option value="自営業">自営業 </option>
                      <option value="公務員">公務員 </option>
                      <option value="その他">その他 </option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="input-group col-12 col-sm-6 ">
                    <label for="MfpField_10">今後ロイヤルハウスからの<br />最新情報をお送りしてもよろしいですか？</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="最新情報送信[]" value="はい" id="MfpField_10a" checked />
                    <label className="form-check-label" for="MfpField_10a">はい</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="最新情報送信[]" value="いいえ" id="MfpField_10b" />
                    <label className="form-check-label" for="MfpField_10b">いいえ</label>
                  </div>
                </div>
                {/* <!-- <div className="text-center">
                  <div className="form-check ">
                    <input type="checkbox" className="form-check-input" id="MfpField_10" name="送信確認" value="送信チェック済み" required="required" />
                    <label className="form-check-label " for="MfpField_10">上記送信内容を確認したらチェックを入れてください</label>
                  </div>
                </div> --> */}
                <p className="text-center button__submit"><button type="submit" className="button button--primary">確認画面へ</button></p>
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
