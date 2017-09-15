
$(function(){
    if($('#header')){
        $('#header').load('/views/common/header.html')
    }
    leftMenu();

    reSize();
    $(window).resize(function () {
        reSize();
    })
    loading();

})

function leftMenu(){
    $('.left').find('li:has(div)').children('span').click(function () {
        var $next = $(this).next('div');
        if ($next.is(':hidden')) {
            $(this).addClass('selected');
            $next.stop().slideDown();
            $next.children('a').eq(0).trigger('click');
            if ($(this).parent('li').siblings().children('div').is(':visible')) {
                $(this).parent('li').siblings().children('span').removeClass('selected');
                $(this).parent('li').siblings().children('div').stop().slideUp();
            }
        } else {
            $(this).removeClass('selected');
            $next.stop().slideUp();
        }
    });
}
function reSize() {
    $('.left').height($(window).height() - 105 + 'px');
    $('.right,#iframbox').height($(window).height() - 110 + 'px');
}
function loading() {

    var silderBox = document.getElementById("sliderbox");//dom对象
    var adoms = silderBox.getElementsByTagName("a");//这是一个集合对象HTMLCollection对象
    var len = adoms.length;
    while (len--) {
        adoms[len].onclick = function () {
            localStorage.removeItem('title')
            var src = this.getAttribute("data-href");
            localStorage.setItem('title',src);
            $(this).addClass('selected').siblings().removeClass('selected');
            if (src != null) {
                document.getElementById("iframbox").src = src;
            }
        }
    };
};


