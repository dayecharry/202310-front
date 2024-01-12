let productList = [];
let cart = [];
const ulProduct = document.querySelector('.js-products');
const ulCart = document.querySelector('.js-cart');

const getDataApi = async () => {
  const dataApi = await fetch('https://fakestoreapi.com/products/');
  productList = await dataApi.json();
  console.log(productList);
  renderProducts();
};
const handleAddProduct = (event) => {
  // añadir el producto clicado a la cesta
  // id del producto clicado
  const clickedId = event.target.id;
  const productClicked = productList.find(
    (product) => product.id === parseInt(clickedId)
  );
  // busco la posicion el producto en el carrito,  si la posicion devuelta es -1, no existe en el carrito
  const indexProductCart = cart.findIndex(
    (product) => product.id === parseInt(clickedId)
  );
  //si el producto no esta en  cart, devuelve -1
  if (indexProductCart === -1) {
    productClicked.cant = 1;
    cart.push(productClicked);
  } else {
    // incremento la cantidad en 1 si el producto ya se encuentra en el carrito de la compra
    productClicked.cant += 1;
  }
  renderCart();
};
// funcion   para escuchar evento sobre el producto
const listenProduct = () => {
  const allButton = document.querySelectorAll('.js-add-product');
  for (const button of allButton) {
    button.addEventListener('click', handleAddProduct);
  }
};
const renderProducts = () => {
  let html = '';
  for (const eachProduct of productList) {
    html += `<li>
            <article class ="card">
                <img src="${eachProduct.image}"/>
                <h2> ${eachProduct.title}</h2>
                <p> ${eachProduct.price}</p>
                <button id="${eachProduct.id}" class="js-add-product"> Añadir a la cesta </button>
            </article>
        </li>`;
  }
  ulProduct.innerHTML = html;
  listenProduct(); // ejecuto la funcion para escuchar evento sobre los boton
};
//funcion para restar un  1 a la cantidad del producto
const handleClickRest = (event) => {
  const id = event.currentTarget.id; // event.target.id;
  console.log(id);
  const indexProductCliked = cart.findIndex(
    (product) => product.id === parseInt(id)
  );
  if (cart[indexProductCliked].cant === 1) {
    cart.splice(indexProductCliked, 1);
  } else {
    cart[indexProductCliked].cant -= 1;
  }
  renderCart();
};

const listenBtnResta = () => {
  const btnsResta = document.querySelectorAll('.btn-resta');
  for (const btn of btnsResta) {
    btn.addEventListener('click', handleClickRest);
  }
};
//funcion para renderizar los productos que añades a la cesta
const renderCart = () => {
  let html = '';
  for (const eachProduct of cart) {
    html += `<li>
            <article class ="card">
                <h6> ${eachProduct.title}</h6>
                <p> Cantidad: ${eachProduct.cant}</p>
                <button id= "${eachProduct.id}"> + </button> 
                <button id= "${eachProduct.id}" class="btn-resta"> - </button> 
            </article>
        </li>`;
  }
  ulCart.innerHTML = html;

  listenBtnResta();
};

getDataApi();
