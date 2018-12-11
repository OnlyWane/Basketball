$(function(){
    /*视频和图片的切换*/ 
    $('#videoItem').click(function(){
        $('#pictureContent').css('display',"none");
        $('#videoContent').css('display',"block");
        $(this).find("span").css('backgroundPosition',"0 -98px");
        $('#pictrueItem').find("span").css('backgroundPosition', "-262px 0px");
    });

    $('#pictrueItem').click(function(){
        $('#pictureContent').css('display',"block");
        $('#videoContent').css('display',"none");
        $(this).find("span").css('backgroundPosition', "-262px -98px");
        $('#videoItem').find("span").css('backgroundPosition',"0 0");
    });
    /*------------------------------------------------------*/

    
    /*视频鼠标移入 */
    var $list = $('#videoContent').find('li');
    for (var i= 0; i<$list.length; i++){
        $($list[i]).mouseenter(function(){
            $(this).find('.bg').css('display',"block");
            $(this).find('span').css('display',"block");
            $(this).find('i').css('width',"448px");
            $(this).find('.item-bottom').css('backgroundPosition',"0 -361px");

        });
        $($list[i]).mouseleave(function(){
            $(this).find('.bg').css('display',"none");
            $(this).find('span').css('display',"none");
            $(this).find('i').css('width',"200px");
            $(this).find('.item-bottom').css('backgroundPosition',"-248px -361px");
        });
    }  
    /*------------------------------------------------------*/

    /*视频的点击与显示 */
    for(var i= 0; i <$list.length; i++){
        $($list[i]).click(function(){
            var idx = $(this).index();
            console.log(idx);
            $('#videoBox').css('display',"block").find('div').css('display',"block");
            $('#videoBox').find('div').find('.close').click(function(){
                $('#videoBox').css('display',"none");
            });
        });
    }

    /*图片的点击与显示 */
    var $picList = $('#pictureContent').find('li');
    for(var i= 0; i <$picList.length; i++){
        $($picList[i]).click(function(){
            $('#pictrueBox').css('display',"block");
            $('#pictrueBox').find('.close').click(function(){
                $('#pictrueBox').css('display',"none");
            });
        });
    }
});