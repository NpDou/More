require(['config'],function(){
    require(['jquery','footer','zoom','return','lunbo','common'],function($,foo,zoo,re){
        $('footer').load('footer.html #link,#copyright',function(){
            foo();
        });
        $('.returnT').load('../html/return.html',function(){
            re();
        });
        var res={
            name:1,
            code:1,
            phonecode:1,
            pass:1,
        };
        $('header').load('login.html #header');
        // 手机号码
        $('.userPhone').on('blur',function(){
            let p=$('.userPhone').val();
            if(!/^1[34578]\d{9}$/.test(p)){
               $(".test1").html('请输入正确的号码').addClass('no').removeClass('yes');
                res.name=1;
            }
            else{
                $(".test1").html('正确').addClass('yes').removeClass('no');
                res.name=0;  
            }
        })
        // 验证码
        $('.code').html(vCode()).css({
            backgroundColor:randomColor(),
            opacity:randomNumber(0.5,1),
        });
        $('.num_1').on('blur',function(){
            let p=$('.num_1').val();
            let q=$('.code')[0].innerText;
            if(p!=q){
            res.code=1;
            $(".test2").html('请输入正确的验证码').addClass('no').removeClass('yes');
            }
            else{
              res.code=0;  
            $(".test2").html('正确').addClass('yes').removeClass('no');
            }
            console.log(res)
        })



        $('.num_4').on('input',function(){
            let pw1=$('.num_3').val();
            let pw2=$('.num_4').val();
            if(pw1!==pw2){
            res.pass=1;
            $(".test4").html('两次密码不一样').addClass('no').removeClass('yes');
            }
            else{
              res.pass=0;  
            $(".test4").html('正确').addClass('yes').removeClass('no');
            }
        })



        $('.reg').on('click',function(){
            $.ajax({
                url:'../MySQL/regi.php',
                data:{
                    username:$('.userPhone').val(),
                    password:$('.password').val()
                },
                success:function(data){
                    if(data === 'success'){
                        location.href = '../html/login.html';
                    }else if(data === 'fail'){
                        $('userPhone').addClass('danger');
                    }
                }
            })
        })
    })
});