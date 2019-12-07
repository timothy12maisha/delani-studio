$(document).ready(function(){
    $("#text").hide();
    $(".imgtoggle ,.imgtoggle1").click(function(){
        $("#text").toggle();
        $("imgtoggle").toggle();
    });
});