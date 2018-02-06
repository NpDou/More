require(['config'],function(){
    require(['jquery','footer','zoom','lunbo','conmon'],function($,foo,zoo){
        $('footer').load('footer.html #link,#copyright',function(){
            foo();
        });
        $('header').load('login.html #header');
        $('.userPhone').on('blur',function(){
            let p=$('.userPhone').val();
            if(!/^1[34578]\d{9}$/.test(p)){
                alert('手机号码不合法');
                return false;
            }
        })
        $('.code').html(vCode()).css({
            backgroundColor:randomColor(),
            opacity:randomNumber(0.5,1),
        });
        $('.num_4').on('blur',function(){
            let pw1=$('.num_3').val();
            let pw2=$('.num_4').val();
            if(pw1!==pw2){
                alert('两次输入的密码不一致');
                return false;
            }
        })
    })
});