/* 
* @Author: Marte
* @Date:   2018-01-30 11:30:42
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-30 17:48:02
*/

;(function($){
    $.fn.douZoom=function(options){
        var defaults={
            code:4,
            width:400,
            height:400,
            tag:20
        }
        return this.each(function(){
            var opt = $.extend({},defaults,options);
            var $box=$(this);
            init();
            function init(){
                $box.css({
                    position:'relative',
                })
                // 放大倍数
                var $code=opt.code;
                // 添加元素
                // 小遮罩
                var $small=$('<div/>').addClass('small').css({
                    width:opt.width/$code,
                    height:opt.height/$code,
                }).appendTo($box);
                // 显示效果区域
                var $max=$('<span/>').addClass('max').css({
                    width:opt.width,
                    height:opt.height,
                    left:$box.offset().left+$box.outerWidth()+opt.tag,
                    top:$box.offset().top
                }).appendTo($(document.body));
                // 获取图片
                var img=$box.find('img');
                // 得到放大后的背景图
                var $largewidth=$code*$(img).width();
                var $largeheight=$code*$(img).height();

                // 获取图片路径
                var $url=$(img).attr('data-big')||$(img).attr('src');
                // 得到效果区域的背景大小
                $max.css('background-size',$largewidth+'px '+$largeheight+'px').css('background-image','url('+$url+')');

                var $disx=$box.outerWidth()-$small.outerWidth();
                var $disy=$box.outerHeight()-$small.outerHeight();

                $box.mousemove(function(e){
                    $max.css('display','block')
                    $('body').css('cursor','crosshair');
                    $small.css('display','block');
                    var $left=e.pageX-$small.outerWidth()/2-$box.offset().left;
                    var $top=e.pageY-$small.outerHeight()/2-$box.offset().top;
                    // 超出x轴范围
                    $small.css('left',$left).css('top',$top);
                    $max.css('background-positionX',-$left*$code).css('background-positionY',-$top*$code)
                    if( $left*1 < 0 ){
                        $small.css('left',0);
                        $max.css('background-positionX',0)
                    }
                    else if($left*1 > $disx ){
                        $small.css('left',$disx);
                        $max.css('background-positionX',-$disx*$code)
                    }
                    // 超出y轴范围
                    if( $top*1 < 0){
                        $small.css('top',0);
                        $max.css('background-positionY',0)
                    }
                    else if( $top*1 > $disy){
                        $small.css('top',$disy);
                        $max.css('background-positionY',-$disy*$code)
                    }
                }).mouseleave(function(){
                    $max.css('display','none')
                    $small.css('display','none');
                    $('body').css('cursor','auto');
                 })
            }
        })
    }
})(jQuery);