url = 'http://127.0.0.1:3022/api/filtrarCorreo/';
url1 = 'http://127.0.0.1:3022/api/filtrartelefono/';

let form = document.querySelector('form');
let contactoInput = document.querySelector('#contacto');
let passwordInput = document.querySelector('#password');
//const pattern = /^[\w.%+-]+@[\w.-]+\.[\w]{2,}$|^\d+$/;
const phoneRegex = /^\d+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//let correoExiste = false;
//let telefonoExiste = false;

//Obtiene los datos que se almacenan en el LocalStorage
/*let datosUsuarios = JSON.parse(localStorage.getItem('usuarios'));

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
          window.location.href = './../../../index.html';
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
            window.location.href = './../../../index.html';
          });
        console.log(usuarioEncontrado);
      } else {
        swal('Error', 'Tu correo/telefono o contraseña son incorrectas', 'error');
      }
    }
  }
});*/

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let contacto = contactoInput.value;
  let password = passwordInput.textContent;

  // Verifica si el valor ingresado coincide con el patrón de correo electrónico
  if (emailRegex.test(contacto)) {
    console.log("si");
    fetch(url+contacto)
      .then(response => response.json())
      .then(data => {
        data.forEach((usuario) => {
          const {
            id,
            clave,
            rol_id
          } = usuario;
          if (clave===password) {
            
            if (rol_id === 2) {
              swal('Felicidades', '¡Ingreso Exitoso!', 'success').then(
                value => {
                  window.location.href = './../../../index.html';
                });
            }
            else {
              swal('Felicidades Administrador', '¡Ingreso Exitoso!', 'success').then(
                value => {
                  window.location.href = '../admin/index.html';
                });
            }
          } else {
            console.log("si si");
            swal('Error', 'Tu correo/telefono o contraseña son incorrectas :)', 'error');
          }
        })
      })
      .catch(error => swal('Error', 'Tu correo/telefono o contraseña son incorrectas :(', 'error'));
  }
  // Verifica si el valor ingresado coincide con el patrón de número telefónico
  else
    if (phoneRegex.test(contacto)) {
      fetch(url1 + contacto)
        .then(response => response.json())
        .then(data => {
          data.forEach((usuario) => {
            const {
              id,
              clave,
              rol_id
            } = usuario;

            if (password === clave) {
              if (rol_id === 2) {
                swal('Felicidades', '¡Ingreso Exitoso!', 'success').then(
                  value => {
                    window.location.href = './../../../index.html';
                  });
              }
              else {
                swal('Felicidades Administrador', '¡Ingreso Exitoso!', 'success').then(
                  value => {
                    window.location.href = '../admin/index.html';
                  });
              }
            } else {
              swal('Error', 'Tu correo/telefono o contraseña son incorrectas', 'error');
            }
          })
        })
        .catch(error => swal('Error', 'Tu correo/telefono o contraseña son incorrectas', 'error'));
    }
    // Si no coincide con ninguno de los patrones anteriores, muestra un mensaje de error
    else {
      swal('Error', 'Correo o numero telefonico incorrecto', 'error');
    }

});