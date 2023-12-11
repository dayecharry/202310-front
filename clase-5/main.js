// selecciona el primer elemento del HTML con el selector dado
const h2 = document.querySelector('h2');
console.log(h2);

const h2Id = document.querySelector('#subtitulo');

console.log(h2Id);
const h2IdGetEl = document.getElementById('subtitulo');
console.log(h2IdGetEl);

const listParagraph = document.querySelectorAll('.paragraph');
console.log(listParagraph);

for (let i = 0; i < listParagraph.length; i++) {
  listParagraph[i].classList.add('text');
}

const section = document.querySelector('.section');
section.innerHTML = '<h2> Clase de javascript </h2>';

// dom avanzado
// creo un elemento
const p = document.createElement('p');
// indico quien es su padre
section.appendChild(p);
// creo un nodo de texto
const text = document.createTextNode('esta clase nadie pone cam ');
// indico quien es el padre del nodo de texto
p.appendChild(text);

const smallText = document.createElement('small');
const textSmall = document.createTextNode('este un texto insignificante');
smallText.appendChild(textSmall);
section.insertBefore(smallText, p);

// setAttribute--> asigna el valor a un atributo de una etiqueta
smallText.setAttribute('id', 'DNIsmall');
// getAttribute--> obtengo el valor de un atributo
console.log(smallText.getAttribute('id'));

const superheroes = [
  {
    name: 'Spiderman',
    power: 60,
    ciudad: 'nueva york',
    img: 'https://img2.rtve.es/i/?w=1600&i=1442912677842.jpg',
  },
  {
    name: 'Hulk',
    power: 150,
    ciudad: 'boston',
    img: 'https://e0.pxfuel.com/wallpapers/954/606/desktop-wallpaper-hulk-avengers-3d-animated.jpg',
  },
  {
    name: 'Superman',
    power: 500,
    ciudad: 'chicago',
    img: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/08/03/16595421832009.jpg',
  },
];
/* crear un 
  1.-   <article> por cada superhero ,
    <h2> -> nombre del heroe, 
    <p> -> power
    <img ></img>

*/
const sectionSuper = document.querySelector('.superheroes');

for (let i = 0; i < superheroes.length; i++) {
  const article = document.createElement('article');
  sectionSuper.appendChild(article);
  //creo el H2 con su contenido
  const titleH2 = document.createElement('h2');
  article.appendChild(titleH2);
  const textTitle = document.createTextNode(superheroes[i].name);
  titleH2.appendChild(textTitle);
  // creo el p con su contenido
  const pPower = document.createElement('p');
  article.appendChild(pPower);
  const textPower = document.createTextNode(superheroes[i].power);
  pPower.appendChild(textPower);
  // creo  la img con su ruta
  const superImg = document.createElement('img');
  superImg.setAttribute('src', superheroes[i].img);
  article.appendChild(superImg);
  // añado clases a los elementos  creados
  superImg.classList.add('imgSuper');
  article.classList.add('card');
}

//classList --> add, remove, contains
const country = ['España', 'Francia', 'Italia'];
const hobbies = ['leer', 'nadar', 'crossfit', 'ver tv'];
/*
    crear una lista desplegable con los paises, <select>
    crear un checkbox con los hobbies
*/
const countriesSection = document.querySelector('.countriesSection');
const countries = document.createElement('select');
countriesSection.appendChild(countries);

for (let i = 0; i < country.length; i++) {
  //creo la etiqueta option
  const option = document.createElement('option');
  // le añadimos el atributo value
  option.setAttribute('value', country[i]);
  //option.value = country[i]; value, src, href
  // creo el texto de las opciones
  const optionText = document.createTextNode(country[i]);
  // indico de quien es hijo el texto
  option.appendChild(optionText);
  // añado el option a la etiqueta select
  countries.appendChild(option);
}
