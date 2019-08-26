$(function () {
    var navBtn = $(".nav-thumbnail");
    var right_box = navBtn.children().eq(1);
    var scrollTop;
    navBtn_initial();



    navBtn.click(function () {
        right_box.slideDown();
        return false;
    })

    $(document).click(function () {
        right_box.slideUp();
        return false;
    })

    $(".sm-aside-right>li:nth-child(3)").click(function () {
        $(".zhuanTriangle").toggleClass("under");
        $(".sm-li-special").toggle();
        console.log(3);
    })

    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        var width = $(window).height() + scrollTop;
        var right_box = navBtn.children().eq(1);
        right_box.css("height", width);
    })

    function navBtn_initial() {
        var width = $(window).height();
        var right_box = navBtn.children().eq(1);
        right_box.css("height", width);
    }


    //banner轮播图

    var window_width;
    var spot = $(".banner>ol>li");
    var timer
    var count = 0;

    window_width = $(window).width();
    console.log(window_width);
    $(".banner>ul>li").css("width", window_width);
    start();


    $(window).resize(function () {
        window_width = $(window).width();
        console.log(window_width);
        $(".banner>ul>li").css("width", window_width);
    })


    // $(".banner").hover(function(){
    //     stop();
    //     return false;
    // },function() { start(); return false;});

    $(".banner>ol>li").click(function () {
        stop();
        var index = $(this).index();
        lightSpot(index);
        count = index;
        console.log(count);
        translate_wid = count * window_width * -1 + "px";
        $(".banner>ul").stop();
        $(".banner>ul").animate({
            left: translate_wid
        }, 2000);
        setTimeout(function () {
            start();
        }, 2000);
        return false;
    })


    function stop() {
        clearInterval(timer);
    }

    function start() {
        timer = setInterval(function () {
            count++
            if (count == 3) {
                translate_wid = count * window_width * -1 + "px";
                lightSpot(0);
                $(".banner>ul").animate({
                    left: translate_wid
                }, 2000);
                setTimeout(function () {
                    $(".banner>ul").css("left", "0px");
                    count = 0;
                    console.log(2);
                }, 2050);
                console.log(count);
                return;
            }
            lightSpot(count);
            translate_wid = count * window_width * -1 + "px";
            $(".banner>ul").animate({
                left: translate_wid
            }, 2000);
            console.log(count);
        }, 4000)
    }


    function lightSpot(count) {
        spot.eq(count).css("background", "rgba(255,255,255,1");
        spot.eq(count).siblings().css("background", "rgba(255,255,255,0.4)");
    }


    $(".fixed-img").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    })

    $(window).scroll(function () {
        var top = $(window).scrollTop();
        var win_width = $(window).width();
        if (win_width <= 768) {
            $(".fixed-img").fadeOut();
            return;
        }
        if (top < 1000) {
            $(".fixed-img").fadeOut();
        } else {
            $(".fixed-img").fadeIn();
        }

    })



})