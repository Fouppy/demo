/**
 * Content all loading function
 */

jQuery(document).ready(function($) {

    /**
     * [animated page transitions]
     * @param  {[type]} event) { var hrefVal [description]
     * @return {[type]} [animated]
     */
    var namespace = 'animsition';
     $("[data-animated-link]").on("click." + namespace, function(event) {
        if( $(this).attr("data-lightbox") ){
            return 0;
        }
        event.preventDefault();
        var $self = $(this);
        var hrefVal = $self.attr('href'),
            transitions = 'fadeOut';

        if (hrefVal.length > 2 && !hrefVal.match(/^#[^?&\/]*/g)) {
            $('.all_content').addClass('animated ' + transitions);
            setTimeout(function() {
                window.location = hrefVal
            }, 800);
            return false;
        }
     });

    /**
     * Click to load
     */
    $('.load-close').click(function() {        
        $('.spin-2').fadeOut('slow', function() {
            $('.loading-top,.loading-bottom').delay(150).fadeOut('800', function() {
                $.when($('.demo-loading').fadeOut(150)).done(ShowLoading());
            });
        });
    });

    function ShowLoading() {
        var l = $('.isotope-item').attr('data-animate');
        //Loading section
        $('.all_content').each(function() {
            //$(this).addClass('animated fadeIn');
            $(this).addClass('show');
        });
    }

    /**
     * [load]
     */
    $(window).load(function() {

        /**
         * Open Slide
         * FadeOut the content
         * Call ShowLoading() function when HideLoading() done.
         */
        function HideLoading() {
            $('.demo-loading').each(function(i) {
                $('.spin-2').fadeOut('slow', function() {
                    $('.load-close').hide(200);  
                    $('.isotope-item').each(function(i) {
                        $(this).css({
                             'opacity': 0
                        })
                    });                      
                    $('.loading-top,.loading-bottom').delay(150).fadeOut('800', function() {
                        $.when($('.demo-loading').fadeOut(150)).done(ShowLoading());
                    });
                });
            });
        }
        /**
         * Show content (opacity 1)
         * Show isotope-item one by one
         */
        function ShowLoading() {
            var l = $('.isotope-item').attr('data-animate');
            //First hide all Items
            if (!l) {                
                //loading items one by one
                $('.isotope-item').each(function(i) {
                    $(this).delay(i * 100).animate({
                        'opacity': 1
                    })
                });
            }
            //delete loading class ( ajax issues)           
        }


        /**
         * Call the HideLoading
         */
        HideLoading();
    });

});
