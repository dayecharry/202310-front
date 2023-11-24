// estructuras de control iterativas bucles

// array --> lista
const names = ['alberto', 'maria', 'nerea'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// for clásico
for (let i = 0; i < names.length; i++) {
  //
  if (i % 2 === 0) {
    console.log(`la posicion es par ${names[i]}`);
  } else {
    console.log(`la posicion es impar ${names[i]}`);
  }
}
console.log('*********************');
// for - of
for (const eachName of names) {
  console.log(eachName);
}

console.log('*********************');
// forEach
names.forEach(function (element) {
  console.log(element);
});

// for .. in --> recorrer objetos
const student = {
  name: 'anacleta',
  lastname: 'ruiz',
  age: 25,
};
console.log('*********************');
for (const key in student) {
  console.log(key + student[key]);
}

/******* */
// array de objetos
const productos = [
  { nombre: 'refresco', precio: 3, stock: 50 },
  { nombre: 'Chocolate', precio: 5, stock: 150 },
  { nombre: 'Pan', precio: 4, stock: 10 },
];

for (let i = 0; i < productos.length; i++) {
  console.log(
    `El producto es: ${productos[i].nombre} y el precio es: ${productos[i].precio} `
  );
}

for (const unProducto of productos) {
  console.log(
    `El producto es: ${unProducto.nombre} y el precio es: ${unProducto.precio}`
  );
}

const superheroes = [
  {
    name: 'Spiderman',
    power: 60,
    ciudad: 'nueva york',
  },
  {
    name: 'Hulk',
    power: 150,
    ciudad: 'boston',
  },
  {
    name: 'Superman',
    power: 500,
    ciudad: 'chicago',
  },
];
//soy spiderman y mi poder es 60
//soy hulk y mi poder es 150
//soy superman y mi poder es 500
//"el total de poderes de todos mis super heroes  es 710"
let totalPower = 0;
for (const superheroe of superheroes) {
  //totalPower = totalPower + superheroe.power;
  totalPower += superheroe.power;
  console.log(`Soy ${superheroe.name} y mi poder es: ${superheroe.power}`);
}
console.log(`el total de poderes de todos mis super heroes  es ${totalPower}`);
