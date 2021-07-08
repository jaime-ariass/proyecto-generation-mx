function obtenerListaUsuarios() { 
   var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs')); //esto de donde viene?

   if(listaUsuarios == null){
      listaUsuarios = 
      [
         //id, nombre, apellido, correo, contrasena, fecha nac, rol
         ['1', 'Pabs', 'Monestel', 'pablo.monestel@gmail.com', 'lpablo9', '1987-10-23', '1'], 
         ['2', 'Olman', 'Santamaria', 'olman@gmail.com', 'lolman9', '1993-04-17', '2']
      ]
   }
   return listaUsuarios;
}

function validarCredenciales(pCorreo, pContrasena){
   var listaUsuarios = obtenerListaUsuarios();
   var bAcceso = false;

   for(var i = 0; i < listaUsuarios.length; i++) {
      if(pCorreo == listaUsuarios[i][3] && pContrasena == listaUsuarios[i][4]) {
         bAcceso = true;
         localStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
         localStorage.setItem('rolUsuarioActivo', listaUsuarios[i][6]);
      }
   }
   return bAcceso;
}