/*
function nombredelafuncion(){ // en los parentesis definimos parametros
  contenido de la funcion, 
   conjunto de instruccciones, operaciones aritmeticas, array, bucles, condicionales
}
*/
function suma(num1, num2) {
  const total = num1 + num2;
  console.log(total);
}

suma(15, 99);
suma(88, 10);
//
function msjNavidad(diaMes) {
  if (diaMes === 24) {
    console.log('Noche buena');
  } else if (diaMes === 31) {
    console.log('Noche vieja');
  } else {
    console.log('cualquier dia de diciembre');
  }
}
msjNavidad(1);
msjNavidad(24);
msjNavidad(31);
msjNavidad(27);

//funciones flechas
/* 
 const funcionFlecha  = ()=>{
  
 }
*/
// función reciba como parámetro un numero y un array. y añada el numero al array, siempre que este sea mayor que 50

let listaNumero = [];
const agregarNumero = (num, array) => {
  if (num >= 50) {
    array.push(num);
  }
  console.log(array);
};
agregarNumero(27, listaNumero);
agregarNumero(88, listaNumero);

// funcion -> valide una edad e indique si el usuario puede conducir o no
// <16 , >90
const carnet = (edad) => {
  if (edad < 16 || edad > 90) {
    console.log('No puedes conducir');
  } else {
    console.log('puedes conducir');
  }
};
carnet(15);
// crear una función para calcular la edad  de los perros en años humanos
/*
    1er año del perro -> 5 años humanos
    2do año del perro --> 3 años humanos
    desde el tercer año --> 2 años humanos 
    perro 5años ---> 5+3+(3*2) = 14
*/

const text = 'pepito perez'; // variable global
function saludar(name) {
  //const text = `Bienvenida ${name}`; // variable local
  console.log(text);
}
console.log(text);
saludar('ana');
