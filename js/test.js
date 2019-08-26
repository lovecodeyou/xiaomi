$(function() {
    var a = $(".display-title>span>a");
    var parent_a;
    a.mouseover(function() {
        // console.log(1);
        var number = $(this).index();
        $(this).siblings().css("border-bottom", "none");
         $(this).css("border-bottom", "2px solid #ff6700")
        parent_a = $(this).parent().parent().parent();
        if(number == 0) {
            parent_a.children(".one").css("display","block");
            parent_a.children(".two").css("display", "none");

        }else {
            parent_a.children(".one").css("display", "none");
            parent_a.children(".two").css("display", "block");
        }  
    })



    $("#assist-returnTop").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    })


    $(window).scroll(function(e) {
        var a = $(window).scrollTop();
        if(a >= 800) {
            $("#assist-returnTop").css("opacity", "1");
        }else {
            $("#assist-returnTop").css("opacity", "0");
        }
        console.log(a);
    })
})