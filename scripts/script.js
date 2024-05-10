const container = document.getElementById("main-container");

async function getCharacters() {

  const apiUrl = "https://rickandmortyapi.com/api/character";

  try {
    const response = await fetch(apiUrl);

    if (response.ok) {
      const data = await response.json();
      const characters = data.results;

      const parsedCharacters = characters.map(parseJsonToCharacter);
      renderAllCharacters(parsedCharacters);
    } else {
      console.error("Error al obtener personajes:", response.status);
    }
  } catch (error) {
    console.error("Error general:", error);
  }
}

function parseJsonToCharacter(element) {
  return new Character(
    element.name,
    element.image,
    element.status,
    element.species
  );
}

function renderAllCharacters(characters) {
  container.innerHTML = ""; // 

  characters.forEach(character => {
    container.innerHTML += character.toHtml();
  });
}

getCharacters();

