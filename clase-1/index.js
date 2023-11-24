console.log("hola mundo");
//variables--> contedor  que tiene un nombre  y un tipo de de dato(numero, string, booleanod, arrays, objetos)

const age = 80; //  numero
const nombreApellido = "dayana romero"; // cadena de caracteres
const price = 15.89; //numeros con decimales
const boleanos = true // false (VERDADEROS O FALSO)
const nulos = null;
const indefindo = undefined;
// tipos de datos estructurados
//objetos
const persona = {
    nombre: "pepe",
    apellido: "perez",
    edad: 60,
    altura: 1.85
}
const persona2 = {
    nombre: "maria gabriela",
    apellido: "isler",
    edad: 30,
    altura: 1.90
}
const vehiculo = {
    marca: "ferrari",
    year: 2023,
    price: 100.000
}
console.log(nombreApellido)
console.log(persona.altura);


// array -- listas
const colores = ["amarillo", "verde", "azul"];
console.log(colores[0])

const estudiante = {
    nombre: "alberto",
    apellido: "zambrano",
    habilidades: ["matematicas", "html", "css", "gamer"],
    direccion: {
        CP: 28014,
        ciudad: "madrid",
        pais: "españa"
    },
    mascota: true
}

const estudiante1 = {
    nombre: "nerea",
    apellido: "rivera",
    habilidades: ["html", "css", "photoshop", "ilustrator"],
    direccion: {
        CP: 78546,
        ciudad: "paris",
        pais: "francia"
    },
    mascota: true
}
// lista de estudiantes array de objetos
const estudiantes = [{
    nombre: "nerea",
    apellido: "rivera",
    habilidades: ["html", "css", "photoshop", "ilustrator"],
    direccion: {
        CP: 78546,
        ciudad: "paris",
        pais: "francia"
    },
    mascota: true
}, {
    nombre: "alberto",
    apellido: "zambrano",
    habilidades: ["matematicas", "html", "css", "gamer"],
    direccion: {
        CP: 28014,
        ciudad: "madrid",
        pais: "españa"
    },
    mascota: true
}
]
console.log(estudiantes[0].habilidades[0])
console.log(estudiantes[0].direccion.pais)
// explicar let 
const curso = "Front-end";
let precio = 100;
precio = precio - 50;

//operadores aritmeticos  (+, -, /, *)
const desc = 80;
const precio1 = 100;
const precio2 = 200;
const total = precio1 + precio2
console.log("El total es: " + total + " Para el black  tendra un descuento " + desc + "%");

const edad1 = parseInt("25");
const edad2 = 36;
const media = edad1 + edad2;
console.log(media);

//interpolacion de cadenas
console.log(`el total es ${total} Para el black  tendra un descuento ${desc}%`)
const msj = parseInt("Hola como estas"); // NaN --> not  a number
console.log(msj);

// operadores comparación  ( === , > , <, >= , <=, !==  ) devuelven  como respuesta un booleano ( true , false)
console.log(50 === "50")  // evalua valor y tipo de dato false
console.log(50 == "50")  // evalua valor y tipo de dato true
console.log(15 < 16) //true
console.log(15 > 16) //false 
console.log(15 > 15) // false
console.log(15 >= 15) // true
console.log(15 !== "15") // true
console.log(15 != "15") // false
// operador logico !, &&, ||
const pet = true;
console.log(!pet) // false
const edadEntrar = 12;
// estructura  control condicionales (Tomar decisiones)  
if (edadEntrar >= 18) {
    // se cumple la condi
    console.log("bienvenido")
}
else {
    // no se cumple la condicion
    console.log("No puedes entrar")
}

// estructura  control condicionales (Tomar decisiones)  
// <18 no puedes entrar
// 18 y 30  bienvenido
//31 y 50 bienvenido tienes  un bonus por ser mayor de 30
// mayores de 50  eres super premiun

if (edadEntrar < 18) {
    console.log("no puedes entrar")
} else if (edadEntrar >= 18 && edadEntrar <= 30) {
    console.log(" bienvenido");
} else if (edadEntrar <= 50) {
    console.log(" bienvenido tienes  un bonus por ser mayor de 30 ");
} else {
    console.log(" eres super premium");
}

/*
 black-->  el porcentaje se debe guardar en una variable y concatenar en el msj usando la interpolacion
tengo un producto con un  precio X   y quiero applicarle un descuento 
.- SI el precio es menor que 10 --> tienes un 1% de descuento
.- SI el precio esta entre 10 y 50 --> tienes un 10% de descuento
.- SI el precio esta entre 50 y 150 --> tienes un 20% de descuento
.- SI el precio esta entre 150 y 500 --> tienes un 30% de descuento
.- SI el precio mayor que 500 --> tienes un 80% de descuento
*/