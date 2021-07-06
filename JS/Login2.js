function usuarios() {
    var ListaUsuarios = JSON.parseFloat(localStorage.getItem('LUsuarios'));

    if (ListaUsuarios == null) {

        /* 
            Valores
            1° Id
            2° Nombre
            3° Apellido
            4° Correo
            5° Contraseña
            6° Fecha
            7° Rol = 1) Administrador 2) Usuario
        */
        ListaUsuarios = ['1','Osvaldo', 'Sanchez', 'osvaldo@gmail.com', 'exgames01', '1997-04-27', '1'] , ['1','Miriam', 'Rivera', 'miriam@gmail.com', 'exgames02', '1997-04-27', '1'] ,['1','armando', 'legos', 'mandolegos@gmail.com', 'lego21', '1997-04-27', '2']
    }
    return ListaUsuarios;
}

function validcion(inCorreo, inContra) {
    var ListaUsuarios = usuarios();
    var accesoU = false;
    
    for (var i = 0; i < ListaUsuarios.length; i++) {
        if (inCorreo == ListaUsuarios[i][3] && inContra == ListaUsuarios[i][4]){
            accesoU = true;
            localStorage.setItem('UsuarioAct', ListaUsuarios[i][1] + ListaUsuarios[i][2]);
            localStorage.setItem('RolUsuario', ListaUsuarios[i][6]);
        
        }
        
    }
    return accesoU;
}