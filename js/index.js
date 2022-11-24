var textBesar = document.querySelector(".text-besar");
var clickPertama = true;

for(x=0; x<document.querySelectorAll(".col").length; x++){
    document.querySelectorAll(".col")[x].addEventListener("click",(e)=>{
        var input = e.target.getAttribute("data-number");
        var inputSalah = ["0","00","000"];
        if(clickPertama && inputSalah.includes(input)){
            textBesar.innerHTML = "";
            if(inputSalah.includes(start(input))){
                textBesar.innerHTML = "0";
            }else{
                textBesar.innerHTML += start(input);
            }
            clickPertama = false;
        }else{
            textBesar.innerHTML += start(input);
        }
    });
}

function start(tombolParam){
    var tombolBoleh = ["clear","del","/100","/","x","+","-","equal"];
    if(tombolBoleh.includes(tombolParam)){
        return "";
    }else{
        return tombolParam;
    }
}