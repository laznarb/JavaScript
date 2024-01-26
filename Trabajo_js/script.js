//Cogemos el enlace a la API
const enlaceApi = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=50";
let coche = document.getElementById("coche");
//Llamamos al enlace
fetch(enlaceApi) //Aquí se llama a la URL
.then(function(response){
    return response.json(); //Cuando responde se formatean las respuestas a JSON
})
.then (function(json){
    console.log(json)
}); 