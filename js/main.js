/*-----------------------------------------------------------------------------------

    Theme Name: Yodden - Broadband & Internet Services HTML Template
    Description: Broadband & Internet Services HTML Template
    Author: Website Design Templates
    Version: 2.0
    
    ---------------------------------- */

! function (o) {
    "use strict";
    var s = o(window);

    function a() {
        var e, a;
        e = o(".full-screen"), a = s.height(), e.css("min-height", a), e = o("header").height(), a = o(".screen-height"), e = s.height() - e, a.css("height", e)
    }
    o("#preloader").fadeOut("normall", function () {
        o(this).remove()
    }), s.on("scroll", function () {
        var e = s.scrollTop(),
            a = o(".navbar-brand img"),
            t = o(".navbar-brand.logodefault img");
        e <= 50 ? (o("header").removeClass("scrollHeader").addClass("fixedHeader"), a.attr("src", "img/logos/logo-inner.png")) : (o("header").removeClass("fixedHeader").addClass("scrollHeader"), a.attr("src", "img/logos/logo.png")), t.attr("src", "img/logos/logo.png")
    }), s.on("scroll", function () {
        500 < o(this).scrollTop() ? o(".scroll-to-top").fadeIn(400) : o(".scroll-to-top").fadeOut(400)
    }), o(".scroll-to-top").on("click", function (e) {
        e.preventDefault(), o("html, body").animate({
            scrollTop: 0
        }, 600)
    }), o(".parallax,.bg-img").each(function (e) {
        o(this).attr("data-background") && o(this).css("background-image", "url(" + o(this).data("background") + ")")
    }), o(".story-video").magnificPopup({
        delegate: ".video",
        type: "iframe"
    }), o(".popup-social-video").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }), o(".source-modal").magnificPopup({
        type: "inline",
        mainClass: "mfp-fade",
        removalDelay: 160
    }), new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !1,
        live: !0
    }).init(), s.resize(function (e) {
        setTimeout(function () {
            a()
        }, 500), e.preventDefault()
    }), 0 !== o(".copy-clipboard").length && (new ClipboardJS(".copy-clipboard"), o(".copy-clipboard").on("click", function () {
        var e = o(this);
        e.text();
        e.text("Copied"), setTimeout(function () {
            e.text("Copy")
        }, 2e3)
    })), a(), o(document).ready(function () {
        o(".testimonial-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 1500,
            nav: !0,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            dots: !1,
            center: !1,
            margin: 0,
            responsive: {
                0: {
                    items: 1,
                    nav: !1
                },
                575: {
                    items: 1,
                    nav: !1
                },
                768: {
                    items: 1,
                    nav: !1
                },
                992: {
                    items: 1
                }
            }
        }), o(".testimonial-carousel2").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 1500,
            nav: !0,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            dots: !1,
            center: !1,
            margin: 0,
            responsive: {
                0: {
                    items: 1,
                    nav: !1
                },
                575: {
                    items: 1,
                    nav: !1
                },
                768: {
                    items: 1,
                    nav: !1
                },
                992: {
                    items: 1
                }
            }
        }), o(".portfolio-detail").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 900,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2,
                    margin: 15
                },
                768: {
                    items: 2,
                    margin: 15
                },
                992: {
                    items: 3
                }
            }
        }), o(".slider-fade").owlCarousel({
            items: 1,
            loop: !0,
            dots: !1,
            margin: 0,
            nav: !1,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            autoplay: !0,
            smartSpeed: 1200,
            mouseDrag: !1,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            responsive: {
                992: {
                    nav: !1,
                    dots: !1
                },
                1200: {
                    nav: !1,
                    dots: !1
                }
            }
        }), o(".slider-fade2").owlCarousel({
            items: 1,
            loop: !0,
            dots: !1,
            margin: 0,
            nav: !1,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            autoplay: !0,
            smartSpeed: 800,
            mouseDrag: !1,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1,
                    dots: !0
                }
            }
        }), o(".service-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 1500,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 25,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        }), o(".service-carousel2").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !1,
            smartSpeed: 1500,
            nav: !0,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            dots: !1,
            center: !1,
            margin: 40,
            responsive: {
                0: {
                    items: 1,
                    nav: !1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        }), o(".stream-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 1500,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 25,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        }), o(".stream-carousel02").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 1500,
            nav: !1,
            dots: !1,
            center: !1,
            margin: 25,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 6
                }
            }
        }), o(".stream-carousel03").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 1500,
            nav: !1,
            dots: !1,
            center: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        }), o(".owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            dots: !1,
            margin: 0,
            autoplay: !1,
            smartSpeed: 500
        }), o(".slider-fade").on("changed.owl.carousel", function (e) {
            e = e.item.index - 2;
            o(".title").removeClass("animated fadeInUp"), o("p").removeClass("animated fadeInUp"), o(".price").removeClass("animated fadeInUp"), o("a").removeClass("animated fadeInUp"), o(".owl-item").not(".cloned").eq(e).find(".h5").addClass("animated fadeInUp"), o(".owl-item").not(".cloned").eq(e).find(".title").addClass("animated fadeInUp"), o(".owl-item").not(".cloned").eq(e).find("p").addClass("animated fadeInUp"), o(".owl-item").not(".cloned").eq(e).find(".price").addClass("animated fadeInUp"), o(".owl-item").not(".cloned").eq(e).find("a").addClass("animated fadeInUp")
        }), o(".slider-fade2").on("changed.owl.carousel", function (e) {
            e = e.item.index - 2;
            o(".banner-line-shape").removeClass("animated fadeInLeft"), o(".slider-circle-shape").removeClass("animated fadeInUp"), o("span").removeClass("animated fadeInUp"), o("h1").removeClass("animated fadeInUp"), o("a").removeClass("animated fadeInUp"), o("p").removeClass("animated fadeInUp"), o(".owl-item").not(".cloned").eq(e).find(".banner-line-shape").addClass("animated fadeInLeft"), o(".owl-item").not(".cloned").eq(e).find(".slider-circle-shape").addClass("animated fadeInUp"), o(".owl-item").not(".cloned").eq(e).find("span").addClass("animated fadeInUp"), o(".owl-item").not(".cloned").eq(e).find("h1").addClass("animated fadeInUp"), o(".owl-item").not(".cloned").eq(e).find("a").addClass("animated fadeInUp"), o(".owl-item").not(".cloned").eq(e).find("p").addClass("animated fadeInUp")
        }), o(".countup").counterUp({
            delay: 25,
            time: 2e3
        }), o(".countdown").countdown({
            date: "01 Dec 2024 00:01:00",
            format: "on"
        }), o(".current-year").text((new Date).getFullYear())
    }), s.on("load", function () {
        var a = o(".portfolio-gallery-isotope").isotope({});
        o(".filtering").on("click", "span", function () {
            var e = o(this).attr("data-filter");
            a.isotope({
                filter: e
            })
        }), o(".filtering").on("click", "span", function () {
            o(this).addClass("active").siblings().removeClass("active")
        }), o(".portfolio-gallery,.portfolio-gallery-isotope").lightGallery(), o(".portfolio-link").on("click", e => {
            e.stopPropagation()
        }), s.stellar()
    })
}(jQuery);
