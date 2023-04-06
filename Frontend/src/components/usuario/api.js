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

// Llamada del id del usuario
const loginId = 1;

// Llamada de la API
const url = 'http://localhost:8080/api/';

// Llamada de los Inputs
const nombreInput = document.getElementById('Nombre');
const apellidoInput = document.getElementById('Apellido');
const correoInput = document.getElementById('Correo');
const telefonoInput = document.getElementById('Telefono');
const tipoDocumentoSelect = document.getElementById('TipoDocumento');
const idDocumentoInput = document.getElementById('IDDocumento');
const departamentoInput = document.getElementById('Departamento');
const optionDocument = document.getElementById('optionDocument')
const ciudadInput = document.getElementById('Ciudad');
const direccionInput = document.getElementById('Direccion');
const claveInput = document.getElementById('Clave');
const rolIdInput = document.getElementById('rolId');
const userIdInput = document.getElementById('userId');

const editarBtn = document.querySelector('.edit__container input[type="button"]');
const guardarBtn = document.querySelector('.btn__container input[value="Guardar"]');
const cancelarBtn = document.querySelector('.btn__container input[value="Cancelar"]');

findUser();

// LLenado de Inputs
function findUser() {

    const api_get = `${url}usuario/${loginId}`;
    fetch(api_get)
        .then(res => res.json())
        .then(respuesta => {
            const api = respuesta;

            userIdInput.value = api.id;
            nombreInput.value = api.name;
            apellidoInput.value = api.lastName;
            correoInput.value = api.email;
            telefonoInput.value = api.phone;
            optionDocument.value = api.documentType;
            idDocumentoInput.value = api.documentId;
            departamentoInput.value = api.state;
            ciudadInput.value = api.city;
            direccionInput.value = api.address;
            claveInput.value = api.password;
            rolIdInput.value = api.rolUser;
        });
}

function actualizarUsuario() {
    const datosUsuario = {
        name: nombreInput.value,
        lastName: apellidoInput.value,
        email: correoInput.value,
        phone: telefonoInput.value,
        documentType: optionDocument.value,
        documentId: idDocumentoInput.value,
        state: departamentoInput.value,
        city: ciudadInput.value,
        address: direccionInput.value,
        password: claveInput.value,
        rolUser: rolIdInput.value
    };
    // PUT Actualizar usuario
    fetch(`http://localhost:8080/api/actualizar/${loginId}`, {
        method: "PUT",
        body: JSON.stringify({
            id: loginId,
            title: "My PUT request",
            body: "Updating the entire object",
            userId: loginId,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(datosUsuario)
    })
        .then((response) => response.json());
};

function habilitarCampos() {
    nombreInput.disabled = false;
    apellidoInput.disabled = false;
    correoInput.disabled = false;
    telefonoInput.disabled = false;
    tipoDocumentoSelect.disabled = false;
    idDocumentoInput.disabled = false;
    departamentoInput.disabled = false;
    ciudadInput.disabled = false;
    direccionInput.disabled = false;
    claveInput.disabled = false;
    checkbox.disabled = false;
}

const checkbox = document.getElementById("mostrarpassword");
checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
        claveInput.type = "text";
    } else {
        claveInput.type = "password";
    }
});

// Función para deshabilitar los campos del formulario
function deshabilitarCampos() {
    nombreInput.disabled = true;
    apellidoInput.disabled = true;
    correoInput.disabled = true;
    telefonoInput.disabled = true;
    tipoDocumentoSelect.disabled = true;
    idDocumentoInput.disabled = true;
    departamentoInput.disabled = true;
    ciudadInput.disabled = true;
    direccionInput.disabled = true;
    claveInput.disabled = true;
    checkbox.disabled = true;
}

// Agregar un evento de click al botón de "Editar"
editarBtn.addEventListener('click', () => {
    habilitarCampos();
    guardarBtn.disabled = false;
    cancelarBtn.disabled = false;
    editarBtn.disabled = true;
});

// Agregar un evento de click al botón de "Guardar"
guardarBtn.addEventListener('click', () => {
    deshabilitarCampos();
    guardarBtn.disabled = true;
    editarBtn.disabled = false;
    cancelarBtn.disabled = true;
    actualizarUsuario();
});

// Agregar un evento de click al botón de "Cancelar"
cancelarBtn.addEventListener('click', () => {
    deshabilitarCampos();
    cancelarBtn.disabled = true;
    editarBtn.disabled = false;
    guardarBtn.disabled = true;
    findUser();
});