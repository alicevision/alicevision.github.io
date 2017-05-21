
$(function() {
    var js      = "design/js/";

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
            $('.gp2 img').attr("src",'design/img/step_img/' + donnees.generalPrincipeIMG);

            $('.implementedAlgo').html("<h1>The algorithm</h1>");
            $('.implementedAlgo').append("<h2>" + donnees.algo1H2 + "</h2>");

            $('.implementedAlgo').append("<div id='algoImplemented1'></div>");
            $('#algoImplemented1').html("<h3>" + donnees.algo1 + "<h3>");
            $(' #algoImplemented1').append("<h4>" + donnees.algo1ATitle + "<h4>");
            $(' #algoImplemented1').append("<p>" + donnees.algo1Ap1 + "<p>");
            $(' #algoImplemented1').append("<p>" + donnees.algo1Ap2 + "<p>");

            $(' #algoImplemented1').append("<img src = 'design/img/step_img/" + donnees.nameIMG1 + "'/>");
            $(' #algoImplemented1').append("<p>" + donnees.algo1Ap3 + "<p>");
            $(' #algoImplemented1').append("<img src = 'design/img/step_img/" + donnees.nameIMG2 + "'/>");
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
            $(' #algoImplemented2').append("<img src = 'design/img/step_img/" + donnees.nameIMG1Algo2 + "'/>");
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
            $('.gp2 img').attr("src",'design/img/step_img/' + donnees.generalPrincipeIMG);

            $('.implementedAlgo').html("<h1>The algorithm</h1>");
            $('.implementedAlgo').append("<h2>" + donnees.algo1H2 + "</h2>");

            $('.implementedAlgo').append("<div id='algoImplemented1'></div>");
            $('#algoImplemented1').html("<h3>" + donnees.algo1 + "<h3>");
            $(' #algoImplemented1').append("<h4>" + donnees.algo1ATitle + "<h4>");
            $(' #algoImplemented1').append("<p>" + donnees.algo1Ap1 + "<p>");
            $(' #algoImplemented1').append("<p>" + donnees.algo1Ap2 + "<p>");

            $(' #algoImplemented1').append("<img src = 'design/img/step_img/" + donnees.nameIMG1 + "'/>");
            $(' #algoImplemented1').append("<p>" + donnees.algo1Ap3 + "<p>");
            $(' #algoImplemented1').append("<img src = 'design/img/step_img/" + donnees.nameIMG2 + "'/>");
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
            $(' #algoImplemented2').append("<img src = 'design/img/step_img/" + donnees.nameIMG1Algo2 + "'/>");
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

});