const productos = [
  { nombre: 'refresco', precio: 3, stock: 50 },
  { nombre: 'Chocolate', precio: 5, stock: 150 },
  { nombre: 'Pan', precio: 4, stock: 10 },
];
const productos2 = [
  { nombre: 'refresco', precio: 3, stock: 50 },
  { nombre: 'Chocolate', precio: 5, stock: 150 },
  { nombre: 'Pan', precio: 4, stock: 10 },
];
productos.push({ nombre: 'roscon', precio: 10, stock: 5 });
productos.pop(); // elimina el ultimo elemento del array
console.log(productos);

//productos.splice(1, 1); // eliminar uno o varios elementos de mi array, primer valor desde donde comienzo a eliminar y el segundo cuantos elementos quiero eliminar

const sustituto = { nombre: 'cerveza', precio: 2, stock: 10 };
productos.splice(2, 1, sustituto); // sustituir un elemento por otro
productos.reverse();
console.log(productos);

// metodos que no modifican el array original

const firstElement = productos.slice(0, 1);
console.log(productos);
console.log(firstElement);

const nuevoArray = productos.concat(productos2);
console.log(nuevoArray);

const names = ['alberto', 'maria', 'nerea', 'arom'];
console.log(names.includes('maria')); // busca un elemento en el array y si lo encuentra devuelve true sino false
console.log(names.indexOf('dayana')); // devuelve la posicion del elemento dentro del array y si no lo encuentra retorna  -1 (solo funciona para array simples)

// Buscar a "arom" dentro del array, y si lo encuentra mostrar en consola la posicion y sino enviar msj de error
const posicion = names.indexOf('arom');
if (posicion === -1) {
  console.log('Elemento no se encuentra');
} else {
  console.log('la posicion es ' + posicion);
}

const characters = [
  { name: 'batman', tipo: 'heroe', power: 40, defense: 130 },
  { name: 'spiderman', tipo: 'heroe', power: 60, defense: 230 },
  { name: 'joker', tipo: 'VILLANO', power: 100, defense: 30 },
  { name: 'superman', tipo: 'heroe', power: 150, defense: 70 },
  { name: 'duende verde', tipo: 'VIllano', power: 90, defense: 110 },
  { name: 'Dr. Octopus', tipo: 'villano', power: 220, defense: 150 },
];

// metodos funcionales de array

//findIndex este lo usaremos para array de objetos, devuelve la posicion del elemento dentro del array
const positionCharacter = characters.findIndex(
  (elemento) => elemento.name === 'batman'
);
console.log(positionCharacter);
// filter --> filtra los elementos que cumplan una condicion dada
const heroesCharacters = characters.filter(
  (elemento) => elemento.tipo === 'heroe'
);
console.log(heroesCharacters);

// find --> buscar el primer elemento que cumpla con una condicion , y lo devuelve, en caso que no existe devuelve undefined
const findCharacter = characters.find(
  (elemento) => elemento.name === 'mujer maravilla'
);
console.log(findCharacter);
