/* variable global  */

let url='http://127.0.0.1:3022/api/libros/';
let verLibros=document.getElementById("ver_libros");
let por_categoria=document.getElementById("por_categoria");

/*GET mostrar todos los libros */

 function ver_libros(){

  por_categoria.style.visibility ="hidden";
  verLibros.style.visibility = "visible";
  /* metodo fetch trae libros por Get */
  fetch(url)
  .then(response=>response.json())
  .then(data=>mostrarData(data))
  .catch(error=>console.log(error))
  
  /* pinta todos los libros en el Dom */
  const mostrarData=(data)=>{
    console.log(data)
    let body=""
    for(var i=0;i<data.length ;i++){
      let id=data[i].id
      console.log(id)
    /* tabla libros */
      body+=`
      <tr>
      <th>${data[i].id}</th>
      <th>${data[i].nombre}</th>
      <td>${data[i].autor}</td>
      <td>${data[i].editorial}</td>
      <td>${data[i].ano_de_publicacion}</td>
      <td><button type="button" class="btn btn btn-secondary" onclick="pintarId(${id})">Ver mas</button></td>
    </tr>
      `
    }
    document.getElementById('data1').innerHTML=body;
  }

}

/* modal trae libros por id  */
let modal_container=document.getElementById("modal_container");

function pintarId(id,e){
  console.log(id)
  fetch(url+id)
  .then(response=>response.json())
  .then(data=>{data.forEach((libros) => {
      const {
        nombre,
        autor,
        editorial,
        ano_de_publicacion,
        descripcion,
        pagina,
        foto
      } =
      libros;

      console.log(id);
  modal_container.innerHTML+=`   
    <div class="modal_container"> 
  <div class="modal__conten">
    <h3>Titulo: ${nombre}</h3><br>
    <h4>Autor:  ${autor}</h4>
    <p>${descripcion}</p>
    <div class="modal_img"> 
    <img src="${foto}" alt=""style="width: 100px;">
    <div class="modal_p">
    <p>Paginas: ${pagina}</p>
    <p>Editorial: ${editorial}</p>
    <p>Año de publicación : ${ano_de_publicacion}</p>
    </div>
    </div>
    
    <button class="modal__closed" id="closed">X</button>
  </&div>
</div> 
`
/* cierra el modal  */
let closed=document.getElementById('closed');

closed.addEventListener('click',function(){
 location.reload();
});


 e.preventdefault();
})
}) 
  .catch(error=>console.log(error));

}
/* abre en ventana emergente el archivo crearLibros.html */
function crearLibro(){
  window.open("./static/crearLibro.html");
}


/* POST CREAR LIBRO  */

let capturaLibros = document.getElementById("formCrear");

capturaLibros.addEventListener("submit", function (e) {

 const errores=[];
 
 document.g



  const enviarJson = {};

     enviarJson.nombre = document.getElementById("nombre").value;
     enviarJson.autor = document.getElementById("autor").value;
     enviarJson.editorial= document.getElementById("editorial").value;
     enviarJson.ano_de_publicacion = document.getElementById("ano_de_publicacion").value;
     enviarJson.pagina = document.getElementById("pagina").value;
     enviarJson.foto = document.getElementById("foto").value;
     enviarJson.categoria_id= document.getElementById("categoria_id").value;
     console.log(enviarJson); 

  e.preventDefault();
alert("soy prueba 2")
  /* fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(enviarJson),
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  }); */
})