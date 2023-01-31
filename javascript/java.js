$(document).ready(function() {
  $("#hamburger-menu-button").click(function() {
    $("#hamburger-menu").toggle();
  });
});




//boton subir

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#top-button').fadeIn();
    } else {
      $('#top-button').fadeOut();
    }
  });
  
  $('#top-button').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

document.getElementById("top-button").addEventListener("click", function(){
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
});

//Prueba menu hamb NO ANDA

//Prueba click bajar más lento

$(document).ready(function(){
  $(".menuprincipal").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
        window.location.hash = hash;
      });
    }
  });
});


//contacto

document.getElementById("formulariocontacto").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var name = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("mensaje").value;
  console.log("Nombre: " + nombre + "\nEmail: " + email + "\nMensaje: " + mensaje);
});
