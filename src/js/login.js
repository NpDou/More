require(['config'],function(){
    require(['jquery','footer','zoom','lunbo','conmon'],function($,foo,zoo){
        $('footer').load('footer.html #link,#copyright',function(){
            foo();
        });
        $('.code').html(vCode()).css({
            backgroundColor:randomColor(),
            opacity:randomNumber(0.5,1),
        });
        $('.tab').on('mouseup',function(e){
            if(e.target.tagName.toLowerCase()=='div'){
                $(e.target).addClass('active').siblings('div').removeClass('active');
                let i=e.target.dataset.idx;
                if(i==1){
                    $('.sign_1').show();
                    $('.sign_2').hide();
                }else{
                    $('.sign_1').hide();
                    $('.sign_2').show();
                }
            }
        })
        $('.userPhone').on('blur',function(){
            let p=$('.userPhone').val();
            if(!/^1[34578]\d{9}$/.test(p)){
            alert('手机号码不合法');
            return false;
            }
        })
        $('.wechat').on('mouseup',function(){
            $('.cover').show();
            console.log(123)
        })
        $('.cover').on('mouseup',function(){
            $('.cover').hide()
        })
    })
});