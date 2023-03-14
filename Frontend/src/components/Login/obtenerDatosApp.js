let form = document.querySelector('form');
let contactoInput = document.querySelector('#contacto');
let passwordInput = document.querySelector('#password');
let correoExiste = false;
let telefonoExiste = false;

//Obtiene los datos que se almacenan en el LocalStorage
let datosUsuarios = JSON.parse(localStorage.getItem('usuarios'));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let contacto = contactoInput.value;
  let password = passwordInput.value;

  datosUsuarios.forEach((usuario) => {

    // Verificamos si el correo del usuario actual es igual al que estamos buscando
    if (usuario.email === contacto) {
      correoExiste = true;
    }
    if (!correoExiste) {
      if (usuario.telefono === contacto) {
        telefonoExiste = true;
      }
      else {
        swal('Error', 'Correo o numero telefonico no registrado', 'error');
      }
    }
  });

  //Si el correo o telefono existen en el LocalStorage entonces compara la contraseña 
  //Encuentra al usuario que posee el mismo correo o telefono
  let usuarioEncontrado;
  if (correoExiste) {
    //Buscamos al usuario por el correo
    usuarioEncontrado = datosUsuarios.find(usuario => usuario.email === contacto);
    //Encontramos al ususario que coincida con el email ingresado
    if (usuarioEncontrado && usuarioEncontrado.password === password) {
      swal('Felicidades', '¡Ingreso Exitoso!', 'success').then(
        value => {
          window.open("./../../../index.html");
        });
    } else {
      swal('Error', 'Tu correo/telefono o contraseña son incorrectas', 'error');
    }
  } else {
    if (telefonoExiste) {
      //Buscamos al usuario por el telefono
      usuarioEncontrado = datosUsuarios.find(usuario => usuario.telefono === contacto);
      //Encontramos al ususario que coincida con el telefono ingresado
      if (usuarioEncontrado && usuarioEncontrado.password === password) {
        swal('Felicidades', '¡Ingreso Exitoso!', 'success').then(
          value => {
            window.open("./../../../index.html");
          });
        console.log(usuarioEncontrado);
      } else {
        swal('Error', 'Tu correo/telefono o contraseña son incorrectas', 'error');
      }
    }
  }
});
