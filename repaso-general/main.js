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
9.- Escuchar evento sobre todas las bebidas, y al hacer click (la img, titulo, o lo quieran) meter un array
    .- Verificar si  ya lo tengo en fav
    .- Si no está lo añado
    .- y sino lo saco
10.- Pintar el listado de favoritos , añadir una X para eliminar
11.-  Escuchar eventos sobre todas las X --> al hacer click eliminar del array, volver a pintar el array de fav
*/
const sectionDrinks = document.querySelector('.drinks');
const sectionFavorites = document.querySelector('.favorite');
let drinksList = [];
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
            <article class="card">
                <img src="${eachDrink.strDrinkThumb}" class="img"/>
                <h3> ${eachDrink.strDrink}</h3>
            </article>
        `;
  }
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
