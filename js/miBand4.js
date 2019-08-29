$(function () {


     $(".head-middle input").focus(function () {
         $(".head-middle .search").css("border-color", "#ff6700");
     })
     $(".head-middle input").blur(function () {
         $(".head-middle .search").css("border-color", "#ccc");
     })


    $(".head input").focus(function () {
        $(".text-placeholder").css("visibility", "hidden");
        $(".input-items").css("visibility", "visible");
        $(".search").css("border-color", "red");
    })
    $(".head input").blur(function () {
        $(".text-placeholder").css("visibility", "visible");
        $(".input-items").css("visibility", "hidden");
    })


    var title_goods = $(".title-goods").clone(true);
    title_goods.appendTo($(".copy"));
    for (var i = 0; i < 6; i++) {
        var selector_img = `.title>li:nth-child(${i+2}) img`;
        var selector_span = `.title>li:nth-child(${i+2}) span`;
        var selector_p = `.title>li:nth-child(${i+2}) p`
        var img = $(selector_img);
        var span = $(selector_span);
        var p = $(selector_p);
        for (var j = 0; j < 6; j++) {
            var index = (i + 1) * 6 + j + 1;
            var src;
            if (index < 10) {
                src = `../img/head/0${index}.jpg`;
            } else {
                src = `../img/head/${index}.jpg`;
            }
            img.eq(j).attr("src", src);
            span.eq(j).html(tags[i * 6 + j]);
            p.eq(j).html(prices[i * 6 + j]);
        }
    }


    var win_width = $(window).width();
    var win_height = $(window).height();
    var modal_video = $(".modal-dialog-video");
    var modal_video2 = $(".modal-dialog-video2");
    modal_video.css({
        "width": win_width,
        "height": win_height
    });

    modal_video2.css({
        "width": win_width,
        "height": win_height
    });

    $(".close-video").click(function () {
        $(".modal-dialog-video").slideUp();
        $(".modal-dislog-video2").slideUp();
    })

    $(".open-modal-video").click(function () {
        modal_video.slideDown();
    })

    $(".aVideo").click(function() {
        alert(1);
    })

    console.log($("#open-modal-video2"));

    $(window).scroll(function () {
        var height = $(".sec-8").offset().top;
        var height2 = $(".sec-10").offset().top;
        var height3 = $(".sec-13").offset().top;
        var height4 = $(".sec-16").offset().top;
        var img_height = $(".sec-8>img").height();
        var img2_height = $(".sec-10>img").height();
        var img3_height = $(".sec-13>img").height();
        var img4_height = $(".sec-16>img").height();
        // console.log(img_height);
        var scrollHeight = parseInt($(window).scrollTop()) + parseInt(img_height) / 2;
        var scrollHeight2 = parseInt($(window).scrollTop()) + parseInt(img2_height) / 2;
        var scrollHeight3 = parseInt($(window).scrollTop()) + parseInt(img3_height) / 2;
        var scrollHeight4 = parseInt($(window).scrollTop()) + parseInt(img4_height) / 2;
        // console.log(scrollHeight);
        if (scrollHeight >= height) {
            $(".sec-8>img").css("opacity", "0.6");
        } else {
            $(".sec-8>img").css("opacity", "1");
        }

        if (scrollHeight2 >= height2) {
            $(".sec-10>img").css("opacity", "0.6");
        } else {
            $(".sec-10>img").css("opacity", "1");
        }

        if (scrollHeight3 >= height3) {
            $(".sec-13>img").css("opacity", "0.6");
        } else {
            $(".sec-13>img").css("opacity", "1");
        }

        if (scrollHeight4 >= height4) {
            $(".sec-16>img").css("opacity", "0.6");
        } else {
            $(".sec-16>img").css("opacity", "1");
        }


        if ($(window).scrollTop() > 200) {
            $(".fixed-nav").slideDown();
        }else
            $(".fixed-nav").slideUp();
    })

    function vertical_center(elements) {
        for (var i = 0; i < elements.length; i++) {
            var a = elements.eq(i);
            var half_height = -1 * a.height() / 2 + "px";
            a.css({
                "margin-top": half_height,
                "top": "50%"
            });
            console.log(half_height);

        }
    }

    function level_center(elements) {
        for (var i = 0; i < elements.length; i++) {
            var a = elements.eq(i);
            var half_width = -1 * a.width() / 2 + "px";
            a.css({
                "margin-left": half_width,
                "left": "50%"
            });
            console.log(half_width);
        }
    }

    vertical_center($(".vertical-center"));
    level_center($(".level-center"));


    var sec_9_imgH = $(".sec-9 img").height() + "px";
    $(".sec-9 .main-content").css("height", sec_9_imgH);
    var sec_21_imgH = $(".sec-21 img").height() + "px";
    $(".sec-21 .main-content").css("height", sec_21_imgH);
    console.log(sec_21_imgH);
    // console.log(sec_9_imgH);
    // console.log($(".level-center"))


    var timer1;
    var count = 0;
    var count2 = 0;
    var sec9_li = $(".sec-9 .main-content>li");
    var sec9_oli = $(".sec-9 ol li");
    var sec21_li = $(".sec-21 .main-content>li");
    var sec21_oli = $(".sec-21  ol li");
    start();
    function start() {
        timer = setInterval(function() {
            count++;
            count2++;
            if(count == 5)
                count=0;
            if(count2 == 4)
                count2=0
            sec9_li.eq(count).addClass("showLi");
            sec9_li.eq(count).siblings().removeClass("showLi");
            sec9_oli.eq(count).addClass("bg-red");
            sec9_oli.eq(count).siblings().removeClass("bg-red");
            sec21_li.eq(count2).addClass("showLi");
            sec21_li.eq(count2).siblings().removeClass("showLi");
            sec21_oli.eq(count2).addClass("bg-red");
            sec21_oli.eq(count2).siblings().removeClass("bg-red");
            // console.log(count);
        }, 2000);
    }

    sec9_oli.click(function() {
        clearInterval(timer);
        count= $(this).index();
        sec9_li.eq(count).addClass("showLi");
        sec9_li.eq(count).siblings().removeClass("showLi");
        sec9_oli.eq(count).addClass("bg-red");
        sec9_oli.eq(count).siblings().removeClass("bg-red");
        start();
    })

    sec21_oli.click(function () {
        clearInterval(timer);
        count2 = $(this).index();
        sec21_li.eq(count2).addClass("showLi");
        sec21_li.eq(count2).siblings().removeClass("showLi");
        sec21_oli.eq(count2).addClass("bg-red");
        sec21_oli.eq(count2).siblings().removeClass("bg-red");
        start();
    })


    $(".sec_9right").click(function() {
        clearInterval(timer);
        count++;
        if (count == 5)
            count = 0;
        sec9_li.eq(count).addClass("showLi");
        sec9_li.eq(count).siblings().removeClass("showLi");
        sec9_oli.eq(count).addClass("bg-red");
        sec9_oli.eq(count).siblings().removeClass("bg-red");
        start();
    })


    $(".sec_21right").click(function () {
        clearInterval(timer);
        count2++;
        if (count2 == 3)
            count2 = 0;
        sec21_li.eq(count2).addClass("showLi");
        sec21_li.eq(count2).siblings().removeClass("showLi");
        sec21_oli.eq(count2).addClass("bg-red");
        sec21_oli.eq(count2).siblings().removeClass("bg-red");
        start();
    })



    $(".sec_9left").click(function () {
        clearInterval(timer);
        count--;
        if (count == -1)
            count = 4;
        sec9_li.eq(count).addClass("showLi");
        sec9_li.eq(count).siblings().removeClass("showLi");
        sec9_oli.eq(count).addClass("bg-red");
        sec9_oli.eq(count).siblings().removeClass("bg-red");
        start();
    })




})