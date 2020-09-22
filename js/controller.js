document.getElementById("calculate").addEventListener("click", saveClick);

document.getElementById("clear").onclick = function(){
    console.log("limpa");
    output.innerHTML= "";
}

function saveClick() {
    var saveValue = document.getElementById("number-value").value;
    result(saveValue);
}

function result(num){
    if(num <= 0 || num > 1000){
        alert("Escolha um valor de 1 até 1000");
    }else{
        output.innerHTML= "";
        output.style.display="block";
        clear.style.display="block";

        calc(num)
    }
}

function calc(num){
    for(var i = 1; i <= 10; i++){
        var result = num * i + "<hr>";
        output.innerHTML += num + " * " + i + " = " + result;
    }
}




    
