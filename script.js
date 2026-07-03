/*=============================
     TARJETAS DESPLEGABLES
=============================*/

const platos = document.querySelectorAll(".plato");

platos.forEach(plato => {

    plato.addEventListener("click", () => {

        plato.classList.toggle("activo");

    });

});


/*=============================
      BOTÓN VOLVER ARRIBA
=============================*/

const subir = document.getElementById("subir");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        subir.style.display = "block";

    }else{

        subir.style.display = "none";

    }

});


subir.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=============================
    DESPLAZAMIENTO SUAVE
=============================*/

const enlaces = document.querySelectorAll('a[href^="#"]');

enlaces.forEach(enlace=>{

    enlace.addEventListener("click",function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});

