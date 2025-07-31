// El principal objetivo de este desafío 
// es fortalecer tus habilidades en lógica de 
// programación. Aquí deberás desarrollar la 
// lógica para resolver el problema.

let listaDeAmigos = [];

function agregarAmigo(){
    let nombres = document.getElementById('amigo').value.trim();
    if(nombres !==""){
    listaDeAmigos.push(nombres);
    asignarTextoElemento('h3','Lista de amigos');
    ListarAmigos();
    limpiar();
    }
    
}

function ListarAmigos(){
 let listar = document.getElementById('listaAmigos');
 listar.innerHTML = "";

 for (let indice = 0; indice < listaDeAmigos.length; indice++) {
    let AgregarLista = document.createElement('li');
    AgregarLista.textContent = listaDeAmigos[indice];
    listar.appendChild(AgregarLista);
    
 }
}
 
function limpiar(){
   inputNombres = document.querySelector('#amigo').value = ''; 
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
