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
