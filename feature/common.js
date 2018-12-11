/*
** Create by 张晓坤 on 2018/9/27
* 本文件：主要解决浏览器兼容性问题
*/

/**1.获取元素文本
 *
 * @param ele  元素
 * @return {*}  文本
 */
function getText(ele){
    //能力检测
    if (ele.innerText){//非火狐42
        //只要ele.innerText属性的值是真（不是undefined 也不是null）
        return ele.innerText;
    }else{//火狐42
        return ele.textContent;
    }
}

/**2.设置元素文本
 *
 * @param ele  元素
 * @param text 要设置的文本
 * @return {*}  文本
 */
function setText(ele,text){
    //能力检测
    if (ele.innerText){//非火狐42
        //只要ele.innerText属性的值是真（不是undefined 也不是null）
       ele.innerText = text;
    }else{//火狐42
        ele.textContent = text;
    }
}

/**3.获取下一个兄弟元素
 * @param ele:元素
 * @return ele的下一个兄弟元素
 */
function getNextElementSibling(ele){
    //1.能力检测
    if (ele.nextElementSibling){//谷歌火狐
        return ele.nextElementSibling;
    }else{//IE8
        //（1）获取下一个兄弟节点
        var node = ele.nextSibling;
        //(2) 判断是不是元素，如果不是则继续往下找
        //如果node节点存在  并且  节点类型不是1    则继续往下找
        while(node && node.nodeType != 1){
            node = node.nextSibling;
        }
        //(3)返回找到的元素    1.node为null：找到底了还是没有找到则返回null   2.nodeType为1 找到元素
        return node;
    }
}

/**
 * 4.获取上一个兄弟元素
 * @param ele  元素
 * @return 上一个兄弟元素/null
 */
function getPreviousElementSibling (ele  ) {
    //1.能力检测
    if (ele.previousElementSibling){//谷歌火狐
        return ele.previousElementSibling;
    }else{//IE8
        var node = ele.previousSibling;// null   元素  文本  注释
        while(node && node.nodeType != 1){
            node = node.previousSibling;
        }
        return node;
    }
}

/**
 * 5.获取父元素的第一个子元素
 * @param ele  父元素
 * @return 第一个子元素/null
 */
function getFirstElementChild ( ele  ) {
    //1.能力检测
    if (ele.firstElementChild){//谷歌火狐
        return ele.firstElementChild;
    }else{//IE8
        var node = ele.firstChild;
        while(node && node.nodeType != 1){
            //继续往下找
            node = node.nextSibling;
        }
    }
    return node;
}

/**
* 6.获取父元素的最后一个子元素
* @param ele  父元素
* @return 最后一个子元素/null
    */
    function getLastElementChild ( ele ) {
        //1.能力检测
        if (ele.lastElementChild){//谷歌火狐
            return ele.lastElementChild;
        }else{//IE8
            var node = ele.lastChild;
            while (node && node.nodeType != 1){
                node = node.previousSibling;//继续往上找
            }
            return node;
        }
    }

/**
 * 7.获取元素样式属性
 * @param obj  要获取的元素对象
 * @param attr  要获取的属性名字符串
 * @return {*}  属性值
 */
function getStyle(obj,attr){
    //能力检测
    if (window.getComputedStyle){//谷歌火狐浏览器
        var style = window.getComputedStyle(obj, null);
        /*注意点：这里只能用字符串语法去获取属性值*/
        //return style.attr;//这个代码意思是获取对象attr属性的值
        return style[attr];//这个代码意思是获取attr变量中存储的字符串对象的属性值

    }else{//IE8浏览器
        return obj.currentStyle[attr];
    }
}

/**8.获取页面滚动出去的距离
 *
 * @return {{scrollLeft: number, scrollTop: number}}
 */
function getPageScroll (  ) {
    //逻辑或短路运算
    /*逻辑或：一真则真
    找真：如果左边式子的值能转成true，则无条件返回左边式子的值，否则无条件返回右边式子的值
     */
    var x =  window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    var y =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    return {
        scrollLeft:x,
        scrollTop:y
    };
}