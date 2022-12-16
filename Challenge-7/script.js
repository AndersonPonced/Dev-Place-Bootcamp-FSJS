var btn1 = document.querySelector(".btn1")
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var btn4 = document.querySelector(".btn4");


function tarea1(){

var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",);

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
    
}}



function responder(){
    
    var preguntar = parseInt(prompt("Escribe un numero"));

    var esPrimo = true;
    
    
    for (let i = 2; i < preguntar / 2 ; i++) {
     
    
        if (preguntar % i === 0) {
            esPrimo = false;
        }
        
    }
    
    if (esPrimo) {
        alert("es primo " + preguntar);
    }else{alert("no es primo " + preguntar) ;}
    }


var cadena = document.querySelector(".text-1")


    function tarea3(){

var resultado = `la cadena\"  ${cadena.value}\"`;

if(cadena.value === cadena.toUpperCase()){


    resultado =  "Esta formado por mayusculas";

}else if(cadena.value === cadena.toLowerCase()){

    resultado = "Esta formado por minusculas";


   }else{resultado ="Esta formado por mayusculas y minusculas"};

return resultado;
    }








    
    var resultado =1;

function CalcularFactorial(){
    var text2 = parseInt(prompt("Escribe un numero"));

 for (let i = 1; i <= text2; i++) {
    
    resultado = resultado * i;
 }

 alert("El factorial de tu numero " +text2+ " es: "+resultado)


}

btn1.onclick= tarea1;
btn2.onclick= responder;
btn3.onclick= tarea3;
btn4.onclick= CalcularFactorial;