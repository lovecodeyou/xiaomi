$(function () {



    var slide_button = $(".click-box>span");
    var slide_bg_box = $(".slide-show ");
    var slide_bg = $(".slide-show ul>li");
    var wd_slide_bg = slide_bg.eq(0).width();
    var slide_id = 1;
    var length_slide_bg_move = -(wd_slide_bg * slide_id) + "px";


    slide_bg.css("left", length_slide_bg_move);

    slide_button.click(function () {
        $(this).addClass("bg-white");
        $(this).siblings().removeClass("bg-white");
        slide_id = $(this).index() + 1;
        length_slide_bg_move = -(wd_slide_bg * slide_id) + "px";
        slide_bg.css("left", length_slide_bg_move);
    });


    var down_x;
    var down_move_x;
    var current_left;
    var move_increment;

    slide_bg_box.mousedown(function (e1) {
        current_left = slide_bg.css("left");
        // console.log(current_left);
        current_left = parseInt(current_left.slice(0, current_left.indexOf("p")));
        down_x = e1.pageX;

        var startTime = new Date();

        $(this).mousemove(function (e2) {
            slide_bg.css("transition", "none");
            down_move_x = e2.pageX;
            move_increment = down_move_x - down_x;
            console.log("宽度：" + wd_slide_bg * 0.3 + "  坐标点：" + down_move_x + " : " + down_x + "  差值：" + move_increment);
            slide_bg.css("left", current_left + move_increment + "px");
            // console.log(move_increment);
            // console.log(down_move_x + " : " + down_x);
            // console.log(current_left + move_increment + "px");
        })


        $(this).one("mouseup", function () {
            slide_bg.css("transition", "left 1s");
            // console.log(-(wd_slide_bg * 0.5));
            // console.log(Math.abs(move_increment));
            if (Math.abs(move_increment) < (wd_slide_bg * 0.3)) {

                length_slide_bg_move = -(wd_slide_bg * slide_id) + "px";
                slide_bg.css("left", length_slide_bg_move);
                console.log("意外");
                // console.log(slide_id);
            }

            $(this).off("mousemove");

            var endTime = new Date();
            time_increment = endTime - startTime;
            if (time_increment <= 500 && move_increment < -100) {
                slide_id++;
                slide_button.eq((slide_id + 1) % 2).addClass("bg-white");
                slide_button.eq((slide_id + 1) % 2).siblings().removeClass("bg-white");
                console.log(slide_id);
                length_slide_bg_move = -(wd_slide_bg * slide_id) + "px";
                slide_bg.css("left", length_slide_bg_move);

                if (slide_id == 3) {
                    slide_id = 1;
                    setTimeout(function () {
                        slide_bg.css("transition", "none");
                        length_slide_bg_move = -(wd_slide_bg * slide_id) + "px";
                        slide_bg.css("left", length_slide_bg_move);
                    }, 1000)
                    setTimeout(function () {
                        slide_bg.css("transition", "left 1s");
                    }, 1500)
                }
            } else if (move_increment <= -(wd_slide_bg * 0.3)) {
                slide_id++;
                slide_button.eq((slide_id + 1) % 2).addClass("bg-white");
                slide_button.eq((slide_id + 1) % 2).siblings().removeClass("bg-white");
                console.log(slide_id);
                length_slide_bg_move = -(wd_slide_bg * slide_id) + "px";
                slide_bg.css("left", length_slide_bg_move);

                if (slide_id == 3) {
                    slide_id = 1;
                    setTimeout(function () {
                        slide_bg.css("transition", "none");
                        length_slide_bg_move = -(wd_slide_bg * slide_id) + "px";
                        slide_bg.css("left", length_slide_bg_move);
                    }, 1000)
                    setTimeout(function () {
                        slide_bg.css("transition", "left 1s");
                    }, 1500)
                }
            }

            if (time_increment <= 500 && move_increment > 100) {
                slide_id--;
                slide_button.eq((slide_id + 1) % 2).addClass("bg-white");
                slide_button.eq((slide_id + 1) % 2).siblings().removeClass("bg-white");
                length_slide_bg_move = -(wd_slide_bg * slide_id) + "px";
                slide_bg.css("left", length_slide_bg_move);
                if (slide_id == 0) {
                    slide_id = 2;
                    setTimeout(function () {
                        slide_bg.css("transition", "none");
                        length_slide_bg_move = -(wd_slide_bg * slide_id) + "px";
                        slide_bg.css("left", length_slide_bg_move);
                    }, 1000)
                    setTimeout(function () {
                        slide_bg.css("transition", "left 1s");
                    }, 1500)
                }
            } else if (move_increment >= (wd_slide_bg * 0.3)) {
                slide_id--;
                slide_button.eq((slide_id + 1) % 2).addClass("bg-white");
                slide_button.eq((slide_id + 1) % 2).siblings().removeClass("bg-white");
                length_slide_bg_move = -(wd_slide_bg * slide_id) + "px";
                slide_bg.css("left", length_slide_bg_move);
                if (slide_id == 0) {
                    slide_id = 2;
                    setTimeout(function () {
                        slide_bg.css("transition", "none");
                        length_slide_bg_move = -(wd_slide_bg * slide_id) + "px";
                        slide_bg.css("left", length_slide_bg_move);
                    }, 1000)
                    setTimeout(function () {
                        slide_bg.css("transition", "left 1s");
                    }, 1500)
                }
            }

        })


        //  搞不懂这个事件为什么会触发两次
        // $(this).mouseup(function() {
        //     slide_bg.css("transition", "left 1s");
        //     // console.log(-(wd_slide_bg * 0.5));
        //     // console.log(Math.abs(move_increment));
        //     if (Math.abs(move_increment) < (wd_slide_bg * 0.3)) {

        //         length_slide_bg_move = -(wd_slide_bg * slide_id) + "px";
        //         slide_bg.css("left", length_slide_bg_move);
        //         console.log("意外");
        //         // console.log(slide_id);
        //     }

        //     if (move_increment <= -(wd_slide_bg * 0.3)) {
        //         slide_id++;
        //         console.log(slide_id);
        //         length_slide_bg_move = -(wd_slide_bg * slide_id) + "px";
        //         slide_bg.css("left", length_slide_bg_move);

        //         if(slide_id == 3) {
        //             slide_id = 1;
        //             setTimeout(function() {
        //                 slide_bg.css("transition", "none");
        //                 length_slide_bg_move = -(wd_slide_bg * slide_id) + "px";
        //                 slide_bg.css("left", length_slide_bg_move);
        //             }, 1000)
        //              setTimeout(function () {
        //                  slide_bg.css("transition", "left 1s");
        //              }, 1500)
        //         }
        //     }
        //     if (move_increment >= (wd_slide_bg * 0.3)) {
        //         slide_id--;
        //         length_slide_bg_move = -(wd_slide_bg * slide_id) + "px";
        //         slide_bg.css("left", length_slide_bg_move);
        //     }

        //     // $(this).off();
        //     $(this).off("mousemove");

        // })
    })
    $(".sec-two>div>ul>li").addClass("upward-move");

    $(".upward-move").mouseover(function () {
        $(this).animate({
            top: "-10px"
        }, 500);
        console.log(1);
    })

    $(".upward-move").mouseout(function () {
        $(this).animate({
            top: "0px"
        }, 500);
    })

    var num_secTwo_ul = $(".sec-two>div>ul").length / 2;
    var wid_secTwo_ul = $(".sec-two>div>ul").outerWidth();
    var sumWid_secTwo_ul = num_secTwo_ul * wid_secTwo_ul;
    // console.log(sumWid_secTwo_ul);
   

    setInterval(function() {
         $(".sec-two>div>ul").animate({
             left: "-" + sumWid_secTwo_ul + "px"
         }, 30000, "linear");
         $(".sec-two>div>ul").animate({
             left: "0"
         }, 30000, "linear");
    }, 0);

    // console.log($(".sec-two>div>ul").length);
    // console.log($(".sec-two>div>ul").outerWidth());

    
    // $(".modal-box").css("height", $(window).height() + "px");
    // var a = $(".modal-box").css("height");

    $(".sec-video img").click(function() {
        $(".modal-box").css("display", "block");
        // $(".modal-box").css("height", $(window).height() + "px");
        $(".modal-box video")[0].play();

    })

   $(".btn-close").click(function() {
       $(".modal-box").css("display", "none");
       $(".modal-box video")[0].pause();
       $(".modal-box video")[0].currentTime = 0;
   })

})