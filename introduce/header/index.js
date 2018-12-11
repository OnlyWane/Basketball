/*
** Create by Administrator on 2018/10/21
*/



/*header-content  导航栏（官网首页 新闻中心等）. 开始*/
;(function  (  ) {
    var navList = document.getElementById("nav-list");
    var liList = navList.children
    var body = document.getElementsByTagName("body")[0];
    var logo = document.getElementById("logo");
    animationSlow(logo.children[0],{
        width:257
    },30)

    for(var i = 0;i<liList.length;i++){
        //右边鼠标移入移出滑动颜色效果
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
        //根据body的类名改变导航栏当前样式
        /*如果需要根据每个人的页面改成对应的当前样式:1 修改每个页面的body的类名 2 完善一下下面的判断语句就可以了*/
        if (body.className=="news-center") {
            liList[ i ].children[ 0 ].className = "";//修改其他为默认
            liList[ 3 ].children[ 0 ].className = "curentA";//修改新闻中心的样式,新闻中心是下标为1  官网首页下标为0  球员介绍下标为2  资料站下标为3  官方渠道下标为4
        }else if(body.className=="home-page"){
            liList[i].children[0].className="";//修改其他为默认
            liList[4].children[0].className="curentA";
        }
 }

}());
/*header-content  导航栏（官网首页 新闻中心等）. 结束*/

