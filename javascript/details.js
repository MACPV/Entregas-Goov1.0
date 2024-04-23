/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");
/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";

/*
const entrada = prompt("¿Cuál es tu nombre?");
console.log(entrada); 
const mensaje = "Bienvenido "+ entrada;
alert(mensaje); */

const numero1 = Number(prompt("Ingrese primer número"));
const numero2 = Number(prompt("Ingrese segundo número"));
const suma =numero1 +numero2;
const mensajeSuma = "El resultado de la suma es "+suma;
alert(mensajeSuma);