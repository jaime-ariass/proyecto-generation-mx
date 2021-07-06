document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

function iniciarSesion(){
   var sCorreo = '';
   var sContrasena = '';

   sCorreo = document.querySelector('#txtCorreo').value;
   sContrasena = document.querySelector('#txtContrasena').value;

   bAcceso = validarCredenciales(sCorreo, sContrasena);
   if(bAcceso == true) {
      ingresar();
   }
}

function ingresar(){
   var rol = localStorage.getItem('rolUsuarioActivo');
   switch(rol){
      case '1':
         window.location.href = "../index.html";
         break;
      case '2':
         window.location.href =  "http://www.google.com";
         break;
      default: 
         window.location.href = "../contact.html";
      break;
   }
}