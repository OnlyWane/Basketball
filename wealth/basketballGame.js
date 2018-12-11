//主体部分
$(function () {
    $('.main-logo').animate({
        top: 0
    }, 250, function () {
        $('.main-logo').animate({
            top: 11
        }, 250)
    });
    $('.main-logo').mouseenter(function () {
        $('.main-logo').animate({
            top: 0
        }, 250, function () {
            $('.main-logo').animate({
                top: 11
            }, 250)
        });
    });
    $('.main-title>img').animate({
        width: 740,
    },250,function () {
        $('.main-title>img').animate({
            width: 840,
        },250)
    });
});


//福利部分
$(function () {
    $('.walfare-logo').mouseenter(function () {
        $('.walfare-logo').stop(true,false).animate({
            top: 0
        }, 250, function () {
            $('.walfare-logo').stop(true,false).animate({
                top: 11
            }, 250)
        });
    });

    var liList = $("#activity-list").children();
    $('#activity-list').on('mouseenter',(function () {
            liList[0].style.transform = "translate(0, 110%) scale(1, 1) ";
            liList[1].style.transform = "translate(110%, 110%) scale(1, 1)";
            liList[2].style.transform = "translate(-110%, 110%) scale(1, 1) ";
            liList[3].style.transform = "translate(-110%, 0) scale(1, 1) ";
            liList[4].style.transform = "translate(110%, 0) scale(1, 1) ";
            liList[5].style.transform = "translate(110%, -110%) scale(1, 1) ";
            liList[6].style.transform = "translate(-110%, -110%) scale(1, 1) ";
            liList[7].style.transform = "translate(0, -110%) scale(1, 1) ";
            liList[8].style.transform = "scale(1, 1)";
    }));

    $('.walfare-title').on('click',function () {
        $('#activity-list').hide(1000);
        $('#activity-list2').slideDown(1000);
        $(this).stop(true,false).animate({
            top:50
        },500)
    });

    var liList2 = $("#activity-list2").children();
    for (var i=0;i<liList2.length;i++){
        $(liList2[i]).on('mouseenter',function () {
            $(this).find('a').css('transform','rotateY(360deg)')
        });
        $(liList2[i]).on('mouseleave',function () {
            $(this).find('a').css('transform','rotateY(0deg)')
        })
    }
});


//底部部分
$(function () {
    $('.foot-logo').mouseenter(function () {
        $('.foot-logo').stop(true,false).animate({
            top: 0
        }, 250, function () {
            $('.foot-logo').stop(true,false).animate({
                top: 11
            }, 250)
        });
    });
});




//固定部分
$(function () {
    $('.subnav>a').on('mouseenter',function () {
        $(this).find('img').stop(true,false).animate({
            top: -20,
        },200,function () {
            $('.subnav>a').find('img').stop(true,false).animate({
                top: -8
            },200)
        })
    })
});