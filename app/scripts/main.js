/*global window */
(function($) {
    "use strict";

    /*-------------VARIABLES--------------*/
    var w = $(window),
        doc = $(document),
        windowWidth = w.width(),
        nav = $(".demo-nav").outerHeight(),
        windowHeight = w.height(),
        tw = $("#tweet"),
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
         * [ Main Module (Okab) ]
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

        FOUPPY.ANIMATION = function() {
            var animations = function() {
                var elm = $("[data-animate]");
                elm.each(function() {
                    var elm = $(this),
                        dataDelay = elm.attr("data-delay") || 0,
                        offsetVal = elm.attr("data-offset") || "100%",
                        trgger = elm.attr("data-trgger") || "false",
                        a = 0;
                    var dataAnimate = elm.attr("data-animate");
                    if (a = dataDelay ? Number(dataDelay) + 10 : 300, !elm.hasClass("animated")) {
                        $(this).addClass('opacity-zero');
                        elm.waypoint(function() {
                            var $this = $(this);
                            setTimeout(function() {
                                $this.addClass('show animated ' + dataAnimate);
                            }, a);
                        }, {
                            offset: offsetVal,
                            triggerOnce: trgger
                        });
                    }

                })
            };
            var notAnimations = function() {
                var elm = $("[data-animate]");
                elm.each(function() {
                    var elm = $(this),
                        dataDelay = elm.attr("data-delay") || 0,
                        offsetVal = elm.attr("data-offset") || "100%",
                        trgger = elm.attr("data-trgger") || "false",
                        a = 0;
                    if (a = dataDelay ? Number(dataDelay) + 300 : 300, !elm.hasClass("animated")) {
                        $(this).addClass('opacity-zero');
                        elm.waypoint(function() {
                            var $this = $(this);
                            setTimeout(function() {
                                $this.animate({
                                    opacity: 1
                                }, {
                                    step: function(now, fx) {
                                        var X = 100 * now;
                                        $(fx.elem).css("filter", "alpha(opacity=" + X + ")");
                                    }
                                });
                            }, a);
                        }, {
                            offset: offsetVal,
                            triggerOnce: trgger
                        });
                    }

                })
            };
            var init = function() {
                if (!Modernizr.mq('only all and (max-width: 480px)')) {
                    if (isTransitions) {
                        animations();
                    } else {
                        notAnimations();
                    }
                }
            }
            var build = {
                init: init
            };
            return build;
        }();

        FOUPPY.LIGHTBOX = function() {
            var lightBox = function() {
                var d = $('[data-lightbox="image"]');

                d.click(function(e){
                    e.preventDefault();
                })
                //image    
                d.magnificPopup({
                    type: 'image',
                    closeOnContentClick: !0,
                    closeBtnInside: !1,
                    fixedContentPos: !0,
                    mainClass: "mfp-zoom-in",
                    image: {
                        verticalFit: !0
                    }
                });
            };

            var init = function() {
                lightBox();
            }

            var build = {
                init: init,
                lightBox: lightBox,
            };

            return build;
        }();

        FOUPPY.UI = function() {
            var progress = function() {
                //progress bar animation
                setTimeout(function() {
                    $(".dial").waypoint(function() {

                        //circular                
                        $('.dial').each(function() {

                            var elm = $(this),
                                width = elm.attr("data-width"),
                                perc = elm.attr("value");

                            elm.knob({
                                'value': 0,
                                'min': 0,
                                'max': 100,
                                "skin": "tron",
                                "readOnly": true,
                                "thickness": 0.09,
                                "displayInput": false,
                                "bgColor": "rgba(255,255,255,0)",
                                "linecap": ""
                            });

                            $({
                                value: 0
                            }).animate({
                                value: perc
                            }, {
                                duration: 1000,
                                easing: 'swing',
                                progress: function() {
                                    elm.val(Math.ceil(this.value)).trigger('change');
                                }
                            });

                            //circular progress bar color
                            $(this).append(function() {
                                elm.parent().parent().find('.circular-bar-content').css('top', -(width / 2 + 10));
                                elm.parent().parent().find('.circular-bar-content label').text(perc + '%');
                            });

                        });
                    }, {
                        offset: "100%",
                        triggerOnce: true
                    });
                }, 300);
            };
            var element_bg = function() {
                var elm = $("[data-element-bg]");
                var b = elm.attr("data-element-bg");
                elm.css({
                    "background-image": "url(" + b + ")",
                    "background-position": "100% 100%",
                    "background-repeat": "no-repeat",
                });
            };

            var init = function() {
                progress();
                element_bg();
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
                //Set parent height
                if (windowWidth > 767) {
                    $('.set-parent-height').each(function() {
                        var parentHeight = $(this).parent().height();
                        $(this).css("height", parentHeight);
                    });
                }
                //Add class active Based on URL http://css-tricks.com/snippets/jquery/add-active-navigation-class-based-on-url/
                $('.sidebar li a[href^="' + location.pathname.split("/")[2] + '"]').parent().addClass('active');


                $('.section-colored').each(function() {
                    var bg = $(this).attr("data-bg");
                    $(this).css("background-color", bg);
                });

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

            var parentSize = function() {
                if (windowWidth > 767) {
                    $('.set-parent-height').each(function() {
                        var parentHeight = $(this).parent().height();
                        $(this).css("height", parentHeight);
                    });
                }
            };

            var init = function() {
                nav();
                parentSize();
            };
            var READY = {
                init: init,
            };
            return READY;
        }();

        // runs callback functions
        FOUPPY.OKABREADY = function() {

            var init = function() {
                //Please don't change the order
                FOUPPY.LIGHTBOX.init();
                FOUPPY.ANIMATION.init();
                FOUPPY.NAV.init();
                FOUPPY.SCROLL.init();
                FOUPPY.UI.init();

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
        FOUPPY.OKABREADY.init();

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
