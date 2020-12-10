// window.addEventListener('load', function () {

//     setTimeout(function () {
//         $("body").removeClass("transition-reset");
//     }, 200);

// });


$(document).ready(() => {
    var state = false;
    var scrollpos;
    $('.js-menubtn').on('click', function () {
        if (state == false) {
            scrollpos = $(window).scrollTop();
            $('body').addClass('is-fixed').css({
                'top': -scrollpos
            });
            $('.l-nav').addClass('is-show');
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
    $('.js-articlebtn-close').on('click', function () {
        $('body').removeClass('is-fixed').css({
            'top': 0
        });
        $('.l-article').removeClass('is-show');
        window.scrollTo(0, scrollpos);
    });
<<<<<<< HEAD
<<<<<<< HEAD
})
=======
})
>>>>>>> 9e5e5eaf27af0856d5047d8b19a6ffbebd4e2e9e
=======
})
<<<<<<< HEAD
>>>>>>> develop_lct_mascat
=======
>>>>>>> 630311f711f73eaa49accac4d5af1d93c346f306
>>>>>>> 7ff3c6d4b361602af45b040a68e87172bf63f962
