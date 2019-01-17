'use strict'


//Toggle menu - responsive 
$('#toggle').click(function(){
     $(this).toggleClass('on');
     $('#resize').toggleClass('active');
});




/* 1.6 LISTADO DINAMICO ARTICULOS */


$('#publicar').submit(function(){

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
  
  /*Almacena la informacion de los articulos en el LocalStorage */
  // localStorage.setItem(post[0].title, JSON.stringify(post[0]));  

  $('input[type="text"]').val('');//Borra los campos una vez se ha dado click en el boton
  $('textarea[type="text"]').val('');//Borra los campos una vez se ha dado click en el boton

 
  return false;
});