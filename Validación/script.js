let nombreUsuario = document.getElementById("usuario");
let contraUsuario = document.getElementById("contra");
let terminosUsuario = document.getElementById("terminos");
let formularioUsuario = document.getElementById("formulario");

let msgNombre = document.getElementById("mayus");
let msgPass = document.getElementById("num");
let msgTerm = document.getElementById("aceptar");

function validarTerm(){
    let estadoCheckbox = terminosUsuario.checked;
    if(estadoCheckbox == true){
        msgTerm.style.color="green";
    }else{
        msgTerm.style.color="red";
    }
}

function validarPass() {
    let passRecogido = contraUsuario.value;
    if (/\d/.test(passRecogido)) {
        msgPass.style.color = "green";
    } else {
        msgPass.style.color = "red";
    }
}

function validarNombre() {
    let nombreRecogido = nombreUsuario.value;
    if (/^[A-Z]/.test(nombreRecogido)) {
        msgNombre.style.color = "green";
    } else {
        msgNombre.style.color = "red";
    }
}


nombreUsuario.addEventListener("input", validarNombre);
contraUsuario.addEventListener("input", validarPass);
terminosUsuario.addEventListener("input", validarTerm);
