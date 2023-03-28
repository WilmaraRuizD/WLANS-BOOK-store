//menu nav
const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


const formulario = document.querySelector('#contactenos')
formulario.addEventListener('submit', cargaForm);

async function cargaForm(e) {
  e.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  }) 
  if (response.ok) {
    this.reset ()
    const alert = document.getElementById('alert');
    alert.innerHTML+=`<div class="modal_container">
    <div class="modal__conten">
      <h3>Solicitud recibida con éxito.<br> Nos contactaremos lo antes posible.</h3>
      <button class="modal__closed" id="closed">X</button>
      </div>
    </div>
    `
    let closed=document.getElementById('closed');
    
    closed.addEventListener('click',function(){
       location.reload();
    });

  
  }
}

// Formulario de suscripcion
const form = document.querySelector('#subscribe-form');
const emailInput = form.querySelector('#email-input');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  if (validateEmail(emailInput.value)) {
    // Enviar datos del formulario al servidor
    console.log(`Correo electrónico válido: ${emailInput.value}`);
    form.reset();
  } else {
    alert('Ingrese un correo electrónico válido');
  }
});

function validateEmail(email) {
  // Expresión regular para validar el formato de correo electrónico
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
