//Cogemos el enlace a la API
const Api_inicio = "https://gateway.marvel.com/v1/public/";
const Api_characters = "characters";
const Api_APIKEY = "?ts=1000&apikey=26df109c2dadc2d98d71712ff2cd13d1&hash=c60feaebf8ac04d3cbc6327cc1c06fb1";
const personaje = document.getElementById("personaje");



//Llamamos al enlace
fetch(Api_inicio+Api_characters+Api_APIKEY) //Aquí se llama a la URL
    .then(function(response){
            return response.json(); //Cuando responde se formatean las respuestas a JSON
    })
    .then (function(json){
            //console.log(json);
            console.log(json.data.results);

            let personajes = json.data.results;
            let nombrePersonajes = "";
            let imagenPersonajes = "";
            for (let i=0; i<personajes.length; i++) {
                nombrePersonajes += "<div>"
                nombrePersonajes += "<h2>"+personajes[i].name+"</h2>";
                    let imagen = personajes[i].thumbnail.path + "." + personajes[i].thumbnail.extension;
                    imagenPersonajes = "<img src='"+imagen+"' >";
                nombrePersonajes += imagenPersonajes;
                nombrePersonajes += "</div>";
            }
            personaje.innerHTML = nombrePersonajes;
    }); 