$(function () {
    var a = $(".display-title>span>a");
    var parent_a;
    a.mouseover(function () {
        // console.log(1);
        var number = $(this).index();
        $(this).siblings().css("border-bottom", "none");
        $(this).css("border-bottom", "2px solid #ff6700")
        parent_a = $(this).parent().parent().parent();
        if (number == 0) {
            parent_a.children(".one").css("display", "block");
            parent_a.children(".two").css("display", "none");

        } else {
            parent_a.children(".one").css("display", "none");
            parent_a.children(".two").css("display", "block");
        }
    })

    $("#assist-returnTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    })


     $(window).scroll(function (e) {
         var a = $(window).scrollTop();
         if (a >= 1600) {
             $("#assist-returnTop").css("opacity", "1");
         } else {
             $("#assist-returnTop").css("opacity", "0");
         }
     })

      $("#assist-returnTop").css("opacity", "0");







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
                   src = `./img/head/0${index}.jpg`;
               } else {
                   src = `./img/head/${index}.jpg`;
               }
               img.eq(j).attr("src", src);
               span.eq(j).html(tags[i * 6 + j]);
               p.eq(j).html(prices[i * 6 + j]);
           }
       }



       // 轮播图
       var time;
       count = 1;
       start();
       spotBright(count);

       function start() {
           time = setInterval(function () {
               count++;
               if (count == 6) {
                   count = 1;
               }
               spotBright(count);
               $(".slides-item").css("background-image", `url(./img/slideshow/0${count}.webp)`);
           }, 3000);
       }

       $(".slides-item>a").hover(function () {
           clearInterval(time);
       }, function () {
           start();
       });

       $(".spots li").click(function () {
           clearInterval(time);
           var a = $(this).index()
           count = a + 1;
           spotBright(count);
           $(".slides-item").css("background-image", `url(./img/slideshow/0${count}.webp)`);

           start();
       })

       $(".arrow-left").click(function () {
           clearInterval(time);
           count--;
           if (count == -1)
               count = 5;
           spotBright(count);
           $(".slides-item").css("background-image", `url(./img/slideshow/0${count}.webp)`);
           start();
       })

       $(".arrow-right").click(function () {
           clearInterval(time);
           count++;
           if (count == 6)
               count = 1;
           spotBright(count);
           $(".slides-item").css("background-image", `url(./img/slideshow/0${count}.webp)`);
           start();
       })


       function spotBright(count) {
           $(".spots li").eq(count - 1).addClass("whiteSpot");
           $(".spots li").eq(count - 1).siblings().removeClass("whiteSpot");
       }
})