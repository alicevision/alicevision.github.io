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

var viewObjectifVideo = 0;
$("#objectif button").click(function(){
   if( viewObjectifVideo == 0 ){
    /*
        $("#objectif div:nth-child(2)").animate({
            height : 400
          }, 1000 );
        viewObjectifVideo = 1;
        $("#objectif button").text('view less');
    */
        $("#viewPipeline").animate({
            height : 225
          }, 1000 );
        viewObjectifVideo = 1;
        $("#objectif button").text('view less');
   }else{
    /*
        $("#objectif div:nth-child(2)").animate({
            height : 0
          }, 1000 );
        viewObjectifVideo = 0;
        $("#objectif button").text('view more');
    */
        $("#viewPipeline").animate({
            height : 0
          }, 1000 );
        viewObjectifVideo = 0;
        $("#objectif button").text('view more');
   }
});




});
