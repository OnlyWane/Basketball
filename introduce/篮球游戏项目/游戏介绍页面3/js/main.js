


//主导航

$(function (  ) {

     $('.nav>.nav-item').on('click',function (  ) {
         $(this).addClass('active').siblings('a').removeClass('active');
     })

})



//主要内容

$(function (  ) {
    $(window).on('scroll', function () {

        if ($(window).scrollTop()>0){
                $('.juqing.fadeInLeft').animate({
                    left : 99
                },1000,'swing')
        }
        if ($(window).scrollTop()>100){
                $('.texun.fadeInRight').animate({
                    left : 99
                },1000,'swing')
        }
        if ($(window).scrollTop()>300){
                $('.renjiduizhan.fadeInLeft').animate({
                    left : 99
                },1000,'swing')
        }
        if ($(window).scrollTop()>700) {
            $ ( '.kaifangjian.fadeInUp' ).animate ( {
                top:1040
            },500,'swing' )
        }

        //多人玩法
        if ($(window).scrollTop()>700){
            $('.danren1v1.fadeInLeft').animate({
                left : 99
            },1000,'swing')
        }
        if ($(window).scrollTop()>800){
            $('.duoren2v2.fadeInRight').animate({
                left : 655
            },1000,'swing')
        }
        if ($(window).scrollTop()>1000){
            $('.danren3v3.fadeInLeft').animate({
                left : 99
            },1000,'swing')
        }
        if ($(window).scrollTop()>1000){
            $('.duoren3v3.fadeInRight').animate({
                left : 655
            },1000,'swing')
        }
        //赛事玩法
        if ($(window).scrollTop()>1700){
            $('.paiweisai.fadeInLeft').animate({
                left : 99
            },1000,'swing')
        }
        if ($(window).scrollTop()>1800){
            $('.zidingyi.fadeInRight').animate({
                left : 99
            },1000,'swing')
        }

        if ($(window).scrollTop()>1900){
            $('.quyuliansai.fadeInLeft').animate({
                left : 99
            },1000,'swing')
        }
        if ($(window).scrollTop()>2000){
            $('.yulesaishi.fadeInRight').animate({
                left : 99
            },1000,'swing')
        }
    });
})


