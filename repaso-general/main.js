/*
1.- pintar el listado de bebidas cuando carga la pagina que contengan en el nombre tequila,  (img, nombre)
2.- Poder buscar  por nombre cualquier bebida
3.- Al hacer click en una bebida que se añada a un  listado de mis bebidas favoritas
4.- pintar el listado los favoritos. 
5.- poder eliminar de favoritos.

DEFINICIÓN DE TAREAS

X 1.- crear HTML,  un contenedor para la lista principal y otro contenedor para  los fav, le añadimos la  clase para identificarlo
X 2.- En JS seleccionar los contenedores con querySelector("clase").
X 3.- Función para pedir los datos al servidor -> fetch()
X 4.- Función para pintar el listado de bebidas en el HTML
X 5.- Crear el form  en el html para buscar  la bebida por nombre (input:text, button-> buscar)
X 6.- escuchar evento sobre el botón de buscar
X 7.- en la handleClick-->  volver a pedir información al servidor --->  meterlo en un función fetch()
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${variable}
X 8.- Pintar las nuevas en el HTML  (ejecutar la función de pintar listado)
X 9.- Escuchar evento sobre todas las bebidas, y al hacer click (la img, titulo, o lo quieran) meter un array
    X .- Verificar si  ya lo tengo en fav
    X .- Si no está lo añado
    X .- Y si, si está lo saco
X 10.- Pintar el listado de favoritos , añadir una X para eliminar
11.-  Escuchar eventos sobre todas las X --> al hacer click eliminar del array, volver a pintar el array de fav
*/

/*
  refactorizar
  Unificar la función de renderizado
  1.- recibir el array a recorrer
  2.- recibir la sección donde vas a pintar
  3.- recibir un parámetro que indique si  el array es el de fav o no.
  4.- en caso que sea el array de favoritos  se poner el icono de la basura 
*/
const sectionDrinks = document.querySelector('.drinks');
const sectionFavorites = document.querySelector('.favorite');
let drinksList = [];
let drinkFavorite = [];
let drink = 'tequila';
const inputSearch = document.querySelector('.searchDrink');
const btnSearch = document.querySelector('.btnSearch');

// escuchar evento onSUbmit  sobre el form y poner un preventDefault

const handleInputSearch = (event) => {
  event.preventDefault();
  drink = inputSearch.value;
  getDataFromAPI(drink);
};
//change, input, keyup
btnSearch.addEventListener('click', handleInputSearch);
//inputSearch.addEventListener('input', handleInputSearch);

const renderDrinks = (drinksList) => {
  sectionDrinks.innerHTML = '';
  for (const eachDrink of drinksList) {
    sectionDrinks.innerHTML += `
            <article class="card" id="${eachDrink.idDrink}">
                <img src="${eachDrink.strDrinkThumb}" class="img"/>
                <h3> ${eachDrink.strDrink}</h3>
            </article>
        `;
  }
  const allCards = document.querySelectorAll('.card');
  for (const card of allCards) {
    card.addEventListener('click', handleClickFavorite);
  }
};

const renderDrinksFavorite = (drinks) => {
  sectionFavorites.innerHTML = '';
  for (const eachDrink of drinks) {
    sectionFavorites.innerHTML += `
            <article class="card fav ">
                <img src="${eachDrink.strDrinkThumb}" class="img"/>
                <h3> ${eachDrink.strDrink}</h3>
                <p class="delete" id="${eachDrink.idDrink}" > 
                <i class="fa-regular fa-trash-can"></i>
                 </p>
            </article>
        `;
  }
  const allX = document.querySelectorAll('.delete');
  for (const x of allX) {
    x.addEventListener('click', handleDeleteFavorite);
  }
};
const handleDeleteFavorite = (event) => {
  console.log(event.target.id);
  const indexElement = drinkFavorite.findIndex(
    (drink) => drink.idDrink === event.target.id
  );
  drinkFavorite.splice(indexElement, 1);
  renderDrinksFavorite(drinkFavorite);
};
const handleClickFavorite = (event) => {
  //console.log(event.target); //el elemento sobre  el cual ocurrio el evento CLICK
  //console.log(event.currentTarget.id); //el elemento sobre el cual  escuchando el evento <article>
  const clickedId = event.currentTarget.id;
  // buscar el elemento clicado dentro del array de favoritos
  const findElement = drinkFavorite.find(
    (drink) => drink.idDrink === clickedId
  );
  //obtengo toda la informacion de la bebida clicada
  const drinkClicked = drinksList.find((drink) => drink.idDrink === clickedId);

  console.log(findElement);
  //falsy -->  undefined, null, 0,  ""
  //findElement === undefined
  if (!findElement) {
    drinkFavorite.push(drinkClicked);
  } else {
    // findIndex > busca la posición de un elemento dentro del array
    const indexElement = drinkFavorite.findIndex(
      (drink) => drink.idDrink === clickedId
    );
    drinkFavorite.splice(indexElement, 1);
  }
  renderDrinksFavorite(drinkFavorite);
  console.log(drinkFavorite);
};

const getDataFromAPI = async (nameDrink) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameDrink}`
  );
  const responseJson = await response.json();
  drinksList = responseJson.drinks;
  console.log(drinksList);
  renderDrinks(drinksList);
};

const init = async () => {
  await getDataFromAPI(drink);
};

init();
