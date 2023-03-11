
function mostrarCategorias(){
url1='http://127.0.0.1:3022/api/categoria/';

  fetch(url1)
  .then(response=>response.json())
  .then(data=>mostrarData(data))
  .catch(error=>console.log(error))
  
  let por_categoria=document.getElementById("por_categoria");
  let verLibros=document.getElementById("ver_libros");

  const mostrarData=(data)=>{

  por_categoria.style.visibility ="visible";
  verLibros.style.visibility = "hidden";

  
  let selec=document.getElementById("categoria");
    
    for(let i=0;i<10;i++){
      selec.innerHTML+=( `<option value="${data[i].id}"> `+data[i].nombre_categoria+"</option>");
    }

      };
   
    let boton= document.getElementById("boton");

    boton.addEventListener("click",(e)=>{
    let id=( document.getElementById("categoria").value);
      console.log(id);
      clasificarPorCategoria(id);
      e.preventDefault();
    });

}

    function clasificarPorCategoria(id){
      url1='http://127.0.0.1:3022/api/libros/filtraCategoria/'+id;
    
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
          <li>Nombre: ${data[i].nombre} Autor: ${data[i].autor} Editorial: ${data[i].editorial}</li>
          <li> Ano_de_publicacion: ${data[i].ano_de_publicacion}  paginas :${data[i].pagina}</li>
          <li>Descripcion: ${data[i].descripcion}</li>
          </div>
          <div>
          <img src="${data[i].foto}" alt="" >
          </div>
          </div>
          <div class="card_botones">
          <button type="button" onclick="borrar(${id})" class="btn btn-outline-danger">Borrar</button>
          <button type="button" class="btn btn-outline-secondary" onclick="Actualizar(${id})">Actualizar</button>
          </div>
          </article>
          
          `
     
        }
        document.getElementById('data').innerHTML=body;
       
      }
      
      
    }

    function borrar(id){
      console.log(id);
      console.log(url+19);
      
      fetch(url +19, {
        method: "DELETE",
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
     
    })
    .catch(error=>{console.log(error)
      alert(error)
    });
    }

    function Actualizar(id){
      console.log(id);
      alert("hola " +id);
    }