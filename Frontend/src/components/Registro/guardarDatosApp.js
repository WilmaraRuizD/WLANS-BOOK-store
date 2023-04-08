let url = 'http://127.0.0.1:3022/api/CrearUsuario';

let form = document.querySelector('form');
/*let emailInput = document.querySelector('#email');
let telefonoInput = document.querySelector('#telefono');*/
let passwordInput = document.querySelector('#password');
let confirmPasswordInput = document.querySelector('#confirm-password');

/*form.addEventListener('submit', (event) => {
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

    swal('Felicidades', 'Su usuario ha sido registrado.', 'success').then(
      value => {
        window.location.href = '../Login/LoginIndex.html';
      });
  } else {
    swal('Error', 'Las contraseñas no coinciden.', 'error');
  }

});*/

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  let password = passwordInput.value;
  let confirmPassword = confirmPasswordInput.value;

  if (password === confirmPassword) {//Verificamos la contraseña y guardamos los datos en un json
    const enviarJson = {};

    enviarJson.nombre = document.querySelector('#nombre').value;
    enviarJson.apellido = document.querySelector('#apellido').value;
    enviarJson.correo = document.querySelector('#correo').value;
    enviarJson.telefono = Number(document.querySelector('#telefono').value);

    let selectTipoDocumento = document.querySelector('#tipo_documento');
    let documentoSelected = selectTipoDocumento.selectedOptions[0];
    enviarJson.tipoDocumento = documentoSelected.textContent;

    enviarJson.numeroIdentidad = Number(document.querySelector('#numero_identidad').value);

    let selectDepartamento = document.querySelector('#departamento');
    let departamentoSelected = selectDepartamento.selectedOptions[0];
    enviarJson.departamento = departamentoSelected.textContent;

    let selectCiudad = document.querySelector('#ciudad');
    let ciudadSelected = selectCiudad.selectedOptions[0];
    enviarJson.ciudad = ciudadSelected.textContent;

    enviarJson.direccion = document.querySelector('#direccion').value;
    enviarJson.clave = password;
    enviarJson.rolId = 2;


    console.log(typeof (enviarJson.tipoDocumento));
    console.log(enviarJson);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enviarJson),
    })
      .then((res) => res.json())
      .then((data) => {
        swal('Felicidades', 'Su usuario ha sido registrado.', 'success').then(
          value => {
            window.location.href = '../Login/LoginIndex.html';
          })
      })
      .catch(error => swal('Error', 'Error en el registro', 'error'));
  } else {
    swal('Error', 'Las contraseñas no coinciden.', 'error');
  }
});