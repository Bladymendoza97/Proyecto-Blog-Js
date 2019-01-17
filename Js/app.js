'use strict'


//Toggle menu - responsive 
$('#toggle').click(function(){
     $(this).toggleClass('on');
     $('#resize').toggleClass('active');
});




/* 1.6 LISTADO DINAMICO ARTICULOS */


$(document).ready(function(){

 var post = [
   {
     title:'Angular Cli',
     date: 'Publicado el ' + moment().date() + ' de ' + moment().format('MMMM YYYY'),//libreria moment js
     content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facilis labore natus consectetur autem sit omnis dolor maxime nulla laudantium itaque sed ipsa eos iusto sint commodi quis asperiores tempore laboriosam assumenda dolorem id. Hic provident quaerat minima, excepturi soluta culpa dolore ex harum illum, corrupti libero recusandae molestias fugit atque, veritatis sequi ut minus nesciunt doloribus? Culpa quam dolore quas reiciendis ratione! Blanditiis facilis quis quia laboriosam. Facilis molestias consectetur consequuntur accusamus est adipisci ducimus voluptate eos, nobis quam natus doloremque. Molestiae, molestias omnis?'

   },
   {
    title:'Node Js',
    date: 'Publicado el ' + moment().date() + ' de ' + moment().format('MMMM YYYY'), //libreria moment js
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facilis labore natus consectetur autem sit omnis dolor maxime nulla laudantium itaque sed ipsa eos iusto sint commodi quis asperiores tempore laboriosam assumenda dolorem id. Hic provident quaerat minima, excepturi soluta culpa dolore ex harum illum, corrupti libero recusandae molestias fugit atque, veritatis sequi ut minus nesciunt doloribus? Culpa quam dolore quas reiciendis ratione! Blanditiis facilis quis quia laboriosam. Facilis molestias consectetur consequuntur accusamus est adipisci ducimus voluptate eos, nobis quam natus doloremque. Molestiae, molestias omnis?'

  },
  {
    title:'Ionic 2 y 3',
    date: 'Publicado el ' + moment().date() + ' de ' + moment().format('MMMM YYYY'), //libreria moment js     
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facilis labore natus consectetur autem sit omnis dolor maxime nulla laudantium itaque sed ipsa eos iusto sint commodi quis asperiores tempore laboriosam assumenda dolorem id. Hic provident quaerat minima, excepturi soluta culpa dolore ex harum illum, corrupti libero recusandae molestias fugit atque, veritatis sequi ut minus nesciunt doloribus? Culpa quam dolore quas reiciendis ratione! Blanditiis facilis quis quia laboriosam. Facilis molestias consectetur consequuntur accusamus est adipisci ducimus voluptate eos, nobis quam natus doloremque. Molestiae, molestias omnis?'

  },
  {
    title:'Laravel',
    date: 'Publicado el ' + moment().date() + ' de ' + moment().format('MMMM YYYY'), //libreria moment js
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facilis labore natus consectetur autem sit omnis dolor maxime nulla laudantium itaque sed ipsa eos iusto sint commodi quis asperiores tempore laboriosam assumenda dolorem id. Hic provident quaerat minima, excepturi soluta culpa dolore ex harum illum, corrupti libero recusandae molestias fugit atque, veritatis sequi ut minus nesciunt doloribus? Culpa quam dolore quas reiciendis ratione! Blanditiis facilis quis quia laboriosam. Facilis molestias consectetur consequuntur accusamus est adipisci ducimus voluptate eos, nobis quam natus doloremque. Molestiae, molestias omnis?'

  },
 ];

  post.forEach((item, index) => {
    var post = `
              <section class="post">
                  <h2>${item.title}</h2>
                  <small class="fecha">${item.date}</small>
                  <p>${item.content}</p>
                  <a href="#" class="button-more">Leer más</a>
              </section>

          `;     

          $('#posts').append(post);
  });
 
  
});