const url = "ttps://jsonplaceholder.typicode.com";
const mainSection = document.getElementById("posts");

//Realizamos la llamada al API 
fetch(url+"/post") //Llama a la url
    .then(function(response) {
        return response.json(); //Cuando responde, las respuestas son formateadas como JSON
    })
    .then(function(json){
        for(let i = 0; i < json.lenght; i++){
            let articlePost = document.createElement("article");
            let articleTitulo = document.createElement("h2");
            let articleBody = document.createElement("p");
            articleTitulo.innerHTML
        }
    })