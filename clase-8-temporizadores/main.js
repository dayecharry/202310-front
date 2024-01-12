//timeOut , setInterval
const newsLetter = document.querySelector('.js-newletter');

const showNewsLetter = () => {
  newsLetter.classList.remove('hidden');
};

const hiddenNewsLetter = () => {
  newsLetter.classList.add('hidden');
};

const idTimeOut = setTimeout(showNewsLetter, 3000);
const idTimeOut2 = setTimeout(hiddenNewsLetter, 10000);

const closeDiv = document.querySelector('.js-close');

closeDiv.addEventListener('click', hiddenNewsLetter);

//
function imprimirHora() {
  const fecha = new Date();
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  let segundos = fecha.getSeconds();
  if (segundos < 10) {
    segundos = `0${segundos}`;
  }
  console.log(`${hora} : ${minutos}: ${segundos}`);
}

const idInterval = setInterval(imprimirHora, 1000);
imprimirHora();

function detenerTiempo() {
  clearInterval(idInterval);
}
setTimeout(detenerTiempo, 5000);
