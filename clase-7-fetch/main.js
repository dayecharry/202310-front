//https://dog.ceo/dog-api/

// API
// asincronia -->
// promesas o peticiones al servidor,

console.log(1);
/*
fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(2);
    const imgSection = document.querySelector('.imgSection');
    imgSection.innerHTML = `
    <img src= "${data.message}"/>
    `;
  });
*/
// pintar  el listado de personajes de la API de rick and morty

const sectionCharacters = document.querySelector('.characters');
function renderCharacter(character) {
  const char = `
            <article>
                <img src="${character.image}"/>
                <h3> ${character.name}</h3>
                <p> ${character.status}</p>
            </article>
        `;
  return char;
}
function getDataApi() {
  fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((dataApi) => {
      console.log(dataApi);
      for (const character of dataApi.results) {
        sectionCharacters.innerHTML += renderCharacter(character);
      }
    });
}
// inicia la pagina
getDataApi();
