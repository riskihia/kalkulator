var textBesar = document.querySelector(".text-besar");
var clickPertama = true;

for(x=0; x<document.querySelectorAll(".col").length; x++){
    document.querySelectorAll(".col")[x].addEventListener("click",(e)=>{
        var input = e.target.getAttribute("data-number"); //string
        inputNumber(input);
    });
}

function inputNumber(number){
    var inputNumberBoleh = ["1","2","3","4","5","6","7","8","9","0","00","000"];
    var inputNumberTolak = ["0","00","000"];
    // var inputNumberBoleh = [1,2,3,4,5,6,7,8,9,0,00,000];
    console.log(number);
   if(clickPertama){
        if(inputNumberTolak.includes(number)){
            return null;
        }
        if(inputNumberBoleh.includes(number)){
            textBesar.innerHTML = number;    
        }else{
            return null;
        }
        console.log(clickPertama);
        clickPertama = false;
        
   }else{
        console.log(clickPertama);
        textBesar.innerHTML += number;
   }
}