'use strict'
 
// Toggle menu - responsive 
$('#toggle').click(function(){
     $(this).toggleClass('on');
     $('#resize').toggleClass('active');
});




/* 1.6 LISTADO DINAMICO ARTICULOS */


$('#publicar').submit(function(e){
  
  
  e.preventDefault();//



    
    var post = [
     {
       title:$('input[name="titulo"]').val(),
       date: 'Publicado el ' + moment().date() + ' de ' + moment().format('MMMM YYYY') + '<br>' + 'a las ' + moment().format('h:mm a') , //libreria moment js
       content:$('textarea[name="contenido"]').val()  
   
     },
 
    ];


    console.log(post[0]);
    
     
     post.forEach((item, index) => {
       var post = `
       <section class="post">
       <h2>${item.title}</h2>
       <small class="fecha">${item.date}</small>
       <p>${item.content}</p>
       <a href="#" class="button-more">Leer más</a>
       </section>
       
       `;     
       $('#posts').append(post);//Muestra los articulos en el body
       
       
      });
      
      
      localStorage.setItem(post[0].title, JSON.stringify(post[0]));
  
  /*Almacena la informacion de los articulos en el LocalStorage */
 
  $('input[type="text"]').val('');//Borra los campos una vez se ha dado click en el boton
  $('textarea[type="text"]').val('');//Borra los campos una vez se ha dado click en el boton
  
  
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
  
  $('#logout').click(function(){

    about_p.removeClass('borde-login');
    
    localStorage.clear();
    location.reload();
    
  });
}

// else{
//   swal({
//     position: 'center',
//     type: 'error',
//     title: 'Vuelva a Intentarlo',
//     text: 'Los Campos no son validos!',
//     footer: '<a href="https://www.youtube.com">Por qué tengo este problema?</a>'
//   })
// }
