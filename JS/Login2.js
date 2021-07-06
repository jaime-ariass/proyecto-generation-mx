function usuarios() {
    var ListaUsuarios = JSON-parseFloat(localStorage.getItem('LUsuarios'));

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
        ListaUsuarios = ['1','Osvaldo', 'Sanchez', 'osvaldoc2704@gmail.com', 'nodejes4915', '1997-04-27', '1']
    }
}