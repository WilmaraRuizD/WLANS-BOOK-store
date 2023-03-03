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


function scrollSection() {
  let section = document.getElementById("scroll");
  section.scrollIntoView({behavior: "smooth"});
  
}

// tarjetas presentacion 

function mostrarContenido() {
  let contenido = document.getElementById("card-content1");
  if (contenido.style.display === "none") {
    contenido.style.display = "block";
  } else {
    contenido.style.display = "none";
  }
}

function mostrarContenido2() {
  let contenido = document.getElementById("card-content2");
  if (contenido.style.display === "none") {
    contenido.style.display = "block";
  } else {
    contenido.style.display = "none";
  }
}

function mostrarContenido3() {
  let contenido = document.getElementById("card-content3");
  if (contenido.style.display === "none") {
    contenido.style.display = "block";
  } else {
    contenido.style.display = "none";
  }
}

function mostrarContenido4() {
  let contenido = document.getElementById("card-content4");
  if (contenido.style.display === "none") {
    contenido.style.display = "block";
  } else {
    contenido.style.display = "none";
  }
}

function mostrarContenido5() {
  let contenido = document.getElementById("card-content5");
  if (contenido.style.display === "none") {
    contenido.style.display = "block";
  } else {
    contenido.style.display = "none";
  }
}
