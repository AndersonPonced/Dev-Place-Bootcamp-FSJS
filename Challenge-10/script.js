//Punto 1

let btn = document.querySelector(".comenzar");

btn.addEventListener("click", ()=>{

let num1 = prompt("Escribe un numero")
let signo = prompt("suma: +, resta: -, multiplicación: x, division: /.")
let num2 = prompt("Escribe otro numero")

switch (signo) {
    case "+":

        alert(num1 + num2);


        break;

    case "-":

        alert(num1 - num2);


        break;

    case "x":

        alert(num1 * num2);


        break;

    case "/":

        alert(num1 / num2);


        break;

    default:
        break;
}

})

//Punto 2


let btn2 = document.querySelector(".comenzar2");

let caja = [];

class Ingresar{

   numeritos;
   
     constructor(numeritos){

     this.numeritos = numeritos;


     }




}
 

btn2.addEventListener("click", ()=>{

    let numeros = document.querySelector(".numeros").value;
    let nuevo = new Ingresar(numeros);

    caja.push(nuevo);
    console.log(caja);

    let max = 10;

    if (max == caja.length) {
        
        
        datos()
        for (let i = 0; i < caja.length; i++) {
            if (caja[i]>=10){
            console.log(caja[i]);
       }
    }
    
    
    
    
    function menorQue(n){return m => m < n }
    
    menorQue10 = menorQue(10);
    console.log(menorQue10(11))
    
     

    }
   

})


function datos() {
    
  var v = "";

  caja.forEach((nuevo,index)=> {
    

  v += '<p>' + nuevo.numeritos + '</p>';





  });

document.querySelector(".tabla").innerHTML = v;


}
 


