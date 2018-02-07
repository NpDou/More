require(['config'],function(){
    require(['jquery','footer','zoom','lunbo'],function($,foo,zoo){
        $('footer').load('html/footer.html',function(){
            $('footer img').each(function(idx,item){
                item.src=item.src.slice(23);
            })
            foo();
        });
        $('header').load('html/header.html',function(){
            $('header img').each(function(idx,item){
                item.src=item.src.slice(23);
            })
        })
        $('nav').load('html/nav.html',function(){
            $('nav img').each(function(idx,item){
                item.src=item.src.slice(23);
            })
        })
        var i=0;
        var timer;
        var a_list=$('.pic').find('a');
        var smalldiv=$('.smallpic').find('div');
        var len=a_list.length;
        for(let j=0;j<len;j++){
            let span=$('<span/>');
            span.html(j+1);
            $('.page').append(span);
        }
        var spanlist=$('span');
        $(spanlist[0]).addClass('active').siblings('span').removeClass('active');
        $('.page').on('click',function(e){
            e.preventDefault();
            if(e.target.tagName.toLowerCase()=='span'){
                $(e.target).addClass('active').siblings('span').removeClass('active');
                i=e.target.innerText-1;
                for(let j=0;j<len;j++){
                    $(a_list[j]).fadeOut();
                    $(smalldiv[j]).fadeOut();
                }
                $(a_list[i]).fadeIn();
                $(smalldiv[i]).fadeIn();
            }
        })
        $('#banner').on('mouseenter',function(){
            clearInterval(timer);
        }).on('mouseleave',function(){
            timer=setInterval(function(){
            i++;
            if(i>len-1){
                i=0;
            };
            for(let j=0;j<len;j++){
                    $(a_list[j]).fadeOut();
                    $(smalldiv[j]).fadeOut();
                }
            $(a_list[i]).fadeIn(); 
            $(smalldiv[i]).fadeIn();
            $(spanlist[i]).addClass('active').siblings('span').removeClass('active');
        },3000)
        }).trigger('mouseleave');
        $.ajax({
                type:'GET',
                url:'api/data/contry.json',
                dataType:'json',
                success:function(data){
                    var str_c=$.map(data,function(item){
                        return `<span>
                            <div>
                                <img src="${item.url}" alt="">
                                <p>${item.name}</p>
                                <p>${item.engName}</p>
                            </div>
                            <div>
                                <p>${item.pinpai[0]}</p>
                                <p>${item.pinpai[1]}</p>
                                <p>${item.pinpai[2]}</p>
                                <p>${item.pinpai[3]}</p>
                            </div>
                        </span>`
                    }).join('\n');
                    $('.contry').html(str_c);
                }
            })
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
            function getdata(tar){
                $.ajax({
                    type:'GET',
                    url:'api/data/new.json',
                    dataType:'json',
                    success:function(data){
                        var num=randNum(0, data.length-1,5);
                        var _data=[];
                        for(let i=0;i<5;i++){
                            _data.push(data[num[i]]);
                        }
                        var str_n=$.map(_data,function(item){
                            return `<li>
                                <a href="#">
                                    <img src="${item.url}" alt="">
                                    <p>${item.name}</p>
                                    <p>${item.nprice}</p>
                                    <i></i>
                                </a>
                                </li>
                            `
                        }).join('');
                        tar.html("<ul>"+str_n+"</ul>");
                    }
                })  
            }
            getdata($('.new'));
            $('.change').on('mouseup',function(){
                $('.new').html("");
                getdata($('.new'));
            })

            $.ajax({
                type:'GET',
                url:'api/data/new.json',
                dataType:'json',
                success:function(data){
                    var num=randNum(0, data.length-1,8);
                    var _data=[];
                    for(let i=0;i<8;i++){
                        _data.push(data[num[i]]);
                    }
                    var str_h=$.map(_data,function(item){
                        return `<div><a href="#">
                                    <span>
                                        <h5>${item.engname}</h5>
                                        <p>${item.name}</p>
                                    </span>
                                    <img src="${item.url}" alt="">
                                </a></div>`
                    }).join('\n');
                    $('.hot').html(str_h);
                }
            })
            $.ajax({
                type:'GET',
                url:'api/data/flash.json',
                dataType:'json',
                success:function(data){
                    var str_f=$.map(data,function(item){
                        return `<div><a href="#">
                                    <span>
                                        <h5>${item.discount}<i>折起</i></h5>
                                        <p>${item.name}</p>
                                    </span>
                                    <img src="${item.url}" alt="">
                                    <span class="timecout"></span>
                                </a></div>`
                    }).join('\n');
                    $('.flash').html(str_f);
                    var end = Date.parse('2018-3-29 12:05:20');
                    showTime();
                    var timer = setInterval(showTime,1000);
                    function showTime(){
                        var now = Date.now();
                        var offset = Math.floor((end - now)/1000);//毫秒
                        if(offset <= 0){
                            clearInterval(timer);
                        }
                        var sec = offset%60;
                        var min = Math.floor(offset/60)%60;
                        var hour = Math.floor(offset/60/60)%24;
                        var day = Math.floor(offset/60/60/24);
                        sec = sec<10? '0'+sec : sec;
                        min = min<10? '0'+min : min;
                        hour = hour<10? '0'+hour : hour;
                        day = day<10? '0'+day : day;
                        $('.flash').find('.timecout').html(day + '天' + hour + '时' + min + '分' + sec + '秒');

                    }
                }
            })
            var idx=0;
            function getlist(src,tar){
                $.ajax({
                    type:'GET',
                    url:src,
                    dataType:'json',
                    success:function(data){
                        var arr=["img/index_ad_beauty_m_bottom4.jpg","img/index_ad_beauty_m_bottom5.jpg","img/index_ad_beauty_m_bottom7.jpg","img/index_ad_beauty_m_bottom8.jpg","img/index_ad_beauty_m_bottom9.jpg"];
                        var str=["beauty","beauty","beauty","beauty","beauty","beauty","beauty","beauty","beauty","beauty","beauty"];
                        var num=randNum(0,data.length-1,8);
                        var _data=[];
                        for(let i=0;i<8;i++){
                            _data.push(data[num[i]]);
                        }
                        var str_l= `<div class="up">
                                        <a>
                                            <h2>${_data[1].pinpai}</h2>
                                            <h4>${_data[1].discribe}</h4>
                                            <h4>${_data[1].class}</h4>
                                            <p>低至<span>￥${_data[1].nprice}</span></p>
                                            <img src=${_data[1].url} alt="">
                                        </a>
                                        <div>
                                            <a>
                                                <span>
                                                    <h2>${_data[2].pinpai}</h2>
                                                    <h4>${_data[2].discribe}</h4>
                                                    <h4>${_data[2].class}</h4>
                                                    <p>低至<span>￥${_data[2].nprice}</span></p>
                                                </span>
                                                <img src=${_data[2].url} alt="">  
                                            </a>
                                            <a>
                                                <span>
                                                    <h2>${_data[3].pinpai}</h2>
                                                    <h4>${_data[3].discribe}</h4>
                                                    <h4>${_data[3].class}</h4>
                                                    <p>低至<span>￥${_data[3].nprice}</span></p>
                                                </span>
                                                <img src=${_data[3].url} alt="">  
                                            </a>
                                            <a class="lunbo">
                                                
                                            </a>
                                        </div>
                                        <a>
                                            <h2>${_data[4].pinpai}</h2>
                                            <h4>${_data[4].discribe}</h4>
                                            <h4>${_data[4].class}</h4>
                                            <p>低至<span>￥${_data[4].nprice}</span></p>
                                            <img src=${_data[4].url} alt="">
                                        </a>
                                        </div>
                                        <div class="down">
                                            <div class="pinpai">
                                                
                                            </div>
                                            <div>
                                                <a href="#">
                                                    <img src=${_data[4].url}  alt="">
                                                    <h5>${_data[4].class}</h5>
                                                    <p>￥${_data[4].nprice}</p>
                                                </a>
                                                <a href="#">
                                                    <img src=${_data[5].url}  alt="">
                                                    <h5>${_data[5].class}</h5>
                                                    <p>￥${_data[5].nprice}</p>
                                                </a>
                                                <a href="#">
                                                    <img src=${_data[6].url}  alt="">
                                                    <h5>${_data[6].class}</h5>
                                                    <p>￥${_data[6].nprice}</p>
                                                </a>
                                                <a href="#">
                                                    <img src=${_data[7].url}  alt="">
                                                    <h5>${_data[7].class}</h5>
                                                    <p>￥${_data[7].nprice}</p>
                                                </a>
                                            </div>
                                        </div>`
                        tar.html(str_l);
                        $($('.lunbo')[idx]).doulunbo({
                            adc:arr,
                            width:685,
                            height:222,
                            autoshow:true,
                            time:3000,
                            qty:1,
                        })
                        var html_1='<h3>热门品牌 Hot</h3>';
                        for(let i=1; i<str.length;i++){
                            html_1+=`<h6 class="pinpaiName">${str[i]}</h6>`;
                        }
                        $($('.pinpai')[idx]).html(html_1);
                        idx++;
                    }
                })
            }
            getlist("api/data/list.json",$('.babyformula'));
            getlist("api/data/list.json",$('.babyfood'));
            getlist("api/data/list.json",$('.babysup'));
            getlist("api/data/list.json",$('.beauty'));
            getlist("api/data/list.json",$('.health'));
            getlist("api/data/list.json",$('.appliance'));


            var $tab=$('.tabHeader').find('div');
            $tab.on('mouseup',function(e){
                var id=$(e.target).index();
                $(e.target).addClass('tactive').siblings('div').removeClass('tactive');
                $($('.content').children()[id]).fadeIn().siblings('div').fadeOut();
            })
    })
});