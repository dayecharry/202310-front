console.log('ready');
// selecciono todos los elementos del HTML
const input = document.querySelector('.jsInput');
const btn = document.querySelector('.jsBtn');
const ulList = document.querySelector('.listCharacters');

// funcion para pedir datos al servidor
const getDataApi = async (valueInput) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${valueInput}`
  );
  const responseJson = await response.json();
  return responseJson;
};

// creo un elemento li por cada personaje que hay dentro del array devuelto por la API
const renderData = (data) => {
  console.log(data);
  ulList.innerHTML = '';
  for (const character of data.results) {
    const li = document.createElement('li');
    ulList.appendChild(li);
    const text = document.createTextNode(character.name);
    li.appendChild(text);
  }
};

// ejecuto  la función init   pedir los datos al servidor
const init = async (valueInput) => {
  const respuesta = await getDataApi(valueInput);
  renderData(respuesta);
};

// función manejadora del evento click sobre el boton
const handleClick = (event) => {
  event.preventDefault();
  const valueInput = input.value;
  init(valueInput);
};

// escucho el evento click sobre el boton para desencadenar la peticion a la API
btn.addEventListener('click', handleClick);

/*
const init = async () => {
  const respuesta = await getDataApi();
  renderData(respuesta);
  const xyz = 'dayana';
  console.log(xyz);
};
init();
*/
