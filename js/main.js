;
(function ($) {
    "use strict";
    $(document).on('ready', function () {

        $(".scroll-top").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return true;
        });

        $('.team-slider').slick({
            dots: true,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="fa fa-angle-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: true,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                 {
                    breakpoint: 220,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        $('#test3').matd_expandlist({
            "list": [{
                    "secondary_heading": "What is ICO trade?",
                    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                        },
                {
                    "secondary_heading": "What are the token holder benifits",
                    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                        },
                {
                    "secondary_heading": "What is leverage?",
                    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                        },
                {
                    "secondary_heading": "What is cryptocurrency?",
                    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                        }

                    ]

        });
        $('#test4').matd_expandlist({
            "list": [{
                    "secondary_heading": "Can contribute to the trade?",
                    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                        },
                {
                    "secondary_heading": "Can i deposit currency?",
                    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                        },
                {
                    "secondary_heading": "Can i withdraw currency?",
                    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                        },
                {
                    "secondary_heading": "Is there any learning curve for begginers?",
                    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                        }

                    ]

        });

        /*-- Mobile-Menu-Active --*/

        $('.menu-triger').on('click', function () {
            $(this).toggleClass('active');
        });

        $('.js-preloader').preloadinator({
            minTime: 500
        });



        $('.primary-menu').slicknav({
            label: '',
            duration: 500,
            prependTo: '',
            closedSymbol: '<i class="fa fa-angle-right"></i>',
            openedSymbol: '<i class="fa fa-angle-right"></i>',
            appendTo: '.mainmenu-area',
            menuButton: '.menu-triger',
            closeOnClick: 'true' // Close menu when a link is clicked.
        });


        // Portfolio Image Loded with Masonry
        if (typeof imagesLoaded == 'function') {
            imagesLoaded($('.work-items'), function () {
                setTimeout(function () {
                    $('.work-items').isotope({
                        itemSelector: '.work-items .work-item',
                        resizesContainer: false,
                        layoutMode: 'masonry',
                        filter: '*'
                    });
                }, 500);

            });
        };


        // Set Active Class for Portfolio filter
        $('.work-filter li').on('click', function (event) {
            $('.work-filter li').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });



        // Filter JS for Porrtfolio
        $('.work-filter').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $('.work-items').isotope({
                filter: filterValue
            });
        });


        $(window).on("load", function () {
            /*-- Preloader-Fade-Out-After-Load-Window --*/
            $('#scrollUp').on('click', function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });

            $('.preloader').fadeOut(500);

        });

        /*-- WoW-Animation-JS --*/
        new WOW().init();

        $('.count').counterUp({
            delay: 5,
            time: 1000
        });


        $('.readmap-slider').slick({
            dots: false,
            arrows: true,
            prevArrow: '<button class=".slider-control .left-arrow"  type="button"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button class=".slider-control .right-arrow" type="button"><i class="fa fa-angle-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: true,
            vertical: false,
            verticalSwiping: false,
            slidesToShow: 5,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        $('.sponsor-slider').slick({
            dots: false,
            arrows: false,
            prevArrow: '<button class=".slider-control .left-arrow"  type="button"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button class=".slider-control .right-arrow" type="button"><i class="fa fa-angle-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: true,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        $(document).on('scroll', function () {
            if ($(window).scrollTop() > 10) {
                $('#container-header').addClass('change-color');
            } else {
                $('#container-header').removeClass('change-color');
            }
        });


        $('.blog-slider').slick({
            dots: false,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" type="button"><i class="fa fa-angle-right"></i></button>',
            infinite: true,
            centerMode: false,
            autoplay: true,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });



    });


})(jQuery);
