


var one =document.getElementById('ball-one');
var two =document.getElementById('ball-three');
var three =document.getElementById('ball-four'),



    // 给页面注册滚动事件




//2.页面注册滚动条事件
    window.onscroll = function (  ) {
    console.log ( getPageScroll ().scrollTop );
    //如果滚动距离超过广告栏高度，则修改导航栏为固定定位
    if(getPageScroll().scrollTop >= topPart.offsetHeight){
        //修改导航栏为固定定位
        /*注意点：如果元素定位为固定定位，则会脱离标准流，后面的盒子就会顶上去*/
        navBar.className = 'fixed';
        //解决方案：增加后面元素的margin为脱标的高度，把元素撑起来
        mainPart.style.marginTop = 10 + navBar.offsetHeight + 'px';
    }else{//没有超过,取消固定定位
        navBar.className = '';
        //margin恢复原来的距离
        mainPart.style.marginTop = '10px';
    }
}