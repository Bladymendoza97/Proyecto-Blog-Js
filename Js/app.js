'use strict'
 
// Toggle menu - responsive 
$('#toggle').click(function(){
     $(this).toggleClass('on');
     $('#resize').toggleClass('active');
});




/* 1.6 LISTADO DINAMICO ARTICULOS */


//NO FUNCIONA CORRECTAMENTE
$('#publicar-articulo form').submit(function(e){

  e.preventDefault();
  
    
  var article = 
   {
     title:$('input[name="titulo"]').val(),
     date: 'Publicado el ' + moment().date() + ' de ' + moment().format('MMMM YYYY') + '<br>' + 'a las ' + moment().format('h:mm a') , //libreria moment js
     content:$('textarea[name="contenido"]').val()  
 
   };


   var enviado_json = localStorage.setItem("article", JSON.stringify(article));
   
   console.log(enviado_json);

  
   
   var datos_obtenidos = JSON.parse(localStorage.getItem("article"));

   console.log(datos_obtenidos);


   for (var i in localStorage) {

     var post = `
     <section class="post">
     <h2>${article.title}</h2>
     <small class="fecha">${article.date}</small>
     <p>${article.content}</p>
     <a href="#" class="button-more">Leer más</a>
     </section>
     
     `;     
     $('#posts').append(post);//Muestra los articulos en el body
     
     
   };

   return false;
  });
  
  
  

/* 1.7 SELECTOR DE TEMAS */


// var theme = $('#theme'); 
// $('#to-green').click(function(){
//    theme.attr('href', 'css/green.css')
// });

// $('#to-blue').click(function(){
//   theme.attr('href', 'css/blue.css')
// });




/* 1.8 SCROLL GO UP*/

$('.subir').click(function(e){
  e.preventDefault();

   $('html , body').animate({
       scrollTop: 0
   }, 'slow' );

   return false;
});




/* 1.9 IDENTIFICACION LOCALSTORAGE*/


$('#login form').submit(function(){

 

  var form_name =  $('#form_name').val();
  var form_apellido = $('#form_apellido').val()
 
    localStorage.setItem('form_name', form_name);
    localStorage.setItem('form_apellido', form_apellido);
  
   
});

var form_name = localStorage.getItem('form_name');
var form_apellido = localStorage.getItem('form_apellido');

if (form_name != null && form_name != undefined || form_apellido != null && form_apellido != undefined ) {

  swal({
    position: 'center',
    type: 'success',
    title: 'Buen trabajo!',
    text: 'Te has Registrado!',
    showConfirmButton: false,
    timer: 3000
  })
  
  var about_p = $('#perfil-login article');
  about_p.html('<br><h2>Bienvenido <br> '+ form_name + "  " + form_apellido + '</h2>').addClass('perfil_login') 

  about_p.append("<br><button type='text' id='logout'>Cerrar Sessión</button>");
  $('#login form').hide();
  
}

 

$('#logout').click(function(){


  
  localStorage.clear();
  location.reload();

  alert('Sessión Finalizada')
});

// Swal({
  //   position: 'center',
  //   type: 'success',
  //   title: 'Sessión finalizada',
  //   showConfirmButton: false,
  //   timer: 3000
  // })
 

/* 2.0 ACORDEON*/

/*2.1 RELOJ DINAMICO*/ 




 