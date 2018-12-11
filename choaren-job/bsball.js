


//js入口函数
window.onload=function(){

    var catalog = document.getElementById("catalog");//网易游戏目录
    var gameList = document.getElementById("gameList")//隐藏的大盒子
    //移入显示大盒子,移出隐藏大盒子
    catalog.onmouseover = function (  ) {
        gameList.style.display="block";
    }
    catalog.onmouseout = function (  ) {
        gameList.style.display="none";
    }
    var anzhuo = document.getElementById("anzhuo");
    var baoxiang = document.getElementById("baoxiang");
    animationSlow(anzhuo,{
        top:-55
    },50,animationSlow(baoxiang,{
        top:0
    },50))

    //安卓/宝箱   的轮播效果
    function lunbo (  ) {
        if (anzhuo.offsetTop== -55){
            anzhuo.style.top=55+"px";
            animationSlow(baoxiang,{
                top:-55
            },50,animationSlow(anzhuo,{
                top:0
            },50))
        } else if (baoxiang.offsetTop== -55) {
            baoxiang.style.top= 55+"px";
            animationSlow(anzhuo,{
                top:-55
            },50,animationSlow(baoxiang,{
                top:0
            },50))
        }
    }
    setInterval(lunbo,5000)
//js入口函数
}

//jq入口函数
$(function () {

    var browser_width = $(document.body).width();
    $(".swiper-slide").css("width",browser_width);


    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        mousewheelControl: true,
        // pagination: '.swiper-pagination',
        hashNavigation: true,
        watchState: true,
        // paginationType : 'progress',
        slidesPerView: "auto",
        autoplayDisableOnInteraction: false
    });

    var idex = 0;
    $('.nav-list a').on('click',function () {
            idex = $(this).index();
            console.log(idex);
            $(this).addClass('active').siblings('a').removeClass('active');

    });

//jq入口函数
});











