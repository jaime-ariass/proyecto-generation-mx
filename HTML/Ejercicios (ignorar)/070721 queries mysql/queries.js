const mysql = require('mysql')

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'password',
  database:'proyecto'
})

connection.connect((err)=>{
  if(err) throw err
  console.log('la conexion funciona')
})

// insertar informacion a la tabla "usuarios"
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
  /* const insertVideojuego = "INSERT INTO `proyecto`.`videojuegos` (`plataforma`, `sku`, `descripcion`) VALUES ('halo 3', 'xbox', 'ps es un juego muy chido tmb')"
connection.query(insertVideojuego, (err, rows) => {
  if(err) throw err
}) */

// insertar informacion a la tabla "compra"
const insertCompra = "INSERT INTO `proyecto`.`compra` (`fechaInicio`, `fechaTermino`) VALUES ('2021-07-07', '2021-08-07')"
connection.query(insertCompra, (err, rows) => {
  if(err) throw err
})
connection.end()