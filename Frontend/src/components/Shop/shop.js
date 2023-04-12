/*

//Ejecutar el script
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready(){
    
     //Eliminar del carrito
     let botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
     for(let i=0;i<botonesEliminarItem.length; i++){
         let button = botonesEliminarItem[i];
         button.addEventListener('click',eliminarItemCarrito);
     }
 
    //Sumar cantidad
    let botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(let i=0;i<botonesSumarCantidad.length; i++){
        let button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad);
    }

     //Restar cantidad
    let botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(let i=0;i<botonesRestarCantidad.length; i++){
        let button = botonesRestarCantidad[i];
        button.addEventListener('click',restarCantidad);
    }

   

    //Agregamos funcionalidad al botón comprar
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked)
}
//Hacer pedido
function pagarClicked(){
        const alert = document.getElementById('alert');
        alert.innerHTML+=`<div class="modal_container">
        <div class="modal__conten">
          <h3>Solicitud de compra recibida con éxito.</h3>
          <button class="modal__closed" id="closed">X</button>
          </div>
        </div>
        `
        let closed=document.getElementById('closed');
        
        closed.addEventListener('click',function(){
           location.reload();
        });

    actualizarTotalCarrito();

}
//Funciòn que controla el boton clickeado de agregar al carrito
function agregarAlCarritoClicked(event){
    let button = event.target;
    let item = button.parentElement;
    let titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    let precio = item.getElementsByClassName('precio-item')[0].innerText;
    let imagenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);

    agregarItemAlCarrito(titulo, precio, imagenSrc);

    hacerVisibleCarrito();
}



//Funciòn que agrega un item al carrito
function agregarItemAlCarrito(titulo, precio, imagenSrc){
    let item = document.createElement('div');
    item.classList.add = ('item');
    let itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    //controlamos que el item que intenta ingresar no se encuentre en el carrito
    let nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(let i=0;i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("El item ya se encuentra en el carrito");
            return;
        }
    }

    

    //Eliminar al nuevo item
     item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);

    //Restar cantidad del nuevo item
    let botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
    botonRestarCantidad.addEventListener('click',restarCantidad);

    //Sumar cantidad del nuevo item
    let botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
    botonSumarCantidad.addEventListener('click',sumarCantidad);

    //Actualiza total
    actualizarTotalCarrito();
}
//Aumento en uno la cantidad del elemento seleccionado
function sumarCantidad(event){
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    actualizarTotalCarrito();
}
//Resto en uno la cantidad del elemento seleccionado
function restarCantidad(event){
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
}

//Elimino el item seleccionado del carrito
function eliminarItemCarrito(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();


    //Actualizo el total del carrito
    actualizarTotalCarrito();

    //la siguiente funciòn controla si hay elementos en el carrito
    //Si no hay elimino el carrito
    ocultarCarrito();
}
//Funciòn que controla si hay elementos en el carrito. Si no hay oculto el carrito.
function ocultarCarrito(){
    let carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        let carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;
    
        let items =document.getElementsByClassName('contenedor-items')[0];
        items.style.width = '100%';
    }
}
//Actualizamos el total de Carrito
function actualizarTotalCarrito(){
    //seleccionamos el contenedor carrito
    let carritoContenedor = document.getElementsByClassName('carrito')[0];
    let carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    let total = 0;
    //recorremos cada elemento del carrito para actualizar el total
    for(let i=0; i< carritoItems.length;i++){
        let item = carritoItems[i];
        let precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        //quitamos el simobolo peso y el punto de milesimos.
        let precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        let cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        console.log(precio);
        let cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 100)/100;

    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$'+total.toLocaleString("es") + ",00";

}
*/


/*Pintar carrito*/
function pintarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const carritoContainer = document.getElementById("carritoitems");
    carritoContainer.innerHTML = ""; // limpiar el contenedor antes de volver a pintar

    carrito.forEach((producto) => {
        const { nombre, foto } = producto;
        const productoHTML = `
        <div class="carrito-item">
            <div class="contenedor-img">
            <h3>${nombre}</h3>
            <img class="item-img" src="${foto}" alt="${nombre}" width="100px">
            </div>
            
            <span class="carrito-item-precio">$68.000</span>
            <div class="selector-cantidad">
                            <i class="fa-solid fa-minus restar-cantidad" onclick="restarCantidad(event)"></i>
                            <input type="text" value="" class="carrito-item-cantidad" disabled>
                            <i class="fa-solid fa-plus sumar-cantidad" onclick="sumarCantidad(event)" ></i>
            </div>
            
            <button id="btn-eliminar" class="btn-eliminar" type="submit" onclick= "eliminarItemCarrito(event)">
                <i class="fa-solid fa-trash"></i>
            </button>
            
        </div>
        `;
        carritoContainer.innerHTML += productoHTML;
    });
}
if (confirm) {
    pintarCarrito();
}

//Función eliminar del carrito
function eliminarItemCarrito(event) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const carritoContainer = document.getElementById("carritoitems");

    // Obtener el índice del producto correspondiente al botón de eliminar
    const index = Array.from(carritoContainer.children).indexOf(event.target.closest('.carrito-item'));

    // Eliminar el producto del array del carrito
    carrito.splice(index,1);

    // Guardar el array actualizado en el LocalStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Volver a pintar el carrito con el array actualizado
    pintarCarrito();
}
//Aumento en uno la cantidad del elemento seleccionado
function sumarCantidad(event){
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual++;
    if(cantidadActual >1){
        alert('Stock insuficiente')
    }else{
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
    
}
//Resto en uno la cantidad del elemento seleccionado
function restarCantidad(event){
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
}


//Actualizamos el total de Carrito
function actualizarTotalCarrito(){
    //seleccionamos el contenedor carrito
    let carritoContenedor = document.getElementsByClassName('carrito')[0];
    let carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    let total = 0;
    //recorremos cada elemento del carrito para actualizar el total
    for(let i=0; i< carritoItems.length;i++){
        let item = carritoItems[i];
        let precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        //quitamos el simobolo peso y el punto de milesimos.
        let precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        let cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        console.log(precio);
        let cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 100)/100;

    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$'+total.toLocaleString("es") ;

}

function actualizar(){
    location.reload();
}


//BOTON PAGAR

function pagarClicked() {
    const alert = document.getElementById('alert');
    alert.innerHTML += `<div class="modal_container">
    <div class="modal__conten">
        <h3>Solicitud de compra recibida con éxito.</h3>
        <button class="modal__closed" id="closed">X</button>
        </div>
    </div>
    `
    const borrarCarrito = document.querySelector('.section-carrito');
    borrarCarrito.addEventListener('click', function () {
        borrarCarrito.style.visibility = 'hidden';
    })
    let closed = document.getElementById('closed');

    closed.addEventListener('click', function () {
        window.location.href = "../../../index.html";
    });

    actualizarTotalCarrito();
}
document.getElementsByClassName('btn-pagar')[0].addEventListener('click', pagarClicked);