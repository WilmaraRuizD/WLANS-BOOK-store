const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const telefonoInput = document.querySelector('#telefono');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevenir el envío del formulario

  const email = emailInput.value;
  const telefono = telefonoInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value; 

  
  if (password === confirmPassword) {
    localStorage.setItem('email', email);
    localStorage.setItem('telefono',telefono);
    localStorage.setItem('password', password);
    console.log('Contraseña confirmada');
    console.log("Datos guardados");
    window.open( "ventanaEmergente", "width=400,height=400");

  } else {
    console.log('Las contraseñas no coinciden');
  }

  //redirigir a otra página
  //window.location.href = 'pagina-de-bienvenida.html';
});
