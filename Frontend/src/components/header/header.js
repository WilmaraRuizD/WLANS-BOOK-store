(() => {

  // Menu responsive
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
  // Fin del menu responsive

  function findUser(loginId) {

    const api_get = `localhost:3020/usuario/${loginId}`;   ///URL de la api
    fetch(api_get)
        .then(res => res.json())
        .then(respuesta => {
            const api = respuesta;

            let nombreDelUsuario = api.nombre;
            nombreDelUsuario = localStorage.setItem(nombreDelUsuario, nombreDelUsuario);
        });
        
}
let loginIdUser = localStorage.getItem(idUsuario);
findUser(loginIdUser);

  // Usuario LOGIN
  const ulMenu = document.getElementById('ulmenu');
  const liUser = document.createElement('li');
  const aUser = document.createElement('a');

  aUser.className = 'logo'
  aUser.textContent = nombreDelUsuario;      //Nombre de usuario

  ulMenu.appendChild(liUser);
  liUser.appendChild(aUser);

  //Creacion de submenu
  const ulSubMenu = document.createElement('ul');
  const liSubMenu = document.createElement('li');
  const liSubMenu2 = document.createElement('li');
  const aSubMenu = document.createElement('a');
  const aSubMenu2 = document.createElement('a');

  ulSubMenu.className = "submenu"

  aSubMenu.textContent = "Configuración"
  aSubMenu.href = "#"       // URL de la configuracion
  liUser.appendChild(ulSubMenu);
  ulSubMenu.appendChild(liSubMenu);
  liSubMenu.appendChild(aSubMenu);

  aSubMenu2.textContent = "Cerrar sesión"
  liUser.appendChild(ulSubMenu);
  ulSubMenu.appendChild(liSubMenu2);
  liSubMenu2.appendChild(aSubMenu2);

  aUser.addEventListener('click', () => {
    // ulSubMenu.classList.toggle('submenu');
    ulSubMenu.classList.toggle('submenuActivo');
  })

  const overlayContent = doc.querySelector(".overlay__content");

  const liSubMenuOverlay = doc.createElement("li");
  const aSubMenuOverlay = doc.createElement("a");
  const aSubMenuOverlay2 = doc.createElement("a");

  aSubMenuOverlay.textContent = "Usuario";
  aSubMenuOverlay.href = "#"; // URL de la configuracion
  aSubMenuOverlay2.textContent = "Configuración";

  liSubMenuOverlay.className = "listA"

  overlayContent.appendChild(liSubMenuOverlay);
  liSubMenuOverlay.appendChild(aSubMenuOverlay);

  const ulSubMenuOverlay = doc.createElement("ul");
  ulSubMenuOverlay.className = "submenu";

  liSubMenuOverlay.appendChild(ulSubMenuOverlay);

  const liSubMenuOverlay2 = doc.createElement("li");
  ulSubMenuOverlay.appendChild(liSubMenuOverlay2);
  liSubMenuOverlay2.appendChild(aSubMenuOverlay2);

  aSubMenuOverlay.addEventListener("click", () => {
    ulSubMenuOverlay.classList.toggle("submenuActivo");
  });

  // Agrega un evento click al segundo enlace para cerrar sesión
  aSubMenuOverlay2.addEventListener("click", () => {
    // Agrega aquí la lógica para cerrar sesión
  });


  if (aUser.textContent != "") {
    let botonLogin = document.getElementsByTagName('A');
    console.log(botonLogin);
    botonLogin[10].textContent = aUser.textContent;
    botonLogin[10].href = ""; //ruta de la ventana de configuracion

  };





})();
