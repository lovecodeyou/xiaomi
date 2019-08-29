$(function () {


    $(".head-middle input").focus(function () {
        $(".head-middle .search").css("border-color", "#ff6700");
    })
    $(".head-middle input").blur(function () {
        $(".head-middle .search").css("border-color", "#ccc");
    })


    var modal = $(".modal-dialog>.inner-box")


    ele_top(modal);
    $(window).resize(function () {

        ele_top(modal);

    })

    function ele_top(ele) {
        var win_height;
        var modal_height;
        var modal_top;
        win_height = $(window).height();
        modal_height = ele.height();
        modal_top = (win_height - modal_height) / 2;
        ele.css("top", modal_top + "px");
    }


    $(".open-modal").click(function(){
        console.log(1);
        $(".modal-dialog").slideDown();
        
    } );


    $(".modal-dialog .btn-box").click(function() {
        $(".modal-dialog").slideUp();
    })

    var copyFixed = $(".head").clone(true);
    copyFixed.css({ "position": "fixed", "left": "0", "top": "0", "box-shadow": "0 0 20px black","display":"none"});
    $("body").append(copyFixed);
    $(window).scroll(function() {
        var st = scrollTop = $(window).scrollTop();
        if(st > 600) {
            // $(".head").css({"position":"fixed", "left":"0", "top":"0", "box-shadow":"0 0 20px black"});
            copyFixed.slideDown();
        }else {
            // $(".head").css("position","static");
            //   $(".head").css("box-shadow", "none");
            copyFixed.slideUp();
        }
    })



})