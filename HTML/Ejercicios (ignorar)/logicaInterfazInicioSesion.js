
login.addEventListener('click', iniciarSesion)

function iniciarSesion(){
   var sCorreo = '';
   var sContrasena = '';

   sCorreo = document.getElementById('user')
   sContrasena = document.getElementById('psw1')
   console.log(sCorreo.value)
   bAcceso = validarCredenciales(sCorreo.value, sContrasena.value);
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