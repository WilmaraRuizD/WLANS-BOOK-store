let form = document.querySelector('form');
let emailInput = document.querySelector('#email');
let telefonoInput = document.querySelector('#telefono');
let passwordInput = document.querySelector('#password');
let confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevenir el envío del formulario

  let email = emailInput.value;
  let telefono = telefonoInput.value;
  let password = passwordInput.value;
  let confirmPassword = confirmPasswordInput.value;


  if (password === confirmPassword) {//Verificamos la contraseña y guardamos los datos en el LocalStorage
    let usuario = {
      email: email,
      telefono: telefono,
      password: password
    };
    //Obtengo los usuarios del LocalStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; 
    usuarios.push(usuario); //Y los guardo en este array
    console.log(usuario.length);

    //Guardar el nuevo usuario en el LocalStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));//Guarda en la base de usuarios el nuevo usuario
    localStorage.setItem('usuario', JSON.stringify(usuario));//Guarda un usuario

    swal('Felicidades','Su usuario ha sido registrado.','success').then(
      value => {
        window.location.href = '../Login/LoginIndex.html';
      });
  } else {
    swal('Error','Las contraseñas no coinciden.','error');
  }

});
