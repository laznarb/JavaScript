// Mapeo los campos que voy a necesitar
const numElegido = document.getElementById("guessField");
const botonSubmit = document.getElementById("guessSubmit");
const numPruebas = document.getElementById("guesses");
const numResultado = document.getElementById("lastResult");
const pista = document.getElementById("lowOrHi");

// Generamos un número aleatorio
const numeroRandom = Math.floor(Math.random() * 100) + 1;
console.log("Numero generado: " + numeroRandom);

// Cuando haces click recupero el valor del usuario
botonSubmit.addEventListener("click", ()=>{
    const numUSuario = numElegido.value;
    let intentos = 0;
    const maximo = 10;
    if (numUSuario == numeroRandom){
        pista.innerHTML = "Acertaste!!";
    } else if(numUSuario > numeroRandom){
        pista.innerHTML = "Más pequeño";
    }else{
        pista.innerHTML = "Más grande";
    }
    
    //Cuantas prubas llevo
    intentos++;
    numPruebas.innerHTML = "Llevas " + intentos + " intentos de " + maximo;

    //Numero probados
    numResultado.innerHTML += " "+numUSuario;

    //Bloqueo si llego al límite
    if (intentos>=maximo){
        botonSubmit.setAttribute("disable", true);
    }
})