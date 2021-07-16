document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

function iniciarSesion(){
   var sCorreo = '';
   var sContrasena = '';

   sCorreo = document.getElementById('user').value;
   console.log(sCorreo);
   sContrasena = document.getElementById('psw1').value;
   console.log(sContrasena);

  // sCorreo = user.value;
  // sContrasena = psw.value;

   bAcceso = validarCredenciales(sCorreo, sContrasena);
   if(bAcceso == true) {
      ingresar();
   }
}

function ingresar(){
    var rol = localStorage.getItem('rolUsuarioActivo');
   switch(rol){
      case '1':
         alert("Bienvenido admin");
         window.location.href = "../index.html";
         break;
      case '2':
         alert("Bienvenido usuario");
         window.location.href =  "../index.html";
         break;
      default: 
         window.location.href = "../contact.html";
      break;
   } 
}