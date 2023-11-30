const city = document.querySelector('.city');
const btn = document.querySelector('.btn');
const response = document.querySelector('.response');

const handleClick = (pepino) => {
  pepino.preventDefault();
  const citySelected = city.value;
  let desc = 0;
  if (citySelected === 'Barcelona') {
    desc = 10;
  } else if (citySelected === 'Vigo') {
    desc = 30;
  } else if (citySelected === 'Sevilla') {
    desc = 25;
  }
  if (desc === 0) {
    response.innerHTML = `Compra exitosa`;
  } else {
    response.innerHTML = `Compra exitosa y tiene un descuento de ${desc} %`;
  }
};

btn.addEventListener('click', handleClick);
