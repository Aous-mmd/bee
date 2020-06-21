$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".middle img").css({
        transform: 'translate3d(0%, -' + ((scroll / 100) * 9) + '%, 0) scale(' + (100 + scroll / 5) / 100 + ')',
    });
    $(".middle p").animate({
        marginTop: '0'
    });
});