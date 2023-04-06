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

const loginUsuario = doc.getElementById('nombreUsuario');


//////


function findUser() {
    const api_get = `http://localhost:8080/api/usuario/1`;
    return fetch(api_get)
      .then(res => res.json())
      .then(respuesta => {
        const api = respuesta;
        return api.name;
      });
  }
  
  // Uso de la función
  findUser().then(name => {
    loginUsuario.textContent=name;
    console.log(name);
  });
  