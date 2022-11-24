var textBesar = document.querySelector(".text-besar");

for(x=0; x<document.querySelectorAll(".col").length; x++){
    document.querySelectorAll(".col")[x].addEventListener("click",(e)=>{
        var input = e.target.getAttribute("data-number");
        textBesar.innerHTML = start(input);
    });
}

function start(tombolParam){
    var tombolBoleh = ["clear","del","/100","/","x","+","-","equal"];
    if(tombolBoleh.includes(tombolParam)){
        console.log("tidak berfungsi");
    }else{
        textBesar.innerHTML = "";
        return tombolParam;
    }
}