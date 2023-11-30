const formElement = document.querySelector(".form")
const inputName = document.querySelector(".firstName")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const valueInput = inputName.value;
    console.log(valueInput)
})