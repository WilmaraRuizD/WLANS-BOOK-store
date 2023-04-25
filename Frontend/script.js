
// slider
const slides = document.querySelector(".main__slider__slides");
const slide = document.querySelectorAll(".main__slider__slides img");
const indicator = document.querySelector(".main__slider__indicator");
const indicatorSpan = document.querySelectorAll(".main__slider__indicator span");
const prevBtn = document.querySelector(".main__slider__indicator__prev");
const nextBtn = document.querySelector(".main__slider__indicator__next");
let index = 0;

function prevSlide() {
  index--;
  if (index < 0) {
    index = slide.length - 1;
  }
  slides.style.transform = `translateX(-${index * 33.3333}%)`;
  updateIndicator();
}


function nextSlide() {
  index++;
  if (index > slide.length - 1) {
    index = 0;
  }
  slides.style.transform = `translateX(-${index * 33.3333}%)`;
  updateIndicator();
}

function updateIndicator() {
  indicatorSpan.forEach((span) => span.classList.remove("active"));
  indicatorSpan[index].classList.add("active");
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
indicatorSpan.forEach((span, idx) => {
  span.addEventListener("click", () => {
    index = idx;
    slides.style.transform = `translateX(-${index * 33.3333}%)`;
    updateIndicator();
  });
});

function slideShow() {
  index++;
  if (index > slide.length - 1) {
    index = 0;
  }
  slides.style.transform = `translateX(-${index * 33.3333}%)`;
  updateIndicator();
}

setInterval(slideShow, 15000);



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

const botonCerrar= doc.getElementsByClassName("cta")
if(! userNombre) {
  botonCerrar.style.visibility = "hidden";
}

function cerrar() {
  localStorage.removeItem("usearID");
  localStorage.removeItem("userNombre");
  window.location.href = './index.html';
  
}


