/*
** Create by LENOVO on 2018/10/27
*/
$(function (  ) {
    //视频播放区域
    // $('#bofng').mouseenter(function (  ) {
    //     $('#vdo').show();
    // })
    // $('#bofng').mouseleave(function (  ) {
    //     $('#vdo').hide();
    //     $('#video').show();
    // })
    //新闻中心区域
    $('#newMore').mouseenter(function (  ) {
        $('.gode').show();
        $('.gedo').hide();
        $('.jahao').hide();
    })
    $('#newMore').mouseleave(function (  ) {
        $('.gode').hide();
        $('.gedo').show();
        $('.jahao').show();
    })
    var color=null;
    $('.tegog').mouseenter(function (  ) {
        color=$(this).css('color');
        console.log(color);
        $(this).css('color','#f8ba52');
    })
    $('.tegog').mouseleave(function (  ) {
        $(this).css('color',color);
    })
    //轮播图区域
    //自动轮播
   lunBo();
    //鼠标移入
    $('#swiper li').mouseenter(function (  ) {
        clearInterval(timeID);
        var idx=$(this).index();
        $(this).css('opacity',1).siblings('li').css('opacity',0.4);
        $('.yqsi li').eq(idx).fadeIn(500).siblings('li').fadeOut(500);
    })
    //鼠标移出
    $('#swiper li').mouseleave(function (  ) {
        lunBo();
    })
    //封装一个自动轮播的函数
    function lunBo (  ) {
        var index=0;
        timeID=setInterval(function (  ) {
            if(index==4){
                index=0;
            }
            $('.yqsi li').eq(index).fadeIn(1000).siblings('li').fadeOut(1000);
            $('#swiper li').eq(index).css('opacity',1).siblings('li').css('opacity',0.4);
            index++;
        },1600)
}})
