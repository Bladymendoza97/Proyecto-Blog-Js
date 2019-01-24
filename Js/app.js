'use strict'
 


 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyDkHeZiIg5z0BdQS1buHEOhCjV8M36G6fQ",
  authDomain: "pruebaarticulos.firebaseapp.com",
  databaseURL: "https://pruebaarticulos.firebaseio.com",
  projectId: "pruebaarticulos",
  storageBucket: "pruebaarticulos.appspot.com",
  messagingSenderId: "297787975019"
};
firebase.initializeApp(config);





/* 1.6 LISTADO DINAMICO ARTICULOS */

function getID(id){
  
  return document.getElementById(id).value;
  
}

function inputsTask(id, result){

  return document.getElementById(id).value = result;
  
}

function innerHTML(id, result){
  
  return document.getElementById(id).innerHTML += result;
}


function arrayJSON(id, description){
  var data = {
   
    id : id,
    description : description
  };

  return data;
}

//EN PROCESO
$('#publicar-articulo form').submit(function(){
 
  insertTask();
  
  function insertTask() {
    
    var id = getID("id");
    var description = getID("description");
  
    if (id.length == 0 || description.length == 0) {
      alert('Estos campos están vacíos')
    }else{
      var arrayData = arrayJSON(id, description);
     
      var task = firebase.database().ref("task/" + id);
      task.set(arrayData);
      alert('Ha sido guardado correctamente');
      inputsTask("id", "");
      inputsTask("description", "");

    }
    
  }

  return false;


});


  function article(id, description) {

    return  `
   
    <section class="post">
         <h2>${id}</h2>
         <p>${description}</p>
         <a href="#" class="button-more">Leer más</a>
         <br>
          <section id="sectionIcon_article">
                <i class="fas fa-trash-alt icon-edit-delet"></i>
                <i class="fas fa-edit icon-edit-delet"></i>
          </section>
    </section> 
    
    <br>

    
    ` ;
    
  }

  function watchTask() {
    
    var task = firebase.database().ref("task/");

    task.on("child_added", function(data){

      var taskValue = data.val();
      var result = article(taskValue.id, taskValue.description);
      innerHTML("posts", result);
    });
  }



  // e.preventDefault();
  // var article = 
  //  {
    //    title:$('input[name="titulo"]').val(),
    //    date: 'Publicado el ' + moment().date() + ' de ' + moment().format('MMMM YYYY') + '<br>' + 'a las ' + moment().format('h:mm a') , //libreria moment js
    //    content:$('textarea[name="contenido"]').val()  
    
    //  };
    
    //  var enviado_json = localStorage.setItem("article", JSON.stringify(article));
    
    //  console.log(enviado_json);
    
    //  var datos_obtenidos = JSON.parse(localStorage.getItem("article"));
    //  console.log(datos_obtenidos);
    //  for (var i in localStorage) {
      //    var post = `
      //    <section class="post">
      //    <h2>${article.title}</h2>
      //    <small class="fecha">${article.date}</small>
      //    <p>${article.content}</p>
      //    <a href="#" class="button-more">Leer más</a>
      //    </section>
      //    `;     
      //    $('#posts').append(post);//Muestra los articulos en el body
      
      //  };
      //  return false;
    
    
    // Toggle menu - responsive 
    $('#toggle').click(function(){
         $(this).toggleClass('on');
         $('#resize').toggleClass('active');
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

$(document).ready(function(){

  $.validate({
    lang: 'es',
    validateOnBlur : true , // inhabilita la validación cuando la entrada pierde focus 
    errorMessagePosition : 'top', // En lugar de 'inline', que es el valor predeterminado 
    scrollToTopOnError : true ,
  });

});




 