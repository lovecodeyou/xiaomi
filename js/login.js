$(function() {

    $(".one").show();
    $(".two").hide();
    $(".three").hide();

    $(".lb-top li").click(function() {
        var index = $(this).index();
        switch(index) {
            case 0: {
                console.log(0);
                $(".one").show();
                $(".two").hide();
                $(".three").hide();
                $(this).addClass("mi-red");
                $(this).siblings().removeClass("mi-red");
                break;
            }

            case 1: {
                console.log(1)
                $(".one").hide();
                $(".two").hide();
                $(".three").show();
                $(this).addClass("mi-red");
                $(this).siblings().removeClass("mi-red");
                break;
            }
        }
    })


    console.log($(".left-bottom-txt").eq(0).attr("class"));

    $(".left-bottom-txt").click(function() {
        var str = $(this).attr("class");
        if(str.search("one") != -1) {
             $(".one").hide();
             $(".two").show();
             $(".three").hide();
        }
         if (str.search("two") != -1) {
             $(".one").show();
             $(".two").hide();
             $(".three").hide();
         }
    })


})