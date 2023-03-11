const formulario = document.querySelector('#contactenos')
formulario.addEventListener('submit', cargaForm);

async function cargaForm(e) {
  e.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  }) 
  if (response.ok) {
    this.reset ()
    const alert = document.getElementById('alert');
    alert.innerHTML+=`<div class="modal_container">
    <div class="modal__conten">
      <h3>Solicitud recibida con éxito.<br> Nos contactaremos lo antes posible.</h3>
      <button class="modal__closed" id="closed">X</button>
      </div>
    </div>
    `
    let closed=document.getElementById('closed');
    
    closed.addEventListener('click',function(){
       location.reload();
    });

  
  }
}

/* Axas para navbar */

        
$main=document.querySelector("header");

const getHTML=(options)=>{
  let {url,success,error }=options;
  const xhr=new XMLHttpRequest();
  xhr.addEventListener("readystatechange",e=>{
    if(xhr.readyState !==4)return;
    if(xhr.status>=200 && xhr.status<300){
      let html=xhr.responseText;
      success(html);
    }else{
     let message=xhr.statusText||"Ocurrio un error";
     
     error(`Error ${xhr.status}:${message}`)
    }
  });
  xhr.open("GET",url);
  xhr.setRequestHeader("Content-type","text/html;charset=utf-8");
  xhr.send();
}

document.addEventListener("DOMContentLoaded",e=>{
  getHTML({
    url:"./../nav/navbar.html",
    success:(html) => $main.innerHTML=html,
    error:(err)=>$main.innerHTML=`<h1>${err}</h1>`


    
  });
})
