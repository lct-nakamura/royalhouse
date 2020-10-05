import { Link } from "gatsby"
import { withPrefix } from 'gatsby'
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
const Map = () => (
    <div className="main-map">
        <div className="main-map__container">
            <div className="main-map__bg">
                {/* <Image filename="main.png" alt="" /> */}
                <img src={withPrefix("/images/main.png")} />
            </div>

            <div className="map-balloon pt01">
                <Link to="/art" className="map-balloon__link" activeClassName="is-current">
                    <p>グッドデザイン<br />Photoミュージアム</p>
                </Link>
            </div>
            <div className="map-balloon pt02">
                <Link to="/vr/space" className="map-balloon__link" activeClassName="is-current">
                    <p>収納、庭、ガレージ・・・<br />空間を上手に活用した家づくり</p>
                </Link>
            </div>
            <div className="map-balloon pt03">
                <Link to="/vr/07" className="map-balloon__link" activeClassName="is-current">
                    <p>ペットと楽しく暮らす家</p>
                </Link>
            </div>
            <div className="map-balloon pt04">
                <Link to="/vr/outdoor" className="map-balloon__link" activeClassName="is-current">
                    <p>アウトドアスタイルで<br />わくわく暮らす</p>
                </Link>
            </div>
            <div className="map-balloon pt05">
                <Link to="/vr/wood" className="map-balloon__link" activeClassName="is-current">
                    <p>木の味わいに満ちた<br />癒しの住まい</p>
                </Link>
            </div>
            <div className="map-balloon pt06">
                <Link to="/vr/energy" className="map-balloon__link" activeClassName="is-current">
                    <p>エネルギーの自給自足を目指す<br />次世代の住まい</p>
                </Link>
            </div>
            <div className="map-balloon pt07">
                <Link to="/vr/family" className="map-balloon__link" activeClassName="is-current">
                    <p>子育て夫婦が楽しく暮らせる<br />家づくり</p>
                </Link>
            </div>
            <div className="map-balloon pt08">
                <Link to="/vr/groundone" className="map-balloon__link" activeClassName="is-current">
                    <p>平屋の魅力</p>
                </Link>
            </div>
            <div className="map-balloon pt09">
                <Link to="/information" className="map-balloon__link" activeClassName="is-current">
                    <p>おしらせ<br />おすすめ商品</p>
                </Link>
            </div>
            <div className="map-balloon pt10">
                <a href="https://www.royal-house.co.jp/campaign/" className="map-balloon__link" target="_blank">
                    <p>ロイヤルフェア</p>
                </a>
            </div>
            <div className="map-balloon pt11">
                <Link to="/sss" className="map-balloon__link" activeClassName="is-current">
                    <p>SSS構法</p>
                </Link>
            </div>
            <div className="map-balloon pt12">
                <Link to="/lifeblock" className="map-balloon__link" activeClassName="is-current">
                    <p>「LIFE Block」の<br />バーチャル展示場</p>
                </Link>
            </div>
        </div>
    </div>
)


export default Map
