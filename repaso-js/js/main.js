const btnPets = document.querySelector('.btn-pets');
const btnPerson = document.querySelector('.btn-person');
const btnProduct = document.querySelector('.btn-product');
const sectionList = document.querySelector('.list-element');

const person = [
  { name: 'maria', desc: 'es una chica maja' },
  { name: 'luis', desc: 'es una chico  muy alto' },
];

const pets = [
  { name: 'fifi', desc: 'es muy cariñosa' },
  { name: 'fofo', desc: 'es arisco' },
];
const products = [
  { name: 'vestido', desc: ' es vaquero', price: 25 },
  { name: 'pantalon', desc: 'pantalon de brilli brilli', price: 35 },
];

const renderList = (array, id) => {
  sectionList.innerHTML = '';
  const ul = document.createElement('ul');
  sectionList.appendChild(ul);
  ul.classList.add('ul-' + id);
  for (let i = 0; i < array.length; i++) {
    const li = document.createElement('li');
    ul.appendChild(li);
    if (id === 'product') {
      li.textContent = array[i].name + ' Precio: ' + array[i].price;
    } else {
      li.textContent = array[i].name;
    }
  }
};

const handleClick = (event) => {
  event.preventDefault();
  const idBtn = event.target.id;
  let nameArray = '';
  if (idBtn === 'pet') {
    nameArray = pets;
  } else if (idBtn === 'person') {
    nameArray = person;
  } else {
    nameArray = products;
  }
  renderList(nameArray, idBtn);
};

btnPerson.addEventListener('click', handleClick);
btnPets.addEventListener('click', handleClick);
btnProduct.addEventListener('click', handleClick);

//spread Operator

const newPets = pets;
pets[1].name = 'zeus';
console.log(newPets);
console.log(pets);

const newPetsSpread = [...pets];
newPetsSpread[2] = {
  name: 'camilo',
  desc: 'es muy cariñoso',
};
console.log(newPetsSpread);

const superheroe = {
  name: 'superman',
  type: 'heroe',
};

const newSuper = {
  ...superheroe,
  power: 250,
};
console.log(newSuper);
// destructuring
const { name, type } = superheroe;
console.log(name);

const frutas = ['manzana', 'pera', 'uva'];

const [fruta1, fruta2, fruta3] = frutas;
console.log(fruta1);
console.log(fruta3);

const personData = {
  name: 'ana',
  lastname: 'Ramirez',
  age: 30,
};

/*function showPerson(objeto) {
  console.log(`El nombre es: ${objeto.name} y la edad es ${objeto.age}`);
}*/
function showPerson({ name, lastname, age }) {
  console.log(`El nombre es: ${name} y la edad es ${age}`);
}
showPerson(personData);

function showFruits([f1, f2, f3]) {
  console.log(`las frutas son: ${f1},${f2},${f3}, `);
}
showFruits(frutas);

const productsList = [
  { name: 'vestido', desc: ' es vaquero', price: 25 },
  { name: 'pantalon', desc: 'pantalon de brilli brilli', price: 35 },
];
function showProduct([product1, product2]) {
  console.log(product1.name);
  console.log(product2.name);
}
showProduct(productsList);
