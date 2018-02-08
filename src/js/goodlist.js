require(['config'],function(){
    require(['jquery','footer','zoom','lunbo'],function($,foo,zoo){
        $('footer').load('../html/footer.html',function(){
            foo();
        });
        $('header').load('../html/header.html');
        $('nav').load('../html/nav.html');
        function loading(){
            $.ajax({
                url:'../MySQL/goods.php',
                dataType:'json',
                data:{class:'b'},
                success:function(data){
                    console.log(data)
                    $len=data.length;
                    var str=$.map(data,function(item){
                        return `<li data-id="${item.id}">
                                    <img src="${item.url}" />
                                    <p><span>【限时特卖 】</span> ${item.name}</p>
                                    <h5>￥${item.nprice}<span>${item.sendm}</span></h5>
                                    <div>${item.sendm}急速直达</div>
                                </li>`
                    }).join('\n');
                    $('.list').html(str);
                    $('.num').html($len);
                }
            }) 
        }
        loading();

        $.ajax({
            url:'../MySQL/goods.php',
            dataType:'json',
            data:{hot:'t'},
            success:function(data){
                var str=$.map(data,function(item){
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