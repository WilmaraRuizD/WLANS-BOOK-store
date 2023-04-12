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


fetch('http://localhost:3020/api/libros')

    .then(response => response.json())
    .then(data => card(data))
  
function card(data) {
    console.log(data)
    const div = document.getElementById('cards')

    for (var i = 1; i < 25; i++) {
        if (i % 2 == 0) {

            console.log(data);
         
            let id = data[i].id;

           
            div.innerHTML += `
        
            <article class="product_item" id="${data[i].categoria_id}">
                <div class="detalles" id="detalles">
                    <h2 class="product_title1">
                        ${data[i].nombre}
                    </h2>
                    <img src="${data[i].foto}" alt="" class="product_img"  >
                    <p class="autor">
                        ${data[i].autor} 
                    </p>
                
                    <p class="product_pag">
                    Páginas: ${data[i].pagina}
                    </p>
                    <div class="buttons" id="buttons">
                        <button class="product_button" id=${data[i].id}  type="submit" onclick="agregarCarrito(${id})">
                            Agregar al carrito
                        </button>

                        <button class="more_button" id=${data[i].id} onclick="escucharbtn(${id})" type="button">

                            Detalles
                
                        </button>
                    </div>
                </div>
                
        </article>   
            `
        }

    }

}

function escucharbtn(id) {
    console.log(id);
    const tarjetas = document.getElementById('modal_container');

    fetch('http://localhost:3020/api/libros/' + id)
        .then(response => response.json())
        .then(data => {
           
    Object.keys(data).forEach((libros) => {

                console.log(id);
                tarjetas.innerHTML += `    
                <div class="modal_container">
                    <div class="modal__conten">
                        <h3 class="title_modal"> ${data.nombre}</h3><br>
                        <h4> ${data.autor}</h4>
                        <p>${data.descripcion}</p>
                        <div class="modal_img"> 
                        
                        <p class="modal_det">Editorial: ${data.editorial}</p>
                        <p class="modal_det">Año de publicación: ${data.ano_de_publicacion}</p>
                        
                        
                        <button class="modal__closed" id="closed">
                            X
                        </button>
                    </diV>
                </div> 
                        `

                let closed = document.getElementById('closed');

                closed.addEventListener('click', function () {
                    alert("esto es prueba")
                    location.reload();

                });
            })
})
}

/*Función agregar al carrito */

function agregarCarrito(id) {
    console.log(id);
    fetch('http://localhost:3020/api/libros/' + id)
        .then(response => response.json())
        .then(data => {
            Object.keys(data).forEach((libros) => {
                console.log(data)
                console.log(data.nombre)
                let nombre = data.nombre;
                let foto = data.foto;
                libros;
               

                let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
                const producto = { nombre, foto };
                carrito.push(producto);
                localStorage.setItem("carrito", JSON.stringify(carrito))
            
                //Función mostrar check
                
                alert("Producto agregado correctamente")
                if(confirm){
                    actualizar()
                    mostrar();
                   /* document.addEventListener("DOMContentLoaded",function mostrar() {
                    
                        const click = document.querySelector('btn-carrito');
                        click.style.display = 'block';
                    })*/
                }

            }

            )
        })
}

