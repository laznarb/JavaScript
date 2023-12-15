//Localizo el elemento del HTML con el que interactuo
const botonSuma = document.getElementById("suma");
const contadorElemento = document.getElementById("salida");
let contadorGlobal = contadorElemento.innerHTML;
//también se puede usar console.log(contadorElemento.textContent);

//Declaro la función que quiero que suceda cuando pulsen el botón
function accionSumar(){
    contadorGlobal++;
    console.log(contadorGlobal);
    contadorElemento.innerHTML = contadorGlobal;
}

//Asocio la acción al botón y especifico el evento que lo desencadena
    //Necesito especificar la acción y la función que queremos que se realice
botonSuma.addEventListener("click",accionSumar);

