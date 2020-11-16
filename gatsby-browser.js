/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import "./src/stylus/style.styl"
import "./src/scss/park.scss"

import anime from 'animejs/lib/anime.es.js';
const $ = require("jquery")

//風船アニメーション
var randomMovementX = function () {
    return anime.random(-5, 5) + 'px'
}

var randomMovementY = function () {
    return anime.random(-5, 5) + 'px'
}

var randomSpeed = function () {
    return anime.random(1600, 2500)
}

function balloonAnime() {
    var timelineParameters = anime.timeline({
        loop: true,
        direction: 'alternate',
        easing: 'easeOutExpo',
        duration: randomSpeed,
    });

    timelineParameters
        .add({
            targets: '.map-balloon',
            translateX: [{ value: randomMovementX }, { value: randomMovementX }, { value: randomMovementX }, { value: 0 }],
            translateY: [{ value: randomMovementY }, { value: randomMovementY }, { value: randomMovementY }, { value: 0 }],
            easing: 'linear',
            duration: randomSpeed,
        });
}



export const onClientEntry = () => {
    // console.log("We've started!")
    window.addEventListener('load', () => {
        // document.body.classList.add('test')
    });
}

export const onInitialClientRender = () => {
    $(document).ready(() => {
        var state = false;
        var scrollpos;
        $('.js-menubtn').on('click', function () {
            scrollpos = $(window).scrollTop();
            $('body').addClass('is-fixed').css({
                'top': -scrollpos
            });
            $('.l-nav').addClass('is-show');
        });
        $('.js-menubtn-close').on('click', function () {
            $('body').removeClass('is-fixed').css({
                'top': 0
            });
            $('.l-nav').removeClass('is-show');
            window.scrollTo(0, scrollpos);
        });
        $('.js-menubtn-close').on('click', function () {
            if (state == false) {
                state = true;
            } else {
                $('body').removeClass('is-fixed').css({
                    'top': 0
                });
                $('.l-nav').removeClass('is-show');
                window.scrollTo(0, scrollpos);
                state = false;
            }
        });

        //コンタクトフォームのチェックボックスバリデーション
        $(function () {
            $("#contact__submit").on("click", function () {
                var checkedsum = $('.form-check-input:checked').length; //チェックが入っているチェックボックスの取得
                if (checkedsum > 0) {
                    $('.form-check-input').prop("required", false);
                } else {
                    $('.form-check-input').prop("required", true);
                }
            });
        });

        balloonAnime();

        // スマホでのマップ表示位置を中央へ
        var mainMap = document.querySelector('.main-map');
        if (window.matchMedia("(max-width: 480px)").matches) {
            mainMap.scrollLeft += 150;
        } else if (window.matchMedia("(max-width: 768px)").matches) {
            mainMap.scrollLeft += 60;
        } else {
            mainMap.scrollLeft += 0;
        }
    })
}

export const onPreRouteUpdate = ({ location, prevLocation }) => {
    // console.log("Gatsby started to change location to", location.pathname)
    // console.log("Gatsby started to change location from", prevLocation ? prevLocation.pathname : null)
}

export const onRouteUpdate = ({ location, prevLocation }) => {
    // console.log('new pathname', location.pathname)
    // console.log('old pathname', prevLocation ? prevLocation.pathname : null)
    $(document).ready(() => {
        var state = false;
        var scrollpos;
        $('.js-menubtn').on('click', function () {
            scrollpos = $(window).scrollTop();
            $('body').addClass('is-fixed').css({
                'top': -scrollpos
            });
            $('.l-nav').addClass('is-show');
        });
        $('.js-menubtn-close').on('click', function () {
            $('body').removeClass('is-fixed').css({
                'top': 0
            });
            $('.l-nav').removeClass('is-show');
            window.scrollTo(0, scrollpos);
        });
        $('.js-articlebtn-close').on('click', function () {
            $('body').removeClass('is-fixed').css({
                'top': 0
            });
            $('.l-article').removeClass('is-show');
            window.scrollTo(0, scrollpos);
        });

        $('.l-article').addClass('is-show');

        $('.nav__link.is-current').on('click', function () {
            scrollpos = $(window).scrollTop();
            $('body').addClass('is-fixed').css({
                'top': -scrollpos
            });
            $('.l-article').addClass('is-show');
        });
        $('.map-balloon__link.is-current').on('click', function () {
            scrollpos = $(window).scrollTop();
            $('body').addClass('is-fixed').css({
                'top': -scrollpos
            });
            $('.l-article').addClass('is-show');
        });
        $('.header-nav__link.is-current').on('click', function () {
            scrollpos = $(window).scrollTop();
            $('body').addClass('is-fixed').css({
                'top': -scrollpos
            });
            $('.l-article').addClass('is-show');
        });

        //コンタクトフォームのチェックボックスバリデーション
        $(function () {
            $("#contact__submit").on("click", function () {
                var checkedsum = $('.form-check-input:checked').length; //チェックが入っているチェックボックスの取得
                if (checkedsum > 0) {
                    $('.form-check-input').prop("required", false);
                } else {
                    $('.form-check-input').prop("required", true);
                }
            });
        });

        balloonAnime();

        // スマホでのマップ表示位置を中央へ
        var mainMap = document.querySelector('.main-map');
        if (window.matchMedia("(max-width: 480px)").matches) {
            mainMap.scrollLeft += 150;
        } else if (window.matchMedia("(max-width: 768px)").matches) {
            mainMap.scrollLeft += 60;
        } else {
            mainMap.scrollLeft += 0;
        }
    })
}

export const onRouteUpdateDelayed = () => {
    // console.log("Now Loading...")
}




