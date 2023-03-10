//Cargar elemetos del html
const departamento = document.getElementById('departamento');
const ciudad = document.getElementById('ciudad')
let index;


// Cargar el archivo JSON
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Convertir el archivo JSON en un objeto JavaScript
    const datos = JSON.parse(this.responseText);
    // Acceder a los datos del archivo JSON
    const ubicacion = datos.ubicacion;

    for (let i = 0; i < ubicacion.length; i++) {//Agregamos los depatarmentos al option desde el json
      let optionDepartamento = document.createElement('option');
      optionDepartamento.value = ubicacion[i].id;
      optionDepartamento.text = ubicacion[i].departamento;
      departamento.appendChild(optionDepartamento);
    }

    departamento.addEventListener("change", () => {//Cada vez que la opcion cambia de departamento  entrara a esta funcion 
      /*Cuando seleccione un departamento, mostrara los municipios del departamento seleccionado*/
      index = departamento.selectedIndex;
      console.log(index);

      if (index > 0) {
        /*removemos los municipios del departamento anteriormente seleccionado*/
        document.getElementById("ciudad").innerHTML = "";
        let optionCiudad = document.createElement('option');
        optionCiudad.text = "Tu Ciudad o Municipio";
        ciudad.appendChild(optionCiudad);

        /*Agregamos el index del departamento para agregar los municipios del departamento seleccionado*/
        let ciudadArray = ubicacion[index - 1].ciudades;
        for (let i = 0; i < ciudadArray.length; i++) {
          /*Agrgamos los municipios del departamento al select*/
          let optionCiudad = document.createElement('option');
          optionCiudad.text = ciudadArray[i];
          ciudad.appendChild(optionCiudad);
        }

      }
    });
  }
};
xhttp.open("GET", "colombia.json", true);
xhttp.send();