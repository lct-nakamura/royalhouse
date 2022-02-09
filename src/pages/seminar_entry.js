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
            <p><img src={withPrefix("/images/form/bnr_form.jpg")} alt="オンラインセミナーはこちら" /></p>
            <p><img src={withPrefix("/images/form/smn_pc.png")} alt="オンラインセミナーはこちら" className="pc" /></p>
            <p><img src={withPrefix("/images/form/smn_sp.png")} alt="オンラインセミナーはこちら" className="sp" /></p>
    <h2>申し込みフォーム</h2>
    <form id="mailformpro" action="../mail-semiar_entry.php" method="POST">
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_01">氏名</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="text" data-type="text" className="form-control" id="MfpField_01" placeholder="山田　太郎" name="氏名" required="required" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_04">メールアドレス</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="email" data-type="email" className="form-control" id="MfpField_04" placeholder="info@xxx.com" name="メールアドレス" required="required" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_06">視聴希望日</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <select name="視聴希望日" className="form-control" id="MfpField_06" required="required" >
                      <option value="">選択してください</option>
                      <option value="第2回 2月16日">第2回 2月16日</option>
                      <option value="第3回 3月9日">第3回 3月9日</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4 required"><label for="MfpField_02">お住まいの都道府県をご入力ください</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <select name="お住まいの都道府県をご入力ください" className="form-control" id="MfpField_02" required="required" >
                      <option value="">選択してください</option>
                      <option value="北海道">北海道</option>
                      <option value="青森県">青森県</option>
                      <option value="岩手県">岩手県</option>
                      <option value="宮城県">宮城県</option>
                      <option value="秋田県">秋田県</option>
                      <option value="山形県">山形県</option>
                      <option value="福島県">福島県</option>
                      <option value="茨城県">茨城県</option>
                      <option value="栃木県">栃木県</option>
                      <option value="群馬県">群馬県</option>
                      <option value="埼玉県">埼玉県</option>
                      <option value="千葉県">千葉県</option>
                      <option value="東京都">東京都</option>
                      <option value="神奈川県">神奈川県</option>
                      <option value="新潟県">新潟県</option>
                      <option value="富山県">富山県</option>
                      <option value="石川県">石川県</option>
                      <option value="福井県">福井県</option>
                      <option value="山梨県">山梨県</option>
                      <option value="長野県">長野県</option>
                      <option value="岐阜県">岐阜県</option>
                      <option value="静岡県">静岡県</option>
                      <option value="愛知県">愛知県</option>
                      <option value="三重県">三重県</option>
                      <option value="滋賀県">滋賀県</option>
                      <option value="京都府">京都府</option>
                      <option value="大阪府">大阪府</option>
                      <option value="兵庫県">兵庫県</option>
                      <option value="奈良県">奈良県</option>
                      <option value="和歌山県">和歌山県</option>
                      <option value="鳥取県">鳥取県</option>
                      <option value="島根県">島根県</option>
                      <option value="岡山県">岡山県</option>
                      <option value="広島県">広島県</option>
                      <option value="山口県">山口県</option>
                      <option value="徳島県">徳島県</option>
                      <option value="香川県">香川県</option>
                      <option value="愛媛県">愛媛県</option>
                      <option value="高知県">高知県</option>
                      <option value="福岡県">福岡県</option>
                      <option value="佐賀県">佐賀県</option>
                      <option value="長崎県">長崎県</option>
                      <option value="熊本県">熊本県</option>
                      <option value="大分県">大分県</option>
                      <option value="宮崎県">宮崎県</option>
                      <option value="鹿児島県">鹿児島県</option>
                      <option value="沖縄県">沖縄県</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4"><label for="MfpField_07">家を建てる予定は？</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <select name="家を建てる予定は？" className="form-control" id="MfpField_07" >
                    <option value="">選択してください</option>
                      <option value="家を建てる予定はない">家を建てる予定はない</option>
                      <option value="ある(半年以内)">ある(半年以内)</option>
                      <option value="ある(半年～1年以内)">ある(半年～1年以内)</option>
                      <option value="ある(1年~1年半以内)">ある(1年~1年半以内)</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4"><label for="MfpField_09">商談中の加盟店(現在商談中でない場合、「なし」とご記入下さい)</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="text" data-type="text" className="form-control" id="MfpField_09" placeholder="" name="商談中の加盟店" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4"><label for="MfpField_08">デザイナーへの質問（ご質問によってはセミナーの中でデザイナーがお答えします）</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <textarea name="デザイナーへの質問" rows="4" cols="40" data-type="textarea" className="form-control" id="MfpField_08" />
                  </div>
                </div>
                <p style={{fontWeight:'bold',textAlign: 'center',fontSize: '1.6rem',margin:'24px 0 0'}}>オリジナルカタログ「デザイン実例集」を<br className="sp"/>ご希望の方は<br />ご自宅住所・お電話番号をご入力ください<br /><span style={{fontSize: '1.4rem'}}>※後日郵送にてプレゼントいたします。</span></p>
                <div className="form-group row">
                  <div className="col-12 col-sm-4"><label for="MfpField_03">ご住所（ご自宅）</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="text" data-type="text" className="form-control" id="MfpField_03" placeholder="" name="お住まいの地域" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-12 col-sm-4"><label for="MfpField_05">お電話番号</label></div>
                  <div className="input-group col-12 col-sm-8 ">
                    <input type="text" data-type="text" className="form-control" id="MfpField_05" placeholder="" name="お電話番号" />
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
