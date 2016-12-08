$(document).ready(function () {
    /*
        var $navbar = $('#nav-bar');
        var $header = $('.header-hero');
        var $hero_text = $header.children();
    */
    /******************************/
    /*  
    /* Change opacity for hero-text.
    /*
    /*****************************/
    /*  var fadestart = $header.height() / 32;
      var fadeUntil = 420;
      var opacity = 0;/*

      /***********************************/
    /*  
    /* Navigation bar when scrolling or refreshing.
    /*
    /***********************************/
    /*  var header_height = $header.height();
      var navbar_height = $navbar.height();
      var whenToChange = header_height - navbar_height - 40;/*

      /* if user refreshing page, load navbar */
    /*  if ($navbar.offset().top <= whenToChange) {
        $navbar.removeClass('background-dark');
        $navbar.find('.brand').removeClass('brand-show');
    } else {
        $navbar.addClass('background-dark');
        $navbar.find('.brand').addClass('brand-show');
    }

    $(window).scroll(function () {
        var $scroll = $(window).scrollTop();
/*
        /* Change opacity for hero-text */
    /*     if ($scroll <= fadestart) { 
             opacity = 1;
         } else if ($scroll <= fadeUntil) {
             opacity = 1 - $scroll / fadeUntil;
         }
         $hero_text.css({
             'opacity': opacity
         })
     /*    
         /* Nav-bar when scrolling */
    /* if ($scroll > whenToChange) { 
            $navbar.addClass('background-dark');
            if ($('#menu-btn').hasClass('active') === false) {
                $navbar.find('.brand').addClass('brand-show');
            }
        } else if ($scroll < whenToChange) {
            $navbar.removeClass('background-dark');
            $navbar.find('.brand').removeClass('brand-show');
        }
    });
/*


    /*  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $('.container').animate({'left':$('.')});
    }*/






    /***********************************/
    /*  
    /* Little things.
    /*
    /***********************************/

    //add some cool text to the title
    $(function () {
        var hidden = "hidden";
        var oldtitle = document.title;
        var currenttitle;

        // Standards:
        if (hidden in document) {
            document.addEventListener("visibilitychange", onchange);
        } else if ((hidden = "mozHidden") in document) {
            document.addEventListener("mozvisibilitychange", onchange);
        } else if ((hidden = "webkitHidden") in document) {
            document.addEventListener("webkitvisibilitychange", onchange);
        } else if ((hidden = "msHidden") in document) {
            document.addEventListener("msvisibilitychange", onchange);
            // IE 9 and lower:
        } else if ("onfocusin" in document) {
            document.onfocusin = document.onfocusout = onchange;
            // All others:
        } else {
            window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onchange;
        }

        function onchange(evt) {
            var v = "visible",
                h = "hidden",
                evtMap = {
                    focus: v,
                    focusin: v,
                    pageshow: v,
                    blur: h,
                    focusout: h,
                    pagehide: h
                };

            evt = evt || window.event;
            if (evt.type in evtMap) {
                currenttitle = oldtitle;
                $(document).attr('title', currenttitle);
            } else {
                currenttitle = this[hidden] ? " Basesign Miss You" : oldtitle;
                $(document).attr('title', currenttitle);
            }

        }

        // set the initial state (but only if browser supports the Page Visibility API)
        if (document[hidden] !== undefined)
            onchange({
                type: document[hidden] ? "blur" : "focus"
            });
    });

    /* For box-example */
    $('.title-code').on('click', function () {
        $(this).next().toggle();
    })

    var $btn_switch = $('.bs-btn-switch');




    var stylesheet_state = true; // true for active

    $btn_switch.on('click', function () {

        if (stylesheet_state === true) {
            $('#basesign').prop('disabled', true);
            $btn_switch.html('Basesign.css desactivated');
            $btn_switch.css({
                'color': 'red'
            });
            stylesheet_state = false;
        } else {
            $('#basesign').prop('disabled', false);
            $btn_switch.html('Basesign.css activated');
            $btn_switch.css({
                'color': '#43A047'
            });
            stylesheet_state = true;
        }
    })
    
});