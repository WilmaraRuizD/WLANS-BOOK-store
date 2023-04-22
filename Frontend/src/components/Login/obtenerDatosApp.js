/*
despliegue local  
url = 'http://127.0.0.1:3020/api/filtrarCorreo/';
url1 = 'http://127.0.0.1:3020/api/filtrartelefono/';
*/

url = 'https://apibackendprueba-production.up.railway.app/api/filtrarCorreo/';
url1 = 'https://apibackendprueba-production.up.railway.app/api/filtrartelefono/';


let form = document.querySelector('form');
let contactoInput = document.querySelector('#contacto');
let passwordInput = document.querySelector('#password');

const phoneRegex = /^\d+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


form.addEventListener('submit', (event) => {
  event.preventDefault();

  let contacto = contactoInput.value;
  let password = passwordInput.value;
  console.log(typeof (contacto));
  console.log(typeof (password));

  // Verifica si el valor ingresado coincide con el patrón de correo electrónico
  if (emailRegex.test(contacto)) {
    console.log("si");
    fetch(url + contacto)
      .then(response => response.json())
      .then(data => {
        Object.keys(data).forEach((usuario) => {
          console.log(data)
          if (data.clave === password) {
            console.log("la clave coincide");
            if (data.rolId === 2) {
              console.log("Ingreso usuario");
              console.log(data.id);
              let id = data.id;
              let nombre = data.nombre;
              localStorage.setItem("userNombre", nombre);
              localStorage.setItem("usearID", id);
              swal('Felicidades', '¡Ingreso Exitoso!', 'success').then(
                value => {
                  window.location.href = '../../components/header/header.html';
                });
            }
            else {
              swal('Felicidades Administrador', '¡Ingreso Exitoso!', 'success').then(
                value => {
                  window.location.href = '../admin/index.html';
                });
            }
          }
        })
      })
      .catch(error => swal('Error', 'Tu cuenta no existe. Por favor cree un perfil para continuar', 'error'));
  }
  // Verifica si el valor ingresado coincide con el patrón de número telefónico
  else
    if (phoneRegex.test(contacto)) {
      fetch(url1 + contacto)
      .then(response => response.json())
      .then(data => {
        Object.keys(data).forEach((usuario) => {
          console.log(data)
          console.log(data.id)
          const idUsuario=localStorage.setItem(data.id, idUsuario);
          console.log(idUsuario);
          if (data.clave === password) {
            console.log("la clave coincide");
            if (data.rolId === 2) {


              console.log("Ingreso usuario");
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
          }
        })
      })
      .catch(error => swal('Error', 'Tu cuenta no existe. Por favor cree un perfil para continuar', 'error'));
    }
  // Si no coincide con ninguno de los patrones anteriores, muestra un mensaje de error
  else {
    swal('Error', 'Correo o numero telefonico incorrecto', 'error');
  }
});