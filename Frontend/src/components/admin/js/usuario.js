
let url='https://apibackendprueba-production.up.railway.app/api/EliminarUsuario/'

function consultaUsuario(){
  url1='https://apibackendprueba-production.up.railway.app/api/ConsultarUsuario';

  fetch(url1)
  .then(response=>response.json())
  .then(data=>mostrarData(data))
  .catch(error=>console.log(error))
  
  const mostrarData=(data)=>{
    console.log(data)
    let body=""
    for(var i=0;i<data.length ;i++){
      let id=data[i].id;
      console.log(id);
      body+=`
      <article  class="card">
      <div class="card_img">
      <div class="card_text">
      <li> Nombre: ${data[i].nombre}  &nbsp Apellido: ${data[i].apellido}  &nbsp Correo: ${data[i].correo}  &nbsp Telefono: ${data[i].telefono}  &nbsp Documento :${data[i].tipoDocumento} &nbsp ${data[i].numeroIdentidad}  </li>
      <li> departamento :${data[i].departamento}  &nbsp ciudad :${data[i].ciudad} 
      &nbsp direccion :${data[i].direccion}  &nbsp clave :${data[i].clave}  &nbsp Rol :${data[i].rolId} 
      </li>
      </div>
      <div class="card_botones">
      <button type="button" onclick="borrar(${id})" class="btn btn-outline-danger">Borrar</button>
      <button type="button" class="btn btn-outline-success" onclick="Actualizar(${id})">Actualizar</button>
      </div>
      </div>
      </article>
      
      `
 
    }
    document.getElementById('data').innerHTML=body;
   
  }
  
  
}
/* funcion para borrar libros  */

function borrar(id){
  console.log(id);
  //console.log(url+id);


  fetch(url +id, {
    method: "DELETE",
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    function mostrar() {
      swal({
          icon: "success", 
          text: "Eliminado exitosamente",
         
        });
  };
  
  mostrar();
 
})
.catch(error=>{console.log(error)
  alert(error)
});
}

function Actualizar(id){

  /* modal trae libros por id  */
  console.log(id)
  fetch("https://apibackendprueba-production.up.railway.app/api/BuscarUsuario/"+id)
  .then(response=>response.json())
  .then(data=>{
    
    Object.keys(data).forEach((usuario) => {
     
      console.log(data);}
    )



let modal_container = document.getElementById("modal_container");



modal_container.innerHTML+=`   
    <div class="modal_container"> 
  <div class="modal__conten">
   

  <form class="form-styles">
  <h3>Formulario de Actualización </h3>
    <div class="form-sections-styles">
      <div>
        <label>Nombre</label>
        <br>
        <input type="text"  id="nombre" placeholder="${data.nombre}" required>
      </div>
      <div>
        <label>Apellido</label>
        <br>
        <input type="text" id="apellido" placeholder="${data.apellido}" required>
      </div>
    </div>


    <div class="form-sections-styles">
      <div>
        <label>Correo Electrónico</label>
        <br>
        <input type="email" id="correo" placeholder="${data.correo}" required>
      </div>
      <div>
        <label> Numero Telefónico</label>
        <br>
        <input type="tel" id="telefono" placeholder="${data.telefono}" required>
      </div>
    </div>

    <div class="form-sections-styles">
      <div>
        <label>Tipo de Documento</label>
        <br>
        <select id="tipo_documento">
          <option>Seleccione el Documento</option>
          <option value="C.C">C.C</option>
          <option value="T.I">T.I</option>
          <option value="C.E">C.E</option>
          <option value="PEP">PEP</option>
          <option value="DNI">DNI</option>
          <option value="PA">PA</option>
        </select>
      </div>
      <div>
        <label> Numero de Identidad</label>
        <br>
        <input type="text" id="numero_identidad" placeholder="${data.numeroIdentidad}" required>
      </div>
    </div>

    <div class="form-sections-styles">
      <div>
        <label>Departamento</label>
        <br>
        <input type="text" id="Departamento" placeholder="${data.departamento}" required>
      </div>
      <div>
        <label>Ciudad o Municipio</label>
        <br>
        <input type="text" id="ciudad" placeholder="${data.ciudad}" required>
      </div>
    </div>

    <div class="direction-styles">
      <div>
      <label>Dirección de Residencia</label>
      <br>
      <input type="text" id="direccion" placeholder="${data.direccion}" required>
    </div>

    <div>
        <label>Contraseña</label>
        <br>
        <input type="password" id="password" placeholder="Contraseña..." required>
      </div>
   
    </div>
    <div class="btn_button">
    <button type="button" class="btn btn-outline-danger" onclick="cancelar()">Cancelar</button>
    <button type="button" class="btn btn-outline-success" onclick="guardar()">Guardar</button>
    </div>
  </form>


    </div>
    
    <button class="modal__closed" id="closed">X</button>
  </&div>
</div> 
`
       /* cierra el modal  */
       let closed = document.getElementById('closed');

       closed.addEventListener('click', function () {
         location.reload();
       });


})
}

function cancelar(){
 location.reload();

}

function mostrar() {

};