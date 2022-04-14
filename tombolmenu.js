var TombolMenu = $(".tombol-menu");
var wrapper = $("nav .wrapper ul");
function klikMenu(){
    TombolMenu.click(function(){
        wrapper.toggle();
    });
    wrapper.click(function(){
        wrapper.toggle();
    });
}
$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
}) 

$(window).resize(function (){
    var width = $(window).width();
    if (width > 989) {
        wrapper.css("display", "block");
    }  else {
        wrapper.css("display", "none");
    }
    klikMenu();
});