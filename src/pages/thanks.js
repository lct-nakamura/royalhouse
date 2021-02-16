import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Map from "../components/map"

const NotFoundPage = () => (
  <Layout>
    <SEO title="お問い合わせありがとうございます" />
    <article className="l-article">
      <div className="article__container">
        <button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
        <div class="article__title">
          <h1>お問い合わせありがとうございます</h1>
        </div>
        <div className="article__contents">
          <div className="container">
          <section className="article__section article__section01">
              <p className="col-12 text-center">
                  ご記入していただいた情報は無事に送信されました。<br />
                  確認のため、お客様に自動返信メールをお送りしております。
              </p>
              <p className="text-center"><Link to="/">TOPへ戻る</Link></p>
            </section>
          </div>
        </div>
      </div>
    </article>
    <Map />
  </Layout>
)

export default NotFoundPage
