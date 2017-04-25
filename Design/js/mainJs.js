





var hamburgerMenuFloat = document.getElementById('hamburgerMenu');
var hamburgerLink = document.querySelector('#hamburgerMenu div:nth-child(2)');
var menuTop = document.querySelector('#menu');

//hamburgerMenuFloat.classList.add('displayNone');
hamburgerLink.classList.add('displayNone');

hamburgerMenuFloat.addEventListener('click', function() {
  if(hamburgerLink.style.opacity == 0){
    hamburgerLink.classList.remove( 'displayNone' );
    hamburgerLink.style.opacity = '1';
    /*hamburgerLink.classList.remove( 'displayNone' );
    hamburgerLink.classList.add( 'fading-in' );
    hamburgerLink.classList.remove( 'fading-out' );
    hamburgerLink.style.opacity = 1;*/
  }else{

    hamburgerLink.style.opacity = '0';
   /* hamburgerLink.classList.add( 'fading-out' );
    hamburgerLink.classList.remove( 'fading-in' );
    hamburgerLink.classList.add( 'displayNone' );
    setTimeout(function(){
      hamburgerLink.classList.add( 'displayNone' );
      hamburgerLink.style.opacity = 0;
    }, 800);
   */
  } 

});

var last_known_scroll_position = 0;
var ticking = false;

function menuFloatable(last_known_scroll_position) {
  // do something with the scroll position
  if(last_known_scroll_position > 100){ 
    hamburgerMenuFloat.classList.add( 'fading-in' );
    hamburgerMenuFloat.classList.remove( 'fading-out' );
    hamburgerMenuFloat.style.opacity = '1';
    //menuTop.style.marginRight = '-1000px';

    
    


   // hamburgerMenuFloat.style.opacity = 1;
    /*hamburgerMenuFloat.classList.remove( 'displayNone' );
    hamburgerMenuFloat.classList.add( 'fading-in' );
    hamburgerMenuFloat.classList.remove( 'fading-out' );*/
    
  }else{
    hamburgerLink.classList.add( 'fading-out' );
    hamburgerLink.classList.remove( 'fading-in' );
    hamburgerMenuFloat.style.opacity = '0';
    /*setTimeout(function(){hamburgerMenuFloat.classList.add( 'displayNone' );}, 800);
    

    hamburgerLink.classList.add( 'displayNone' );
    hamburgerLink.classList.add( 'fading-out' );
    hamburgerLink.classList.remove( 'fading-in' );
    hamburgerLink.classList.add( 'displayNone' );*/
  }

  if(last_known_scroll_position > 100){ 

    document.getElementById('stepTop').style.opacity = '1';
    document.getElementById('stepTop').style.height = '60px';


    
  }else{
    document.getElementById('stepTop').style.opacity = '0';
    document.getElementById('stepTop').style.height = '0px';
  }

}

    



/*

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
  if(last_known_scroll_position > 130){ 
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

    */

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      menuFloatable(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});


/*
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



*/

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
