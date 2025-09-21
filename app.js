// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
console.log(nombres);
let cantidadDeAmigos=0; 
let amigosSalieron=[]; 



function agregarAmigo() {
    let nombreIngresado = document.getElementById('amigo').value;

    if(nombreIngresado == ''){
        alert('por favor, inserte un nombre');

    }else{
        nombres.push(nombreIngresado);
        limpiarCaja();
        asignarListaElemento('ul',`${nombres.map(amigo => `<li>${amigo}</li>`).join('')}` );
    }



    
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
    
}
function asignarListaElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}



function sortearAmigo(){

    //validar si hay amigos disponibles
    if(nombres.length == 0){
        alert ('No hay amigos para sortear.');
        
        return;
    }else{
        let AmigoElegido= Math.floor(Math.random()*nombres.length);



            alert(`tu amigo secreto es: ` + nombres[AmigoElegido]);
        
        }
        

    }



/*
asignarListaElemento('h2', 'Digite el numero de amigos con el que desea jugar');


function GCantidad(){
    cantidadDeAmigos = document.getElementById ('cantidad').value;
    console.log(cantidadDeAmigos);
    document.getElementById("cantidad").style.display = "none";
    document.getElementById("guardar").style.display = "none";

}
*/

