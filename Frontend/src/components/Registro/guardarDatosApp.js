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
    /*Guarda un nuevo usuario al localStorage por eso se agregar el  || []*/
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; 
    usuarios.push(usuario);
    console.log(usuario.length);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('usuario', JSON.stringify(usuario));
    console.log('Contraseña confirmada');
    console.log("Datos guardados");
    swal('Felicidades','Su usuario ha sido registrado.','success');
    
  } else {
    swal('Error','Las contraseñas no coinciden.','error');
  }

  //redirigir a otra página
  //window.location.href = '../Login/LoginIndex.html';
});
