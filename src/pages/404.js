import React from "react"
import { Link } from "gatsby"
import { withPrefix } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Map from "../components/map"

const NotFoundPage = () => (
  <Layout>
    <SEO title="ページが見つかりませんでした。" />
    <article className="l-article">
      <div className="article__container">
        <button className="article__btn--close js-articlebtn-close"><span></span><span></span><span></span></button>
        <div class="article__title">
          <h1>404 Not Found <br />ページが見つかりませんでした。</h1>
        </div>
        <div className="article__contents">
          <div className="container">
          <section className="article__section article__section01">
              <p className="col-12 text-center">
                  申し訳申し訳ございませんが、お探しのページが見つかりませんでした。<br />
                  お探しのページは削除されたか、URLが変更された可能性がございます。
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
