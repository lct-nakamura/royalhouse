/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import "./src/stylus/style.styl"
import "./src/scss/park.scss"

import anime from 'animejs/lib/anime.es.js'
import tingle from 'tingle.js'
import Cookies from 'js-cookie'

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


var ytModal = new tingle.modal({
    onClose: function () {
        console.log('close');
    },
    onOpen: function () {
        console.log('open');
    },
    beforeOpen: function () {
        console.log('before open');
    },
    beforeClose: function () {
        console.log('before close');
        return true;
    },
    cssClass: ['class1', 'class2']
});
// var btn = document.querySelector('.js-yt-modal-1');
// btn.addEventListener('click', function () {
//     ytModal.open();
// });
//ytModal.setContent(document.querySelector('.yt-modal').innerHTML);





export const onClientEntry = () => {
    // console.log("We've started!")
    window.addEventListener('load', () => {
        if (document.querySelector('.yt-modal') != null) {
            ytModal.setContent(document.querySelector('.yt-modal').innerHTML);
        }
        if (Cookies.get('access') == 'on') {
            console.log('not first access!')
        } else {
            console.log('first access!')
            if (document.querySelector('.yt-modal') != null) {
                ytModal.open()
            }

        }
        Cookies.set('access', 'on', { expires: 30 })
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

    //VR MOVIE　toggle
$(function(){
    $("#acMenu dt").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass("active");//追加部分
    });
    });
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



