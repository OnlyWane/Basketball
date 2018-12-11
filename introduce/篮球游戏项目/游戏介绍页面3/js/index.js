/*
** Create by Administrator on 2018/10/21
*/
/*topbar 的js开始*/
;(function (  ) {
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
    }() )
/*topbar 的js结束*/
