$(document).ready(function () {
    $(".lang-cur").on("click", function () {
        $(".language ul.nav").toggleClass("active");
    });
    $(function () {
        var sticky_navigation_offset_top = $('.header').offset().top;
        var sticky_navigation = function () {
            var scroll_top = $(window).scrollTop();
            if (scroll_top > 800) {
                $(".header").addClass('fixed');
            } else {
                $(".header").removeClass('fixed');
            }
        };
        sticky_navigation();
        $(window).scroll(function () {
            sticky_navigation();
        });
    });
    wow = new WOW(
        {
            mobile: false,
            animateClass: 'animated',
            offset: 100,
            callback: function (box) {
                console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
        }
    );
    wow.init();
    //$(".mainnav a").on('click', function () {
    //    event.preventDefault();
    //    var id = $(this).attr('href');
    //    var top = $(''+id).offset();
    //    $('html,body').animate({
    //        scrollTop: top.top - 80
    //    }, '1000');
    //});
    $("a.btn-signup").on('click', function () {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $('' + id).offset();
        $('html,body').animate({
            scrollTop: top.top - 80
        }, '1000');
    });
    $(".mainnav-mobile a").on('click', function () {
        //event.preventDefault();
        //var id = $(this).attr('href');
        //var top = $('' + id).offset();
        //$('html,body').animate({
        //    scrollTop: top.top - 80
        //}, '10000');
        $(".btn-menu-mobile").removeClass("active");
        $(".mainnav-mobile").removeClass("active");
    });
    $(".btn-menu-mobile").on("click", function () {
        $(this).toggleClass("active");
        $(".mainnav-mobile").toggleClass("active");
    });
    //add button vào body
    $("body").append('<div class="button_scroll2top"><img src="assets/images/back-to-top.png" alt="Back to top" /></div>');
    //keo xuong 1 khoang = chieu cao của màn hình - 500 sẽ hiện button, ngược lại ẩn button
    $(window).scroll(function () {
        if ($(window).scrollTop() > (window.innerHeight - 500)) {
            $('.button_scroll2top').fadeIn();
            $(".header").sticky({ topSpacing: 0 });
        } else {
            $('.button_scroll2top').fadeOut();
            $(".header").unstick();
        }
    });
    //scroll top
    $(".button_scroll2top").on("click", function () {
        $('html,body').animate({
            scrollTop: 0
        }, '1000');
    })
    $('.project-slick-images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    });
    $('.project-furniture-exterior-thumbnail img').on("click", function () {
        $('.project-furniture-exterior-thumbnail img').removeClass("active");
        $(this).addClass("active");
        var index = $(this).attr("data-slick-index");
        $('.project-furniture-exterior-images').slick('slickGoTo', index);

    });
    $('.project-furniture-interior-thumbnail img').on("click", function () {
        $('.project-furniture-interior-thumbnail img').removeClass("active");
        $(this).addClass("active");
        var index = $(this).attr("data-slick-index");
        $('.project-furniture-interior-images').slick('slickGoTo', index);

    });

    $('.highlight-images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    });

    $('.highlight-thumbnail-location img').on("click", function () {
        $('.highlight-thumbnail-location img').removeClass("active");
        $(this).addClass("active");
        var index = $(this).attr("data-slick-index");
        $('.highlight-images-location').slick('slickGoTo', index);
    });
    $('.highlight-thumbnail-utilities img').on("click", function () {
        $('.highlight-thumbnail-utilities img').removeClass("active");
        $(this).addClass("active");
        var index = $(this).attr("data-slick-index");
        $('.highlight-images-utilities').slick('slickGoTo', index);
    });
    $('.highlight-thumbnail-juridical img').on("click", function () {
        $('.highlight-thumbnail-juridical img').removeClass("active");
        $(this).addClass("active");
        var index = $(this).attr("data-slick-index");
        $('.highlight-images-juridical').slick('slickGoTo', index);
    });

    $('.progress-images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.progress-thumbnail',
    });
    $('.progress-thumbnail').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.progress-images',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    $('.progress-thumbnail .slick-prev').append('<i class="fal fa-chevron-circle-left"></i>');
    $('.progress-thumbnail .slick-next').append('<i class="fal fa-chevron-circle-right"></i>');
});