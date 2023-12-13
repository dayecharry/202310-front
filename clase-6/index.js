/* 
    crear un formulario  donde pidas al usuario un nombre de película, y guardar cada nombre en un array cuando el usuario haga click en el botón de guardar
    1.- en el HTML creo el form y le pongo la clase --> input:text, buttom(guardar)
    2.- creo un array vacio  donde voy a guardar las peliculas
    3.- variable para guardar el input del formulario (querySelector)
    3.- variable para guardar el boton  del formulario
    (querySelector)
    4.- escuchar el evento click sobre el boton y crear la funcion manejadora del evento
    5.- Obtener el value del input
    5.- añadir al array el value del input
 */
const listMovies = [];
const listFav = [];
const inputMovie = document.querySelector('.movie');
const btn = document.querySelector('.btn');
const sectionList = document.querySelector('.list');
const sectionFav = document.querySelector('.listFav');
// pintar las peliculas en el HTML
function renderMovies(list) {
  //vacio la seccion, para que no se dupliquen
  sectionList.innerHTML = '';
  for (const movie of list) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    //input.setAttribute("type", "checkbox")
    input.value = movie;
    //input.classList.add("clasecss")
    input.classList.add('checkMovie');
    sectionList.appendChild(input);

    const p = document.createElement('p');
    const textP = document.createTextNode(movie);
    p.appendChild(textP);
    sectionList.appendChild(p);
  }
  addListenerCheckbox();
}

function renderFav() {
  sectionFav.innerHTML = '';
  for (const fav of listFav) {
    sectionFav.innerHTML += `<p>${fav}</p>`;
  }
}

//delete, obtener la posición del elemento dentro del array (findIndex, indexOf) , elimino el elemento con la posición indicada (splice(indice, cantidad) )
// filtrar  todos los elementos que sean diferentes al seleccionado a eliminar

function handleFav(event) {
  console.log(event);
  // del checkbox que ha clicado dame tu valor.
  const value = event.target.value;
  listFav.push(value);
  renderFav();
  console.log(listFav);
}

function addListenerCheckbox() {
  //input:[type="checkbox"]
  const listCheckbox = document.querySelectorAll('.checkMovie');
  for (const check of listCheckbox) {
    check.addEventListener('click', handleFav);
  }
}
function addMovie(value) {
  //listMovies.find((movie)=>movie.name === value)
  // el find cuando no encuentra el elemento  dentro del array devuelve undefined

  //verifico si el valor del input está incluido dentro del array,

  if (!listMovies.includes(value)) {
    listMovies.push(value);
  }
}

function handleClick(event) {
  event.preventDefault();
  const inputMovieValue = inputMovie.value;
  addMovie(inputMovieValue);
  renderMovies(listMovies);
  console.log(listMovies);
}

btn.addEventListener('click', handleClick);
