var textBesar = document.querySelector(".text-besar");
var clickPertama = true;
var textBesarArr = [];
console.log(textBesarArr);
for(x=0; x<document.querySelectorAll(".col").length; x++){
    document.querySelectorAll(".col")[x].addEventListener("click",(e)=>{
        var input = e.target.getAttribute("data-number"); //string
        
        inputNumber(input);
        aritmatika(input);
    });
}

function inputNumber(number){
    var inputNumberBoleh = ["1","2","3","4","5","6","7","8","9","0","00","000"];
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
        }else{
            return null;
        }
   }
}

function inputOperator(operator){
    var operatorBoleh = ["clear","del","/100","/","x","+","-","equal"];
    if(!clickPertama){
        if(operatorBoleh.includes(operator)){
            
        }
    }
}


function aritmatika(operator){
    var aritmatikaBoleh = ["/100","/","x","+","-"];

    if(!clickPertama){

        if(aritmatikaBoleh.includes(operator)){
            textBesar.innerHTML += operator;
            textBesarArr.push(operator);
        }
        console.log(typeof(textBesarArr));
        console.log(textBesarArr);
    }
}


