/*
** Create by Administrator on 2018/10/21
*/
/*topbar 的js开始*/
;(function (  ) {
    var catalog = document.getElementById("catalog");//网易游戏目录
    var gameList = document.getElementById("gameList")//隐藏的大盒子
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

/*header-content  导航栏（官网首页 新闻中心等）. 开始*/
;(function  (  ) {
    var navList = document.getElementById("nav-list");
    var liList = navList.children
    var body = document.getElementsByTagName("body")[0];
    var logo = document.getElementById("logo");
    animationSlow(logo.children[0],{
        width:257
    },30)
    //右边滑动颜色效果
    for(var i = 0;i<liList.length;i++){
        liList[ i ].onmouseover=function (  ) {
            animationSlow(this.children[ 0 ].children[2],{
                top:0
            },15)
        }
        liList[ i ].onmouseout=function (  ) {
            animationSlow(this.children[ 0 ].children[2],{
                top:82
            },15)
        }
        /*如果需要根据每个人的页面改成对应的当前样式:1 修改每个页面的body的类名 2 完善一下下面的判断语句就可以了*/
        if (body.className=="news-center") {
            liList[ i ].children[ 0 ].className = "";//修改其他为默认
            liList[ 2 ].children[ 0 ].className = "curentA";//修改新闻中心的样式,新闻中心是下标为1  官网首页下标为0  球员介绍下标为2  资料站下标为3  官方渠道下标为4
        }else if(body.className=="home-page"){
            liList[i].children[0].className="";//修改其他为默认
            liList[4].children[0].className="curentA";
        }
    }
}());
/*header-content  导航栏（官网首页 新闻中心等）. 结束*/





/*main-content  点击最新 热点 公告 切换下面内容盒子，修改自身样式， 开始*/
;(function  (  ) {
    var rightNav = document.getElementById("right-nav");//包含着 最新 热点 公告 这三个盒子的父盒子
    var boxs = rightNav.children;//最新 热点 公告 三个盒子组成的数组
    var rightContent = document.getElementById("right-content")//包含三个内容盒子的父盒子
    var contentBoxs = rightContent.children;//三个内容盒子
    for(var i = 0;i<boxs.length;i++){
        boxs[i].onclick =function (  ) {

            for(var j = 0;j<contentBoxs.length;j++){
                if(boxs[j]==this){
                    boxs[j].className="currentNav";//改自己的样式
                    contentBoxs[j].style.display="block";//换下面的内容盒子
                }else {
                    boxs[j].className="";
                    contentBoxs[j].style.display="none";
                }
            }
        }
    }

}())

/*main-content  点击最新 热点 公告 切换下面内容盒子，修改自身样式， 结束*/



/*main-content  底部页码点击事件 ， 开始*/
;(function (  ) {
    //添加内容
    var messages = [{"leibie":"[新闻]","neiron":"篮球灵魂，天生契合，《这就是灌篮》X《潮人篮球》联合出击！...",
    "date":"2018-10-23"},{"leibie":"[新闻]","neiron":"旗袍特工？《潮人篮球》蒂娜皮肤闪电出击！",
        "date":"2018-10-19"},{"leibie":"[新闻]","neiron":"男神亮相，女神新装，新福利新活动火爆袭来！",
        "date":"2018-10-18"},{"leibie":"[公告]","neiron":"张宁周锐双代言，《潮人篮球》制霸灌篮球场！",
        "date":"2018-10-18"},{"leibie":"[新闻]","neiron":"这！就是灌篮！《潮人篮球》神秘新球员大猜想",
        "date":"2018-10-16"},{"leibie":"[新闻]","neiron":"《潮人篮球》地下球市玩法来袭！现场惊现《这！就是灌篮》？",
        "date":"2018-10-11"},{"leibie":"[公告]","neiron":"公平竞技，实力硬拼，我在地下球市等着你",
        "date":"2018-10-11"},{"leibie":"[新闻]","neiron":"蓄力三分一击必中！《潮人篮球》全新后卫R18登场",
        "date":"2018-10-09"},{"leibie":"[公告]","neiron":"国庆七天乐，快乐无极限！胜利女神带躺赢，限时夺宝等着你！",
        "date":"2018-09-30"},{"leibie":"[公告]","neiron":"10倍钻石返还！新技能槽开启！这波福利敢不敢马上抱走！",
        "date":"2018-09-27"},{"leibie":"[新闻]","neiron":"荣耀对决，相聚中秋！《潮人篮球》精英邀请赛冠军出炉！",
        "date":"2018-09-25"},{"leibie":"[新闻]","neiron":"打造最强俱乐部，《潮人篮球》全新战队赛玩法来袭！",
        "date":"2018-09-20"},{"leibie":"[公告]","neiron":"篮球盛典，双节欢庆，全新战队赛玩法火爆上线！",
        "date":"2018-09-20"},{"leibie":"[新闻]","neiron":"谁是街头篮球小子？《潮人篮球》新球员即将登场",
        "date":"2018-09-18"},{"leibie":"[新闻]","neiron":"土味嘻哈？《潮人篮球》实力中锋杰森全新皮肤上线",
        "date":"2018-09-13"}
    ]
    var fengleiList = document.getElementsByClassName("fenglei");
    var newsTextList = document.getElementsByClassName("newsText")
    var timeList = document.getElementsByClassName("time");
    for(var i = 0;i<15;i++){
        fengleiList[i].innerText=messages[i].leibie;
        newsTextList[i].innerText=messages[i].neiron;
        timeList[i].innerText=messages[i].date;
    }
    //注册下一页点击事件
    var nextBtn = document.getElementById("next");//下一页盒子
    var prevBtn = document.getElementById("prev");//下一页盒子
    var newNews = document.getElementById("newNews");
    var ulList = newNews.children;
    var ymList = document.getElementsByClassName("ym");
    var djy = document.getElementById("djy");
    var gjy = document.getElementById("gjy");
    var index = 0;
    gjy.innerText = "共"+ymList.length+"页";
    djy.innerText = "第"+1+"页";

   for(var i = 0;i<ymList.length;i++){
       ymList[i].onclick=function (  ) {
         for(var j = 0;j<ymList.length;j++){
            if (ymList[j]==this){
                index=j;
                djy.innerText="第"+(index+1)+"页";
                ymList[j].children[0].className=" curentYe"
                ulList[j].className=" curentUL"
            }else {
                ymList[j].children[0].className=" "
                ulList[j].className=" "
            }
         }
         window.index=index;
       }
   }
    nextBtn.onclick = function (  ) {
        for(var k = 0;k<ymList.length;k++){
            ymList[index+1].children[0].className=" curentYe";
            ulList[index+1].className=" curentUL"
            if (k!=index+1){
                ymList[k].children[0].className=" ";
                ulList[k].className=" "
            }
        }
        index++;
        if(index>4){
            index=4;
        }
        djy.innerText="第"+(index+1)+"页";
        window.index=index;
    }
    prevBtn.onclick = function () {
        for(var k = 0;k<ymList.length;k++){
            ymList[index-1].children[0].className=" curentYe";
            ulList[index-1].className=" curentUL"
            if (k!=index-1){
                ymList[k].children[0].className=" ";
                ulList[k].className=" ";
            }
        }
        index--;
        if(index<0){
            index=0;
        }
        djy.innerText="第"+(index+1)+"页";
        window.index=index;
    }
}())
/*main-content  底部页码点击事件 ， 结束*/
var dingBu= document.getElementById("dingBu");

  if(scrollY<=400){
      dingBu.style.display="none"
  }else {
      dingBu.style.display="block"
  }
window.onscroll = function () {
    if(scrollY<=300){
        dingBu.style.display="none"
    }else {
        dingBu.style.display="block"
    }
}
