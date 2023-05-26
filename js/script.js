$(function () {
    $('#sidebarMenu .submenu-toggle').on('click', function () {
        //console.log($(e))
        $(this).toggleClass('submenu-active')
        $(this).find('.submenu').stop().slideToggle()
        $(this).siblings('.submenu-toggle').removeClass('submenu-active').find('.submenu').slideUp()
    })
    $("#mclik").on('click', function (e) {
        $("#slidebar").toggleClass('showup')
        $('.mask').toggleClass('showup')
        $('#mclik').toggleClass('close')
    })
    $("#mclik").focus(function (e) {
        console.log($('focus'))
    })
    $('.mask').on("touchstart", function () {
        $("#slidebar").removeClass('showup')
        $('.mask').removeClass('showup')
        $('#mclik').removeClass('close')
    });
    $('.open-s-item').on('click', function (e) {
        $('.wp-nav-tab-ul').stop().slideToggle()
        //$(this).toggleClass('open')  
    })
})
