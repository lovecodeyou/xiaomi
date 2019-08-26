$(function() {

    var details_numbers = {{4,5}}

    var lis = $(".left>ul>li");
    for(var i = 0; i < lis.length; i++) {
        var appendLi;
        for()




        lis[i].children[2].append(appendLi);
    }


    function createDiv(src, inner) {
        var img = `<img src=${src}>`
        var a = `<a>${inner}</a>`
        var div = `<div></div>`
        return $(div).append(img+a);
    }



})