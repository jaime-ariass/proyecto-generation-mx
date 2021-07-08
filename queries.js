

// Declarar la variable que solicita la funcion de MYSQL
// mysql es una variable constante con la que vas a identificar la instancia de mysql 
// require es una funcion de javascript que te solita un recurso en este caso MySql
const mysql = require('mysql');

//
const connection = mysql.createConnection({
  host:'localhost', //Host donde esta almacenada nuestra base de datos
  user:'root',    //Usuario con el que vamos a modificar o accesar a la base de datos
  password:'password', 
  database:'proyecto' //Nombre de nuestra base de da
})

//Funcion que nos va a mostrar el tipo de error con nuestras query's al querer modificar nuestra db
connection.connect((err)=>{

  //Si encuentras un error, devuelvelo, QUien lo devuelve = El "THROW" 
  if(err) throw err
  //Si no encuentras algun error escribe en consola el login exitoso
  console.log('la conexion funciona')
})

// insertar informacion a la tabla "usuarios"

//Inser es basicamente INSERT INTO (nombre de nuestra base de datos y la tabla a modificar ) + (atributos que tiene la tabla) + -----Aqui ingresamos los valores con la ayuda de "VALUES" + (Los ingresador por el usuario)

//Me manda a llamar una funcion nativa de MYSQL llamada query(Busqueda) que me solicita en donde lo quiero ingresar y los valores que quiero ingresar, mismos que son asignados en la variable insert

/*  const insert = "INSERT INTO `proyecto`.`usuarios` (`nombre`, `apellido`, `direccion`, `telefono`, `fechaDeNacimiento`, `nacionalidad`, `correo`, `contrasena`, `rol`) VALUES ('oswaldo', 'sanchez', 'nueva york', '0987654321', '2021-07-07', 'MEX', 'osvaldo@gmail.com', 'contra', '1')"
connection.query(insert, (err, rows) => {
  if(err) throw err
}) */


/* connection.query('SELECT * from usuarios', (err,rows) =>{
if(err) throw err
console.log('Los datos de la tabla son estos:')
console.log(rows)
console.log('La cantidad de resultados es:')
console.log(rows.length)
const usuario1 = rows[0]
console.log(`El apellido del usuario es ${usuario1.apellido}`)
}) */
 
// visualizar correo y contrasena de usuarios
/* connection.query('SELECT correo, contrasena from usuarios', (err,rows) =>{
  if(err) throw err
  console.log('Los datos de la tabla son estos:')
  console.log(rows)
  console.log('La cantidad de resultados es:')
  console.log(rows.length)
  const usuario1 = rows[0]
  console.log(`El correo del usuario es ${usuario1.correo}`)
  console.log(`La contraseña del usuario es ${usuario1.contrasena}`)
  })
 */

  // insertar informacion a la tabla "videojuegos"
  /* const insertVideojuego = "INSERT INTO `proyecto`.`videojuegos` (`plataforma`, `sku`, `descripcion`) VALUES ('juego[!]', 'xbox', 'ps es un juego muy chido tmb')"
connection.query(insertVideojuego, (err, rows) => {
  if(err) throw err
}) */

// insertar informacion a la tabla "compra"
const insertCompra = "INSERT INTO `proyecto`.`compra` (`fechaInicio`, `fechaTermino`) VALUES ('2021-07-07', '2021-09-07')"
connection.query(insertCompra, (err, rows) => {
  if(err) throw err
   
})
connection.end()