require(['config'],function(){
    require(['jquery','footer','zoom','lunbo','conmon'],function($,foo,zoo){
        $('footer').load('footer.html #link,#copyright',function(){
            foo();
        });
        
    })
});