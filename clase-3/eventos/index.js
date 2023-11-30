const btn = document.querySelector(".btn");

console.log(btn)

btn.addEventListener("click", () => {
    alert("el usuario hizo click")
    console.log("esta es la consola  cuando el usuario  hizo click")
});

// selecciono el input o campo de entrada
const nameInput = document.querySelector(".name");
// escucho evento keyup  sobre el input
nameInput.addEventListener("change", () => {
    // selecciona el h2 para luego editar su contenido
    const preview = document.querySelector(".previewName");
    // obtener el valor del input (lo que escribio el usuario)
    const valueInput = nameInput.value;
    // añado al H2 el valor del input
    preview.innerHTML = valueInput
})
// keyup, keydown, mouseover, click, input, change

// pedir al usuario su edad  (input y un boton)
// al hacer click en el boton validar si la edad es mayor que 18 o no, 