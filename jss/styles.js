$(document).ready(function(){
    $("#design").hide();
    $("#development").hide();
    $("#productmanagement").hide();
    $("#image1, #design").click(function(){
        $("#design").toggle();
        $("#image1").toggle();
    });
    $("#image2, #development").click(function(){
        $("#development").toggle();
        $("#image2").toggle();
    });
    $("#image3,#productmanagement ").click(function(){
        $("#productmanagement").toggle();
        $("#image3").toggle();
    });
});