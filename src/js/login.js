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
        // 电话号码验证
        var res={
            name:1,
            code:1,
        };
        $('.userPhone').on('blur',function(){
            let p=$('.userPhone').val();
            if(!/^1[34578]\d{9}$/.test(p)){
            $(".tip1").html('请输入正确的号码').addClass('no').removeClass('yes');
            res.name=1;
            }
            else{
            $(".tip1").html('正确').addClass('yes').removeClass('no');
              res.name=0;  
            }
            console.log(res)
        })
        // 验证码验证
        $('.num_1').on('blur',function(){
            let p=$('.num_1').val();
            let q=$('.code')[0].innerText;
            if(p!=q){
            res.code=1;
            $(".tip2").html('请输入正确的验证码').addClass('no').removeClass('yes');
            }
            else{
              res.code=0;  
            $(".tip2").html('正确').addClass('yes').removeClass('no');
            }
            console.log(res)
        })
        
        // 二维码
        $('.wechat').on('mouseup',function(){
            $('.cover').show();
        })
        $('.cover').on('mouseup',function(){
            $('.cover').hide()
        })
        // 普通登录
        $('.login2').on('click',function(){
                $.ajax({
                    url:'../MySQL/login.php',
                    data:{
                        username:$('.userName').val(),
                        password:$('.password').val()
                    },
                    success:function(data){
                        console.log(data);
                        if(data === 'success'){
                            location.href = '../index.html';
                        }else if(data === 'fail'){
                            $('.userName').parent().addClass('has-error');
                        }
                    }
                })
                
            })
    })
});