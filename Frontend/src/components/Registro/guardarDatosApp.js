let url ='http://127.0.0.1:3022/api/usuario/';

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
  if (password === confirmPassword) {//Verificamos la contraseña y guardamos los datos en el LocalStorage
    const enviarJson = {};

    enviarJson.nombre = document.getElementById("nombre").textContent;
    enviarJson.apellido = document.getElementById("apellido").textContent;
    enviarJson.correo = document.getElementById("correo").value;
    enviarJson.telefono = document.getElementById("telefono").value;

    //enviarJson.tipo_documento = document.getElementById("tipo_documento").value;
    let selectTipoDocumento = document.getElementById('tipo_documento');
    enviarJson.tipo_documento = selectTipoDocumento.textContent;

    enviarJson.numero_identidad = document.getElementById("numero_identidad").value;

    //enviarJson.departamento = document.getElementById("departamento").value;
    let selectDepartamento = document.getElementById('departamento');
    enviarJson.departamento = selectDepartamento.textContent;

    //enviarJson.ciudad = document.getElementById("ciudad").value;
    let selectCiudad = document.getElementById('departamento');
    enviarJson.ciudad = selectCiudad.textContent;

    enviarJson.direccion = document.getElementById("direccion").value;
    enviarJson.clave = document.getElementById("contraseña").value;
    enviarJson.id_rol = 2;
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
        console.log(data);
      })
    swal('Felicidades', 'Su usuario ha sido registrado.', 'success').then(
      value => {
        window.location.href = '../Login/LoginIndex.html';
      });

  } else {
    swal('Error', 'Las contraseñas no coinciden.', 'error');
  }

});