
  const mysql = require("mysql");

  //
  const connection = mysql.createConnection({
    host: "localhost", //Host donde esta almacenada nuestra base de datos
    user: "root", //Usuario con el que vamos a modificar o accesar a la base de datos
    password: "password",
    database: "proyecto", //Nombre de nuestra base de datos
  });

  //Funcion que nos va a mostrar el tipo de error con nuestras query's al querer modificar nuestra db
  connection.connect((err) => {
    //Si encuentras un error, devuelvelo, QUien lo devuelve = El "THROW"
    if (err) throw err;
    //Si no encuentras algun error escribe en consola el login exitoso
    console.log("la conexion funciona");
  });

  connection.end();

  
 /* function usuarios() {
  var usuario = connection.query('select * from usuarios[0]');
  console.log(usuario);
  connection.end();
}*/

  /* var ListaUsuarios = JSON.parseFloat(localStorage.getItem("LUsuarios"));

  if (ListaUsuarios == null) { */
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
    /* (ListaUsuarios = [
      "1",
      "Osvaldo",
      "Sanchez",
      "osvaldo@gmail.com",
      "exgames01",
      "1997-04-27",
      "1",
    ]),
      [
        "1",
        "Miriam",
        "Rivera",
        "miriam@gmail.com",
        "exgames02",
        "1997-04-27",
        "1",
      ],
      [
        "1",
        "armando",
        "legos",
        "mandolegos@gmail.com",
        "lego21",
        "1997-04-27",
        "2",
      ];
  }
  return ListaUsuarios;
}

function validacion(inCorreo, inContra) {
  var ListaUsuarios = usuarios();
  var accesoU = false;

  for (var i = 0; i < ListaUsuarios.length; i++) {
    if (inCorreo == ListaUsuarios[i][3] && inContra == ListaUsuarios[i][4]) {
      accesoU = true;
      localStorage.setItem(
        "UsuarioAct",
        ListaUsuarios[i][1] + ListaUsuarios[i][2]
      );
      localStorage.setItem("RolUsuario", ListaUsuarios[i][6]);
    }
  }
  return accesoU;
}
 */