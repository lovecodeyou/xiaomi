$(function () {



    $(".head input").focus(function () {
        $(".text-placeholder").css("visibility", "hidden");
        $(".input-items").css("visibility", "visible");
        $(".search").css("border-color", "red");
    })
    $(".head input").blur(function () {
        $(".text-placeholder").css("visibility", "visible");
        $(".input-items").css("visibility", "hidden");
        $(".search").css("border-color", "black");
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
    modal_video.css({
        "width": win_width,
        "height": win_height
    });

    $(".close-video").click(function () {
        $(".modal-dialog-video").slideUp();
    })

    $(".open-modal-video").click(function () {
        modal_video.slideDown();
    })

    $(window).scroll(function () {
        var height = $(".sec-8").offset().top;
        var img_height = $(".sec-8>img").height();
        console.log(img_height);
        var scrollHeight = parseInt($(window).scrollTop()) + parseInt(img_height)/2;
        console.log(scrollHeight);
        if (scrollHeight >= height) {
            $(".sec-8>img").css("opacity", "0.6");
        } else {
            $(".sec-8>img").css("opacity", "1");
        }
    })

    function vertical_center(elements) {
        for (var i = 0; i < elements.length; i++) {
            var a = elements.eq(i);
            var half_height = -1 * a.height() / 2 + "px";
            a.css({
                "margin-top": half_height,
                "top": "50%"
            });

        }
    }

    function level_center(elements) {
        for (var i = 0; i < elements.length; i++) {
            var a = elements.eq(i);
            var half_width = -1 * a.width() / 2 + "px";
            a.css({
                "margin-left": half_height,
                "left": "50%"
            });
        }
    }

    vertical_center($(".vertical_center"));
    level_center($(".level_center"));

})