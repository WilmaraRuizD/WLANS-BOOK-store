function scrollSection() {
  let section = document.getElementById("scroll");
  section.scrollIntoView({behavior: "smooth"});
  
}

// tarjetas presentacion 

function mostrarContenido() {
  let contenido = document.getElementById("card-content1");
  if (contenido.style.display === "none") {
    contenido.style.display = "block";
  } else {
    contenido.style.display = "none";
  }
}

function mostrarContenido2() {
  let contenido = document.getElementById("card-content2");
  if (contenido.style.display === "none") {
    contenido.style.display = "block";
  } else {
    contenido.style.display = "none";
  }
}

function mostrarContenido3() {
  let contenido = document.getElementById("card-content3");
  if (contenido.style.display === "none") {
    contenido.style.display = "block";
  } else {
    contenido.style.display = "none";
  }
}

function mostrarContenido4() {
  let contenido = document.getElementById("card-content4");
  if (contenido.style.display === "none") {
    contenido.style.display = "block";
  } else {
    contenido.style.display = "none";
  }
}

function mostrarContenido5() {
  let contenido = document.getElementById("card-content5");
  if (contenido.style.display === "none") {
    contenido.style.display = "block";
  } else {
    contenido.style.display = "none";
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


d.addEventListener("click",e=>{
  if(e.target.matches("header a")){
    e.preventDefault();

    getHTML({
      url:e.target.href,
      success:(html) => $main.innerHTML=html,
      error:(err)=>$main.innerHTML=`<h1>${err}</h1>`
    });

  }
})