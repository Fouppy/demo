/*global window */
(function($) {
    "use strict";

    /*-------------VARIABLES--------------*/
    var w = $(window),
        doc = $(document),
        windowWidth = w.width(),
        nav = $(".demo-nav").outerHeight(),
        windowHeight = w.height(),
        prefix,
        /*Modernizr Var*/
        isTouch = Modernizr.touch, //detect touch devices
        isTransitions = Modernizr.csstransitions, //detect if browser support transitions
        isFirefox = typeof InstallTrigger !== 'undefined', //detect Firefox version
        //isIE = /*@cc_on!@*/ false || !!document.documentMode, //detect IE version
        isChrome = !!window.chrome, //detect chrome version
        isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0; ////detect chrome isSafari
    /*!------------VARIABLES--------------*/

    window.FOUPPY = {};

    doc.ready(function(FOUPPY) {

        this.FOUPPY = FOUPPY || {}; //Main Namespace

        /**
         * [ Main Module ]
         */
        FOUPPY.NAV = function() {
            /**
             * Our Private Functions
             **/

            var myMenu = function() {
                mobileNav();
                fixNav();
            };

            var mobileNav = function() {
                var d = $(".demo-nav"),
                    i = $("a.demo-btn-nav");
                /**
                 * [Click Mobile button]
                 */
                i.click(function(event) {
                    event.preventDefault();
                    if (i.hasClass("btn-active")) {
                        d.slideUp();
                        i.removeClass("btn-active");
                    } else {
                        i.addClass("btn-active");
                        d.slideDown();
                    }
                });
                $('.mobnav-subarrow').click(function() {
                    $(this).parent().toggleClass("xpopdrop");
                });
            };
            var fixNav = function() {

                $.fn.fix_navbar = function(el) {

                    el = $(this);
                    el.addClass("fix_nav");
                    var clean_nav = $(".demo"),

                        fixAll = function(el) {
                            var parent = (el).parent(),
                                offsetTop = parent.offset().top;
                            if (doc.scrollTop() > offsetTop) {
                                if (doc.scrollTop() > (el.height() - w.height())) {
                                    el.addClass("fixed");
                                    if (windowWidth > 989) {
                                        clean_nav.addClass("clear-nav").css("padding-top", el.outerHeight()).show();
                                    }
                                } else {
                                    $('.demo-navbar-wrap .demo-navbar .logo img.one').addClass('hide');
                                    el.removeClass("fixed");
                                    clean_nav.removeClass("clear-nav").hide();
                                }
                            } else {
                                el.removeClass("fixed");
                                clean_nav.removeClass("clear-nav").hide();
                            }
                        };

                    w.scroll(function() {
                        fixAll(el);
                    });
                    w.ready(function() {
                        fixAll(el);
                    });
                };

                $.fn.show_navbar = function(el) {

                    el = $(this);
                    el.addClass("fix_nav");
                    FOUPPY.SLIDE.revolution();

                    var clean_nav = $(".demo"),
                        offsetBy = el.attr("data-offsetBy"),
                        oFFset = $(offsetBy).outerHeight() || 0,
                        menuVal = $('.demo-navbar').outerHeight() || 0,

                        fixAll = function(el) {
                            var parent = (el).parent(),
                                offsetTop = parent.offset().top + oFFset + menuVal;
                            if (doc.scrollTop() > offsetTop) {
                                if (doc.scrollTop() > (el.height() - w.height())) {
                                    el.addClass("fixed animated fadeInDown");
                                    if (windowWidth > 989) {
                                        clean_nav.addClass("clear-nav").css("padding-top", el.outerHeight()).show();
                                    }
                                } else {
                                    $('.demo-navbar-wrap .demo-navbar .logo img.one').addClass('hide');
                                    el.removeClass("fixed animated fadeInDown");
                                    clean_nav.removeClass("clear-nav").hide();
                                }
                            } else {
                                el.removeClass("fixed animated fadeInDown");
                                clean_nav.removeClass("clear-nav").hide();
                            }
                        };

                    w.scroll(function() {
                        fixAll(el);
                    });
                    w.ready(function() {
                        fixAll(el);
                    });
                };
            };
            /**
             * Setup Function
             */
            var init = function() {
                myMenu();
                $("html").imagesLoaded(); // Detect when images have been loaded.
            };

            /**
             * [Our Public Function Here]
             */
            var build = {
                init: init,
            };
            return build;
        }();

        // Handles scrollable contents using jQuery sly and perfect scrollbar  
        FOUPPY.SCROLL = function() {
            var init = function() {
                $.scrollToTop();
            }
            var build = {
                init: init,
            };
            return build;
        }();

        FOUPPY.EVENT = function() {
            var event = function() {
                //Fix The Navbar 
                if (windowWidth > 960) {
                    if ($('.demo-navbar').hasClass('fix-one')) {
                        $(".fix-one").fix_navbar();
                    }
                    if ($('.demo-navbar').hasClass('fix-two')) {
                        $(".fix-two").show_navbar();
                    }
                }

            };
            var init = function() {
                event();
            }
            var build = {
                init: init,
            };
            return build;
        }();

        // handle the layout reinitialization on window resize
        FOUPPY.DOCONRESIZE = function() {

            var nav = function() {
                windowWidth = w.width();
                if ($('.demo-navbar').hasClass('fix-one')) {
                    $(".fix-one").fix_navbar();
                }
                if ($('.demo-navbar').hasClass('fix-two')) {
                    $(".fix-two").show_navbar();
                }
            };

            var init = function() {
                nav();
            };
            var READY = {
                init: init,
            };
            return READY;
        }();

        // runs callback functions
        FOUPPY.DEMOREADY = function() {

            var init = function() {
                //Please don't change the order
                FOUPPY.NAV.init();
                FOUPPY.SCROLL.init();

                FOUPPY.EVENT.init();
                w.resize(function() {
                    FOUPPY.DOCONRESIZE.init();
                });
            };

            var READY = {
                init: init,
            };

            return READY;
        }();
        /**
         * Call Our Setups Functions
         */
        FOUPPY.DEMOREADY.init();

    });


}($));

(function($) {
    /*
    Plugin Name: scrollToTop for jQuery.
    */
    $.extend({

        scrollToTop: function() {
            var _isScrolling = false;
            // Append Button
            $("body").append($("<a />")
                .addClass("scroll-to-top off")
                .attr({
                    "href": "#",
                    "id": "scrollToTop"
                })
                .append(
                    $("<i />")
                    .addClass("fa  fa-angle-up")
                ));
            $("#scrollToTop").click(function(e) {
                e.preventDefault();
                $("body, html").animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
            // Show/Hide Button on Window Scroll event.
            $(window).scroll(function() {

                if (!_isScrolling) {
                    _isScrolling = true;
                    if ($(window).scrollTop() > 150) {
                        $("#scrollToTop").stop(true, true).removeClass("off");
                        $("#scrollToTop").stop(true, true).addClass("on");
                        _isScrolling = false;
                    } else {
                        $("#scrollToTop").stop(true, true).removeClass("on");
                        $("#scrollToTop").stop(true, true).addClass("off");
                        _isScrolling = false;
                    }
                }
            });
        }
    });
}($));
