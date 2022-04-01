import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = () => (
  <nav className="l-nav">
    <button className="nav__btn--close js-menubtn-close"><span></span><span></span><span></span></button>
    <div className="nav__container">
      <h2 className="nav__ttl">バーチャル展示場</h2>
      <button className="nav__btn--yt js-modal-triger--2">
        <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 639.37 447.66"><path d="M626.2,70.05a80.11,80.11,0,0,0-56.35-56.36C519.82,0,319.68,0,319.68,0S119.55,0,69.52,13.17c-26.86,7.37-49,29.49-56.35,56.88C0,120.08,0,223.83,0,223.83S0,328.11,13.17,377.62A80.11,80.11,0,0,0,69.52,434c50.56,13.69,250.17,13.69,250.17,13.69s200.13,0,250.16-13.17a80.11,80.11,0,0,0,56.36-56.35c13.16-50,13.16-153.78,13.16-153.78S639.9,120.08,626.2,70.05ZM256,319.68V128l166.42,95.85Z"/></svg></i>
        <span>使い方案内</span>
      </button>
      <section className="nav-sec">
        <h3 className="nav-sec__ttl">バーチャルモデルハウス</h3>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/lifeblock" className="nav__link nv01" activeClassName="is-current">
              <p>Life Block 2019年度<br />グッドデザイン賞受賞作品</p>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/vr/space" className="nav__link nv02" activeClassName="is-current">
              <p>収納、庭、ガレージ・・・<br />空間を上手に活用した家づくり</p>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/vr/07" className="nav__link nv03" activeClassName="is-current">
              <p>ペットと楽しく暮らす家</p>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/vr/outdoor" className="nav__link nv0４" activeClassName="is-current">
              <p>アウトドアスタイルで<br />わくわく暮らす</p>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/vr/wood" className="nav__link nv05" activeClassName="is-current">
              <p>木の味わいに満ちた癒しの住まい</p>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/vr/energy" className="nav__link nv06" activeClassName="is-current">
              <p>エネルギーの自給自足を目指す<br />次世代の住まい</p>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/vr/family" className="nav__link nv07" activeClassName="is-current">
              <p>子育て夫婦が楽しく暮らせる<br />家づくり</p>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/vr/groundone" className="nav__link nv08" activeClassName="is-current">
              <p>平屋の魅力</p>
            </Link>
          </li>
        </ul>
      </section>
      <section className="nav-sec">
        <h3 className="nav-sec__ttl">インフォメーション</h3>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/information" className="nav__link nv09" activeClassName="is-current">
              <p>おしらせ・おすすめ商品</p>
            </Link>
          </li>
        </ul>
      </section>
      <section className="nav-sec">
        <h3 className="nav-sec__ttl">イベント</h3>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="https://www.royal-house.co.jp/campaign/" className="nav__link nv10" target="_blank">
              <p>ロイヤルキャンペーン</p>
            </a>
          </li>
        </ul>
      </section>
      <section className="nav-sec">
        <h3 className="nav-sec__ttl">動画で知る家づくり</h3>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/sss" className="nav__link nv11" activeClassName="is-current">
              <p>SSS構法</p>
            </Link>
          </li>
        </ul>
      </section>
      <section className="nav-sec">
        <h3 className="nav-sec__ttl">ギャラリー</h3>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/art" className="nav__link nv12" activeClassName="is-current">
              <p>グッドデザイン<br />Photoミュージアム</p>
            </Link>
          </li>
        </ul>
      </section>
      <section className="nav-sec">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="https://www.royal-house.co.jp/fcshop/" className="nav__link nav__link--2" target="_blank"><i className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 497.25"><polygon points="256.03 0 0 182.94 0 497.25 201.61 497.25 201.61 329.3 310.39 329.3 310.39 497.25 512 497.25 512 182.94 256.03 0"/></svg></i>
              <p>お近くのロイヤルハウス</p>
            </a>
          </li>
          <li className="nav__item">
            <Link to="/form/" className="nav__link nav__link--2" activeClassName="is-current"><i className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 575.99 448"><path d="M542.22.05c-54.8,3.11-163.72,14.43-231,55.59A15.37,15.37,0,0,0,304,68.81V432.68c0,11.55,12.63,18.85,23.28,13.49,69.18-34.82,169.23-44.32,218.7-46.92,16.89-.89,30-14.43,30-30.66V30.75C576,13,560.64-1,542.22.05ZM264.73,55.64C197.5,14.48,88.58,3.17,33.78.05,15.36-1,0,13,0,30.75V368.6c0,16.24,13.13,29.78,30,30.66,49.49,2.6,149.59,12.11,218.77,46.95,10.62,5.35,23.21-1.94,23.21-13.46V68.63A15.05,15.05,0,0,0,264.73,55.64Z"/></svg></i>
              <p>Webカタログ</p>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact/" className="nav__link nav__link--2" activeClassName="is-current"><i className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496"><path d="M496,248c0,137-111,248-248,248S0,385,0,248,111,0,248,0,496,111.08,496,248ZM254.65,82c-54.49,0-89.25,23-116.54,63.76A12,12,0,0,0,140.82,162l34.7,26.31a12,12,0,0,0,16.66-2.13c17.87-22.65,30.12-35.79,57.31-35.79,20.43,0,45.7,13.14,45.7,33,0,15-12.37,22.67-32.54,34C239.13,230.53,208,246.94,208,288v4a12,12,0,0,0,12,12h56a12,12,0,0,0,12-12v-1.33C288,262.2,371.19,261,371.19,184,371.19,126,311,82,254.65,82ZM248,330a46,46,0,1,0,46,46A46.05,46.05,0,0,0,248,330Z"/></svg></i>
              <p>お問い合わせ</p>
            </Link>
          </li>
        </ul>
      </section>
    </div>
    {/* <div className="nav-sns">
      <ul className="nav-sns__list">
        <li className="nav-sns__item">
          <a className="nav-sns__link brand-twitter" href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 415.84"><path d="M459.37,103.63c.33,4.55.33,9.1.33,13.65,0,138.72-105.59,298.56-298.56,298.56A296.51,296.51,0,0,1,0,368.73,218,218,0,0,0,25.34,370,210.15,210.15,0,0,0,155.61,325.2,105.13,105.13,0,0,1,57.5,252.43a132.94,132.94,0,0,0,19.82,1.62,111.09,111.09,0,0,0,27.61-3.57,105,105,0,0,1-84.14-103v-1.3a105.68,105.68,0,0,0,47.43,13.32A105.07,105.07,0,0,1,35.74,19.17,298.27,298.27,0,0,0,252.1,129a118.63,118.63,0,0,1-2.6-24A105,105,0,0,1,431.1,33.14,206.58,206.58,0,0,0,497.7,7.8a104.59,104.59,0,0,1-46.13,57.82A210.28,210.28,0,0,0,512,49.38a225.4,225.4,0,0,1-52.63,54.25Z"/></svg>
          </a>
        </li>
        <li className="nav-sns__item">
          <a className="nav-sns__link brand-facebook" href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1017.78"><path d="M512,0C229.23,0,0,229.23,0,512c0,255.55,187.23,467.37,432,505.78V660H302V512H432V399.2C432,270.88,508.44,200,625.39,200c56,0,114.61,10,114.61,10V336H675.44c-63.6,0-83.44,39.47-83.44,80v96H734L711.3,660H592v357.78C836.77,979.37,1024,767.55,1024,512,1024,229.23,794.77,0,512,0Z"/></svg>
          </a>
        </li>
        <li className="nav-sns__item">
          <a className="nav-sns__link brand-line" href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448"><path d="M272.1,172.2v71.1a3.16,3.16,0,0,1-3.2,3.2H257.5a3.31,3.31,0,0,1-2.6-1.3l-32.6-44v42.2a3.16,3.16,0,0,1-3.2,3.2H207.7a3.16,3.16,0,0,1-3.2-3.2V172.3a3.16,3.16,0,0,1,3.2-3.2H219a3,3,0,0,1,2.6,1.4l32.6,44V172.3a3.16,3.16,0,0,1,3.2-3.2h11.4a3.16,3.16,0,0,1,3.3,3.1Zm-82-3.2H178.7a3.16,3.16,0,0,0-3.2,3.2v71.1a3.16,3.16,0,0,0,3.2,3.2h11.4a3.16,3.16,0,0,0,3.2-3.2V172.2a3.22,3.22,0,0,0-3.2-3.2Zm-27.5,59.6H131.5V172.2a3.16,3.16,0,0,0-3.2-3.2H116.9a3.16,3.16,0,0,0-3.2,3.2v71.1a2.94,2.94,0,0,0,.9,2.2,3.37,3.37,0,0,0,2.2.9h45.7a3.16,3.16,0,0,0,3.2-3.2V231.8a3.2,3.2,0,0,0-3.1-3.2ZM332.1,169H286.4a3.22,3.22,0,0,0-3.2,3.2v71.1a3.22,3.22,0,0,0,3.2,3.2h45.7a3.16,3.16,0,0,0,3.2-3.2V231.9a3.16,3.16,0,0,0-3.2-3.2H301v-12h31.1a3.16,3.16,0,0,0,3.2-3.2V202a3.16,3.16,0,0,0-3.2-3.2H301v-12h31.1a3.16,3.16,0,0,0,3.2-3.2V172.2a3.36,3.36,0,0,0-3.2-3.2ZM448,81.7V367c-.1,44.8-36.8,81.1-81.7,81H81c-44.8-.1-81.1-36.9-81-81.7V81C.1,36.2,36.9-.1,81.7,0H367C411.8.1,448.1,36.8,448,81.7ZM386.4,204.3c0-73-73.2-132.4-163.1-132.4S60.2,131.3,60.2,204.3c0,65.4,58,120.2,136.4,130.6,19.1,4.1,16.9,11.1,12.6,36.8-.7,4.1-3.3,16.1,14.1,8.8s93.9-55.3,128.2-94.7C375.1,259.8,386.4,233.5,386.4,204.3Z"/></svg>
          </a>
        </li>
        <li className="nav-sns__item">
          <a className="nav-sns__link brand-instagram" href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448.25 448.15"><path d="M224.18,109.18A114.9,114.9,0,1,0,339.07,224.07,114.71,114.71,0,0,0,224.18,109.18Zm0,189.6a74.7,74.7,0,1,1,74.69-74.7,74.83,74.83,0,0,1-74.69,74.7Zm146.39-194.3a26.8,26.8,0,1,1-26.79-26.8A26.74,26.74,0,0,1,370.57,104.48Zm76.11,27.2c-1.71-35.9-9.9-67.7-36.21-93.9s-58-34.41-93.9-36.2c-37-2.11-147.89-2.11-184.89,0-35.81,1.7-67.6,9.89-93.9,36.1s-34.41,58-36.21,93.89c-2.09,37-2.09,147.9,0,184.9,1.7,35.9,9.9,67.71,36.21,93.9s58,34.4,93.9,36.2c37,2.11,147.89,2.11,184.89,0,35.9-1.7,67.71-9.89,93.9-36.2s34.4-58,36.21-93.9c2.1-37,2.1-147.8,0-184.8Zm-47.81,224.5a75.63,75.63,0,0,1-42.6,42.6c-29.5,11.7-99.5,9-132.1,9s-102.7,2.6-132.1-9a75.63,75.63,0,0,1-42.6-42.6c-11.7-29.5-9-99.5-9-132.11s-2.6-102.7,9-132.1a75.63,75.63,0,0,1,42.6-42.6c29.5-11.7,99.5-9,132.1-9s102.7-2.6,132.1,9A75.63,75.63,0,0,1,398.87,92c11.7,29.5,9,99.5,9,132.1S410.57,326.77,398.87,356.18Z"/></svg>
          </a>
        </li>
        <li className="nav-sns__item">
          <a className="nav-sns__link brand-youtube" href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 546.13 384"><path d="M534.72,60.08a68.6,68.6,0,0,0-48.28-48.59C443.85,0,273.07,0,273.07,0S102.29,0,59.7,11.49A68.61,68.61,0,0,0,11.41,60.08C0,103,0,192.39,0,192.39s0,89.44,11.41,132.3c6.28,23.65,24.79,41.5,48.29,47.82C102.29,384,273.07,384,273.07,384s170.78,0,213.37-11.49c23.49-6.32,42-24.17,48.28-47.82,11.41-42.86,11.41-132.3,11.41-132.3S546.13,103,534.72,60.08ZM217.21,273.59V111.18L360,192.39l-142.74,81.2Z"/></svg>
          </a>
        </li>
      </ul>
    </div> */}
  </nav>
)


export default Nav
