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
    //Crea un elemento li 
    let AgregarLista = document.createElement('li');
    //Se asigna los nombres de la lista de amigos a los li
    AgregarLista.textContent = listaDeAmigos[indice];
    //Aqui se agrega los elementos li a la lista con el id listaAmigos con la variable de listar
    listar.appendChild(AgregarLista);
    
 }
}

function sortearAmigo(){
   let indice = Math.floor(Math.random()*listaDeAmigos.length);
   let resultado = document.getElementById('resultado');
   let nombreSorteado = listaDeAmigos[indice];

   if(listaDeAmigos.length ===0){
    asignarTextoElemento('h3','Lista vacia'); 
   }else{
 resultado.innerHTML = `El amigo secreto es: ${nombreSorteado}`;
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
