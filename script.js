/*=============================
      CONFIGURACIÓN GENERAL
=============================*/

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    scroll-behavior:smooth;
    font-family:Arial, Helvetica, sans-serif;
}

body{

    background:
    linear-gradient(
    rgba(248,243,232,.75),
    rgba(248,243,232,.75)
    ),
    url("imagenes/fondo.jpg");

    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-attachment:fixed;

    color:#222;

}

/*=============================
        ENCABEZADO
=============================*/

header{

    width:100%;

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:15px 7%;

    background:rgba(#A07B5A);

    backdrop-filter:blur(8px);

    position:sticky;

    top:0;

    z-index:1000;

    box-shadow:0 2px 10px rgba(0,0,0,.15);

}

/*=============================
          LOGO
=============================*/

.logo{

display:flex;

align-items:center;

gap:12px;

}

.logo h2{

color:#D4AF37;

font-size:24px;

font-family:"Georgia",serif;

font-style:italic;

}

.logo small{

color:#6B4F2A;

font-size:13px;

font-style:italic;

display:block;

}

.logo i{

font-size:34px;

color:#D4AF37;

}

/*=============================
      MENÚ
=============================*/

nav{

display:flex;

gap:25px;

}

nav a{

text-decoration:none;

color:#D8D8D8;

font-size:18px;

font-weight:bold;

transition:.3s;

}

nav a:hover{

    color:#D4AF37;

    border-bottom:2px solid #D4AF37;

    padding-bottom:4px;

}

/*=============================
      BIENVENIDA
=============================*/

.inicio{

display:flex;

justify-content:space-between;

align-items:center;

padding:50px 7%;

gap:40px;

}

.texto-inicio{

flex:1;

}

.texto-inicio h1{

font-size:60px;

font-family:"Georgia",serif;

font-style:italic;

color:#D4AF37;

text-shadow:2px 2px 8px rgba(0,0,0,.15);

margin-bottom:15px;

}

.texto-inicio h2{

font-size:30px;

font-style:italic;

color:#6B4F2A;

margin-bottom:25px;

}

.texto-inicio p{

font-size:18px;

line-height:30px;

margin-bottom:30px;

}

/*=============================
          BOTÓN
=============================*/

.btn{

display:inline-block;

padding:15px 35px;

background:#b8860b;

color:white;

text-decoration:none;

border-radius:40px;

font-size:18px;

font-weight:bold;

transition:.4s ease;

}

.btn:hover{

background:#8B6508;

transform:translateY(-3px);

box-shadow:0 10px 20px rgba(212,175,55,.35);

}

/*=============================
      IMAGEN PRINCIPAL
=============================*/

.imagen-inicio{

flex:1;

text-align:center;

}

.imagen-inicio img{

width:100%;

max-width:480px;

border-radius:20px;

box-shadow:0 10px 25px rgba(0,0,0,.25);

}

/*=============================
        PLATO DEL DÍA
=============================*/

.plato-dia{

    padding:40px 7%;

}

.plato-dia h2{

    text-align:center;

    color:#b8860b;

    font-size:34px;

    margin-bottom:30px;

}

.card-dia{

    display:flex;

    align-items:center;

    gap:30px;

    background:rgba(255,255,255,.90);

    border-radius:20px;

    padding:20px;

    box-shadow:0 5px 20px rgba(0,0,0,.15);

    border-left:8px solid #D4AF37;

}

.card-dia img{

    width:320px;

    border-radius:15px;

}

.info-dia h3{

    font-size:32px;

    color:#333;

    margin-bottom:15px;

}

.info-dia p{

    font-size:18px;

    line-height:28px;

}

.info-dia h4{

    color:#b8860b;

    font-size:30px;

    margin-top:20px;

}

/*=============================
      TÍTULOS DEL MENÚ
=============================*/

.titulo,
.categoria h2{

    text-align:center;

    color:#b8860b;

    margin:35px 0;

    font-size:34px;

}

/*=============================
     CONTENEDOR DE PLATOS
=============================*/

.contenedor-platos{

    display:flex;

    justify-content:center;

    flex-wrap:wrap;

    gap:20px;

    padding:0 7%;

}

/*=============================
        TARJETAS
=============================*/

.plato{

    width:250px;

    background:rgba(255,255,255,.96);

    border-radius:18px;

    overflow:hidden;

    cursor:pointer;

    transition:.35s;

    box-shadow:0 5px 15px rgba(0,0,0,.15);

    border:1px solid rgba(212,175,55,.20);

}

.plato:hover{

    transform:translateY(-6px);

}

/*=============================
      IMÁGENES
=============================*/

.plato img{

    width:100%;

    height:180px;

    object-fit:cover;

}

/*=============================
      NOMBRE
=============================*/

.plato h3{

    text-align:center;

    padding:15px;

    color:#333;

    font-size:20px;

}

/*=============================
 DETALLE (OCULTO AL INICIO)
=============================*/

.detalle{

    display:none;

    padding:15px;

    border-top:1px solid #ddd;

    animation:abrir .4s;

}

.detalle p{

    line-height:26px;

}

.detalle h4{

    margin-top:15px;

    color:#b8860b;

    font-size:24px;

}

/*=============================
    CUANDO SE ABRE
=============================*/

.plato.activo .detalle{

    display:block;

}

/*=============================
      ANIMACIÓN
=============================*/

@keyframes abrir{

from{

opacity:0;

transform:translateY(-10px);

}

to{

opacity:1;

transform:translateY(0);

}

}

/*=============================
      PROMOCIONES
=============================*/

#promociones{

    padding:40px 7%;

}

#promociones h2{

    text-align:center;

    color:#b8860b;

    font-size:34px;

    margin-bottom:30px;

}

.promocion{

    background:rgba(255,255,255,.92);

    border-radius:20px;

    padding:20px;

    width:320px;

    text-align:center;

    box-shadow:0 8px 20px rgba(0,0,0,.15);

    transition:.3s;

}

.promocion:hover{

    transform:translateY(-10px) scale(1.03);
}

.contenedor-promociones{

    display:flex;

    justify-content:center;

    gap:30px;

    flex-wrap:wrap;

    margin-top:30px;

}

.subtitulo-promociones{

    text-align:center;

    color:#555;

    margin-bottom:20px;

    font-size:18px;

}

.promocion img{

    width:100%;

    max-width:320px;

    border-radius:15px;

    margin-bottom:15px;

}

.promocion h3{

    color:#333;

    margin-bottom:10px;

}

.promocion h4{

    color:#b8860b;

    font-size:24px;

    margin-top:10px;

}

/*=============================
        NOSOTROS
=============================*/

#nosotros{

    padding:40px 7%;

    text-align:center;

}

#nosotros h2{

    color:#b8860b;

    font-size:34px;

    margin-bottom:20px;

}

#nosotros img{

    width:100%;

    max-width:650px;

    border-radius:20px;

    box-shadow:0 5px 20px rgba(0,0,0,.2);

    margin-bottom:20px;

}

#nosotros p{

    max-width:900px;

    margin:auto;

    font-size:19px;

    line-height:34px;

    color:#333;

}

/*=============================
        PIE DE PÁGINA
=============================*/

footer{

    background:#3B2A1A;

    color:white;

    text-align:center;

    padding:30px 20px;

    margin-top:40px;

}

.logo-footer{

    color:#d4af37;

    font-size:24px;

    font-weight:bold;

    margin-bottom:15px;

}

footer p{

    margin:8px 0;

}

/*=============================
     BOTÓN VOLVER ARRIBA
=============================*/

#subir{

    position:fixed;

    right:20px;

    bottom:20px;

    width:50px;

    height:50px;

    border:none;

    border-radius:50%;

    background:#b8860b;

    color:white;

    font-size:22px;

    cursor:pointer;

    display:none;

    transition:.3s;

    box-shadow:0 5px 15px rgba(0,0,0,.3);

}

#subir:hover{

    background:#8B6508;

    transform:scale(1.1);

}

/*=============================
      RESPONSIVE
=============================*/

@media(max-width:900px){

header{

flex-direction:column;

gap:15px;

}

nav{

flex-wrap:wrap;

justify-content:center;

}

.inicio{

flex-direction:column;

text-align:center;

}

.card-dia{

flex-direction:column;

text-align:center;

}

.card-dia img{

width:100%;

max-width:400px;

}

.texto-inicio h1{

font-size:38px;

}

.texto-inicio h2{

font-size:24px;

}

.plato{

width:100%;

max-width:320px;

}

}
