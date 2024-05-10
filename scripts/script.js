const container = document.getElementById("main-container")

async function getCharacters() {

    const response = await fetch ("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data);
    // TODO: Obtener los objetos desde el api de rick and morty (enlace en el documento). Haga uso de la funcion fetch. Puede usar async/await y la funcion json
    

    var characters = []

    for (const item of data.results){
        characters.push(parseJsonToCharacter(item));
    }
    // TODO: Recorra la lista json obtenida y convierta cada elemento (mapa) en un objeto Character y agreguelo a la lista characters.
    // Llame a la funcion parseJsonToCharacter para cada elemento del recorrido.
    

    renderAllCharacters(characters);
}

function parseJsonToCharacter(element) {

    return new Character (
    
    element.name,
    element.image,
    element.status,
    element.species,
    element.location.name
    
    )


    // TODO: Retorna un objeto de tipo "Character" a partir de un mapa (element) pasado como parametro
}

function renderAllCharacters(characters) {
    characters.forEach(character => {
        container.innerHTML += character.toHtml()
    })
}

getCharacters()
