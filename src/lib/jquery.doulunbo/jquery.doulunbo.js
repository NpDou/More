;(function($){
    $.fn.doulunbo=function(options){
        // 默认样式
        var defaults={
            qty:1,
            width:400,
            height:300,
            autoshow:true,
            time:2000,
            idx:0,
            diration:'vertical',
        }

        return this.each(function(){
            var opt=$.extend({},defaults,options);
            var $this=$(this);
            $this.css({
                width:opt.width*opt.qty,
                height:opt.height,
                margin:'0 auto',
                overflow: 'hidden',
                position:'relative',
            })



            var idx=opt.idx;
            var len=opt.adc.length;
            var timer;
            var $ul=$('<ul/>');
            $ul.addClass("imglist");
            var $dotted=$('<div/>');
            var $next=$('<span/>');
            var $prov=$('<span/>');
            // 初始化
            init();
            var index=0;
            $this.on('mouseenter',function(){
                clearInterval(timer);
            }).on('mouseleave',function(){
                timer=setInterval(autoshow,opt.time)
            }).trigger('mouseleave');

            // 初始化函数
            function init(){
                $ul.css({
                    width:(len+opt.qty)*opt.width,
                    height:opt.height,
                });
                $dotted.addClass('dotted');
                var arr=opt.adc.slice(0,opt.qty)
                for(let i=0;i<opt.qty;i++){
                    opt.adc.push(arr[i]);
                }

                var html1=$.map(opt.adc,function(item){
                    return '<li class="imgli"><img src="'+item+'" alt="" /></li>'
                }).join('');
                var html2='';
                for(let i=0;i<len;i++){
                    html2+= '<span></span>';
                }
                $dotted.html(html2);
                $ul.html(html1);
                $this.append($ul).append($dotted).append($next).append($prov);
                $($dotted.children('span')[0]).addClass('active');
                if(opt.diration=='vertical'){
                    $this.find('li').addClass('left')
                }
                $('.imgli').find('img').css({
                    width:opt.width,
                    height:opt.height,
                })
                show();
            }
            function autoshow(){
                idx++;
                index++;
                show();
            }
            function show(){
                if(idx==len+1){
                    $ul.css('left',0);
                    idx=1;
                }else if(idx<0){
                    idx=len-1;
                }
                if(index>len-1){
                    index=0;
                }
                else if(index<0){
                    index=len-1;
                }
                $($dotted.children('span')[index]).addClass('active');
                $($dotted.children('span')[index]).siblings('span').removeClass('active');
                var target = -idx*opt.width;
                $ul.animate({left:target});
            };


           

        })
    }
})(jQuery);


