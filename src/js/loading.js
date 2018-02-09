define(['jquery'],function(){
    return function(){
        $.ajax({
            url:'../MySQL/shopcar.php',
            dataType:'json',
            success:function(data){
                var str=$.map(data,function(item){
                    var total=item.qty*item.nprice;
                    return `<tr data-id="${item.id}">
                    <td><input type="checkbox" class="chose"/><a href="#"><img src="${item.url}" /></a></td>
                                <td class="name"><a>${item.pinpai}</a> <a>${item.name}</a></td>
                                <td class="send"><span>${item.sendm}</span></td>
                                <td class="pri">￥${item.nprice}</td>
                                <td class="qty"><button class="btn add">+</button><span>${item.qty}</span><button class="btn dec">-</button></td>
                                <td class="total">￥${total}</td>
                                <td><button class="btn delbtn">x</button></td>
                            </tr>`
                }).join('\n');
                $('.carlist').html(str);
            }
        }) 
    }
})
