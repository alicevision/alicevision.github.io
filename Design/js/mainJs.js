/*window.onload = function() {
/*carte1*/
 /* var btn = document.querySelector( '.card' );

  var  btnSeeMore = btn.querySelector( '.seeMore' );


  var btnFront = btn.querySelector( '.card-front' ),
    btnYes = btn.querySelector( '.card-back .yes' ),
    btnNo = btn.querySelector( '.card-back .no' );

  btnFront.addEventListener( 'click', function( event ) {
    var mx = event.clientX - btn.offsetLeft,
      my = event.clientY - btn.offsetTop;

    var w = btn.offsetWidth,
      h = btn.offsetHeight;

    var directions = [
      { id: 'top', x: w/2, y: 0 },
      { id: 'right', x: w, y: h/2 },
      { id: 'bottom', x: w/2, y: h },
      { id: 'left', x: 0, y: h/2 }
    ];

    directions.sort( function( a, b ) {
      return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
    } );

    btn.setAttribute( 'data-direction', directions.shift().id );
    btn.classList.add( 'is-open' );
  } );


  btnSeeMore.addEventListener( 'click', function( event ) {
    var mx = event.clientX - btn.offsetLeft,
      my = event.clientY - btn.offsetTop;

    var w = btn.offsetWidth,
      h = btn.offsetHeight;

    var directions = [
      { id: 'top', x: w/2, y: 0 },
      { id: 'right', x: w, y: h/2 },
      { id: 'bottom', x: w/2, y: h },
      { id: 'left', x: 0, y: h/2 }
    ];

    directions.sort( function( a, b ) {
      return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
    } );

    btn.setAttribute( 'data-direction', directions.shift().id );
    btn.classList.add( 'is-open' );
  } );



  btnYes.addEventListener( 'click', function( event ) {
    btn.classList.remove( 'is-open' );
  } );

  btnNo.addEventListener( 'click', function( event ) {
    btn.classList.remove( 'is-open' );
  } );

*/

/* carte 1 

  var btn1 = document.querySelector( ' .card' );

  var  btnSeeMore1 = btn1.querySelector( ' .seeMore' );


  var btnFront1 = btn1.querySelector( ' .card-front' ),
    btnYes1 = btn1.querySelector( '.card-back .yes' );

  btnFront1.addEventListener( 'click', function( event ) {
    var mx = event.clientX - btn1.offsetLeft,
      my = event.clientY - btn1.offsetTop;

    var w = btn1.offsetWidth,
      h = btn1.offsetHeight;

    var directions = [
      { id: 'top', x: w/2, y: 0 },
      { id: 'right', x: w, y: h/2 },
      { id: 'bottom', x: w/2, y: h },
      { id: 'left', x: 0, y: h/2 }
    ];

    directions.sort( function( a, b ) {
      return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
    } );

    btn1.setAttribute( 'data-direction', directions.shift().id );
    btn1.classList.add( 'is-open' );
  } );


  btnSeeMore1.addEventListener( 'click', function( event ) {
    var mx = event.clientX - btn1.offsetLeft,
      my = event.clientY - btn1.offsetTop;

    var w = btn1.offsetWidth,
      h = btn1.offsetHeight;

    var directions = [
      { id: 'top', x: w/2, y: 0 },
      { id: 'right', x: w, y: h/2 },
      { id: 'bottom', x: w/2, y: h },
      { id: 'left', x: 0, y: h/2 }
    ];

    directions.sort( function( a, b ) {
      return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
    } );

    btn1.setAttribute( 'data-direction', directions.shift().id );
    btn1.classList.add( 'is-open' );
  } );



  btnYes1.addEventListener( 'click', function( event ) {
    btn1.classList.remove( 'is-open' );
  } );

  btnNo1.addEventListener( 'click', function( event ) {
    btn1.classList.remove( 'is-open' );
  } );

/* carte 2 

  var btn2 = document.querySelector( '.card2' );

  var  btnSeeMore2 = btn2.querySelector( ' .seeMore2' );


  var btnFront2 = btn2.querySelector( ' .card-front2' ),
    btnYes2 = btn2.querySelector( '.card-back2 .yes2' );

  btnFront2.addEventListener( 'click', function( event ) {
    var mx = event.clientX - btn2.offsetLeft,
      my = event.clientY - btn2.offsetTop;

    var w = btn2.offsetWidth,
      h = btn2.offsetHeight;

    var directions = [
      { id: 'top', x: w/2, y: 0 },
      { id: 'right', x: w, y: h/2 },
      { id: 'bottom', x: w/2, y: h },
      { id: 'left', x: 0, y: h/2 }
    ];

    directions.sort( function( a, b ) {
      return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
    } );

    btn2.setAttribute( 'data-direction', directions.shift().id );
    btn2.classList.add( 'is-open' );
  } );


  btnSeeMore2.addEventListener( 'click', function( event ) {
    var mx = event.clientX - btn2.offsetLeft,
      my = event.clientY - btn2.offsetTop;

    var w = btn2.offsetWidth,
      h = btn2.offsetHeight;

    var directions = [
      { id: 'top', x: w/2, y: 0 },
      { id: 'right', x: w, y: h/2 },
      { id: 'bottom', x: w/2, y: h },
      { id: 'left', x: 0, y: h/2 }
    ];

    directions.sort( function( a, b ) {
      return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
    } );

    btn2.setAttribute( 'data-direction', directions.shift().id );
    btn2.classList.add( 'is-open' );
  } );



  btnYes2.addEventListener( 'click', function( event ) {
    btn2.classList.remove( 'is-open' );
  } );

  btnNo2.addEventListener( 'click', function( event ) {
    btn2.classList.remove( 'is-open' );
  } );




  function distance( x1, y1, x2, y2 ) {
    var dx = x1-x2;
    var dy = y1-y2;
    return Math.sqrt( dx*dx + dy*dy );
  }




};








// shim layer with setTimeout fallback
// always got hugz for Paul Irish
window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

var goButton = document.getElementById("btn1");
var container = document.getElementById("container");
var animating = false;

goButton.addEventListener('click', function(){
  if(animating)
    return;

  container.classList.add('active');
  animating = true;

  setTimeout(function(){
      requestAnimFrame(function(){
          animating = false;
          container.classList.remove('active');
          container.classList.toggle('reverse');
      });
  }, 680);

});
*/
/*
$( document ).ready(function() {


 window.scrollTo(0,0);
/*

$("#btn1").click(function (){
       $("#carte").css("animation","front 3s ease");
});

/*
$("#btn1").(function(){
    $("#carte").css("animation","front 3s");
});


 /*
$("#btn1").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#partie1").offset().top + 670 +'px'
                    }, 2000);
                //});
            });
 $("#btn2").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#partie3").offset().top + 200 + 'px'
                    }, 2000);
                //});
            });
            
 $("#btn3").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#partie4").offset().top + 100 + 'px'
                    }, 2000);
                //});
            });
 
 

function parallax(){ 
    var prlx_lyr_1 = document.getElementById('partie2');
    prlx_lyr_1.style.top = 900 -(window.pageYOffset / 3)+'px'; 
    
    //Parallax pour la partie Compétences
    
    if (scrollY < 650) {
        document.getElementById('case1').style.left = -225 + (window.pageYOffset /3)+'px';
        document.getElementById('case6').style.left = -115 + (window.pageYOffset /3)+'px';
        document.getElementById('case10').style.left = -5 + (window.pageYOffset /3)+'px';
        
        document.getElementById('case2').style.left = -325 + (window.pageYOffset /2)+'px';
        document.getElementById('case7').style.left = -215 + (window.pageYOffset /2)+'px';
        
        document.getElementById('case3').style.left = -555 -85 + (window.pageYOffset /1)+'px';
        document.getElementById('case8').style.left = -445 -80 + (window.pageYOffset /1)+'px';
        document.getElementById('case11').style.left = -335 -80  + (window.pageYOffset /1)+'px';
        document.getElementById('case14').style.left = -225 -80  + (window.pageYOffset /1)+'px';
        document.getElementById('case17').style.left = -115 -80  + (window.pageYOffset /1)+'px';
        
        document.getElementById('case4').style.left = -225  + (window.pageYOffset /3)+'px';
        document.getElementById('case9').style.left = 105 +115  + (window.pageYOffset /3)+'px';
        document.getElementById('case12').style.left = -5  +115  + (window.pageYOffset /3)+'px';
        document.getElementById('case15').style.left = -115 +115  + (window.pageYOffset /3)+'px';
        
        document.getElementById('case13').style.left = -195  + (window.pageYOffset /1)+'px';
        document.getElementById('case18').style.left = -415  + (window.pageYOffset /1)+'px';
        
        
        
     } else if (scrollY > 650 || scrollY === 650) {
        document.getElementById('case1').style.left = 0 +'px';
        document.getElementById('case6').style.left = 110 +'px';
        document.getElementById('case10').style.left = 220 +'px';
        
        document.getElementById('case2').style.left = 0 +'px';
        document.getElementById('case7').style.left = 110 +'px';
        
        document.getElementById('case3').style.left = 0 +'px';
        document.getElementById('case8').style.left = 110 +'px';
        document.getElementById('case11').style.left = 220 +'px';
        document.getElementById('case14').style.left = 330 +'px';
        document.getElementById('case17').style.left = 440 +'px';
        
        document.getElementById('case4').style.left = 0 +'px';
        document.getElementById('case9').style.left = 440 +'px';
        document.getElementById('case12').style.left = 330 +'px';
        document.getElementById('case15').style.left = 220 +'px';
        
        document.getElementById('case13').style.left = 440 +'px';
        document.getElementById('case18').style.left = 220 +'px';
      }
     
     //Parallax pour la partie Projets
     
     if (scrollY < 1280) {
        document.getElementById('octo8').style.left = -1366 +(window.pageYOffset * 1.5)+'px';
        document.getElementById('octo3').style.left = 2890 -(window.pageYOffset * 1.5)+'px';
     } else if (scrollY > 1345 || scrollY === 1340) {
         document.getElementById('octo8').style.left = 547.5 +'px';
         document.getElementById('octo3').style.left = 980.5 +'px';
      }
      if (scrollY < 1280) {
        document.getElementById('octo7').style.left = -1366 +(window.pageYOffset * 1.5)+'px';
        document.getElementById('octo7').style.top = 1630 -(window.pageYOffset / 1)+'px';
        
         document.getElementById('octo4').style.left = 2890 -(window.pageYOffset * 1.5)+'px';
        document.getElementById('octo4').style.top = 1630 -(window.pageYOffset / 1)+'px';
        
        
     } else if (scrollY > 1345 || scrollY === 1345) {
         document.getElementById('octo4').style.left = 980.5 +'px';
         document.getElementById('octo4').style.top = 357.5 +'px';
         
         document.getElementById('octo7').style.left = 547.5 +'px';
         document.getElementById('octo7').style.top = 357.5 +'px'; 
          
      }
      
      if (scrollY < 1280) {
        document.getElementById('octo1').style.top = -1867 +(window.pageYOffset * 1.5)+'px';
     } else if (scrollY > 1340 || scrollY === 1340) {
         document.getElementById('octo1').style.top = 48.5 +'px';
      }
      if (scrollY < 1280) {
        document.getElementById('octo2').style.top = -1867 +(window.pageYOffset * 1.5)+'px';
     } else if (scrollY > 1345 || scrollY === 1345) {
         document.getElementById('octo2').style.top = 48.5 +'px';
      }
     
     //apparition octogones
      if (scrollY < 1280) {
        document.getElementById('octo5').style.top = 2400 -(window.pageYOffset * 1.5)+'px';
        document.getElementById('octo6').style.top = 2400 -(window.pageYOffset * 1.5)+'px';
        
     } else if (scrollY > 1345 || scrollY === 1345) {
         document.getElementById('octo5').style.top = 483 +'px';
         document.getElementById('octo6').style.top = 483 +'px';
         
      }
     if (scrollY < 1000 ) {
          $('.octogone').css("display", "block");
     }
     
    if (scrollY > 1300 && scrollY < 2000) {
         
        $('#mesProjets').fadeIn(1500);
        $('#Projet-text').fadeIn(2000);
        
        $('#petitCarres').fadeIn(800);
         $('#triangles').fadeIn(800);
         $('#centreMosaic').fadeIn(1000);
        
   
        $('#petitC1').fadeIn(800);
        $('#petitC2').fadeIn(800);
        $('#petitC3').fadeIn(800);
        $('#petitC4').fadeIn(800);
        
        $('#triangle1').fadeIn(800);
        $('#triangle2').fadeIn(800);
        $('#triangle3').fadeIn(800);
        $('#triangle4').fadeIn(800);
        
        $('#center').fadeIn(1000);
     }else{
         $('#mesProjets').fadeOut(500);
         $('#Projet-text').fadeOut(500);
         
         $('#petitCarres').fadeOut(500);
        
         $('#triangles').fadeOut(500);
         $('#centreMosaic').fadeOut(500);

     }
     
     //disparition octogones
    if (scrollY > 2000) {
        document.getElementById('octo8').style.left = 547.5 + 2000 -(window.pageYOffset * 1)+'px';
        document.getElementById('octo3').style.left = 980.5 - 2000 +(window.pageYOffset * 1)+'px';
     } else if (scrollY > 2300 || scrollY === 2300) {
         document.getElementById('octo8').style.left = - 547.5 +'px';
         document.getElementById('octo3').style.left = 1980.5 +'px';
      }
    
    if (scrollY > 2000) {
        document.getElementById('octo7').style.left = 547.5 + 2000 -(window.pageYOffset * 1)+'px';
        document.getElementById('octo7').style.top = 357.5 - 2000 +(window.pageYOffset / 1)+'px';
        
         document.getElementById('octo4').style.left = 980.5 - 2000 +(window.pageYOffset * 1)+'px';
        document.getElementById('octo4').style.top = 357.5 - 2000 +(window.pageYOffset / 1)+'px';
        
        
     } else if (scrollY > 2300 || scrollY === 2300) {
         document.getElementById('octo4').style.left = 1980.5 +'px';
         document.getElementById('octo4').style.top = -357.5 +'px';
         
         document.getElementById('octo7').style.left = -547.5 +'px';
         document.getElementById('octo7').style.top = -357.5 +'px'; 
          
      }
      if (scrollY > 2000) {
        document.getElementById('octo1').style.top = 48.5 + 2000 -(window.pageYOffset )+'px';
     } else if (scrollY > 2300 || scrollY === 2300) {
         document.getElementById('octo1').style.top = -248.5 +'px';
      }
      if (scrollY > 2000) {
        document.getElementById('octo2').style.top = 48.5 + 2000 -(window.pageYOffset )+'px';
     } else if (scrollY > 2300 || scrollY === 2300) {
         document.getElementById('octo2').style.top = -248.5 +'px';
      }
      if (scrollY > 2000) {
        document.getElementById('octo5').style.top = 483 -2000 +(window.pageYOffset )+'px';
        document.getElementById('octo6').style.top = 483 - 2000 +(window.pageYOffset)+'px';
        
     } else if (scrollY > 2300 || scrollY === 2300) {
         document.getElementById('octo5').style.top = 1483 +'px';
         document.getElementById('octo6').style.top = 1483 +'px';
         
      }
     
     
}
window.addEventListener("scroll", parallax, false);

//PARTIE JQUERY

$("#graphismeIcone").mouseover(function(){
    $(this).attr("src","Design/images/competence/graphisme2.png");
});
$("#graphismeIcone").mouseout(function(){
    $(this).attr("src","Design/images/competence/graphisme.png");
});

$("#mayaIcone").mouseover(function(){
    $(this).attr("src","Design/images/competence/animation2.png");
});
$("#mayaIcone").mouseout(function(){
    $(this).attr("src","Design/images/competence/animation.png");
});

$("#heraIcone").mouseover(function(){
    $(this).attr("src","Design/images/competence/webdesign2.png");
});
$("#heraIcone").mouseout(function(){
    $(this).attr("src","Design/images/competence/webdesign.png");
});

     
     $("#octo1").click(function(){
          var i = 1;
          
          
       
		$("#diaporama-herakles").css("display", "block");
		$("#diaporama-maya").css("display", "none");
                $("#diaporama-encre").css("display", "none");
                $("#diaporama-ipez").css("display", "none");
                $("#diaporama-crayon").css("display", "none");
                $("#diaporama-light").css("display", "none");
                $("#diaporama-digital").css("display", "none");
                $('#center').css('opacity','1');
     
         
    $("#triangle2 , #triangle1,#next ").click(function(){
       
		if(i==5)
                  {i=1;}
		else{i++;}
		$("#img-diapoH").attr("src", "Design/images/diaporama/diapoH" + i + ".png");
                
                
	});
        $("#triangle4 , #triangle3, #prev").click(function(){
           
		if(i==1)
                  {i=5;}
                else{i--;}
		$("#img-diapoH").attr("src", "Design/images/diaporama/diapoH" + i + ".png");
                
	});
        
    });
    
    $("#octo2").click(function(){
		$("#diaporama-maya").css("display", "block");
                $("#diaporama-herakles").css("display", "none");
                $("#diaporama-encre").css("display", "none");
                $("#diaporama-ipez").css("display", "none");
                $("#diaporama-crayon").css("display", "none");
                $("#diaporama-light").css("display", "none");
                $("#diaporama-digital").css("display", "none");
                $('#center').css('opacity','1');
	
    var i = 1;

    $("#triangle2 , #triangle1, #next").click(function(){
		if(i==5){
			i=1;
		}
		else{
		i++;
		}
		$("#img-diapoM").attr("src", "Design/images/diaporama/diapoM" + i + ".png");
		
	});
        $("#triangle4 , #triangle3, #prev").click(function(){
		if(i==1){
			i=5;
		}
		else{
		i--;
		}
		$("#img-diapoM").attr("src", "Design/images/diaporama/diapoM" + i + ".png");
		
	});
    });
    
    $("#octo3").click(function(){
		$("#diaporama-encre").css("display", "block");
                $("#diaporama-herakles").css("display", "none");
		$("#diaporama-maya").css("display", "none");
                $("#diaporama-ipez").css("display", "none");
                $("#diaporama-crayon").css("display", "none");
                $("#diaporama-light").css("display", "none");
                $("#diaporama-digital").css("display", "none");
                $('#center').css('opacity','1');
                
    var i = 1;
 
    $("#triangle2 , #triangle1,#next ").click(function(){
		if(i==7)
                  {i=1;}
		else{i++;}
		$("#img-diapoE").attr("src", "Design/images/diaporama/diapoE" + i + ".png");	
	});
        $("#triangle4 , #triangle3, #prev").click(function(){
		if(i==1)
                  {i=7;}
                else{i--;}
		$("#img-diapoE").attr("src", "Design/images/diaporama/diapoE" + i + ".png");
	});
    });
    $("#octo4").click(function(){
		$("#diaporama-ipez").css("display", "block");
                $("#diaporama-herakles").css("display", "none");
		$("#diaporama-maya").css("display", "none");
                $("#diaporama-encre").css("display", "none");
                $("#diaporama-crayon").css("display", "none");
                $("#diaporama-light").css("display", "none");
                $("#diaporama-digital").css("display", "none");
                $('#center').css('opacity','1');
                
    var i = 1;

    $("#triangle2 , #triangle1,#next ").click(function(){
		if(i==5)
                  {i=1;}
		else{i++;}
		$("#img-diapoI").attr("src", "Design/images/diaporama/diapoI" + i + ".png");	
	});
        $("#triangle4 , #triangle3, #prev").click(function(){
		if(i==1)
                  {i=5;}
                else{i--;}
		$("#img-diapoI").attr("src", "Design/images/diaporama/diapoI" + i + ".png");
	});
    });
    $("#octo5").click(function(){
		$("#diaporama-crayon").css("display", "block");
                $("#diaporama-herakles").css("display", "none");
		$("#diaporama-maya").css("display", "none");
                $("#diaporama-encre").css("display", "none");
                $("#diaporama-ipez").css("display", "none");
                $("#diaporama-light").css("display", "none");
                $("#diaporama-digital").css("display", "none");
                $('#center').css('opacity','1');
                
    var i = 1;
    
    $("#triangle2 , #triangle1,#next ").click(function(){
		if(i==3)
                  {i=1;}
		else{i++;}
		$("#img-diapoC").attr("src", "Design/images/diaporama/diapoC" + i + ".png");	
	});
        $("#triangle4 , #triangle3, #prev").click(function(){
		if(i==1)
                  {i=3;}
                else{i--;}
		$("#img-diapoC").attr("src", "Design/images/diaporama/diapoC" + i + ".png");
	});
    });
    $("#octo6").click(function(){
		$("#diaporama-light").css("display", "block");
                $("#diaporama-herakles").css("display", "none");
		$("#diaporama-maya").css("display", "none");
                $("#diaporama-encre").css("display", "none");
                $("#diaporama-ipez").css("display", "none");
                $("#diaporama-crayon").css("display", "none");
                $("#diaporama-digital").css("display", "none");
                $('#center').css('opacity','1');
                
    var i = 1;
    
    $("#triangle2 , #triangle1,#next ").click(function(){
		if(i==5)
                  {i=1;}
		else{i++;}
		$("#img-diapoL").attr("src", "Design/images/diaporama/diapoL" + i + ".png");	
	});
        $("#triangle4 , #triangle3, #prev").click(function(){
		if(i==1)
                  {i=5;}
                else{i--;}
		$("#img-diapoL").attr("src", "Design/images/diaporama/diapoL" + i + ".png");
	});
    });
    $("#octo7").click(function(){
		$("#diaporama-digital").css("display", "block");
                $("#diaporama-herakles").css("display", "none");
		$("#diaporama-maya").css("display", "none");
                $("#diaporama-encre").css("display", "none");
                $("#diaporama-ipez").css("display", "none");
                $("#diaporama-crayon").css("display", "none");
                $("#diaporama-light").css("display", "none");
                $('#center').css('opacity','1');
                
    var i = 1;
    
    $("#triangle2 , #triangle1,#next ").click(function(){
		if(i==5)
                  {i=1;}
		else{i++;}
		$("#img-diapoD").attr("src", "Design/images/diaporama/diapoD" + i + ".png");	
	});
        $("#triangle4 , #triangle3, #prev").click(function(){
		if(i==1)
                  {i=5;}
                else{i--;}
		$("#img-diapoD").attr("src", "Design/images/diaporama/diapoD" + i + ".png");
	});
    });
    
    //fonctionnement zoom
    var galerie = document.getElementById("center");

    var image = galerie.getElementsByTagName("div");

    var nbimage = image.length;

    var box = document.getElementById("lightbox");

    for(var i = 0; i < nbimage ; i++)
    {
        image[i].addEventListener("click", show);  
    }

    function show()
    {	
            var actu = 0;
            var monImage = document.createElement("img");
            var images = this.getElementsByTagName("img");
            var source = images[actu].getAttribute("src");
            var legende = images[actu].getAttribute("alt");
            var p = document.createElement("p");
            var txt = document.createTextNode(legende);

            p.appendChild(txt);

            monImage.setAttribute("src",source);

            var contentbox = document.getElementById("contentbox");
            contentbox.appendChild(monImage);
            contentbox.appendChild(p);

            box.style.display = "block";
            var close = document.getElementById("close");
            close.addEventListener("click", hide);  

            function hide()
            {
                    box.style.display = "none";
                    contentbox.removeChild(monImage);
                    contentbox.removeChild(p);
            }
            
            
            var nextvar = document.getElementById("next");
	
            nextvar.addEventListener("click", nextbtn);
            function nextbtn()
            {
                    var source = images[actu].getAttribute("src");
                    monImage.setAttribute("src",source);
            }
            var prevvar = document.getElementById("prev");
	
            prevvar.addEventListener("click", prevbtn);
            function prevbtn()
            {
                    var source = images[actu].getAttribute("src");
                    monImage.setAttribute("src",source);
            }
        }
        
    $('#case8').click(function() {

     $('#competence3').fadeIn(2000);
     $('#competences h1').fadeOut(500);

   });
   $('#case12').click(function() {

     $('#competence1').fadeIn(3000);
     $('#competences h1').fadeOut(500);

   });
   $('#case15').click(function() {

     $('#competence2').fadeIn(1000);
     $('#competences h1').fadeOut(500);
     

   });*/

/*

});*/
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