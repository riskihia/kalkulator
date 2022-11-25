'use strict';

var textBesar = document.querySelector(".text-besar");
var clickPertama = true;
var textBesarArr = [];


for(var x=0; x<document.querySelectorAll(".col").length; x++){
    document.querySelectorAll(".col")[x].addEventListener("click",(e)=>{
        var input = e.target.getAttribute("data-number"); //string
        
        inputOperator(input);
        inputNumber(input);
        aritmatika(input);
        console.log(textBesarArr);
        console.log(textBesarArr.join(""));

    });
}

function inputNumber(number){
    var inputNumberBoleh = ["1","2","3","4","5","6","7","8","9"];
    var inputNumberTolak = ["0","00","000"];
   if(clickPertama){
        if(inputNumberTolak.includes(number)){
            return null;
        }
        if(inputNumberBoleh.includes(number)){
            textBesar.innerHTML = number;    
            textBesarArr[0] = number;
        }else{
            return null;
        }
        clickPertama = false;
   }else{
        if(inputNumberBoleh.includes(number)){
            textBesar.innerHTML += number;
            textBesarArr.push(number);
            
        }else if(inputNumberTolak.includes(number)){
            textBesar.innerHTML += number;
            console.log(typeof(number));
            if(number == "0"){
                textBesarArr[textBesarArr.length-1] *= 10;
            }else if(number == "00"){
                textBesarArr[textBesarArr.length-1] *= 100;
            }else{
                textBesarArr[textBesarArr.length-1] *= 1000;
            }
            
        }else{
            return null;
        }
   }
}

function inputOperator(operator){
    var operatorBoleh = ["clear","del","equal"];
    if(!clickPertama){
        if(operatorBoleh.includes(operator)){
            hapusClear(operator);
        }
    }
}
function hapusClear(operator){
    textBesar.innerHTML = "0";
    clickPertama = true;
    textBesarArr = [];
}

function aritmatika(operator){
    var aritmatikaBoleh = ["/100","/","x","+","-"];

    if(!clickPertama){
        if(aritmatikaBoleh.includes(textBesarArr[textBesarArr.length-1])){
            return null;
        }else{
            if(aritmatikaBoleh.includes(operator)){
                textBesar.innerHTML += operator;
                textBesarArr.push(operator);
            }
        }
    }
    // console.log(aritmatikaBoleh.includes(textBesarArr[textBesarArr.length-1]));
}
