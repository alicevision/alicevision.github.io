
var menuMobile = document.querySelector('#menuMobile div:nth-child(1)');
var menuMobileLink = document.querySelector('#menuMobile div:nth-child(2)');



menuMobile.addEventListener('click', function() {
  if(menuMobileLink.style.opacity == 0){
    menuMobileLink.classList.remove( 'displayNone' );
    menuMobileLink.classList.add( 'fading-in' );
    menuMobileLink.classList.remove( 'fading-out' );
    menuMobileLink.style.opacity = 1;
  }else{
    menuMobileLink.classList.add( 'displayNone' );
    menuMobileLink.classList.add( 'fading-out' );
    menuMobileLink.classList.remove( 'fading-in' );
    menuMobileLink.style.opacity = 0;
  }
        

});








$( document ).ready(function() {


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


var last_known_scroll_position = 0;
var ticking = false;

var menuFloat = document.getElementById('stepDivTop');
var hamburgerMenuFloat = document.getElementById('hamburgerMenu');
var hamburgerLink = document.querySelector('#hamburgerMenu div:nth-child(2)');

menuFloat.classList.add('displayNone');
hamburgerMenuFloat.classList.add('displayNone');

hamburgerLink.classList.add('displayNone');

hamburgerMenuFloat.addEventListener('click', function() {
  if(hamburgerLink.style.opacity == 0){
    hamburgerLink.classList.remove( 'displayNone' );
    hamburgerLink.classList.add( 'fading-in' );
    hamburgerLink.classList.remove( 'fading-out' );
    hamburgerLink.style.opacity = 1;
  }else{
    hamburgerLink.classList.add( 'displayNone' );
    hamburgerLink.classList.add( 'fading-out' );
    hamburgerLink.classList.remove( 'fading-in' );
    hamburgerLink.classList.add( 'displayNone' );
    hamburgerLink.style.opacity = 0;
  }
        

});





function menuFloatable(last_known_scroll_position) {
  // do something with the scroll position
  if(last_known_scroll_position > 230){ 
    menuFloat.classList.remove( 'displayNone' );
    menuFloat.classList.add( 'fading-in' );
    menuFloat.classList.remove( 'fading-out' );

   hamburgerMenuFloat.classList.remove( 'displayNone' );
    hamburgerMenuFloat.classList.add( 'fading-in' );
    hamburgerMenuFloat.classList.remove( 'fading-out' );
    
  }else{
        menuFloat.classList.add( 'displayNone' );
        menuFloat.classList.add( 'fading-out' );
        menuFloat.classList.remove( 'fading-in' );
        menuFloat.classList.add( 'displayNone' );

        hamburgerMenuFloat.classList.add( 'displayNone' );
        hamburgerMenuFloat.classList.add( 'fading-out' );
        hamburgerMenuFloat.classList.remove( 'fading-in' );
        hamburgerMenuFloat.classList.add( 'displayNone' );

        hamburgerLink.classList.add( 'displayNone' );
        hamburgerLink.classList.add( 'fading-out' );
        hamburgerLink.classList.remove( 'fading-in' );
        hamburgerLink.classList.add( 'displayNone' );


  }

}




    

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      menuFloatable(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
})




/*


$(".face4 button").click(function(){
    $(this).css("color","red");
});

$(".face2").click(function(){
    $(this).css("background-color","blue");
});
/*
$("#hamburgerMenu div:nth-child(1)").click(function(){
    $("#hamburgerMenu div:nth-child(1)").SlideToggle();
});
*/
/*
$("#hamburgerMenu div:nth-child(1)").click(function(){
    $("#hamburgerMenu div:nth-child(2) ul").SlideToggle();
    //slide down the link list below the h3 clicked - only if its closed
    
  })
*/
/*
$( "#hamburgerMenu div:nth-child(1)" ).click(function() {
  $( "#hamburgerMenu div:nth-child(2)" ).slideToggle( "slow" );
});


/*

$( "#c1a" ).mouseover(function() {
  $( "#c1b p" ).css("color","white");
});
$( "#c1a" ).mouseout(function() {
  $( "#c1b p" ).css("color","#044ebc");
});




*/





  });