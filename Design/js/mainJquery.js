$( document ).ready(function() {

/*
$("#buttonProject1").mouseover(function(){
    $(this).css("background","#1569E8");
    $("#buttonProject1 a").css("color","white");
});
$("#buttonProject1").mouseout(function(){
    $(this).css("background","white");
    $("#buttonProject1 a").css("color","#1569E8");
});

$("#buttonProject2").mouseover(function(){
    $(this).css("background","white");
    $("#buttonProject2 a").css("color","#1569E8");
});
$("#buttonProject2").mouseout(function(){
    $(this).css("background","#1569E8");
    $("#buttonProject2 a").css("color","white");
});

$("#buttonProject3").mouseover(function(){
    $(this).css("background","#1569E8");
    $("#buttonProject3 a").css("color","white");
});
$("#buttonProject3").mouseout(function(){
    $(this).css("background","white");
    $("#buttonProject3 a").css("color","#1569E8");
});
*/

$("#softContent div, #libContent div ").mouseover(function(){
    $(this + 'img').attr("src","Design/img/seemoreWhite.png");
});
$(".btnForCube").mouseover(function(){
    $(this).attr("src","Design/img/seemoreBlue.png");
});
$(".btnForCube").mouseout(function(){
    $(this).attr("src","Design/img/seemore.png");
});

  });
