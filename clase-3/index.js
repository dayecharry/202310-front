// Listado de personas, (edad, nombre, profesion, tienehijos (true o false))
// indicar el  promedio de edad,  indicar cuantas personas son abogados,
// cuantas personas tienen hijos
/*
1.- crear acumulador para guardar las edades (totalEdades)
1.- crear acumulador para guardar el total de abogados (totalabogados)
1.- crear acumulador para guardar el total de personas con hijojos (totalhijos)
2.- crear un for para  obtener cada una de las edades
3.- dentro del for evaluo si la profesion es === abogado,
4.- otro condicional para  evaluacion si la persona tiene hijos o no.
5.- fuera del for imprimo  los mensaje
6.-  calculamos el promedio y lo imprimimos.*/
const personas = [
    { nombre: "luis", edad: 38, profesion: "abogado", tieneHijo: true },
    { nombre: "ana", edad: 29, profesion: "ingeniera", tieneHijo: false },
    { nombre: "pepe", edad: 60, profesion: "abogado", tieneHijo: false },
    { nombre: "maria", edad: 32, profesion: "abogado", tieneHijo: true },
];
let totalEdades = 0;
let totalabogados = 0;
let totalhijos = 0;
for (let i = 0; i < personas.length; i++) {
    // sumo la edad de cada persona
    totalEdades += personas[i].edad; //totalEdades = totalEdades +personas[i].edad 

    if (personas[i].profesion === "abogado") {
        totalabogados++; //totalabogados = totalabogados +1
    }
    if (personas[i].tieneHijo === true) {
        totalhijos++;
    }
}
const promedio = totalEdades / personas.length;
console.log(`El promedio es ${promedio} `);
console.log(`Hay ${totalabogados} abogados, y ${totalhijos} personas tienen hijos `)
