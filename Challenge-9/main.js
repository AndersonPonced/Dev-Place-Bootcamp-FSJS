
let agregar = document.querySelector(".agregar");
let boton = document.querySelector(".boton");
let input = document.querySelector(".nombre-text").value;
let caja = [];



boton.addEventListener("click", ()=>{

    alert("Este input esta fuera de servicio");



})





class Lista{
 
 producto;

constructor(producto){
    this.producto = producto;
}



}




agregar.addEventListener("click", ()=>{

    let producto = document.querySelector(".agregar1").value;

    let nuevo = new Lista(producto);
    caja.push(nuevo);
    datos();
    console.log(caja)



})


function datos(){

var v = "";

caja.forEach((nuevo,index)=>{

 v += '<ul><li>' + nuevo.producto + '</ul></li>'

})

document.getElementById("tabla").innerHTML = v;

}


