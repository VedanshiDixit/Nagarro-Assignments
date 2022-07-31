$(document).ready(function () {


    // visibility for "shop item in navbar"
    $('.ddm-1').hide();

    $('#navitem-1').mouseover(function() {
        $('.ddm-1').show();
    });

    $('#navitem-1').mouseout(function() {
        t = setTimeout(function() {
            $('.ddm-1').hide();
        }, 100);

        $('.ddm-1').on('mouseenter', function() {
            $('.ddm-1').show();
            clearTimeout(t);
        }).on('mouseleave', function() {
            $('.ddm-1').hide();
        });
    });


    // visibility for "more" item in navbar
    $('.ddm-2').hide();

    $('#navitem-4').mouseover(function() {
        $('.ddm-2').show();
    });

    $('#navitem-4').mouseout(function() {
        t = setTimeout(function() {
            $('.ddm-2').hide();
        }, 100);

        $('.ddm-2').on('mouseenter', function() {
            $('.ddm-2').show();
            clearTimeout(t);
        }).on('mouseleave', function() {
            $('.ddm-2').hide();
        });
    });


    // carousel
    $('.carousel').carousel({
        interval: 5000
    });


})