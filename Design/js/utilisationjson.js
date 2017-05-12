
$(function() {
    var images  = "design/images/";
    var js      = "../Design/js/";

    $('#charger').click(function() {
        $.getJSON('json/fichier.json', function(donnees) {
        $('#r').html('<p><b>Nom</b> : ' + donnees.nom + '</p>');
        $('#r').append('<p><b>Age</b> : ' + donnees.age + '</p>');
        $('#r').append('<p><b>Ville</b> : ' + donnees.ville + '</p>');
        $('#r').append('<p><b>Domaine de compétences</b> : ' + donnees.domaine + '</p>');
      });
    });  
    
    /* first test*/

 /*   $('#c1b , #c1a').click(function() {
        $.getJSON(js + 'json/step1.json', function(donnees) {
         $(".generalStep div:nth-child(1)").css("background-color","#044EBD");
         $('.generalStep div:nth-child(1) ').html('<h1> ' + donnees.nameStep + '</h1>');
         $('.generalStep div:nth-child(1)').append('<p> ' + donnees.introStep + '</p>');
        
        $('.generalStep div:nth-child(2)').html('<h4>Entrée :</h4><p> ' + donnees.entry + '</p>');
        $('.generalStep div:nth-child(2)').append('<h4>Sortie :</h4><p> ' + donnees.exit + '</p>');

         $('.videoPresentation div').html(' <iframe width="560" height="315" src="https://www.youtube.com/embed/2Lh0dSRqH4E" frameborder="0" allowfullscreen></iframe>');
        
        $('.gp1 img').attr("src", donnees.generalPrincipeIMG);

        });

    });*/

/*
$('#c8b , #c8a, #c8aTop,#c8bTop, #stepForMobile div:nth-child(8)').click(function() {

        $.getJSON(js + 'json/step8.json', function(donnees) {
        $(".generalStep div:nth-child(1)").css("background-color","#2173EF");
        $('.generalStep div:nth-child(1) ').html('<h1> ' + donnees.nameSecond + '</h1>');
        /*$('.generalStep div:nth-child(1)').append('<h2> ' + donnees.nameSecond + '</h2><br/>');*/
       /* $('.generalStep div:nth-child(1)').append('<h3> ' + donnees.objectives + '</h3>');
        $('.generalStep div:nth-child(1)').append('<p> ' + donnees.objectivesP + '</p>');

        $('.generalStep div:nth-child(2)').html('<h4>Inputs  :</h4><p> ' + donnees.entry + '</p>');
        $('.generalStep div:nth-child(2)').append('<h4>Outputs  :</h4><p> ' + donnees.exit + '</p>');

        $('.videoPresentation div').html('iframe width="560" height="315" src="https://www.youtube.com/embed/O-IZz1n4F4g" frameborder="0" allowfullscreen></iframe>');
        
        $('.gp1').html("<img/>");
        $('.gp1 img').attr("src",'../Design/img/step_img/' + donnees.generalPrincipeIMG);
        $('.gp1').append('<h4> ' + donnees.step1Name + '</h4>');
        $('.gp1').append('<p> ' + donnees.step1Content + '</p>');
        $('.gp1').append('<h4> ' + donnees.step2Name + '</h4>');
        $('.gp1').append('<p> ' + donnees.step2Content + '</p>');
        $('.gp1').append('<h4> ' + donnees.step3Name + '</h4>');
        $('.gp1').append('<p> ' + donnees.step3Content + '</p>');
        $('.gp1').append('<h4> ' + donnees.step4Name + '</h4>');
        $('.gp1').append('<p> ' + donnees.step4Content + '</p>');

        $('.implementedAlgo').html("<h1>The algorithm</h1>");
        $('.implementedAlgo').append("<h2>" + donnees.algo1H2 + "</h2>");

        $('.implementedAlgo').append("<div id='algoImplemented1'></div>");
        $('#algoImplemented1').html("<h3>" + donnees.algo1 + "<h3>");
        $(' #algoImplemented1').append("<h4>" + donnees.algo1ATitle + "<h4>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Ap1 + "<p>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Ap2 + "<p>");

        $(' #algoImplemented1').append("<img src = '../Design/img/step_img/" + donnees.nameIMG1 + "'/>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Ap3 + "<p>");
        $(' #algoImplemented1').append("<img src = '../Design/img/step_img/" + donnees.nameIMG2 + "'/>");
        $(' #algoImplemented1').append("<h4>" + donnees.algo1BTitle + "<h4>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Bp + "<p>");
        $(' #algoImplemented1').append("<h4>" + donnees.algo1CTitle + "<h4>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Cp + "<p>");
        $(' #algoImplemented1').append("<h4>" + donnees.algo1DTitle + "<h4>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Dp + "<p>");
        $(' #algoImplemented1').append("<p><a href=" + donnees.linkAlgo1 + ">For more informations</a><p>");
        $('.implementedAlgo').append("<p class='seeMore' id='seeMore1'><a>See more</a></p>");   

        $('.implementedAlgo').append("<div id='algoImplemented2'></div>");
        $('#algoImplemented2').html("<h3>" + donnees.algo2 + "<h3>");
        $(' #algoImplemented2').append("<h4>" + donnees.algo2ATitle + "<h4>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Ap1 + "<p>");
        $(' #algoImplemented2').append("<img src = '../Design/img/step_img/" + donnees.nameIMG1Algo2 + "'/>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Ap2 + "<p>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Ap3 + "<p>");
        $(' #algoImplemented2').append("<h4>" + donnees.algo2BTitle + "<h4>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Bp1 + "<p>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Bp2 + "<p>");
        $(' #algoImplemented2').append("<h4>" + donnees.algo2CTitle + "<h4>");
        $(' #algoImplemented2').append("<p><strong>" + donnees.algo2Csub1 + "</strong><p>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Cp1 + "<p>");
        $(' #algoImplemented2').append("<p><strong>" + donnees.algo2Csub2 + "</strong><p>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Cp2 + "<p>");
        $(' #algoImplemented2').append("<p><a href=" + donnees.linkAlgo1 + ">For more informations</a><p>");
        $('.implementedAlgo').append("<p class='seeMore' id='seeMore2'><a>See more</a></p>");

        $('.seeMore a').css("color", "#2173EF");
        $('.seeMore a').css("font-style", "bold");
        $('.seeMore a').css("font-size", "20px");
        $('.seeMore').css("cursor", "pointer");
        $('.seeMore').css("margin-top", "0px");

         $(' #algoImplemented1').css("height", "470px");
         $(' #algoImplemented1').css("overflow", "hidden");
         $(' #algoImplemented2').css("height", "455px");
         $(' #algoImplemented2').css("overflow", "hidden");


         $('#seeMore1').click(function() {
            if($( "#algoImplemented1" ).height() > 480 ){
                $('#seeMore1').html("<a>See more</a>");
                 $('.seeMore a').css("color", "#2173EF");
                $('.seeMore a').css("font-style", "bold");
                $('.seeMore a').css("font-size", "20px");
                $( "#algoImplemented1" ).animate({
                height: "470px"
              }, 1500 );
            }else{
                $('#seeMore1').html("<a>See less</a>");
                $('.seeMore a').css("color", "#2173EF");
                $('.seeMore a').css("font-style", "bold");
                $('.seeMore a').css("font-size", "20px");
                $( "#algoImplemented1" ).animate({
                height: "100%"
              }, 1500 );
            }
            });
         $('#seeMore2').click(function() {
            if($( "#algoImplemented2" ).height() > 480 ){
                $('#seeMore2').html("<a>See more</a>");
                 $('.seeMore a').css("color", "#2173EF");
                $('.seeMore a').css("font-style", "bold");
                $('.seeMore a').css("font-size", "20px");
                $( "#algoImplemented2" ).animate({
                height: "455px"
              }, 1500 );
            }else{
                $('#seeMore2').html("<a>See less</a>");
                $('.seeMore a').css("color", "#2173EF");
                $('.seeMore a').css("font-style", "bold");
                $('.seeMore a').css("font-size", "20px");
                $( "#algoImplemented2" ).animate({
                height: "100%"
              }, 1500 );
            }
            });

         /*end algo implemented 

        $('.existantAlgo').html("<h2>" + donnees.otherTitle + "</h2>");
        $('.existantAlgo').append("<div id='algoExisted1'></div>");
        $('#algoExisted1').html("<h3>" + donnees.otherFeature1 + "</h3>");
        $(' #algoExisted1').append("<ul><li>" + donnees.oFA1 + "</li><li>"
            + donnees.oFA2 + "</li><li>"
            + donnees.oFA3 + "</li><li>"
            + donnees.oFA4 + "</li><li>"
            + donnees.oFA5 + "</li><li>"
            + donnees.oFA6 + "</li><li>"
            + donnees.oFA7 + "</li><li>"
            + donnees.oFA8 + "</li><li>"
            + donnees.oFA9 + "</li></ul>");

        $('.existantAlgo').append("<div id='algoExisted2'></div>");
        $('#algoExisted2').html("<h3>" + donnees.otherFeature2 + "</h3>");
        $(' #algoExisted2').append("<ul><li>" + donnees.oFB2 + "</li><li>"
            + donnees.oFB2 + "</li><li>"
            + donnees.oFB3 + "</li><li>"
            + donnees.oFB4 + "</li><li>"
            + donnees.oFB5 + "</li><li>"
            + donnees.oFB6 + "</li><li>"
            + donnees.oFB7 + "</li></ul>");

        });/*fin partie json


}

*/
var stepSelected = 1;



function loadStep1(){
    $.getJSON(js + 'json/step1.json', function(donnees) {
        $('.generalStep div:nth-child(1) ').html('<h1> ' + donnees.nameStep + '</h1>');
        $('.generalStep div:nth-child(1)').append('<h5> ' + donnees.nameSecond + '</h5><br/>');
        $('.generalStep div:nth-child(1)').append('<h2> ' + donnees.stepNumber + '</h2><br/>');
        $('.generalStep div:nth-child(1)').append('<h3>Objectives</h3>');
        $('.generalStep div:nth-child(1)').append('<p> ' + donnees.objectives + '</p>');

        $('.generalStep div:nth-child(2)').html('<h4>Inputs  :</h4><p> ' + donnees.entry + '</p>');
        $('.generalStep div:nth-child(2)').append('<h4>Outputs  :</h4><p> ' + donnees.exit + '</p>');

        $('.videoPresentation div').html('<div><iframe width="560" height="315" src=" ' + donnees.adresseVideo1 + '" frameborder="0" allowfullscreen></iframe></div>');
        $('.videoPresentation div').append('<h3>Resume and comments</h3>');
        $('.videoPresentation div').append('<p>'+ donnees.introStep + '</p>');

        $('.gp1').html("<h1>General Principle</h1>");
        $('.gp1').append('<h4> ' + donnees.step1Name + '</h4>');
        $('.gp1').append('<p> ' + donnees.step1Content + '</p>');
        $('.gp1').append('<h4> ' + donnees.step2Name + '</h4>');
        $('.gp1').append('<p> ' + donnees.step2Content + '</p>');
        $('.gp1').append('<h4> ' + donnees.step3Name + '</h4>');
        $('.gp1').append('<p> ' + donnees.step3Content + '</p>');
        $('.gp1').append('<h4> ' + donnees.step4Name + '</h4>');
        $('.gp1').append('<p> ' + donnees.step4Content + '</p>');

        $('.gp2').html("<img />");
        $('.gp2 img').attr("src",'../Design/img/step_img/' + donnees.generalPrincipeIMG);

        $('.implementedAlgo').html("<h1>The algorithm</h1>");
        $('.implementedAlgo').append("<h2>" + donnees.algo1H2 + "</h2>");

        $('.implementedAlgo').append("<div id='algoImplemented1'></div>");
        $('#algoImplemented1').html("<h3>" + donnees.algo1 + "<h3>");
        $(' #algoImplemented1').append("<h4>" + donnees.algo1ATitle + "<h4>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Ap1 + "<p>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Ap2 + "<p>");

        $(' #algoImplemented1').append("<img src = '../Design/img/step_img/" + donnees.nameIMG1 + "'/>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Ap3 + "<p>");
        $(' #algoImplemented1').append("<img src = '../Design/img/step_img/" + donnees.nameIMG2 + "'/>");
        $(' #algoImplemented1').append("<h4>" + donnees.algo1BTitle + "<h4>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Bp + "<p>");
        $(' #algoImplemented1').append("<h4>" + donnees.algo1CTitle + "<h4>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Cp + "<p>");
        $(' #algoImplemented1').append("<h4>" + donnees.algo1DTitle + "<h4>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Dp + "<p>");
        $(' #algoImplemented1').append("<p><a href=" + donnees.linkAlgo1 + ">For more informations</a><p>");
        $('.implementedAlgo').append("<p class='seeMore' id='seeMore1'><a>See more</a></p>");   

        $('.implementedAlgo').append("<div id='algoImplemented2'></div>");
        $('#algoImplemented2').html("<h3>" + donnees.algo2 + "<h3>");
        $(' #algoImplemented2').append("<h4>" + donnees.algo2ATitle + "<h4>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Ap1 + "<p>");
        $(' #algoImplemented2').append("<img src = '../Design/img/step_img/" + donnees.nameIMG1Algo2 + "'/>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Ap2 + "<p>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Ap3 + "<p>");
        $(' #algoImplemented2').append("<h4>" + donnees.algo2BTitle + "<h4>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Bp1 + "<p>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Bp2 + "<p>");
        $(' #algoImplemented2').append("<h4>" + donnees.algo2CTitle + "<h4>");
        $(' #algoImplemented2').append("<p><strong>" + donnees.algo2Csub1 + "</strong><p>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Cp1 + "<p>");
        $(' #algoImplemented2').append("<p><strong>" + donnees.algo2Csub2 + "</strong><p>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Cp2 + "<p>");
        $(' #algoImplemented2').append("<p><a href=" + donnees.linkAlgo1 + ">For more informations</a><p>");
        $('.implementedAlgo').append("<p class='seeMore' id='seeMore2'><a>See more</a></p>");

        $('.seeMore a').css("color", "#2173EF");
        $('.seeMore a').css("font-style", "bold");
        $('.seeMore a').css("font-size", "20px");
        $('.seeMore').css("cursor", "pointer");
        $('.seeMore').css("margin-top", "0px");

         $(' #algoImplemented1').css("height", "470px");
         $(' #algoImplemented1').css("overflow", "hidden");
         $(' #algoImplemented2').css("height", "455px");
         $(' #algoImplemented2').css("overflow", "hidden");


         $('#seeMore1').click(function() {
            if($( "#algoImplemented1" ).height() > 480 ){
                $('#seeMore1').html("<a>See more</a>");
                 $('.seeMore a').css("color", "#2173EF");
                $('.seeMore a').css("font-style", "bold");
                $('.seeMore a').css("font-size", "20px");
                $( "#algoImplemented1" ).animate({
                height: "470px"
              }, 1500 );
            }else{
                $('#seeMore1').html("<a>See less</a>");
                $('.seeMore a').css("color", "#2173EF");
                $('.seeMore a').css("font-style", "bold");
                $('.seeMore a').css("font-size", "20px");
                $( "#algoImplemented1" ).animate({
                height: "100%"
              }, 1500 );
            }
            });
         $('#seeMore2').click(function() {
            if($( "#algoImplemented2" ).height() > 480 ){
                $('#seeMore2').html("<a>See more</a>");
                 $('.seeMore a').css("color", "#2173EF");
                $('.seeMore a').css("font-style", "bold");
                $('.seeMore a').css("font-size", "20px");
                $( "#algoImplemented2" ).animate({
                height: "455px"
              }, 1500 );
            }else{
                $('#seeMore2').html("<a>See less</a>");
                $('.seeMore a').css("color", "#2173EF");
                $('.seeMore a').css("font-style", "bold");
                $('.seeMore a').css("font-size", "20px");
                $( "#algoImplemented2" ).animate({
                height: "100%"
              }, 1500 );
            }
            });

         /*end algo implemented */

        $('.existantAlgo').html("<h2>" + donnees.otherTitle + "</h2>");
        $('.existantAlgo').append("<div id='algoExisted1'></div>");
        $('#algoExisted1').html("<h3>" + donnees.otherFeature1 + "</h3>");
        $(' #algoExisted1').append("<ul><li>" + donnees.oFA1 + "</li><li>"
            + donnees.oFA2 + "</li><li>"
            + donnees.oFA3 + "</li><li>"
            + donnees.oFA4 + "</li><li>"
            + donnees.oFA5 + "</li><li>"
            + donnees.oFA6 + "</li><li>"
            + donnees.oFA7 + "</li><li>"
            + donnees.oFA8 + "</li><li>"
            + donnees.oFA9 + "</li></ul>");

        $('.existantAlgo').append("<div id='algoExisted2'></div>");
        $('#algoExisted2').html("<h3>" + donnees.otherFeature2 + "</h3>");
        $(' #algoExisted2').append("<ul><li>" + donnees.oFB2 + "</li><li>"
            + donnees.oFB2 + "</li><li>"
            + donnees.oFB3 + "</li><li>"
            + donnees.oFB4 + "</li><li>"
            + donnees.oFB5 + "</li><li>"
            + donnees.oFB6 + "</li><li>"
            + donnees.oFB7 + "</li></ul>");


        });/*fin partie json*/

         $('.generalPrincipe').css("display", "block");
        $('.allAlgo').css("display", "block");
        $('.videoPresentation').css("display", "block");
}
function loadStep2(){
    $.getJSON(js + 'json/step2.json', function(donnees) {
        $('.generalStep div:nth-child(1) ').html('<h1> ' + donnees.nameStep + '</h1>');
        $('.generalStep div:nth-child(1)').append('<h5> ' + donnees.nameSecond + '</h5><br/>');
        $('.generalStep div:nth-child(1)').append('<h2> ' + donnees.stepNumber + '</h2><br/>');
        $('.generalStep div:nth-child(1)').append('<h3>Objectives</h3>');
        $('.generalStep div:nth-child(1)').append('<p> ' + donnees.objectives + '</p>');

        
        $('.generalStep div:nth-child(2)').html('');
        $('.videoPresentation div').html('');
        $('#gp1').html("");
        $('#gp2').html("");
        $('.implementedAlgo').html("");
        $('#algoImplemented1').html("");
        $('#algoImplemented2').html("");

        $('.generalPrincipe').css("display", "none");
        $('.allAlgo').css("display", "none");
        $('.videoPresentation').css("display", "none");

        });/*fin partie json*/
}
function loadStep3(){
    $.getJSON(js + 'json/step3.json', function(donnees) {
        $('.generalStep div:nth-child(1) ').html('<h1> ' + donnees.nameStep + '</h1>');
        $('.generalStep div:nth-child(1)').append('<h5> ' + donnees.nameSecond + '</h5><br/>');
        $('.generalStep div:nth-child(1)').append('<h2> ' + donnees.stepNumber + '</h2><br/>');
        $('.generalStep div:nth-child(1)').append('<h3>Objectives</h3>');
        $('.generalStep div:nth-child(1)').append('<p> ' + donnees.objectives + '</p>');

        
        $('.generalStep div:nth-child(2)').html('');
        $('.videoPresentation div').html('');
        $('#gp1').html("");
        $('#gp2').html("");
        $('.implementedAlgo').html("");
        $('#algoImplemented1').html("");
        $('#algoImplemented2').html("");

        $('.generalPrincipe').css("display", "none");
        $('.allAlgo').css("display", "none");
        $('.videoPresentation').css("display", "none");

        });/*fin partie json*/
}
function loadStep4(){
    $('.generalPrincipe').css("display", "block");
        $('.allAlgo').css("display", "block");
        $('.videoPresentation').css("display", "block");

        $.getJSON(js + 'json/step4.json', function(donnees) {
        $('.generalStep div:nth-child(1) ').html('<h1> ' + donnees.nameStep + '</h1>');
        $('.generalStep div:nth-child(1)').append('<h5> ' + donnees.nameSecond + '</h5><br/>');
        $('.generalStep div:nth-child(1)').append('<h2> ' + donnees.stepNumber + '</h2><br/>');
        $('.generalStep div:nth-child(1)').append('<h3>Objectives</h3>');
        $('.generalStep div:nth-child(1)').append('<p> ' + donnees.objectives + '</p>');

        $('.generalStep div:nth-child(2)').html('<h4>Inputs  :</h4><p> ' + donnees.entry + '</p>');
        $('.generalStep div:nth-child(2)').append('<h4>Outputs  :</h4><p> ' + donnees.exit + '</p>');

        $('.videoPresentation').html('');
        $('.videoPresentation').append('<div></div>');
        $('.videoPresentation div').append('<iframe width="560" height="315" src=" ' + donnees.adresseVideo1 + '" frameborder="0" allowfullscreen></iframe>');
        $('.videoPresentation div').append('<h3>Resume and comments</h3>');
        $('.videoPresentation div').append('<p>'+ donnees.introStep + '</p>');

        $('.gp1').html("<h1>General Principle</h1>");
        $('.gp1').append('<h4> ' + donnees.step1Name + '</h4>');
        $('.gp1').append('<p> ' + donnees.step1Content + '</p>');
        $('.gp1').append('<h4> ' + donnees.step2Name + '</h4>');
        $('.gp1').append('<p> ' + donnees.step2Content + '</p>');
        $('.gp1').append('<h4> ' + donnees.step3Name + '</h4>');
        $('.gp1').append('<p> ' + donnees.step3Content + '</p>');
        $('.gp1').append('<h4> ' + donnees.step4Name + '</h4>');
        $('.gp1').append('<p> ' + donnees.step4Content + '</p>');

        $('.gp2').html("<img />");
        $('.gp2 img').attr("src",'../Design/img/step_img/' + donnees.generalPrincipeIMG);

        $('.implementedAlgo').html("<h1>The algorithm</h1>");
        $('.implementedAlgo').append("<h2>" + donnees.algo1H2 + "</h2>");

        $('.implementedAlgo').append("<div id='algoImplemented1'></div>");
        $('#algoImplemented1').html("<h3>" + donnees.algo1 + "<h3>");
        $(' #algoImplemented1').append("<h4>" + donnees.algo1ATitle + "<h4>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Ap1 + "<p>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Ap2 + "<p>");

        $(' #algoImplemented1').append("<img src = '../Design/img/step_img/" + donnees.nameIMG1 + "'/>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Ap3 + "<p>");
        $(' #algoImplemented1').append("<img src = '../Design/img/step_img/" + donnees.nameIMG2 + "'/>");
        $(' #algoImplemented1').append("<h4>" + donnees.algo1BTitle + "<h4>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Bp + "<p>");
        $(' #algoImplemented1').append("<h4>" + donnees.algo1CTitle + "<h4>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Cp + "<p>");
        $(' #algoImplemented1').append("<h4>" + donnees.algo1DTitle + "<h4>");
        $(' #algoImplemented1').append("<p>" + donnees.algo1Dp + "<p>");
        $(' #algoImplemented1').append("<p><a href=" + donnees.linkAlgo1 + ">For more informations</a><p>");
        $('.implementedAlgo').append("<p class='seeMore' id='seeMore1'><a>See more</a></p>");   

        $('.implementedAlgo').append("<div id='algoImplemented2'></div>");
        $('#algoImplemented2').html("<h3>" + donnees.algo2 + "<h3>");
        $(' #algoImplemented2').append("<h4>" + donnees.algo2ATitle + "<h4>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Ap1 + "<p>");
        $(' #algoImplemented2').append("<img src = '../Design/img/step_img/" + donnees.nameIMG1Algo2 + "'/>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Ap2 + "<p>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Ap3 + "<p>");
        $(' #algoImplemented2').append("<h4>" + donnees.algo2BTitle + "<h4>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Bp1 + "<p>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Bp2 + "<p>");
        $(' #algoImplemented2').append("<h4>" + donnees.algo2CTitle + "<h4>");
        $(' #algoImplemented2').append("<p><strong>" + donnees.algo2Csub1 + "</strong><p>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Cp1 + "<p>");
        $(' #algoImplemented2').append("<p><strong>" + donnees.algo2Csub2 + "</strong><p>");
        $(' #algoImplemented2').append("<p>" + donnees.algo2Cp2 + "<p>");
        $(' #algoImplemented2').append("<p><a href=" + donnees.linkAlgo1 + ">For more informations</a><p>");
        $('.implementedAlgo').append("<p class='seeMore' id='seeMore2'><a>See more</a></p>");

        $('.seeMore a').css("color", "#2173EF");
        $('.seeMore a').css("font-style", "bold");
        $('.seeMore a').css("font-size", "20px");
        $('.seeMore').css("cursor", "pointer");
        $('.seeMore').css("margin-top", "0px");

         $(' #algoImplemented1').css("height", "470px");
         $(' #algoImplemented1').css("overflow", "hidden");
         $(' #algoImplemented2').css("height", "455px");
         $(' #algoImplemented2').css("overflow", "hidden");


         $('#seeMore1').click(function() {
            if($( "#algoImplemented1" ).height() > 480 ){
                $('#seeMore1').html("<a>See more</a>");
                 $('.seeMore a').css("color", "#2173EF");
                $('.seeMore a').css("font-style", "bold");
                $('.seeMore a').css("font-size", "20px");
                $( "#algoImplemented1" ).animate({
                height: "470px"
              }, 1500 );
            }else{
                $('#seeMore1').html("<a>See less</a>");
                $('.seeMore a').css("color", "#2173EF");
                $('.seeMore a').css("font-style", "bold");
                $('.seeMore a').css("font-size", "20px");
                $( "#algoImplemented1" ).animate({
                height: "100%"
              }, 1500 );
            }
            });
         $('#seeMore2').click(function() {
            if($( "#algoImplemented2" ).height() > 480 ){
                $('#seeMore2').html("<a>See more</a>");
                 $('.seeMore a').css("color", "#2173EF");
                $('.seeMore a').css("font-style", "bold");
                $('.seeMore a').css("font-size", "20px");
                $( "#algoImplemented2" ).animate({
                height: "455px"
              }, 1500 );
            }else{
                $('#seeMore2').html("<a>See less</a>");
                $('.seeMore a').css("color", "#2173EF");
                $('.seeMore a').css("font-style", "bold");
                $('.seeMore a').css("font-size", "20px");
                $( "#algoImplemented2" ).animate({
                height: "100%"
              }, 1500 );
            }
            });

         /*end algo implemented */

        $('.existantAlgo').html("<h2>" + donnees.otherTitle + "</h2>");
        $('.existantAlgo').append("<div id='algoExisted1'></div>");
        $('#algoExisted1').html("<h3>" + donnees.otherFeature1 + "</h3>");
        $(' #algoExisted1').append("<ul><li>" + donnees.oFA1 + "</li><li>"
            + donnees.oFA2 + "</li><li>"
            + donnees.oFA3 + "</li><li>"
            + donnees.oFA4 + "</li><li>"
            + donnees.oFA5 + "</li><li>"
            + donnees.oFA6 + "</li><li>"
            + donnees.oFA7 + "</li><li>"
            + donnees.oFA8 + "</li><li>"
            + donnees.oFA9 + "</li></ul>");

        $('.existantAlgo').append("<div id='algoExisted2'></div>");
        $('#algoExisted2').html("<h3>" + donnees.otherFeature2 + "</h3>");
        $(' #algoExisted2').append("<ul><li>" + donnees.oFB2 + "</li><li>"
            + donnees.oFB2 + "</li><li>"
            + donnees.oFB3 + "</li><li>"
            + donnees.oFB4 + "</li><li>"
            + donnees.oFB5 + "</li><li>"
            + donnees.oFB6 + "</li><li>"
            + donnees.oFB7 + "</li></ul>");

        });/*fin partie json*/


}

function loadStep5(){
  $.getJSON(js + 'json/step5.json', function(donnees) {
        $('.generalStep div:nth-child(1) ').html('<h1> ' + donnees.nameStep + '</h1>');
        $('.generalStep div:nth-child(1)').append('<h5> ' + donnees.nameSecond + '</h5><br/>');
        $('.generalStep div:nth-child(1)').append('<h2> ' + donnees.stepNumber + '</h2><br/>');
        $('.generalStep div:nth-child(1)').append('<h3>Objectives</h3>');
        $('.generalStep div:nth-child(1)').append('<p> ' + donnees.objectives + '</p>');

        
        $('.generalStep div:nth-child(2)').html('');
        $('.videoPresentation div').html('');
        $('#gp1').html("");
        $('#gp2').html("");
        $('.implementedAlgo').html("");
        $('#algoImplemented1').html("");
        $('#algoImplemented2').html("");

        $('.generalPrincipe').css("display", "none");
        $('.allAlgo').css("display", "none");
        $('.videoPresentation').css("display", "none");

        });/*fin partie json*/   
}
function loadStep6(){
    $.getJSON(js + 'json/step6.json', function(donnees) {
        $('.generalStep div:nth-child(1) ').html('<h1> ' + donnees.nameStep + '</h1>');
        $('.generalStep div:nth-child(1)').append('<h5> ' + donnees.nameSecond + '</h5><br/>');
        $('.generalStep div:nth-child(1)').append('<h2> ' + donnees.stepNumber + '</h2><br/>');
        $('.generalStep div:nth-child(1)').append('<h3>Objectives</h3>');
        $('.generalStep div:nth-child(1)').append('<p> ' + donnees.objectives + '</p>');

        
        $('.generalStep div:nth-child(2)').html('');
        $('.videoPresentation div').html('');
        $('#gp1').html("");
        $('#gp2').html("");
        $('.implementedAlgo').html("");
        $('#algoImplemented1').html("");
        $('#algoImplemented2').html("");

        $('.generalPrincipe').css("display", "none");
        $('.allAlgo').css("display", "none");
        $('.videoPresentation').css("display", "none");

        });/*fin partie json*/
}
function loadStep7(){
    $.getJSON(js + 'json/step7.json', function(donnees) {
        $('.generalStep div:nth-child(1) ').html('<h1> ' + donnees.nameStep + '</h1>');
        $('.generalStep div:nth-child(1)').append('<h5> ' + donnees.nameSecond + '</h5><br/>');
        $('.generalStep div:nth-child(1)').append('<h2> ' + donnees.stepNumber + '</h2><br/>');
        $('.generalStep div:nth-child(1)').append('<h3>Objectives</h3>');
        $('.generalStep div:nth-child(1)').append('<p> ' + donnees.objectives + '</p>');

        
        $('.generalStep div:nth-child(2)').html('');
        $('.videoPresentation div').html('');
        $('#gp1').html("");
        $('#gp2').html("");
        $('.implementedAlgo').html("");
        $('#algoImplemented1').html("");
        $('#algoImplemented2').html("");

        $('.generalPrincipe').css("display", "none");
        $('.allAlgo').css("display", "none");
        $('.videoPresentation').css("display", "none");

        });/*fin partie json*/
}
function loadStep8(){
    $.getJSON(js + 'json/step8.json', function(donnees) {
        $('.generalStep div:nth-child(1) ').html('<h1> ' + donnees.nameStep + '</h1>');
        $('.generalStep div:nth-child(1)').append('<h5> ' + donnees.nameSecond + '</h5><br/>');
        $('.generalStep div:nth-child(1)').append('<h2> ' + donnees.stepNumber + '</h2><br/>');
        $('.generalStep div:nth-child(1)').append('<h3>Objectives</h3>');
        $('.generalStep div:nth-child(1)').append('<p> ' + donnees.objectives + '</p>');

        
        $('.generalStep div:nth-child(2)').html('');
        $('.videoPresentation div').html('');
        $('#gp1').html("");
        $('#gp2').html("");
        $('.implementedAlgo').html("");
        $('#algoImplemented1').html("");
        $('#algoImplemented2').html("");

        $('.generalPrincipe').css("display", "none");
        $('.allAlgo').css("display", "none");
        $('.videoPresentation').css("display", "none");

        });/*fin partie json*/

}
$('#step1, #step1Mini, #pipelineS1').click(function() {
    stepSelected = 1;
    loadStep1();
});

$('#step2, #step2Mini, #pipelineS2').click(function() {
    stepSelected = 2;
    loadStep2();
});

$('#step3, #step3Mini, #pipelineS3').click(function() {
    stepSelected = 3;
    loadStep3();
});
$('#step4, #step4Mini, #pipelineS4').click(function() {
    stepSelected = 4;
    loadStep4();
});
$('#step5, #step5Mini, #pipelineS5').click(function() {
    stepSelected = 5;
    loadStep5();
});
$('#step6, #step6Mini, #pipelineS6').click(function() {
    stepSelected = 6;
    loadStep6();
});
$('#step7, #step7Mini, #pipelineS7').click(function() {
    stepSelected = 7;
    loadStep7();
});
$('#step8, #step8Mini, #pipelineS8').click(function() {
    stepSelected = 8;
    loadStep8();
});


function loadNumber(step){
    if(step == 1){
        loadStep1();
    }
    else if(step == 2){
        loadStep2();
    }
    else if(step == 3){
        loadStep3();
    }
    else if(step == 4){
        loadStep4();
    }
    else if(step == 5){
        loadStep5();
    }else if(step == 6){
        loadStep6();
    }else if(step == 7){
        loadStep7();
    }else{
        loadStep8();
    }
}

$('#prevBtn').click(function() {
    if(stepSelected == 1){
        loadNumber(1);
    }else{
        loadNumber(stepSelected-1);
        stepSelected = stepSelected-1;
    }
   
});
$('#nextBtn').click(function() {
    if(stepSelected == 8){
        loadNumber(8);
    }else{
        loadNumber(stepSelected+1);
        stepSelected = stepSelected+1;
    }
   
});




/*

    $('#btn1 , #usa').click(function() {
        $.getJSON(js+'json/usa.json', function(donnees) {
         $('#artiste').html('<h1> ' + donnees.h1 + '</h1>');
        $("#artiste h1").css("color","#EA5A42");
        $('#artiste').append('<h2> ' + donnees.h2 + '</h2>');
        
        $('#artiste').append('<p> ' + donnees.p1 + '</p>');
        
        $('#artiste').append('<div class="img1" id="usa1"></div>');
        $('#usa1').css('backgroundImage','url('+images+'iurato1.jpg)');
        
        $('#artiste').append('<p class="text-2"> ' + donnees.p2 + '</p>');
        $('#artiste').append('<div class="img2" id="usa2"></div>');
        $('#usa2').css('backgroundImage','url('+images+'iurato2.jpg)');
        //$('#usa2').css('height','420px');
        $('#artiste').append('<div class="clear"></div>');
        
        $('#artiste').append('<div class="img3" id="usa3"></div>');
        $('#usa3').css('backgroundImage','url('+images+'iurato3.jpg)');
        
        $('#artiste').append('<p class="text-3"> ' + donnees.p3 + '</p>');
         $('#artiste').append('<div class="clear"></div>');
        
        
        });
    });
    
    $('#btn2 , #argentine').click(function() {
        $.getJSON(js+'json/argentine.json', function(donnees) {
         $('#artiste').html('<h1> ' + donnees.h1 + '</h1>');
        $("#artiste h1").css("color","#519377");
        $('#artiste').append('<h2> ' + donnees.h2 + '</h2>');
        
        $('#artiste').append('<p> ' + donnees.p1 + '</p>');
        
        $('#artiste').append('<div class="img1" id="argentine1"></div>');
        $('#argentine1').css('backgroundImage','url('+images+'kalab1.jpg)');
        
        $('#artiste').append('<p class="text-2"> ' + donnees.p2 + '</p>');
        $('#artiste').append('<div class="img2" id="argentine2"></div>');
        $('#argentine2').css('backgroundImage','url('+images+'kalab2.jpg)');
       
        $('#artiste').append('<div class="clear"></div>');
        
        $('#artiste').append('<div class="img3" id="argentine3"></div>');
        $('#argentine3').css('backgroundImage','url('+images+'kalab3.jpg)');
        
        $('#artiste').append('<p class="text-3"> ' + donnees.p3 + '</p>');
         $('#artiste').append('<div class="clear"></div>');
        
        
        });
    });
    
    $('#btn3 , #gambie').click(function() {
        $.getJSON(js+'json/afrique.json', function(donnees) {
         $('#artiste').html('<h1> ' + donnees.h1 + '</h1>');
        $("#artiste h1").css("color","#F7A10B");
        $('#artiste').append('<h2> ' + donnees.h2 + '</h2>');
        
        $('#artiste').append('<p> ' + donnees.p1 + '</p>');
        
        $('#artiste').append('<div class="img1" id="afrique1"></div>');
        $('#afrique1').css('backgroundImage','url('+images+'roa1.jpg)');
        
        $('#artiste').append('<p class="text-2"> ' + donnees.p2 + '</p>');
        $('#artiste').append('<div class="img2" id="afrique2"></div>');
        $('#afrique2').css('backgroundImage','url('+images+'roa2.jpg)');
       
        $('#artiste').append('<div class="clear"></div>');
        
        $('#artiste').append('<div class="img3" id="afrique3"></div>');
        $('#afrique3').css('backgroundImage','url('+images+'roa3.png)');
        
        $('#artiste').append('<p class="text-3"> ' + donnees.p3 + '</p>');
         $('#artiste').append('<div class="clear"></div>');
        
        
        });
    });
    
    $('#btn4 , #espagne').click(function() {
        $.getJSON(js+'json/espagne.json', function(donnees) {
         $('#artiste').html('<h1> ' + donnees.h1 + '</h1>');
        $("#artiste h1").css("color","#BDCC6C");
        $('#artiste').append('<h2> ' + donnees.h2 + '</h2>');
        
        $('#artiste').append('<p> ' + donnees.p1 + '</p>');
        
        $('#artiste').append('<div class="img1" id="espagne1"></div>');
        $('#espagne1').css('backgroundImage','url('+images+'crego1.gif)');
        
        $('#artiste').append('<p class="text-2"> ' + donnees.p2 + '</p>');
        $('#artiste').append('<div class="img2" id="espagne2"></div>');
        $('#espagne2').css('backgroundImage','url('+images+'crego2.gif)');
       
        $('#artiste').append('<div class="clear"></div>');
        
        $('#artiste').append('<div class="img3" id="espagne3"></div>');
        $('#espagne3').css('backgroundImage','url('+images+'crego3.gif)');
        
        $('#artiste').append('<p class="text-3"> ' + donnees.p3 + '</p>');
         $('#artiste').append('<div class="clear"></div>');
        
        
        });
    });
    
    $('#btn5 , #pologne').click(function() {
        $.getJSON(js+'json/pologne.json', function(donnees) {
         $('#artiste').html('<h1> ' + donnees.h1 + '</h1>');
        $("#artiste h1").css("color","#86B96E");
        $('#artiste').append('<h2> ' + donnees.h2 + '</h2>');
        
        $('#artiste').append('<p> ' + donnees.p1 + '</p>');
        
        $('#artiste').append('<div class="img1" id="pologne1"></div>');
        $('#pologne1').css('backgroundImage','url('+images+'sainer1.jpg)');
        
        $('#artiste').append('<p class="text-2"> ' + donnees.p2 + '</p>');
        $('#artiste').append('<div class="img2" id="pologne2"></div>');
        $('#pologne2').css('backgroundImage','url('+images+'sainer2.jpg)');
       
        $('#artiste').append('<div class="clear"></div>');
        
        $('#artiste').append('<div class="img3" id="pologne3"></div>');
        $('#pologne3').css('backgroundImage','url('+images+'sainer3.jpg)');
        
        $('#artiste').append('<p class="text-3"> ' + donnees.p3 + '</p>');
         $('#artiste').append('<div class="clear"></div>');
        
        
        });
    });
    
    $('#btn6 , #norvege').click(function() {
        $.getJSON(js+'json/norvege.json', function(donnees) {
         $('#artiste').html('<h1> ' + donnees.h1 + '</h1>');
        $("#artiste h1").css("color","#9ADDB1");
        $('#artiste').append('<h2> ' + donnees.h2 + '</h2>');
        
        $('#artiste').append('<p> ' + donnees.p1 + '</p>');
        
        $('#artiste').append('<div class="img1" id="norvege1"></div>');
        $('#norvege1').css('backgroundImage','url('+images+'martin1.jpg)');
        
        $('#artiste').append('<p class="text-2"> ' + donnees.p2 + '</p>');
        $('#artiste').append('<div class="img2" id="norvege2"></div>');
        $('#norvege2').css('backgroundImage','url('+images+'martin2.jpg)');
       
        $('#artiste').append('<div class="clear"></div>');
        
        $('#artiste').append('<div class="img3" id="norvege3"></div>');
        $('#norvege3').css('backgroundImage','url('+images+'martin3.jpg)');
        
        $('#artiste').append('<p class="text-3"> ' + donnees.p3 + '</p>');
         $('#artiste').append('<div class="clear"></div>');
        
        
        });
    });
    
    $('#btn7 , #afghanistan').click(function() {
        $.getJSON(js+'json/afghanistan.json', function(donnees) {
         $('#artiste').html('<h1> ' + donnees.h1 + '</h1>');
        $("#artiste h1").css("color","#B73D49");
        $('#artiste').append('<h2> ' + donnees.h2 + '</h2>');
        
        $('#artiste').append('<p> ' + donnees.p1 + '</p>');
        
        $('#artiste').append('<div class="img1" id="afghan1"></div>');
        $('#afghan1').css('backgroundImage','url('+images+'hassani1.jpg)');
        
        $('#artiste').append('<p class="text-2"> ' + donnees.p2 + '</p>');
        $('#artiste').append('<div class="img2" id="afghan2"></div>');
        $('#afghan2').css('backgroundImage','url('+images+'hassani2.jpg)');
       
        $('#artiste').append('<div class="clear"></div>');
        
        $('#artiste').append('<div class="img3" id="afghan3"></div>');
        $('#afghan3').css('backgroundImage','url('+images+'hassani3.jpg)');
        
        $('#artiste').append('<p class="text-3"> ' + donnees.p3 + '</p>');
         $('#artiste').append('<div class="clear"></div>');
        
        
        });
    });
    
    
    $('#btn8 , #inde').click(function() {
        $.getJSON(js+'json/inde.json', function(donnees) {
         $('#artiste').html('<h1> ' + donnees.h1 + '</h1>');
        $("#artiste h1").css("color","#E88575");
        $('#artiste').append('<h2> ' + donnees.h2 + '</h2>');
        
        $('#artiste').append('<p> ' + donnees.p1 + '</p>');
        
        $('#artiste').append('<div class="img1" id="inde1"></div>');
        $('#inde1').css('backgroundImage','url('+images+'harsh1.jpg)');
        
        $('#artiste').append('<p class="text-2"> ' + donnees.p2 + '</p>');
        $('#artiste').append('<div class="img2" id="inde2"></div>');
        $('#inde2').css('backgroundImage','url('+images+'harsh2.jpg)');
       
        $('#artiste').append('<div class="clear"></div>');
        
        $('#artiste').append('<div class="img3" id="inde3"></div>');
        $('#inde3').css('backgroundImage','url('+images+'harsh3.jpg)');
        
        $('#artiste').append('<p class="text-3"> ' + donnees.p3 + '</p>');
         $('#artiste').append('<div class="clear"></div>');
        
        
        });
    });
    
    $('#btn9 , #chine').click(function() {
        $.getJSON(js+'json/chine.json', function(donnees) {
         $('#artiste').html('<h1> ' + donnees.h1 + '</h1>');
        $("#artiste h1").css("color","#D45A98");
        $('#artiste').append('<h2> ' + donnees.h2 + '</h2>');
        
        $('#artiste').append('<p> ' + donnees.p1 + '</p>');
        
        $('#artiste').append('<div class="img1" id="chine1"></div>');
        $('#chine1').css('backgroundImage','url('+images+'dal1.jpg)');
        
        $('#artiste').append('<p class="text-2"> ' + donnees.p2 + '</p>');
        $('#artiste').append('<div class="img2" id="chine2"></div>');
        $('#chine2').css('backgroundImage','url('+images+'dal2.jpg)');
       
        $('#artiste').append('<div class="clear"></div>');
        
        $('#artiste').append('<div class="img3" id="chine3"></div>');
        $('#chine3').css('backgroundImage','url('+images+'dal3.jpg)');
        
        $('#artiste').append('<p class="text-3"> ' + donnees.p3 + '</p>');
         $('#artiste').append('<div class="clear"></div>');
        
        
        });
    });
    
    $('#btn10 , #russie').click(function() {
        $.getJSON(js+'json/russie.json', function(donnees) {
         $('#artiste').html('<h1> ' + donnees.h1 + '</h1>');
        $("#artiste h1").css("color","#BF96CE");
        $('#artiste').append('<h2> ' + donnees.h2 + '</h2>');
        
        $('#artiste').append('<p> ' + donnees.p1 + '</p>');
        
        $('#artiste').append('<div class="img1" id="russie1"></div>');
        $('#russie1').css('backgroundImage','url('+images+'nomerz1.jpg)');
        
        $('#artiste').append('<p class="text-2"> ' + donnees.p2 + '</p>');
        $('#artiste').append('<div class="img2" id="russie2"></div>');
        $('#russie2').css('backgroundImage','url('+images+'nomerz2.jpg)');
       
        $('#artiste').append('<div class="clear"></div>');
        
        $('#artiste').append('<div class="img3" id="russie3"></div>');
        $('#russie3').css('backgroundImage','url('+images+'nomerz3.jpg)');
        
        $('#artiste').append('<p class="text-3"> ' + donnees.p3 + '</p>');
         $('#artiste').append('<div class="clear"></div>');
        
        
        });
    });
    
    $('#btn11 , #australie').click(function() {
        $.getJSON(js+'json/australie.json', function(donnees) {
         $('#artiste').html('<h1> ' + donnees.h1 + '</h1>');
        $("#artiste h1").css("color","#92B960");
        $('#artiste').append('<h2> ' + donnees.h2 + '</h2>');
        
        $('#artiste').append('<p> ' + donnees.p1 + '</p>');
        
        $('#artiste').append('<div class="img1" id="australie1"></div>');
        $('#australie1').css('backgroundImage',"url("+images+'megg1.jpg');

        $('#artiste').append('<p class="text-2"> ' + donnees.p2 + '</p>');
        $('#artiste').append('<div class="img2" id="australie2"></div>');
        $('#australie2').css('backgroundImage',"url("+images+'megg2.jpg');

        $('#artiste').append('<div class="clear"></div>');

        $('#artiste').append('<div class="img3" id="australie3"></div>');
        $('#australie3').css('backgroundImage',"url("+images+'megg3.jpg');
        
        $('#artiste').append('<p class="text-3"> ' + donnees.p3 + '</p>');
         $('#artiste').append('<div class="clear"></div>');
        
        
        });
    });
    
    $('#accueil').click(function() {
        $('#artiste').html('<div id="accueil_content"><h1>Le Street Art</h1><h2>Qu\'est ce que c\'est?</h2><p>Le Street art est un art strictement visuel développé dans les espaces publics (ou en d\'autres mots, « dans les rues »). Le terme fait référence habituellement à l\'art non-autorisé, non-conforme aux initiatives sponsorisées par un gouvernement. Le terme peut inclure des illustrations graffiti traditionnelles, des sculptures, des graffitis au pochoir, le sticker art (autocollants), le street poster art (art de l\'affiche), les projections vidéo et le guerilla art. Typiquement, le terme Street art ou plus spécifiquement post-graffiti est utilisé pour distinguer l\'art public contemporain du graffiti territorial — le « tag » —, du vandalisme ou de l\'art corporatif. Certains artistes contestent la définition de l\'art en le situant dans des contextes non-conventionnels. Les artistes de rue tentent de faire en sorte que leurs œuvres communiquent avec le public sur des thèmes socialement pertinents en conservant un certain esthétisme, sans être emprisonnée par ces mêmes valeurs. John Fekner définit le street art comme étant : « tout art dans la rue qui n\'est pas du graffiti.</p><h2>Les Techniques</h2> <p>Les graffeurs traditionnels utilisent principalement de la peinture aérosol à main levée pour produire leurs œuvres. Le street art, par contre, englobe de nombreux autres médiums et techniques, y compris : l\'art LED, la mosaïque, la murale, l\'art du pochoir, le sticker art, la projection vidéo, les installations de rue et le yarn bombing. Le graffiti traditionnel est de plus en plus adopté comme une méthode de publicité ; il a même, dans certains cas, conduit des artistes à travailler sur des contrats en tant que graphistes. Cependant, le street art est une étiquette souvent adoptée par les artistes qui souhaitent garder leur travail non-affilié et politique. Les oeuvres de street art sont encore majoritairement faites sans approbation officielle. Pour ces raisons, le street art est parfois considéré comme « post-graffiti » et parfois même « néo-graffiti ». Le street art peut être observé partout dans le monde et les artistes de rue se déplacent souvent dans des pays étrangers afin de diffuser leurs créations.</p></div>');
    
    });
    
    
    
    */
  });