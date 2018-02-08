require(['config'],function(){
    require(['jquery','footer','zoom','lunbo','conmon'],function($,foo,zoo){
        $('footer').load('footer.html #link,#copyright',function(){
            foo();
        });
        function loading(){
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
        loading();

        // 获取不到
        // 
        // 
        // 代码执行先后问题
        // 
        // 
        $('btn').on('mouseup',function(e){
            $id=$(e.target).closest('tr')[0].dataset.id;
            $way=e.target.innerText;
            $qty=$(e.target).parent().parent().find('.qty').find('span')[0].innerText;
            $.ajax({
                url:'../MySQL/add.php',
                data:{
                    id:$id,
                    way:$way,
                    qty:$qty,
                },
                success:function(data){
                    $('.carlist').html('');
                    loading();
                    console.log($id,$way,$qty);
                }
            })
        })
        

// 全选
        function isall(){
            var $same=$('.chose'); 
            var res=true;
            for(var i=0;i<$same.length;i++){
                if(!$same[i].checked){
                    res=false;
                    break;
                }
            }
            return res;
        }
        // 事件委托
        $('main')[0].onclick=function(e){
            if(e.target.className==='chose'){
                $('.allchose')[0].checked=isall();
                $('.allchose')[1].checked=isall();
                total();
            }
            // 判断全选  全不选
            else if(e.target.className==='allchose'){
                let same=$('.chose'); 
                console.log($('.allchose'))
                for(let i=0;i<same.length;i++){
                  if(e.target.checked){
                      same[i].checked=e.target.checked;
                      $('.allchose')[0].checked=e.target.checked;
                      $('.allchose')[1].checked=e.target.checked;
                  }
                  else{
                      $('.allchose')[0].checked=false;
                      $('.allchose')[1].checked=false;
                        same[i].checked=false;
                  }
                } 
                total();       
            }
        }
        // 计算总价
        function total(){
            $('.totalP').html(0.00);
            var totalp=0;
            $check=$('.chose');
            for(let i=0;i<$check.length;i++){
                if($check[i].checked==true){
                    var ste=$($check[i]).parent().parent().find('.total')[0].innerText.slice(1)*1;
                    totalp+=ste;
                    $('.totalP').html(totalp);
                    console.log(totalp)
                }
            }
        }
        
        

    })
});