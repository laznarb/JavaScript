let nombreUsuario = document.getElementById("usuario");
let contraUsuario = document.getElementById("contra");
let terminosUsuario = document.getElementById("condiciones");
let formularioUsuario = document.getElementById("formulario");

let msgID = document.getElementById("mayus");
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
    // Comprobar si el nombre comienza con mayúscula
    if (/^[A-Z]/.test(nombreRecogido)) {
        msgNombre.style.color = "green";
    } else {
        msgNombre.style.color = "red";
    }
}


idUsuario.addEventListener("change", validarNombre);
passUsuario.addEventListener("input", validarPass);
terminosUsuario.addEventListener("input", validarTerm);
