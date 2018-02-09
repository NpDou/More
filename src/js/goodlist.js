require(['config'],function(){
    require(['jquery','footer','zoom','return','lunbo'],function($,foo,zoo,re){
        $('footer').load('../html/footer.html',function(){
            foo();
        });
        $('.returnT').load('../html/return.html',function(){
            re();
        });
        $('header').load('../html/header.html');
        $('nav').load('../html/nav.html');
        function loading(lei,pageno){
            $.ajax({
                url:'../MySQL/goods.php',
                dataType:'json',
                data:{
                    // 获取不同的商品，可以由上个页面传过来
                    class:lei,
                    fen:'t',
                    pageNo:pageno,
                    },
                success:function(data){
                    console.log(data);
                    var num=randNum(0, data.length-1,5);
                        var _data=[];
                        for(let i=0;i<5;i++){
                            _data.push(data[num[i]]);
                        }
                    var str=$.map(data.data,function(item){
                        return `<li data-id="${item.id}" class="good">
                                    <img src="${item.url}" />
                                    <p><span>【限时特卖 】</span> ${item.name}</p>
                                    <h5>￥${item.nprice}<span>${item.sendm}</span></h5>
                                    <div>${item.sendm}急速直达</div>
                                </li>`
                    }).join('\n');
                    $('.list').html(str);
                    $('.num').html(data.total);

                    // 页码
                    var pageQty = Math.ceil(data.total/data.qty);
                    $('.page').html('');
                    for(let i=1;i<=pageQty;i++){
                        $span = $('<span/>');
                        $span[0].innerText = i;
                        if(i===data.pageNo){
                            $span[0].className = 'active';
                        }
                        $('.page').append($span);
                    }   
                    $now=$('.page').find('.active')[0].innerText;
                    $('.all').html($now+"/"+pageQty)
                    // 页码点击事件
                    // 
                    var lei1=data.data[1].class;
                    $('.page').on('click',function(e){
                        if(e.target.tagName.toLowerCase() === 'span'){
                            $pageno = e.target.innerText*1;
                            loading(lei1,$pageno)
                        }
                    })
                    // 上/下一页
                    $('.next').on('click',function(){
                        $pageno = $now*1+1;
                        if($pageno>pageQty){
                           $('.next').addClass('fal')
                        }
                        else{
                            loading($pageno);
                            $('.prov').removeClass('fal')
                        }
                    })
                    $('.prov').on('click',function(){
                        $pageno = $now*1-1;
                        if($pageno<1){
                           $('.prov').addClass('fal');
                        }
                        else{
                            $('.next').removeClass('fal');
                            loading(lei1,$pageno)
                        }
                    })
                    // 选择分类
                    $('.leixing').on('click',function(){
                        var lei=this.dataset.class;
                        loading(lei)
                    })
                    // 点击商品跳转
                    
                    $('.good').on('click',function(){
                        $id=this.dataset.id;
                        window.location="../html/detail.html?id="+$id;
                    })

                }
            }) 
        }
        loading("a",1);
// 热门推荐
// 
// 
        function randNum(min, max, num) {
            var arr = [],t;
            function fn(i) {
                for (i; i < num; i++) {
                    t = parseInt(Math.random() * (max - min + 1) + min);
                        for(var k in arr) {
                            if (arr[k] == t) {
                                fn(i);
                                break;
                            }
                        }
                    arr[i] = t;
                }
            }
                fn(0);
                return arr
        }
        $.ajax({
            url:'../MySQL/goods.php',
            dataType:'json',
            data:{hot:'t'},
            success:function(data){
                var num=randNum(0, data.length-1,5);
                        var _data=[];
                        for(let i=0;i<5;i++){
                            _data.push(data[num[i]]);
                        }
                var str=$.map(_data,function(item){
                return `<dd>
                            <img src="${item.url}" />
                            <p>${item.pinpai} ${item.name}</p>
                            <p>￥${item.nprice}<span>（已有${item.saled}口碑）</span></p>
                        </dd>`
                }).join('\n');
                $('.hotlist').html("<dt>热门推荐</dt>"+str);
            }
        }) 
    })
})