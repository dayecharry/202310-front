const user = {
  username: 'pepe2825',
  password: '123pepe',
};
const usernameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');
const loginButton = document.querySelector('.btn');
function handleClick(event) {
  event.preventDefault();
  ///  recogemos el value  del username
  const userValue = usernameInput.value;
  // recogemos el value de la contraseña
  const passValue = passwordInput.value;
  // validar si el usuario y la contraseña coinciden  con mi objeto del `user`
  if (userValue === user.username && passValue === user.password) {
    console.log(`Bienvenido ${userValue}`);
  } else {
    console.log('Usuario o contraseña incorrecta');
  }
}

loginButton.addEventListener('click', handleClick);
