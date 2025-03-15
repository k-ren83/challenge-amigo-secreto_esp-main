// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variables
let nombreDeMisAmigos = "";
let listaAmigos = [];
let desplegarListaAmigo =document.getElementById ("listaAmigos");
let mostrarAmigoSecreto =document.getElementById ("resultado");

//para agregar amigos a la lista, y que se visualicen en el HTML
function agregarAmigo(){
    nombreDeMisAmigos = document.getElementById("amigo").value;
    if (nombreDeMisAmigos=="") {
        alert ("¡Error! Ingresa un nombre valido");
    } else if (listaAmigos.includes(nombreDeMisAmigos)){
        alert ("Nombre ya ingresado");
    } else{
    listaAmigos.push(nombreDeMisAmigos);
    console.log(listaAmigos);
       limpiarCaja();
    }
    desplegarListaAmigo.innerHTML += `<li> ${nombreDeMisAmigos}</li>`
   }

// para limpiar la caja
function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}

//para Sortear amigo
function sortearAmigo(){
    if(listaAmigos==""){
    alert ("!No hay nombres para sortear¡"); 
    } else{
let random = Math.floor(Math.random()* listaAmigos.length);
let amigoSecreto = listaAmigos [random]
desplegarListaAmigo.innerHTML ="";
mostrarAmigoSecreto.innerHTML = `El amigo secreto es: <li> ${amigoSecreto}</li>`;
}
}