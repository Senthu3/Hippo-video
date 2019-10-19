/*import * as JQuery from "jquery";
const $ = JQuery.default;*/

$(function() {
    $(".toggle").on("click", function() {
        if($(".item").css('display') == 'none'){
            $("#menu").addClass("mobile-menu");
            $('.item').show(); 
            $(this).find("a").html("<i class='fa fa-times'></i>");
        }else{
            $("#menu").removeClass("mobile-menu");
            $('.item').hide();
            $(this).find("a").html("<i class='fa fa-bars'></i>");
        }
    });
});