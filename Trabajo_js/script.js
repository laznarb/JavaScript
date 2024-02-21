// Cogemos el enlace a la API
const Api_inicio = "https://gateway.marvel.com/v1/public/";
const Api_characters = "characters";
const Api_APIKEY = "?ts=1000&apikey=26df109c2dadc2d98d71712ff2cd13d1&hash=c60feaebf8ac04d3cbc6327cc1c06fb1";
const personaje = document.getElementById("personaje");
const botonColor = document.getElementById("cambio");

// Llamamos al enlace
fetch(Api_inicio + Api_characters + Api_APIKEY)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        let personajes = json.data.results;
        let nombrePersonajes = "";

        for (let i = 0; i < personajes.length; i++) {
            nombrePersonajes += "<div class=contenedores>";
            nombrePersonajes += "<h2>" + personajes[i].name + "</h2>";
            let imagen = personajes[i].thumbnail.path + "." + personajes[i].thumbnail.extension;
            let imagenPersonajes = "<img src='" + imagen + "' class='personaje-img' data-personaje-id='" + personajes[i].id + "'>";
            nombrePersonajes += imagenPersonajes;
            nombrePersonajes += "</div>";
        }

        personaje.innerHTML = nombrePersonajes;
})
function modoOscuro() {
    var body = document.querySelector('body');
    var contenedor = document.querySelectorAll('.contenedores');
    var h1 = document.querySelector('h1');
    if (!botonColor.checked) {
        h1.style.backgroundColor = "red";
        body.style.backgroundImage = "url(fondo1.jpg)";
        contenedor.forEach(function (contenedores) {
            contenedores.style.backgroundColor = "white";
            var h2 = contenedores.querySelector('h2');
            if (h2) {
                h2.style.color = "black";
            }
        });
    } else {
        h1.style.backgroundColor = "black";
        body.style.backgroundImage = "url(fondo2.jpg)";
        contenedor.forEach(function (contenedores) {
            contenedores.style.backgroundColor = "black";
            var h2 = contenedores.querySelector('h2');
            if (h2) {
                h2.style.color = "white";
            }
        });
    }
}
botonColor.addEventListener('change',modoOscuro);