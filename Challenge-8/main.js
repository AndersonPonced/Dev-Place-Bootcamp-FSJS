class NIF {

   dnis;
   letras;

   constructor(dnis) {
      this.dnis = dnis
      this.letra = this.calcularLetra();
   }


   calcularLetra() {

      let letras = ["T", "R", "W", "A", "G", "M ", "Y ", "F", "P", "D", "X", "B", "N", "J",
         "Z", "S ", "Q", "V", "H", "L", "C", "K", "E"];

      return letras[this.dnis % 23]
   }



   leer() {

      do {
         this.dnis = parseInt(prompt("Ingrese su Dni"))
      }
      while (this.dnis <= 0) {
         this.letras = this.calcularLetra();

      }



   }


   getDni() {

      return this.dnis


   }

   setDni(dnis) {

      this.dnis = dnis;


   }

   toString() {

      return "dni: " + this.dnis + "-" + this.letras;


   }

}

var nif = new NIF();
nif.leer();
alert(nif.toString());




class Motor {


   estado;

   constructor(estado) {
      this.estado = estado;

   }

   encendido(estado) {
      return this.estado = true;


   }

   apagado(estado) {
      return this.estado = false;

   }

}

class Rueda {

   estado;


   constructor(estado) {
      this.estado = estado;
   }

   inflar(estado) {

      return this.estado = true;

   }

   desinflar(estado) {


      return this.estado = false;


   }

}

class Ventana {


   estado;

   constructor(estado) {

      this.estado = estado;


   }

   abrir(estado) {
      this.estado = true;


   }
   cerrar(estado) {
      this.estado = false;


   }
}



class Puerta {


   estado;
   ventana;

   constructor(estado) {

      this.estado = estado;
      this.ventana = new Ventana();


   }

   abrir(estado) {
      this.estado = true;


   }
   cerrar(estado) {
      this.estado = false;


   }
}

class Coche {


   motor;
   puerta1;
   puerta2;
   rueda1;
   rueda2;
   rueda3;
   rueda4;

   constructor() {
      this.motor = new Motor();
      this.puerta1 = new Puerta();
      this.puerta2 = new Puerta();
      this.rueda1 = new Rueda();
      this.rueda2 = new Rueda();
      this.rueda3 = new Rueda();
      this.rueda4 = new Rueda();
   }


}


let auto = new Coche();



class Persona {

   nombre;
   edad;
   dni;

   constructor(nombre, edad, dni) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;


   }


   getNombre() {

      return this.nombre


   }

   setNombre(nombre) {

      this.nombre = nombre;


   }

   getEdad() {

      return this.edad


   }

   setEdad(edad) {

      this.edad = edad;


   }

   getDni() {

      return this.dni


   }

   setDni(dni) {

      this.dni = dni;


   }


   mostrar() {
   
      return "su nombre es: " + this.nombre + ", su edad es: " + this.edad + " y su dni es: " + this.dni;


   }

   real(){

    this.nombre = prompt("escribe tu nombre");
    this.edad = parseInt(prompt("escribe tu edad"));
    this.dni = parseInt(prompt("escribe tu dni"));

   }
   esMayorDeEdad(){

    if(this.edad >= 18){
 
      alert("es mayor de edad")

    }else{
      alert("es menor de edad")
    }

   }


}


let si = new Persona();
si.real()
si.esMayorDeEdad()
alert(si.mostrar());






var mostrarI = document.querySelector(".mostrar");
var ingresarI = document.querySelector(".ingresar");
var retirarI = document.querySelector(".retirar");
var text = document.querySelector(".text");
class Cuenta{

titular;
cantidad;

constructor(titular,cantidad){

this.titular = titular;
this.cantidad = cantidad;


}



getTitular() {

   return this.titular


}

setTitular(titular) {

   this.titular = titular;


}


getCantidad() {

   return this.cantidad


}

setEdad(cantidad) {

   this.cantidad = cantidad;


}
escribir(){
 text.value = this.titular
 


}

mostrar(){

return this.titular + " su cantidad de dinero es: " + this.cantidad;


}

ingresar(cantidad){
 
    
   this.cantidad = parseInt(prompt("Ingrese su dinero"))
   return this.titular + " ingreso: " + this.cantidad;

}

retirar(cantidad){
 
    
   this.cantidad.value = parseInt(prompt("Ingrese su dinero"))


}



}


var banco = new Cuenta();
banco.escribir();
banco.ingresar();
banco.retirar();
alert(banco)