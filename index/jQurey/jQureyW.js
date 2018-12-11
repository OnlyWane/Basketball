;(function () {
    $(function () {
        //侧边栏
        var scrollTop = 0;
        $(window).on('scroll',function () {
            scrollTop = $(this).scrollTop();
            if(scrollTop>300){
                $('.go-top').css('display','block')
            }else{
                $('.go-top').css('display','none')
            }
        });

        //点击返回顶部
        $('.go-top').on('click',function () {
            var timeId2 = setInterval(function () {
                scrollTop -=100;
                window.scrollTo(0,scrollTop);
                if(scrollTop < 0){
                    clearInterval(timeId2);
                    scrollTop = 0;
                }
            },20);
        });

        //播放按钮
        var rotateDeg = 0;
        var timeId2 = null;
        timeId2 = setInterval(function () {
            rotateDeg +=10;
            $('.player').css('transform','rotate(' + rotateDeg+'deg)');
        },50);

        $('.job-video  i').on('mouseenter', function () {
            clearInterval(timeId2)
        });

        $('.job-video  i').on('mouseleave', function () {
            timeId2 = setInterval(function () {
                rotateDeg +=10;
                $('.player').css('transform','rotate(' + rotateDeg+'deg)');
            },50);
        });

        //职业导航,鼠标点击
        $('.job-nav .nav-item').click(function () {
            $(this).addClass('current').css("backgroundPositionX", "-134px").find('i').show().parent('li').siblings('li').removeClass('current').css("backgroundPositionX", "0px").find('i').hide();
            //轮播
            var idx = $(this).index();
            idx = -1360 * idx + 'px';
            $('.all-person').animate(
                {left: idx}, 500, function () {
                    $('.job-person').animate({
                        left: '40%'
                    }, 150, function () {
                        $('.job-person').animate({
                            left: '49%'
                        }, 150)
                    })
                });
            // $('.all-person').stop(false,false);
        });

        //职业导航,鼠标移入
        $('.job-nav li ').mouseenter(function () {
            $(this).find('i').show()
        });

        //职业导航,鼠标移出
        $('.job-nav li ').mouseleave(function () {
            if (this.className == 'nav-item current') {
                $(this).find('i').show();
            } else {
                $(this).find('i').hide();
            }
        })

        //波动
        var that = null;
        var timeId = null;
        $('.move').mouseenter(function () {
            that = this;
            var currentLeft = $(this).find('.wave-item').position().left;
            timeId =setInterval(function () {
                currentLeft -= 10;
                if(currentLeft<-638){
                    currentLeft = 0;
                }
                $(this).find('.wave-item').css('left', currentLeft + 'px');
            }.bind(that),40)
        });

        $('.move').mouseleave(function () {
            clearInterval(timeId);
        })



        //分享移入变色
        $('.iconfont').mouseenter(function () {
            $(this).css('color', '#ffc600')
        })
        $('.iconfont').mouseleave(function () {
            $(this).css('color','#e5ae3d')
        });
    });
}());