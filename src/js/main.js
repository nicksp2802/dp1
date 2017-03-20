/**
 * Created by NickSp on 15.03.2017.
 */


$('.bxslider').bxSlider({
    pagerCustom: '#bx-pager'
});
$(window).scroll(function () {
    var st = $(this).scrollTop();
 //   console.log(st);
    $(".mainbar-work-page").css({
        "transform":"translate(0%,"+ st/200 + "%)"
    })
})
