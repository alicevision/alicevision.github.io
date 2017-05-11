
var stepSelected = 0;
var stepActu = 0;
var timeToGo = 0;
var colorActiv = '#09abc6';
var colorPassiv = 'black';

var caseStep1 = document.getElementById('step1');
var caseStep2 = document.getElementById('step2');
var caseStep3 = document.getElementById('step3');
var caseStep4 = document.getElementById('step4');
var caseStep5 = document.getElementById('step5');
var caseStep6 = document.getElementById('step6');
var caseStep7 = document.getElementById('step7');
var caseStep8 = document.getElementById('step8');

var caseStep1Mini = document.getElementById('step1Mini');
var caseStep2Mini = document.getElementById('step2Mini');
var caseStep3Mini = document.getElementById('step3Mini');
var caseStep4Mini = document.getElementById('step4Mini');
var caseStep5Mini = document.getElementById('step5Mini');
var caseStep6Mini = document.getElementById('step6Mini');
var caseStep7Mini = document.getElementById('step7Mini');
var caseStep8Mini = document.getElementById('step8Mini');

var ligne1 = document.getElementById('l1b');
var ligne2 = document.getElementById('l2b');
var ligne3 = document.getElementById('l3b');
var ligne4 = document.getElementById('l4b');
var ligne5 = document.getElementById('l5b');
var ligne6 = document.getElementById('l6b');
var ligne7 = document.getElementById('l7b');

var ligne1Mini = document.getElementById('l1bMini');
var ligne2Mini = document.getElementById('l2bMini');
var ligne3Mini = document.getElementById('l3bMini');
var ligne4Mini = document.getElementById('l4bMini');
var ligne5Mini = document.getElementById('l5bMini');
var ligne6Mini = document.getElementById('l6bMini');
var ligne7Mini = document.getElementById('l7bMini');


caseStep1.addEventListener('click', function(){
    stepSelected = 1;
    stepFill(stepSelected);
});

caseStep2.addEventListener('click', function(){
    stepSelected = 2;
    stepFill(stepSelected);
});

caseStep3.addEventListener('click', function(){
    stepSelected = 3;
    stepFill(stepSelected);
});

caseStep4.addEventListener('click', function(){
    stepSelected = 4;
    stepFill(stepSelected);
});

caseStep5.addEventListener('click', function(){
  stepSelected = 5;
  stepFill(stepSelected);
});

caseStep6.addEventListener('click', function(){
    stepSelected = 6;
    stepFill(stepSelected);
});

caseStep7.addEventListener('click', function(){
    stepSelected = 7;
    stepFill(stepSelected);
});

caseStep8.addEventListener('click', function(){
    stepSelected = 8;
    stepFill(stepSelected);
});

caseStep1Mini.addEventListener('click', function(){
    stepSelected = 1;
    stepFill(stepSelected);
});

caseStep2Mini.addEventListener('click', function(){
    stepSelected = 2;
    stepFill(stepSelected);
});

caseStep3Mini.addEventListener('click', function(){
    stepSelected = 3;
    stepFill(stepSelected);
});

caseStep4Mini.addEventListener('click', function(){
    stepSelected = 4;
    stepFill(stepSelected);
});

caseStep5Mini.addEventListener('click', function(){
  stepSelected = 5;
  stepFill(stepSelected);
});

caseStep6Mini.addEventListener('click', function(){
    stepSelected = 6;
    stepFill(stepSelected);
});

caseStep7Mini.addEventListener('click', function(){
    stepSelected = 7;
    stepFill(stepSelected);
});

caseStep8Mini.addEventListener('click', function(){
    stepSelected = 8;
    stepFill(stepSelected);
});


function stepFill(nbrStep){
  if(nbrStep == 1){
    if(stepActu == 0){
      fillStep1();
    }else if(stepActu == 2){
      clearStep2();
    }else if(stepActu == 3){
      clearStep3();
      setTimeout(function(){clearStep2();}, 800);
    }else if(stepActu == 4){
      clearStep4();
      setTimeout(function(){clearStep3();
        setTimeout(function(){clearStep2();}, 800);}, 800);
    }
    else if(stepActu == 5){
      clearStep5();
      setTimeout(function(){clearStep4();
        setTimeout(function(){clearStep3();
          setTimeout(function(){clearStep2();}, 800);}, 800);}, 800);
    }else if(stepActu == 6){
      clearStep6();
      setTimeout(function(){clearStep5();
        setTimeout(function(){clearStep4();
          setTimeout(function(){clearStep3();
            setTimeout(function(){clearStep2();}, 800);}, 800);}, 800);}, 800);
    }else if(stepActu == 7){
      clearStep7();
      setTimeout(function(){clearStep6();
        setTimeout(function(){clearStep5();
          setTimeout(function(){clearStep4();
            setTimeout(function(){clearStep3();
              setTimeout(function(){clearStep2();}, 800);}, 800);}, 800);}, 800);}, 800);
    }else if(stepActu == 8){
      clearStep8();
      setTimeout(function(){clearStep7();
        setTimeout(function(){clearStep6();
          setTimeout(function(){clearStep5();
            setTimeout(function(){clearStep4();
              setTimeout(function(){clearStep3();
                setTimeout(function(){clearStep2();}, 800);}, 800);}, 800);}, 800);}, 800);}, 800);
    }
    stepActu = 1;
  }else if(nbrStep == 2){
    if(stepActu == 0){
      fillStep1();
      setTimeout(function(){fillStep2();}, 500);
    }
    else if(stepActu == 1){
      fillStep2();
    }
    else if(stepActu == 3){
      clearStep3();
    }
    else if(stepActu == 4){
      clearStep4();
      setTimeout(function(){clearStep3();}, 800);
    }
    else if(stepActu == 5){
      clearStep5();
      setTimeout(function(){clearStep4();
        setTimeout(function(){clearStep3();}, 800);}, 800);
    }else if(stepActu == 6){
      clearStep6();
      setTimeout(function(){clearStep5();
        setTimeout(function(){clearStep4();
          setTimeout(function(){clearStep3();}, 800);}, 800);}, 800);
    }else if(stepActu == 7){
      clearStep7();
      setTimeout(function(){clearStep6();
        setTimeout(function(){clearStep5();
          setTimeout(function(){clearStep4();
            setTimeout(function(){clearStep3();}, 800);}, 800);}, 800);}, 800);
    }else if(stepActu == 8){
      clearStep8();
      setTimeout(function(){clearStep7();
        setTimeout(function(){clearStep6();
          setTimeout(function(){clearStep5();
            setTimeout(function(){clearStep4();
              setTimeout(function(){clearStep3();}, 800);}, 800);}, 800);}, 800);}, 800);
    }
    stepActu = 2;      
  }else if(nbrStep == 3){
    if(stepActu == 0){
      fillStep1();
      setTimeout(function(){fillStep2();
        setTimeout(function(){fillStep3();}, 500);}, 500);    
    }
    else if(stepActu == 1){
      fillStep2();
      setTimeout(function(){fillStep3();},500);
    }
    else if(stepActu == 2){
      fillStep3();
    }
    else if(stepActu == 4){
      clearStep4();
    }
    else if(stepActu == 5){
      clearStep5();
      setTimeout(function(){clearStep4();}, 800);
    }
    else if(stepActu == 6){
      clearStep6();
      setTimeout(function(){clearStep5();
        setTimeout(function(){clearStep4();}, 800);}, 800);
    }
    else if(stepActu == 7){
      clearStep7();
      setTimeout(function(){clearStep6();
        setTimeout(function(){clearStep5();
          setTimeout(function(){clearStep4();}, 800);}, 800);}, 800);
    }
    else if(stepActu == 8){
      clearStep8();
      setTimeout(function(){clearStep7();
        setTimeout(function(){clearStep6();
          setTimeout(function(){clearStep5();
            setTimeout(function(){clearStep4();}, 800);}, 800);}, 800);}, 800);
    }
    stepActu = 3;
  }else if(nbrStep == 4){
    if(stepActu == 0){
      fillStep1();
      setTimeout(function(){fillStep2();
        setTimeout(function(){fillStep3();
          setTimeout(function(){fillStep4();}, 500);}, 500);}, 500);
    }
    else if(stepActu == 1){
      fillStep2();
      setTimeout(function(){fillStep3();
        setTimeout(function(){fillStep4();}, 500);}, 500);
    }
    else if(stepActu == 2){
      fillStep3();
      setTimeout(function(){fillStep4();}, 500);
    }else if(stepActu == 3){
      fillStep4();
    }
    else if(stepActu == 5){
      clearStep5();
    }
    else if(stepActu == 6){
      clearStep6();
      setTimeout(function(){clearStep5();}, 800);
    }
    else if(stepActu == 7){
      clearStep7();
      setTimeout(function(){clearStep6();
        setTimeout(function(){clearStep5();}, 800);}, 800);
    }else if(stepActu == 8){
      clearStep8();
      setTimeout(function(){clearStep7();
        setTimeout(function(){clearStep6();
          setTimeout(function(){clearStep5();}, 800);}, 800);}, 800);
    }
    stepActu = 4;
  }else if(nbrStep == 5){
    if(stepActu == 0){
      fillStep1();
      setTimeout(function(){fillStep2();
        setTimeout(function(){fillStep3();
          setTimeout(function(){fillStep4();
            setTimeout(function(){fillStep5();}, 500);}, 500);}, 500);}, 500);
    }
    else if(stepActu == 1){
      fillStep2();
      setTimeout(function(){fillStep3();
        setTimeout(function(){fillStep4();
          setTimeout(function(){fillStep5();}, 500);}, 500);}, 500);
    }
    else if(stepActu == 2){
      fillStep3();
      setTimeout(function(){fillStep4();
        setTimeout(function(){fillStep5();}, 500);}, 500);
    }else if(stepActu == 3){
      fillStep4();
      setTimeout(function(){fillStep5();}, 500);
    }else if(stepActu == 4){
      fillStep5();
    }
    else if(stepActu == 6){
      clearStep6();
    }
    else if(stepActu == 7){
      clearStep7();
      setTimeout(function(){clearStep6();}, 800);
    }
    else if(stepActu == 8){
      clearStep8();
      setTimeout(function(){clearStep7();
        setTimeout(function(){clearStep6();}, 800);}, 800);
    }
    stepActu = 5;
  }else if(nbrStep == 6){
    if(stepActu == 0){
      fillStep1();
      setTimeout(function(){fillStep2();
        setTimeout(function(){fillStep3();
          setTimeout(function(){fillStep4();
            setTimeout(function(){fillStep5();
              setTimeout(function(){fillStep6();}, 500);}, 500);}, 500);}, 500);}, 500);
    }
    else if(stepActu == 1){
      fillStep2();
      setTimeout(function(){fillStep3();
        setTimeout(function(){fillStep4();
          setTimeout(function(){fillStep5();
            setTimeout(function(){fillStep6();}, 500);}, 500);}, 500);}, 500);
    }
    else if(stepActu == 2){
      fillStep3();
      setTimeout(function(){fillStep4();
        setTimeout(function(){ fillStep5();
            setTimeout(function(){fillStep6();}, 500);}, 500);}, 500);
    }else if(stepActu == 3){
      fillStep4();
      setTimeout(function(){fillStep5();
        setTimeout(function(){fillStep6();}, 500);}, 500);
    }else if(stepActu == 4){
      fillStep5();
      setTimeout(function(){fillStep6();}, 500);
    }
    else if(stepActu == 5){
      fillStep6();
    }
    else if(stepActu == 7){
      clearStep7();
    }
    else if(stepActu == 8){
      clearStep8();
      setTimeout(function(){clearStep7();}, 800);
    }
    stepActu = 6;
  }else if(nbrStep == 7){
    if(stepActu == 0){
      fillStep1();
      setTimeout(function(){fillStep2();
        setTimeout(function(){fillStep3();
          setTimeout(function(){fillStep4();
            setTimeout(function(){fillStep5();
              setTimeout(function(){fillStep6();
                setTimeout(function(){fillStep7();}, 500);}, 500);}, 500);}, 500);}, 500);}, 500);
    }
    else if(stepActu == 1){
      fillStep2();
      setTimeout(function(){fillStep3();
        setTimeout(function(){fillStep4();
          setTimeout(function(){fillStep5();
            setTimeout(function(){fillStep6();
              setTimeout(function(){fillStep7();}, 500);}, 500);}, 500);}, 500);}, 500);
    }
    else if(stepActu == 2){
      fillStep3();
      setTimeout(function(){fillStep4();
        setTimeout(function(){fillStep5();
            setTimeout(function(){fillStep6();
              setTimeout(function(){fillStep7();}, 500);}, 500);}, 500);}, 500);
    }else if(stepActu == 3){
      fillStep4();
      setTimeout(function(){fillStep5();
        setTimeout(function(){fillStep6();
           setTimeout(function(){fillStep7();}, 500);}, 500);}, 500);
    }else if(stepActu == 4){
      fillStep5();
      setTimeout(function(){fillStep6();
        setTimeout(function(){fillStep7();}, 500);}, 500);
    }
    else if(stepActu == 5){
      fillStep6();
      setTimeout(function(){fillStep7();}, 500);
    }
    else if(stepActu == 6){
      fillStep7();
    }
    else if(stepActu == 8){
      clearStep8();
    }
    stepActu = 7;
  }  
  else if(nbrStep == 8){
    if(stepActu == 0){
      fillStep1();
      setTimeout(function(){ fillStep2();
        setTimeout(function(){fillStep3();
          setTimeout(function(){fillStep4();
            setTimeout(function(){fillStep5();
              setTimeout(function(){fillStep6();
                setTimeout(function(){fillStep7();
                  setTimeout(function(){fillStep8();}, 500);}, 500);}, 500);}, 500);}, 500);}, 500);}, 500);
    }
    else if(stepActu == 1){
      fillStep2();
      setTimeout(function(){fillStep3();
        setTimeout(function(){fillStep4();
          setTimeout(function(){fillStep5();
            setTimeout(function(){fillStep6();
              setTimeout(function(){fillStep7();
                setTimeout(function(){fillStep8();}, 500);}, 500);}, 500);}, 500);}, 500);}, 500);
    }
    else if(stepActu == 2){
      fillStep3();
      setTimeout(function(){ fillStep4();
        setTimeout(function(){ fillStep5();
            setTimeout(function(){fillStep6();
              setTimeout(function(){fillStep7();
                setTimeout(function(){fillStep8();}, 500);}, 500);}, 500);}, 500);}, 500);
    }else if(stepActu == 3){
      fillStep4();
      setTimeout(function(){fillStep5();
        setTimeout(function(){fillStep6();
           setTimeout(function(){fillStep7();
             setTimeout(function(){fillStep8();}, 500);}, 500);}, 500);}, 500);
    }else if(stepActu == 4){
      fillStep5();
      setTimeout(function(){fillStep6();
        setTimeout(function(){ fillStep7();
          setTimeout(function(){fillStep8();}, 500);}, 500);}, 500);
    }
    else if(stepActu == 5){
      fillStep6();
        setTimeout(function(){fillStep7();
          setTimeout(function(){fillStep8();}, 500); }, 500);
    }
    else if(stepActu == 6){
      fillStep7();
      setTimeout(function(){fillStep8();}, 500);
    }
    else if(stepActu == 7){
      fillStep8();
    }
    stepActu = 8;
  } 

}

function fillStep1(){
  caseStep1.style.border = '2px solid ' + colorActiv;
  caseStep1Mini.style.border = '2px solid ' + colorActiv;
}
function clearStep1(){
  caseStep1.style.border = '2px solid ' + colorPassiv;
  caseStep1Mini.style.border = '2px solid ' + colorPassiv;
}

function fillStep2(){
  setTimeout(function(){
    ligne1.style.width = '100px';
    ligne1.style.height = '2px';
    ligne1.style.marginRight = '0px';
    caseStep2.style.marginLeft = '-5px';
    
    ligne1Mini.style.width = '100px';
    ligne1Mini.style.height = '2px';
    ligne1Mini.style.marginRight = '0px';
    caseStep2Mini.style.marginLeft = '-5px';
    setTimeout(function(){
      caseStep2.style.border = '2px solid ' + colorActiv;
      caseStep2Mini.style.border = '2px solid ' + colorActiv;
    }, 500);       
  }, 500); 
}
function clearStep2(){
  setTimeout(function(){
    caseStep2.style.border = '2px solid ' + colorPassiv;     
    caseStep2Mini.style.border = '2px solid ' + colorPassiv;     
    setTimeout(function(){
      ligne1.style.width = '0px';
      ligne1.style.height = '2px';
      ligne1.style.marginRight = '100px';
      caseStep2.style.marginLeft = '-5px';

      ligne1Mini.style.width = '0px';
      ligne1Mini.style.height = '2px';
      ligne1Mini.style.marginRight = '100px';
      caseStep2Mini.style.marginLeft = '-5px';
      
    }, 500);       
  }, 500); 
}

function fillStep3(){
  setTimeout(function(){
    ligne2.style.width = '100px';
    ligne2.style.height = '2px';
    ligne2.style.marginRight = '0px';
    caseStep3.style.marginLeft = '-5px';

    ligne2Mini.style.width = '100px';
    ligne2Mini.style.height = '2px';
    ligne2Mini.style.marginRight = '0px';
    caseStep3Mini.style.marginLeft = '-5px';
      
    setTimeout(function(){
      caseStep3.style.border = '2px solid ' + colorActiv;
      caseStep3Mini.style.border = '2px solid ' + colorActiv;
    }, 500);       
  }, 500); 
}
function clearStep3(){
  setTimeout(function(){
    caseStep3.style.border = '2px solid ' + colorPassiv;     
    caseStep3Mini.style.border = '2px solid ' + colorPassiv;  
    setTimeout(function(){
      ligne2.style.width = '0px';
      ligne2.style.height = '2px';
      ligne2.style.marginRight = '100px';
      caseStep3.style.marginLeft = '-5px';

      ligne2Mini.style.width = '0px';
      ligne2Mini.style.height = '2px';
      ligne2Mini.style.marginRight = '100px';
      caseStep3Mini.style.marginLeft = '-5px';
      
    }, 500);       
  }, 500); 
}

function fillStep4(){
  setTimeout(function(){
    ligne3.style.width = '100px';
    ligne3.style.height = '2px';
    ligne3.style.marginRight = '0px';
    caseStep4.style.marginLeft = '-5px';

    ligne3Mini.style.width = '100px';
    ligne3Mini.style.height = '2px';
    ligne3Mini.style.marginRight = '0px';
    caseStep4Mini.style.marginLeft = '-5px';
      
    setTimeout(function(){
      caseStep4.style.border = '2px solid ' + colorActiv;
      caseStep4Mini.style.border = '2px solid ' + colorActiv;
    }, 500);       
  }, 500); 
}
function clearStep4(){
  setTimeout(function(){
    caseStep4.style.border = '2px solid ' + colorPassiv;     
    caseStep4Mini.style.border = '2px solid ' + colorPassiv;     
    setTimeout(function(){
      ligne3.style.width = '0px';
      ligne3.style.height = '2px';
      ligne3.style.marginRight = '100px';
      caseStep4.style.marginLeft = '-5px';

      ligne3Mini.style.width = '0px';
      ligne3Mini.style.height = '2px';
      ligne3Mini.style.marginRight = '100px';
      caseStep4Mini.style.marginLeft = '-5px';
    }, 500);       
  }, 500); 
}

function fillStep5(){
  setTimeout(function(){
    ligne4.style.width = '100px';
    ligne4.style.height = '2px';
    ligne4.style.marginRight = '0px';
    caseStep5.style.marginLeft = '-5px';

    ligne4Mini.style.width = '100px';
    ligne4Mini.style.height = '2px';
    ligne4Mini.style.marginRight = '0px';
    caseStep5Mini.style.marginLeft = '-5px';
      
    setTimeout(function(){
      caseStep5.style.border = '2px solid ' + colorActiv;
      caseStep5Mini.style.border = '2px solid ' + colorActiv;
    }, 500);       
  }, 500); 
}
function clearStep5(){
  setTimeout(function(){
    caseStep5.style.border = '2px solid ' + colorPassiv;     
    caseStep5Mini.style.border = '2px solid ' + colorPassiv;     
    setTimeout(function(){
      ligne4.style.width = '0px';
      ligne4.style.height = '2px';
      ligne4.style.marginRight = '100px';
      caseStep5.style.marginLeft = '-5px';

      ligne4Mini.style.width = '0px';
      ligne4Mini.style.height = '2px';
      ligne4Mini.style.marginRight = '100px';
      caseStep5Mini.style.marginLeft = '-5px';
      
    }, 500);       
  }, 500); 
}

function fillStep6(){
  setTimeout(function(){
    ligne5.style.width = '100px';
    ligne5.style.height = '2px';
    ligne5.style.marginRight = '0px';
    caseStep6.style.marginLeft = '-5px';

    ligne5Mini.style.width = '100px';
    ligne5Mini.style.height = '2px';
    ligne5Mini.style.marginRight = '0px';
    caseStep6Mini.style.marginLeft = '-5px';
      
      
    setTimeout(function(){
      caseStep6.style.border = '2px solid ' + colorActiv;
      caseStep6Mini.style.border = '2px solid ' + colorActiv;
    }, 500);       
  }, 500); 
}
function clearStep6(){
  setTimeout(function(){
    caseStep6.style.border = '2px solid ' + colorPassiv;     
    caseStep6Mini.style.border = '2px solid ' + colorPassiv;     
    setTimeout(function(){
      ligne5.style.width = '0px';
      ligne5.style.height = '2px';
      ligne5.style.marginRight = '100px';
      caseStep6.style.marginLeft = '-5px';

      ligne5Mini.style.width = '0px';
      ligne5Mini.style.height = '2px';
      ligne5Mini.style.marginRight = '100px';
      caseStep6Mini.style.marginLeft = '-5px';
    }, 500);       
  }, 500); 
}

function fillStep7(){
  setTimeout(function(){
    ligne6.style.width = '100px';
    ligne6.style.height = '2px';
    ligne6.style.marginRight = '0px';
    caseStep7.style.marginLeft = '-5px';
      
    ligne6Mini.style.width = '100px';
    ligne6Mini.style.height = '2px';
    ligne6Mini.style.marginRight = '0px';
    caseStep7Mini.style.marginLeft = '-5px';
    setTimeout(function(){
      caseStep7.style.border = '2px solid ' + colorActiv;
      caseStep7Mini.style.border = '2px solid ' + colorActiv;
    }, 500);       
  }, 500); 
}
function clearStep7(){
  setTimeout(function(){
    caseStep7.style.border = '2px solid ' + colorPassiv;     
    caseStep7Mini.style.border = '2px solid ' + colorPassiv;     
    setTimeout(function(){
      ligne6.style.width = '0px';
      ligne6.style.height = '2px';
      ligne6.style.marginRight = '100px';
      caseStep7.style.marginLeft = '-5px';

      ligne6Mini.style.width = '0px';
      ligne6Mini.style.height = '2px';
      ligne6Mini.style.marginRight = '100px';
      caseStep7Mini.style.marginLeft = '-5px';
      
    }, 500);       
  }, 500); 
}

function fillStep8(){
  setTimeout(function(){
    ligne7.style.width = '100px';
    ligne7.style.height = '2px';
    ligne7.style.marginRight = '0px';
    caseStep8.style.marginLeft = '-5px';

    ligne7Mini.style.width = '100px';
    ligne7Mini.style.height = '2px';
    ligne7Mini.style.marginRight = '0px';
    caseStep8Mini.style.marginLeft = '-5px';
      
    setTimeout(function(){
      caseStep8.style.border = '2px solid ' + colorActiv;
      caseStep8Mini.style.border = '2px solid ' + colorActiv;
    }, 500);       
  }, 500); 
}
function clearStep8(){
  setTimeout(function(){
    caseStep8.style.border = '2px solid ' + colorPassiv;  
    caseStep8Mini.style.border = '2px solid ' + colorPassiv;      
    setTimeout(function(){
      ligne7.style.width = '0px';
      ligne7.style.height = '2px';
      ligne7.style.marginRight = '100px';
      caseStep8.style.marginLeft = '-5px';
      
      ligne7Mini.style.width = '0px';
      ligne7Mini.style.height = '2px';
      ligne7Mini.style.marginRight = '100px';
      caseStep8Mini.style.marginLeft = '-5px';
      
    }, 500);       
  }, 500); 
}

var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

var prev;
var next;

prevBtn.addEventListener('click', function(){
  prev = stepSelected-1
    stepFill(prev);
    stepSelected = prev;
});
nextBtn.addEventListener('click', function(){
    next = stepSelected+1
    stepFill(next);
    stepSelected = next;
});