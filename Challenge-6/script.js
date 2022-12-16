var tarea1 = document.querySelector(".tarea-1");
var boton1 = document.querySelector(".boton-1");

//Segunda tarea//

var tarea2 = document.querySelector(".tarea-2");
var boton2 = document.querySelector(".boton-2");

//Tercera tarea//

var tarea3 = document.querySelector(".tarea-3");
var boton3 = document.querySelector(".boton-3");


//Cuarta tarea//

var tarea4 = document.querySelector(".tarea-4");
var boton4 = document.querySelector(".boton-4");

//Quinta tarea//

var tarea5 = document.querySelector(".tarea-5");
var boton5 = document.querySelector(".boton-5");

//6 tarea//

var tarea6 = document.querySelector(".tarea-6");
var boton6 = document.querySelector(".boton-6");

//7 tarea//

var boton7 = document.querySelector(".boton-7");

function precios(){
var precio = tarea1;
var iva = 21;

var calculo = precio.value * iva;
var calculo2 = precio.value + calculo /100;

alert(calculo2);


}


function juego(){

       

if(tarea2.value == 1){
alert("Solo puedes ingresar a: Consolas")


}else if(tarea2.value == 2){
    alert("Solo puedes ingresar: Consolas y Juegos 2D ")


}else if(tarea2.value == 3){
    alert("Solo puedes ingresar a: Consolas, Juegos 2D y Juegos 3D")

}else if(tarea2.value == 4){
    alert("Puedes ingresar a todas las secciones: Consolas, Juegos 2D, Juegos 3D y Realidad Virtual")

}else if(tarea2.value > 4){
    alert("No se pueden ingresar numeros mayores a 4")


}else if(tarea2.value < 0){
    alert("No se pueden ingresar numeros menores a 0")
}
}

function coches(){

       

    if(tarea3.value == 1 || tarea3 == "gasolina"){
    alert("100 para la oficina")
    
    
    }else if(tarea3.value == 2 || tarea3.value == "diesel"){
        alert("200 para la oficina")
    
    
    }else if(tarea3.value == 3 || tarea3.value == "electronico"){
        alert("300 para la oficina")
    
    
    }else if(tarea3.value > 3){
        alert("No se pueden ingresar numeros mayores a 4")
    
    
    }else if(tarea3.value < 0){
        alert("No se pueden ingresar numeros menores a 0")
    }
    }
    

    function negocio(){

       

        if(tarea4.value < 100 ){
        alert("No hay descuento")
        
        
        }else if(tarea4.value >= 100 && tarea4.value <=300 ){
            alert("Tiene un descuento de un 5%")
        
        
        }else if(tarea4.value >= 100 && tarea4.value <= 500){
            alert("Tiene un descuento de un 10%")
        
        
        }else if(tarea4.value > 400){
            alert("Tiene un descuento de un 10%")
        
        
        }else if(tarea4.value < 0){
            alert("No se pueden ingresar numeros menores a 0")
    
        }else if(tarea4.value > 600){
            alert("No se pueden ingresar numeros mayores a 600")
        }
        }
    


        function bucle(){

      for (let i = 0; i <= tarea5.value; i++) {
        document.write([i] + ",")
        
      }



        }

        let i = 0;

        function resto(){
            for (let i = 0; i <= tarea6.value; i++) {

                if(tarea6.value%2 ===0){
                console.log(tarea6.value[i] + ",")
                }else{

                    console.log("");
    
                  }
            
              }
     
        
      }


function media(){

 
var tarea7 = parseFloat(prompt("Escribe el primer numero"));
var tarea71 = parseFloat(prompt("Escribe el primer numero"));
var tarea72 = parseFloat(prompt("Escribe el primer numero"));
var tarea73 = parseFloat(prompt("Escribe el primer numero"));

var calculo = tarea7 + tarea71 + tarea72 + tarea73/4;

alert(calculo);
   


}

        



boton1.onclick = precios;
boton2.onclick = juego;
boton3.onclick = coches;
boton4.onclick = negocio;
boton5.onclick = bucle;
boton6.onclick = resto;
boton7.onclick = media;